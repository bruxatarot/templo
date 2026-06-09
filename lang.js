// ── BRUXA TAROT • SISTEMA DE IDIOMAS ──
// Archivo central de traducciones para todas las páginas

const LANGS = {

  // ══════════════════════════════════════════
  // ESPAÑOL
  // ══════════════════════════════════════════
  es: {
    // NAV
    nav_home:    'Inicio',
    nav_bruja:   'La Bruja',
    nav_templo:  'El Templo',
    nav_carta:   'Carta del Día',
    nav_redes:   'Conecta',
    nav_rituales:'Rituales',
    nav_back:    '← Volver al Templo',

    // LANG SELECTOR
    lang_label: 'Idioma',

    // HERO (index)
    hero_badge:    '✦ TEMPLO DEL PRISMA ✦',
    hero_greeting: 'Hola, Alma Brillante…',
    hero_tagline:  'Un templo donde tu alma recuerda su luz,\nsu sombra y su verdadero poder.',
    hero_cta_templo: 'Entrar al Templo',
    hero_cta_carta:  'Carta del Día',
    hero_scroll:   'Baja',

    // QUIEN SOY
    qs_label:   'La Bruja detrás del Templo',
    qs_title:   'Soy Bruxa Tarot',
    qs_quote:   '"La vida no es blanco y negro.\nEs un prisma de infinitos colores esperando ser vividos."',
    qs_body1:   'Soy una guía espiritual, lectora de Tarot y creadora del Oráculo Prisma del Alma — 31 cartas nacidas de mis propias historias, personajes y canalización.',
    qs_body2:   'Cada carta es un espejo. Cada lectura, un regreso a ti.',
    qs_photo:   'Tu fotografía\nva aquí, Bruxa',

    // TEMPLO
    templo_label: 'El Templo',
    templo_title: '¿Qué encontrarás aquí?',
    templo_body:  'El Templo del Prisma es donde conviven las Esencias Sagradas, las Dualidades, los Guardianes, las Llaves Prismáticas y los Portales Místicos de tu alma.',
    portal_oraculo_name: 'Oráculo Prisma',
    portal_oraculo_desc: '31 cartas nacidas de mis historias. Personajes reales que te hablan directamente desde el alma.',
    portal_musica_name:  'Música Sagrada',
    portal_musica_desc:  'Frecuencias y canalizaciones para elevar tu vibración y sanar desde adentro.',
    portal_historias_name: 'Mis Historias',
    portal_historias_desc: 'Los personajes del Oráculo tienen vida propia. Conócelos, siéntelos, reconócete en ellos.',
    portal_rituales_name:  'Rituales del Alma',
    portal_rituales_desc:  'Magia práctica para cada luna, cada carta, cada transformación que tu alma está pidiendo.',

    // CARTA DEL DÍA
    carta_label:        'Oráculo Prisma del Alma',
    carta_title:        'Carta del Día',
    carta_instruction:  'Respira profundo, Alma Brillante. Piensa en lo que necesitas hoy. Cuando sientas el llamado, voltea la carta y recibe el mensaje que lleva tu nombre.',
    carta_tap:          'Toca la carta para voltearla',
    carta_reading_title: '✦ MENSAJE DEL ORÁCULO ✦',
    carta_nuevo:        '✦ Nueva tirada',

    // REDES
    redes_label: 'Conecta con la Bruja',
    redes_title: 'Encuéntrame en el cosmos',
    redes_body:  'Cada red es un portal distinto al Templo. Ven, el alma siempre encuentra su camino.',

    // FOOTER
    footer: '© 2026 Bruxa Tarot • Templo del Prisma • Oráculo Prisma del Alma',

    // RITUALES (página rituales.html)
    rit_badge:       '✦ ORÁCULO PRISMA DEL ALMA ✦',
    rit_title:       'Rituales\ndel Prisma',
    rit_sub:         'Hola, Alma Brillante. El ritual que necesitas hoy ya te está esperando. Respira profundo, observa el mazo y elige la carta que te llame.',
    rit_hint:        '☽ Las 31 cartas te aguardan boca abajo ☾',
    rit_shuffle:     '✦ Barajar el Mazo',
    rit_ver_todas:   'Ver todas las cartas',
    rit_filter_all:  'Todas',
    rit_keywords_lbl:'Palabras clave',
    rit_ritual_lbl:  'Ritual sugerido',
    rit_elegir_otra: '✦ Elegir otra carta',
    rit_carta_dia:   'Carta del Día',
  },

  // ══════════════════════════════════════════
  // ENGLISH
  // ══════════════════════════════════════════
  en: {
    nav_home:    'Home',
    nav_bruja:   'The Witch',
    nav_templo:  'The Temple',
    nav_carta:   'Card of the Day',
    nav_redes:   'Connect',
    nav_rituales:'Rituals',
    nav_back:    '← Back to the Temple',

    lang_label: 'Language',

    hero_badge:    '✦ TEMPLE OF THE PRISM ✦',
    hero_greeting: 'Hello, Brilliant Soul…',
    hero_tagline:  'A temple where your soul remembers its light,\nits shadow and its true power.',
    hero_cta_templo: 'Enter the Temple',
    hero_cta_carta:  'Card of the Day',
    hero_scroll:   'Scroll',

    qs_label:   'The Witch behind the Temple',
    qs_title:   'I am Bruxa Tarot',
    qs_quote:   '"Life is not black and white.\nIt is a prism of infinite colors waiting to be lived."',
    qs_body1:   'I am a spiritual guide, Tarot reader and creator of the Prisma Soul Oracle — 31 cards born from my own stories, characters and channeling.',
    qs_body2:   'Every card is a mirror. Every reading, a return to yourself.',
    qs_photo:   'Your photo\ngoes here, Bruxa',

    templo_label: 'The Temple',
    templo_title: 'What will you find here?',
    templo_body:  'The Temple of the Prism is where Sacred Essences, Dualities, Guardians, Prismatic Keys and Mystical Portals of your soul coexist.',
    portal_oraculo_name: 'Prisma Oracle',
    portal_oraculo_desc: '31 cards born from my stories. Real characters that speak to you directly from the soul.',
    portal_musica_name:  'Sacred Music',
    portal_musica_desc:  'Frequencies and channelings to elevate your vibration and heal from within.',
    portal_historias_name: 'My Stories',
    portal_historias_desc: 'The Oracle characters have a life of their own. Meet them, feel them, recognize yourself in them.',
    portal_rituales_name:  'Soul Rituals',
    portal_rituales_desc:  'Practical magic for every moon, every card, every transformation your soul is calling for.',

    carta_label:        'Prisma Soul Oracle',
    carta_title:        'Card of the Day',
    carta_instruction:  'Breathe deeply, Brilliant Soul. Think about what you need today. When you feel the call, flip the card and receive the message that carries your name.',
    carta_tap:          'Tap the card to flip it',
    carta_reading_title: '✦ MESSAGE FROM THE ORACLE ✦',
    carta_nuevo:        '✦ New reading',

    redes_label: 'Connect with the Witch',
    redes_title: 'Find me in the cosmos',
    redes_body:  'Each network is a different portal to the Temple. Come, the soul always finds its way.',

    footer: '© 2026 Bruxa Tarot • Temple of the Prism • Prisma Soul Oracle',

    rit_badge:       '✦ PRISMA SOUL ORACLE ✦',
    rit_title:       'Prisma\nRituals',
    rit_sub:         'Hello, Brilliant Soul. The ritual you need today is already waiting for you. Breathe deeply, observe the deck and choose the card that calls you.',
    rit_hint:        '☽ All 31 cards await you face down ☾',
    rit_shuffle:     '✦ Shuffle the Deck',
    rit_ver_todas:   'See all cards',
    rit_filter_all:  'All',
    rit_keywords_lbl:'Keywords',
    rit_ritual_lbl:  'Suggested ritual',
    rit_elegir_otra: '✦ Choose another card',
    rit_carta_dia:   'Card of the Day',
  },

  // ══════════════════════════════════════════
  // ITALIANO
  // ══════════════════════════════════════════
  it: {
    nav_home:    'Home',
    nav_bruja:   'La Strega',
    nav_templo:  'Il Tempio',
    nav_carta:   'Carta del Giorno',
    nav_redes:   'Connettiti',
    nav_rituales:'Rituali',
    nav_back:    '← Torna al Tempio',

    lang_label: 'Lingua',

    hero_badge:    '✦ TEMPIO DEL PRISMA ✦',
    hero_greeting: 'Ciao, Anima Brillante…',
    hero_tagline:  'Un tempio dove la tua anima ricorda la sua luce,\nla sua ombra e il suo vero potere.',
    hero_cta_templo: 'Entra nel Tempio',
    hero_cta_carta:  'Carta del Giorno',
    hero_scroll:   'Scorri',

    qs_label:   'La Strega dietro il Tempio',
    qs_title:   'Sono Bruxa Tarot',
    qs_quote:   '"La vita non è in bianco e nero.\nÈ un prisma di colori infiniti che aspettano di essere vissuti."',
    qs_body1:   'Sono una guida spirituale, lettrice di Tarocchi e creatrice dell\'Oracolo Prisma dell\'Anima — 31 carte nate dalle mie storie, personaggi e canalizzazioni.',
    qs_body2:   'Ogni carta è uno specchio. Ogni lettura, un ritorno a te stessa.',
    qs_photo:   'La tua foto\nva qui, Bruxa',

    templo_label: 'Il Tempio',
    templo_title: 'Cosa troverai qui?',
    templo_body:  'Il Tempio del Prisma è dove coesistono le Essenze Sacre, le Dualità, i Guardiani, le Chiavi Prismatiche e i Portali Mistici della tua anima.',
    portal_oraculo_name: 'Oracolo Prisma',
    portal_oraculo_desc: '31 carte nate dalle mie storie. Personaggi reali che ti parlano direttamente dall\'anima.',
    portal_musica_name:  'Musica Sacra',
    portal_musica_desc:  'Frequenze e canalizzazioni per elevare la tua vibrazione e guarire dall\'interno.',
    portal_historias_name: 'Le Mie Storie',
    portal_historias_desc: 'I personaggi dell\'Oracolo hanno vita propria. Conoscili, sentili, riconosciti in loro.',
    portal_rituales_name:  'Rituali dell\'Anima',
    portal_rituales_desc:  'Magia pratica per ogni luna, ogni carta, ogni trasformazione che la tua anima sta chiedendo.',

    carta_label:        'Oracolo Prisma dell\'Anima',
    carta_title:        'Carta del Giorno',
    carta_instruction:  'Respira profondamente, Anima Brillante. Pensa a ciò di cui hai bisogno oggi. Quando senti il richiamo, gira la carta e ricevi il messaggio che porta il tuo nome.',
    carta_tap:          'Tocca la carta per girarla',
    carta_reading_title: '✦ MESSAGGIO DELL\'ORACOLO ✦',
    carta_nuevo:        '✦ Nuova lettura',

    redes_label: 'Connettiti con la Strega',
    redes_title: 'Trovami nel cosmo',
    redes_body:  'Ogni rete è un portale diverso al Tempio. Vieni, l\'anima trova sempre la sua strada.',

    footer: '© 2026 Bruxa Tarot • Tempio del Prisma • Oracolo Prisma dell\'Anima',

    rit_badge:       '✦ ORACOLO PRISMA DELL\'ANIMA ✦',
    rit_title:       'Rituali\ndel Prisma',
    rit_sub:         'Ciao, Anima Brillante. Il rituale di cui hai bisogno oggi ti sta già aspettando. Respira profondamente, osserva il mazzo e scegli la carta che ti chiama.',
    rit_hint:        '☽ Le 31 carte ti aspettano a faccia in giù ☾',
    rit_shuffle:     '✦ Mescola il Mazzo',
    rit_ver_todas:   'Vedi tutte le carte',
    rit_filter_all:  'Tutte',
    rit_keywords_lbl:'Parole chiave',
    rit_ritual_lbl:  'Rituale suggerito',
    rit_elegir_otra: '✦ Scegli un\'altra carta',
    rit_carta_dia:   'Carta del Giorno',
  },

  // ══════════════════════════════════════════
  // 한국어 (COREANO)
  // ══════════════════════════════════════════
  ko: {
    nav_home:    '홈',
    nav_bruja:   '마녀',
    nav_templo:  '신전',
    nav_carta:   '오늘의 카드',
    nav_redes:   '연결',
    nav_rituales:'의식',
    nav_back:    '← 신전으로 돌아가기',

    lang_label: '언어',

    hero_badge:    '✦ 프리즘의 신전 ✦',
    hero_greeting: '안녕하세요, 빛나는 영혼이여…',
    hero_tagline:  '당신의 영혼이 빛과 그림자,\n그리고 진정한 힘을 기억하는 신전.',
    hero_cta_templo: '신전 입장',
    hero_cta_carta:  '오늘의 카드',
    hero_scroll:   '아래로',

    qs_label:   '신전 뒤의 마녀',
    qs_title:   '저는 Bruxa Tarot입니다',
    qs_quote:   '"삶은 흑백이 아닙니다.\n살아가기를 기다리는 무한한 색의 프리즘입니다."',
    qs_body1:   '저는 영적 안내자이자 타로 리더이며, 프리즈마 영혼 오라클의 창조자입니다. 나의 이야기, 캐릭터, 채널링에서 탄생한 31장의 카드.',
    qs_body2:   '모든 카드는 거울입니다. 모든 리딩은 당신 자신으로의 귀환입니다.',
    qs_photo:   '여기에 당신의\n사진이 들어갑니다',

    templo_label: '신전',
    templo_title: '여기서 무엇을 찾을 수 있나요?',
    templo_body:  '프리즘의 신전은 당신 영혼의 신성한 본질, 이중성, 수호자, 프리즘 열쇠, 신비로운 포털이 공존하는 곳입니다.',
    portal_oraculo_name: '프리즘 오라클',
    portal_oraculo_desc: '나의 이야기에서 탄생한 31장의 카드. 영혼에서 직접 당신에게 말하는 실제 캐릭터들.',
    portal_musica_name:  '신성한 음악',
    portal_musica_desc:  '당신의 진동을 높이고 내면에서 치유하기 위한 주파수와 채널링.',
    portal_historias_name: '나의 이야기',
    portal_historias_desc: '오라클 캐릭터들은 고유한 생명을 가지고 있습니다. 그들을 만나고, 느끼고, 그 안에서 자신을 발견하세요.',
    portal_rituales_name:  '영혼의 의식',
    portal_rituales_desc:  '매 달, 매 카드, 당신의 영혼이 요청하는 모든 변화를 위한 실용적인 마법.',

    carta_label:        '프리즘 영혼 오라클',
    carta_title:        '오늘의 카드',
    carta_instruction:  '깊게 숨을 쉬세요, 빛나는 영혼이여. 오늘 필요한 것을 생각해보세요. 부름을 느낄 때 카드를 뒤집고 당신의 이름이 담긴 메시지를 받으세요.',
    carta_tap:          '카드를 터치하여 뒤집기',
    carta_reading_title: '✦ 오라클의 메시지 ✦',
    carta_nuevo:        '✦ 새로운 리딩',

    redes_label: '마녀와 연결하기',
    redes_title: '우주에서 나를 찾아보세요',
    redes_body:  '각 네트워크는 신전으로 향하는 다른 포털입니다. 오세요, 영혼은 항상 길을 찾습니다.',

    footer: '© 2026 Bruxa Tarot • 프리즘의 신전 • 프리즘 영혼 오라클',

    rit_badge:       '✦ 프리즘 영혼 오라클 ✦',
    rit_title:       '프리즘\n의식',
    rit_sub:         '안녕하세요, 빛나는 영혼이여. 오늘 필요한 의식이 이미 당신을 기다리고 있습니다. 깊게 숨을 쉬고, 덱을 관찰하고, 당신을 부르는 카드를 선택하세요.',
    rit_hint:        '☽ 31장의 카드가 뒤집혀 당신을 기다립니다 ☾',
    rit_shuffle:     '✦ 덱 셔플',
    rit_ver_todas:   '모든 카드 보기',
    rit_filter_all:  '전체',
    rit_keywords_lbl:'키워드',
    rit_ritual_lbl:  '추천 의식',
    rit_elegir_otra: '✦ 다른 카드 선택',
    rit_carta_dia:   '오늘의 카드',
  }
};

// ── CARD TRANSLATIONS ──
const CARD_TRANSLATIONS = {
  en: {
    catLabels: {
      esencias:   '🌈 Sacred Essences',
      dualidades: '🌒 Prism Dualities',
      guardianes: '🛡️ Prism Guardians',
      llaves:     '💠 Prismatic Keys',
      portales:   '🌌 Mystical Portals'
    },
    filterLabels: ['All','🌈 Sacred Essences','🌒 Dualities','🛡️ Guardians','💠 Keys','🌌 Portals'],
    subtitles: ['Prism Channeler','Spirit Hunter','Healing Goddess','Karma Goddess','Goddess of the Path','Goddess of Self-Love','God of Time','God of Fire & Resurrection','Inner Return','Spiritual Awakening','Reconnection','Shadow Weaver','Echo of Doubt','The Subtle Poison','Silent Intrusion','Prisoner of Yesterday','Eternal Whisper','The Voice Against Injustice','Protector of Broken Hearts','The Druid of the Mirror','The Three Heart Allies','Cupid Undercover','Soul Cheerleader','Guardian of Portals','The Illuminated','Underworld Traveler','Mystical Portal','Mystical Portal','Mystical Portal','Mystical Portal','Mystical Portal']
  },
  it: {
    catLabels: {
      esencias:   '🌈 Essenze Sacre',
      dualidades: '🌒 Dualità del Prisma',
      guardianes: '🛡️ Guardiani del Prisma',
      llaves:     '💠 Chiavi Prismatiche',
      portales:   '🌌 Portali Mistici'
    },
    filterLabels: ['Tutte','🌈 Essenze Sacre','🌒 Dualità','🛡️ Guardiani','💠 Chiavi','🌌 Portali'],
    subtitles: ['Canalizzatrice del Prisma','Cacciatrice di Spiriti','Dea della Guarigione','Dea del Karma','Dea del Cammino','Dea dell\'Amore Proprio','Dio del Tempo','Dio del Fuoco e della Resurrezione','Ritorno Interiore','Risveglio Spirituale','Riconnessione','Tessitore di Ombre','Eco del Dubbio','Il Veleno Sottile','Intrusione Silenziosa','Prigioniera di Ieri','Sussurro Eterno','La Voce Contro l\'Ingiustizia','Protettore dei Cuori Spezzati','La Druida dello Specchio','Le Tre Alleate del Cuore','Cupido Nascosto','Cheerleader dell\'Anima','Guardiano dei Portali','L\'Illuminato','Il Viaggiatore dell\'Inframondo','Portale Mistico','Portale Mistico','Portale Mistico','Portale Mistico','Portale Mistico']
  },
  ko: {
    catLabels: {
      esencias:   '🌈 신성한 본질',
      dualidades: '🌒 프리즘 이중성',
      guardianes: '🛡️ 프리즘 수호자',
      llaves:     '💠 프리즘 열쇠',
      portales:   '🌌 신비로운 포털'
    },
    filterLabels: ['전체','🌈 신성한 본질','🌒 이중성','🛡️ 수호자','💠 열쇠','🌌 포털'],
    subtitles: ['프리즘 채널러','영혼 사냥꾼','치유의 여신','카르마의 여신','길의 여신','자기 사랑의 여신','시간의 신','불과 부활의 신','내면의 귀환','영적 각성','재연결','그림자 직조자','의심의 메아리','미묘한 독','조용한 침입','어제의 포로','영원한 속삭임','불의에 맞서는 목소리','상처 입은 마음의 수호자','거울의 드루이드','세 심장의 동맹자','비밀 큐피드','영혼 치어리더','포털의 수호자','깨달은 자','지하 세계 여행자','신비로운 포털','신비로운 포털','신비로운 포털','신비로운 포털','신비로운 포털']
  }
};

// ── LANGUAGE ENGINE ──
const LangEngine = {
  current: 'es',

  detect() {
    const saved = localStorage.getItem('bt_lang');
    if (saved && LANGS[saved]) return saved;
    const browser = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    if (browser.startsWith('ko')) return 'ko';
    if (browser.startsWith('it')) return 'it';
    if (browser.startsWith('en')) return 'en';
    return 'es';
  },

  set(lang) {
    if (!LANGS[lang]) return;
    this.current = lang;
    localStorage.setItem('bt_lang', lang);
    document.documentElement.lang = lang;
    this.apply();
    this.updateSelector();
  },

  t(key) {
    return LANGS[this.current]?.[key] || LANGS['es'][key] || key;
  },

  apply() {
    // Apply all data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    // Apply data-i18n-html (for innerHTML with line breaks)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = this.t(key).replace(/\n/g, '<br>');
    });
    // Fire custom event so pages can react
    document.dispatchEvent(new CustomEvent('langchange', { detail: this.current }));
  },

  updateSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  },

  init() {
    this.current = this.detect();
    document.documentElement.lang = this.current;
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => { this.apply(); this.updateSelector(); });
    } else {
      this.apply();
      this.updateSelector();
    }
  }
};

// Auto-init
LangEngine.init();
