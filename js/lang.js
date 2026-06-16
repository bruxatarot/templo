// js/lang.js
const LangEngine = {
  current: 'es',

  detect() {
    const saved = localStorage.getItem('bt_lang');
    if (saved && window.LANGS?.[saved]) return saved;

    const b = (navigator.language || 'es').toLowerCase();
    if (b.startsWith('ko')) return 'ko';
    if (b.startsWith('pt')) return 'pt';
    if (b.startsWith('it')) return 'it';
    if (b.startsWith('ja')) return 'ja';
    if (b.startsWith('tr')) return 'tr';
    if (b.startsWith('en')) return 'en';
    return 'es';
  },

  set(lang) {
    if (!window.LANGS?.[lang]) {
      console.warn(`Idioma "${lang}" no cargado todavía`);
      return;
    }
    this.current = lang;
    localStorage.setItem('bt_lang', lang);
    document.documentElement.lang = lang;
    this.apply();
    this.updateButtons();
  },

  t(key) {
    return window.LANGS[this.current]?.[key] || window.LANGS['es']?.[key] || key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = this.t(el.getAttribute('data-i18n'));
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.textContent = val;
    });
    document.dispatchEvent(new CustomEvent('langchange', { detail: this.current }));
  },

  updateButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  },

  init() {
    this.current = this.detect();
    document.documentElement.lang = this.current;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.apply());
    } else {
      this.apply();
    }
  }
};

window.LangEngine = LangEngine;
