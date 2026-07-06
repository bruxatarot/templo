// =====================================================
// BRUXA TAROT — SISTEMA STARBITS ⭐
// Economía del Templo compartida entre todas las páginas.
// Uso: <script src="js/starbits.js"></script>
//
//   Starbits.get()               → saldo actual
//   Starbits.premiar('carta')    → otorga según reglas/límites
//   Starbits.gastar(n)           → resta (tienda)
//   Starbits.racha()             → {dias, hoy}
//   Starbits.owned()/addPet(k)   → guardianes adoptados
//   Starbits.getSel()/setSel(k)  → guardián elegido
//   Starbits.onChange(cb)        → re-render al cambiar saldo
//
// Sincroniza con la cuenta Firebase (via authchange de auth-chip.js)
// en /templo/usuarios/{uid}/guardianes — la cuenta del Diario
// acompaña al alma en todas las páginas y dispositivos.
// =====================================================
(function(){

const FB_URL = 'https://diario-del-alma-default-rtdb.firebaseio.com';

// ── Reglas de premios ──
// limite: 'dia' = una vez al día · 'semana' = una vez por semana
//         'unavez' = una sola vez en la vida · max = tope diario
const EVENTOS = {
  visita:   {sb:2,  limite:'dia',    label:'por visitar el Templo 🏛️'},
  carta:    {sb:1,  limite:'dia',    label:'carta del día 🃏'},
  diario:   {sb:3,  limite:'dia',    label:'entrada en tu Diario 📖'},
  deseo:    {sb:5,  limite:'semana', label:'deseo al Pozo ⭐'},
  tirada:   {sb:2,  limite:'dia',    label:'tirada del Oráculo 🔮'},
  muro:     {sb:5,  limite:'dia',    label:'mensaje al Muro 💌'},
  luz:      {sb:1,  limite:'dia',    label:'luz a otra alma 🕯️', max:5},
  test:     {sb:10, limite:'unavez', label:'Test Luz y Sombra 🌓'},
  historia: {sb:1,  limite:'dia',    label:'lectura mágica 📚'},
  caricia:  {sb:1,  limite:'dia',    label:'cariñito a tu guardián 💞', max:3},
  racha7:   {sb:7,  limite:'auto',   label:'¡7 días seguidos! 🔥'},
};

// ── Storage helpers ──
const hoy = () => new Date().toDateString();
const semana = () => { const d=new Date(); const y=d.getFullYear();
  const w=Math.floor((d - new Date(y,0,1)) / 604800000); return `${y}-${w}` };
function lsGet(k, def){ try{ return JSON.parse(localStorage.getItem(k)) ?? def }catch(e){ return def } }
function lsSet(k, v){ localStorage.setItem(k, JSON.stringify(v)) }

let cambioCbs = [];
function notificar(){ cambioCbs.forEach(cb=>{ try{cb()}catch(e){} }) }

// ── Historial de movimientos (tesoro del alma) ──
function historial(){ return lsGet('sb_hist', []) }
function registrar(tipo, n, motivo){
  const h = historial();
  h.unshift({t: tipo, n: n, m: motivo || '', ts: Date.now()});
  lsSet('sb_hist', h.slice(0, 120));
}

// ── Saldo ──
function get(){ return parseInt(localStorage.getItem('starbits')||'0') }
function setSaldo(n){ localStorage.setItem('starbits', String(Math.max(0,n))); notificar(); guardarNube() }
function add(n, label){
  if(n>0) registrar('gano', n, label || '');
  setSaldo(get()+n);
  if(n>0 && label) toast(`+${n} ⭐ ${label}`);
}
function gastar(n, motivo){
  if(get() < n) return false;
  registrar('gasto', n, motivo || 'compra en la Tienda');
  setSaldo(get()-n);
  return true;
}

// ── Premios con límites ──
function premiar(evento){
  const cfg = EVENTOS[evento];
  if(!cfg) return false;
  const premios = lsGet('sb_premios', {});
  const p = premios[evento] || {};

  if(cfg.limite === 'unavez' && p.once) return false;
  if(cfg.limite === 'dia'){
    if(p.d === hoy() && (p.n||0) >= (cfg.max||1)) return false;
    if(p.d !== hoy()){ p.d = hoy(); p.n = 0 }
    p.n = (p.n||0) + 1;
  }
  if(cfg.limite === 'semana'){
    if(p.w === semana()) return false;
    p.w = semana();
  }
  if(cfg.limite === 'unavez') p.once = true;

  premios[evento] = p;
  lsSet('sb_premios', premios);
  add(cfg.sb, cfg.label);
  return true;
}

// ── Racha de días ──
function actualizarRacha(){
  const r = lsGet('sb_racha', {last:'', n:0});
  const h = hoy();
  if(r.last === h) return r;
  const ayer = new Date(Date.now()-86400000).toDateString();
  r.n = (r.last === ayer) ? r.n + 1 : 1;
  r.last = h;
  lsSet('sb_racha', r);
  if(r.n > 0 && r.n % 7 === 0){
    add(EVENTOS.racha7.sb, EVENTOS.racha7.label + ` (${r.n} días)`);
  }
  return r;
}
function racha(){ return lsGet('sb_racha', {last:'', n:0}) }

// ── Nivel de evolución del guardián (según la racha) ──
function nivel(){
  const n = racha().n || 0;
  return n >= 30 ? 3 : n >= 7 ? 2 : 1;
}
function chequearEvolucion(){
  const nv = nivel();
  const visto = parseInt(localStorage.getItem('pnivel_visto')||'1');
  if(nv > visto){
    localStorage.setItem('pnivel_visto', String(nv));
    const nombres = {2:'Despierto 🌟', 3:'Ancestral 👑'};
    setTimeout(()=>toast(`✦ ¡Tu guardián ha evolucionado a ${nombres[nv]}!`), 1600);
  }
}

// ── Progreso de premios: qué llevas hoy y qué falta ──
function progreso(){
  const premios = lsGet('sb_premios', {});
  const out = {};
  Object.entries(EVENTOS).forEach(([ev, cfg])=>{
    if(cfg.limite === 'auto') return;
    const p = premios[ev] || {};
    let hecho = 0;
    const max = cfg.max || 1;
    if(cfg.limite === 'dia')    hecho = (p.d === hoy()) ? (p.n||0) : 0;
    if(cfg.limite === 'semana') hecho = (p.w === semana()) ? 1 : 0;
    if(cfg.limite === 'unavez') hecho = p.once ? 1 : 0;
    out[ev] = {label: cfg.label, sb: cfg.sb, limite: cfg.limite, max, hecho,
               completo: hecho >= max};
  });
  return out;
}

// ── Guardianes ──
function owned(){
  let o = lsGet('mascotas', []);
  if(!o.includes('vela')) o.unshift('vela');
  return o;
}
function addPet(key){
  const o = owned();
  if(!o.includes(key)){ o.push(key); lsSet('mascotas', o); guardarNube() }
}
function getSel(){ return localStorage.getItem('mascota_sel') || '' }
function setSel(key){ localStorage.setItem('mascota_sel', key||''); guardarNube() }

// ── Skins de pergamino ──
function ownedSkins(){
  let o = lsGet('skins', []);
  if(!o.includes('pergamino')) o.unshift('pergamino');
  return o;
}
function addSkin(key){
  const o = ownedSkins();
  if(!o.includes(key)){ o.push(key); lsSet('skins', o); guardarNube() }
}
function getSkin(){ return localStorage.getItem('skin_sel') || 'pergamino' }
function setSkin(key){ localStorage.setItem('skin_sel', key||'pergamino'); guardarNube() }

// ── Auras del guardián ──
function ownedAuras(){ return lsGet('auras', []) }
function addAura(key){
  const o = ownedAuras();
  if(!o.includes(key)){ o.push(key); lsSet('auras', o); guardarNube() }
}
function getAura(){ return localStorage.getItem('aura_sel') || '' }
function setAura(key){ localStorage.setItem('aura_sel', key||''); guardarNube() }

// ── Colores del guardián ──
function ownedColores(){
  let o = lsGet('pcolores', []);
  if(!o.includes('natural')) o.unshift('natural');
  return o;
}
function addColor(key){
  const o = ownedColores();
  if(!o.includes(key)){ o.push(key); lsSet('pcolores', o); guardarNube() }
}
function getColor(){ return localStorage.getItem('pcolor_sel') || 'natural' }
function setColor(key){ localStorage.setItem('pcolor_sel', key||'natural'); guardarNube() }

// ── Variantes por guardián (ej. "vela:azul") ──
function ownedVars(){ return lsGet('pvars', []) }
function addVar(pet, v){
  const o = ownedVars(); const k = pet + ':' + v;
  if(!o.includes(k)){ o.push(k); lsSet('pvars', o); guardarNube() }
}
function getVar(pet){ const m = lsGet('pvars_sel', {}); return m[pet] || '' }
function setVar(pet, v){
  const m = lsGet('pvars_sel', {});
  if(v) m[pet] = v; else delete m[pet];
  lsSet('pvars_sel', m); guardarNube();
}

// ── Emociones del alma (la de hoy) ──
function ownedEmos(){
  let o = lsGet('pemos', []);
  if(!o.includes('feliz')) o.unshift('feliz');
  return o;
}
function addEmo(key){
  const o = ownedEmos();
  if(!o.includes(key)){ o.push(key); lsSet('pemos', o); guardarNube() }
}
function getEmo(){ return localStorage.getItem('pemo_sel') || 'feliz' }
function setEmo(key){ localStorage.setItem('pemo_sel', key||'feliz'); guardarNube() }

// ── Sincronización con la cuenta ──
let _syncListo = false, _guardarTimer = null;
function _nubeUrl(){
  const uid = window._fbUser?.uid;
  return uid ? `${FB_URL}/templo/usuarios/${uid}/guardianes.json` : null;
}
// Token de sesión: las reglas de la base exigen auth para /usuarios
async function _authParam(){
  try{
    const u = window._fbUser;
    if(!u?.getIdToken) return '';
    return '?auth=' + await u.getIdToken();
  }catch(e){ return '' }
}
function guardarNube(){
  const url = _nubeUrl();
  if(!url || !_syncListo) return;
  clearTimeout(_guardarTimer);
  _guardarTimer = setTimeout(async ()=>{
    const tk = await _authParam();
    fetch(url + tk, {method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        starbits: get(),
        mascotas: owned(),
        mascota_sel: getSel(),
        skins: ownedSkins(),
        skin_sel: getSkin(),
        auras: ownedAuras(),
        aura_sel: getAura(),
        pcolores: ownedColores(),
        pcolor_sel: getColor(),
        pemos: ownedEmos(),
        pemo_sel: getEmo(),
        pvars: ownedVars(),
        pvars_sel: lsGet('pvars_sel', {}),
        premios: lsGet('sb_premios', {}),
        racha: lsGet('sb_racha', {last:'',n:0}),
        hist: historial().slice(0, 120),
        ts: Date.now()
      })
    }).catch(()=>{});
  }, 600);
}
async function cargarNube(){
  const url = _nubeUrl();
  if(!url){ _syncListo = false; return; }
  try{
    const res = await fetch(url + await _authParam());
    const nube = await res.json();
    if(nube){
      localStorage.setItem('starbits', String(Math.max(get(), parseInt(nube.starbits||0))));
      const unidas = [...new Set([...(nube.mascotas||[]), ...owned()])];
      lsSet('mascotas', unidas);
      if(nube.mascota_sel && !getSel()) localStorage.setItem('mascota_sel', nube.mascota_sel);
      lsSet('skins', [...new Set([...(nube.skins||[]), ...ownedSkins()])]);
      if(nube.skin_sel && getSkin()==='pergamino') localStorage.setItem('skin_sel', nube.skin_sel);
      lsSet('auras', [...new Set([...(nube.auras||[]), ...ownedAuras()])]);
      if(nube.aura_sel && !getAura()) localStorage.setItem('aura_sel', nube.aura_sel);
      lsSet('pcolores', [...new Set([...(nube.pcolores||[]), ...ownedColores()])]);
      if(nube.pcolor_sel && getColor()==='natural') localStorage.setItem('pcolor_sel', nube.pcolor_sel);
      lsSet('pemos', [...new Set([...(nube.pemos||[]), ...ownedEmos()])]);
      if(nube.pemo_sel && getEmo()==='feliz') localStorage.setItem('pemo_sel', nube.pemo_sel);
      lsSet('pvars', [...new Set([...(nube.pvars||[]), ...ownedVars()])]);
      const vsLoc = lsGet('pvars_sel', {});
      Object.entries(nube.pvars_sel||{}).forEach(([k,v])=>{ if(!vsLoc[k]) vsLoc[k]=v });
      lsSet('pvars_sel', vsLoc);
      // Fusionar premios: conservar límites más restrictivos (evita doble premio entre dispositivos)
      const locP = lsGet('sb_premios', {}), nubeP = nube.premios || {};
      Object.keys(nubeP).forEach(ev=>{
        const a = locP[ev]||{}, b = nubeP[ev];
        locP[ev] = {
          once: a.once || b.once || undefined,
          d: (b.d===hoy()) ? b.d : a.d, n: Math.max(a.d===hoy()?a.n||0:0, b.d===hoy()?b.n||0:0) || undefined,
          w: (b.w===semana()) ? b.w : a.w,
        };
      });
      lsSet('sb_premios', locP);
      // Racha: la mayor
      const locR = lsGet('sb_racha',{last:'',n:0}), nubeR = nube.racha||{last:'',n:0};
      if((nubeR.n||0) > locR.n) lsSet('sb_racha', nubeR);
      // Historial: fusionar por timestamp
      const vistos = new Set(historial().map(x=>x.ts));
      const fusion = [...historial(), ...(nube.hist||[]).filter(x=>!vistos.has(x.ts))]
        .sort((a,b)=>b.ts-a.ts).slice(0,120);
      lsSet('sb_hist', fusion);
    }
    _syncListo = true;
    guardarNube();
    notificar();
  }catch(e){ _syncListo = false }
}
document.addEventListener('authchange', e=>{
  if(e.detail.user) cargarNube();
  else _syncListo = false;
});

// ── Toast ──
function toast(txt){
  let t = document.getElementById('sbToastGlobal');
  if(!t){
    t = document.createElement('div');
    t.id = 'sbToastGlobal';
    t.style.cssText = `position:fixed;top:4.6rem;left:50%;transform:translateX(-50%) translateY(-16px);
      z-index:9999;font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.15em;
      padding:.7rem 1.5rem;border-radius:100px;background:rgba(30,20,56,.96);
      border:1px solid rgba(255,215,90,.5);color:#ffe6a0;
      box-shadow:0 0 22px rgba(255,215,90,.25);opacity:0;pointer-events:none;
      transition:all .4s;white-space:nowrap`;
    document.body.appendChild(t);
  }
  t.textContent = txt;
  t.style.opacity = '1';
  t.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>{
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(-16px)';
  }, 2800);
}

// ── API pública ──
window.Starbits = { get, add, gastar, premiar, racha, nivel, owned, addPet, getSel, setSel,
  ownedSkins, addSkin, getSkin, setSkin,
  ownedAuras, addAura, getAura, setAura,
  ownedColores, addColor, getColor, setColor,
  ownedEmos, addEmo, getEmo, setEmo,
  ownedVars, addVar, getVar, setVar,
  historial, progreso,
  onChange: cb => cambioCbs.push(cb), toast, EVENTOS };

// ── Al cargar: racha + bono de visita ──
function iniciar(){
  actualizarRacha();
  premiar('visita');
  chequearEvolucion();
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
else iniciar();

})();
