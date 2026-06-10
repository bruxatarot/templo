// BRUXA TAROT - SISTEMA DE IDIOMAS
const LANGS = {
  es: {
    nav_bruja:'La Bruja', nav_templo:'El Templo', nav_carta:'Carta del Día',
    nav_redes:'Conecta', nav_rituales:'Rituales', nav_back:'← Volver al Templo',
    hero_badge:'✦ TEMPLO DEL PRISMA ✦', hero_greeting:'Hola, Alma Brillante…',
    hero_tagline:'Un templo donde tu alma recuerda su luz,\nsu sombra y su verdadero poder.',
    hero_cta_templo:'Entrar al Templo', hero_cta_carta:'Carta del Día', hero_scroll:'Baja',
    qs_label:'La Bruja detrás del Templo', qs_title:'Soy Bruxa Tarot',
    qs_quote:'"La vida no es blanco y negro.\nEs un prisma de infinitos colores esperando ser vividos."',
    qs_body1:'Soy una guía espiritual, lectora de Tarot y creadora del Oráculo Prisma del Alma — 31 cartas nacidas de mis propias historias, personajes y canalización.',
    qs_body2:'Cada carta es un espejo. Cada lectura, un regreso a ti.',
    qs_photo:'Tu fotografía\nva aquí, Bruxa',
    templo_label:'El Templo', templo_title:'¿Qué encontrarás aquí?',
    templo_body:'El Templo del Prisma es donde conviven las Esencias Sagradas, las Dualidades, los Guardianes, las Llaves Prismáticas y los Portales Místicos de tu alma.',
    portal_oraculo_name:'Oráculo Prisma', portal_oraculo_desc:'31 cartas nacidas de mis historias. Personajes reales que te hablan directamente desde el alma.',
    portal_musica_name:'Música Sagrada', portal_musica_desc:'Frecuencias y canalizaciones para elevar tu vibración y sanar desde adentro.',
    portal_historias_name:'Mis Historias', portal_historias_desc:'Los personajes del Oráculo tienen vida propia. Conócelos, siéntelos, reconócete en ellos.',
    portal_rituales_name:'Rituales del Alma', portal_rituales_desc:'Magia práctica para cada luna, cada carta, cada transformación que tu alma está pidiendo.',
    portal_pozo_name:'Pozo de los Deseos', portal_pozo_desc:'Lanza tu deseo al cosmos y conviértelo en una estrella del firmamento compartido.',
    portal_diario_name:'Diario del Alma', portal_diario_desc:'Tu espacio sagrado para guardar cartas, rituales y reflexiones.',
    carta_label:'Oráculo Prisma del Alma', carta_title:'Carta del Día',
    carta_instruction:'Respira profundo, Alma Brillante. Piensa en lo que necesitas hoy. Cuando sientas el llamado, voltea la carta y recibe el mensaje que lleva tu nombre.',
    carta_tap:'Toca la carta para voltearla', carta_reading_title:'✦ MENSAJE DEL ORÁCULO ✦', carta_nuevo:'✦ Nueva tirada',
    redes_label:'Conecta con la Bruja', redes_title:'Encuéntrame en el cosmos',
    redes_body:'Cada red es un portal distinto al Templo. Ven, el alma siempre encuentra su camino.',
    footer:'© 2026 Bruxa Tarot • Templo del Prisma • Oráculo Prisma del Alma',
    pozo_badge:'✦ TEMPLO DEL PRISMA ✦',
    pozo_title:'El Pozo\nde los Deseos',
    pozo_sub:'Lanza tu deseo al cosmos, Alma Brillante. Cada palabra que entregas aquí se convierte en una estrella que habita este cielo compartido — visible para todas las almas que lleguen después.',
    pozo_placeholder:'Escribe tu deseo al universo…',
    pozo_btn:'✦ Lanzar al cosmos', pozo_btn_sending:'✦ Enviando…',
    pozo_firmamento:'EL FIRMAMENTO DEL TEMPLO', pozo_cielo_title:'Deseos de las Almas',
    pozo_cargando:'Cargando el cielo…', pozo_vacio:'Aún no hay deseos — ¡lanza el primero!',
    pozo_counter_s:'deseo ilumina este cielo', pozo_counter_p:'deseos iluminan este cielo',
    pozo_empty_p:'El cielo te espera.\nSé la primera estrella.',
    pozo_toast:'✦ Tu deseo viaja al cosmos',
    rit_badge:'✦ ORÁCULO PRISMA DEL ALMA ✦', rit_title:'Rituales\ndel Prisma',
    rit_sub:'Hola, Alma Brillante. El ritual que necesitas hoy ya te está esperando. Respira profundo, observa el mazo y elige la carta que te llame.',
    rit_hint:'☽ Las 31 cartas te aguardan boca abajo ☾',
    rit_shuffle:'✦ Barajar el Mazo', rit_ver_todas:'Ver todas las cartas', rit_filter_all:'Todas',
    rit_keywords_lbl:'Palabras clave', rit_ritual_lbl:'Ritual sugerido',
    rit_elegir_otra:'✦ Elegir otra carta', rit_carta_dia:'Carta del Día',
  },
  en: {
    nav_bruja:'The Witch', nav_templo:'The Temple', nav_carta:'Card of the Day',
    nav_redes:'Connect', nav_rituales:'Rituals', nav_back:'← Back to the Temple',
    hero_badge:'✦ TEMPLE OF THE PRISM ✦', hero_greeting:'Hello, Brilliant Soul…',
    hero_tagline:'A temple where your soul remembers its light,\nits shadow and its true power.',
    hero_cta_templo:'Enter the Temple', hero_cta_carta:'Card of the Day', hero_scroll:'Scroll',
    qs_label:'The Witch behind the Temple', qs_title:'I am Bruxa Tarot',
    qs_quote:'"Life is not black and white.\nIt is a prism of infinite colors waiting to be lived."',
    qs_body1:'I am a spiritual guide, Tarot reader and creator of the Prisma Soul Oracle — 31 cards born from my own stories, characters and channeling.',
    qs_body2:'Every card is a mirror. Every reading, a return to yourself.',
    qs_photo:'Your photo\ngoes here, Bruxa',
    templo_label:'The Temple', templo_title:'What will you find here?',
    templo_body:'The Temple of the Prism is where Sacred Essences, Dualities, Guardians, Prismatic Keys and Mystical Portals of your soul coexist.',
    portal_oraculo_name:'Prisma Oracle', portal_oraculo_desc:'31 cards born from my stories. Real characters that speak to you directly from the soul.',
    portal_musica_name:'Sacred Music', portal_musica_desc:'Frequencies and channelings to elevate your vibration and heal from within.',
    portal_historias_name:'My Stories', portal_historias_desc:'The Oracle characters have a life of their own. Meet them, feel them, recognize yourself in them.',
    portal_rituales_name:'Soul Rituals', portal_rituales_desc:'Practical magic for every moon, every card, every transformation your soul is calling for.',
    portal_pozo_name:'Wishing Well', portal_pozo_desc:'Cast your wish into the cosmos and watch it become a star in our shared sky.',
    portal_diario_name:'Soul Journal', portal_diario_desc:'Your sacred space to save cards, rituals and reflections.',
    carta_label:'Prisma Soul Oracle', carta_title:'Card of the Day',
    carta_instruction:'Breathe deeply, Brilliant Soul. Think about what you need today. When you feel the call, flip the card and receive the message that carries your name.',
    carta_tap:'Tap the card to flip it', carta_reading_title:'✦ MESSAGE FROM THE ORACLE ✦', carta_nuevo:'✦ New reading',
    redes_label:'Connect with the Witch', redes_title:'Find me in the cosmos',
    redes_body:'Each network is a different portal to the Temple. Come, the soul always finds its way.',
    footer:'© 2026 Bruxa Tarot • Temple of the Prism • Prisma Soul Oracle',
    pozo_badge:'✦ TEMPLE OF THE PRISM ✦',
    pozo_title:'The Wishing\nWell',
    pozo_sub:'Cast your wish into the cosmos, Brilliant Soul. Every word you offer here becomes a star that inhabits this shared sky — visible to every soul who arrives after you.',
    pozo_placeholder:'Write your wish to the universe…',
    pozo_btn:'✦ Launch into the cosmos', pozo_btn_sending:'✦ Sending…',
    pozo_firmamento:'THE TEMPLE FIRMAMENT', pozo_cielo_title:'Wishes of the Souls',
    pozo_cargando:'Loading the sky…', pozo_vacio:'No wishes yet — be the first star!',
    pozo_counter_s:'wish lights this sky', pozo_counter_p:'wishes light this sky',
    pozo_empty_p:'The sky awaits you.\nBe the first star.',
    pozo_toast:'✦ Your wish travels to the cosmos',
    rit_badge:'✦ PRISMA SOUL ORACLE ✦', rit_title:'Prisma\nRituals',
    rit_sub:'Hello, Brilliant Soul. The ritual you need today is already waiting for you. Breathe deeply, observe the deck and choose the card that calls you.',
    rit_hint:'☽ All 31 cards await you face down ☾',
    rit_shuffle:'✦ Shuffle the Deck', rit_ver_todas:'See all cards', rit_filter_all:'All',
    rit_keywords_lbl:'Keywords', rit_ritual_lbl:'Suggested ritual',
    rit_elegir_otra:'✦ Choose another card', rit_carta_dia:'Card of the Day',
  },
  it: {
    nav_bruja:'La Strega', nav_templo:'Il Tempio', nav_carta:'Carta del Giorno',
    nav_redes:'Connettiti', nav_rituales:'Rituali', nav_back:'← Torna al Tempio',
    hero_badge:'✦ TEMPIO DEL PRISMA ✦', hero_greeting:'Ciao, Anima Brillante…',
    hero_tagline:'Un tempio dove la tua anima ricorda la sua luce,\nla sua ombra e il suo vero potere.',
    hero_cta_templo:'Entra nel Tempio', hero_cta_carta:'Carta del Giorno', hero_scroll:'Scorri',
    qs_label:'La Strega dietro il Tempio', qs_title:'Sono Bruxa Tarot',
    qs_quote:'"La vita non è in bianco e nero.\nÈ un prisma di colori infiniti che aspettano di essere vissuti."',
    qs_body1:"Sono una guida spirituale, lettrice di Tarocchi e creatrice dell'Oracolo Prisma dell'Anima — 31 carte nate dalle mie storie, personaggi e canalizzazioni.",
    qs_body2:'Ogni carta è uno specchio. Ogni lettura, un ritorno a te stessa.',
    qs_photo:'La tua foto\nva qui, Bruxa',
    templo_label:'Il Tempio', templo_title:'Cosa troverai qui?',
    templo_body:"Il Tempio del Prisma è dove coesistono le Essenze Sacre, le Dualità, i Guardiani, le Chiavi Prismatiche e i Portali Mistici della tua anima.",
    portal_oraculo_name:'Oracolo Prisma', portal_oraculo_desc:"31 carte nate dalle mie storie. Personaggi reali che ti parlano direttamente dall'anima.",
    portal_musica_name:'Musica Sacra', portal_musica_desc:"Frequenze e canalizzazioni per elevare la tua vibrazione e guarire dall'interno.",
    portal_historias_name:'Le Mie Storie', portal_historias_desc:"I personaggi dell'Oracolo hanno vita propria. Conoscili, sentili, riconosciti in loro.",
    portal_rituales_name:"Rituali dell'Anima", portal_rituales_desc:'Magia pratica per ogni luna, ogni carta, ogni trasformazione che la tua anima sta chiedendo.',
    portal_pozo_name:'Pozzo dei Desideri', portal_pozo_desc:'Lancia il tuo desiderio nel cosmo e trasformalo in una stella del firmamento condiviso.',
    portal_diario_name:"Diario dell'Anima", portal_diario_desc:'Il tuo spazio sacro per salvare carte, rituali e riflessioni.',
    portal_oraculo_name:'Oracolo Prisma', portal_oraculo_desc:"31 carte nate dalle mie storie.",
    carta_label:"Oracolo Prisma dell'Anima", carta_title:'Carta del Giorno',
    carta_instruction:'Respira profondamente, Anima Brillante. Pensa a ciò di cui hai bisogno oggi. Quando senti il richiamo, gira la carta e ricevi il messaggio che porta il tuo nome.',
    carta_tap:'Tocca la carta per girarla', carta_reading_title:"✦ MESSAGGIO DELL'ORACOLO ✦", carta_nuevo:'✦ Nuova lettura',
    redes_label:'Connettiti con la Strega', redes_title:'Trovami nel cosmo',
    redes_body:"Ogni rete è un portale diverso al Tempio. Vieni, l'anima trova sempre la sua strada.",
    footer:"© 2026 Bruxa Tarot • Tempio del Prisma • Oracolo Prisma dell'Anima",
    pozo_badge:'✦ TEMPIO DEL PRISMA ✦',
    pozo_title:'Il Pozzo\ndei Desideri',
    pozo_sub:'Lancia il tuo desiderio nel cosmo, Anima Brillante. Ogni parola che offri qui diventa una stella che abita questo cielo condiviso — visibile a ogni anima che arriverà dopo di te.',
    pozo_placeholder:"Scrivi il tuo desiderio all'universo…",
    pozo_btn:'✦ Lancia nel cosmo', pozo_btn_sending:'✦ Invio…',
    pozo_firmamento:'IL FIRMAMENTO DEL TEMPIO', pozo_cielo_title:'Desideri delle Anime',
    pozo_cargando:'Caricamento del cielo…', pozo_vacio:'Ancora nessun desiderio — sii la prima stella!',
    pozo_counter_s:'desiderio illumina questo cielo', pozo_counter_p:'desideri illuminano questo cielo',
    pozo_empty_p:'Il cielo ti aspetta.\nSii la prima stella.',
    pozo_toast:'✦ Il tuo desiderio viaggia nel cosmo',
    rit_badge:"✦ ORACOLO PRISMA DELL'ANIMA ✦", rit_title:'Rituali\ndel Prisma',
    rit_sub:'Ciao, Anima Brillante. Il rituale di cui hai bisogno oggi ti sta già aspettando. Respira profondamente, osserva il mazzo e scegli la carta che ti chiama.',
    rit_hint:'☽ Le 31 carte ti aspettano a faccia in giù ☾',
    rit_shuffle:'✦ Mescola il Mazzo', rit_ver_todas:'Vedi tutte le carte', rit_filter_all:'Tutte',
    rit_keywords_lbl:'Parole chiave', rit_ritual_lbl:'Rituale suggerito',
    rit_elegir_otra:"✦ Scegli un'altra carta", rit_carta_dia:'Carta del Giorno',
  },
  ko: {
    nav_bruja:'마녀', nav_templo:'신전', nav_carta:'오늘의 카드',
    nav_redes:'연결', nav_rituales:'의식', nav_back:'← 신전으로 돌아가기',
    hero_badge:'✦ 프리즘의 신전 ✦', hero_greeting:'안녕하세요, 빛나는 영혼이여…',
    hero_tagline:'당신의 영혼이 빛과 그림자,\n그리고 진정한 힘을 기억하는 신전.',
    hero_cta_templo:'신전 입장', hero_cta_carta:'오늘의 카드', hero_scroll:'아래로',
    qs_label:'신전 뒤의 마녀', qs_title:'저는 Bruxa Tarot입니다',
    qs_quote:'"삶은 흑백이 아닙니다.\n살아가기를 기다리는 무한한 색의 프리즘입니다."',
    qs_body1:'저는 영적 안내자이자 타로 리더이며, 프리즈마 영혼 오라클의 창조자입니다. 나의 이야기, 캐릭터, 채널링에서 탄생한 31장의 카드.',
    qs_body2:'모든 카드는 거울입니다. 모든 리딩은 당신 자신으로의 귀환입니다.',
    qs_photo:'여기에 당신의\n사진이 들어갑니다',
    templo_label:'신전', templo_title:'여기서 무엇을 찾을 수 있나요?',
    templo_body:'프리즘의 신전은 당신 영혼의 신성한 본질, 이중성, 수호자, 프리즘 열쇠, 신비로운 포털이 공존하는 곳입니다.',
    portal_oraculo_name:'프리즘 오라클', portal_oraculo_desc:'나의 이야기에서 탄생한 31장의 카드. 영혼에서 직접 당신에게 말하는 실제 캐릭터들.',
    portal_musica_name:'신성한 음악', portal_musica_desc:'당신의 진동을 높이고 내면에서 치유하기 위한 주파수와 채널링.',
    portal_historias_name:'나의 이야기', portal_historias_desc:'오라클 캐릭터들은 고유한 생명을 가지고 있습니다. 그들을 만나고, 느끼고, 그 안에서 자신을 발견하세요.',
    portal_rituales_name:'영혼의 의식', portal_rituales_desc:'매 달, 매 카드, 당신의 영혼이 요청하는 모든 변화를 위한 실용적인 마법.',
    portal_pozo_name:'소원의 우물', portal_pozo_desc:'우주에 소원을 던지고 함께 나누는 하늘의 별로 만들어보세요.',
    portal_diario_name:'영혼의 일기', portal_diario_desc:'카드, 의식, 성찰을 저장하는 당신만의 신성한 공간.',
    carta_label:'프리즘 영혼 오라클', carta_title:'오늘의 카드',
    carta_instruction:'깊게 숨을 쉬세요, 빛나는 영혼이여. 오늘 필요한 것을 생각해보세요. 부름을 느낄 때 카드를 뒤집고 당신의 이름이 담긴 메시지를 받으세요.',
    carta_tap:'카드를 터치하여 뒤집기', carta_reading_title:'✦ 오라클의 메시지 ✦', carta_nuevo:'✦ 새로운 리딩',
    redes_label:'마녀와 연결하기', redes_title:'우주에서 나를 찾아보세요',
    redes_body:'각 네트워크는 신전으로 향하는 다른 포털입니다. 오세요, 영혼은 항상 길을 찾습니다.',
    footer:'© 2026 Bruxa Tarot • 프리즘의 신전 • 프리즘 영혼 오라클',
    pozo_badge:'✦ 프리즘의 신전 ✦',
    pozo_title:'소원의\n우물',
    pozo_sub:'우주에 소원을 던져보세요, 빛나는 영혼이여. 여기서 전하는 모든 말은 함께 나누는 하늘에 사는 별이 됩니다 — 당신 다음에 오는 모든 영혼에게 보입니다.',
    pozo_placeholder:'우주에 소원을 쓰세요…',
    pozo_btn:'✦ 우주로 던지기', pozo_btn_sending:'✦ 전송 중…',
    pozo_firmamento:'신전의 창공', pozo_cielo_title:'영혼들의 소원',
    pozo_cargando:'하늘을 불러오는 중…', pozo_vacio:'아직 소원이 없습니다 — 첫 번째 별이 되세요!',
    pozo_counter_s:'개의 소원이 이 하늘을 밝힙니다', pozo_counter_p:'개의 소원이 이 하늘을 밝힙니다',
    pozo_empty_p:'하늘이 당신을 기다립니다.\n첫 번째 별이 되세요.',
    pozo_toast:'✦ 당신의 소원이 우주로 여행합니다',
    rit_badge:'✦ 프리즘 영혼 오라클 ✦', rit_title:'프리즘\n의식',
    rit_sub:'안녕하세요, 빛나는 영혼이여. 오늘 필요한 의식이 이미 당신을 기다리고 있습니다. 깊게 숨을 쉬고, 덱을 관찰하고, 당신을 부르는 카드를 선택하세요.',
    rit_hint:'☽ 31장의 카드가 뒤집혀 당신을 기다립니다 ☾',
    rit_shuffle:'✦ 덱 셔플', rit_ver_todas:'모든 카드 보기', rit_filter_all:'전체',
    rit_keywords_lbl:'키워드', rit_ritual_lbl:'추천 의식',
    rit_elegir_otra:'✦ 다른 카드 선택', rit_carta_dia:'오늘의 카드',
  }
};

// CARD TRANSLATIONS (EN, IT, KO)
const CARD_TRANSLATIONS = {
  en: {
    catLabels:{ esencias:'🌈 Sacred Essences', dualidades:'🌒 Prism Dualities', guardianes:'🛡️ Guardians', llaves:'💠 Prismatic Keys', portales:'🌌 Mystical Portals' },
    filterLabels:['All','🌈 Sacred Essences','🌒 Dualities','🛡️ Guardians','💠 Keys','🌌 Portals'],
    cards:[
      {subtitle:'Prism Channeler',keywords:['Inspiration','Rebirth','Clarity','Transformation'],message:"Bruxa Tarot appears when it's time to see life through new eyes. You have the power to change your perspective. What areas of your life have grown dull? This is a gentle but firm call to reclaim your sense of wonder.",ritual:'Choose a space in your life that feels dim. Breathe new life into it with art, flowers, candles or scents. Let the process awaken your creativity and symbolize your emotional rebirth.'},
      {subtitle:'Spirit Hunter',keywords:['Energetic protection','Sharp intuition','Observation'],message:'When Nabi appears, something invisible needs to be seen. Your intuition will be your greatest ally. Observe, discern and act with stealth but with firmness.',ritual:'Spend a moment exploring your surroundings with fresh eyes. Observe something that would normally go unnoticed. Imagine the epic story you could tell from its perspective.'},
      {subtitle:'Healing Goddess',keywords:['Healing','Patience','Nurturing love','Cycles'],message:"Healing doesn't mean avoiding pain — it means crossing through it with courage. Marta invites you to trust that every tear shed waters your path toward a stronger version of yourself.",ritual:'Prepare a small altar with white flowers and a white candle. Write what you need to release and heal. Fold it and burn it safely, visualizing how the ashes transform your pain into strength.'},
      {subtitle:'Karma Goddess',keywords:['Balance','Energetic justice','Emotional harvest'],message:'Jade appears when the universe is making adjustments. A situation is reaching its point of balance. This card invites you to forgive yourself and release what you no longer need to carry.',ritual:'Sit quietly and visualize a scale in your hands. Place your proud actions on one side and your worrying ones on the other. Write three actions to bring balance back to your life.'},
      {subtitle:'Goddess of the Path',keywords:['Intuition','Inner guidance','Emotional clarity'],message:"Elena appears when you are lost or about to give up. The path is already drawn inside you. Trust your intuition. You are not alone.",ritual:'Close your eyes and visualize two paths. One easy path ending in thorns, one challenging path ending in light. Ask: what decisions am I avoiding? Write one brave step you can take today.'},
      {subtitle:'Goddess of Self-Love',keywords:['Self-affirmation','Dignity','Liberation'],message:"Mia arrives when it's time to remember who you are and what you're worth. Love starts with you. Don't be afraid to walk away from what doesn't value you.",ritual:"Go to a peaceful place. Write what you are no longer willing to tolerate. On another paper, write the wonderful things you recognize in yourself. Tear up the first and keep the second close to your heart."},
      {subtitle:'God of Time',keywords:['Urgency','Action','Decision','Imminent change'],message:"Tony appears when the time is now. There is no more room for 'later.' What you don't choose today, time chooses for you.",ritual:'Set a timer for 10 minutes. Write without stopping everything you wish to do but have been postponing. Read it aloud and choose one thing you can start today.'},
      {subtitle:'God of Fire & Resurrection',keywords:['Deep desire','Rebirth','Passion'],message:"Dante appears when desire is so strong it cannot be ignored. Dare to feel without censorship and follow the truth of your inner fire.",ritual:'Write what you wish to overcome or what holds you back. In a safe place, burn it symbolically. As the ashes fall, repeat: "I rise from my ashes, unstoppable and free."'},
      {subtitle:'Inner Return',keywords:['Soul reconnection','Inner truth','Awakening intuition'],message:"The Clear Voice is the moment the soul says: no more running — let's go home. It's time to pick up the microphone of your own life.",ritual:"Light a blue candle. Write three things you haven't said but need to express, three wishes you carry in silence, and three truths that define you. Then read them aloud before a mirror."},
      {subtitle:'Spiritual Awakening',keywords:['Awakening','Soul restlessness','Inner search'],message:'When everything seems fine but you feel a void. Your heart desires another life. This card appears when you need confirmation that your soul is guiding you.',ritual:'Make a list of things that no longer make you feel alive. Then write: "What my soul wants to experience." That list is your compass.'},
      {subtitle:'Reconnection',keywords:['Soul reunion','Deep calm','Cycle closure'],message:"When you finally close a cycle. Despite the world's chaos, there is calm within. What you seek is not outside — it's in the reconnection with your own soul.",ritual:'Create a small altar with objects that represent you. Sit in silence before it and repeat three times: "I am here. I am enough. This is my home."'},
      {subtitle:'Shadow Weaver',keywords:['Emotional manipulation','Ambiguity','Control'],message:"This card appears when someone plays with you without saying so. Your intuition already knows the truth. It also appears when you yourself are falling into manipulative dynamics.",ritual:'Take a black or red thread. Name it: "this represents the story woven so I could not see the truth." Break it and say: "Today I free myself from the spell."'},
      {subtitle:'Echo of Doubt',keywords:['Indecision','Emotional insecurity','Unfinished choices'],message:"When you are waiting for someone to choose you... and they don't. Not choosing is also a choice. And the soul knows it.",ritual:'Write the name or symbol of what does not choose you. Hold it for a moment. Then bury it in earth or let it float on water and say: "I release you. Today I choose myself."'},
      {subtitle:'The Subtle Poison',keywords:['Manipulation','Dark seduction','Hidden danger'],message:'Valeria arrives as a whisper. Is what you feel desire or addiction? Are you accepting crumbs disguised as passion?',ritual:'Tie a black thread around your wrist saying: "I cut ties with any manipulation that does not respect my light." Then break the thread with determination.'},
      {subtitle:'Silent Intrusion',keywords:['Emotional control','Jealousy','Hidden insecurity'],message:'True power does not come from external control but from internal security. Are you clinging to something that no longer resonates? This card invites you to release the illusion of control.',ritual:'Write what you deeply envy. Feel the weight of that emotion. Then burn it saying: "I release envy to make room for my own light."'},
      {subtitle:'Prisoner of Yesterday',keywords:['Stagnation','Nostalgia','Fear of change'],message:'Tatiana appears when you are clinging to something only because it is familiar. Are you in repeated cycles out of habit, not love?',ritual:'Write the phrases you repeat to yourself to avoid moving forward. Burn it saying: "I release the past to open myself to my own light."'},
      {subtitle:'Eternal Whisper',keywords:['Impossible love','Deep connection','Burning silence'],message:"When you feel a love so deep it transcends the tangible. Perhaps the soul is waiting for another life, another plane, another moment.",ritual:'Write a letter to that love that could not be. Do not edit it. Keep it in a box with salt and dried flowers, and symbolically bury it.'},
      {subtitle:'Voice Against Injustice',keywords:['Justice','Loyalty','Courage'],message:"Alberto appears when someone needs to be defended, even if they don't dare ask. Be a shield when someone else is falling.",ritual:'Hold a white stone in your left hand. Visualize the face of someone who needs your support. Repeat: "I am a shield for those in need." Keep the stone where you will see it daily.'},
      {subtitle:'Protector of Broken Hearts',keywords:['Unconditional loyalty','Silent love'],message:"It's time to honor what has always been there: an unrequited love, a friendship that held you, or a part of yourself you never let die.",ritual:'Find a smooth stone or shell. Hold it close to your heart and think of someone who needs comfort. Repeat: "I am a refuge for hurting hearts."'},
      {subtitle:'The Druid of the Mirror',keywords:['Emotional reflection','Intuitive clarity'],message:"Rosario doesn't give you direct answers — she holds a mirror up and accompanies you as you discover them yourself.",ritual:'Fill a bowl with clean water and place it before a mirror. Look at your reflection in the water. Ask yourself: "What part of me needs to be revealed?" Then write what you perceive.'},
      {subtitle:'Renata, Cristina & Sofía',keywords:['Unconditional support','Sisterhood','Shared strength'],message:'Are you letting others accompany you, or trying to carry everything alone? It is time to honor those who hold you up.',ritual:'Write the names of people who have been your true support. Next to each name, write what they represent in your life. Write a symbolic letter to each one.'},
      {subtitle:'Cupid Undercover',keywords:['True love','Subtle union','Silent intuition'],message:'Jazmín works in silence and trusts the universe timing. The true cupid does not shoot arrows — they send signs.',ritual:'Write on a seed or small paper the symbol of the relationship you wish to attract. Keep it in a jar with a flower petal and some earth.'},
      {subtitle:'Soul Cheerleader',keywords:['Authentic motivation','Borrowed faith','Contagious energy'],message:"This card is the cry of the soul that says: you are doing better than you think. Don't hide when it's time to shine.",ritual:'In a small box or jar, place five papers with your achievements or favorite qualities. Each morning, pull one out, read it aloud and celebrate.'},
      {subtitle:'Guardian of Portals',keywords:['Powerful curiosity','Magical beginnings','Hidden keys'],message:'Follow your curiosity, explore what seemed insignificant. Something is about to open in your life.',ritual:'Choose a door or drawer in your home that you rarely use. Open it slowly with the intention of "finding something new in my life" and observe what you see.'},
      {subtitle:'The Illuminated',keywords:['Inner wisdom','Mental clarity','Sacred silence'],message:'Erebus appears when you are ready to see beyond the surface. His presence alone makes you find answers where before there was only noise.',ritual:"At dusk, turn off all lights and place an unlit candle before you. Say softly: 'Let the echo of the forgotten guide me.' Then light the candle and write the first thing you perceive."},
      {subtitle:'Underworld Traveler',keywords:['Inner journey','Divine mystery','Silent transformation'],message:'You are crossing inner portals you did not want to see before. You do not need to understand everything — only dare to follow your own journey.',ritual:'At dusk, place a dark cloth on a table with a mysterious object on top. Close your eyes and say: "Aetherius, bring your secret." Stay in silence for one minute.'},
      {subtitle:'Mystical Portal',keywords:['Conscious descent','Rebirth','Fertile darkness'],message:"You don't enter to disappear — you enter to remember who you were before you forgot. To return to yourself, sometimes you have to go down first.",ritual:'Light a dark candle. Write what you no longer want to carry. Place it under the candle, visualizing how the flame absorbs that weight. Bury the ashes in the earth.'},
      {subtitle:'Mystical Portal',keywords:['Spiritual support','Invisible guides','Synchronicities'],message:'There is already an energetic council gathered: your guides, your future selves, your ancestors. You are already being held by greater energies.',ritual:'Invite someone close to share a simple meal without distractions. Before beginning, close your eyes and give thanks for being together.'},
      {subtitle:'Mystical Portal',keywords:['Radical transformation','Awakening','Renewal'],message:'The Portal of Chaos is not your enemy. The universe shakes the table so you stop pretending to fit in. It frees you — even if it hurts.',ritual:'Put on energizing music. Open your wardrobe or drawers. Select what you no longer use and donate or recycle those objects. Say: "I release the old to make way for the new."'},
      {subtitle:'Mystical Portal',keywords:['Emotional alchemy','Deep healing','Process'],message:'Your soul is in an alchemical process. Do not interrupt the mixture just because you do not yet understand the result. Trust in what is cooking inside you.',ritual:'Choose a simple recipe. As you cook, feel each aroma and texture. Add salt or herbs with the intention of "healing what needs to be healed." Savor each spoonful as an act of love toward yourself.'},
      {subtitle:'Mystical Portal',keywords:['Mental awakening','Spiritual clarity','Channeling'],message:'Wisdom is not found — it is remembered. You are ready to receive answers you could not hold before.',ritual:'Take a notebook and a pen. Write one essential question for yourself. Place the notebook under your pillow with the intention of receiving a clue. Upon waking, write the first thing you remember.'},
    ]
  },
  it: {
    catLabels:{ esencias:'🌈 Essenze Sacre', dualidades:'🌒 Dualità del Prisma', guardianes:'🛡️ Guardiani', llaves:'💠 Chiavi Prismatiche', portales:'🌌 Portali Mistici' },
    filterLabels:['Tutte','🌈 Essenze Sacre','🌒 Dualità','🛡️ Guardiani','💠 Chiavi','🌌 Portali'],
    cards:[
      {subtitle:'Canalizzatrice del Prisma',keywords:['Ispirazione','Rinascita','Chiarezza'],message:'Bruxa Tarot appare quando è tempo di vedere la vita con occhi nuovi. Hai il potere di cambiare la tua prospettiva.',ritual:'Scegli uno spazio nella tua vita che senti spento. Porta nuova vita con arte, fiori, candele o profumi.'},
      {subtitle:'Cacciatrice di Spiriti',keywords:['Protezione energetica','Intuizione acuta'],message:'Quando Nabi appare, qualcosa di invisibile ha bisogno di essere visto. La tua intuizione sarà la tua migliore alleata.',ritual:'Dedica un momento a esplorare il tuo ambiente con occhi nuovi. Osserva qualcosa che di solito passerebbe inosservato.'},
      {subtitle:'Dea della Guarigione',keywords:['Guarigione','Pazienza','Amore'],message:'Guarire non significa evitare il dolore, ma attraversarlo con coraggio.',ritual:'Prepara un altare con fiori bianchi e una candela bianca. Scrivi ciò che hai bisogno di liberare e guarire. Brucialo in sicurezza.'},
      {subtitle:'Dea del Karma',keywords:['Equilibrio','Giustizia energetica'],message:"Jade appare quando l'universo sta facendo aggiustamenti. C'è una situazione che sta raggiungendo il suo punto di equilibrio.",ritual:'Siediti in un posto tranquillo e visualizza una bilancia nelle tue mani. Scrivi tre azioni per riportare equilibrio nella tua vita.'},
      {subtitle:'Dea del Cammino',keywords:['Intuizione','Guida interiore'],message:'Elena appare quando sei persa o stai per arrenderti. Il cammino è già tracciato dentro di te. Fidati della tua intuizione.',ritual:'Chiudi gli occhi e visualizza due sentieri davanti a te. Chiediti: quali decisioni sto evitando? Scrivi un passo coraggioso che puoi fare oggi.'},
      {subtitle:"Dea dell'Amore Proprio",keywords:['Autoaffermazione','Dignità'],message:"Mia arriva quando è tempo di ricordare chi sei e quanto vali. L'amore inizia da te.",ritual:'Va in un posto tranquillo. Scrivi ciò che non sei più disposta a tollerare. Su un altro foglio, scrivi le cose meravigliose che riconosci in te stessa.'},
      {subtitle:'Dio del Tempo',keywords:['Urgenza','Azione','Decisione'],message:"Tony appare quando il momento è adesso. Non c'è più spazio per il 'dopo.'",ritual:'Imposta un timer per 10 minuti. Scrivi senza fermarti tutto ciò che desideri fare ma hai rimandato. Scegli una cosa che puoi iniziare oggi.'},
      {subtitle:'Dio del Fuoco e della Resurrezione',keywords:['Desiderio profondo','Rinascita'],message:'Dante appare quando il desiderio è così forte da non poter essere ignorato. Osa sentire senza censura.',ritual:'Scrivi ciò che vuoi superare. In un posto sicuro, brucialo simbolicamente. Mentre le ceneri cadono, ripeti: "Risorgo dalle mie ceneri, inarrestabile e libera."'},
      {subtitle:'Ritorno Interiore',keywords:['Riconnessione','Verità interiore'],message:"La Voce Chiara è il momento in cui l'anima dice: basta fuggire, torniamo a casa.",ritual:'Accendi una candela blu. Scrivi tre cose che non hai detto ma hai bisogno di esprimere. Poi leggile ad alta voce davanti allo specchio.'},
      {subtitle:'Risveglio Spirituale',keywords:['Risveglio','Ricerca interiore'],message:"Quando tutto sembra andare bene ma senti un vuoto. Il tuo cuore desidera un'altra vita.",ritual:'Fai una lista di cose che non ti fanno più sentire viva. Poi scrivi: "Ciò che la mia anima vuole vivere." Quella lista è la tua bussola.'},
      {subtitle:'Riconnessione',keywords:['Riunione con l\'anima','Calma profonda'],message:"Quando riesci a chiudere un ciclo. Dentro di te c'è calma. Ciò che cerchi non è fuori.",ritual:'Crea un piccolo altare con oggetti che ti rappresentano. Siediti in silenzio davanti ad esso e ripeti tre volte: "Sono qui. Sono abbastanza. Questa è la mia casa."'},
      {subtitle:'Tessitore di Ombre',keywords:['Manipolazione emotiva','Ambiguità'],message:'Questa carta appare quando qualcuno gioca con te senza dirlo. La tua intuizione conosce già la verità.',ritual:'Prendi un filo nero o rosso. Rompilo e di\': "Oggi mi libero dall\'incantesimo."'},
      {subtitle:'Eco del Dubbio',keywords:['Indecisione','Scelte incompiute'],message:'Quando stai aspettando che qualcuno ti scelga... e non lo fa. Non scegliere è anche scegliere.',ritual:'Scrivi il nome o il simbolo di ciò che non ti sceglie. Poi seppelliscilo o lascialo galleggiare sull\'acqua.'},
      {subtitle:'Il Veleno Sottile',keywords:['Manipolazione','Seduzione oscura'],message:'Valeria arriva come un sussurro. Ciò che senti è desiderio o dipendenza?',ritual:'Prendi un filo nero e legalo al polso dicendo: "Taglio i legami con ogni manipolazione." Poi rompilo con determinazione.'},
      {subtitle:'Intrusione Silenziosa',keywords:['Controllo emotivo','Gelosia'],message:"Il vero potere non viene dal controllo esterno, ma dalla sicurezza interna.",ritual:'Scrivi ciò che invidi profondamente. Poi brucialo con intenzione, dicendo: "Libero l\'invidia per fare spazio alla mia luce."'},
      {subtitle:'Prigioniera di Ieri',keywords:['Stagnazione','Nostalgia'],message:'Tatiana appare quando sei aggrappata a qualcosa solo perché è familiare.',ritual:'Scrivi le frasi che ti ripeti per non andare avanti. Brucialo dicendo: "Lascio andare il passato."'},
      {subtitle:'Sussurro Eterno',keywords:['Amore impossibile','Connessione profonda'],message:"Quando senti un amore così profondo da trascendere il tangibile.",ritual:'Scrivi una lettera a quell\'amore che non ha potuto essere. Non modificarla. Conservala in una scatola con sale e fiori secchi.'},
      {subtitle:"La Voce Contro l'Ingiustizia",keywords:['Giustizia','Lealtà'],message:'Alberto appare quando qualcuno ha bisogno di essere difeso, anche se non osa chiederlo.',ritual:'Prendi una pietra bianca e tienila nella mano sinistra. Ripeti: "Sono uno scudo per chi ne ha bisogno."'},
      {subtitle:'Protettore dei Cuori Spezzati',keywords:['Lealtà incondizionale'],message:"È tempo di onorare ciò che è sempre stato lì: un amore non corrisposto, un'amicizia che ti ha sostenuta.",ritual:'Trova una pietra liscia o una conchiglia. Tienila vicino al cuore. Ripeti: "Sono un rifugio per i cuori che soffrono."'},
      {subtitle:'La Druida dello Specchio',keywords:['Riflessione emotiva'],message:"Rosario non ti dà risposte dirette — ti pone davanti allo specchio e ti accompagna.",ritual:"Riempi una ciotola con acqua pulita davanti a uno specchio. Chiediti: 'Quale parte di me ha bisogno di rivelarsi?' Poi scrivi ciò che percepisci."},
      {subtitle:'Le Tre Alleate del Cuore',keywords:['Sostegno incondizionale','Sorellanza'],message:'Stai lasciando che ti accompagnino, o stai cercando di portare tutto da sola?',ritual:'Scrivi i nomi delle persone che sono state il tuo vero sostegno. Annota cosa rappresenta ciascuna nella tua vita.'},
      {subtitle:'Cupido Nascosto',keywords:['Amore vero','Unione sottile'],message:"Jazmín lavora in silenzio e si fida del tempo dell'universo.",ritual:'Scrivi su un seme il simbolo della relazione che desideri attrarre. Conservalo in un barattolo con un petalo di fiore.'},
      {subtitle:"Cheerleader dell'Anima",keywords:['Motivazione autentica'],message:'Questa carta è il grido dell\'anima che dice: stai andando meglio di quanto pensi.',ritual:'In una scatolina, metti cinque foglietti con i tuoi traguardi. Ogni mattina estraine uno e leggilo ad alta voce.'},
      {subtitle:'Guardiano dei Portali',keywords:['Curiosità potente'],message:'Segui la tua curiosità, esplora ciò che sembrava insignificante. Qualcosa sta per aprirsi.',ritual:'Scegli una porta o un cassetto che usi quasi mai. Aprilo lentamente con l\'intenzione di "trovare qualcosa di nuovo."'},
      {subtitle:"L'Illuminato",keywords:['Saggezza interiore','Silenzio sacro'],message:'Erebus appare quando sei pronta a vedere oltre la superficie.',ritual:"Al tramonto, spegni tutte le luci. Di' sottovoce: 'Che l'eco del dimenticato mi guidi.' Poi accendi la candela."},
      {subtitle:"Il Viaggiatore dell'Inframondo",keywords:['Viaggio interiore'],message:'Stai attraversando portali interiori che prima non volevi vedere.',ritual:"Al tramonto, metti un panno scuro su un tavolo. Chiudi gli occhi e di': 'Aetherius, porta il tuo segreto.'"},
      {subtitle:'Portale Mistico',keywords:['Discesa consapevole','Rinascita'],message:"Non entri per sparire — entri per ricordare chi eri prima di dimenticare.",ritual:'Accendi una candela scura. Scrivi ciò che non vuoi più portare. Seppellisci le ceneri nella terra.'},
      {subtitle:'Portale Mistico',keywords:['Sostegno spirituale','Guide invisibili'],message:"C'è già un concilio energetico riunito: le tue guide, i tuoi antenati.",ritual:'Invita qualcuno vicino a condividere un pasto semplice senza distrazioni. Prima di iniziare, ringraziate per essere insieme.'},
      {subtitle:'Portale Mistico',keywords:['Trasformazione radicale'],message:"Il Portale del Caos non è il tuo nemico. L'universo ti libera… anche se fa male.",ritual:"Metti musica energica. Seleziona ciò che non usi più e donalo. Mentre lo metti da parte, di': 'Mi libero del vecchio.'"},
      {subtitle:'Portale Mistico',keywords:['Alchimia emotiva','Guarigione profonda'],message:'La tua anima è in processo alchemico. Fidati di ciò che si sta cucinando dentro di te.',ritual:'Scegli una ricetta semplice. Aggiungi sale o erbe con l\'intenzione di "guarire ciò che ho bisogno di guarire."'},
      {subtitle:'Portale Mistico',keywords:['Risveglio mentale','Canalizzazione'],message:'La saggezza non si trova... si ricorda.',ritual:'Prendi un quaderno. Formula una domanda essenziale. Metti il quaderno sotto il cuscino con l\'intenzione di ricevere un indizio.'},
    ]
  },
  ko: {
    catLabels:{ esencias:'🌈 신성한 본질', dualidades:'🌒 프리즘 이중성', guardianes:'🛡️ 수호자', llaves:'💠 프리즘 열쇠', portales:'🌌 신비로운 포털' },
    filterLabels:['전체','🌈 신성한 본질','🌒 이중성','🛡️ 수호자','💠 열쇠','🌌 포털'],
    cards:[
      {subtitle:'프리즘 채널러',keywords:['영감','재탄생','명료함'],message:'Bruxa Tarot는 새로운 눈으로 삶을 바라볼 때 나타납니다.',ritual:'삶에서 흐릿하게 느껴지는 공간을 선택하세요. 예술, 꽃, 향기로 새로운 생명을 불어넣어 주세요.'},
      {subtitle:'영혼 사냥꾼',keywords:['에너지 보호','예리한 직관'],message:'Nabi가 나타날 때, 보이지 않는 무언가를 보아야 합니다.',ritual:'새로운 눈으로 주변 환경을 탐험하는 시간을 가지세요. 보통 눈에 띄지 않을 무언가를 관찰하세요.'},
      {subtitle:'치유의 여신',keywords:['치유','인내','사랑'],message:'치유는 고통을 피하는 것이 아니라 용기 있게 통과하는 것입니다.',ritual:'흰 꽃과 흰 양초로 작은 제단을 준비하세요. 해방해야 할 것을 종이에 쓰고 안전하게 태우세요.'},
      {subtitle:'카르마의 여신',keywords:['균형','에너지 정의'],message:'Jade는 우주가 조정을 하고 있을 때 나타납니다.',ritual:'조용한 곳에 앉아 손에 저울을 시각화하세요. 삶에 균형을 가져올 세 가지 행동을 쓰세요.'},
      {subtitle:'길의 여신',keywords:['직관','내면의 안내'],message:'Elena는 당신이 길을 잃었거나 포기하려 할 때 나타납니다. 직관을 신뢰하세요.',ritual:'눈을 감고 앞에 두 개의 길을 시각화하세요. 오늘 할 수 있는 용감한 한 걸음을 적으세요.'},
      {subtitle:'자기 사랑의 여신',keywords:['자기 긍정','존엄'],message:'Mia는 당신이 누구이고 얼마나 가치 있는지 기억할 때가 되었을 때 옵니다.',ritual:'평화로운 곳으로 가세요. 더 이상 참을 수 없는 것을 쓰세요. 그 종이를 찢고 자신의 장점을 쓴 종이는 간직하세요.'},
      {subtitle:'시간의 신',keywords:['긴급성','행동','결정'],message:'Tony는 지금이 그 때임을 알릴 때 나타납니다.',ritual:'정확히 10분 타이머를 설정하세요. 멈추지 않고 미뤄왔던 모든 것을 쓰세요. 오늘 시작할 수 있는 한 가지를 선택하세요.'},
      {subtitle:'불과 부활의 신',keywords:['깊은 열망','재탄생'],message:'Dante는 욕망이 너무 강해 무시할 수 없을 때 나타납니다.',ritual:'극복하고 싶은 것을 종이에 쓰세요. 안전한 곳에서 태우세요. "나는 내 재에서 일어나, 멈출 수 없고 자유롭다."'},
      {subtitle:'내면의 귀환',keywords:['영혼 재연결','내면의 진실'],message:'맑은 목소리는 영혼이 말하는 순간입니다: 더 이상 도망치지 말고 집으로 돌아가자.',ritual:'파란 양초를 켜세요. 말하지 못했지만 표현해야 할 세 가지를 쓰세요. 거울 앞에서 소리 내어 읽으세요.'},
      {subtitle:'영적 각성',keywords:['각성','내면의 탐색'],message:'모든 것이 괜찮아 보이지만 공허함을 느낄 때.',ritual:'당신을 더 이상 살아있다고 느끼게 하지 않는 것들의 목록을 만드세요. 영혼이 경험하고 싶은 것을 쓰세요.'},
      {subtitle:'재연결',keywords:['영혼과의 재회','깊은 평온'],message:'한 순환을 마감할 때. 당신이 찾는 것은 영혼과의 재연결 안에 있습니다.',ritual:'당신을 나타내는 물건들로 작은 제단을 만드세요. 세 번 반복하세요: "나는 여기 있다. 나는 충분하다."'},
      {subtitle:'그림자 직조자',keywords:['감정적 조종','모호함'],message:'이 카드는 누군가가 말 없이 당신을 가지고 놀 때 나타납니다.',ritual:'검은색 실을 잡으세요. 끊으며 말하세요: "오늘 나는 주문에서 해방된다."'},
      {subtitle:'의심의 메아리',keywords:['우유부단함','미완성된 선택'],message:'당신이 선택받기를 기다리는데... 선택받지 못할 때.',ritual:'당신을 선택하지 않는 것의 이름을 쓰세요. 땅에 묻거나 물에 띄우며 말하세요: "오늘 나는 나 자신을 선택한다."'},
      {subtitle:'미묘한 독',keywords:['조종','어두운 유혹'],message:'Valeria는 속삭임처럼 옵니다. 당신이 느끼는 것이 욕망인가요, 중독인가요?',ritual:'검은 실을 손목에 묶으며 말하세요: "나의 빛을 존중하지 않는 모든 조종과의 연결을 끊는다." 결연히 실을 끊으세요.'},
      {subtitle:'조용한 침입',keywords:['감정적 통제','질투'],message:'진정한 힘은 외적 통제가 아닌 내적 안정에서 옵니다.',ritual:'깊이 부러워하는 것을 종이에 쓰세요. "나의 빛을 위한 공간을 만들기 위해 질투를 해방한다."'},
      {subtitle:'어제의 포로',keywords:['정체','향수'],message:'Tatiana는 단지 익숙하다는 이유로 무언가에 매달릴 때 나타납니다.',ritual:'앞으로 나아가지 못하게 하기 위해 스스로에게 반복하는 말을 쓰세요. 태우며 말하세요: "나의 빛에 열리기 위해 과거를 해방한다."'},
      {subtitle:'영원한 속삭임',keywords:['불가능한 사랑','깊은 연결'],message:'유형을 초월하는 깊은 사랑을 느낄 때.',ritual:'이루어지지 못한 사랑에게 편지를 쓰세요. 수정하지 마세요. 소금과 말린 꽃과 함께 상자에 넣고 상징적으로 묻으세요.'},
      {subtitle:'불의에 맞서는 목소리',keywords:['정의','충성'],message:'Alberto는 누군가가 방어가 필요할 때 나타납니다.',ritual:'흰 돌을 왼손에 쥐세요. 반복하세요: "나는 필요로 하는 사람을 위한 방패다."'},
      {subtitle:'상처 입은 마음의 수호자',keywords:['무조건적 충성'],message:'항상 거기 있었던 것을 기릴 때입니다.',ritual:'부드러운 돌이나 조개를 찾으세요. 심장 가까이 들고 반복하세요: "나는 고통받는 마음들의 안식처다."'},
      {subtitle:'거울의 드루이드',keywords:['감정적 성찰'],message:'Rosario는 직접적인 답을 주지 않습니다 — 거울을 들어 올려 당신이 스스로 발견하는 동안 함께합니다.',ritual:'깨끗한 물을 그릇에 채우고 거울 앞에 놓으세요. 자신에게 물으세요: "나의 어떤 부분이 드러날 필요가 있나?"'},
      {subtitle:'세 심장의 동맹자',keywords:['무조건적 지지','자매애'],message:'당신이 함께하도록 허용하고 있나요, 아니면 모든 것을 혼자 짊어지려 하고 있나요?',ritual:'진정한 지지가 되어준 사람들의 이름을 쓰세요. 각 사람을 위한 상징적인 편지를 쓰세요.'},
      {subtitle:'비밀 큐피드',keywords:['진정한 사랑','미묘한 결합'],message:'Jazmín은 침묵 속에 일하며 우주의 타이밍을 신뢰합니다.',ritual:'끌어당기고 싶은 관계의 상징을 씨앗이나 작은 종이에 쓰세요. 꽃잎과 함께 병에 보관하세요.'},
      {subtitle:'영혼 치어리더',keywords:['진정한 동기 부여'],message:'이 카드는 당신이 생각하는 것보다 더 잘 하고 있다고 외치는 영혼의 소리입니다.',ritual:'작은 상자에 성취나 좋아하는 자질이 적힌 다섯 장의 종이를 넣으세요. 매일 아침 하나를 꺼내 소리 내어 읽으세요.'},
      {subtitle:'포털의 수호자',keywords:['강력한 호기심'],message:'호기심을 따르고, 사소해 보이는 것을 탐험하세요.',ritual:'거의 사용하지 않는 집의 문이나 서랍을 선택하세요. "삶에서 새로운 것을 찾으려는" 의도를 가지고 천천히 열어보세요.'},
      {subtitle:'깨달은 자',keywords:['내면의 지혜','신성한 침묵'],message:'Erebus는 표면 너머를 볼 준비가 되었을 때 나타납니다.',ritual:"해질녘에 모든 빛을 끄세요. 조용히 말하세요: '잊혀진 것의 메아리가 나를 안내하게 하라.' 양초를 켜고 처음 인식한 것을 적으세요."},
      {subtitle:'지하 세계 여행자',keywords:['내면의 여정'],message:'이전에 보고 싶지 않았던 내면의 포털을 건너고 있습니다.',ritual:"해질녘에 탁자에 어두운 천을 놓으세요. 눈을 감고 말하세요: 'Aetherius, 당신의 비밀을 가져오세요.'"},
      {subtitle:'신비로운 포털',keywords:['의식적인 하강','재탄생'],message:'당신은 사라지려고 들어가는 것이 아닙니다 — 기억하려고 들어갑니다.',ritual:'어두운 양초를 켜세요. 더 이상 짊어지고 싶지 않은 것을 쓰세요. 재를 땅에 묻으세요.'},
      {subtitle:'신비로운 포털',keywords:['영적 지지','보이지 않는 안내자'],message:'이미 에너지 의회가 모여 있습니다: 당신의 안내자, 조상들.',ritual:'방해 없이 가까운 사람과 간단한 식사를 나누세요. 시작하기 전에 눈을 감고 함께 있음에 감사하세요.'},
      {subtitle:'신비로운 포털',keywords:['근본적인 변화','각성'],message:'카오스의 포털은 당신의 적이 아닙니다.',ritual:"영감을 주는 음악을 틀어보세요. 더 이상 사용하지 않는 것을 기부하거나 재활용하세요. '새로운 것을 위한 길을 만들기 위해 옛것을 해방한다.'"},
      {subtitle:'신비로운 포털',keywords:['감정적 연금술','깊은 치유'],message:'당신의 영혼은 연금술 과정에 있습니다.',ritual:"간단한 레시피를 선택하세요. '치유해야 할 것을 치유한다'는 의도를 가지고 소금이나 허브를 추가하세요."},
      {subtitle:'신비로운 포털',keywords:['정신적 각성','채널링'],message:'지혜는 찾는 것이 아닙니다 — 기억하는 것입니다.',ritual:'노트와 펜을 가져오세요. 핵심 질문을 만드세요. 노트를 베개 아래에 놓고 아침에 처음 기억하는 것을 적으세요.'},
    ]
  }
};

// LANGUAGE ENGINE
const LangEngine = {
  current: 'es',
  detect() {
    const saved = localStorage.getItem('bt_lang');
    if (saved && LANGS[saved]) return saved;
    const b = (navigator.language || 'es').toLowerCase();
    if (b.startsWith('ko')) return 'ko';
    if (b.startsWith('it')) return 'it';
    if (b.startsWith('en')) return 'en';
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
  t(key) { return LANGS[this.current]?.[key] || LANGS['es'][key] || key; },
  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = this.t(el.getAttribute('data-i18n'));
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.getAttribute('data-i18n-html')).replace(/\n/g, '<br>');
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });
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
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => { this.apply(); this.updateSelector(); });
    } else { this.apply(); this.updateSelector(); }
  },
  getCard(num) {
    const lang = this.current;
    if (lang === 'es' || !CARD_TRANSLATIONS[lang]) return null;
    return CARD_TRANSLATIONS[lang].cards[num - 1] || null;
  },
  getCatLabel(cat) {
    const lang = this.current;
    if (lang === 'es' || !CARD_TRANSLATIONS[lang]) return null;
    return CARD_TRANSLATIONS[lang].catLabels[cat] || null;
  },
  getFilterLabels() {
    const lang = this.current;
    if (lang === 'es' || !CARD_TRANSLATIONS[lang]) return null;
    return CARD_TRANSLATIONS[lang].filterLabels || null;
  }
};

LangEngine.init();
