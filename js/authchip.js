// ═══════════════════════════════════════════════════
// AUTH-CHIP.JS — Cuenta unificada del Templo
// • Chip de usuario en nav de todas las páginas
// • Mini modal de login / crear cuenta
// • Popup de bienvenida al Templo (primera vez)
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

const fbApp   = getApps().length ? getApps()[0] : initializeApp(fbCfg);
const auth    = getAuth(fbApp);
const db      = getFirestore(fbApp);
const gProv   = new GoogleAuthProvider();

const IS_DIARIO = location.pathname.includes('diario');
const BV_KEY    = 'bruxa_templo_bienvenida_v1';

// ── ESTILOS ──────────────────────────────────────
const CSS = `
#acChip{display:none;font-family:'Cinzel',serif;font-size:.55rem;letter-spacing:.12em;
  color:rgba(201,168,76,.65);padding:.28rem .9rem;border:1px solid rgba(201,168,76,.2);
  border-radius:100px;text-decoration:none;cursor:pointer;transition:all .3s;white-space:nowrap;
  background:transparent}
#acChip:hover{border-color:rgba(201,168,76,.5);color:#c9a84c}
#acLoginBtn{font-family:'Cinzel',serif;font-size:.55rem;letter-spacing:.15em;
  padding:.28rem .9rem;border-radius:100px;border:1px solid rgba(201,168,76,.25);
  background:transparent;color:rgba(201,168,76,.55);cursor:pointer;transition:all .3s}
#acLoginBtn:hover{border-color:rgba(201,168,76,.5);color:#c9a84c}

/* ── LOGIN MODAL ── */
#acModal{position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;
  padding:1.5rem;background:rgba(4,6,15,.88);backdrop-filter:blur(12px);
  opacity:0;pointer-events:none;transition:opacity .4s}
#acModal.open{opacity:1;pointer-events:all}
#acModalBox{width:100%;max-width:400px;background:linear-gradient(160deg,rgba(15,21,53,.97),rgba(4,6,15,.99));
  border:1px solid rgba(201,168,76,.22);border-radius:22px;padding:2.4rem 2rem;
  box-shadow:0 40px 80px rgba(0,0,0,.7),0 0 60px rgba(201,168,76,.06);
  transform:translateY(16px);transition:transform .4s cubic-bezier(.2,.8,.2,1)}
#acModal.open #acModalBox{transform:translateY(0)}
.ac-badge{font-family:'Cinzel',serif;font-size:.5rem;letter-spacing:.4em;color:#c9a84c;
  border:1px solid rgba(201,168,76,.2);padding:.3rem 1rem;border-radius:100px;
  background:rgba(201,168,76,.04);display:inline-block;margin-bottom:1.2rem}
.ac-title{font-family:'Cinzel Decorative',serif;font-size:1.3rem;color:#f5e6b8;
  font-weight:400;margin-bottom:.4rem}
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
#acModalBox{position:relative}

/* ── BIENVENIDA AL TEMPLO ── */
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
.bv-line{width:60px;height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,.4),transparent);
  margin:0 auto 1.4rem}
.bv-text{font-style:italic;color:#b8a87a;font-size:1rem;line-height:1.9;margin-bottom:1.8rem}
.bv-text em{color:#e8c97a;font-style:normal}
.bv-btn{font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.2em;padding:.85rem 2.2rem;
  border-radius:100px;border:none;background:linear-gradient(135deg,#c9a84c,#a07828);
  color:#04060f;cursor:pointer;transition:all .4s;box-shadow:0 0 24px rgba(201,168,76,.2)}
.bv-btn:hover{box-shadow:0 0 44px rgba(201,168,76,.4);transform:translateY(-2px)}
`;

// ── INYECTAR ESTILOS Y HTML ───────────────────────
function injectUI() {
  // Estilos
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  // Login Modal
  const modal = document.createElement('div');
  modal.id = 'acModal';
  modal.innerHTML = `
    <div id="acModalBox">
      <button class="ac-close" onclick="window._acCerrarModal()">✕</button>
      <div style="text-align:center;margin-bottom:1.6rem">
        <span class="ac-badge">✦ TEMPLO DEL PRISMA ✦</span>
        <h2 class="ac-title" id="acModalTitle">Tu cuenta sagrada</h2>
        <p class="ac-sub" id="acModalSub">Accede al Templo para guardar tu camino en el Manuscrito Antiguo.</p>
      </div>
      <button class="ac-google" onclick="window._acGoogle()">
        <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
        Continuar con Google
      </button>
      <div class="ac-sep"><span>o con email</span></div>
      <div id="acNameWrap" class="ac-field">
        <label>Nombre mágico</label>
        <input id="acName" type="text" placeholder="¿Cómo quieres que te llamemos?">
      </div>
      <div class="ac-field">
        <label>Email</label>
        <input id="acEmail" type="email" placeholder="tu@email.com">
      </div>
      <div class="ac-field">
        <label>Contraseña</label>
        <input id="acPass" type="password" placeholder="Mínimo 6 caracteres">
      </div>
      <button class="ac-submit" id="acSubmit" onclick="window._acEmail()">Crear cuenta</button>
      <p class="ac-err" id="acErr"></p>
      <p class="ac-toggle" id="acToggle" onclick="window._acToggle()">¿Ya tienes cuenta? Inicia sesión</p>
    </div>
  `;
  document.body.appendChild(modal);

  // Bienvenida popup
  const bv = document.createElement('div');
  bv.id = 'acBienvenida';
  bv.innerHTML = `
    <div id="acBvBox">
      <span class="bv-glyph">📜</span>
      <span class="bv-badge">✦ EL TEMPLO TE RECONOCE ✦</span>
      <h2 class="bv-name" id="bvNombre">Bienvenida, Alma Brillante</h2>
      <div class="bv-line"></div>
      <p class="bv-text">
        Has cruzado el umbral sagrado.<br><br>
        Desde este momento, el <em>Manuscrito Antiguo del Templo</em><br>
        guardará tu camino —<br>
        las cartas que consultes, los mensajes del Oráculo,<br>
        los rituales que realices.<br><br>
        <em>Tu historia en el Prisma ha comenzado.</em>
      </p>
      <button class="bv-btn" onclick="window._acCerrarBv()">✦ Entrar al Templo</button>
    </div>
  `;
  document.body.appendChild(bv);

  // Chip + botón en nav
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
}

// ── MODAL CONTROLS ────────────────────────────────
let acMode = 'register';

window._acAbrirModal = () => {
  document.getElementById('acModal')?.classList.add('open');
  document.getElementById('acErr').textContent = '';
};
window._acCerrarModal = () => {
  document.getElementById('acModal')?.classList.remove('open');
};
window._acCerrarBv = () => {
  document.getElementById('acBienvenida')?.classList.remove('open');
};

window._acToggle = () => {
  acMode = acMode === 'register' ? 'login' : 'register';
  const isReg = acMode === 'register';
  document.getElementById('acModalTitle').textContent = isReg ? 'Tu cuenta sagrada' : 'Bienvenida de vuelta';
  document.getElementById('acModalSub').textContent   = isReg
    ? 'Accede al Templo para guardar tu camino en el Manuscrito Antiguo.'
    : 'El Templo recuerda cada paso tuyo.';
  document.getElementById('acNameWrap').style.display = isReg ? 'block' : 'none';
  document.getElementById('acSubmit').textContent     = isReg ? 'Crear cuenta' : 'Entrar al Templo';
  document.getElementById('acToggle').textContent     = isReg ? '¿Ya tienes cuenta? Inicia sesión' : '¿Primera vez? Crear cuenta';
  document.getElementById('acErr').textContent = '';
};

window._acGoogle = async () => {
  try {
    await signInWithPopup(auth, gProv);
    window._acCerrarModal();
  } catch(e) { document.getElementById('acErr').textContent = e.message; }
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
      'auth/wrong-password':'Contraseña incorrecta.',
      'auth/user-not-found':'No existe esa cuenta.',
      'auth/email-already-in-use':'Ese email ya está registrado.',
      'auth/weak-password':'La contraseña es muy corta.'
    };
    document.getElementById('acErr').textContent = msgs[e.code] || e.message;
  }
};

// ── BIENVENIDA AL TEMPLO ──────────────────────────
async function mostrarBienvenida(user) {
  if (IS_DIARIO) return; // diario tiene su propio saludo
  if (localStorage.getItem(BV_KEY)) return;
  localStorage.setItem(BV_KEY, '1');

  // Intentar cargar nombre místico de Firestore
  let nombre = user.displayName || 'Alma Brillante';
  try {
    const snap = await getDoc(doc(db, 'perfiles', user.uid));
    if (snap.exists() && snap.data().nombreMistico?.nombre) {
      nombre = snap.data().nombreMistico.nombre;
    }
  } catch(e) {}

  const el = document.getElementById('bvNombre');
  if (el) el.textContent = 'Bienvenida, ' + nombre;

  setTimeout(() => {
    document.getElementById('acBienvenida')?.classList.add('open');
  }, 800);
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

  const chip     = document.getElementById('acChip');
  const loginBtn = document.getElementById('acLoginBtn');

  if (user) {
    const name = user.displayName || user.email?.split('@')[0] || 'Alma';
    if (chip)     { chip.textContent = '🌙 ' + name; chip.style.display = 'inline-flex'; }
    if (loginBtn) loginBtn.style.display = 'none';

    // Primera vez que se loguea en esta sesión de navegador
    if (prevUid !== user.uid) {
      prevUid = user.uid;
      mostrarBienvenida(user);
    }
  } else {
    prevUid = null;
    if (chip)     chip.style.display = 'none';
    if (loginBtn) loginBtn.style.display = 'inline-block';
  }
});

// ── INIT ─────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectUI);
} else {
  injectUI();
}
