/* ═══════════════════════════════════════════════════════════════
   EL CAMINO DEL ALMA — 7 rangos de evolución
   Se apoya en tu sistema de Starbits ya existente.

   IMPORTANTE — dos evoluciones distintas, no se pisan:
     · Tu GUARDIÁN evoluciona por la racha (Starbits.nivel(): 1,2,3)
     · Tu ALMA evoluciona por la LUZ acumulada (esto)
   La luz NUNCA baja: aunque gastes starbits en la tienda o
   desaparezcas un mes, tu rango se queda contigo.

   Para ajustar la dificultad, cambia los números de RANGOS.
   ═══════════════════════════════════════════════════════════════ */
(function(){
  'use strict';

  const RANGOS = [
    {luz:0,    luna:'🌑', n:'Alma Dormida',        d:'Acabas de cruzar el umbral. Todo está por despertar.', req:'al llegar al Templo'},
    {luz:25,   luna:'🌒', n:'Alma Curiosa',        d:'Algo en ti empezó a mirar hacia adentro.',             req:'tus primeros días'},
    {luz:120,  luna:'🌓', n:'Alma Despierta',      d:'Ya no visitas el Templo: lo habitas.',                 req:'unas dos semanas de camino'},
    {luz:400,  luna:'🌔', n:'Alma Consciente',     d:'Escribes, preguntas, escuchas. La luz te reconoce.',   req:'un par de meses'},
    {luz:1000, luna:'🌕', n:'Alma Radiante',       d:'Tu luz ya alumbra a otras almas del Muro.',            req:'unos cuatro meses'},
    {luz:2500, luna:'🌟', n:'Guardián del Prisma', d:'El Templo te reconoce como suya.',                     req:'casi un año'},
    {luz:5000, luna:'👑', n:'Portador de la Luz',  d:'Pocas almas llegan aquí. Tu nombre queda en el Templo.', req:'un camino largo y fiel'},
  ];

  const luz = () => parseInt(localStorage.getItem('alma_luz') || '0');
  function rangoDe(l){ let r = RANGOS[0]; for(const x of RANGOS) if(l >= x.luz) r = x; return r; }
  function rango(){ return rangoDe(luz()); }
  function siguiente(){ const i = RANGOS.indexOf(rango()); return RANGOS[i+1] || null; }

  /* aviso cuando el alma sube de rango */
  function chequearAscenso(){
    const r = rango();
    const visto = localStorage.getItem('alma_rango_visto');
    if(visto === null){ localStorage.setItem('alma_rango_visto', r.n); return; }
    if(visto !== r.n && RANGOS.indexOf(r) > RANGOS.findIndex(x => x.n === visto)){
      localStorage.setItem('alma_rango_visto', r.n);
      if(window.Starbits && window.Starbits.toast)
        setTimeout(()=>window.Starbits.toast(`${r.luna} Tu alma ha evolucionado: ${r.n}`), 2400);
    }
  }

  /* ── el panel del perfil ── */
  function render(el){
    if(!el) return;
    const l = luz(), r = rango(), sig = siguiente();
    const prog = sig ? Math.min(1, (l - r.luz) / (sig.luz - r.luz)) : 1;
    el.innerHTML =
      '<div class="ca-actual">'
      +  '<div class="ca-luna">'+r.luna+'</div>'
      +  '<div class="ca-nombre">'+r.n+'</div>'
      +  '<div class="ca-desc">'+r.d+'</div>'
      +  '<div class="ca-barra"><i style="width:'+Math.round(prog*100)+'%"></i></div>'
      +  '<div class="ca-falta">'+ (sig
            ? ('TE FALTAN ' + (sig.luz - l) + ' LUCES PARA ' + sig.n.toUpperCase())
            : 'HAS LLEGADO AL FINAL DEL CAMINO ✦') + '</div>'
      +  '<div class="ca-luz">'+l+' LUCES ACUMULADAS</div>'
      +'</div>'
      +'<div class="ca-camino">'
      + RANGOS.map(function(x){
          const alc = l >= x.luz, act = (x === r);
          return '<div class="ca-paso'+(alc?' ca-ok':'')+(act?' ca-act':'')+'">'
            +'<span class="ca-marca">'+x.luna+'</span>'
            +'<span class="ca-t">'+x.n.toUpperCase()+'</span>'
            +'<span class="ca-r">'+x.req+'</span></div>';
        }).join('')
      +'</div>';
  }

  /* estilos propios (no tocan los tuyos) */
  const css = document.createElement('style');
  css.textContent =
    '.ca-actual{text-align:center;padding:1.1rem .9rem 1.2rem}'
   +'.ca-luna{font-size:2.4rem;line-height:1;filter:drop-shadow(0 0 16px rgba(201,168,76,.55))}'
   +".ca-nombre{font-family:'Cinzel Decorative',Cinzel,serif;font-size:1.18rem;color:#f5e6b8;margin:.45rem 0 .2rem}"
   +'.ca-desc{font-style:italic;color:rgba(245,230,184,.62);font-size:.95rem;line-height:1.45}'
   +'.ca-barra{height:6px;border-radius:100px;background:rgba(201,168,76,.15);margin:.9rem auto .4rem;max-width:320px;overflow:hidden}'
   +'.ca-barra i{display:block;height:100%;border-radius:100px;background:linear-gradient(90deg,#8b4f9e,#c9a84c,#f5e6b8);transition:width .9s cubic-bezier(.2,.8,.2,1)}'
   +".ca-falta,.ca-luz{font-family:'Cinzel',serif;font-size:.5rem;letter-spacing:.18em;color:rgba(201,168,76,.6)}"
   +'.ca-luz{margin-top:.35rem;color:rgba(201,168,76,.4)}'
   +'.ca-camino{padding:.2rem .9rem 1rem}'
   +'.ca-paso{display:flex;align-items:center;gap:.6rem;padding:.42rem 0;opacity:.38;transition:opacity .4s}'
   +'.ca-paso.ca-ok{opacity:1}'
   +'.ca-marca{width:1.7rem;text-align:center;font-size:1rem}'
   +".ca-t{font-family:'Cinzel',serif;font-size:.58rem;letter-spacing:.16em;color:#f5e6b8;flex:none}"
   +'.ca-r{font-style:italic;font-size:.85rem;color:rgba(245,230,184,.4);margin-left:auto;text-align:right}'
   +'.ca-paso.ca-act .ca-marca{filter:drop-shadow(0 0 10px rgba(201,168,76,.8))}';
  document.head.appendChild(css);

  function iniciar(){
    chequearAscenso();
    render(document.getElementById('caminoAlma'));
    if(window.Starbits && window.Starbits.onChange)
      window.Starbits.onChange(function(){ render(document.getElementById('caminoAlma')); chequearAscenso(); });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();

  window.CaminoAlma = { luz, rango, rangoDe, siguiente, render, RANGOS };
})();
