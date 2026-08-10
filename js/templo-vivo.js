/* ═══════════════════════════════════════════════════════════════════
   TEMPLO VIVO — el templo cambia cada día
   Capas: ESTACIÓN → CLIMA DEL DÍA → LUNA → FECHAS SAGRADAS
   La fecha es la semilla: todas las almas ven el mismo templo hoy.

   USO: <script src="js/templo-vivo.js" defer></script>
   No toca tu starfield ni tu contenido — solo agrega capas encima.

   PARA AGREGAR FECHAS SAGRADAS: busca "SAGRADAS" aquí abajo y suma
   líneas con el formato 'mm-dd'. Los climas disponibles están en CLIMAS.
   ═══════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;  // respeto a quien pide calma

  /* ── crear las capas (tinte + canvas de clima + aviso del día) ── */
  var css = document.createElement('style');
  css.textContent =
    '#tvTinte{position:fixed;inset:0;z-index:1;pointer-events:none;mix-blend-mode:soft-light;transition:background 2.5s ease}' +
    '#tvClima{position:fixed;inset:0;z-index:2;pointer-events:none}' +
    '#tvAviso{position:fixed;top:1rem;left:50%;transform:translateX(-50%);z-index:70;pointer-events:none;' +
      "font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.22em;white-space:nowrap;max-width:92vw;overflow:hidden;text-overflow:ellipsis;" +
      'color:#f5e6b8;background:rgba(4,6,15,.78);border:1px solid rgba(201,168,76,.35);' +
      'border-radius:100px;padding:.55rem 1.2rem;backdrop-filter:blur(8px);' +
      'opacity:0;transition:opacity 1.2s ease}' +
    '#tvAviso.tv-visible{opacity:1}' +
    '#starfield{transition:filter 2.5s ease}';
  document.head.appendChild(css);

  var tinteEl = document.createElement('div'); tinteEl.id='tvTinte';
  var clima = document.createElement('canvas'); clima.id='tvClima';
  var avisoEl = document.createElement('div'); avisoEl.id='tvAviso';
  document.body.appendChild(tinteEl);
  document.body.appendChild(clima);
  document.body.appendChild(avisoEl);

function semillaDeFecha(d){
  const s = d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate();
  // mezcla fuerte: dos días seguidos deben dar resultados MUY distintos
  let h = s >>> 0;
  h ^= h >>> 16; h = Math.imul(h, 0x21f0aaad);
  h ^= h >>> 15; h = Math.imul(h, 0x735a2d97);
  h ^= h >>> 15;
  const rnd = function(){ h|=0; h = h + 0x6D2B79F5 | 0;
    let t = Math.imul(h ^ h>>>15, 1|h); t = t + Math.imul(t ^ t>>>7, 61|t) ^ t;
    return ((t ^ t>>>14)>>>0)/4294967296; };
  rnd(); rnd();                       // calentar el generador
  return rnd;
}

// clima del día: nunca repite el de los 2 días anteriores.
// Recorre una ventana de 5 días hacia atrás resolviendo cada uno en orden,
// para que la cadena sea coherente (y siempre igual para todas las almas).
function climaDelDia(fecha, pool){
  const dias = 5;
  let ant1 = null, ant2 = null, elegido = null;
  for(let k = dias; k >= 0; k--){
    const f = new Date(fecha.getTime() - k*86400000);
    const az = semillaDeFecha(f);
    let c = pool[Math.floor(az()*pool.length)];
    if(c === ant1 || c === ant2){
      for(let j = 1; j < pool.length; j++){
        const alt = pool[(pool.indexOf(c)+j) % pool.length];
        if(alt !== ant1 && alt !== ant2){ c = alt; break; }
      }
    }
    ant2 = ant1; ant1 = c; elegido = c;
  }
  return elegido;
}
function faseLunar(d){
  const dias = (d.getTime() - Date.UTC(2000,0,6,18,14)) / 86400000;
  const edad = ((dias % 29.530588) + 29.530588) % 29.530588;
  if (edad<1.5||edad>28) return {n:'luna nueva',icono:'🌑',luz:.8};
  if (edad<6.5)  return {n:'luna creciente',icono:'🌒',luz:.92};
  if (edad<8.5)  return {n:'cuarto creciente',icono:'🌓',luz:.96};
  if (edad<13.5) return {n:'gibosa creciente',icono:'🌔',luz:1.03};
  if (edad<16.5) return {n:'luna llena',icono:'🌕',luz:1.16};
  if (edad<21.5) return {n:'gibosa menguante',icono:'🌖',luz:1.03};
  if (edad<23.5) return {n:'cuarto menguante',icono:'🌗',luz:.96};
  return {n:'luna menguante',icono:'🌘',luz:.9};
}
function estacionDe(d){ const m=d.getMonth()+1;
  if(m>=3&&m<=5)return 'primavera'; if(m>=6&&m<=8)return 'verano';
  if(m>=9&&m<=11)return 'otono'; return 'invierno'; }

const ESTACIONES = {
  primavera:{tinte:'rgba(120,190,140,.10)', extra:['petalos','flores','mariposas']},
  verano:   {tinte:'rgba(255,190,90,.08)',  extra:['luciernagas','mariposas']},
  otono:    {tinte:'rgba(200,110,40,.10)',  extra:['hojas','hojas','neblina']},
  invierno: {tinte:'rgba(140,170,255,.10)', extra:['nieve','nieve','neblina']},
};
const CLIMAS = {
  estrellas:{aviso:'Esta noche llueven estrellas en el Templo',icono:'🌠'},
  serena:{aviso:'Noche serena — pide un deseo a las fugaces',icono:'🌌'},
  luciernagas:{aviso:'Las luciérnagas visitan el Templo',icono:'🪷'},
  polvo:{aviso:'Polvo dorado flota en el aire del Templo',icono:'✨'},
  flores:{aviso:'Hoy las flores del Templo son azules',icono:'🌼'},
  petalos:{aviso:'Llueven pétalos sobre el Templo',icono:'🌸'},
  neblina:{aviso:'Una neblina violeta abraza el Templo',icono:'🌫️'},
  mariposas:{aviso:'Mariposas de luz cruzan el Templo',icono:'🦋'},
  hojas:{aviso:'Las hojas doradas danzan en el Templo',icono:'🍂'},
  nieve:{aviso:'Nieve serena cae sobre el Templo',icono:'❄️'},
  aurora:{aviso:'Una aurora danza sobre el Templo esta noche',icono:'🌌'},
};
const POOL_BASE = ['estrellas','serena','polvo'];
const SAGRADAS = {
  '10-31':{clima:'espiritus',aviso:'Los espíritus caminan esta noche por el Templo',icono:'👻',tinte:'rgba(150,80,200,.14)'},
  '11-01':{clima:'espiritus',aviso:'Las almas queridas visitan el Templo',icono:'🕯️',tinte:'rgba(255,140,60,.12)'},
  '12-24':{clima:'nievedorada',aviso:'Nieve dorada bendice el Templo',icono:'🌟',tinte:'rgba(255,215,130,.12)'},
  '12-25':{clima:'nievedorada',aviso:'Nieve dorada bendice el Templo',icono:'🌟',tinte:'rgba(255,215,130,.12)'},
  '12-31':{clima:'estrellas',aviso:'El año se despide con lluvia de estrellas',icono:'🎇',tinte:'rgba(255,215,130,.10)'},
  '01-01':{clima:'polvo',aviso:'El Templo amanece cubierto de oro nuevo',icono:'🌅',tinte:'rgba(255,215,130,.10)'},
  '02-14':{clima:'petalosrosa',aviso:'El amor perfuma el Templo con pétalos',icono:'💘',tinte:'rgba(255,120,160,.10)'},
};


const cx = clima.getContext('2d');
let W2,H2, particulas=[], fugaces=[], fugacesActivas=true, proximaFugaz=0;
function medir2(){ W2=clima.width=innerWidth; H2=clima.height=innerHeight; }
addEventListener('resize', medir2);

function crearParticulas(tipo, az){
  const n = {aurora:1, estrellas:34, serena:0, luciernagas:26, polvo:60, flores:22, petalos:28,
             neblina:8, mariposas:12, hojas:26, nieve:55, nievedorada:55,
             espiritus:9, petalosrosa:28}[tipo] || 26;
  particulas = Array.from({length:n}, ()=>({
    tipo, x:az()*W2, y:az()*H2, r:az(), f:az()*Math.PI*2, s:.5+az()
  }));
}
/* ── dibujos a mano en canvas — cero emojis, todo en la paleta del templo ── */
function dMariposa(c,p){
  const flap = Math.sin(p.f*3.2)*.55 + .75;               // aleteo real
  const s = 6 + p.r*7;
  c.save(); c.translate(p.x,p.y); c.rotate(Math.sin(p.f*.6)*.25);
  c.shadowColor='rgba(201,168,76,.7)'; c.shadowBlur=10;
  for(const lado of [-1,1]){
    c.save(); c.scale(lado*flap,1);
    const g=c.createRadialGradient(s*.55,0,0,s*.55,0,s);
    g.addColorStop(0,'rgba(245,230,184,.95)');
    g.addColorStop(1,'rgba(201,168,76,.25)');
    c.fillStyle=g;
    c.beginPath(); c.ellipse(s*.55,-s*.3,s*.62,s*.42,-.5,0,7); c.fill();   // ala superior
    c.beginPath(); c.ellipse(s*.45, s*.32,s*.4, s*.3,  .6,0,7); c.fill();  // ala inferior
    c.restore();
  }
  c.shadowBlur=0;
  c.strokeStyle='rgba(245,230,184,.9)'; c.lineWidth=1.2;
  c.beginPath(); c.moveTo(0,-s*.5); c.lineTo(0,s*.5); c.stroke();          // cuerpo
  c.restore();
}
const PALETA_HOJAS=[['rgba(200,80,40,.9)','rgba(230,140,60,.9)'],    // roja
                    ['rgba(210,120,40,.88)','rgba(240,190,90,.88)'],  // naranja
                    ['rgba(170,60,50,.88)','rgba(215,110,70,.88)'],   // vino
                    ['rgba(200,150,50,.85)','rgba(240,210,120,.85)']];// ámbar
function dHoja(c,p){
  const s=5+p.r*7;
  if(p.pal===undefined)p.pal=Math.floor(Math.random()*PALETA_HOJAS.length);
  c.save(); c.translate(p.x,p.y); c.rotate(p.f);
  const g=c.createLinearGradient(-s,0,s,0);
  g.addColorStop(0,PALETA_HOJAS[p.pal][0]); g.addColorStop(1,PALETA_HOJAS[p.pal][1]);
  c.fillStyle=g;
  c.beginPath(); c.moveTo(0,-s);
  c.quadraticCurveTo(s*.9,0,0,s); c.quadraticCurveTo(-s*.9,0,0,-s); c.fill();
  c.strokeStyle='rgba(120,70,20,.5)'; c.lineWidth=.8;
  c.beginPath(); c.moveTo(0,-s); c.lineTo(0,s); c.stroke();                // nervadura
  c.restore();
}
function dPetalo(c,p,color){
  const s=3.5+p.r*4.5;
  c.save(); c.translate(p.x,p.y); c.rotate(p.f*1.4);
  c.fillStyle=color;
  c.beginPath(); c.ellipse(0,0,s,s*.55,0,0,7); c.fill();
  c.restore();
}
function dFlor(c,p){
  const s=3.5+p.r*4;
  c.save(); c.translate(p.x,p.y); c.rotate(p.f*.8);
  c.shadowColor='rgba(120,170,255,.8)'; c.shadowBlur=8;
  c.fillStyle='rgba(150,190,255,.85)';
  for(let k=0;k<5;k++){ c.rotate(Math.PI*2/5);
    c.beginPath(); c.ellipse(0,-s,s*.45,s*.75,0,0,7); c.fill(); }          // 5 pétalos
  c.shadowBlur=0;
  c.fillStyle='rgba(245,230,184,.95)';
  c.beginPath(); c.arc(0,0,s*.35,0,7); c.fill();                           // centro dorado
  c.restore();
}
function dAurora(c,p){
  // cortinas de luz que ondulan en lo alto del cielo
  const alto=H2*.55, base=H2*.06;
  for(let capa=0;capa<3;capa++){
    const desf=p.f+capa*1.7, tono=capa===0?'120,255,190':(capa===1?'140,200,255':'200,150,255');
    c.beginPath();
    for(let x=0;x<=W2;x+=14){
      const y=base+Math.sin(x*.004+desf)*26+Math.sin(x*.011+desf*1.6)*13+capa*16;
      x===0?c.moveTo(x,y):c.lineTo(x,y);
    }
    for(let x=W2;x>=0;x-=14){
      const y=base+Math.sin(x*.004+desf)*26+Math.sin(x*.011+desf*1.6)*13+capa*16;
      const largo=alto*(.55+Math.sin(x*.006+desf*.7)*.3);
      c.lineTo(x,y+largo);
    }
    c.closePath();
    const g2=c.createLinearGradient(0,base,0,base+alto);
    g2.addColorStop(0,'rgba('+tono+',0)');
    g2.addColorStop(.25,'rgba('+tono+',.13)');
    g2.addColorStop(1,'rgba('+tono+',0)');
    c.fillStyle=g2; c.fill();
  }
}
function dEspiritu(c,p){
  const a=.22+Math.abs(Math.sin(p.f))*.25;
  const s=10+p.r*16;
  for(let k=0;k<=3;k++){                                                   // velo + estela
    const ex=p.x+Math.sin(p.f-k*.6)*6, ey=p.y+k*s*.55, er=s*(1-k*.22);
    const g=c.createRadialGradient(ex,ey,0,ex,ey,er);
    g.addColorStop(0,`rgba(225,232,255,${a*(1-k*.26)})`);
    g.addColorStop(1,'rgba(200,210,255,0)');
    c.fillStyle=g; c.beginPath(); c.arc(ex,ey,er,0,7); c.fill();
  }
}

/* estrellas fugaces sobre TU cielo (aparecen de a ratos) */
function tickFugaces(ahora){
  if(!fugacesActivas) return;
  if(ahora > proximaFugaz){
    proximaFugaz = ahora + 5000 + Math.random()*9000;   // cada 5–14 s
    const desdeX = Math.random()*W2*.8 + W2*.15;
    fugaces.push({x:desdeX, y:Math.random()*H2*.35, vx:-(5+Math.random()*4), vy:3+Math.random()*2.5, vida:1});
  }
  for(const f of fugaces){
    f.x += f.vx; f.y += f.vy; f.vida -= .016;
    const cola = 16;
    const g = cx.createLinearGradient(f.x, f.y, f.x + f.vx*-cola*.4, f.y + f.vy*-cola*.4);
    g.addColorStop(0, `rgba(245,230,184,${.9*f.vida})`);
    g.addColorStop(1, 'rgba(245,230,184,0)');
    cx.strokeStyle = g; cx.lineWidth = 1.6;
    cx.beginPath(); cx.moveTo(f.x, f.y);
    cx.lineTo(f.x + f.vx*-cola*.4, f.y + f.vy*-cola*.4); cx.stroke();
  }
  fugaces = fugaces.filter(f => f.vida > 0 && f.x > -60 && f.y < H2+60);
}

function pintar(t){
  cx.clearRect(0,0,W2,H2);
  tickFugaces(t);
  for(const p of particulas){
    p.f += .02*p.s;
    switch(p.tipo){
      case 'estrellas':
        p.x -= 3.2*p.s; p.y += 5.5*p.s;
        if(p.y>H2||p.x<0){ p.x=W2*Math.random()*1.3; p.y=-20; }
        cx.strokeStyle='rgba(245,230,184,.8)'; cx.lineWidth=1.1;
        cx.beginPath(); cx.moveTo(p.x,p.y); cx.lineTo(p.x+9,p.y-15); cx.stroke();
        break;
      case 'luciernagas':{
        p.x += Math.sin(p.f)*1.2; p.y += Math.cos(p.f*.7)*.9;
        const a=.35+Math.abs(Math.sin(p.f*2))*.55;
        cx.fillStyle=`rgba(255,220,120,${a})`;
        cx.shadowColor='rgba(255,220,120,.9)'; cx.shadowBlur=12;
        cx.beginPath(); cx.arc(p.x,p.y,2.1,0,7); cx.fill(); cx.shadowBlur=0;
        break;}
      case 'polvo':
        p.y -= .35*p.s; p.x += Math.sin(p.f)*.5;
        if(p.y<-10){ p.y=H2+10; p.x=Math.random()*W2; }
        cx.fillStyle=`rgba(201,168,76,${.15+p.r*.4})`;
        cx.beginPath(); cx.arc(p.x,p.y,1+p.r*1.6,0,7); cx.fill();
        break;
      case 'aurora':
        p.f+=.006;
        dAurora(cx,p);
        break;
      case 'neblina':{
        p.x += .35*p.s; if(p.x>W2+300)p.x=-300;
        const g=cx.createRadialGradient(p.x,p.y,0,p.x,p.y,180+p.r*140);
        g.addColorStop(0,'rgba(139,79,158,.055)'); g.addColorStop(1,'rgba(139,79,158,0)');
        cx.fillStyle=g; cx.fillRect(p.x-320,p.y-320,640,640);
        break;}
      case 'nieve': case 'nievedorada':{
        p.y += 1.3*p.s; p.x += Math.sin(p.f)*1.1;
        if(p.y>H2){ p.y=-10; p.x=Math.random()*W2; }
        cx.fillStyle = p.tipo==='nieve' ? 'rgba(230,240,255,.85)' : 'rgba(255,220,130,.9)';
        if(p.tipo==='nievedorada'){ cx.shadowColor='rgba(255,215,130,.8)'; cx.shadowBlur=8; }
        cx.beginPath(); cx.arc(p.x,p.y,1.2+p.r*1.8,0,7); cx.fill(); cx.shadowBlur=0;
        break;}
      case 'mariposas':
        p.y += Math.cos(p.f)*1.2; p.x += Math.sin(p.f)*1.6;
        if(p.y>H2+30||p.y<-30){ p.y=-25; p.x=Math.random()*W2; }
        dMariposa(cx,p);
        break;
      case 'hojas':
        p.y += 1.0*p.s; p.x += Math.sin(p.f)*1.5;
        if(p.y>H2+20){ p.y=-15; p.x=Math.random()*W2; }
        dHoja(cx,p);
        break;
      case 'petalos':
        p.y += .8*p.s; p.x += Math.sin(p.f)*1.2;
        if(p.y>H2+15){ p.y=-10; p.x=Math.random()*W2; }
        dPetalo(cx,p,'rgba(235,205,225,.85)');
        break;
      case 'petalosrosa':
        p.y += .8*p.s; p.x += Math.sin(p.f)*1.2;
        if(p.y>H2+15){ p.y=-10; p.x=Math.random()*W2; }
        dPetalo(cx,p,'rgba(255,150,180,.85)');
        break;
      case 'flores':
        p.y += .55*p.s; p.x += Math.sin(p.f*.8)*.9;
        if(p.y>H2+15){ p.y=-12; p.x=Math.random()*W2; }
        dFlor(cx,p);
        break;
      case 'espiritus':
        p.x += Math.sin(p.f)*1.4; p.y -= .5*p.s;
        if(p.y<-40){ p.y=H2+40; p.x=Math.random()*W2; }
        dEspiritu(cx,p);
        break;
    }
  }
  if(!document.hidden) requestAnimationFrame(pintar);
}

function vestirTemplo(fecha){
  const az = semillaDeFecha(fecha);
  const est = estacionDe(fecha);
  const luna = faseLunar(fecha);
  const clave = String(fecha.getMonth()+1).padStart(2,'0')+'-'+String(fecha.getDate()).padStart(2,'0');
  const sagrada = SAGRADAS[clave];

  let climaId, aviso, icono, tinte = ESTACIONES[est].tinte;
  if (sagrada){ climaId=sagrada.clima; aviso=sagrada.aviso; icono=sagrada.icono; tinte=sagrada.tinte; }
  else {
    const pool = POOL_BASE.concat(ESTACIONES[est].extra);
    climaId = climaDelDia(fecha, pool);
    // aurora boreal: rara y solo en las estaciones frías
    if(est==='invierno'||est==='otono'){
      const dadoAurora=function(f){ const r=semillaDeFecha(f); r(); r(); r(); return r(); };
      if(dadoAurora(fecha) < 0.05){
        let cerca=false;                       // ninguna aurora en los 5 días previos
        for(let k=1;k<=5;k++) if(dadoAurora(new Date(fecha.getTime()-k*86400000)) < 0.05) cerca=true;
        if(!cerca) climaId='aurora';
      }
    }
    aviso = CLIMAS[climaId].aviso; icono = CLIMAS[climaId].icono;
    if (luna.n==='luna llena') aviso += ' · la luna llena lo ilumina todo';
    if (luna.n==='luna nueva') aviso += ' · bajo el manto de la luna nueva';
  }

  // las fugaces brillan en noches serenas y de lluvia de estrellas; descansan si nieva o hay neblina
  fugacesActivas = ['serena','estrellas','polvo','luciernagas','mariposas','flores','petalos','petalosrosa','aurora'].includes(climaId);

  tinteEl.style.background = tinte;
  var sf = document.getElementById('starfield'); if (sf) sf.style.filter = 'brightness(' + luna.luz + ')';
  avisoEl.textContent = '✦ ' + aviso + ' ✦';
  
  
  crearParticulas(climaId, az);
}


  /* ── arranque ── */
  medir2();
  // vista previa: abre tu templo con ?fecha=2026-10-31 para ver ese día
  var qs = new URLSearchParams(location.search).get('fecha');
  var hoy = qs ? new Date(qs + 'T12:00:00') : new Date();
  if (isNaN(hoy)) hoy = new Date();
  vestirTemplo(hoy);
  requestAnimationFrame(pintar);

  // el aviso aparece, acompaña unos segundos y se despide
  setTimeout(function(){ avisoEl.classList.add('tv-visible'); }, 600);
  setTimeout(function(){ avisoEl.classList.remove('tv-visible'); }, 14000);
  setTimeout(function(){ if(avisoEl.parentNode) avisoEl.parentNode.removeChild(avisoEl); }, 15500);

  // pausa cuando la pestaña no se ve (ahorro de batería en el teléfono)
  document.addEventListener('visibilitychange', function(){
    if(!document.hidden) requestAnimationFrame(pintar);
  });
})();
