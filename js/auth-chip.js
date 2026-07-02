// ═══════════════════════════════════════════════════
// AUTH-CHIP.JS — Cuenta unificada del Templo
// • Chip de usuario en nav de todas las páginas
// • Mini modal de login / crear cuenta
// • Popup de bienvenida al Templo (primera vez)
// • Footer compartido con redes sociales
// ═══════════════════════════════════════════════════

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword,
         createUserWithEmailAndPassword, GoogleAuthProvider, signOut, updateProfile }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const fbCfg = {
  apiKey:"AIzaSyCCAIQPfCXAr0lIb5GyyyCj_lySbF5Liqg",
  authDomain:"diario-del-alma.firebaseapp.com",
  projectId:"diario-del-alma",
  storageBucket:"diario-del-alma.firebasestorage.app",
  messagingSenderId:"40226201072",
  appId:"1:40226201072:web:b8870564b9f6a270f71135"
};

const fbApp = getApps().length ? getApps()[0] : initializeApp(fbCfg);
const auth  = getAuth(fbApp);
const db    = getFirestore(fbApp);
const gProv = new GoogleAuthProvider();

const IS_DIARIO = location.pathname.includes('diario');
const BV_KEY    = 'bruxa_templo_bienvenida_v1';

// ── HELPER TRADUCCIÓN ────────────────────────────
const _t = k => (window.LangEngine?.t(k) !== k ? window.LangEngine?.t(k) : null) || ({
  ac_nav_btn:'✦ Mi Cuenta', ac_modal_title_reg:'Tu cuenta sagrada',
  ac_modal_title_login:'Bienvenida de vuelta',
  ac_modal_sub_reg:'Accede al Templo para guardar tu camino en el Manuscrito Antiguo.',
  ac_modal_sub_login:'El Templo recuerda cada paso tuyo.',
  ac_google:'Continuar con Google', ac_sep:'o con email',
  ac_name_label:'Nombre mágico', ac_name_ph:'¿Cómo quieres que te llamemos?',
  ac_email_label:'Email', ac_pass_label:'Contraseña', ac_pass_ph:'Mínimo 6 caracteres',
  ac_btn_reg:'Crear cuenta', ac_btn_login:'Entrar al Templo',
  ac_toggle_to_login:'¿Ya tienes cuenta? Inicia sesión',
  ac_toggle_to_reg:'¿Primera vez? Crear cuenta',
  ac_err_pass:'Contraseña incorrecta.', ac_err_no_account:'No existe esa cuenta.',
  ac_err_email_used:'Ese email ya está registrado.', ac_err_weak_pass:'La contraseña es muy corta.',
  ac_bv_badge:'✦ EL TEMPLO TE RECONOCE ✦', ac_bv_saludo:'Bienvenida,',
  ac_bv_text:'Has cruzado el umbral sagrado.\n\nDesde este momento, el Manuscrito Antiguo del Templo guardará tu camino — las cartas que consultes, los mensajes del Oráculo, los rituales que realices.\n\nTu historia en el Prisma ha comenzado.',
  ac_bv_btn:'✦ Entrar al Templo',
})[k] || k;

// ── ESTILOS ──────────────────────────────────────
const CSS = `
/* ── NAV CHIP / BTN ── */
#acChip{display:none;font-family:'Cinzel',serif;font-size:.55rem;letter-spacing:.12em;
  color:rgba(201,168,76,.75);padding:.3rem 1rem;border:1px solid rgba(201,168,76,.3);
  border-radius:100px;text-decoration:none;cursor:pointer;transition:all .3s;white-space:nowrap;
  background:rgba(201,168,76,.07)}
#acChip:hover{border-color:rgba(201,168,76,.6);color:#c9a84c;background:rgba(201,168,76,.12)}
#acLoginBtn{font-family:'Cinzel',serif;font-size:.55rem;letter-spacing:.15em;
  padding:.32rem 1rem;border-radius:100px;cursor:pointer;transition:all .3s;white-space:nowrap;
  border:none;background:linear-gradient(135deg,rgba(201,168,76,.7),rgba(160,120,40,.8));
  color:#04060f}
#acLoginBtn:hover{background:linear-gradient(135deg,#c9a84c,#a07828);box-shadow:0 0 20px rgba(201,168,76,.3)}

/* ── LOGIN MODAL ── */
#acModal{position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;
  padding:1.5rem;background:rgba(4,6,15,.88);backdrop-filter:blur(12px);
  opacity:0;pointer-events:none;transition:opacity .4s}
#acModal.open{opacity:1;pointer-events:all}
#acModalBox{width:100%;max-width:400px;background:linear-gradient(160deg,rgba(15,21,53,.97),rgba(4,6,15,.99));
  border:1px solid rgba(201,168,76,.22);border-radius:22px;padding:2.4rem 2rem;
  box-shadow:0 40px 80px rgba(0,0,0,.7),0 0 60px rgba(201,168,76,.06);
  transform:translateY(16px);transition:transform .4s cubic-bezier(.2,.8,.2,1);position:relative}
#acModal.open #acModalBox{transform:translateY(0)}
.ac-badge{font-family:'Cinzel',serif;font-size:.5rem;letter-spacing:.4em;color:#c9a84c;
  border:1px solid rgba(201,168,76,.2);padding:.3rem 1rem;border-radius:100px;
  background:rgba(201,168,76,.04);display:inline-block;margin-bottom:1.2rem}
.ac-title{font-family:'Cinzel Decorative',serif;font-size:1.3rem;color:#f5e6b8;font-weight:400;margin-bottom:.4rem}
.ac-sub{font-style:italic;color:#a09070;font-size:.9rem;line-height:1.6;margin-bottom:1.6rem}
.ac-google{width:100%;padding:.8rem;border-radius:100px;border:1px solid rgba(201,168,76,.28);
  background:rgba(201,168,76,.05);color:#f5e6b8;font-family:'Cinzel',serif;
  font-size:.65rem;letter-spacing:.18em;cursor:pointer;transition:all .3s;margin-bottom:1.2rem;
  display:flex;align-items:center;justify-content:center;gap:.7rem}
.ac-google:hover{background:rgba(201,168,76,.12);border-color:rgba(201,168,76,.45)}
.ac-sep{display:flex;align-items:center;gap:.8rem;margin-bottom:1.2rem;color:rgba(201,168,76,.25)}
.ac-sep::before,.ac-sep::after{content:'';flex:1;height:1px;background:rgba(201,168,76,.12)}
.ac-sep span{font-family:'Cinzel',serif;font-size:.5rem;letter-spacing:.18em}
.ac-field{margin-bottom:.8rem}
.ac-field label{font-family:'Cinzel',serif;font-size:.52rem;letter-spacing:.18em;
  color:rgba(201,168,76,.5);display:block;margin-bottom:.35rem}
.ac-field input{width:100%;padding:.65rem 1rem;border-radius:100px;
  border:1px solid rgba(201,168,76,.18);background:rgba(4,6,15,.6);
  color:#f5e6b8;font-family:'Cormorant Garamond',serif;font-size:.95rem;
  outline:none;transition:border-color .3s}
.ac-field input:focus{border-color:rgba(201,168,76,.45)}
.ac-submit{width:100%;padding:.8rem;border-radius:100px;border:none;margin-top:.4rem;
  background:linear-gradient(135deg,#c9a84c,#a07828);color:#04060f;
  font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.18em;cursor:pointer;
  transition:all .4s;box-shadow:0 0 24px rgba(201,168,76,.2)}
.ac-submit:hover{box-shadow:0 0 40px rgba(201,168,76,.38);transform:translateY(-1px)}
.ac-toggle{text-align:center;margin-top:1rem;font-family:'Cinzel',serif;font-size:.55rem;
  letter-spacing:.12em;color:rgba(201,168,76,.4);cursor:pointer;transition:color .3s}
.ac-toggle:hover{color:#c9a84c}
.ac-err{color:#f0a070;font-family:'Cinzel',serif;font-size:.55rem;letter-spacing:.08em;
  text-align:center;margin-top:.7rem;min-height:1rem}
.ac-close{position:absolute;top:1.2rem;right:1.4rem;background:none;border:none;
  color:rgba(201,168,76,.3);font-size:1.1rem;cursor:pointer;transition:color .3s}
.ac-close:hover{color:#c9a84c}

/* ── BIENVENIDA ── */
#acBienvenida{position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;
  padding:1.5rem;background:rgba(4,6,15,.9);backdrop-filter:blur(14px);
  opacity:0;pointer-events:none;transition:opacity .6s}
#acBienvenida.open{opacity:1;pointer-events:all}
#acBvBox{width:100%;max-width:460px;background:linear-gradient(160deg,rgba(10,15,40,.98),rgba(4,6,15,1));
  border:1px solid rgba(201,168,76,.2);border-radius:24px;padding:3rem 2.2rem;text-align:center;
  box-shadow:0 40px 80px rgba(0,0,0,.8),0 0 100px rgba(201,168,76,.07);
  transform:translateY(24px);transition:transform .6s cubic-bezier(.2,.8,.2,1)}
#acBienvenida.open #acBvBox{transform:translateY(0)}
.bv-glyph{font-size:2.4rem;display:block;margin-bottom:1.2rem;animation:bvFloat 3s ease-in-out infinite}
@keyframes bvFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.bv-badge{font-family:'Cinzel',serif;font-size:.48rem;letter-spacing:.45em;color:#c9a84c;
  border:1px solid rgba(201,168,76,.18);padding:.28rem 1rem;border-radius:100px;
  background:rgba(201,168,76,.04);display:inline-block;margin-bottom:1.2rem}
.bv-name{font-family:'Cinzel Decorative',serif;font-size:1.4rem;color:#f5e6b8;
  font-weight:400;line-height:1.3;margin-bottom:1.2rem}
.bv-line{width:60px;height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,.4),transparent);margin:0 auto 1.4rem}
.bv-text{font-style:italic;color:#b8a87a;font-size:1rem;line-height:1.9;margin-bottom:1.8rem}
.bv-text em{color:#e8c97a;font-style:normal}
.bv-btn{font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.2em;padding:.85rem 2.2rem;
  border-radius:100px;border:none;background:linear-gradient(135deg,#c9a84c,#a07828);
  color:#04060f;cursor:pointer;transition:all .4s;box-shadow:0 0 24px rgba(201,168,76,.2)}
.bv-btn:hover{box-shadow:0 0 44px rgba(201,168,76,.4);transform:translateY(-2px)}

/* ── SHARED FOOTER ── */
#acFooter{position:relative;z-index:1;border-top:1px solid rgba(201,168,76,.1);
  background:linear-gradient(to bottom,transparent,rgba(4,6,15,.6));
  padding:3rem 2rem 2rem;text-align:center}
.acf-social-label{font-family:'Cinzel',serif;font-size:.55rem;letter-spacing:.4em;
  color:rgba(201,168,76,.4);margin-bottom:1.6rem;display:block}
.acf-social-grid{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:2rem}
.acf-social-btn{display:flex;flex-direction:column;align-items:center;gap:.6rem;
  text-decoration:none;transition:transform .3s}
.acf-social-btn:hover{transform:translateY(-4px)}
.acf-social-btn img{width:52px;height:52px;object-fit:contain;border-radius:14px;
  box-shadow:0 4px 20px rgba(0,0,0,.4);transition:box-shadow .3s}
.acf-social-btn:hover img{box-shadow:0 8px 30px rgba(201,168,76,.2)}
.acf-social-btn span{font-family:'Cinzel',serif;font-size:.48rem;letter-spacing:.2em;
  color:rgba(201,168,76,.4);transition:color .3s}
.acf-social-btn:hover span{color:rgba(201,168,76,.7)}
.acf-divider{width:60px;height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,.2),transparent);
  margin:0 auto 1.8rem}
.acf-account-wrap{margin-bottom:1.6rem}
.acf-account-logged{display:none;font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.2em;
  color:rgba(201,168,76,.5);align-items:center;justify-content:center;gap:.8rem;flex-wrap:wrap}
.acf-account-logged a{color:rgba(201,168,76,.65);text-decoration:none;transition:color .3s}
.acf-account-logged a:hover{color:#c9a84c}
.acf-account-btn{font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.2em;
  padding:.7rem 2rem;border-radius:100px;border:none;cursor:pointer;transition:all .4s;
  background:linear-gradient(135deg,#c9a84c,#a07828);color:#04060f;
  box-shadow:0 0 20px rgba(201,168,76,.15)}
.acf-account-btn:hover{box-shadow:0 0 35px rgba(201,168,76,.35);transform:translateY(-2px)}
.acf-copyright{font-family:'Cinzel',serif;font-size:.52rem;letter-spacing:.2em;
  color:rgba(201,168,76,.25);margin-top:1.2rem}
`;

// ── INYECTAR UI ───────────────────────────────────
function injectUI() {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  // ── Login Modal ──
  const modal = document.createElement('div');
  modal.id = 'acModal';
  modal.innerHTML = `
    <div id="acModalBox">
      <button class="ac-close" onclick="window._acCerrarModal()">✕</button>
      <div style="text-align:center;margin-bottom:1.6rem">
        <span class="ac-badge">✦ TEMPLO DEL PRISMA ✦</span>
        <h2 class="ac-title" id="acModalTitle">${_t('ac_modal_title_reg')}</h2>
        <p class="ac-sub" id="acModalSub">${_t('ac_modal_sub_reg')}</p>
      </div>
      <button class="ac-google" onclick="window._acGoogle()">
        <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
        ${_t('ac_google')}
      </button>
      <div class="ac-sep"><span>${_t('ac_sep')}</span></div>
      <div id="acNameWrap" class="ac-field">
        <label>${_t('ac_name_label')}</label>
        <input id="acName" type="text" placeholder="${_t('ac_name_ph')}" autocomplete="off" disabled>
      </div>
      <div class="ac-field">
        <label>${_t('ac_email_label')}</label>
        <input id="acEmail" type="email" placeholder="tu@email.com" autocomplete="off" disabled>
      </div>
      <div class="ac-field">
        <label>${_t('ac_pass_label')}</label>
        <input id="acPass" type="password" placeholder="${_t('ac_pass_ph')}" autocomplete="new-password" disabled>
      </div>
      <button class="ac-submit" id="acSubmit" onclick="window._acEmail()">${_t('ac_btn_reg')}</button>
      <p class="ac-err" id="acErr"></p>
      <p class="ac-toggle" id="acToggle" onclick="window._acToggle()">${_t('ac_toggle_to_login')}</p>
    </div>`;
  document.body.appendChild(modal);

  // ── Bienvenida popup ──
  const bv = document.createElement('div');
  bv.id = 'acBienvenida';
  bv.innerHTML = `
    <div id="acBvBox">
      <span class="bv-glyph">📜</span>
      <span class="bv-badge" id="bvBadge">${_t('ac_bv_badge')}</span>
      <h2 class="bv-name" id="bvNombre">${_t('ac_bv_saludo')} Alma Brillante</h2>
      <div class="bv-line"></div>
      <p class="bv-text" id="bvText"></p>
      <button class="bv-btn" id="bvBtn" onclick="window._acCerrarBv()">${_t('ac_bv_btn')}</button>
    </div>`;
  document.body.appendChild(bv);

  // ── Chip + botón en nav ──
  const logo = document.querySelector('nav .nav-logo, nav a.nav-logo');
  if (logo) {
    const chip = document.createElement('a');
    chip.id = 'acChip';
    chip.href = 'diario.html';
    chip.title = 'Ir a mi Diario';
    logo.insertAdjacentElement('afterend', chip);

    const loginBtn = document.createElement('button');
    loginBtn.id = 'acLoginBtn';
    loginBtn.textContent = '✦ Mi Cuenta';
    loginBtn.onclick = () => window._acAbrirModal();
    logo.insertAdjacentElement('afterend', loginBtn);
  }

  // ── Sidebar (solo index.html) ──
  const sidebarNav = document.querySelector('.sidebar-nav');
  if (sidebarNav) {
    const se = document.createElement('div');
    se.id = 'acSidebarEntry';
    se.style.cssText = 'margin-top:.5rem;padding-top:.8rem;border-top:1px solid rgba(201,168,76,.1)';
    se.innerHTML = `
      <a id="acSidebarChip" href="diario.html" style="display:none;font-family:'Cinzel',serif;font-size:.7rem;letter-spacing:.15em;color:rgba(201,168,76,.7);padding:.5rem 1rem;align-items:center;gap:.5rem;text-decoration:none;transition:color .3s" class="sidebar-link">🌙 <span id="acSidebarName">Mi Diario</span></a>
      <button id="acSidebarBtn" onclick="window._acAbrirModal()" style="width:100%;margin-top:.3rem;font-family:'Cinzel',serif;font-size:.68rem;letter-spacing:.18em;padding:.7rem 1rem;border-radius:100px;border:none;background:linear-gradient(135deg,rgba(201,168,76,.6),rgba(160,120,40,.7));color:#04060f;cursor:pointer;transition:all .3s;text-align:center">✦ Crear cuenta · Iniciar sesión</button>`;
    sidebarNav.appendChild(se);
  }

  // ── Footer compartido con redes sociales ──
  // No duplicar si ya existe #acFooter
  if (document.getElementById('acFooter')) return;

  // Ocultar footer existente si hay uno (lo reemplazamos)
  const existingFooter = document.querySelector('footer');

  const footer = document.createElement('div');
  footer.id = 'acFooter';
  footer.innerHTML = `
    <span class="acf-social-label">✦ SÍGUEME EN LAS REDES ✦</span>
    <div class="acf-social-grid">
      <a href="https://www.instagram.com/bruxatarot" target="_blank" class="acf-social-btn">
        <img src="images/insta.png" alt="Instagram">
        <span>Instagram</span>
      </a>
      <a href="https://www.facebook.com/bruxatarot" target="_blank" class="acf-social-btn">
        <img src="images/facebook.png" alt="Facebook">
        <span>Facebook</span>
      </a>
      <a href="https://www.tiktok.com/@bruxatarot" target="_blank" class="acf-social-btn">
        <img src="images/tiktok.png" alt="TikTok">
        <span>TikTok</span>
      </a>
      <a href="https://www.youtube.com/@BruxaTarot" target="_blank" class="acf-social-btn">
        <img src="images/youtube.png" alt="YouTube">
        <span>YouTube</span>
      </a>
    </div>
    <div class="acf-divider"></div>
    <div class="acf-account-wrap">
      <div class="acf-account-logged" id="acfLoggedWrap">
        <span>🌙 <span id="acfUserName"></span></span>
        <a href="diario.html">📖 Mi Diario</a>
        <span>·</span>
        <span style="cursor:pointer;color:rgba(201,168,76,.4)" onclick="window._acSalir()">Salir</span>
      </div>
      <button class="acf-account-btn" id="acfLoginBtn" onclick="window._acAbrirModal()">
        ✦ Crear cuenta · Iniciar sesión
      </button>
    </div>
    <p class="acf-copyright">© 2026 Bruxa Tarot · Templo del Prisma · Oráculo Prisma del Alma</p>`;

  if (existingFooter) {
    existingFooter.replaceWith(footer);
  } else {
    document.body.appendChild(footer);
  }
}

// ── MODAL CONTROLS ────────────────────────────────
let acMode = 'register';

window._acAbrirModal = () => {
  document.getElementById('acModal')?.classList.add('open');
  document.getElementById('acErr').textContent = '';
  ['acName','acEmail','acPass'].forEach(id => { const el = document.getElementById(id); if(el) el.disabled = false; });
};
window._acCerrarModal = () => {
  document.getElementById('acModal')?.classList.remove('open');
  ['acName','acEmail','acPass'].forEach(id => { const el = document.getElementById(id); if(el) el.disabled = true; });
};
window._acCerrarBv    = () => document.getElementById('acBienvenida')?.classList.remove('open');
window._acSalir       = async () => { try { await signOut(auth); } catch(e) {} };

window._acToggle = () => {
  acMode = acMode === 'register' ? 'login' : 'register';
  const isReg = acMode === 'register';
  document.getElementById('acModalTitle').textContent = _t(isReg ? 'ac_modal_title_reg' : 'ac_modal_title_login');
  document.getElementById('acModalSub').textContent   = _t(isReg ? 'ac_modal_sub_reg'   : 'ac_modal_sub_login');
  document.getElementById('acNameWrap').style.display = isReg ? 'block' : 'none';
  document.getElementById('acSubmit').textContent     = _t(isReg ? 'ac_btn_reg' : 'ac_btn_login');
  document.getElementById('acToggle').textContent     = _t(isReg ? 'ac_toggle_to_login' : 'ac_toggle_to_reg');
  document.getElementById('acErr').textContent = '';
};

window._acGoogle = async () => {
  try { await signInWithPopup(auth, gProv); window._acCerrarModal(); }
  catch(e) { document.getElementById('acErr').textContent = e.message; }
};

window._acEmail = async () => {
  const email = document.getElementById('acEmail').value.trim();
  const pass  = document.getElementById('acPass').value;
  const name  = document.getElementById('acName').value.trim();
  try {
    if (acMode === 'register') {
      const cred = await createUserWithEmailAndPassword(auth, email, pass);
      if (name) await updateProfile(cred.user, { displayName: name });
    } else {
      await signInWithEmailAndPassword(auth, email, pass);
    }
    window._acCerrarModal();
  } catch(e) {
    const msgs = {
      'auth/wrong-password':_t('ac_err_pass'), 'auth/user-not-found':_t('ac_err_no_account'),
      'auth/email-already-in-use':_t('ac_err_email_used'), 'auth/weak-password':_t('ac_err_weak_pass'),
    };
    document.getElementById('acErr').textContent = msgs[e.code] || e.message;
  }
};

// ── BIENVENIDA ────────────────────────────────────
async function mostrarBienvenida(user) {
  if (IS_DIARIO) return;
  if (localStorage.getItem(BV_KEY)) return;
  localStorage.setItem(BV_KEY, '1');

  let nombre = user.displayName || 'Alma Brillante';
  try {
    const snap = await getDoc(doc(db, 'perfiles', user.uid));
    if (snap.exists() && snap.data().nombreMistico?.nombre) nombre = snap.data().nombreMistico.nombre;
  } catch(e) {}

  const elNombre = document.getElementById('bvNombre');
  if (elNombre) elNombre.textContent = _t('ac_bv_saludo') + ' ' + nombre;
  const elBadge = document.getElementById('bvBadge');
  if (elBadge) elBadge.textContent = _t('ac_bv_badge');
  const elText = document.getElementById('bvText');
  if (elText) {
    elText.innerHTML = _t('ac_bv_text')
      .replace(/(Manuscrito Antiguo del Templo|Ancient Manuscript of the Temple|Antico Manoscritto del Tempio|Manuscrito Antigo do Templo|古代写本|古代El Yazması)/g, m => `<em>${m}</em>`)
      .replace(/\n/g, '<br>');
  }
  const elBtn = document.getElementById('bvBtn');
  if (elBtn) elBtn.textContent = _t('ac_bv_btn');

  setTimeout(() => document.getElementById('acBienvenida')?.classList.add('open'), 800);
}

// ── AUTO-GUARDAR CARTA DEL DÍA ────────────────────
window._guardarCartaFirestore = async (cardName) => {
  const user = window._indexAuthUser;
  if (!user) return;
  const hoy = new Date().toISOString().split('T')[0];
  try {
    await setDoc(doc(db, 'perfiles', user.uid, 'cartas', hoy), {
      carta: cardName, fecha: hoy, ts: serverTimestamp()
    });
  } catch(e) { console.log('carta no guardada:', e); }
};

// ── AUTH STATE ────────────────────────────────────
let prevUid = null;

onAuthStateChanged(auth, user => {
  window._indexAuthUser = user || null;

  const chip       = document.getElementById('acChip');
  const loginBtn   = document.getElementById('acLoginBtn');
  const sidebarChip = document.getElementById('acSidebarChip');
  const sidebarBtn  = document.getElementById('acSidebarBtn');
  const sidebarName = document.getElementById('acSidebarName');
  const acfLoggedWrap = document.getElementById('acfLoggedWrap');
  const acfLoginBtn   = document.getElementById('acfLoginBtn');
  const acfUserName   = document.getElementById('acfUserName');

  if (user) {
    const name = user.displayName || user.email?.split('@')[0] || 'Alma';
    if (chip)           { chip.textContent = '🌙 ' + name; chip.style.display = 'inline-flex'; }
    if (loginBtn)       loginBtn.style.display = 'none';
    if (sidebarChip)    sidebarChip.style.display = 'flex';
    if (sidebarName)    sidebarName.textContent = name + ' · Mi Diario';
    if (sidebarBtn)     sidebarBtn.style.display = 'none';
    if (acfUserName)    acfUserName.textContent = name;
    if (acfLoggedWrap)  acfLoggedWrap.style.display = 'flex';
    if (acfLoginBtn)    acfLoginBtn.style.display = 'none';

    if (prevUid !== user.uid) { prevUid = user.uid; mostrarBienvenida(user); }
  } else {
    prevUid = null;
    if (chip)           chip.style.display = 'none';
    if (loginBtn)       loginBtn.style.display = 'inline-block';
    if (sidebarChip)    sidebarChip.style.display = 'none';
    if (sidebarBtn)     sidebarBtn.style.display = 'block';
    if (acfLoggedWrap)  acfLoggedWrap.style.display = 'none';
    if (acfLoginBtn)    acfLoginBtn.style.display = 'inline-block';
  }
});

// ── INIT ─────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectUI);
} else {
  injectUI();
}
