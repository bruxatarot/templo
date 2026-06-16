const ORACLE_CARDS = {

  en: [
    {
      id: 1,
      name: "Bruxa Tarot",
      subtitle: "Prism Channeler",
      category: "essences",
      keywords: ["Inspiration", "Rebirth", "Clarity", "Transformation"],

      upright: {
        message: "It is time to reclaim your personal magic. You have the power to change your gaze and choose another frequency. This card is a gentle but firm call to recover your sense of wonder.",
        whenAppears: "Bruxa Tarot appears when it is time to see life through new eyes. You have the power to change your perspective and choose another frequency. What areas of your life have become gray?",
        ritual: "Take something old, forgotten or 'gray' and transform it with color, flowers, light or intention. Make it beautiful again."
      },
      reversed: {
        message: "In shadow: you disconnect from the concrete and live too much in potentials. The prism of possibilities can become a labyrinth. Today ask yourself: are you creating or evading?",
        whenAppears: "When this card appears reversed, the creative mind disconnects from the concrete. You are living in potentials without materializing them.",
        ritual: "Choose an area of your life that feels dull and commit to giving it color or concrete form this week."
      },
      themes: {
        amor: {
          upright: "You are dimming your creative and emotional brightness as a survival strategy. The wound of not being enough has led you to believe that your intensity scares love away. This card invites you to dismantle that belief and allow your magic to be visible.",
          reversed: "Your main shadow in love is the fear of being abandoned for being 'too much'. This belief has led you to develop creative hyper-independence as a form of protection. You are using your magic as a shield."
        },
        trabajo: {
          upright: "You are dimming your creativity and professional power out of fear of not being enough. This card reminds you that your magic does not run out; it renews when you stop controlling it.",
          reversed: "Your main shadow at work is the fear of being seen as too intense or demanding. This belief is leading you to minimize your contribution and not charge what you are really worth."
        }
      }
    },
    {
      id: 2,
      name: "Nabi",
      subtitle: "Spirit Hunter",
      category: "essences",
      keywords: ["Energetic Protection", "Sharp Intuition", "Observation", "Spiritual Alertness"],

      upright: {
        message: "Something invisible needs to be seen. Your intuition will be your greatest ally. Observe, discern and act with stealth, but with firmness.",
        whenAppears: "When Nabi appears, something subtle but important needs attention. It could be an energy that does not belong, a trapped emotion or a hidden intention.",
        ritual: "Clean an important space for you with natural light, bells or rose water. Place a butterfly as guardian of the portal."
      },
      reversed: {
        message: "In shadow: hypervigilance turns into anxiety and suspicion. You see danger where there is none. Today breathe — not everything you perceive is a real threat.",
        whenAppears: "When Nabi appears reversed, you are ignoring important signals or generating spiritual paranoia.",
        ritual: "Do a gentle energetic cleansing and then sit in silence for 10 minutes without analyzing anything."
      },
      themes: {
        amor: {
          upright: "Your fears in love are not irrational, but many of them belong to the past and not to the current relationship. Nabi invites you to distinguish between real threat and nervous system activation from old wounds.",
          reversed: "Your emotional hypervigilance has become a defense mechanism that sabotages connections before they can prove they are safe. You are creating enemies where there are only imperfect people."
        },
        trabajo: {
          upright: "Your professional fears are activating your nervous system disproportionately. Nabi invites you to distinguish between real threat and old wound.",
          reversed: "You are creating problems where there are none as a way to feel you have control. This tendency toward professional drama keeps you in unnecessary stress."
        }
      }
    },
    {
      id: 3,
      name: "Marta",
      subtitle: "Goddess of Healing",
      category: "essences",
      keywords: ["Healing", "Patience", "Cultivated Love", "Cycles"],

      upright: {
        message: "Healing does not mean avoiding pain, but going through it with courage. Marta invites you to trust that every tear shed waters your path toward a stronger version of yourself.",
        whenAppears: "You are in a process of healing or emotional growth. Do not pressure yourself to move fast. Take care of yourself as you would care for a delicate plant.",
        ritual: "Write a letter to your 'future self' telling them what you are healing now. Keep it where you keep your treasures."
      },
      reversed: {
        message: "In shadow: patience turns into stagnation. You cling to hope even when there are no longer any signs. Are you waiting or simply avoiding moving forward?",
        whenAppears: "When Marta appears reversed, healing stagnates. You are denying the pain or waiting for time to solve everything without doing anything.",
        ritual: "Acknowledge a wound you have been avoiding feeling. Sit with it for 10 minutes without trying to 'fix' it."
      },
      themes: {
        amor: {
          upright: "You are in a healing process where pain can no longer be avoided or denied. Marta accompanies you to understand that your ability to feel deeply is not a weakness, but the door to a more mature love.",
          reversed: "You are using the role of the one who always heals or the strong one as a way to avoid feeling your own pain. This identification with resilience is preventing you from processing what really hurts you."
        },
        trabajo: {
          upright: "You are in a professional healing process where exhaustion and burnout can no longer be ignored. Marta accompanies you to recognize that your way of working needs to change.",
          reversed: "You are using the role of the one who always resists and endures as a way to avoid feeling your own exhaustion. This identification with resilience is making you sick."
        }
      }
    },
    {
      id: 4,
      name: "Jade",
      subtitle: "Goddess of Karma",
      category: "essences",
      keywords: ["Balance", "Energetic Justice", "Emotional Harvest", "Responsibility"],

      upright: {
        message: "Jade appears when the universe is making adjustments. Everything you sowed begins to bear fruit. This card invites you to forgive yourself and release what no longer belongs to you.",
        whenAppears: "A situation is reaching its point of balance. A truth will come to light, a cycle closes, an energy is released.",
        ritual: "Make a list of your 'harvests'. What are you receiving now that you sowed before? What would you like to sow today for your future?"
      },
      reversed: {
        message: "In shadow: the need for balance turns into rigidity and excessive judgment. The weight of justice can become condemnation. Release the verdict.",
        whenAppears: "When Jade appears reversed, balance has been lost. You may be repeating a pattern you didn't want to see or carrying karma that isn't yours.",
        ritual: "Write down what patterns are repeating and what responsibility you have in them. Burn the paper as an act of release."
      },
      themes: {
        amor: {
          upright: "You are facing a karmic mirror in your relationships. What you are receiving is largely a reflection of the patterns you have repeated. Jade invites you to look honestly.",
          reversed: "You are repeating patterns where you give more than you receive and then feel like a victim. Jade confronts you with your share of responsibility in these imbalances."
        },
        trabajo: {
          upright: "You are facing a karmic mirror in your career. What you are receiving is a reflection of the patterns you have repeated professionally. Jade invites you to look honestly.",
          reversed: "Your most repeated pattern is giving much more than you charge and then resenting it. Jade confronts you with your difficulty in setting boundaries and charging what you are worth."
        }
      }
    },
    {
      id: 5,
      name: "Elena",
      subtitle: "Goddess of the Path",
      category: "essences",
      keywords: ["Intuition", "Inner Guidance", "Emotional Clarity", "Spiritual Calling"],

      upright: {
        message: "The path is already traced within you. Even if you don't see the whole map, you have enough clarity for the next step. Trust your intuition. You are not alone.",
        whenAppears: "Elena appears when you are lost or about to give up. Her energy does not impose, it simply appears as a soft, constant light.",
        ritual: "Take a slow, conscious walk in silence. Ask yourself mentally: 'What is the next step I need to take?' Allow your body and intuition to respond."
      },
      reversed: {
        message: "In shadow: the inner compass is silenced by excessive doubt. You do not trust what you already know. Today stop the external noise and listen to what you carry inside.",
        whenAppears: "When Elena appears reversed, you are ignoring your intuition or seeking answers outside yourself.",
        ritual: "Turn off all distractions for 15 minutes and write what your inner self already knows but you don't want to admit."
      },
      themes: {
        amor: {
          upright: "There is an important decision in love that your heart already knows, even if your mind continues to doubt. Elena invites you to trust that inner voice that already knows the way.",
          reversed: "You are choosing from the fear of change or abandonment rather than from what you really desire. This position keeps you in situations that no longer nourish you."
        },
        trabajo: {
          upright: "There is an important professional decision that your inner self already knows, but your fear of change continues to delay. Elena invites you to align your action with what you already perceive.",
          reversed: "You are choosing from the fear of failure or professional abandonment rather than from what you really desire. This position keeps you in jobs that no longer represent you."
        }
      }
    },
    {
      id: 6,
      name: "Mia",
      subtitle: "Goddess of Self-Love",
      category: "essences",
      keywords: ["Self-affirmation", "Dignity", "Emotional Liberation", "Self-worth"],

      upright: {
        message: "Mia arrives when it is time to remember who you are and what you are worth. Love begins with you. Do not be afraid to walk away from what does not value you.",
        whenAppears: "You are reclaiming your personal power. You are closing an emotional cycle or learning to set boundaries.",
        ritual: "Write on a sheet everything you deserve. Read it out loud as a declaration. Then burn it or keep it as an amulet."
      },
      reversed: {
        message: "In shadow: self-protection turns into premature closure. Your dignity can turn into distance. Are you protecting yourself... or pushing away what is actually good for you?",
        whenAppears: "When Mia appears reversed, you may be giving more than you receive or accepting less than you deserve.",
        ritual: "Review a relationship or situation where you are tolerating less than you deserve. Write what boundary you need to set."
      },
      themes: {
        amor: {
          upright: "It is time to release what no longer nourishes you in love. Mia reminds you that giving too much of yourself expecting something in return is only emptying you.",
          reversed: "You are neglecting your own worth by allowing dynamics where you give much more than you receive. This position invites you to review if you are repeating the pattern of giving in order to be loved."
        },
        trabajo: {
          upright: "You are giving too much of yourself at work expecting recognition that does not come. Mia reminds you that your worth is not negotiable.",
          reversed: "You are neglecting your own professional worth by allowing dynamics of exploitation or giving much more than you receive."
        }
      }
    },
    {
      id: 7,
      name: "Tony",
      subtitle: "God of Time",
      category: "essences",
      keywords: ["Urgency", "Action", "Decision", "Imminent Change"],

      upright: {
        message: "Tony appears when time is now. There is no more room for 'later'. What you do not choose today, time chooses for you.",
        whenAppears: "You are at a key moment. Something needs to be decided, initiated or left behind. You have been going in circles for a while.",
        ritual: "Write down what is holding you back and what you know you need to release or decide. Set a timer and take the first step when it ends."
      },
      reversed: {
        message: "In shadow: urgency turns into anxiety about the future. The fear that time is running out paralyzes you. Today breathe — not everything needs to be resolved now.",
        whenAppears: "When Tony appears reversed, you are trapped in procrastination or letting time make decisions for you.",
        ritual: "Choose one thing you have been postponing and commit to doing it in the next 24 hours, even if it is small."
      },
      themes: {
        amor: {
          upright: "You have been postponing important decisions in love. Tony reminds you that every day you let pass without acting is time you will not recover.",
          reversed: "You are trapped in patterns where you continue investing in relationships you already know have no future. This position confronts you with the fear of letting go of the known."
        },
        trabajo: {
          upright: "You have been postponing important decisions in your career. Tony reminds you that the time you lose postponing is not recovered.",
          reversed: "You are trapped in the pattern of 'I'll start tomorrow'. This chronic procrastination usually hides fear of failure or of succeeding."
        }
      }
    },
    {
      id: 8,
      name: "Dante",
      subtitle: "God of Fire and Resurrection",
      category: "essences",
      keywords: ["Deep Desire", "Rebirth", "Passion", "Emotional Courage"],

      upright: {
        message: "Dante appears when desire is so strong that it cannot be ignored. It is the fire that burns what no longer serves to be reborn. Dare to feel without censorship.",
        whenAppears: "Something is awakening in you. It may be a dormant passion, an intense connection or a desire you had repressed out of fear.",
        ritual: "Write a letter to that desire that never dies. It can be a person, a version of yourself, a dream. Burn it in a safe fire."
      },
      reversed: {
        message: "In shadow: intensity turns into addiction to emotional drama. You seek fire even if it destroys. Is what you feel passion... or chaos in disguise?",
        whenAppears: "When Dante appears reversed, the fire may be out of control or completely extinguished.",
        ritual: "Identify whether you are seeking intensity out of addiction or if there is truly an authentic desire. Write the difference."
      },
      themes: {
        amor: {
          upright: "You are facing a difficult moment in love, but you have within you the strength necessary to overcome it. Dante reminds you that your scars are also medals of courage.",
          reversed: "You are allowing love defeats to define you. Dante confronts you with the need to stop identifying with pain."
        },
        trabajo: {
          upright: "You are going through a difficult professional moment. Dante reminds you that you have within you the strength to transform it.",
          reversed: "You are allowing professional rejections or failures to define you. Dante confronts you with the need to stop identifying with what you have not yet achieved."
        }
      }
    },
    {
      id: 9,
      name: "The Clear Voice",
      subtitle: "Inner Return",
      category: "essences",
      keywords: ["Reconnection", "Inner Truth", "Intuition", "Expression"],

      upright: {
        message: "The Clear Voice is the moment when the soul says: no more running away. You are ready to return to yourself. It is time to take the microphone of your own life.",
        whenAppears: "You have been minimizing what you feel or giving away your power in the name of peace. It is time to express yourself.",
        ritual: "Write what you need to say but have not dared to. Read it out loud even if no one hears you."
      },
      reversed: {
        message: "In shadow: external noise drowns the inner voice. You cannot hear yourself. Today turn off everything that is not you.",
        whenAppears: "When The Clear Voice appears reversed, you are denying your emotions or self-censoring out of fear of generating conflict.",
        ritual: "Sit in total silence for 15 minutes. Ask yourself what you are silencing and why."
      },
      themes: {
        amor: {
          upright: "It is time to break the silence in love. There are things you need to say or hear that you can no longer keep holding in.",
          reversed: "You are denying your emotions or self-censoring out of fear of generating conflict. The cost of not saying what you feel is very high."
        },
        trabajo: {
          upright: "It is time to use your voice at work. There are things you need to say and that you can no longer keep silent.",
          reversed: "You are self-censoring professionally out of fear of confrontation or rejection."
        }
      }
    },
    {
      id: 10,
      name: "The Call of the Soul",
      subtitle: "Spiritual Awakening",
      category: "essences",
      keywords: ["Awakening", "Inner Search", "Spiritual Calling", "Purpose"],

      upright: {
        message: "Your heart desires another life. When you have already taken the first step and need confirmation that your soul is guiding you — this card is that sign.",
        whenAppears: "You feel an emptiness or restlessness that you cannot name. Your soul is calling for something deeper.",
        ritual: "Write what your heart really desires, even if it seems impossible or crazy."
      },
      reversed: {
        message: "In shadow: awakening generates an identity crisis. You resist the change that your soul asks for.",
        whenAppears: "When The Call of the Soul appears reversed, you are ignoring the whispers of your soul out of fear of change.",
        ritual: "Recognize what part of your current life no longer fulfills you and write what you are afraid to let go of."
      },
      themes: {
        amor: {
          upright: "You feel an emptiness or restlessness in love that you cannot name. Your soul is calling for a deeper and more authentic connection.",
          reversed: "You are ignoring the whispers of your soul out of fear of change. Denial only prolongs the process."
        },
        trabajo: {
          upright: "You feel a restlessness or emptiness in your current work that you cannot fully explain. Your purpose is asking for something deeper.",
          reversed: "You are ignoring the whispers of your purpose out of fear of change or losing the stability you have."
        }
      }
    },
    {
      id: 11,
      name: "The Return Home",
      subtitle: "Reconnection",
      category: "essences",
      keywords: ["Reencounter with the soul", "Deep calm", "Cycle closure", "Inner home"],

      upright: {
        message: "After the chaos, the awakening, the pain — you decide to return to yourself. It is not a return to the past: it is to the most honest, most yours present.",
        whenAppears: "You are closing an important cycle. Within you a new calm is being born.",
        ritual: "Create a closing ritual: burn something symbolic, write a farewell letter or perform an act that represents 'coming home'."
      },
      reversed: {
        message: "In shadow: you fear calm. Stability seems boring or false to you.",
        whenAppears: "When The Return Home appears reversed, you are longing for a return, but you have not yet closed the previous cycle.",
        ritual: "Recognize what cycle you have not closed and what you are afraid to let go of in order to return to yourself."
      },
      themes: {
        amor: {
          upright: "You are closing an important cycle in love. Even if the world remains in chaos, within you a new calm is being born.",
          reversed: "You are longing for a return, but you have not yet closed the previous cycle. There is nostalgia or desire to return to something that no longer exists."
        },
        trabajo: {
          upright: "You are closing an important professional cycle. Within you a new way of relating to your work is being born.",
          reversed: "You are longing for a professional change, but you have not yet closed the previous cycle."
        }
      }
    },
    {
      id: 12,
      name: "Álvaro",
      subtitle: "Weaver of Shadows",
      category: "dualities",
      keywords: ["Emotional manipulation", "Ambiguity", "Control", "Power games"],

      upright: {
        message: "This card arises when someone is playing with you without saying it. Your intuition already knows the truth. It also appears when you yourself are falling into dynamics of manipulation.",
        whenAppears: "Someone is playing with you without saying it clearly. Álvaro reminds you that your intuition already knows the truth.",
        ritual: "Observe for 3 days the power dynamics in your close relationships. Note what you feel in your body when something does not add up."
      },
      reversed: {
        message: "In deep shadow: passive manipulation and disguised emotional dependency. You use ambiguity as a shield to avoid committing.",
        whenAppears: "When Álvaro appears reversed, you are allowing someone to control your light with invisible threads.",
        ritual: "Choose a relationship where you feel there is manipulation and decide what boundary you are going to set this week."
      },
      themes: {
        amor: {
          upright: "Someone is playing with you without saying it clearly. Álvaro reminds you that your intuition already knows the truth, even if your mind continues to look for excuses.",
          reversed: "You are allowing someone to control your light with invisible threads. Your shadow here is continuing to justify behaviors you know are not right."
        },
        trabajo: {
          upright: "There are power dynamics or manipulation in your work environment that your intuition has already detected. Álvaro reminds you that your perception is accurate.",
          reversed: "You are allowing someone at work to control information or decisions in a way that affects you."
        }
      }
    },
    {
      id: 13,
      name: "Emmanuel",
      subtitle: "Echo of Doubt",
      category: "dualities",
      keywords: ["Indecision", "Emotional insecurity", "Unfinished choices", "Almost"],

      upright: {
        message: "When you are waiting for someone to choose… and they do not. Not choosing is also choosing. And the soul knows it.",
        whenAppears: "You are trapped between what you desire and what you dare to choose. Not choosing is also choosing.",
        ritual: "Write down the three options you have in front of you. Next to each one write: 'If I choose this, what am I avoiding feeling?'"
      },
      reversed: {
        message: "In shadow: paralyzing nostalgia and attachment to the known even if it hurts. Not choosing is also a choice.",
        whenAppears: "When Emmanuel appears reversed, you are reliving scenes and glances over and over again.",
        ritual: "Consciously choose not to choose for 48 hours and observe how you feel. Then make a small decision."
      },
      themes: {
        amor: {
          upright: "You are waiting for someone to choose and that wait is hurting you. Emmanuel reminds you that love is not lukewarm. It is fire or it is nothing.",
          reversed: "You are reliving scenes and glances over and over again. Your shadow in love is called clinging to what does not choose you."
        },
        trabajo: {
          upright: "You are waiting for something or someone to choose for you in your career and that wait is generating frustration and stagnation.",
          reversed: "You are reliving work scenarios from the past over and over again. This rumination keeps you trapped in the past."
        }
      }
    },
    {
      id: 14,
      name: "Valeria",
      subtitle: "The Subtle Poison",
      category: "dualities",
      keywords: ["Manipulation", "Dark seduction", "Hidden danger", "Passive toxicity"],

      upright: {
        message: "Valeria arrives as a whisper. Is what you feel desire or addiction? Are you accepting crumbs disguised as passion?",
        whenAppears: "You are perceiving that behind a smile there are hidden intentions. Valeria reminds you that your intuition is accurate.",
        ritual: "Observe a relationship or dynamic where you feel something does not add up. Write what it makes you feel in your body."
      },
      reversed: {
        message: "In shadow: passive toxicity and self-affirmation at the expense of others. You distort perceptions without direct confrontation.",
        whenAppears: "When Valeria appears reversed, you are adopting manipulation tactics without realizing it.",
        ritual: "Recognize if you are using any form of manipulation (guilt, silence, seduction) to get what you want."
      },
      themes: {
        amor: {
          upright: "You are perceiving that behind a smile there are hidden intentions. Valeria reminds you that your intuition is accurate. Trust what you see beyond the words.",
          reversed: "You are adopting manipulation tactics without realizing it. Valeria confronts you with your own dark reflection."
        },
        trabajo: {
          upright: "You are perceiving that behind certain work dynamics there are hidden intentions. Valeria reminds you that your intuition is accurate.",
          reversed: "You are adopting manipulation tactics at work without realizing it."
        }
      }
    },
    {
      id: 15,
      name: "Karina",
      subtitle: "Silent Intrusion",
      category: "dualities",
      keywords: ["Emotional control", "Jealousy", "Hidden insecurity", "Comparison"],

      upright: {
        message: "True power does not come from external control, but from internal security. This card invites you to release the illusion of control.",
        whenAppears: "You are feeling resentment or envy toward someone else's success or happiness. Karina invites you to look inward instead of comparing.",
        ritual: "When you feel envy or comparison, ask yourself: 'What is it that I really desire for myself?' Write the answer."
      },
      reversed: {
        message: "In shadow: you cross boundaries without open confrontation, from insecurity disguised as power.",
        whenAppears: "When Karina appears reversed, your envy is turning against you.",
        ritual: "The next time you feel envy, stop and bless that person out loud. Observe what happens in your body."
      },
      themes: {
        amor: {
          upright: "You are feeling resentment or envy toward someone else's success or happiness in love. Karina invites you to look inward instead of comparing.",
          reversed: "Your envy is turning against you: you deny yourself joy and compare yourself mercilessly."
        },
        trabajo: {
          upright: "You are feeling resentment or envy toward the success, recognition or promotion of someone in your work environment.",
          reversed: "Your professional envy is turning against you. Karina confronts you with the poison you are drinking."
        }
      }
    },
    {
      id: 16,
      name: "Tatiana",
      subtitle: "Prisoner of Yesterday",
      category: "dualities",
      keywords: ["Stagnation", "Nostalgia", "Fear of change", "Repetitive patterns"],

      upright: {
        message: "Tatiana appears when you are clinging to something only because it is familiar. Are you in repeated cycles out of habit, not out of love?",
        whenAppears: "You are repeating relationship patterns that only leave you stagnant. Tatiana reminds you that fear of change is more painful in the long run than the risk of letting go.",
        ritual: "Write down a pattern that repeats in your life. Next to it write: 'What do I gain by staying here' and 'What do I lose if I leave'."
      },
      reversed: {
        message: "In shadow: you live emotionally anchored to the past and repeat cycles out of fear of change.",
        whenAppears: "When Tatiana appears reversed, you are idealizing a past that no longer exists in order not to have to face the present.",
        ritual: "Choose one thing from the past that you continue to carry (object, memory, story) and decide whether to keep it, transform it or let it go."
      },
      themes: {
        amor: {
          upright: "You are repeating relationship patterns that only leave you stagnant. Tatiana reminds you that fear of change is more painful in the long run than the risk of letting go.",
          reversed: "You are idealizing a past that no longer exists in order not to have to face the present. Your shadow in love is called fear of change."
        },
        trabajo: {
          upright: "You are repeating work patterns that only leave you stagnant. Tatiana reminds you that fear of change is more costly in the long run.",
          reversed: "You are idealizing a professional past in order not to have to face the present."
        }
      }
    },
    {
      id: 17,
      name: "Lucía and Samuel",
      subtitle: "Eternal Whisper",
      category: "dualities",
      keywords: ["Impossible love", "Deep connection", "Burning silence", "Unrequited love"],

      upright: {
        message: "When you feel a love so deep that it transcends the tangible. Sometimes the soul is waiting for another life, another plane, another moment.",
        whenAppears: "There is a love or connection that you feel very deeply but that cannot materialize at this moment.",
        ritual: "Write a letter to that person or to that impossible love. Do not send it. Burn it or keep it as a ritual of closure or honor."
      },
      reversed: {
        message: "In shadow: you idealize the past and close yourself to the present. An unclosed love continues to occupy space that could be yours.",
        whenAppears: "When Lucía and Samuel appear reversed, you are clinging to a love that no longer corresponds to you.",
        ritual: "Recognize if there is a love from the past that continues to occupy emotional space. Decide what closure ritual you need to do."
      },
      themes: {
        amor: {
          upright: "When you feel a love so deep that it transcends the tangible. Sometimes the soul is waiting for another life, another plane, another moment.",
          reversed: "You are idealizing the past and closing yourself to the present. An unclosed love continues to occupy space that could be yours."
        },
        trabajo: {
          upright: "There is a project, a dream or a professional version of yourself that you feel very deeply but that still cannot materialize.",
          reversed: "You are clinging to a professional version from the past that no longer represents you."
        }
      }
    },
    {
      id: 18,
      name: "Alberto",
      subtitle: "The Voice that Confronts Injustice",
      category: "guardians",
      keywords: ["Justice", "Loyalty", "Courage", "Intercession"],

      upright: {
        message: "Alberto appears when someone needs to be defended, even if they do not dare to ask. Be a trench when someone else is falling.",
        whenAppears: "You are feeling the impulse to support or defend someone who is suffering. Alberto reminds you that an act of intercession can change the course.",
        ritual: "Think of someone who is going through an injustice or difficulty. Perform a concrete act of support (even if it is small)."
      },
      reversed: {
        message: "In shadow: moral rigidity or impulsive confrontation. You fight battles that are not yours.",
        whenAppears: "When Alberto appears reversed, you are ignoring the suffering of someone close out of fear, convenience or to avoid getting involved.",
        ritual: "Recognize if there is a situation of injustice that you are avoiding seeing or confronting. Write what you are afraid to do about it."
      },
      themes: {
        amor: {
          upright: "You are feeling the impulse to support or defend someone who is suffering. Alberto reminds you that an act of intercession can change the course.",
          reversed: "You are ignoring the suffering of someone close out of fear, convenience or to avoid getting involved."
        },
        trabajo: {
          upright: "You are feeling the impulse to support, defend or intercede for someone in your work environment who is being treated unjustly.",
          reversed: "You are ignoring situations of injustice or abuse of power at work out of fear, convenience or to avoid getting into trouble."
        }
      }
    },
    {
      id: 19,
      name: "Oracio",
      subtitle: "Protector of Broken Hearts",
      category: "guardians",
      keywords: ["Unconditional loyalty", "Silent love", "Constant presence", "Honor"],

      upright: {
        message: "It is time to honor what has always been there: an unrequited love, a friendship that sustained you, a part of you that you never let die.",
        whenAppears: "There is a past or present love that continues to inhabit you even though the relationship has ended. Oracio invites you to honor that connection without needing to keep it active.",
        ritual: "Write the name of someone who supported you at some point and who is no longer as present. Thank them out loud for what that person gave you."
      },
      reversed: {
        message: "In shadow: emotional invisibility and self-sacrifice. You erase yourself so that others shine.",
        whenAppears: "When Oracio appears reversed, you are denying yourself the right to miss or continue feeling for someone who is no longer there.",
        ritual: "Allow yourself to miss or feel for someone who is no longer in your life. Cry, write or perform a ritual of honor without guilt."
      },
      themes: {
        amor: {
          upright: "There is a past or present love that continues to inhabit you even though the relationship has ended. Oracio invites you to honor that connection without needing to keep it active.",
          reversed: "You are denying yourself the right to miss or continue feeling for someone who is no longer in your life."
        },
        trabajo: {
          upright: "There is a job, a project or a professional stage that continues to inhabit you even though it has already ended. Oracio invites you to honor what it meant.",
          reversed: "You are denying yourself the right to miss or continue feeling for a professional stage that has already ended."
        }
      }
    },
    {
      id: 20,
      name: "Rosario",
      subtitle: "The Druid of the Mirror",
      category: "guardians",
      keywords: ["Emotional reflection", "Intuitive clarity", "Unforced truth", "Healing silence"],

      upright: {
        message: "Rosario does not give you direct answers: she puts you in front of the mirror and accompanies you while you discover them. The friendship that listens before speaking.",
        whenAppears: "You are needing a space of silence and internal observation regarding your emotions. Rosario invites you to stop seeking answers outside.",
        ritual: "Dedicate 20 minutes to being with yourself without distractions. Just observe what arises when there is no external noise."
      },
      reversed: {
        message: "In shadow: excessive self-analysis or emotional harshness. The truth becomes judgment.",
        whenAppears: "When Rosario appears reversed, you are avoiding looking at what you really feel out of fear of what you might discover.",
        ritual: "The next time you want to seek external advice, first ask yourself: 'What is it that I already know but don't want to see?'"
      },
      themes: {
        amor: {
          upright: "You are needing a space of silence and internal observation regarding your love emotions. Rosario invites you to stop seeking answers outside.",
          reversed: "You are avoiding looking at what you really feel out of fear of what you might discover."
        },
        trabajo: {
          upright: "You are needing a space of silence and internal observation regarding your work situation. Rosario invites you to stop seeking answers outside.",
          reversed: "You are avoiding looking at what you really feel about your work out of fear of what you might discover."
        }
      }
    },
    {
      id: 21,
      name: "The Three Allies",
      subtitle: "Renata, Cristina and Sofía",
      category: "guardians",
      keywords: ["Unconditional support", "Sorority", "Shared strength", "Support network"],

      upright: {
        message: "Are you allowing yourself to be accompanied, or trying to carry everything alone? It is time to honor those who sustain you.",
        whenAppears: "You are needing to remember who really sustains you. This card appears when you have been investing energy in relationships that do not give back what you give.",
        ritual: "Write the names of 3 people who truly sustain you. Then send them a sincere message of gratitude."
      },
      reversed: {
        message: "In shadow: emotional dispersion or internal contradiction. The voices that support you contradict each other and confuse you.",
        whenAppears: "When The Three Allies appear reversed, you are emotionally isolating yourself out of pride, fear or past disappointment.",
        ritual: "Recognize if you are rejecting support that is being offered to you. Ask yourself why."
      },
      themes: {
        amor: {
          upright: "You are needing to remember who really sustains you in your love process. The Three Allies remind you that you do not have to carry everything alone.",
          reversed: "You are emotionally isolating yourself out of pride, fear or past disappointment. This position is depriving you of the support you could receive."
        },
        trabajo: {
          upright: "You are needing to remember who really sustains you on your professional path. The Three Allies remind you that you do not have to carry everything alone.",
          reversed: "You are professionally isolating yourself out of pride, fear or past disappointment."
        }
      }
    },
    {
      id: 22,
      name: "Jazmín",
      subtitle: "Hidden Cupid",
      category: "guardians",
      keywords: ["True love", "Subtle union", "Silent intuition", "Signs"],

      upright: {
        message: "Jazmín works in silence and trusts in the timing of the universe. The true cupid does not shoot arrows, but launches signs.",
        whenAppears: "You are feeling an attraction or connection that generates expectation and also fear in you. Jazmín reminds you that love is not forced; it is recognized when it is ready.",
        ritual: "For 7 days, observe the subtle signs that appear in your life (dreams, coincidences, sensations). Write them down without judging."
      },
      reversed: {
        message: "In shadow: you connect everyone except yourself. You postpone your own emotional desire to be a bridge for others.",
        whenAppears: "When Jazmín appears reversed, you are forcing a connection or creating premature expectations because you are afraid that the good will escape.",
        ritual: "Recognize if you are projecting onto someone everything you have been waiting for. Ask yourself what you need to release from that projection."
      },
      themes: {
        amor: {
          upright: "You are feeling an attraction or connection that generates expectation and also fear in you. Jazmín reminds you that love is not forced; it is recognized when it is ready.",
          reversed: "You are forcing a connection or creating premature expectations because you are afraid that the good will escape."
        },
        trabajo: {
          upright: "You are feeling an attraction or professional opportunity that generates expectation and also fear in you. Jazmín reminds you that the best opportunities sometimes appear when you are not forcing them.",
          reversed: "You are forcing opportunities or creating premature expectations because you are afraid that the good will escape."
        }
      }
    },
    {
      id: 23,
      name: "Daniela",
      subtitle: "Soul Cheerleader",
      category: "guardians",
      keywords: ["Authentic motivation", "Borrowed faith", "Contagious energy", "Self-recognition"],

      upright: {
        message: "This card is the cry of the soul that says: you are doing better than you think. Do not hide when it is time to shine.",
        whenAppears: "You are doubting your own worth. Daniela reminds you that your deservingness does not depend on someone confirming it.",
        ritual: "Write 5 things you have achieved or overcome that make you proud. Read them out loud in front of the mirror."
      },
      reversed: {
        message: "In shadow: you deny your own pain to maintain everyone's energy. You consume yourself helping and no one notices.",
        whenAppears: "When Daniela appears reversed, you are waiting for someone to give you permission to feel enough.",
        ritual: "The next time you feel you need external validation, ask yourself: 'What is it that I already know I am capable of doing?'"
      },
      themes: {
        amor: {
          upright: "You are doubting your own worth in love. Daniela reminds you that your deservingness does not depend on someone confirming it.",
          reversed: "You are waiting for someone to give you permission to feel enough. This external dependence on validation keeps you in a position of emotional inferiority."
        },
        trabajo: {
          upright: "You are doubting your own professional worth. Daniela reminds you that your deservingness does not depend on someone confirming it externally.",
          reversed: "You are waiting for someone to give you permission to feel enough professionally."
        }
      }
    },
    {
      id: 24,
      name: "Heimdall",
      subtitle: "Guardian of the Portals",
      category: "keys",
      keywords: ["Powerful curiosity", "Magical beginnings", "Hidden keys", "Exploration"],

      upright: {
        message: "Follow your curiosity, explore what seemed insignificant. Something is about to open in your life.",
        whenAppears: "There is a small door, a coincidence, a conversation, a sign, that is opening in your life. Heimdall invites you not to ignore it.",
        ritual: "For 3 days, follow any small curiosity that appears (even if it seems silly). Note what happens."
      },
      reversed: {
        message: "In shadow: hypercontrol and defensive rigidity. You protect the thresholds so well that nothing good can enter.",
        whenAppears: "When Heimdall appears reversed, you are ignoring signals and opportunities out of fear of chaos or the unknown.",
        ritual: "Choose a small door you have been avoiding opening (a conversation, an opportunity, an idea) and open it even if it is scary."
      },
      themes: {
        amor: {
          upright: "There is a small door, a coincidence, a conversation, a sign, that is opening in your love life. Heimdall invites you not to ignore it because it seems unimportant.",
          reversed: "You are ignoring signals and opportunities out of fear of chaos or the unknown. This position keeps you stagnant in what is known even if it no longer nourishes you."
        },
        trabajo: {
          upright: "There is a small door, a casual conversation, a coincidence, a fleeting idea, that is opening in your professional path.",
          reversed: "You are ignoring professional signals and opportunities out of fear of chaos or the unknown."
        }
      }
    },
    {
      id: 25,
      name: "Erebus",
      subtitle: "The Enlightened One",
      category: "keys",
      keywords: ["Inner wisdom", "Mental clarity", "Sacred silence", "Revelation"],

      upright: {
        message: "Erebus appears when you are ready to see beyond the surface. His presence is enough to make you find answers where before there was only noise.",
        whenAppears: "You are needing to see with more clarity a situation you have been avoiding looking at directly. Erebus invites you to enter the internal penumbra where the truth is.",
        ritual: "Dedicate 20 minutes to being in complete darkness or with your eyes closed. Ask yourself what it is that you already know but do not want to see."
      },
      reversed: {
        message: "In shadow: emotional isolation and over-intellectualization. You lock yourself so much in your world that you lose contact with others.",
        whenAppears: "When Erebus appears reversed, you are blocking your inner voice with excessive analysis and mental control.",
        ritual: "Turn off all screens and distractions for 1 hour. Allow what is beneath the noise to emerge."
      },
      themes: {
        amor: {
          upright: "You are needing to see with more clarity a love situation you have been avoiding looking at directly. Erebus invites you to enter the internal penumbra where the truth is.",
          reversed: "You are avoiding looking at what you really feel out of fear of what you might discover."
        },
        trabajo: {
          upright: "You are needing to see with more clarity a professional situation you have been avoiding looking at directly.",
          reversed: "You are blocking your inner voice with excessive analysis, mental control and information saturation."
        }
      }
    },
    {
      id: 26,
      name: "Aetherius",
      subtitle: "The Traveler of the Underworld",
      category: "keys",
      keywords: ["Inner journey", "Divine mystery", "Silent transformation", "Depth"],

      upright: {
        message: "You are crossing internal portals that you did not want to see before. You do not need to understand everything: just dare to follow your own journey.",
        whenAppears: "You are feeling a call toward something deeper. Aetherius accompanies you to trust in that search even if you do not know exactly what you are looking for.",
        ritual: "Dedicate time to being in nature or in a place that makes you feel small in front of something greater. Ask yourself what is calling your attention."
      },
      reversed: {
        message: "In shadow: you get lost so deep in the unknown that you lose contact with everyday reality.",
        whenAppears: "When Aetherius appears reversed, you are getting lost in internal labyrinths and projections without guidance.",
        ritual: "Anchor something concrete today: eat, walk, breathe the earth. Return to the body after any deep internal work."
      },
      themes: {
        amor: {
          upright: "You are feeling a call toward something deeper in love. Aetherius accompanies you to trust in that search even if you do not know exactly what you are looking for.",
          reversed: "You are getting lost in internal labyrinths and projections without guidance. Your shadow here is spiritualized evasion."
        },
        trabajo: {
          upright: "You are feeling a call toward something deeper in your professional purpose. Aetherius accompanies you to trust in that search even if you do not know exactly what it is.",
          reversed: "You are getting lost in mental labyrinths, projections and external searches without internal guidance."
        }
      }
    },
    {
      id: 27,
      name: "The Threshold of the Underworld",
      subtitle: "Mystical Portal",
      category: "portals",
      keywords: ["Conscious descent", "Rebirth", "Fertile darkness", "Transformation"],

      upright: {
        message: "You do not enter to disappear, but to remember who you were before forgetting. To return to yourself… sometimes you have to go down.",
        whenAppears: "You are in a process where something within you needs to die so that something new can be born. The Threshold accompanies you to release identities that no longer represent you.",
        ritual: "Write what part of you is dying or needs to die. Perform a farewell ritual (burn, bury, release into water)."
      },
      reversed: {
        message: "In shadow: you refuse to go down. You avoid transformational pain and stay on the surface.",
        whenAppears: "When The Threshold of the Underworld appears reversed, you are resisting transformation because you are afraid of who you will be after letting go.",
        ritual: "Recognize what you are most afraid of letting go of. Write what would happen if you really let it go."
      },
      themes: {
        amor: {
          upright: "You are in a process where something within you needs to die so that something new can be born. This card accompanies you to release love identities that no longer represent you.",
          reversed: "You are resisting transformation because you are afraid of who you will be after letting go."
        },
        trabajo: {
          upright: "You are in a process where something within you needs to die professionally so that something new can be born.",
          reversed: "You are resisting professional transformation because you are afraid of who you will be after letting go."
        }
      }
    },
    {
      id: 28,
      name: "The Council of Magic",
      subtitle: "Mystical Portal",
      category: "portals",
      keywords: ["Spiritual support", "Invisible guides", "Synchronicities", "Belonging"],

      upright: {
        message: "There is already an energetic council gathered: your guides, your future selves, your ancestors. You are already being sustained by greater energies.",
        whenAppears: "You are needing to remember that you are not alone in your process. There are people and also internal forces that sustain you even if you do not always see them.",
        ritual: "Create a small altar or symbolic space where you invite your guides, ancestors or future versions of yourself. Speak with them."
      },
      reversed: {
        message: "In shadow: you seek external support when the answer is already within. You depend too much on the validation of others.",
        whenAppears: "When The Council of Magic appears reversed, you are neglecting your deepest connections out of haste, pride or past disappointment.",
        ritual: "Recognize if you are seeking answers outside when in reality you already know what you need to do. Trust your own inner council."
      },
      themes: {
        amor: {
          upright: "You are needing to remember that you are not alone in your love process. There are people and also internal forces that sustain you even if you do not always see them.",
          reversed: "You are neglecting your deepest connections out of haste, pride or past disappointment."
        },
        trabajo: {
          upright: "You are needing to remember that you are not alone on your professional path. There are people and also internal forces that sustain you even if you do not always see them.",
          reversed: "You are neglecting your deepest professional connections out of haste, pride or past disappointment."
        }
      }
    },
    {
      id: 29,
      name: "The Portal of Chaos",
      subtitle: "Mystical Portal",
      category: "portals",
      keywords: ["Radical transformation", "Awakening", "Renewal", "Liberation"],

      upright: {
        message: "The Portal of Chaos is not your enemy. The universe shakes the table so that you stop playing at fitting in. It liberates you… even if it hurts.",
        whenAppears: "You are feeling that stagnation is suffocating you and you need a radical impulse. The Portal of Chaos accompanies you to release accumulated burdens.",
        ritual: "Make a list of everything you are carrying that no longer serves you. Burn the list or throw it into water as an act of liberation."
      },
      reversed: {
        message: "In shadow: chaos paralyzes you instead of liberating you. You fear what breaks even if it no longer served.",
        whenAppears: "When The Portal of Chaos appears reversed, you are paralyzed by the fear of letting go.",
        ritual: "Choose one thing you know you need to let go of but that scares you. Perform a symbolic act of liberation even if it is small."
      },
      themes: {
        amor: {
          upright: "You are feeling that stagnation is suffocating you and you need a radical impulse. The Portal of Chaos accompanies you to release accumulated burdens.",
          reversed: "You are paralyzed by the fear of letting go. This paralysis is keeping you in an internal chaos that is more familiar than change."
        },
        trabajo: {
          upright: "You are feeling that stagnation in your professional life is no longer sustainable. This card invites you to generate a radical change even if it involves letting go of a lot.",
          reversed: "You are paralyzed by the fear of letting go of work structures that no longer serve you."
        }
      }
    },
    {
      id: 30,
      name: "The Underworld of Potions",
      subtitle: "Mystical Portal",
      category: "portals",
      keywords: ["Emotional alchemy", "Deep healing", "Process", "Patience"],

      upright: {
        message: "Your soul is in an alchemical process. Do not interrupt the mixture: trust what is cooking within you.",
        whenAppears: "You are impatient to see changes and you forget that deep change takes time. This card reminds you that love and patience are the best ingredients.",
        ritual: "Choose a process that is underway in your life and commit to not forcing it for 7 days. Observe what happens when you give it time."
      },
      reversed: {
        message: "In shadow: you interrupt the process before it finishes. Impatience prevents you from seeing the fruits.",
        whenAppears: "When The Underworld of Potions appears reversed, you are seeking quick solutions or patching without going deeper.",
        ritual: "Recognize what process you are interrupting out of impatience. Write what would happen if you gave it more time."
      },
      themes: {
        amor: {
          upright: "You are impatient to see changes and you forget that deep change takes time. This card reminds you that love and patience are the best ingredients for your process.",
          reversed: "You are seeking quick solutions or patching without going deeper. This position invites you to return to the pot, lower the fire and allow time to work its magic."
        },
        trabajo: {
          upright: "You are wanting quick results in your professional development and this is preventing you from truly maturing.",
          reversed: "You are skipping important steps in your professional development because you want to reach a result quickly."
        }
      }
    },
    {
      id: 31,
      name: "The Portal of Infinite Knowledge",
      subtitle: "Mystical Portal",
      category: "portals",
      keywords: ["Mental awakening", "Spiritual clarity", "Channeling", "Revelation"],

      upright: {
        message: "Wisdom is not found… it is remembered. You are ready to receive answers that you could not sustain before.",
        whenAppears: "You are receiving important insights and revelations. This Portal invites you to pay attention to the signs, dreams and understandings that are arriving.",
        ritual: "Dedicate 10 minutes before sleeping to ask your unconscious: 'What is it that I need to understand now?' Write down what you dream or what arises upon waking."
      },
      reversed: {
        message: "In shadow: you receive so much information that you do not know which one to listen to. The excess of knowledge becomes paralysis.",
        whenAppears: "When The Portal of Infinite Knowledge appears reversed, you are blocking revelation with excessive analysis and mental control.",
        ritual: "Choose a single truth or insight you have recently received and act from there for 7 days. Stop collecting more information."
      },
      themes: {
        amor: {
          upright: "You are receiving important insights and revelations about your pattern in love. This Portal invites you to pay attention to the signs, dreams and understandings that are arriving.",
          reversed: "You are blocking revelation with excessive analysis and mental control. This position keeps you on the surface of what you could understand."
        },
        trabajo: {
          upright: "You are receiving important insights and revelations about your professional pattern and your purpose. This Portal invites you to pay attention to the signs, dreams and understandings that are arriving.",
          reversed: "You are blocking professional revelation with excessive analysis, mental control and information saturation."
        }
      }
    }
  ]
};

// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getOracleCard(id, lang = 'en') {
  const cards = ORACLE_CARDS[lang] || ORACLE_CARDS['en'];
  return cards.find(c => c.id === id) || null;
}

function getAllOracleCards(lang = 'en') {
  return ORACLE_CARDS[lang] || ORACLE_CARDS['en'];
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

console.log('%c[Bruxa Tarot] Oracle Cards EN loaded successfully (31 cards)', 'color:#7c3aed');

