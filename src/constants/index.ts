const projets: {
    text: string;
    id: string;
    list: {
      id: string;
      titre: string;
      organizer: string;
      place: string;
      date: string;
      img: string;
      description: string;
    }[];
  }[] = [
    {
      text: "Manifestations Zonales",
      id: 'manifestations',
      list: [
        {id:"assisedeprintemps", titre:"Les Assises de Printemps", organizer:"JCI Bardo & JCI Tunisie-Zone A", place:"Yasmine Hammamet", date:"18-19 Mars, 2023", img:"./assets/img/programmes/manifestations/assisesdeprintemps.jpg", description:""},
        {id:"rzpa", titre:"2ème Réunion Zonale des Présidents de la Zone A", organizer:"JCI Bardo & JCI Tunisie-Zone A", place:"sur Zoom", date:"04 Juillet, 2021", img:"./assets/img/programmes/manifestations/reunionzonalepresidents2.jpg", description:""}
      ]
    },
    {
      text: "Projets Locaux",
      id: 'projets_locaux',
      list: [
        {id:"ecovertemarchevert", titre:"Eco-verte 2.0 : Marché-vert Foire Bio", organizer:"JCI Bardo & Municipalité du Bardo", place:"Le Bardo", date:"24 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/marche-vert.jpg", description:""},
        {id:"recrutementksarsaid2", titre:"Recrutement citoyens ksar-Said", organizer:"JCI Bardo", place:"Le Bardo", date:"03 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/recrute2.jpg", description:""},
        {id:"journeeenseignants", titre:"Journée des enseignants", organizer:"JCI Bardo & ANETI", place:"Le Bardo", date:"21 Août, 2023", img:"./assets/img/programmes/projetslocaux/journée-ens.jpg", description:""},
        {id:"recrutementksarsaid1", titre:"Recrutement citoyens ksar-Said", organizer:"JCI Bardo", place:"Maison des jeunes Bortal", date:"17 Juin, 2023", img:"./assets/img/programmes/projetslocaux/recrute.jpg", description:""},
        {id:"emccloture", titre:"Entrepreneurship Masterclass 3.0 : Cérémonie de clôture", organizer:"JCI Bardo & INJAZ Tunisie", place:"Maison des jeunes Bortal", date:"04 Juin, 2023", img:"./assets/img/programmes/projetslocaux/cloture emc.jpg", description:""},
        {id:"smallbusinessexpo", titre:"معرض للمشاريع الصغرى", organizer:"JCI Bardo & ANETI", place:"Le Bardo", date:"02 Juin, 2023", img:"./assets/img/programmes/projetslocaux/expo.jpg", description:""},
        {id:"journeeinformation", titre:"Participation à la journée d'information", organizer:"ANETI", place:"Faculté des sciences de tunis", date:"26 Mai, 2023", img:"./assets/img/programmes/projetslocaux/journée-information.jpg", description:""},
        {id:"santesexuelle", titre:"GrowUP : Journée de sensibilisation sur la santé sexuelle et reproductive", organizer:"JCI Bardo", place:"Le Bardo", date:"19 Mai, 2023", img:"./assets/img/programmes/projetslocaux/santesexuelle.jpg", description:""}
      ]
    },
    { 
      text: "Projets Internationaux",
      id: 'projets_internationaux',
      list: [
        {id:"letstalkglobally1", titre:"Let's Talk Globally", organizer:"JCI Aleppo", place:"sur Google Meet", date:"21-28 Août | 04-11 Septembre, 2023", img:"./assets/img/programmes/projetsinternationaux/talkglobally.jpg", description:"هل أنتم جاهزون لرحلة حول العالم وانتم خلف شاشاتكم؟!\n من منّا لم يحلم يوماً بالسفر حول العالم للتعرّف على جميع الأماكن الجميلة فيه؟ من منّا لم يرغب في تجربة التعرّف على ثقافات وعادات وتقاليد الناس؟\n من هنا أتت فكرة Let\’s Talk Globally لنتمكّن من تجربة الثقافات الأخرى دون حتى الحاجة إلى مغادرة بيوتنا!\n حيث ترتكز الفكرة الأساسية في استخدام الانترنت كوسيلة لاختصار المسافات بين الناس عن طريق إقامة عدة جلسات بين كل من:\n الغرفة الفتية الدولية حلب (سورية) -الغرفة الفتية الدولية باردو (تونس) - الغرفة الفتية الدولية السويداء (سورية) - الغرفة الفتية الدولية طرطوس (سورية) - الغرفة الفتية الدولية فيلا ماريا (الأرجنتين) -الغرفة الفتية الدولية مانشستر (بريطانيا) - الغرفة الفتية الدولية مراكش(المغرب).\n تقدم كل غرفة فيها عرضاً تقديمياً في جلسة يتحدث فيها المشاركون فيها الأصدقاء عن الموسيقى في بلدهم، العادات والتقاليد في المناسبات الرسميّة، الأطعمة الشهيرة لديهم، أهم الأماكن الأثرية والسياحية والدينية، بالإضافة الى التعرف على بعضهم البعض وخلق روابط الصلة المتينة والتعرف على صورة البلد وأهله بشكل أفضل كأنك قمت بزيارته وأنت جالس في المنزل مع تصحيح بعض الصور النمطيّة عن البلدان المشاركة.\nAre you ready for a trip worldwide, and you\'re behind your screens?\nWho never dreamed of traveling the world to learn about all the beautiful places in it? Who wanted to experience something other than learning about people\'s cultures, customs, and traditions?\nTherefore the idea of Let\'s Talk Globally is to experience other cultures without leaving our homes!\nThe basic idea is to use the Internet as a means of shortening people\'s distances by holding several sessions between:\nJCI Aleppo   الغرفة الفتية الدولية حلب (Syria) - JCI Bardo(Tunisia) - JCI Lusaka (Zambia) - JCI Marrakech (Morocco) - JCI Manchester JCI(UK) - JCI Sweida   الغرفة الفتية الدولية السويداء (Syria) - JCI Tartus (Syria) - JCI Villa María (Argentina).\nEach Organization presents a presentation at a session where friends talk about music in their country, habits, and traditions at official events, their famous foods, and the most important archaeological, tourist, and religious places, In addition to getting to know each other and creating strong links and better familiarize yourself with the image of the country and its people as if you had visited it while sitting at home while correcting some stereotypes about the participating countries.\nJCI BARDO JCI Lusaka JCI Tartus JCI Villa María JCI Manchester JCI Sweida   الغرفة الفتية الدولية السويداء JCI Marrakech"},
        {id:"conferenceaem", titre:"Conférence Afrique Européenne et Moyen Orient", organizer:"JCI Bardo", place:"sur Zoom", date:"17 Juin, 2023", img:"./assets/img/programmes/projetsinternationaux/conferenceafrique.jpg", description:"Dans le cadre de son projet \"Éco-verte 2.0\"\n𝗟a Jeune 𝗖hambre 𝗘conomique du 𝗕ardo à organisé, 𝐥𝐞 18 𝐀𝐨𝐮̂𝐭 2023 𝐚̀ 14H au 𝐂𝐥𝐮𝐛'𝐲 𝐥𝐞 𝐁𝐚𝐫𝐝𝐨 , en partenariat avec le mouvement Youth For Climate Tunisia - Community\n\" 𝐑𝐄𝐒𝐈𝐋𝐈𝐄𝐍𝐓 𝐄𝐀𝐑𝐓𝐇 𝐅𝐎𝐑𝐔𝐌 \"\nLa journée s'est ouverte avec la projection du film \" 𝐓𝐡𝐞 11𝐭𝐡 𝐇𝐨𝐮𝐫 𝐫𝐢𝐠𝐡𝐭 \" qui a été suivie par une table ronde où les enjeux environnementaux abordés par le film ont été  discutés.\nNous avons fini notre forum par une séance de cours de calligraphie arabe.\nOn tient à remercier sincèrement club\'y bardo pour l\'aimable accueil ainsi que nos partenaires,\nNous tenons également à remercier nos chers membres pour leurs participation active à cette journée."},
        {id:"conferencerd", titre:"Conférence Recover from Disaster", organizer:"International", place:"Sur Google Meet", date:"02 Avril, 2023", img:"./assets/img/programmes/projetsinternationaux/recoveringfromdisaster.jpg", description:""},
        {id:"ecoverteecobleu", titre:"Eco-verte 2.0 : Eco Bleue", organizer:"JCI Bardo", place:"sur Google Meet", date:"13-15 Mars, 2023", img:"./assets/img/programmes/projetsinternationaux/ecoverte13-15mars.jpg", description:""},
        {id:"vda", titre:"La valorisation des déchets aquatiques", organizer:"JCI Bardo & JCI Ciwara", place:"sur Google Meet", date:"17 Août, 2022", img:"./assets/img/programmes/projetsinternationaux/la valorisation des déchets aquatiques.jpg", description:""},
        {id:"ecovertevdper", titre:"Eco-verte : Valorisation des déchets & la production d'énergies renouvelables", organizer:"JCI Bardo", place:"sur Google Meet", date:"06 Mai, 2022", img:"./assets/img/programmes/projetsinternationaux/ecoverte6mai.jpg", description:""},
        {id:"afrotun", titre:"AFROTUN", organizer:"JCI Bardo", place:"sur Google Meet", date:"21-30-31 Mars, 2021", img:"./assets/img/programmes/projetsinternationaux/afrotun.jpg", description:""},
        {id:"rei", titre:"14ème rassemblement des Étudiants Internationaux", organizer:"JCI Bardo", place:"Le Bardo", date:"20 Mars, 2021", img:"./assets/img/programmes/projetsinternationaux/etudiantinternationaux.jpg", description:""}
      ]
    },
    {
      text: "Formations & Forums",
      id: 'formations_forums',
      list: [
        {id:"ecoverteearthforum", titre:"Eco-verte 2.0 : Resilient earth Forum", organizer:"JCI Bardo & Club'y & Youth", place:"Le Bardo", date:"18 Août, 2023", img:"./assets/img/programmes/formationsetforums/earth-forum.jpg", description:""},
        {id:"microsoft2", titre:"Formation Microsoft by JCI", organizer:"JCI Bardo", place:"sur Zoom", date:"18 Août, 2023", img:"./assets/img/programmes/formationsetforums/micro-jci.jpg", description:""},
        {id:"microsoft1", titre:"Formation Microsoft by JCI", organizer:"JCI Bardo", place:"sur Zoom", date:"15, 17, 18 Août, 2023", img:"./assets/img/programmes/formationsetforums/ev-micro.jpg", description:"\"La formation est l\'essence de tout succès\"\nRetour en images sur le forum intitulé \" Microsoft by JCI\" qui a eu lieu le 15,17,18 Août 2023 sur Google Meet, en collaboration avec INJAZ Tunisia  et organisé par Bardo, JCI OLM Oued Ellil, JCI Tebourba, JCI jedaida, JCI France Ville , JCI El Battan , JCI Les Jardins, JCI La Marsa, JCI IBN Khaldoun , JCI Leaders Beb Souika , JCI  OLM  Manouba , JCI nouvelle medina , JCI Mornaguia.\nCe forum a visé le programme de Microsoft  qui est spécialement dédié aux membres de la JCI qui veulent acquérir de nouvelles compétences professionnelles.\nElle couvre tous les outils indispensables pour travailler efficacement : Word, Excel, PowerPoint, Outlook..\nanimé par nos chers formateurs سيرين الورتتاني  et Wissem Sammoud\nOn tient vivement à les remercier pour leur professionnalisme.\nOn a été honoré par l\'intervention de notre vpf de la zone A dans la journée de l\'ouverture,\nNous tenons également à remercier nos chers participants pour leur engagement et leur confiance."},
        {id:"projectmanagement", titre:"Session recommandée: formation project-management", organizer:"JCI Bardo", place:"Le Bardo", date:"13 Août, 2023", img:"./assets/img/programmes/formationsetforums/session-rec.jpg", description:"Retour en images sur la session recommandé intitulée \" 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 \" qui a eu lieu 𝑫𝒊𝒎𝒂𝒏𝒄𝒉𝒆 13 𝑨𝒐𝒖𝒕 2023 à la 𝑴𝒖𝒏𝒊𝒄𝒊𝒑𝒂𝒍𝒊𝒕𝒆́ 𝒅𝒖 𝑩𝒂𝒓𝒅𝒐 , animée par nos chers formateurs 𝑵𝒂𝒔𝒔𝒆𝒓𝒆𝒅𝒅𝒊𝒏 𝑴𝒆𝒄𝒉𝒓𝒊 et 𝑪𝒚𝒓𝒊𝒏𝒆 𝑶𝒖𝒆𝒓𝒕𝒂𝒕𝒆𝒏𝒊 qu'on tient par cette occasion à les remercier pour leurs professionnalisme et leurs efforts déployés.\nSans oublier de remercier nos chers membres pour leurs engagements pour faire réussir le déroulement de la formation."},
        {id:"cafetalkpsychologie", titre:"Cafe Talk : Psychologie", organizer:"JCI Bardo", place:"Le Bardo", date:"05 Août, 2023", img:"./assets/img/programmes/formationsetforums/ev-talk.jpg", description:"Retour en images sur le Café Talk sous le thème \" Café Talk... هيا نحكيو Psychologie   \" qui a eu lieu 𝐒𝐚𝐦𝐞𝐝𝐢 5 𝐀𝐨𝐮̂𝐭  2023 dans 𝐥𝐞 𝐜𝐚𝐟𝐞́ 𝐁𝐨𝐧𝐳𝐚𝐢 𝐁𝐚𝐫𝐝𝐨. \nLe café talk a été animée  par l'intervention de nos chers psychologues 𝐌𝐚𝐫𝐚𝐦 𝐃𝐨𝐠𝐡𝐫𝐢  et 𝐑𝐚𝐡𝐦𝐚 𝐂𝐡𝐚𝐢𝐛𝐢 , qui ont partagé leurs connaissances et leurs expériences pour permettre aux membres de connaître les maladies mentales, résoudre les difficultés d’ordre psychique . \npar cette occasion, On tient à les remercier pour leurs professionalismes et leurs soutiens psychologiques . \nSans oublier de remercier nos chers membres pour leurs engagements."},
        {id:"canadianresume", titre:"Formation the A B C’s of a Canadian Resume", organizer:"JCI Bardo", place:"sur Google Meet", date:"02 Août, 2023", img:"./assets/img/programmes/formationsetforums/canadian-resume.jpg",description:"Retour en images sur la session officielle intitulée \" 𝐓𝐡𝐞 𝐀𝐁𝐂\'𝐬 𝐨𝐟 𝐚 𝐂𝐚𝐧𝐚𝐝𝐢𝐚𝐧 𝐑𝐞𝐬𝐮𝐦𝐞  \" qui a eu lieu 𝐌𝐞𝐫𝐜𝐫𝐞𝐝𝐢 2 𝐀𝐨𝐮̂𝐭  2023 sur 𝐆𝐨𝐨𝐠𝐥𝐞 𝐌𝐞𝐞𝐭 . \nCette Formation a été animée animée par notre chére Formatrice 𝐘𝐨𝐬𝐫𝐚 𝐁𝐞𝐧 𝐀𝐛𝐝𝐚𝐥𝐥𝐚𝐡 ,\nqui a partagé ses connaissances et son expérience pour permettre aux membres de connaître les types de Resume le plus répandues, les parties d\'un résumé, les caractéristiques d\'un Cv canadien et les erreurs à éviter. \npar cette occasion, on tient à  remercier notre chère formatrice pour leur professionnalisme et leur efforts tous au long de la formation. \nSans oublier de remercier nos chers membres pour leurs engagements pour faire réussir le déroulement de la formation."},
        {id:"jcipresenter", titre:"Formation Session Officielle JCI Presenter", organizer:"JCI Bardo", place:"Le Bardo", date:"21 Mai, 2023", img:"./assets/img/programmes/formationsetforums/jci-presenter.jpg", description:""},
        {id:"communicationdansolm", titre:"Formation La Communication dans l'OLM", organizer:"JCI Bardo", place:"Le Bardo", date:"30 Avril, 2023", img:"./assets/img/programmes/formationsetforums/la-communication-dans-olm.jpg", description:""},
        {id:"ellama", titre:"اللمة", organizer:"JCIs", place:"Médina de Tunis", date:"17 Avril, 2023", img:"./assets/img/programmes/formationsetforums/lama.jpg", description:""},
        {id:"ramadanprogress", titre:"Ramadan Progress", organizer:"JCIs", place:"sur Discord", date:"Mois de Ramadan", img:"./assets/img/programmes/formationsetforums/ramadan-progress.jpg", description:""},
        {id:"academiedesmembres", titre:"Académie des membres", organizer:"JCIs", place:"Municipalité de Ben Arous", date:"12 Mars, 2023", img:"./assets/img/programmes/formationsetforums/academie-des-membres.jpg", description:""},
        {id:"jayceespath", titre:"Formation Jaycee's Path", organizer:"JCI Bardo", place:"Le Bardo", date:"26 Février, 2023", img:"./assets/img/programmes/formationsetforums/jaycees-path.jpg", description:""}
      ]
    }
]

export { projets };