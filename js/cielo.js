/* ═══════════════════════════════════════════════════════════════
   EL CIELO DEL TEMPLO — publica tus gestos al espacio compartido
   Escribe en /templo/cielo/<uid> solo TUS datos (nombre, rango,
   contadores). Nunca lee ni toca los de nadie más desde aquí.

   PRIVACIDAD: si el alma apaga "aparecer en el Cielo" (alma_cielo_off),
   su entrada se borra y deja de publicarse.
   ═══════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const FB_URL = 'https://diario-del-alma-default-rtdb.firebaseio.com';

  const visible = () => localStorage.getItem('alma_cielo_off') !== '1';
  function setVisible(v){
    localStorage.setItem('alma_cielo_off', v ? '0' : '1');
    v ? publicar() : borrar();
  }

  async function _tk(){
    try{ const u = window._fbUser; return u?.getIdToken ? '?auth=' + await u.getIdToken() : '' }
    catch(e){ return '' }
  }
  function _url(){
    const uid = window._fbUser?.uid;
    return uid ? FB_URL + '/templo/cielo/' + uid + '.json' : null;
  }

  let _timer = null;
  function publicar(){
    if(!visible()) return;
    const url = _url(); if(!url) return;
    clearTimeout(_timer);
    _timer = setTimeout(async ()=>{
      const u = window._fbUser;
      const SB = window.Starbits, CA = window.CaminoAlma;
      if(!SB || !CA) return;
      const c = SB.contadores ? SB.contadores() : {total:{}, mes:{}};
      const r = CA.rango();
      const tk = await _tk();
      fetch(url + tk, { method:'PUT', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          nombre: (u.displayName || (u.email||'').split('@')[0] || 'Alma del Templo'),
          luz: CA.luz(),
          rango: r.n,
          luna: r.luna,
          racha: (SB.racha().n || 0),
          total: c.total,
          mes: c.mes,
          mesClave: new Date().getFullYear()+'-'+String(new Date().getMonth()+1).padStart(2,'0'),
          ts: Date.now()
        })
      }).catch(()=>{});
    }, 900);
  }
  async function borrar(){
    const url = _url(); if(!url) return;
    fetch(url + await _tk(), {method:'DELETE'}).catch(()=>{});
  }

  function iniciar(){
    publicar();
    if(window.Starbits && window.Starbits.onChange) window.Starbits.onChange(publicar);
  }
  // esperar a que haya sesión
  let intentos = 0;
  const esperar = setInterval(function(){
    if(window._fbUser){ clearInterval(esperar); iniciar(); }
    if(++intentos > 40) clearInterval(esperar);
  }, 500);

  window.CieloTemplo = { publicar, borrar, visible, setVisible, FB_URL };
})();
