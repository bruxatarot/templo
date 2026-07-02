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

// ── Saldo ──
function get(){ return parseInt(localStorage.getItem('starbits')||'0') }
function setSaldo(n){ localStorage.setItem('starbits', String(Math.max(0,n))); notificar(); guardarNube() }
function add(n, label){
  setSaldo(get()+n);
  if(n>0 && label) toast(`+${n} ⭐ ${label}`);
}
function gastar(n){
  if(get() < n) return false;
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

// ── Sincronización con la cuenta ──
let _syncListo = false, _guardarTimer = null;
function _nubeUrl(){
  const uid = window._fbUser?.uid;
  return uid ? `${FB_URL}/templo/usuarios/${uid}/guardianes.json` : null;
}
function guardarNube(){
  const url = _nubeUrl();
  if(!url || !_syncListo) return;
  clearTimeout(_guardarTimer);
  _guardarTimer = setTimeout(()=>{
    fetch(url, {method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        starbits: get(),
        mascotas: owned(),
        mascota_sel: getSel(),
        premios: lsGet('sb_premios', {}),
        racha: lsGet('sb_racha', {last:'',n:0}),
        ts: Date.now()
      })
    }).catch(()=>{});
  }, 600);
}
async function cargarNube(){
  const url = _nubeUrl();
  if(!url){ _syncListo = false; return; }
  try{
    const res = await fetch(url);
    const nube = await res.json();
    if(nube){
      localStorage.setItem('starbits', String(Math.max(get(), parseInt(nube.starbits||0))));
      const unidas = [...new Set([...(nube.mascotas||[]), ...owned()])];
      lsSet('mascotas', unidas);
      if(nube.mascota_sel && !getSel()) localStorage.setItem('mascota_sel', nube.mascota_sel);
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
window.Starbits = { get, add, gastar, premiar, racha, owned, addPet, getSel, setSel,
  onChange: cb => cambioCbs.push(cb), toast, EVENTOS };

// ── Al cargar: racha + bono de visita ──
function iniciar(){
  actualizarRacha();
  premiar('visita');
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
else iniciar();

})();
