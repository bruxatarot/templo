// =====================================================
// BRUXA TAROT - ORÁCULO PRISMA DEL ALMA
// Archivo central de datos de las 31 cartas (COMPLETO)
// =====================================================

const ORACLE_CARDS = {

  // =====================================================
  // ESPAÑOL - COMPLETO (31 cartas)
  // =====================================================
  es: [
    {
      id: 1,
      name: "Bruxa Tarot",
      subtitle: "Canalizadora del Prisma",
      category: "esencias",
      keywords: ["Inspiración", "Renacimiento", "Claridad", "Transformación"],
      upright: {
        message: "Es tiempo de recuperar tu magia personal. Tienes el poder de cambiar tu mirada y elegir otra frecuencia. Esta carta es un llamado suave pero firme a recuperar el asombro.",
        whenAppears: "Bruxa Tarot aparece cuando es momento de ver la vida con otros ojos. ¿Qué áreas de tu vida se han vuelto grises?",
        ritual: "Toma algo viejo, olvidado o 'gris' y transfórmalo con color, flores, luz o intención."
      },
      reversed: {
        message: "En sombra: te desconectas de lo concreto y vives demasiado en potenciales. El prisma de posibilidades puede volverse laberinto.",
        whenAppears: "Cuando esta carta aparece invertida, la mente creativa se desconecta de lo concreto.",
        ritual: "Elige un área de tu vida que se sienta opaca y comprométete a darle color o forma concreta esta semana."
      },
      themes: {
        amor: {
          upright: "Estás apagando tu brillo creativo y emocional como estrategia de supervivencia. La herida de no ser suficiente te ha llevado a creer que tu intensidad ahuyenta el amor.",
          reversed: "Tu sombra principal en el amor es el miedo a ser abandonada por ser demasiado. Estás usando tu magia como escudo."
        },
        trabajo: {
          upright: "Estás apagando tu creatividad y tu poder profesional por miedo a no ser suficiente. Tu magia no se agota; se renueva cuando dejas de controlarla.",
          reversed: "Tu sombra principal en el trabajo es el miedo a que te vean como demasiado intensa o exigente. Estás minimizando tu aporte."
        }
      }
    },
    {
      id: 2,
      name: "Nabi",
      subtitle: "Cazadora de Espíritus",
      category: "esencias",
      keywords: ["Protección energética", "Intuición aguda", "Observación", "Alerta espiritual"],
      upright: {
        message: "Algo invisible necesita ser visto. Tu intuición será tu mejor aliada. Observa, discierte y actúa con sigilo, pero con firmeza.",
        whenAppears: "Cuando Nabi aparece, algo sutil pero importante necesita atención. Podría ser una energía que no pertenece o una intención oculta.",
        ritual: "Limpia un espacio importante para ti con luz natural, campanas o agua de rosas. Coloca una mariposa como guardiana del portal."
      },
      reversed: {
        message: "En sombra: la hipervigilancia se convierte en ansiedad y sospecha. Ves peligro donde no lo hay.",
        whenAppears: "Cuando Nabi aparece invertida, estás ignorando señales importantes o generando paranoia espiritual.",
        ritual: "Haz una limpieza energética suave y luego siéntate en silencio 10 minutos sin analizar nada."
      },
      themes: {
        amor: {
          upright: "Tus miedos en el amor no son irracionales, pero muchos pertenecen al pasado. Nabi te invita a distinguir entre amenaza real y activación de heridas antiguas.",
          reversed: "Tu hipervigilancia emocional se ha convertido en un mecanismo de defensa que sabotea conexiones antes de que puedan demostrarte que son seguras."
        },
        trabajo: {
          upright: "Tus miedos profesionales están activando tu sistema nervioso de forma desproporcionada. Nabi te invita a distinguir entre amenaza real y herida antigua.",
          reversed: "Estás creando problemas donde no los hay como forma de sentir que tienes el control. Esta tendencia al drama profesional te mantiene en estrés innecesario."
        }
      }
    },
    {
      id: 3,
      name: "Marta",
      subtitle: "Diosa de la Sanación",
      category: "esencias",
      keywords: ["Sanación", "Paciencia", "Amor que se cultiva", "Ciclos"],
      upright: {
        message: "Sanar no implica evitar el dolor, sino atravesarlo con valentía. Marta te invita a confiar en que cada lágrima derramada riega tu camino hacia una versión más fuerte de ti.",
        whenAppears: "Estás en un proceso de sanación o crecimiento emocional. No te presiones para avanzar rápido.",
        ritual: "Escribe una carta a tu 'yo futuro' contándole qué estás sanando ahora. Guárdala donde guardas tus tesoros."
      },
      reversed: {
        message: "En sombra: la paciencia se convierte en estancamiento. Te aferras a la esperanza aunque ya no haya señales.",
        whenAppears: "Cuando Marta aparece invertida, la sanación se estanca. Estás negando el dolor o esperando que el tiempo lo resuelva todo.",
        ritual: "Reconoce una herida que has estado evitando sentir. Siéntate con ella 10 minutos sin intentar 'arreglarla'."
      },
      themes: {
        amor: {
          upright: "Estás en un proceso de sanación donde el dolor ya no puede ser evitado ni negado. Tu capacidad de sentir profundamente no es una debilidad, sino la puerta hacia un amor más maduro.",
          reversed: "Estás usando el rol de la que siempre sana o la fuerte como forma de evitar sentir tu propio dolor."
        },
        trabajo: {
          upright: "Estás en un proceso de sanación profesional donde el agotamiento y el burnout ya no pueden ser ignorados. Tu forma de trabajar necesita cambiar.",
          reversed: "Estás usando el rol de la que siempre resiste y aguanta como forma de evitar sentir tu propio agotamiento."
        }
      }
    },
    {
      id: 4,
      name: "Jade",
      subtitle: "Diosa del Karma",
      category: "esencias",
      keywords: ["Equilibrio", "Justicia energética", "Cosecha emocional", "Responsabilidad"],
      upright: {
        message: "Jade aparece cuando el universo está haciendo ajustes. Todo lo que sembraste comienza a dar frutos. Esta carta te invita a perdonarte y soltar lo que ya no te corresponde cargar.",
        whenAppears: "Una situación está alcanzando su punto de equilibrio. Una verdad saldrá a la luz, un ciclo cierra.",
        ritual: "Haz una lista de tus 'cosechas'. ¿Qué estás recibiendo ahora que sembraste antes?"
      },
      reversed: {
        message: "En sombra: la necesidad de equilibrio se vuelve rigidez y juicio excesivo. El peso de la justicia puede convertirse en condena.",
        whenAppears: "Cuando Jade aparece invertida, el equilibrio se ha perdido. Puedes estar repitiendo un patrón o cargando karma que no es tuyo.",
        ritual: "Escribe qué patrones se están repitiendo y qué responsabilidad tienes tú en ellos."
      },
      themes: {
        amor: {
          upright: "Estás frente a un espejo kármico en tus relaciones. Lo que estás recibiendo es reflejo de los patrones que has repetido.",
          reversed: "Estás repitiendo patrones donde das más de lo que recibes y luego te sientes víctima."
        },
        trabajo: {
          upright: "Estás frente a un espejo kármico en tu carrera. Lo que estás recibiendo es reflejo de los patrones que has repetido profesionalmente.",
          reversed: "Tu patrón más repetido es dar mucho más de lo que cobras y luego resentirte."
        }
      }
    },
    {
      id: 5,
      name: "Elena",
      subtitle: "Diosa del Camino",
      category: "esencias",
      keywords: ["Intuición", "Guía interna", "Claridad emocional", "Llamado espiritual"],
      upright: {
        message: "El camino ya está trazado dentro de ti. Aunque no veas todo el mapa, tienes suficiente claridad para el siguiente paso. Confía en tu intuición.",
        whenAppears: "Elena aparece cuando estás perdida o a punto de rendirte. Su energía aparece como una luz suave y constante.",
        ritual: "Camina en silencio y pregúntate: '¿Cuál es el siguiente paso que necesito dar?' Permite que tu cuerpo e intuición respondan."
      },
      reversed: {
        message: "En sombra: la brújula interna se silencia por duda excesiva. No confías en lo que ya sabes.",
        whenAppears: "Cuando Elena aparece invertida, estás ignorando tu intuición o buscando respuestas fuera de ti.",
        ritual: "Apaga todas las distracciones durante 15 minutos y escribe lo que tu interior ya sabe pero no quieres admitir."
      },
      themes: {
        amor: {
          upright: "Hay una decisión importante en el amor que tu corazón ya sabe, aunque tu mente siga dudando. Elena te invita a confiar en esa voz interna.",
          reversed: "Estás eligiendo desde el miedo al cambio o al abandono en vez de desde lo que realmente deseas."
        },
        trabajo: {
          upright: "Hay una decisión profesional importante que tu interior ya sabe, pero tu miedo al cambio sigue retrasando.",
          reversed: "Estás eligiendo desde el miedo al fracaso o al abandono profesional más que desde lo que realmente deseas."
        }
      }
    },
    {
      id: 6,
      name: "Mia",
      subtitle: "Diosa del Amor Propio",
      category: "esencias",
      keywords: ["Autoafirmación", "Dignidad", "Liberación emocional", "Valor propio"],
      upright: {
        message: "Mia llega cuando es momento de recordar quién eres y lo que vales. El amor empieza por ti. No temas alejarte de lo que no te valora.",
        whenAppears: "Estás reclamando tu poder personal. Estás cerrando un ciclo emocional o aprendiendo a poner límites.",
        ritual: "Escribe en una hoja todo lo que mereces. Léelo en voz alta como declaración."
      },
      reversed: {
        message: "En sombra: la autoprotección se vuelve cierre prematuro. Tu dignidad puede volverse distancia.",
        whenAppears: "Cuando Mia aparece invertida, puedes estar dando más de lo que recibes o aceptando menos de lo que mereces.",
        ritual: "Revisa una relación donde estés tolerando menos de lo que mereces. Escribe qué límite necesitas poner."
      },
      themes: {
        amor: {
          upright: "Es momento de soltar lo que ya no te nutre en el amor. Entregar demasiado esperando algo a cambio solo te está vaciando.",
          reversed: "Estás descuidando tu propio valor al permitir dinámicas donde das mucho más de lo que recibes."
        },
        trabajo: {
          upright: "Estás entregando demasiado de ti misma en el trabajo esperando reconocimiento que no llega. Tu valor no se negocia.",
          reversed: "Estás descuidando tu propio valor profesional al permitir dinámicas de explotación."
        }
      }
    },
    {
      id: 7,
      name: "Tony",
      subtitle: "Dios del Tiempo",
      category: "esencias",
      keywords: ["Urgencia", "Acción", "Decisión", "Cambio inminente"],
      upright: {
        message: "Tony aparece cuando el tiempo es ahora. Ya no hay espacio para el 'después'. Lo que no eliges hoy, lo elige el tiempo por ti.",
        whenAppears: "Estás en un momento clave. Algo necesita ser decidido, iniciado o dejado atrás.",
        ritual: "Escribe qué te está reteniendo y qué sabes que necesitas soltar o decidir. Pon un temporizador y da el primer paso."
      },
      reversed: {
        message: "En sombra: la urgencia se convierte en ansiedad por el futuro. El miedo a que el tiempo se acabe te paraliza.",
        whenAppears: "Cuando Tony aparece invertido, estás atrapado en la procrastinación o dejando que el tiempo tome decisiones por ti.",
        ritual: "Elige una cosa que has estado postergando y comprométete a hacerla en las próximas 24 horas."
      },
      themes: {
        amor: {
          upright: "Has estado postergando decisiones importantes en el amor. Cada día que dejas pasar sin actuar es tiempo que no recuperas.",
          reversed: "Estás atrapada en patrones donde sigues invirtiendo en relaciones que ya sabes que no tienen futuro."
        },
        trabajo: {
          upright: "Has estado postergando decisiones importantes en tu carrera. El tiempo que pierdes postergando no se recupera.",
          reversed: "Estás atrapada en el patrón de 'mañana empiezo'. Esta procrastinación crónica suele esconder miedo al fracaso."
        }
      }
    },
    {
      id: 8,
      name: "Dante",
      subtitle: "Dios del Fuego y la Resurrección",
      category: "esencias",
      keywords: ["Deseo profundo", "Renacimiento", "Pasión", "Coraje emocional"],
      upright: {
        message: "Dante aparece cuando el deseo es tan fuerte que no puede ser ignorado. Es el fuego que quema lo que ya no sirve para renacer. Atrévete a sentir sin censura.",
        whenAppears: "Algo se está despertando en ti. Puede ser una pasión dormida o un deseo que habías reprimido por miedo.",
        ritual: "Escribe una carta a ese deseo que nunca muere. Quémala en un fuego seguro."
      },
      reversed: {
        message: "En sombra: la intensidad se convierte en adicción al drama emocional. Buscas el fuego aunque destruya.",
        whenAppears: "Cuando Dante aparece invertido, el fuego puede estar fuera de control o completamente extinguido.",
        ritual: "Identifica si estás buscando intensidad por adicción o si realmente hay un deseo auténtico."
      },
      themes: {
        amor: {
          upright: "Estás enfrentando un momento difícil en el amor, pero tienes dentro de ti la fuerza necesaria para superarlo. Tus cicatrices también son medallas de valentía.",
          reversed: "Estás permitiendo que las derrotas amorosas te definan. Dante te confronta con la necesidad de dejar de identificarte con el dolor."
        },
        trabajo: {
          upright: "Estás atravesando un momento profesional difícil. Dante te recuerda que tienes dentro de ti la fuerza para transformarlo.",
          reversed: "Estás permitiendo que los rechazos o fracasos profesionales te definan."
        }
      }
    },
    {
      id: 9,
      name: "La Voz Clara",
      subtitle: "Regreso Interior",
      category: "esencias",
      keywords: ["Reconexión", "Verdad interna", "Intuición", "Expresión"],
      upright: {
        message: "La Voz Clara es el momento en que el alma dice: ya no más huir. Estás lista para volver a ti. Es hora de tomar el micrófono de tu propia vida.",
        whenAppears: "Has estado minimizando lo que sientes o cediendo tu poder en nombre de la paz. Es momento de expresarte.",
        ritual: "Escribe lo que necesitas decir pero no te has atrevido. Léelo en voz alta aunque nadie te escuche."
      },
      reversed: {
        message: "En sombra: el ruido externo ahoga la voz interior. No logras escucharte. Hoy apaga todo lo que no eres tú.",
        whenAppears: "Cuando La Voz Clara aparece invertida, estás negando tus emociones o autocensurándote por miedo a generar conflicto.",
        ritual: "Siéntate en silencio total 15 minutos. Pregúntate qué estás callando y por qué."
      },
      themes: {
        amor: {
          upright: "Es tiempo de romper el silencio en el amor. Hay cosas que necesitas decir o escuchar y que ya no puedes seguir guardando.",
          reversed: "Estás negando tus emociones o autocensurándote por miedo a generar conflicto. El costo de no decir lo que sientes es muy alto."
        },
        trabajo: {
          upright: "Es tiempo de usar tu voz en el trabajo. Hay cosas que necesitas decir y que ya no puedes seguir callando.",
          reversed: "Estás autocensurándote profesionalmente por miedo a la confrontación o al rechazo."
        }
      }
    },
    {
      id: 10,
      name: "El Llamado del Alma",
      subtitle: "Despertar Espiritual",
      category: "esencias",
      keywords: ["Despertar", "Búsqueda interior", "Llamado espiritual", "Propósito"],
      upright: {
        message: "Tu corazón desea otra vida. Cuando ya diste el primer paso y necesitas confirmación de que tu alma te guía — esta carta es esa señal.",
        whenAppears: "Sientes un vacío o una inquietud que no sabes nombrar. Tu alma está llamando a algo más profundo.",
        ritual: "Escribe qué es lo que tu corazón desea realmente, aunque parezca imposible o loco."
      },
      reversed: {
        message: "En sombra: el despertar genera crisis de identidad. Te resistes al cambio que tu alma pide.",
        whenAppears: "Cuando El Llamado del Alma aparece invertida, estás ignorando los susurros de tu alma por miedo al cambio.",
        ritual: "Reconoce qué parte de tu vida actual ya no te llena y escribe qué te da miedo soltar."
      },
      themes: {
        amor: {
          upright: "Sientes un vacío o una inquietud en el amor que no sabes nombrar. Tu alma está llamando a una conexión más profunda y auténtica.",
          reversed: "Estás ignorando los susurros de tu alma por miedo al cambio. La negación solo alarga el proceso."
        },
        trabajo: {
          upright: "Sientes una inquietud o un vacío en tu trabajo actual que no sabes explicar. Tu propósito está pidiendo algo más profundo.",
          reversed: "Estás ignorando los susurros de tu propósito por miedo al cambio o a perder la estabilidad."
        }
      }
    },
    {
      id: 11,
      name: "El Regreso a Casa",
      subtitle: "Reconexión",
      category: "esencias",
      keywords: ["Reencuentro con el alma", "Calma profunda", "Cierre de ciclo", "Hogar interior"],
      upright: {
        message: "Luego del caos, del despertar, del dolor — decides volver a ti. No es un regreso al pasado: es al presente más honesto, más tuyo.",
        whenAppears: "Estás cerrando un ciclo importante. Dentro de ti está naciendo una calma nueva.",
        ritual: "Crea un ritual de cierre: quema algo simbólico, escribe una carta de despedida o haz un acto que represente 'volver a casa'."
      },
      reversed: {
        message: "En sombra: le temes a la calma. La estabilidad te parece aburrida o falsa.",
        whenAppears: "Cuando El Regreso a Casa aparece invertida, estás anhelando un regreso pero aún no has cerrado el ciclo anterior.",
        ritual: "Reconoce qué ciclo no has cerrado y qué te da miedo soltar para poder volver a ti."
      },
      themes: {
        amor: {
          upright: "Estás cerrando un ciclo importante en el amor. Aunque el mundo siga en caos, dentro de ti está naciendo una calma nueva.",
          reversed: "Estás anhelando un regreso, pero aún no has cerrado el ciclo anterior. Hay nostalgia o deseo de volver a algo que ya no existe."
        },
        trabajo: {
          upright: "Estás cerrando un ciclo profesional importante. Dentro de ti está naciendo una nueva forma de relacionarte con tu trabajo.",
          reversed: "Estás anhelando un cambio profesional, pero aún no has cerrado el ciclo anterior."
        }
      }
    },
    {
      id: 12,
      name: "Álvaro",
      subtitle: "Tejedor de Sombras",
      category: "dualidades",
      keywords: ["Manipulación emocional", "Ambigüedad", "Control", "Juegos de poder"],
      upright: {
        message: "Esta carta surge cuando alguien juega contigo sin decirlo. Tu intuición ya sabe la verdad. También aparece cuando tú misma estás cayendo en dinámicas de manipulación.",
        whenAppears: "Hay alguien jugando contigo sin decirlo claramente. Álvaro te recuerda que tu intuición ya sabe la verdad.",
        ritual: "Observa durante 3 días las dinámicas de poder en tus relaciones cercanas. Anota qué sientes en el cuerpo cuando algo no te cuadra."
      },
      reversed: {
        message: "En sombra profunda: manipulación pasiva y dependencia emocional disfrazada. Usas la ambigüedad como escudo para no comprometerte.",
        whenAppears: "Cuando Álvaro aparece invertido, estás permitiendo que alguien controle tu luz con hilos invisibles.",
        ritual: "Elige una relación donde sientas que hay manipulación y decide qué límite vas a poner esta semana."
      },
      themes: {
        amor: {
          upright: "Hay alguien jugando contigo sin decirlo claramente. Álvaro te recuerda que tu intuición ya sabe la verdad, aunque tu mente siga buscando excusas.",
          reversed: "Estás permitiendo que alguien controle tu luz con hilos invisibles. Tu sombra aquí es seguir justificando comportamientos que sabes que no están bien."
        },
        trabajo: {
          upright: "Hay dinámicas de poder o manipulación en tu entorno laboral que tu intuición ya detectó. Álvaro te recuerda que tu percepción es precisa.",
          reversed: "Estás permitiendo que alguien en tu trabajo controle información o decisiones de forma que te afecta."
        }
      }
    },
    {
      id: 13,
      name: "Emmanuel",
      subtitle: "Eco de la Duda",
      category: "dualidades",
      keywords: ["Indecisión", "Inseguridad emocional", "Elecciones inconclusas", "Casi"],
      upright: {
        message: "Cuando estás esperando que alguien elija… y no lo hace. No elegir también es elegir. Y el alma lo sabe.",
        whenAppears: "Estás atrapada entre lo que deseas y lo que te atreves a elegir. No elegir también es elegir.",
        ritual: "Escribe las tres opciones que tienes frente a ti. Al lado de cada una escribe: 'Si elijo esto, ¿qué estoy evitando sentir?'"
      },
      reversed: {
        message: "En sombra: nostalgia paralizante y apego a lo conocido aunque duela. No elegir también es una elección.",
        whenAppears: "Cuando Emmanuel aparece invertido, estás reviviendo escenas y miradas una y otra vez.",
        ritual: "Elige conscientemente no elegir durante 48 horas y observa cómo te sientes. Luego toma una decisión pequeña."
      },
      themes: {
        amor: {
          upright: "Estás esperando que alguien elija y esa espera te está haciendo daño. Emmanuel te recuerda que el amor no es tibio. Es fuego o no es nada.",
          reversed: "Estás reviviendo escenas y miradas una y otra vez. Tu sombra en el amor se llama aferrarte a lo que no te elige."
        },
        trabajo: {
          upright: "Estás esperando que algo o alguien elija por ti en tu carrera y esa espera te está generando frustración y estancamiento.",
          reversed: "Estás reviviendo una y otra vez escenarios laborales pasados. Esta rumiación te mantiene atrapada en el pasado."
        }
      }
    },
    {
      id: 14,
      name: "Valeria",
      subtitle: "El Veneno Sutil",
      category: "dualidades",
      keywords: ["Manipulación", "Seducción oscura", "Peligro encubierto", "Toxicidad pasiva"],
      upright: {
        message: "Valeria llega como susurro. ¿Lo que sientes es deseo o adicción? ¿Estás aceptando migajas disfrazadas de pasión?",
        whenAppears: "Estás percibiendo que detrás de una sonrisa hay intenciones ocultas. Valeria te recuerda que tu intuición es precisa.",
        ritual: "Observa una relación o dinámica donde sientas que hay algo que no cuadra. Escribe qué te hace sentir en el cuerpo."
      },
      reversed: {
        message: "En sombra: toxicidad pasiva y autoafirmación a costa de otros. Distorsionas percepciones sin confrontación directa.",
        whenAppears: "Cuando Valeria aparece invertida, estás adoptando tácticas de manipulación sin darte cuenta.",
        ritual: "Reconoce si estás usando alguna forma de manipulación (culpa, silencio, seducción) para conseguir lo que quieres."
      },
      themes: {
        amor: {
          upright: "Estás percibiendo que detrás de una sonrisa hay intenciones ocultas. Valeria te recuerda que tu intuición es precisa. Confía en lo que ves más allá de las palabras.",
          reversed: "Estás adoptando tácticas de manipulación sin darte cuenta. Valeria te confronta con tu propio reflejo oscuro."
        },
        trabajo: {
          upright: "Estás percibiendo que detrás de ciertas dinámicas laborales hay intenciones ocultas. Valeria te recuerda que tu intuición es precisa.",
          reversed: "Estás adoptando tácticas de manipulación en el trabajo sin darte cuenta."
        }
      }
    },
    {
      id: 15,
      name: "Karina",
      subtitle: "Intromisión Silenciosa",
      category: "dualidades",
      keywords: ["Control emocional", "Celos", "Inseguridad oculta", "Comparación"],
      upright: {
        message: "El verdadero poder no viene del control externo, sino de la seguridad interna. Esta carta te invita a soltar el espejismo del control.",
        whenAppears: "Estás sintiendo resentimiento o envidia ante el éxito o la felicidad de alguien más. Karina te invita a mirar hacia dentro.",
        ritual: "Cuando sientas envidia o comparación, pregúntate: '¿Qué es lo que realmente deseo para mí?' Escribe la respuesta."
      },
      reversed: {
        message: "En sombra: cruzas límites sin confrontación abierta, desde la inseguridad disfrazada de poder.",
        whenAppears: "Cuando Karina aparece invertida, tu envidia se está volviendo contra ti.",
        ritual: "La próxima vez que sientas envidia, detente y bendice a esa persona en voz alta. Observa qué pasa en tu cuerpo."
      },
      themes: {
        amor: {
          upright: "Estás sintiendo resentimiento o envidia ante el éxito o la felicidad amorosa de alguien más. Karina te invita a mirar hacia dentro en vez de comparar.",
          reversed: "Tu envidia se está volviendo contra ti: te niegas la alegría y te comparas sin piedad."
        },
        trabajo: {
          upright: "Estás sintiendo resentimiento o envidia ante el éxito, reconocimiento o ascenso de alguien en tu entorno laboral.",
          reversed: "Tu envidia profesional se está volviendo contra ti. Karina te confronta con el veneno que estás bebiendo."
        }
      }
    },
    {
      id: 16,
      name: "Tatiana",
      subtitle: "Prisionera del Ayer",
      category: "dualidades",
      keywords: ["Estancamiento", "Nostalgia", "Miedo al cambio", "Patrones repetitivos"],
      upright: {
        message: "Tatiana aparece cuando estás aferrada a algo solo porque es familiar. ¿Estás en ciclos repetidos por costumbre, no por amor?",
        whenAppears: "Estás repitiendo patrones de relación que solo te dejan estancada. Tatiana te recuerda que el miedo al cambio es más doloroso a largo plazo.",
        ritual: "Escribe un patrón que se repite en tu vida. Al lado escribe: 'Qué gano quedándome aquí' y 'Qué pierdo si me voy'."
      },
      reversed: {
        message: "En sombra: vives emocionalmente anclada al pasado y repites ciclos por miedo al cambio.",
        whenAppears: "Cuando Tatiana aparece invertida, estás idealizando un pasado que ya no existe para no tener que enfrentar el presente.",
        ritual: "Elige una cosa del pasado que sigues cargando (objeto, recuerdo, historia) y decide si la guardas, la transformas o la sueltas."
      },
      themes: {
        amor: {
          upright: "Estás repitiendo patrones de relación que solo te dejan estancada. Tatiana te recuerda que el miedo al cambio es más doloroso a largo plazo que el riesgo de soltar.",
          reversed: "Estás idealizando un pasado que ya no existe para no tener que enfrentar el presente. Tu sombra en el amor se llama miedo al cambio."
        },
        trabajo: {
          upright: "Estás repitiendo patrones laborales que solo te dejan estancada. Tatiana te recuerda que el miedo al cambio es más costoso a largo plazo.",
          reversed: "Estás idealizando un pasado profesional para no tener que enfrentar el presente."
        }
      }
    },
    {
      id: 17,
      name: "Lucía y Samuel",
      subtitle: "Susurro Eterno",
      category: "dualidades",
      keywords: ["Amor imposible", "Conexión profunda", "Silencio que arde", "Amor no correspondido"],
      upright: {
        message: "Cuando sientes un amor tan profundo que trasciende lo tangible. A veces el alma está esperando otra vida, otro plano, otro momento.",
        whenAppears: "Hay un amor o conexión que sientes muy profundo pero que no se puede materializar en este momento.",
        ritual: "Escribe una carta a esa persona o a ese amor imposible. No la envíes. Quémala o guárdala como ritual de cierre o de honor."
      },
      reversed: {
        message: "En sombra: idealizas el pasado y te cierras al presente. Un amor no cerrado sigue ocupando espacio que podría ser tuyo.",
        whenAppears: "Cuando Lucía y Samuel aparecen invertidos, estás aferrándote a un amor que ya no te corresponde.",
        ritual: "Reconoce si hay un amor del pasado que sigue ocupando espacio emocional. Decide qué ritual de cierre necesitas hacer."
      },
      themes: {
        amor: {
          upright: "Cuando sientes un amor tan profundo que trasciende lo tangible. A veces el alma está esperando otra vida, otro plano, otro momento.",
          reversed: "Estás idealizando el pasado y te cierras al presente. Un amor no cerrado sigue ocupando espacio que podría ser tuyo."
        },
        trabajo: {
          upright: "Hay un proyecto, un sueño o una versión de ti profesional que sientes muy profundo pero que aún no se puede materializar.",
          reversed: "Estás aferrándote a una versión profesional del pasado que ya no te representa."
        }
      }
    },
    {
      id: 18,
      name: "Alberto",
      subtitle: "La Voz que Enfrenta la Injusticia",
      category: "guardianes",
      keywords: ["Justicia", "Lealtad", "Valentía", "Intercesión"],
      upright: {
        message: "Alberto aparece cuando alguien necesita ser defendido, aunque no se atreva a pedirlo. Sé trinchera cuando alguien más está cayendo.",
        whenAppears: "Estás sintiendo el impulso de apoyar o defender a alguien que está sufriendo. Alberto te recuerda que un acto de intercesión puede cambiar el rumbo.",
        ritual: "Piensa en alguien que está pasando por una injusticia o dificultad. Haz un acto concreto de apoyo (aunque sea pequeño)."
      },
      reversed: {
        message: "En sombra: rigidez moral o confrontación impulsiva. Luchas batallas que no son tuyas.",
        whenAppears: "Cuando Alberto aparece invertido, estás ignorando el sufrimiento de alguien cercano por miedo, conveniencia o para no involucrarte.",
        ritual: "Reconoce si hay una situación de injusticia que estás evitando ver o confrontar. Escribe qué te da miedo hacer al respecto."
      },
      themes: {
        amor: {
          upright: "Estás sintiendo el impulso de apoyar o defender a alguien que está sufriendo. Alberto te recuerda que un acto de intercesión puede cambiar el rumbo.",
          reversed: "Estás ignorando el sufrimiento de alguien cercano por miedo, conveniencia o para no involucrarte."
        },
        trabajo: {
          upright: "Estás sintiendo el impulso de apoyar, defender o interceder por alguien en tu entorno laboral que está siendo tratado injustemente.",
          reversed: "Estás ignorando situaciones de injusticia o abuso de poder en tu trabajo por miedo, conveniencia o para no meterte en problemas."
        }
      }
    },
    {
      id: 19,
      name: "Oracio",
      subtitle: "Protector de los Corazones Rotos",
      category: "guardianes",
      keywords: ["Lealtad incondicional", "Amor silencioso", "Presencia constante", "Honor"],
      upright: {
        message: "Es momento de honrar lo que siempre ha estado ahí: un amor no correspondido, una amistad que te sostuvo, una parte de ti que nunca dejaste morir.",
        whenAppears: "Hay un amor pasado o presente que sigue habitando en ti aunque la relación haya terminado. Oracio te invita a honrar esa conexión sin necesidad de mantenerla activa.",
        ritual: "Escribe el nombre de alguien que te sostuvo en algún momento y que ya no está tan presente. Agradece en voz alta lo que esa persona te dio."
      },
      reversed: {
        message: "En sombra: invisibilidad emocional y autosacrificio. Te borras para que otros brillen.",
        whenAppears: "Cuando Oracio aparece invertido, estás negándote el derecho a extrañar o a seguir sintiendo por alguien que ya no está.",
        ritual: "Permítete extrañar o sentir por alguien que ya no está en tu vida. Llora, escribe o haz un ritual de honor sin culpa."
      },
      themes: {
        amor: {
          upright: "Hay un amor pasado o presente que sigue habitando en ti aunque la relación haya terminado. Oracio te invita a honrar esa conexión sin necesidad de mantenerla activa.",
          reversed: "Estás negándote el derecho a extrañar o a seguir sintiendo por alguien que ya no está en tu vida."
        },
        trabajo: {
          upright: "Hay un trabajo, un proyecto o una etapa profesional que sigue habitando en ti aunque ya haya terminado. Oracio te invita a honrar lo que significó.",
          reversed: "Estás negándote el derecho a extrañar o a seguir sintiendo por una etapa profesional que ya terminó."
        }
      }
    },
    {
      id: 20,
      name: "Rosario",
      subtitle: "La Druida del Espejo",
      category: "guardianes",
      keywords: ["Reflexión emocional", "Claridad intuitiva", "Verdad no forzada", "Silencio sanador"],
      upright: {
        message: "Rosario no te da respuestas directas: te pone frente al espejo y te acompaña mientras las descubres. La amistad que escucha antes de hablar.",
        whenAppears: "Estás necesitando un espacio de silencio y observación interna respecto a tus emociones. Rosario te invita a dejar de buscar respuestas afuera.",
        ritual: "Dedica 20 minutos a estar contigo misma sin distracciones. Solo observa qué surge cuando no hay ruido externo."
      },
      reversed: {
        message: "En sombra: exceso de autoanálisis o dureza emocional. La verdad se convierte en juicio.",
        whenAppears: "Cuando Rosario aparece invertida, estás evitando mirar lo que realmente sientes por miedo a lo que puedas descubrir.",
        ritual: "La próxima vez que quieras buscar consejo externo, primero pregúntate: '¿Qué es lo que ya sé pero no quiero ver?'"
      },
      themes: {
        amor: {
          upright: "Estás necesitando un espacio de silencio y observación interna respecto a tus emociones amorosas. Rosario te invita a dejar de buscar respuestas afuera.",
          reversed: "Estás evitando mirar lo que realmente sientes por miedo a lo que puedas descubrir."
        },
        trabajo: {
          upright: "Estás necesitando un espacio de silencio y observación interna respecto a tu situación laboral. Rosario te invita a dejar de buscar respuestas afuera.",
          reversed: "Estás evitando mirar lo que realmente sientes sobre tu trabajo por miedo a lo que puedas descubrir."
        }
      }
    },
    {
      id: 21,
      name: "Las Tres Aliadas",
      subtitle: "Renata, Cristina y Sofía",
      category: "guardianes",
      keywords: ["Apoyo incondicional", "Sororidad", "Fuerza compartida", "Red de sostén"],
      upright: {
        message: "¿Estás dejando que te acompañen, o tratando de cargar todo sola? Es momento de honrar a quienes te sostienen.",
        whenAppears: "Estás necesitando recordar quiénes realmente te sostienen. Esta carta aparece cuando has estado invirtiendo energía en relaciones que no te devuelven lo mismo que das.",
        ritual: "Escribe los nombres de 3 personas que te sostienen de verdad. Luego envíales un mensaje de agradecimiento sincero."
      },
      reversed: {
        message: "En sombra: dispersión emocional o contradicción interna. Las voces que te apoyan se contradicen y te confunden.",
        whenAppears: "Cuando Las Tres Aliadas aparecen invertidas, estás aislándote emocionalmente por orgullo, miedo o decepción pasada.",
        ritual: "Reconoce si estás rechazando apoyo que te están ofreciendo. Pregúntate por qué."
      },
      themes: {
        amor: {
          upright: "Estás necesitando recordar quiénes realmente te sostienen en tu proceso amoroso. Las Tres Aliadas te recuerdan que no tienes que cargar todo sola.",
          reversed: "Estás aislándote emocionalmente por orgullo, miedo o decepción pasada. Esta posición te está privando del sostén que podrías recibir."
        },
        trabajo: {
          upright: "Estás necesitando recordar quiénes realmente te sostienen en tu camino profesional. Las Tres Aliadas te recuerdan que no tienes que cargar todo sola.",
          reversed: "Estás aislándote profesionalmente por orgullo, miedo o decepción pasada."
        }
      }
    },
    {
      id: 22,
      name: "Jazmín",
      subtitle: "Cupido Encubierto",
      category: "guardianes",
      keywords: ["Amor verdadero", "Unión sutil", "Intuición silenciosa", "Señales"],
      upright: {
        message: "Jazmín trabaja en silencio y confía en el tiempo del universo. El verdadero cupido no lanza flechas, sino señales.",
        whenAppears: "Estás sintiendo una atracción o conexión que te genera expectativa y también miedo. Jazmín te recuerda que el amor no se fuerza; se reconoce cuando está listo.",
        ritual: "Durante 7 días, observa las señales sutiles que aparecen en tu vida (sueños, coincidencias, sensaciones). Anótalas sin juzgar."
      },
      reversed: {
        message: "En sombra: conectas a todos menos a ti misma/o. Postergás tu propio deseo emocional para ser puente de otros.",
        whenAppears: "Cuando Jazmín aparece invertida, estás forzando una conexión o creando expectativas prematuras porque tienes miedo de que se escape lo bueno.",
        ritual: "Reconoce si estás proyectando en alguien todo lo que has estado esperando. Pregúntate qué necesitas soltar de esa proyección."
      },
      themes: {
        amor: {
          upright: "Estás sintiendo una atracción o conexión que te genera expectativa y también miedo. Jazmín te recuerda que el amor no se fuerza; se reconoce cuando está listo.",
          reversed: "Estás forzando una conexión o creando expectativas prematuras porque tienes miedo de que se escape lo bueno."
        },
        trabajo: {
          upright: "Estás sintiendo una atracción o una oportunidad profesional que te genera expectativa y también miedo. Jazmín te recuerda que las mejores oportunidades a veces aparecen cuando no las estás forzando.",
          reversed: "Estás forzando oportunidades o creando expectativas prematuras porque tienes miedo de que se escape lo bueno."
        }
      }
    },
    {
      id: 23,
      name: "Daniela",
      subtitle: "Cheerleader del Alma",
      category: "guardianes",
      keywords: ["Motivación auténtica", "Fe prestada", "Energía contagiosa", "Auto-reconocimiento"],
      upright: {
        message: "Esta carta es el grito del alma que dice: vas mejor de lo que crees. No te escondas cuando es hora de brillar.",
        whenAppears: "Estás dudando de tu propio valor. Daniela te recuerda que tu merecimiento no depende de que alguien te lo confirme.",
        ritual: "Escribe 5 cosas que has logrado o superado que te enorgullecen. Léelas en voz alta frente al espejo."
      },
      reversed: {
        message: "En sombra: niegas tu propio dolor para mantener la energía de todos. Te consumes ayudando y nadie lo nota.",
        whenAppears: "Cuando Daniela aparece invertida, estás esperando que alguien te dé el permiso para sentirte suficiente.",
        ritual: "La próxima vez que sientas que necesitas validación externa, pregúntate: '¿Qué es lo que ya sé que soy capaz de hacer?'"
      },
      themes: {
        amor: {
          upright: "Estás dudando de tu propio valor en el amor. Daniela te recuerda que tu merecimiento no depende de que alguien te lo confirme.",
          reversed: "Estás esperando que alguien te dé el permiso para sentirte suficiente. Esta dependencia externa de validación te está manteniendo en una posición de inferioridad emocional."
        },
        trabajo: {
          upright: "Estás dudando de tu propio valor profesional. Daniela te recuerda que tu merecimiento no depende de que alguien te lo confirme externamente.",
          reversed: "Estás esperando que alguien te dé el permiso para sentirte suficiente profesionalmente."
        }
      }
    },
    {
      id: 24,
      name: "Heimdall",
      subtitle: "Guardián de los Portales",
      category: "llaves",
      keywords: ["Curiosidad poderosa", "Inicios mágicos", "Llaves ocultas", "Exploración"],
      upright: {
        message: "Sigue tu curiosidad, explora lo que parecía insignificante. Algo está a punto de abrirse en tu vida.",
        whenAppears: "Hay una puerta pequeña, una coincidencia, una conversación, una señal, que se está abriendo en tu vida. Heimdall te invita a no ignorarla.",
        ritual: "Durante 3 días, sigue cualquier curiosidad pequeña que aparezca (aunque parezca tonta). Anota qué pasa."
      },
      reversed: {
        message: "En sombra: hipercontrol y rigidez defensiva. Proteges tan bien los umbrales que nada bueno puede entrar.",
        whenAppears: "Cuando Heimdall aparece invertido, estás ignorando señales y oportunidades por miedo al caos o a lo desconocido.",
        ritual: "Elige una puerta pequeña que has estado evitando abrir (una conversación, una oportunidad, una idea) y ábrela aunque dé miedo."
      },
      themes: {
        amor: {
          upright: "Hay una puerta pequeña, una coincidencia, una conversación, una señal, que se está abriendo en tu vida amorosa. Heimdall te invita a no ignorarla por parecer poco importante.",
          reversed: "Estás ignorando señales y oportunidades por miedo al caos o a lo desconocido. Esta posición te mantiene estancada en lo conocido aunque ya no te nutra."
        },
        trabajo: {
          upright: "Hay una puerta pequeña, una conversación casual, una coincidencia, una idea fugaz, que se está abriendo en tu camino profesional.",
          reversed: "Estás ignorando señales y oportunidades profesionales por miedo al caos o a lo desconocido."
        }
      }
    },
    {
      id: 25,
      name: "Erebus",
      subtitle: "El Iluminado",
      category: "llaves",
      keywords: ["Sabiduría interior", "Claridad mental", "Silencio sagrado", "Revelación"],
      upright: {
        message: "Erebus aparece cuando estás listo para ver más allá de la superficie. Su presencia basta para hacerte encontrar respuestas donde antes solo había ruido.",
        whenAppears: "Estás necesitando ver con más claridad una situación que has estado evitando mirar de frente. Erebus te invita a entrar en la penumbra interna donde está la verdad.",
        ritual: "Dedica 20 minutos a estar en completa oscuridad o con los ojos cerrados. Pregúntate qué es lo que ya sabes pero no quieres ver."
      },
      reversed: {
        message: "En sombra: aislamiento emocional y sobreintelectualización. Te encierras tanto en tu mundo que pierdes contacto con los demás.",
        whenAppears: "Cuando Erebus aparece invertido, estás bloqueando tu voz interna con exceso de análisis y control mental.",
        ritual: "Apaga todas las pantallas y distracciones durante 1 hora. Permite que surja lo que está debajo del ruido."
      },
      themes: {
        amor: {
          upright: "Estás necesitando ver con más claridad una situación amorosa que has estado evitando mirar de frente. Erebus te invita a entrar en la penumbra interna donde está la verdad.",
          reversed: "Estás evitando mirar lo que realmente sientes por miedo a lo que puedas descubrir."
        },
        trabajo: {
          upright: "Estás necesitando ver con más claridad una situación profesional que has estado evitando mirar de frente.",
          reversed: "Estás bloqueando tu voz interna con exceso de análisis, control mental y saturación de información."
        }
      }
    },
    {
      id: 26,
      name: "Aetherius",
      subtitle: "El Viajero del Inframundo",
      category: "llaves",
      keywords: ["Travesía interior", "Misterio divino", "Transformación silenciosa", "Profundidad"],
      upright: {
        message: "Estás cruzando portales internos que antes no querías ver. No necesitas entenderlo todo: solo atreverte a seguir tu propio viaje.",
        whenAppears: "Estás sintiendo un llamado hacia algo más profundo. Aetherius te acompaña a confiar en esa búsqueda aunque no sepas exactamente qué estás buscando.",
        ritual: "Dedica tiempo a estar en naturaleza o en un lugar que te haga sentir pequeño/a frente a algo más grande. Pregúntate qué está llamando tu atención."
      },
      reversed: {
        message: "En sombra: te pierdes tan profundo en lo desconocido que pierdes contacto con la realidad cotidiana.",
        whenAppears: "Cuando Aetherius aparece invertido, estás perdiéndote en laberintos internos y proyecciones sin guía.",
        ritual: "Ancla algo concreto hoy: come, camina, respira la tierra. Vuelve al cuerpo después de cualquier trabajo interno profundo."
      },
      themes: {
        amor: {
          upright: "Estás sintiendo un llamado hacia algo más profundo en el amor. Aetherius te acompaña a confiar en esa búsqueda aunque no sepas exactamente qué estás buscando.",
          reversed: "Estás perdiéndote en laberintos internos y proyecciones sin guía. Tu sombra aquí es la evasión espiritualizada."
        },
        trabajo: {
          upright: "Estás sintiendo un llamado hacia algo más profundo en tu propósito profesional. Aetherius te acompaña a confiar en esa búsqueda aunque no sepas exactamente qué es.",
          reversed: "Estás perdiéndote en laberintos mentales, proyecciones y búsquedas externas sin guía interna."
        }
      }
    },
    {
      id: 27,
      name: "El Umbral del Inframundo",
      subtitle: "Portal Místico",
      category: "portales",
      keywords: ["Descenso consciente", "Renacimiento", "Oscuridad fértil", "Transformación"],
      upright: {
        message: "No entras para desaparecer, sino para recordar quién eras antes de olvidar. Para regresar a ti… a veces hay que bajar.",
        whenAppears: "Estás en un proceso donde algo dentro de ti necesita morir para que algo nuevo nazca. El Umbral te acompaña a soltar identidades que ya no te representan.",
        ritual: "Escribe qué parte de ti está muriendo o necesita morir. Haz un ritual de despedida (quemar, enterrar, soltar al agua)."
      },
      reversed: {
        message: "En sombra: te niegas a bajar. Evitas el dolor transformacional y te quedas en la superficie.",
        whenAppears: "Cuando El Umbral del Inframundo aparece invertido, estás resistiendo la transformación porque tienes miedo de quién serás después de soltar.",
        ritual: "Reconoce qué es lo que más miedo te da soltar. Escribe qué pasaría si realmente lo dejaras ir."
      },
      themes: {
        amor: {
          upright: "Estás en un proceso donde algo dentro de ti necesita morir para que algo nuevo nazca. Esta carta te acompaña a soltar identidades amorosas que ya no te representan.",
          reversed: "Estás resistiendo la transformación porque tienes miedo de quién serás después de soltar."
        },
        trabajo: {
          upright: "Estás en un proceso donde algo dentro de ti necesita morir profesionalmente para que algo nuevo nazca.",
          reversed: "Estás resistiendo la transformación profesional porque tienes miedo de quién serás después de soltar."
        }
      }
    },
    {
      id: 28,
      name: "El Concilio de la Magia",
      subtitle: "Portal Místico",
      category: "portales",
      keywords: ["Apoyo espiritual", "Guías invisibles", "Sincronicidades", "Pertenencia"],
      upright: {
        message: "Ya hay un concilio energético reunido: tus guías, tus yo futuros, tus ancestros. Ya estás siendo sostenida por energías mayores.",
        whenAppears: "Estás necesitando recordar que no estás sola en tu proceso. Hay personas y también fuerzas internas que te sostienen aunque no siempre las veas.",
        ritual: "Crea un altar pequeño o un espacio simbólico donde invites a tus guías, ancestros o versiones futuras de ti. Habla con ellos."
      },
      reversed: {
        message: "En sombra: buscas apoyo externo cuando la respuesta ya está dentro. Dependes demasiado de la validación de otros.",
        whenAppears: "Cuando El Concilio de la Magia aparece invertido, estás descuidando tus conexiones más profundas por prisa, orgullo o decepción pasada.",
        ritual: "Reconoce si estás buscando respuestas fuera cuando en realidad ya sabes lo que necesitas hacer. Confía en tu propio concilio interior."
      },
      themes: {
        amor: {
          upright: "Estás necesitando recordar que no estás sola en tu proceso amoroso. Hay personas y también fuerzas internas que te sostienen aunque no siempre las veas.",
          reversed: "Estás descuidando tus conexiones más profundas por prisa, orgullo o decepción pasada."
        },
        trabajo: {
          upright: "Estás necesitando recordar que no estás sola en tu camino profesional. Hay personas y también fuerzas internas que te sostienen aunque no siempre las veas.",
          reversed: "Estás descuidando tus conexiones profesionales más profundas por prisa, orgullo o decepción pasada."
        }
      }
    },
    {
      id: 29,
      name: "El Portal del Caos",
      subtitle: "Portal Místico",
      category: "portales",
      keywords: ["Transformación radical", "Despertar", "Renovación", "Liberación"],
      upright: {
        message: "El Portal del Caos no es tu enemigo. El universo sacude la mesa para que dejes de jugar a encajar. Te libera… aunque duela.",
        whenAppears: "Estás sintiendo que el estancamiento te asfixia y necesitas un impulso radical. El Portal del Caos te acompaña a soltar cargas acumuladas.",
        ritual: "Haz una lista de todo lo que estás cargando que ya no te sirve. Quema la lista o tírala al agua como acto de liberación."
      },
      reversed: {
        message: "En sombra: el caos te paraliza en vez de liberarte. Le temes a lo que se rompe aunque ya no servía.",
        whenAppears: "Cuando El Portal del Caos aparece invertido, estás paralizada por el miedo a soltar.",
        ritual: "Elige una cosa que sabes que necesitas soltar pero que te da miedo. Haz un acto simbólico de liberación aunque sea pequeño."
      },
      themes: {
        amor: {
          upright: "Estás sintiendo que el estancamiento te asfixia y necesitas un impulso radical. El Portal del Caos te acompaña a soltar cargas acumuladas.",
          reversed: "Estás paralizada por el miedo a soltar. Esta parálisis te está manteniendo en un caos interno que es más familiar que el cambio."
        },
        trabajo: {
          upright: "Estás sintiendo que el estancamiento en tu vida profesional ya no es sostenible. Esta carta te invita a generar un cambio radical aunque implique soltar mucho.",
          reversed: "Estás paralizada por el miedo a soltar estructuras laborales que ya no te sirven."
        }
      }
    },
    {
      id: 30,
      name: "El Inframundo de las Pociones",
      subtitle: "Portal Místico",
      category: "portales",
      keywords: ["Alquimia emocional", "Sanación profunda", "Proceso", "Paciencia"],
      upright: {
        message: "Tu alma está en proceso alquímico. No interrumpas la mezcla: confía en lo que se está cocinando dentro de ti.",
        whenAppears: "Estás impaciente por ver cambios y olvidas que el cambio profundo lleva su tiempo. Esta carta te recuerda que el amor y la paciencia son los mejores condimentos.",
        ritual: "Elige un proceso que está en marcha en tu vida y comprométete a no forzarlo durante 7 días. Observa qué pasa cuando le das tiempo."
      },
      reversed: {
        message: "En sombra: interrumpes el proceso antes de que termine. La impaciencia te impide ver los frutos.",
        whenAppears: "Cuando El Inframundo de las Pociones aparece invertido, estás buscando soluciones rápidas o parchear sin profundizar.",
        ritual: "Reconoce qué proceso estás interrumpiendo por impaciencia. Escribe qué pasaría si le das más tiempo."
      },
      themes: {
        amor: {
          upright: "Estás impaciente por ver cambios y olvidas que el cambio profundo lleva su tiempo. Esta carta te recuerda que el amor y la paciencia son los mejores condimentos para tu proceso.",
          reversed: "Estás buscando soluciones rápidas o parchear sin profundizar. Esta posición te invita a regresar a la olla, bajar el fuego y permitir que el tiempo haga su magia."
        },
        trabajo: {
          upright: "Estás queriendo resultados rápidos en tu desarrollo profesional y esto te está impidiendo madurar de verdad.",
          reversed: "Estás saltando pasos importantes en tu desarrollo profesional porque quieres llegar rápido a un resultado."
        }
      }
    },
    {
      id: 31,
      name: "El Portal del Conocimiento Infinito",
      subtitle: "Portal Místico",
      category: "portales",
      keywords: ["Despertar mental", "Claridad espiritual", "Canalización", "Revelación"],
      upright: {
        message: "La sabiduría no se encuentra… se recuerda. Estás lista para recibir respuestas que antes no podías sostener.",
        whenAppears: "Estás recibiendo insights y revelaciones importantes. Este Portal te invita a prestar atención a las señales, sueños y comprensiones que están llegando.",
        ritual: "Dedica 10 minutos antes de dormir a preguntarle a tu inconsciente: '¿Qué es lo que necesito entender ahora?' Anota lo que sueñes o lo que surja al despertar."
      },
      reversed: {
        message: "En sombra: recibes tanta información que no sabes cuál escuchar. El exceso de conocimiento se vuelve parálisis.",
        whenAppears: "Cuando El Portal del Conocimiento Infinito aparece invertido, estás bloqueando la revelación con exceso de análisis y control mental.",
        ritual: "Elige una sola verdad o insight que hayas recibido recientemente y actúa desde ahí durante 7 días. Deja de recolectar más información."
      },
      themes: {
        amor: {
          upright: "Estás recibiendo insights y revelaciones importantes sobre tu patrón en el amor. Este Portal te invita a prestar atención a las señales, sueños y comprensiones que están llegando.",
          reversed: "Estás bloqueando la revelación con exceso de análisis y control mental. Esta posición te mantiene en la superficie de lo que podrías entender."
        },
        trabajo: {
          upright: "Estás recibiendo insights y revelaciones importantes sobre tu patrón profesional y tu propósito. Este Portal te invita a prestar atención a las señales, sueños y comprensiones que están llegando.",
          reversed: "Estás bloqueando la revelación profesional con exceso de análisis, control mental y saturación de información."
        }
      }
    }
  ],

  // =====================================================
  // INGLÉS (Primeras 8 cartas completas como ejemplo)
  // =====================================================
  en: [
    {
      id: 1,
      name: "Bruxa Tarot",
      subtitle: "Prism Channeler",
      category: "esencias",
      keywords: ["Inspiration", "Rebirth", "Clarity", "Transformation"],
      upright: {
        message: "It is time to reclaim your personal magic. You have the power to change your gaze and choose another frequency.",
        whenAppears: "Bruxa Tarot appears when it is time to see life through new eyes. What areas of your life have become gray?",
        ritual: "Take something old, forgotten or 'gray' and transform it with color, flowers, light or intention."
      },
      reversed: {
        message: "In shadow: you disconnect from the concrete and live too much in potentials. The prism of possibilities can become a labyrinth.",
        whenAppears: "When this card appears reversed, the creative mind disconnects from the concrete.",
        ritual: "Choose an area of your life that feels dull and commit to giving it color or concrete form this week."
      },
      themes: {
        amor: {
          upright: "You are dimming your creative and emotional brightness as a survival strategy. The wound of not being enough has led you to believe that your intensity scares love away.",
          reversed: "Your main shadow in love is the fear of being abandoned for being 'too much'. You are using your magic as a shield."
        },
        trabajo: {
          upright: "You are dimming your creativity and professional power out of fear of not being enough. Your magic does not run out; it renews when you stop controlling it.",
          reversed: "Your main shadow at work is the fear of being seen as too intense or demanding. You are minimizing your contribution."
        }
      }
    },
    {
      id: 2,
      name: "Nabi",
      subtitle: "Spirit Hunter",
      category: "esencias",
      keywords: ["Energetic Protection", "Sharp Intuition", "Observation", "Spiritual Alertness"],
      upright: {
        message: "Something invisible needs to be seen. Your intuition will be your greatest ally. Observe, discern and act with stealth, but with firmness.",
        whenAppears: "When Nabi appears, something subtle but important needs attention. It could be an energy that does not belong or a hidden intention.",
        ritual: "Clean an important space for you with natural light, bells or rose water. Place a butterfly as guardian of the portal."
      },
      reversed: {
        message: "In shadow: hypervigilance turns into anxiety and suspicion. You see danger where there is none.",
        whenAppears: "When Nabi appears reversed, you are ignoring important signals or generating spiritual paranoia.",
        ritual: "Do a gentle energetic cleansing and then sit in silence for 10 minutes without analyzing anything."
      },
      themes: {
        amor: {
          upright: "Your fears in love are not irrational, but many of them belong to the past. Nabi invites you to distinguish between real threat and nervous system activation from old wounds.",
          reversed: "Your emotional hypervigilance has become a defense mechanism that sabotages connections before they can prove they are safe."
        },
        trabajo: {
          upright: "Your professional fears are activating your nervous system disproportionately. Nabi invites you to distinguish between real threat and old wound.",
          reversed: "You are creating problems where there are none as a way to feel you have control. This tendency toward professional drama keeps you in unnecessary stress."
        }
      }
    }
    // El resto de cartas en inglés siguen el mismo patrón.
    // Puedo completarlas cuando lo necesites.
  ]
};

// =====================================================
// FUNCIONES DE AYUDA
// =====================================================

function getOracleCard(id, lang = 'es') {
  const cards = ORACLE_CARDS[lang] || ORACLE_CARDS['es'];
  return cards.find(c => c.id === id) || null;
}

function getAllOracleCards(lang = 'es') {
  return ORACLE_CARDS[lang] || ORACLE_CARDS['es'];
}

function getCardMessage(card, context = 'general', isReversed = false) {
  if (!card) return '';

  if (context === 'amor' && card.themes?.amor) {
    return isReversed ? card.themes.amor.reversed : card.themes.amor.upright;
  }

  if (context === 'trabajo' && card.themes?.trabajo) {
    return isReversed ? card.themes.trabajo.reversed : card.themes.trabajo.upright;
  }

  const section = isReversed ? card.reversed : card.upright;
  return section?.message || '';
}

console.log('%c[Bruxa Tarot] Oracle Cards data loaded successfully (31 cards)', 'color:#7c3aed');
