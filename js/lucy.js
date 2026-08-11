/* ═══════════════════════════════════════════════════════════════════
   LUCY · LA LUCIÉRNAGA FUNDADORA
   Guardiana exclusiva de las primeras 20 almas del Templo.
   Nunca se venderá ni se entregará en eventos.

   Cómo funciona:
   1. Al entrar por primera vez, una TRANSACCIÓN de Firestore asigna
      a esa alma su número correlativo (1, 2, 3…). Es atómica: aunque
      tres almas se registren en el mismo segundo, nadie repite número
      ni se salta ninguno.
   2. Si el número es ≤ 20 → Lucy es suya para siempre.
   3. Lucy vuela por la pantalla solo para sus almas fundadoras.

   Para cambiar cuántos lugares hay, edita CUPOS.
   ═══════════════════════════════════════════════════════════════════ */
import { getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, runTransaction, getDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const CUPOS = 20;
const LS_NUM = 'alma_numero';
const LS_FUND = 'alma_fundadora';

/* ── esperar a que auth-chip.js haya encendido Firebase ── */
function esperarApp(){
  return new Promise(function(res){
    let n = 0;
    const t = setInterval(function(){
      if(getApps().length){ clearInterval(t); res(getApp()); }
      if(++n > 60){ clearInterval(t); res(null); }
    }, 400);
  });
}

/* ── asignar número de alma (una sola vez por alma) ── */
async function asignarNumero(db, uid){
  const refContador = doc(db, 'meta', 'almas');
  const refPerfil   = doc(db, 'perfiles', uid);
  return runTransaction(db, async function(tx){
    const perfil = await tx.get(refPerfil);
    if(perfil.exists() && perfil.data().numeroAlma){
      return { n: perfil.data().numeroAlma, fundadora: !!perfil.data().fundadora, nueva: false };
    }
    const cont  = await tx.get(refContador);
    const total = cont.exists() ? (cont.data().total || 0) : 0;
    const n = total + 1;
    const fundadora = n <= CUPOS;
    tx.set(refContador, { total: n }, { merge: true });
    tx.set(refPerfil, {
      numeroAlma: n,
      fundadora: fundadora,
      guardianes: fundadora ? { lucy: true } : {},
      llegada: serverTimestamp()
    }, { merge: true });
    return { n: n, fundadora: fundadora, nueva: true };
  });
}

/* ── cuántos lugares quedan (público) ── */
async function quedan(db){
  try{
    const s = await getDoc(doc(db, 'meta', 'almas'));
    const total = s.exists() ? (s.data().total || 0) : 0;
    return Math.max(0, CUPOS - total);
  }catch(e){ return null }
}

/* ═══════════ LUCY VOLANDO ═══════════ */
let lienzo = null, ctx = null, lucy = null, estela = [], t = 0, volando = false;
function encender(){
  if(volando) return; volando = true;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  lienzo = document.createElement('canvas');
  lienzo.id = 'lucyCanvas';
  lienzo.style.cssText = 'position:fixed;inset:0;z-index:60;pointer-events:none';
  document.body.appendChild(lienzo);
  ctx = lienzo.getContext('2d');
  const medir = function(){ lienzo.width = innerWidth; lienzo.height = innerHeight; };
  addEventListener('resize', medir); medir();
  lucy = { x: innerWidth*.5, y: innerHeight*.5, vx:0, vy:0, fase: Math.random()*6.28, celebra: 0 };
  requestAnimationFrame(pintar);
}
export function celebrar(){ if(lucy) lucy.celebra = 150; }

function pintar(){
  if(!ctx) return;
  t++;
  const W = lienzo.width, H = lienzo.height;
  lucy.fase += .012;
  const objX = W*(.5 + Math.sin(lucy.fase*.7)*.34 + Math.sin(lucy.fase*1.9)*.08);
  const objY = H*(.45 + Math.cos(lucy.fase*.9)*.30 + Math.sin(lucy.fase*2.3)*.06);
  lucy.vx += (objX-lucy.x)*.0016; lucy.vy += (objY-lucy.y)*.0016;
  lucy.vx *= .94; lucy.vy *= .94;
  if(lucy.celebra > 0){ lucy.celebra--; lucy.vx += Math.cos(t*.3)*.8; lucy.vy += Math.sin(t*.3)*.8; }
  lucy.x += lucy.vx; lucy.y += lucy.vy;
  estela.push({x:lucy.x, y:lucy.y, v:1});
  if(estela.length > 26) estela.shift();

  ctx.clearRect(0,0,W,H);
  for(const e of estela){
    e.v -= .035; if(e.v <= 0) continue;
    ctx.fillStyle = 'rgba(255,220,120,'+(e.v*.20)+')';
    ctx.beginPath(); ctx.arc(e.x, e.y, 2.4*e.v+.6, 0, 6.28); ctx.fill();
  }
  const pulso = .55 + Math.abs(Math.sin(t*.06))*.45;
  const gl = ctx.createRadialGradient(lucy.x, lucy.y, 0, lucy.x, lucy.y, 34*pulso);
  gl.addColorStop(0, 'rgba(255,225,130,'+(.30*pulso)+')');
  gl.addColorStop(.45, 'rgba(255,200,90,'+(.12*pulso)+')');
  gl.addColorStop(1, 'rgba(255,200,90,0)');
  ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(lucy.x, lucy.y, 34*pulso, 0, 6.28); ctx.fill();
  const ala = Math.sin(t*.9)*.5 + .7;
  ctx.save(); ctx.translate(lucy.x, lucy.y); ctx.rotate(Math.atan2(lucy.vy, lucy.vx)*.25);
  for(const lado of [-1,1]){
    ctx.save(); ctx.scale(lado*ala, 1);
    ctx.fillStyle = 'rgba(230,240,255,.30)';
    ctx.beginPath(); ctx.ellipse(3.5,-3,6.5,3.4,-.5,0,6.28); ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle = '#5a4a2a';
  ctx.beginPath(); ctx.ellipse(0,0,4.4,3,0,0,6.28); ctx.fill();
  ctx.shadowColor = 'rgba(255,215,110,.95)'; ctx.shadowBlur = 16*pulso;
  ctx.fillStyle = 'rgba(255,232,150,'+(.75+pulso*.25)+')';
  ctx.beginPath(); ctx.ellipse(-3.6,1.2,3.2,2.6,0,0,6.28); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.restore();
  if(!document.hidden) requestAnimationFrame(pintar);
}
document.addEventListener('visibilitychange', function(){ if(!document.hidden && ctx) requestAnimationFrame(pintar); });

/* ═══════════ el momento de ser elegida ═══════════ */
function anunciar(n){
  const c = document.createElement('div');
  c.style.cssText = 'position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;'
    + 'background:rgba(4,6,15,.86);backdrop-filter:blur(6px);animation:lucyEntra 1s ease both';
  c.innerHTML =
    '<style>@keyframes lucyEntra{from{opacity:0}to{opacity:1}}'
    + '@keyframes lucyLate{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.12);opacity:1}}</style>'
    + '<div style="max-width:400px;width:88%;text-align:center;padding:2.2rem 1.6rem;border-radius:20px;'
    + 'border:1px solid rgba(201,168,76,.45);background:linear-gradient(180deg,rgba(20,14,42,.95),rgba(6,8,20,.95));'
    + 'box-shadow:0 0 60px rgba(255,200,90,.18)">'
    + '<div style="font-size:2.6rem;animation:lucyLate 2s ease-in-out infinite;'
    + 'filter:drop-shadow(0 0 22px rgba(255,215,110,.9))">✦</div>'
    + '<div style="font-family:Cinzel,serif;font-size:.55rem;letter-spacing:.3em;color:rgba(201,168,76,.7);margin-top:1rem">'
    + 'ALMA FUNDADORA N.º ' + n + ' DE ' + CUPOS + '</div>'
    + '<div style="font-family:\'Cinzel Decorative\',Cinzel,serif;font-size:1.4rem;color:#f5e6b8;margin:.6rem 0 .5rem">'
    + 'Lucy te ha elegido</div>'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-style:italic;font-size:1.05rem;line-height:1.6;'
    + 'color:rgba(245,230,184,.75)">Llegaste temprano, cuando el Templo aún era penumbra.<br>'
    + 'Lucy vuela contigo desde ahora — y no volverá a entregarse jamás.</div>'
    + '<button style="margin-top:1.4rem;font-family:Cinzel,serif;font-size:.55rem;letter-spacing:.2em;'
    + 'padding:.7rem 1.6rem;border-radius:100px;border:1px solid rgba(201,168,76,.5);background:transparent;'
    + 'color:#f5e6b8;cursor:pointer">RECIBIRLA ✦</button></div>';
  c.querySelector('button').onclick = function(){ c.remove(); celebrar(); };
  document.body.appendChild(c);
}

/* ═══════════ arranque ═══════════ */
(async function(){
  // atajo: si ya sabemos que es fundadora, Lucy vuela sin esperar a la red
  if(localStorage.getItem(LS_FUND) === '1') encender();

  const app = await esperarApp(); if(!app) return;
  const db = getFirestore(app);
  window.Lucy = { celebrar, quedan: function(){ return quedan(db) }, CUPOS };

  onAuthStateChanged(getAuth(app), async function(user){
    if(!user) return;
    try{
      const r = await asignarNumero(db, user.uid);
      localStorage.setItem(LS_NUM, String(r.n));
      localStorage.setItem(LS_FUND, r.fundadora ? '1' : '0');
      if(r.fundadora){
        encender();
        if(r.nueva) setTimeout(function(){ anunciar(r.n) }, 1800);
      }
    }catch(e){ /* si falla, no rompemos nada: simplemente Lucy no aparece hoy */ }
  });
})();
