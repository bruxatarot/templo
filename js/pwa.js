/*
  PWA Helper - Templo del Prisma
  Registra Service Worker + Prompt de instalación + Indicador offline
  Para lecturas offline del Oráculo
*/

(function() {
  'use strict';

  // Registrar Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(registration => {
          console.log('%c[Bruxa PWA] Service Worker registrado correctamente', 'color:#c9a84c');
          
          // Escuchar actualizaciones
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Nueva versión disponible
                showUpdateToast();
              }
            });
          });
        })
        .catch(err => {
          console.warn('[Bruxa PWA] Error al registrar SW:', err);
        });
    });
  }

  // Prompt de instalación (Add to Home Screen)
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Mostrar botón de instalar después de 8 segundos o en interacción
    setTimeout(() => {
      showInstallButton();
    }, 8000);
  });

  function showInstallButton() {
    // Crear botón flotante bonito si no existe
    if (document.getElementById('pwa-install-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'pwa-install-btn';
    btn.innerHTML = `
      <span style="margin-right:8px">📱</span> 
      Instalar App del Templo
    `;
    btn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      background: linear-gradient(135deg, #c9a84c, #a07828);
      color: #04060f;
      border: none;
      padding: 12px 20px;
      border-radius: 50px;
      font-family: 'Cinzel', serif;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      box-shadow: 0 4px 20px rgba(201,168,76,0.4);
      cursor: pointer;
      transition: all 0.3s ease;
    `;

    btn.onclick = async () => {
      if (!deferredPrompt) return;
      
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('%c[Bruxa PWA] Usuario instaló la app', 'color:#c9a84c');
      }
      
      btn.style.transition = 'all 0.3s';
      btn.style.opacity = '0';
      setTimeout(() => btn.remove(), 300);
      deferredPrompt = null;
    };

    document.body.appendChild(btn);

    // Auto-ocultar después de 25 segundos si no se usa
    setTimeout(() => {
      if (btn && btn.parentNode) btn.parentNode.removeChild(btn);
    }, 25000);
  }

  // Indicador de estado offline / online
  function updateOnlineStatus() {
    const existing = document.getElementById('pwa-status');
    if (existing) existing.remove();

    if (!navigator.onLine) {
      const bar = document.createElement('div');
      bar.id = 'pwa-status';
      bar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #3a2a1a;
        color: #f5d9a0;
        text-align: center;
        padding: 6px 12px;
        font-size: 0.7rem;
        font-family: 'Cinzel', serif;
        letter-spacing: 0.1em;
        z-index: 10000;
        border-bottom: 1px solid #c9a84c;
      `;
      bar.innerHTML = `🦋 <strong>Modo Offline</strong> — Tus lecturas del Oráculo están disponibles`;
      document.body.prepend(bar);
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  // Mostrar estado inicial
  if (!navigator.onLine) {
    setTimeout(updateOnlineStatus, 1200);
  }

  // Toast para actualización de SW
  function showUpdateToast() {
    const toast = document.createElement('div');
    toast.style.cssText = `position:fixed;bottom:80px;left:50%;transform:translateX(-50%);
      background:#1a1528;color:#c9a84c;padding:12px 24px;border-radius:50px;
      font-family:'Cinzel',serif;font-size:0.75rem;border:1px solid #c9a84c;
      box-shadow:0 4px 20px rgba(0,0,0,0.4);z-index:99999;cursor:pointer;`;
    toast.innerHTML = `✨ Nueva versión del Templo disponible. <strong>Toca para actualizar</strong>`;
    
    toast.onclick = () => {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      }
      window.location.reload();
    };

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 12000);
  }

  // Exponer función útil
  window.BruxaPWA = {
    install: () => {
      const btn = document.getElementById('pwa-install-btn');
      if (btn) btn.click();
    },
    checkForUpdate: () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(reg => {
          if (reg) reg.update();
        });
      }
    }
  };

  console.log('%c[Bruxa Tarot PWA] Helper cargado — Lecturas offline activas', 'color:#7c3aed');
})();