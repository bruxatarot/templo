// =====================================================
// BRUXA TAROT — GUARDIANES DEL TEMPLO
// Catálogo + arte CSS compartido (muro, perfil, tienda)
// Uso: <script src="js/guardianes.js"></script>
//   window.MASCOTAS  → catálogo
//   window.petHtml(key, scale) → HTML del guardián animado
// =====================================================
(function(){

window.MASCOTAS = {
  vela:     {emoji:'🕯️', nombre:'Vela',            energia:'Luz interior, guía',      rareza:'comun',      precio:0},
  estrella: {emoji:'⭐',  nombre:'Estrella',        energia:'Deseos, esperanza',       rareza:'comun',      precio:15},
  luna:     {emoji:'🌙', nombre:'Luna',             energia:'Intuición, sueños',       rareza:'rara',       precio:35},
  bola:     {emoji:'🔮', nombre:'Bola de Cristal',  energia:'Claridad, visión',        rareza:'rara',       precio:50},
  ojo:      {emoji:'🧿', nombre:'Ojo Místico',      energia:'Protección, poder',       rareza:'rara',       precio:50},
  brillito: {emoji:'🌟', nombre:'Brillito',         energia:'Chispa, alegría',         rareza:'legendaria', precio:100},
  alma:     {emoji:'🌛', nombre:'Alma',             energia:'Conciencia, luz interior',rareza:'legendaria', precio:150},
};
window.RAREZA_LABEL = {comun:'COMÚN', rara:'RARA', legendaria:'LEGENDARIA'};

const FACE = `<span class="pface"><span class="pojos"><span class="pojo"></span><span class="pojo"></span></span><span class="pboca"></span></span>`;
const FACE_ZZZ = `<span class="pface pzzz"><span class="pojos"><span class="pojo"></span><span class="pojo"></span></span><span class="pboca"></span></span>`;

const PET_ART = {
  vela: `<span class="pv"><span class="llama"></span><span class="pabilo"></span><span class="cuerpo"><span class="pchapas"><i></i><i></i></span>${FACE}</span></span>`,
  luna: `<span class="pl"><span class="cuerpo"></span><span class="crater c1"></span><span class="crater c2"></span>${FACE_ZZZ}<span class="est">✦</span></span>`,
  estrella: `<span class="pe"><span class="cuerpo"></span>${FACE}<span class="sp">✦</span><span class="sp sp2">✧</span></span>`,
  bola: `<span class="pb"><span class="esfera"></span><span class="niebla"></span>${FACE}<span class="base"></span></span>`,
  ojo: `<span class="po"><span class="a1"><span class="a2"><span class="a3"><span class="pupila"></span></span></span></span></span>`,
  brillito: `<span class="pbr"><span class="anillo"></span><span class="cuerpo"></span>${FACE}</span>`,
  alma: `<span class="pa"><span class="halo"></span><span class="cuerpo"></span><span class="anillop"></span>${FACE}<span class="cola">✦ ✧ ✦</span></span>`,
};

window.petHtml = function(key, scale=1){
  const m = window.MASCOTAS[key];
  if(!m || !PET_ART[key]) return '';
  const w = Math.round(96*scale), h = Math.round(100*scale);
  return `<span class="petw" style="width:${w}px;height:${h}px" title="${m.nombre} · ${m.energia}">
    <span class="pets" style="transform:scale(${scale})">${PET_ART[key]}</span></span>`;
};

const css = `
.petw{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:visible}
.pets{position:relative;width:96px;height:100px;transform-origin:center;display:flex;align-items:center;justify-content:center;flex:none}
.pface{position:absolute;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center}
.pojos{display:flex;gap:11px}
.pojo{width:9px;height:11px;background:#2a1a10;border-radius:50%;position:relative}
.pojo::after{content:'';position:absolute;top:1.5px;left:2px;width:3.5px;height:3.5px;background:#fff;border-radius:50%}
.pboca{width:9px;height:5px;border:1.6px solid #2a1a10;border-top:none;border-radius:0 0 9px 9px;margin-top:2.5px}
.pchapas{position:absolute;top:9px;left:50%;transform:translateX(-50%);width:46px;display:flex;justify-content:space-between}
.pchapas i{width:7px;height:4px;background:rgba(255,150,130,.55);border-radius:50%;filter:blur(1px)}
.pzzz .pojo{height:2.5px;border-radius:3px;margin-top:5px}
.pzzz .pojo::after{display:none}
@keyframes pet-flot{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-9px) rotate(3deg)}}
@keyframes pet-tw{0%,100%{opacity:.15}50%{opacity:1}}
.pv{position:relative;width:44px;height:86px;animation:pv-sway 3.2s ease-in-out infinite}
.pv .cuerpo{position:absolute;bottom:0;width:44px;height:58px;border-radius:10px 10px 12px 12px;background:linear-gradient(160deg,#fdf3dc,#ecd9ae 60%,#d8bd85);box-shadow:inset -5px 0 9px rgba(160,120,60,.3)}
.pv .llama{position:absolute;top:-2px;left:50%;transform:translateX(-50%);width:16px;height:24px;background:radial-gradient(ellipse at 50% 78%,#fff8e0 0%,#ffd24a 45%,#ff8c2a 80%,transparent 100%);border-radius:50% 50% 50% 50%/62% 62% 38% 38%;animation:pv-flama .55s ease-in-out infinite alternate;filter:drop-shadow(0 0 12px rgba(255,190,70,.95))}
.pv .pabilo{position:absolute;top:20px;left:50%;transform:translateX(-50%);width:2.5px;height:7px;background:#4a3520;border-radius:2px}
.pv .pface{top:40px}
@keyframes pv-flama{from{transform:translateX(-50%) scale(1) rotate(-3deg)}to{transform:translateX(-50%) scale(1.12,1.22) rotate(3deg)}}
@keyframes pv-sway{0%,100%{transform:rotate(-1.6deg)}50%{transform:rotate(1.6deg)}}
.pl{position:relative;width:80px;height:80px;animation:pet-flot 5s ease-in-out infinite;filter:drop-shadow(0 0 14px rgba(200,212,255,.55))}
.pl .cuerpo{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 34% 30%,#f4f2ff 0%,#ccc8ec 55%,#9a92c8 100%);-webkit-mask:radial-gradient(circle at 78% 22%,transparent 34%,#000 36%);mask:radial-gradient(circle at 78% 22%,transparent 34%,#000 36%)}
.pl .crater{position:absolute;border-radius:50%;background:rgba(140,130,190,.45)}
.pl .c1{width:9px;height:9px;top:16px;left:14px}
.pl .c2{width:6px;height:6px;top:56px;left:26px}
.pl .pface{top:32px;left:42%}
.pl .est{position:absolute;top:6px;right:2px;color:#e8e4ff;font-size:.7rem;animation:pet-tw 2.4s ease-in-out infinite}
.pe{position:relative;width:86px;height:86px;animation:pe-tit 2s ease-in-out infinite}
.pe .cuerpo{position:absolute;inset:4px;background:radial-gradient(circle at 42% 36%,#fff6cf 0%,#ffd75e 55%,#e8a92c 100%);clip-path:polygon(50% 0%,63% 34%,98% 37%,71% 59%,81% 95%,50% 74%,19% 95%,29% 59%,2% 37%,37% 34%);filter:drop-shadow(0 0 12px rgba(255,215,94,.85))}
.pe .pface{top:36px}
.pe .sp{position:absolute;top:50%;left:50%;color:#ffe9a0;font-size:.62rem;animation:pe-orb 3s linear infinite}
.pe .sp2{animation-delay:-1.5s;font-size:.48rem}
@keyframes pe-tit{0%,100%{transform:scale(1) rotate(-4deg)}50%{transform:scale(1.09) rotate(4deg)}}
@keyframes pe-orb{0%{transform:rotate(0) translateX(50px) rotate(0);opacity:1}100%{transform:rotate(360deg) translateX(50px) rotate(-360deg);opacity:.35}}
.pb{position:relative;width:78px;height:92px}
.pb .esfera{position:absolute;top:0;left:50%;transform:translateX(-50%);width:72px;height:72px;border-radius:50%;background:radial-gradient(circle at 32% 26%,rgba(255,255,255,.95) 0%,rgba(190,170,255,.6) 22%,rgba(120,90,210,.55) 60%,rgba(60,40,130,.75) 100%);box-shadow:inset 0 -8px 18px rgba(40,20,90,.5),0 0 18px rgba(160,130,255,.5);animation:pb-vis 4.5s ease-in-out infinite}
.pb .niebla{position:absolute;top:18px;left:50%;transform:translateX(-50%);width:44px;height:30px;border-radius:50%;filter:blur(6px);background:radial-gradient(ellipse,rgba(255,220,255,.55),transparent 70%);animation:pb-nie 3.4s ease-in-out infinite}
.pb .base{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:52px;height:20px;border-radius:6px 6px 12px 12px;background:linear-gradient(160deg,#e8c97a,#a07828);box-shadow:0 3px 8px rgba(0,0,0,.5)}
.pb .pface{top:28px}
@keyframes pb-vis{0%,100%{filter:hue-rotate(0)}50%{filter:hue-rotate(38deg)}}
@keyframes pb-nie{0%,100%{opacity:.5;transform:translateX(-58%)}50%{opacity:1;transform:translateX(-42%)}}
.po{position:relative;width:92px;height:92px;display:flex;align-items:center;justify-content:center;animation:pet-flot 4.2s ease-in-out infinite;filter:drop-shadow(0 0 14px rgba(70,130,255,.6))}
.po .a1{width:92px;height:92px;border-radius:50%;background:radial-gradient(circle at 36% 30%,#3d7ae8,#1a3a94);display:flex;align-items:center;justify-content:center}
.po .a2{width:66px;height:66px;border-radius:50%;background:#eef4ff;display:flex;align-items:center;justify-content:center}
.po .a3{width:42px;height:42px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#7ec2ff,#2a6ad0);display:flex;align-items:center;justify-content:center;animation:po-parp 4.6s ease-in-out infinite}
.po .pupila{width:19px;height:19px;border-radius:50%;background:#0c1430;position:relative}
.po .pupila::after{content:'';position:absolute;top:3px;left:4px;width:6px;height:6px;background:#fff;border-radius:50%}
@keyframes po-parp{0%,86%,100%{transform:scaleY(1)}90%,94%{transform:scaleY(.1)}}
.pbr{position:relative;width:90px;height:90px;animation:pbr-brinco 1.7s ease-in-out infinite}
.pbr .cuerpo{position:absolute;inset:6px;background:radial-gradient(circle at 40% 34%,#fff9d8 0%,#ffde6a 50%,#f0a830 100%);clip-path:polygon(50% 0%,61% 24%,84% 12%,78% 37%,100% 46%,79% 58%,88% 84%,62% 74%,50% 100%,38% 74%,12% 84%,21% 58%,0% 46%,22% 37%,16% 12%,39% 24%);filter:drop-shadow(0 0 16px rgba(255,220,110,1))}
.pbr .pface{top:34px}
.pbr .pboca{width:12px;height:8px;background:#7a3010;border:none;border-radius:0 0 12px 12px}
.pbr .anillo{position:absolute;inset:-4px;border-radius:50%;border:1.6px dashed rgba(255,225,140,.55);animation:pbr-gira 7s linear infinite}
@keyframes pbr-brinco{0%,100%{transform:translateY(0) scale(1)}38%{transform:translateY(-11px) scale(1.08) rotate(-7deg)}58%{transform:translateY(-5px) scale(1.04) rotate(5deg)}}
@keyframes pbr-gira{to{transform:rotate(360deg)}}
.pa{position:relative;width:96px;height:100px;animation:pet-flot 4.6s ease-in-out infinite;filter:drop-shadow(0 0 16px rgba(255,236,190,.8))}
.pa .halo{position:absolute;top:-2px;left:50%;transform:translateX(-50%) rotate(-6deg);width:44px;height:13px;border-radius:50%;border:3px solid #ffd870;box-shadow:0 0 12px rgba(255,216,112,.9);animation:pa-halo 3s ease-in-out infinite}
.pa .anillop{position:absolute;top:46px;left:-8px;width:112px;height:26px;border-radius:50%;border:2.5px solid rgba(232,201,122,.75);transform:rotate(-12deg);border-top-color:transparent;z-index:3}
.pa .cuerpo{position:absolute;top:14px;left:50%;transform:translateX(-50%);width:70px;height:70px;border-radius:50%;z-index:2;background:radial-gradient(circle at 36% 30%,#fffdf4 0%,#f5e8cf 50%,#d8c4e0 100%);box-shadow:inset -6px -5px 14px rgba(180,150,200,.35)}
.pa .pface{top:38px;z-index:4}
.pa .cola{position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);font-size:.6rem;color:rgba(255,236,190,.85);letter-spacing:.4em;animation:pa-polvo 2.6s ease-in-out infinite;z-index:1}
@keyframes pa-halo{0%,100%{opacity:.75}50%{opacity:1}}
@keyframes pa-polvo{0%,100%{opacity:.35;transform:translateX(-50%) translateY(0)}50%{opacity:1;transform:translateX(-50%) translateY(4px)}}
@media(prefers-reduced-motion:reduce){.pets,.pets *,.pets *::before,.pets *::after{animation:none!important}}
`;
const style = document.createElement('style');
style.id = 'guardianes-css';
style.textContent = css;
(document.head || document.documentElement).appendChild(style);

})();
