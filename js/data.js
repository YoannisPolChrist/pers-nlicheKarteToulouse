const locations = [
    // --- WILD / INSIDER (Highlight Category) ---
    {
        id: 16,
        title: "Grotte de Pène Blanque",
        type: "hoehle",
        lat: 42.977, lng: 0.885,
        image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Einstieg ins legendäre Trombe-Netzwerk.",
        description: "Foren-Mythos. Man wandert zum gewaltigen Portal. ACHTUNG: Nur Eingangsbereich sicher, dahinter tödliches Labyrinth (Längstes Netz Frankreichs).",
        details: "Nur für erfahrene Wanderer/Speläologen.",
        routeLink: "https://www.visugpx.com/1CY3SRX8TT"
    },
    {
        id: 17,
        title: "Grotte des Églises",
        type: "hoehle",
        lat: 42.826, lng: 1.620,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Grottes_des_Eglises_004mod.jpg?width=600",
        shortDesc: "Riesiger Tunnel, frei zugänglich.",
        description: "Keine Kasse, kein Licht. Ein gewaltiger Durchgang im Berg bei Ussat. Historisch von Katharern genutzt. Extrem atmosphärisch.",
        details: "Taschenlampe reicht für den Hauptgang.",
        routeLink: "https://www.ariege-pyrenees.com/ussat/grotte-des-eglises/tabid/2578/offreid/75e2f708-3642-4357-9d7a-777610078049"
    },
    {
        id: 18,
        title: "Trou de la Taupe",
        type: "hoehle",
        lat: 43.332, lng: 2.545,
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Der 'schmutzige' Klassiker.",
        description: "Montagne Noire (bei Caunes). Enger Einstieg ('Briefkasten'), dann weite Säle. Knie- und Ellbogenschützer empfohlen! Ein echter Abenteuerspielplatz.",
        details: "Einstiegshöhle vieler lokaler Clubs.",
        routeLink: "https://www.visorando.com/randonnee-notre-dame-du-cros-et-le-sentier-des-m/"
    },
    {
        id: 26,
        title: "Gouffre de la Henne Morte",
        type: "hoehle",
        lat: 42.966, lng: 0.850,
        image: "https://images.unsplash.com/photo-1594380643763-e380e227df5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Speläo-Legende im Arbas-Massiv.",
        description: "Ort der Pionierleistungen von Norbert Casteret. Der 'tödliche Schacht'. Nur der Wanderweg zum Einstieg ist sicher. Extreme vertikale Gefahr.",
        details: "Historischer Ort der Höhlenforschung.",
        routeLink: "https://www.visugpx.com/bQo9vXhK8G"
    },
    {
        id: 27,
        title: "Gouffre de l'Œil Doux",
        type: "hoehle",
        lat: 43.195, lng: 3.187,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gouffre_de_l'%C5%93il_doux_11.jpg?width=600",
        shortDesc: "Smaragdgrüne Cenote am Meer.",
        description: "Ein eingestürzter Höhlendeckel füllte sich mit Meerwasser. Sieht aus wie Mexiko. Baden streng verboten (Todesgefahr), aber der Blick ist magisch.",
        details: "Geologisches Unikat im Massif de la Clape.",
        routeLink: "https://www.visorando.com/randonnee-le-gouffre-de-l-oeil-doux-et-la-plage/"
    },
    {
        id: 28,
        title: "Fontaine de Fontestorbes",
        type: "panorama",
        lat: 42.905, lng: 1.930,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fougax-et-Barrineuf_-_Fontaine_Intermittente_de_Fontestorbes_01.jpg?width=600",
        shortDesc: "Die 'atmende' Quelle.",
        description: "Weltweit seltene intermittierende Quelle. Im Sommer stoppt der Fluss für ca. 30min komplett und startet dann wieder. Ein riesiges unterirdisches Siphon-System.",
        details: "Direkt an der Straße, aber geologisch Weltklasse.",
        routeLink: "https://www.ariege-pyrenees.com/fougax-et-barrineuf/fontaine-intermittente-de-fontestorbes/tabid/2578/offreid/b429074d-9a94-4340-a083-02f5c765799a"
    },
    {
        id: 29,
        title: "Roquefort-les-Cascades",
        type: "panorama",
        lat: 42.993, lng: 1.755,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roquefort-les-Cascades_-_Cascades_01.jpg?width=600",
        shortDesc: "Tuffstein-Wasserfälle.",
        description: "30m hohe Kaskaden haben bizarre Kalktuff-Formationen (Travertin) geschaffen. Wirkt wie im Dschungel. Sehr beliebt in Foto-Foren.",
        details: "Kurzer, aber rutschiger Zustieg.",
        routeLink: "https://www.ariege-pyrenees.com/roquefort-les-cascades/cascades-de-la-turasse/tabid/2578/offreid/89938b82-f5c2-4a0b-9679-2420455a7940"
    },
    {
        id: 35,
        title: "Gouffre de Lantouy",
        type: "hoehle",
        lat: 44.492, lng: 1.968,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gouffre_de_Lantouy.jpg/800px-Gouffre_de_Lantouy.jpg",
        shortDesc: "Mysteriöser blauer Quelltopf.",
        description: "Versteckt im Wald bei Salvagnac-Cajarc. Ein tiefblauer Siphon, Eingang zu einem riesigen Unterwassersystem.",
        details: "Magische Atmosphäre, Baden verboten (Soggefahr!).",
        routeLink: "https://www.tourisme-lot.com/offres/le-gouffre-de-lantouy-cajarc-fr-3083103/"
    },
    {
        id: 2,
        title: "Grotte de la Caunha",
        type: "hoehle",
        lat: 42.840, lng: 1.850,
        image: "https://images.unsplash.com/photo-1506543162788-51b752945bb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Monumentales Portal, 1632m Höhe.",
        description: "Auch 'Tute de l'Ours'. Zugang über anspruchsvolle Wanderung von Montségur. Großes System mit Stalaktiten.",
        details: "Status: Wild/Eigenständig. Ausrüstung: Starke Lampen, GPS.",
        routeLink: "https://www.visorando.com/randonnee-grotte-de-la-caunha.html"
    },
    {
        id: 3,
        title: "Grotte de Siech",
        type: "hoehle",
        lat: 42.877, lng: 1.537,
        image: "https://images.unsplash.com/photo-1596323602930-4e201b7a66b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Aktive Flusshöhle bei Saurat.",
        description: "Über 6km Galerien. Charakteristische 'Coups de Gouge'. WARNUNG: Bei Regen Lebensgefahr durch Flutung!",
        details: "Vorsicht: Hydrologie beachten! Aktiver Bachlauf.",
        routeLink: "https://www.speleteaux.com/speleologie/grotte-de-siech/"
    },

    // --- HOBBY-SPÉLÉO (Micro-Explo) ---
    {
        id: 36,
        title: "Grotte de la Dame Blanche",
        type: "hoehle",
        lat: 44.148, lng: 1.765,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Saint-Antonin-Noble-Val_-_Grotte_de_la_Dame_Blanche.jpg/800px-Saint-Antonin-Noble-Val_-_Grotte_de_la_Dame_Blanche.jpg",
        shortDesc: "Der 'Initiations'-Klassiker.",
        description: "Bei St. Antonin. Kleine Eingänge führen in schöne, weiße Sinter-Säle. Teilweise muss man kriechen (Bauchlage), aber technisch einfach.",
        details: "Schmutzige Kleidung einplanen! Ca. 150m Länge.",
        routeLink: "https://www.visorando.com/randonnee-le-cirque-de-bone/"
    },
    {
        id: 37,
        title: "Grotte de Sabart",
        type: "hoehle",
        lat: 42.839, lng: 1.605,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Grotte_de_Sabart.jpg/800px-Grotte_de_Sabart.jpg",
        shortDesc: "Die befestigte Höhle.",
        description: "Direkt bei Tarascon. Ein riesiges Portal, das im Mittelalter zugemauert wurde. Großer, hoher Saal. Sehr einfach begehbar.",
        details: "Historisch extrem spannend. Taschenlampe reicht.",
        routeLink: "https://www.histariege.com/sabart.htm"
    },
    {
        id: 38,
        title: "Grotte de Peyort",
        type: "hoehle",
        lat: 43.033, lng: 1.144,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Grotte_de_Peyort_1.jpg/800px-Grotte_de_Peyort_1.jpg",
        shortDesc: "Riesiger Durchgangstunnel.",
        description: "Im Volp-Tal. Ein gewaltiger, waagerechter Tunnel, durch den man bequem spazieren kann. Wurde schon in der Steinzeit genutzt.",
        details: "Perfekt für den ersten Kontakt mit der Unterwelt.",
        routeLink: "https://www.ariege-pyrenees.com/prat-bonrepaux/grotte-du-peyort/tabid/2578/offreid/75e2f708-3642-4357-9d7a-777610078049"
    },
    {
        id: 39,
        title: "Grotte des Fées",
        type: "hoehle",
        lat: 42.898, lng: 3.029,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Grotte_des_Fees_Leucate.jpg/800px-Grotte_des_Fees_Leucate.jpg",
        shortDesc: "Höhlenforschung am Meer.",
        description: "Ein seltenes Phänomen: Karst direkt an der Küste von Leucate. Mehrere Eingänge (manche eng). Fundort prähistorischer Artefakte.",
        details: "Verbindung von Strandtag und Höhlenforschen.",
        routeLink: "https://www.tourisme-leucate.fr/decouvrir/nature-et-balades/grotte-des-fees/"
    },
    {
        id: 40,
        title: "Grotte de l'Hortus",
        type: "hoehle",
        lat: 43.791, lng: 3.840,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Falaise_Hortus.jpg/800px-Falaise_Hortus.jpg",
        shortDesc: "Adlerhorst in der Felswand.",
        description: "Gegenüber vom Pic St-Loup. Der Zugang erfordert Trittsicherheit am Fels. Großes Portal und weitläufige Säle.",
        details: "Steiler Zustieg! Helm aufsetzen.",
        routeLink: "https://www.visorando.com/randonnee-le-chateau-de-vivier-et-la-grotte-de-l-h/"
    },
    {
        id: 41,
        title: "Grotte de Pâques",
        type: "hoehle",
        lat: 43.905, lng: 3.733,
        image: "https://images.unsplash.com/photo-1499244571973-b49875179a83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Sinterfahnen & Schönheit.",
        description: "Bei St-Bauzille-de-Putois. Bekannt für wunderschöne Konkretionen (bitte nicht anfassen!). Eingang etwas versteckt im Wald.",
        details: "Rutschiger Boden! Gute Schuhe sind Pflicht.",
        routeLink: "https://www.visorando.com/randonnee-la-grotte-de-paques/"
    },
    {
        id: 42,
        title: "Grotte de Saint-Gorgon",
        type: "hoehle",
        lat: 43.376, lng: 2.373,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Entr%C3%A9e_Grotte_Saint_Gorgon.jpg/800px-Entr%C3%A9e_Grotte_Saint_Gorgon.jpg",
        shortDesc: "Abenteuer in der Montagne Noire.",
        description: "Kleines, aber feines System bei Roquefère. Engere Passagen und viel Lehm. Hier fühlt man sich wie ein echter Entdecker.",
        details: "Wechselklamotten im Auto lassen!",
        routeLink: "https://www.visorando.com/randonnee-roquefere-la-cascade-de-cubservies-et-la/"
    },
    {
        id: 43,
        title: "Grotte du Crapaud",
        type: "hoehle",
        lat: 42.983, lng: 0.898,
        image: "https://images.unsplash.com/photo-1508922247293-9c8691523b18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Teil des Arbas-Systems.",
        description: "Kleiner Bruder der großen Arbas-Schächte. Horizontaler Eingangsbereich, der einen sicheren Einblick in die Geologie gibt.",
        details: "Nicht tief eindringen ohne Ortskenntnis.",
        routeLink: "https://www.komoot.com/fr-fr/guide/1559128/grottes-autour-de-arbas"
    },
    {
        id: 44,
        title: "Grotte de la Carrière",
        type: "hoehle",
        lat: 44.805, lng: 1.625,
        image: "https://images.unsplash.com/photo-1627932646244-a953e5d4822f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Spielplatz bei Rocamadour.",
        description: "In einem alten Steinbruch gelegen. Einfach zu finden und oft von lokalen Speläologie-Schulen für erste Übungen genutzt.",
        details: "Weiträumig und sicher.",
        routeLink: "https://www.tourisme-lot.com/"
    },
    {
        id: 45,
        title: "Balme de Montbrun",
        type: "panorama",
        lat: 44.335, lng: 3.488,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chateau_de_Montbrun_Lozere_2.jpg/800px-Chateau_de_Montbrun_Lozere_2.jpg",
        shortDesc: "Das Höhlendorf.",
        description: "Weniger Speläologie, mehr Troglodyten-Abenteuer. Eine ganze mittelalterliche Siedlung, die direkt in die Felswand gebaut wurde.",
        details: "Frei zugänglich mit tollem Blick auf den Tarn.",
        routeLink: "https://www.lozere-tourisme.com/sentier-de-la-balme-de-montbrun-et-le-roc-du-coucou/florac-trois-rivieres/itilar048v509c3a"
    },

    // --- PANORAMA / NATUR ---
    {
        id: 31,
        title: "Les Orgues d'Ille-sur-Têt",
        type: "panorama",
        lat: 42.678, lng: 2.621,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ille-sur-T%C3%AAt_-_Orgues_14.jpg/800px-Ille-sur-T%C3%AAt_-_Orgues_14.jpg",
        shortDesc: "Feenkamine & Badlands.",
        description: "Eine surreale Erosionslandschaft. 12m hohe Sandsteinsäulen, die von Wind und Wasser geformt wurden.",
        details: "Geologisches Juwel, Eintritt erforderlich für Erhalt.",
        routeLink: "https://www.visorando.com/randonnee-les-orgues-d-ille-sur-tet/"
    },
    {
        id: 34,
        title: "Cirque de Mourèze",
        type: "panorama",
        lat: 43.621, lng: 3.359,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cirque_de_Moureze_1.jpg/800px-Cirque_de_Moureze_1.jpg",
        shortDesc: "Dolomit-Labyrinth.",
        description: "Ein 300 Hektar großes Chaos aus bizarren Kalkfelsen. Wilder und weniger kommerziell als Montpellier-le-Vieux.",
        details: "Im Sommer extrem heiß, Wasser mitnehmen!",
        routeLink: "https://www.visorando.com/randonnee-le-cirque-de-moureze-et-le-mont-liausson/"
    },
    {
        id: 12,
        title: "Chaos de Montpellier-le-Vieux",
        type: "panorama",
        lat: 44.137, lng: 3.204,
        image: "https://images.unsplash.com/photo-1629215053229-376672320295?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Felsenstadt aus Dolomit.",
        description: "Ein Labyrinth aus Felsnadeln, Bögen und Canyons auf dem Causse Noir. Drehort für 'La Grande Vadrouille'.",
        details: "Geomorphologisches Phänomen der Ruinenform.",
        routeLink: "https://www.visugpx.com/Wg1293h4gW"
    },
    {
        id: 15,
        title: "Sidobre (Granit-Chaos)",
        type: "panorama",
        lat: 43.623, lng: 2.396,
        image: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Granit-Giganten & Wackelsteine.",
        description: "Geologische Anomalie im Herzen des Tarn. Peyro Clabado (balancierender Fels) und Felsenflüsse.",
        details: "Größtes Granitplateau Europas.",
        routeLink: "https://www.visorando.com/randonnee-les-curiosites-du-sidobre/"
    },
    {
        id: 5,
        title: "Cirque de Bône",
        type: "panorama",
        lat: 44.152, lng: 1.756,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Spektakulärer Blick auf Aveyron-Schlucht.",
        description: "Bei Saint-Antonin-Noble-Val. Wanderungen führen an prähistorischen Abris und der Grotte du Bosc vorbei.",
        details: "Zentrum der prähistorischen Forschung.",
        routeLink: "https://www.visorando.com/randonnee-le-cirque-de-bone/"
    },

    // --- SCHLUCHTEN ---
    {
        id: 1,
        title: "Gorges de la Frau",
        type: "schlucht",
        lat: 42.83111, lng: 1.86472,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gorges_de_la_Frau_(1).jpg?width=600",
        shortDesc: "Monumentaler Canyon & Schmuggelpfad.",
        description: "Gelegen zwischen Montségur und Comus. Vertikale Wände bis zu 400m.",
        details: "Beeindruckendste Schlucht der Pyrenäen.",
        routeLink: "https://www.komoot.com/fr-fr/highlight/456262"
    },
    {
        id: 30,
        title: "Gorges de la Carança",
        type: "schlucht",
        lat: 42.526, lng: 2.223,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gorges_de_la_Caran%C3%A7a.JPG?width=600",
        shortDesc: "Der 'Corniche'-Weg.",
        description: "Legendärer Pfad, der direkt in die vertikale Felswand gehauen wurde. Dazu Hängebrücken ('Ponts de singe').",
        details: "Eines der spektakulärsten Abenteuer der Pyrenäen.",
        routeLink: "https://www.visorando.com/randonnee-les-gorges-de-la-caranca-corniches-et-pa/"
    },
    {
        id: 9,
        title: "Gorges du Tarn",
        type: "schlucht",
        lat: 44.366, lng: 3.411,
        image: "https://images.unsplash.com/photo-1533414417583-f019b7d8b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Giganten der Erosion.",
        description: "Monumental (500m tief). Highlights: Point Sublime, Pas de Soucy, Cirque des Baumes.",
        details: "Kulminierender Punkt der Schluchtenexploration.",
        routeLink: "https://www.visorando.com/randonnee-gorges-du-tarn.html"
    },
    {
        id: 8,
        title: "Canyon de l'Alzou",
        type: "schlucht",
        lat: 44.799, lng: 1.618,
        image: "https://images.unsplash.com/photo-1549488347-19412a806ae1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Wilde Natur & Mühlenruinen.",
        description: "Zwischen Gramat und Rocamadour. Resurgenzen und sakrale Höhlen.",
        details: "Atmosphärischste Wanderung der Region.",
        routeLink: "https://www.vallee-dordogne.com/les-incontournables/rocamadour/le-canyon-de-l-alzou"
    },
    {
        id: 32,
        title: "Trou de Bozouls",
        type: "schlucht",
        lat: 44.471, lng: 2.721,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bozouls_-_Trou_de_Bozouls_1.jpg/800px-Bozouls_-_Trou_de_Bozouls_1.jpg",
        shortDesc: "Der perfekte Canyon-Mäander.",
        description: "Ein 400m breiter und 100m tiefer Canyon mitten in der Stadt. Hufeisenförmig.",
        details: "Spektakuläre Wanderwege direkt an der Kante.",
        routeLink: "https://www.tourisme-aveyron.com/fr/diffusio/randonnees/pr1-le-gourg-d-enfer-bozouls_TFO16530653229"
    },
    {
        id: 33,
        title: "Cascade d'Ars",
        type: "schlucht",
        lat: 42.775, lng: 1.391,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cascade_d%27Ars_04.jpg/800px-Cascade_d%27Ars_04.jpg",
        shortDesc: "138m Wasserfall-Gigant.",
        description: "Einer der schönsten Wasserfälle der Pyrenäen. Besonders im Mai/Juni nach der Schneeschmelze ein Monster.",
        details: "Mittelschwere Wanderung (3-4h), sehr lohnend.",
        routeLink: "https://www.ariege-pyrenees.com/aulus-les-bains/cascade-d-ars/tabid/2619/offreid/68194458-750d-44a6-9886-f4045f22c151"
    },
    {
        id: 11,
        title: "Cirque de Navacelles",
        type: "schlucht",
        lat: 43.895, lng: 3.513,
        image: "https://images.unsplash.com/photo-1517937001602-984483785461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "UNESCO-Mäander (300m tief).",
        description: "Ein ausgetrocknetes Flussbett der Vis formt diesen gigantischen Kessel.",
        details: "Spektakuläre Geologie, botanischer Reichtum.",
        routeLink: "https://www.visorando.com/randonnee-cirque-de-navacelles-et-moulins-de-la-fo/"
    },
    {
        id: 6,
        title: "Sentier Karstique de Crégols",
        type: "schlucht",
        lat: 44.456, lng: 1.698,
        image: "https://images.unsplash.com/photo-1552528751-2d7c5b6b8015?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Karst-Lehrpfad mit 'Igues'.",
        description: "Führt vorbei an der Resurgenz von Crégols. Fakultative Schleife zu den Grottes du Cimetière.",
        details: "Visualisiert hydrologische Prozesse.",
        routeLink: "https://www.tourisme-lot.com/offres/le-sentier-karstique-de-ligue-de-cregols-cregols-fr-2807627/"
    },
    {
        id: 14,
        title: "Gorges de Galamus",
        type: "schlucht",
        lat: 42.836, lng: 2.476,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/France_-_Aude_-_Gorges_de_Galamus_2.jpg?width=600",
        shortDesc: "Extreme Enge & Einsiedelei.",
        description: "Der Agly hat sich tief in den Kalkstein gegraben. Die Ermitage Saint-Antoine klebt direkt an der Felswand.",
        details: "Canyoning-Hotspot und spiritueller Ort.",
        routeLink: "https://www.komoot.com/fr-fr/smarttour/3995141"
    },
    {
        id: 25,
        title: "Gorges de l'Hérault",
        type: "schlucht",
        lat: 43.733, lng: 3.557,
        image: "https://images.unsplash.com/photo-1563294379-998846c24508?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Teufelsbrücke & Saint-Guilhem.",
        description: "Wilder Flusslauf unter der Pont du Diable. Nahe dem UNESCO-Dorf Saint-Guilhem-le-Désert.",
        details: "Grand Site de France.",
        routeLink: "https://www.visorando.com/randonnee-saint-guilhem-le-desert-et-le-chateau-du/"
    },

    // --- TOURIST CAVES ---
    {
        id: 22,
        title: "Gouffre de Padirac",
        type: "hoehle",
        lat: 44.855, lng: 1.750,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gouffre_de_Padirac_-_la_promenade_en_barque_(2).jpg?width=600",
        shortDesc: "Bootsfahrt in 103m Tiefe.",
        description: "Gigantischer Schlund (75m Durchmesser). Unterirdischer Fluss, der mit Booten befahren wird.",
        details: "Das berühmteste Höhlensystem Europas.",
        routeLink: "https://www.gouffre-de-padirac.com/"
    },
    {
        id: 23,
        title: "Grotte de Pech Merle",
        type: "hoehle",
        lat: 44.507, lng: 1.644,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chevaux_ponctués_de_la_grotte_du_Pech_Merle.jpg?width=600",
        shortDesc: "Originale Höhlenmalereien.",
        description: "Eine der wenigen Höhlen, wo man noch die Originale (Mammuts, gepunktete Pferde) sehen darf.",
        details: "Strenge Besucherlimitierung pro Tag.",
        routeLink: "https://www.pechmerle.com/"
    },
    {
        id: 13,
        title: "Grotte du Mas d'Azil",
        type: "hoehle",
        lat: 43.068, lng: 1.354,
        image: "https://images.unsplash.com/photo-1627932646244-a953e5d4822f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Prähistorischer Tunnel.",
        description: "Einzige Höhle Europas, die mit dem Auto befahrbar ist. Wanderwege führen über das Massiv.",
        details: "Archäologische Stätte von Weltrang.",
        routeLink: "https://www.tourisme-arize-leze.com/offres/le-sentier-du-solitaire-le-mas-dazil-fr-4155128/"
    },
    {
        id: 4,
        title: "Grotte de l'Ermite",
        type: "hoehle",
        lat: 42.816, lng: 1.621,
        image: "https://images.unsplash.com/photo-1650355034606-d50d517c5950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Thermische Anomalie (15-18°C).",
        description: "Labyrinthartig, verbunden durch natürliche Kalksteinrutschen. Ideal für Winterexplorationen.",
        details: "Zugang: Steiler Pfad von den Thermen von Ussat.",
        routeLink: "https://www.pyrenees-ariegeoises.com/a-voir-a-faire/balades-et-randonnees/ornolac-et-ussat-ornolac-ussat-les-bains-fr-5045886/"
    },

    // --- CITIES ---
    {
        id: 20,
        title: "Cordes-sur-Ciel",
        type: "stadt",
        lat: 44.063, lng: 1.954,
        image: "https://images.unsplash.com/photo-1533221262841-f7035119df0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Die Stadt über den Wolken.",
        description: "Mittelalterliche Bastide auf einem Hügel. Gotische Fassaden und steile Gassen.",
        details: "Zählt zu den schönsten Dörfern Frankreichs.",
        routeLink: "https://www.visorando.com/randonnee-cordes-sur-ciel-un-bijou-d-architecture/"
    },
    {
        id: 21,
        title: "Saint-Cirq-Lapopie",
        type: "stadt",
        lat: 44.464, lng: 1.682,
        image: "https://images.unsplash.com/photo-1521199320294-811c47141505?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Perle am Lot.",
        description: "Dorf klebt spektakulär an einer Steilwand über dem Lot. Künstlerkolonie und historische Fachwerkhäuser.",
        details: "Gewählt zum beliebtesten Dorf der Franzosen.",
        routeLink: "https://www.tourisme-lot.com/offres/le-chemin-de-halage-bouzies-fr-2807663/"
    },
    {
        id: 24,
        title: "Mirepoix",
        type: "stadt",
        lat: 43.087, lng: 1.874,
        image: "https://images.unsplash.com/photo-1628173426533-333d47d48074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Mittelalterliche Arkaden.",
        description: "Berühmt für den Marktplatz mit bunten Fachwerkhäusern und den hölzernen Arkadengängen (Couverts).",
        details: "Ideal in Verbindung mit Montségur.",
        routeLink: "https://www.ariege-pyrenees.com/mirepoix/randonnee-les-crestes-et-le-chateau-de-lagarde/tabid/2619/offreid/693630f0-c2d1-4235-862d-949666f56c86"
    },

    // --- TIEFE HÖHLEN FÜR SPELÄOLOGEN (50-300m) ---
    {
        id: 200,
        title: "Grotte de Lombrives",
        type: "hoehle",
        lat: 42.826, lng: 1.635,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Größte Höhle Europas – 250m Tiefe.",
        description: "Gigantisches Höhlensystem bei Ussat-les-Bains. Säle bis zu 100m hoch, 4km Gänge. Spektakuläre Konkrektionen.",
        details: "Tiefe: 250m. Touristische + speläologische Routen.",
        routeLink: "https://www.grotte-lombrives.fr/"
    },
    {
        id: 201,
        title: "Gouffre de Cabrespine",
        type: "hoehle",
        lat: 43.335, lng: 2.528,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "250m Abgrund im Montagne Noire.",
        description: "Spektakulärer Abgrund mit hängendem Besuchersteg. Der Saal 'Gouffre Géant' ist 80m hoch.",
        details: "Tiefe: 250m. Geführte Tour + Sportparcours.",
        routeLink: "https://www.grotte-de-cabrespine.com/"
    },
    {
        id: 202,
        title: "Aven Armand",
        type: "hoehle",
        lat: 44.217, lng: 3.313,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Stalagmitenwald – 100m tief.",
        description: "Gigantischer Saal mit über 400 Stalagmiten (bis 30m hoch). Weltberühmt bei Speläologen.",
        details: "Tiefe: 100m. Schachteingang für Profis verfügbar.",
        routeLink: "https://www.aven-armand.com/"
    },
    {
        id: 203,
        title: "Grotte de Niaux",
        type: "hoehle",
        lat: 42.821, lng: 1.600,
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Höhlenmalereien + 2km Galerien.",
        description: "Weltberühmt für prähistorische Kunst (14.000 Jahre). Dahinter liegen kilometerlange Gänge.",
        details: "Tiefe: 150m. Schwarzer Saal für Speläologen.",
        routeLink: "https://www.ariege.com/grotte-niaux"
    },
    {
        id: 204,
        title: "Gouffre de Padirac (Expeditionen)",
        type: "hoehle",
        lat: 44.855, lng: 1.750,
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "103m Schacht – Expertenbereich.",
        description: "Hinter dem touristischen Teil: Siphons für Höhlentaucher und extreme Expeditionen.",
        details: "Tiefe: 103m. Höhlentauchen möglich.",
        routeLink: "https://www.gouffre-de-padirac.com/"
    },
    {
        id: 205,
        title: "Réseau Felix Trombe",
        type: "hoehle",
        lat: 42.977, lng: 0.885,
        image: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Längstes System Frankreichs.",
        description: "Über 115km kartierte Gänge! Extrem komplex. Nur für Experten mit Genehmigung.",
        details: "Tiefe: 300m+. Mehrtages-Expeditionen.",
        routeLink: "https://www.speleologie-ariege.net/"
    },
    {
        id: 206,
        title: "Grotte de Dargilan",
        type: "hoehle",
        lat: 44.213, lng: 3.396,
        image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "'Palast der Feen' – 200m tief.",
        description: "Riesige Säle mit fantastischen Konkretionen. Dahinter wilde Fortsetzungen für Speläo-Clubs.",
        details: "Tiefe: 200m. Vertikale Schächte im hinteren Teil.",
        routeLink: "https://www.grotte-dargilan.fr/"
    },
    {
        id: 207,
        title: "Grotte de Devèze",
        type: "hoehle",
        lat: 43.618, lng: 3.036,
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Alabaster-Konkretionen – 120m.",
        description: "Berühmt für weiße Alabaster-Formationen. Extended network hinter dem Showbereich.",
        details: "Tiefe: 120m. Sportroute verfügbar.",
        routeLink: "https://www.grotte-deveze.fr/"
    },
    {
        id: 208,
        title: "Grotte de Foissac",
        type: "hoehle",
        lat: 44.506, lng: 2.118,
        image: "https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Archäologische Höhle – 80m.",
        description: "Neolithische Keramik + Menschenknochen. Wilde Sektionen erfordern Klettern.",
        details: "Tiefe: 80m. Archäo-Speläologie.",
        routeLink: "https://www.grotte-foissac.fr/"
    },
    {
        id: 209,
        title: "Grotte de Bédeilhac",
        type: "hoehle",
        lat: 42.883, lng: 1.600,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Gigantischer Eingang – 150m tief.",
        description: "Portal ist 40m breit! Dahinter: prähistorische Kunst und wilde Labyrinthe.",
        details: "Tiefe: 150m. Eiszeit-Bärenhöhle.",
        routeLink: "https://www.sites-touristiques-ariege.fr/bedeilhac"
    },
    {
        id: 210,
        title: "Grotte des Demoiselles",
        type: "hoehle",
        lat: 43.895, lng: 3.733,
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Kathedrale – 116m über dem Tal.",
        description: "Saal 'Cathédrale' ist 50m hoch. Für Experten: Schächte zu tieferen Ebenen.",
        details: "Tiefe/Höhe: 116m. Senkrechte Kamine.",
        routeLink: "https://www.demoiselles.com/"
    },
    {
        id: 211,
        title: "Grotte de Trabuc",
        type: "hoehle",
        lat: 44.086, lng: 3.943,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "100.000 Soldaten-Stalagmiten.",
        description: "Berühmt für den 'Lac des Soldats'. Wilde Bereiche mit Unterwasser-Siphons.",
        details: "Tiefe: 90m. Höhlentauchen möglich.",
        routeLink: "https://www.grotte-trabuc.com/"
    },

    // --- FOSSILIEN-FUNDORTE (Paleontologie) ---
    {
        id: 100,
        title: "Saint-Jean-d'Alcapies",
        type: "fossil",
        lat: 43.933, lng: 3.167,
        image: "https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Top-Fundpunkt für Toarcium-Ammoniten.",
        description: "Entlang der D93: Mergelaufschlüsse des Toarciums. Pyritisierte Ammoniten, Gastropoden, Belemniten.",
        details: "Lias (Toarcium), ca. 185-174 Mio. Jahre.",
        routeLink: "https://www.visorando.com/"
    },
    {
        id: 101,
        title: "Lapanouse-de-Cernon",
        type: "fossil",
        lat: 43.964, lng: 3.111,
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Mergelhang mit Pyrit-Fossilien.",
        description: "Wanderweg durch Mergelschichten. Fossilien oft direkt nach Regen sichtbar.",
        details: "Perfekt für Anfänger ohne schweres Werkzeug.",
        routeLink: "https://www.tourisme-aveyron.com/"
    },
    {
        id: 102,
        title: "Tournemire & Roquefort",
        type: "fossil",
        lat: 43.978, lng: 3.029,
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "'Schistes carton' mit Ammoniten.",
        description: "Graue Kartonschiefer mit flachgedrückten Hildoceras und Harpoceras.",
        details: "Vorsichtig spalten! Fossilien dünn wie Papier.",
        routeLink: "https://www.roquefort.fr/"
    },
    {
        id: 103,
        title: "Cénaret (Barjac)",
        type: "fossil",
        lat: 44.522, lng: 3.502,
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Tausende Hildoceras-Ammoniten.",
        description: "'Marnes bleues' des Toarciums mit massenhaft pyritisierten Ammoniten.",
        details: "Weltklasse-Fundort für Sammler.",
        routeLink: "https://www.lozere-tourisme.com/"
    },
    {
        id: 104,
        title: "Boussagues (Bédarieux)",
        type: "fossil",
        lat: 43.679, lng: 3.178,
        image: "https://images.unsplash.com/photo-1608421952137-1039b2d35993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Crinoiden & Pentacriniten.",
        description: "Sinémurien/Pliensbachien. Crinoiden (Seelilien), Pentacriniten, Brachiopoden.",
        details: "Ca. 190 Mio. Jahre alt.",
        routeLink: "https://www.grandsudherault.fr/"
    },
    {
        id: 105,
        title: "Viols-le-Fort (Ammoniten-Platte)",
        type: "fossil",
        lat: 43.735, lng: 3.807,
        image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Berühmte Ammoniten-Platte.",
        description: "Pädagogisches Geotop – Sammeln nicht erlaubt, nur Beobachtung.",
        details: "Geschütztes geologisches Denkmal.",
        routeLink: "https://www.cc-grandpicsaintloup.fr/"
    },
    {
        id: 106,
        title: "Ravin de Naves (Les Vans)",
        type: "fossil",
        lat: 44.402, lng: 4.134,
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Das Referenzmodell (Ardèche).",
        description: "Legendärer Fundort für pyritisierte Toarcium-Fossilien.",
        details: "Referenz-Geotop, ca. 2,5 Std. von Toulouse.",
        routeLink: "https://www.ardeche-guide.com/"
    }
    ,

    // === GROTTES VERIFIED (funktionierende Links) ===

    // --- ARIÈGE PYRENÄEN ---
    {
        id: 500,
        title: "Grotte de Niaux (Préhistoire)",
        type: "hoehle",
        lat: 42.819, lng: 1.604,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Weltberühmte Höhlenmalerei!",
        description: "Magdalénien-Kunst (14.000 Jahre). Salon Noir. Reservierung PFLICHT! Begrenzte Plätze.",
        details: "Tel: 05 61 05 10 10",
        routeLink: "https://www.sites-touristiques-ariege.fr/grotte-de-niaux/"
    },
    {
        id: 501,
        title: "Grotte du Mas-d'Azil",
        type: "hoehle",
        lat: 43.090, lng: 1.360,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Einzigartig: Straße DURCH die Höhle!",
        description: "400m Tunnel, Auto fährt durch! Namensgebend für Azilien-Epoche. Préhistoire-Museum.",
        details: "UNESCO-Kandidat",
        routeLink: "https://www.sites-touristiques-ariege.fr/grotte-du-mas-dazil/"
    },
    {
        id: 502,
        title: "Rivière Souterraine Labouiche",
        type: "hoehle",
        lat: 42.985, lng: 1.580,
        image: "https://images.unsplash.com/photo-1533414417583-f019b7d8b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Längste schiffbare U-Boot-Fahrt Europas!",
        description: "1,5km Bootsfahrt 60m unter der Erde! Nahe Foix. Tropfsteine vom Wasser aus.",
        details: "Ganzjährig geöffnet",
        routeLink: "https://www.labouiche.com/"
    },
    {
        id: 503,
        title: "Grotte de Bédeilhac",
        type: "hoehle",
        lat: 42.878, lng: 1.576,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Kolossale Dimensionen, Ton-Modelagen!",
        description: "Riesiges Portal (30m hoch). Prähistorische Kunst. Im 2. WK als Lager genutzt.",
        details: "Geführte Touren",
        routeLink: "https://www.sites-touristiques-ariege.fr/grotte-de-bedeilhac/"
    },
    {
        id: 504,
        title: "Grotte de Lombrives",
        type: "hoehle",
        lat: 42.823, lng: 1.616,
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Größte begehbare Höhle Europas!",
        description: "Monumentale Hallen, Katharer-Geschichte. Mehrere Touren-Längen wählbar.",
        details: "3km südl. Tarascon",
        routeLink: "https://www.grotte-lombrives.fr/"
    },
    {
        id: 505,
        title: "Grotte de la Vache",
        type: "hoehle",
        lat: 42.817, lng: 1.601,
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Archäologische Ausgrabung live!",
        description: "Einziger Ort Frankreichs mit sichtbaren Ausgrabungen. Gegenüber von Niaux.",
        details: "Magdalénien-Wohnstätte",
        routeLink: "https://www.sites-touristiques-ariege.fr/grotte-de-la-vache/"
    },

    // --- LOT / QUERCY (nördlich Toulouse) ---
    {
        id: 510,
        title: "Gouffre de Padirac",
        type: "hoehle",
        lat: 44.855, lng: 1.753,
        image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Frankreichs berühmtester Gouffre!",
        description: "103m Abstieg! Unterirdische Bootsfahrt auf dem Fluss. Absolutes Muss!",
        details: "~2h von Toulouse",
        routeLink: "https://www.gouffre-de-padirac.com/"
    },
    {
        id: 511,
        title: "Grotte du Pech-Merle",
        type: "hoehle",
        lat: 44.507, lng: 1.645,
        image: "https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Prähistorische Malerei, 20.000 Jahre!",
        description: "Authentische Höhlenmalereien (keine Kopie!). Pferde, Mammuts, Handabdrücke.",
        details: "Reservierung empfohlen",
        routeLink: "https://www.pechmerle.com/"
    },
    {
        id: 512,
        title: "Grottes de Lacave",
        type: "hoehle",
        lat: 44.846, lng: 1.567,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Kleiner Zug + Lichtshow!",
        description: "1,6km unterirdisch, teilweise mit Bähnchen. 10 Säle, spektakuläre Beleuchtung.",
        details: "Dordogne-Tal",
        routeLink: "https://www.grottes-de-lacave.fr/"
    },
    {
        id: 513,
        title: "Grottes de Cougnac",
        type: "hoehle",
        lat: 44.723, lng: 1.375,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Prähistorische Kunst + Stalagmiten!",
        description: "'Végétation minérale' + echte Höhlenmalereien. Älteste öffentlich zugängliche.",
        details: "Gourdon, Lot",
        routeLink: "https://www.grottesdecougnac.com/"
    },
    {
        id: 514,
        title: "Grotte des Merveilles",
        type: "hoehle",
        lat: 44.799, lng: 1.618,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Rocamadour, 25.000 Jahre alte Kunst!",
        description: "Unter der Pilgerstätte. Monumenten-Historique. Handabdrücke, Pferde.",
        details: "UNESCO-Welterbe-Zone",
        routeLink: "https://www.grottedesmerveilles.com/"
    },
    {
        id: 515,
        title: "Grottes de Presque",
        type: "hoehle",
        lat: 44.889, lng: 1.861,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Säulen bis 10m hoch!",
        description: "350m Galerie, monumentale Stalagmiten. Saint-Céré, Lot.",
        details: "Konkretion-Highlight",
        routeLink: "https://www.grottes-de-presque.com/"
    },

    // --- DORDOGNE / PÉRIGORD ---
    {
        id: 520,
        title: "Lascaux IV (Réplique)",
        type: "hoehle",
        lat: 45.053, lng: 1.168,
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Die 'Sixtinische Kapelle der Urzeit'!",
        description: "Komplette Nachbildung der Original-Grotte. Weltbestes Prähistorie-Museum.",
        details: "Montignac, ~3h v. Toulouse",
        routeLink: "https://www.lascaux.fr/"
    },
    {
        id: 521,
        title: "Gouffre de Proumeyssac",
        type: "hoehle",
        lat: 44.901, lng: 0.888,
        image: "https://images.unsplash.com/photo-1533414417583-f019b7d8b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ 'Kathedrale aus Kristall'!",
        description: "Abstieg in Panorama-Kabine! Sound- und Lichtshow. Spektakulär!",
        details: "Le Bugue, Périgord",
        routeLink: "https://www.gouffre-proumeyssac.com/"
    },
    {
        id: 522,
        title: "Grotte de Tourtoirac",
        type: "hoehle",
        lat: 45.270, lng: 1.063,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "'Geologische Perle des Périgord'",
        description: "1995 entdeckt! Sehr gut erhaltene Tropfsteine in verschiedenen Farben.",
        details: "Modernes Besucherzentrum",
        routeLink: "https://www.grotte-de-tourtoirac.fr/"
    }
    ,

    // === WANDERUNGEN: CASCADES, LACS, GORGES ===

    // --- Haute-Garonne (Luchonnais) ---
    {
        id: 600,
        title: "Lac d'Oô + Cascade (275m)",
        type: "schlucht",
        lat: 42.803, lng: 0.489,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Spektakulärste Cascade der Pyrenäen!",
        description: "275m Wasserfall stürzt in türkisfarbenen See. Einfache Wanderung ab Granges d'Astau. Familientauglich!",
        details: "~2h hin, 400m Höhenunterschied",
        routeLink: "https://www.visorando.com/randonnee-le-lac-d-oo/"
    },
    {
        id: 601,
        title: "Lac d'Espingo",
        type: "schlucht",
        lat: 42.790, lng: 0.485,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Weiter als Oô, noch wilder!",
        description: "Via GR10 ab Lac d'Oô. Berghütte am See. Für erfahrene Wanderer.",
        details: "+300m über Oô, ~4h gesamt",
        routeLink: "https://www.visorando.com/randonnee-lac-d-espingo/"
    },
    {
        id: 602,
        title: "Gouffre du Ru d'Enfer",
        type: "schlucht",
        lat: 42.802, lng: 0.550,
        image: "https://images.unsplash.com/photo-1533414417583-f019b7d8b524?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Höllen-Canyon, Vallée du Lys!",
        description: "Schattiger Canyon mit Wasserfällen. Ab Castillon-de-Larboust. Sehr atmosphärisch!",
        details: "Mittelschwer",
        routeLink: "https://www.visorando.com/randonnee-gouffre-d-enfer-et-ru-d-enfer/"
    },
    {
        id: 603,
        title: "Lac Vert (Luchon)",
        type: "schlucht",
        lat: 42.780, lng: 0.530,
        image: "https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Smaragdgrüner Bergsee!",
        description: "Traumhaftes Grün, Panorama Luchonnais. Anspruchsvoll wegen Länge und Steigung.",
        details: "Schwer, gute Kondition nötig",
        routeLink: "https://www.visorando.com/randonnee-le-lac-vert-depuis-bagneres-de-luchon/"
    },

    // --- Ariège (Cascades) ---
    {
        id: 610,
        title: "Cascade d'Ars (246m)",
        type: "schlucht",
        lat: 42.762, lng: 1.479,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Höchster Wasserfall der Ariège!",
        description: "246m in 3 Stufen! Ab Auzat/Artigue. Mai-Juni beste Zeit (Schneeschmelze).",
        details: "6km, 2h40, familienfreundlich",
        routeLink: "https://www.visorando.com/randonnee-cascade-d-ars/"
    },
    {
        id: 611,
        title: "Étang du Garbet + Étang Bleu",
        type: "schlucht",
        lat: 42.805, lng: 1.285,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Zwei Bergsen, einer wild!",
        description: "Ab Route D8f (Aulus-les-Bains). Garbet = markiert. Bleu = unter Felswänden, wilder.",
        details: "Garbet leicht, Bleu sportlich",
        routeLink: "https://www.visorando.com/randonnee-etangs-du-garbet/"
    },
    {
        id: 612,
        title: "Lac de Bethmale",
        type: "schlucht",
        lat: 42.882, lng: 1.063,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Couserans-Klassiker, familientauglich.",
        description: "8km Rundweg, 400m Höhe. Schöner See im Couserans-Tal.",
        details: "Leicht-Mittel",
        routeLink: "https://www.visorando.com/randonnee-le-lac-de-bethmale/"
    },

    // --- Gorges (Aude/Ariège) ---
    {
        id: 620,
        title: "Gorges de Galamus",
        type: "schlucht",
        lat: 42.835, lng: 2.460,
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Spektakuläre Klamm + Ermitage!",
        description: "Enge Schlucht, Ermitage Saint-Antoine in Felswand. Atemberaubend!",
        details: "Grenze Aude/Pyr.-Orientales",
        routeLink: "https://www.gorgesdegalamus.fr/"
    },
    {
        id: 621,
        title: "Gorges de la Frau",
        type: "schlucht",
        lat: 42.845, lng: 1.820,
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Katharerweg, wild & mystisch!",
        description: "GR107 (Sentier Cathare) führt durch. Ab Montségur. Sehr atmosphärisch!",
        details: "7,6km, 4-5h",
        routeLink: "https://www.visorando.com/randonnee-les-gorges-de-la-frau/"
    },
    {
        id: 622,
        title: "Gorges de Saint-Georges",
        type: "schlucht",
        lat: 42.925, lng: 2.100,
        image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Rafting-Hotspot, Pyrénées Audoises!",
        description: "Enge, tiefe Schlucht. Rafting, Hydrospeed. Wildwasser-Abenteuer!",
        details: "pyreneesaudoises.com",
        routeLink: "https://www.pyreneesaudoises.com/"
    },
    {
        id: 623,
        title: "Défilé de la Pierre Lys",
        type: "schlucht",
        lat: 42.878, lng: 2.205,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Dramatischer Canyon, Aude-Tal!",
        description: "Enge Straße durch Felsen. Perfekt für Rafting. Pyrénées Audoises.",
        details: "Zugang via D117",
        routeLink: "https://www.pyreneesaudoises.com/"
    },

    // === FOSSILIEN NÄHER BEI TOULOUSE ===

    // --- Petites Pyrénées (30-60min von Toulouse) ---
    {
        id: 700,
        title: "Petites Pyrénées (Ammoniten)",
        type: "fossil",
        lat: 43.150, lng: 0.950,
        image: "https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Kreide-Ammoniten NAHE Toulouse!",
        description: "Chaînon Petites Pyrénées: Hoploscaphites, Eubaculites. Crétacé supérieur bis Éocène!",
        details: "~45min von Toulouse",
        routeLink: "https://www.geoforum.fr/"
    },
    {
        id: 701,
        title: "Saint-Gaudens (17 Fossil-Sites)",
        type: "fossil",
        lat: 43.108, lng: 0.725,
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ PaleoBioDB: 17 registrierte Fundorte!",
        description: "Comminges-Region. Jurassische + Kreide-Formationen. Wissenschaftlich dokumentiert.",
        details: "~1h von Toulouse",
        routeLink: "https://paleobiodb.org/"
    },
    {
        id: 702,
        title: "Col d'Ussat (Bédoulien)",
        type: "fossil",
        lat: 42.828, lng: 1.620,
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Kreide-Ammoniten, Ariège!",
        description: "Bédoulien-Stufe (Unterkreide). BRGM-dokumentiert. Nahe Tarascon.",
        details: "~1,5h von Toulouse",
        routeLink: "https://www.brgm.fr/"
    },

    // --- Quercy/Lot (1-1,5h nördlich Toulouse) ---
    {
        id: 710,
        title: "Phosphatières du Quercy",
        type: "fossil",
        lat: 44.367, lng: 1.650,
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ WELTKLASSE: 30 Mio. Jahre alt!",
        description: "Weltweit einzigartig! Säugetiere, Reptilien, Insekten. Ehemalige Phosphatminen.",
        details: "Bach (Lot), ~1,5h v. Toulouse",
        routeLink: "https://www.phosphatieres.com/"
    },
    {
        id: 711,
        title: "Plage aux Ptérosaures (Crayssac)",
        type: "fossil",
        lat: 44.483, lng: 1.533,
        image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Dinosaurier-Fußabdrücke!",
        description: "Jurassische Spuren: Pterosaurier, Theropoden, Krokodile. Einzigartig!",
        details: "Causses du Quercy",
        routeLink: "https://www.parc-causses-du-quercy.fr/"
    },
    {
        id: 712,
        title: "Aurignac (Sentier des Fossiles)",
        type: "fossil",
        lat: 43.217, lng: 0.878,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Wanderweg mit Fossilien, 40min v. TLS!",
        description: "Namensgebend für Aurignacien! Sentier des Fossiles + Musée de l'Aurignacien.",
        details: "Sehr nah an Toulouse!",
        routeLink: "https://www.musee-aurignacien.com/"
    },

    // === GEOFORUM VERIFIZIERTE FUNDORTE ===

    {
        id: 720,
        title: "Carrière de Boussens",
        type: "fossil",
        lat: 43.180, lng: 0.951,
        image: "https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ DER Klassiker bei Toulouse!",
        description: "Thanétien-Oursins: Echinanthus, Linthia, Hemiaster, Micraster. Auch Krabben (Xanthilites). Von der Geoforum-Community hoch empfohlen!",
        details: "~45min von Toulouse, aktive Carrière.",
        routeLink: "https://www.geoforum.fr/topic/37968-mes-premiers-fossiles-31/"
    },
    {
        id: 721,
        title: "Pic de Bugarach (Santonien)",
        type: "fossil",
        lat: 42.879, lng: 2.349,
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Oursins & Spondylus!",
        description: "Marnes à Micraster: corbaricus, matheroni, Echinocorys vulgaris, Cardiaster. Auch Spondylus spinosus.",
        details: "Coniacien sup./Santonien inf., Corbières.",
        routeLink: "https://www.geoforum.fr/topic/37454-fossiles-de-laude/"
    },
    {
        id: 722,
        title: "Montagne Noire (Trilobiten)",
        type: "fossil",
        lat: 43.420, lng: 2.500,
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Kambrische Trilobiten!",
        description: "Berühmt für Cambrium-Trilobiten. Einer der besten Trilobiten-Fundorte Frankreichs.",
        details: "~1,5h von Toulouse, anspruchsvoll.",
        routeLink: "https://www.geoforum.fr/topic/23207-trilobite-montagne-noire/"
    },
    {
        id: 723,
        title: "Minerve (Trilobiten)",
        type: "fossil",
        lat: 43.354, lng: 2.746,
        image: "https://images.unsplash.com/photo-1608421952137-1039b2d35993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Yprésien-Trilobiten + Minervois!",
        description: "Yprésien inférieur mit Trilobiten. Plus: Mittelalterliche Katharer-Stadt als Bonus!",
        details: "~1,5h von Toulouse.",
        routeLink: "https://www.geoforum.fr/topic/37454-fossiles-de-laude/"
    },
    {
        id: 724,
        title: "Duilhac-sous-Peyrepertuse",
        type: "fossil",
        lat: 42.867, lng: 2.561,
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Rudisten an den Gorges du Verdouble!",
        description: "Reich an Fossilien & Kristallen! Rudisten (muschel-ähnliche Riffbildner). Täglich neue Funde möglich.",
        details: "Corbières, ~2h von Toulouse.",
        routeLink: "https://www.geoforum.fr/topic/45452-fossile-des-corbières-duilhac-sous-peyrepertuse/"
    },
    {
        id: 725,
        title: "Massif de la Clape",
        type: "fossil",
        lat: 43.150, lng: 3.100,
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Fossilien nahe Narbonne-Plage!",
        description: "Kalkstein-Massiv am Meer mit diversen Fossilien. Kombinierbar mit Strandtag!",
        details: "Bei Narbonne, ~1,5h von Toulouse.",
        routeLink: "https://www.geoforum.fr/topic/37454-fossiles-de-laude/"
    },

    // === DEEP DIVE GEOFORUM FUNDORTE ===

    {
        id: 726,
        title: "Bassin de Lodève (Ichnofossilien)",
        type: "fossil",
        lat: 43.730, lng: 3.320,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Permische Fußspuren!",
        description: "Saxonien/Guadalupien (Perm, 260 Mio. Jahre). Ichnofossilien von Wirbeltieren und Triops. Einzigartig in Südfrankreich!",
        details: "~1,5h von Toulouse, Hérault.",
        routeLink: "https://www.geoforum.fr/topic/62799-fossiles-et-ichnofossiles-dinvertebres-du-saxonien-aujourdhui-appele-guadalupien-du-bassin-de-lodeve/"
    },
    {
        id: 727,
        title: "Phosphatières du Quercy (Bach)",
        type: "fossil",
        lat: 44.357, lng: 1.518,
        image: "https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Weltberühmte Oligozän-Fauna!",
        description: "30 Mio. Jahre alt! Säugetiere (Primaten, Xiphodon, Palaeotherium), Reptilien, Amphibien. UNESCO-Relevanz!",
        details: "~1,5h von Toulouse, Lot. Museum vor Ort!",
        routeLink: "https://www.phosphatieres.com/"
    },
    {
        id: 728,
        title: "Cabrières (Ordovizium)",
        type: "fossil",
        lat: 43.560, lng: 3.360,
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Trilobiten & Mineralien!",
        description: "Ordovizium-Trilobiten + berühmte Mineralien (Azurit, Malachit). Geologisch sehr reich!",
        details: "~2h von Toulouse, Hérault.",
        routeLink: "https://www.geoforum.fr/topic/17668-les-minéraux-du-site-de-cabrières/"
    },
    {
        id: 729,
        title: "St-Laurent-de-Trèves (Dino-Fußspuren)",
        type: "fossil",
        lat: 44.292, lng: 3.460,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Grallator-Dinosaurier-Spuren!",
        description: "Hettangien (201-199 Mio. Jahre). Echte Dinosaurier-Fußabdrücke (Grallator, ~22cm). Parc National des Cévennes!",
        details: "~2,5h von Toulouse, Lozère.",
        routeLink: "https://www.geoforum.fr/topic/56889-empreintes-de-pas-de-dinosaures-en-france/"
    },
    {
        id: 730,
        title: "Villeveyrac (Kreide-Fauna)",
        type: "fossil",
        lat: 43.499, lng: 3.597,
        image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Dinosaurier-Zeitalter Fauna!",
        description: "Kreide-Fauna (Dinosaurier-Ära). Wissenschaftliche Grabungsstätte. 12 neue Artengruppen entdeckt!",
        details: "~2h von Toulouse, Hérault. Forschungsstandort.",
        routeLink: "https://www.geoforum.fr/topic/62843-faune-cretacee-de-villeveyrac-herault/"
    },

    // === ERWEITERTE GEOFORUM RECHERCHE ===

    {
        id: 731,
        title: "Grands Causses Terres Noires",
        type: "fossil",
        lat: 44.100, lng: 3.100,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Jurassische Ammoniten!",
        description: "Terres noires mit spektakulären Ammoniten (Collina, Septimaniceras mit Stacheln). Aveyron/Lozère/Hérault Grenzgebiet.",
        details: "~2h von Toulouse, Aveyron.",
        routeLink: "https://www.geoforum.fr/topic/38238-faune-des-terres-noires-des-grands-causses-aveyron-lozere-herault/"
    },
    {
        id: 732,
        title: "Espéraza Dinosauria Museum",
        type: "fossil",
        lat: 42.932, lng: 2.220,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Französische Dinosaurier!",
        description: "Dinosaurier-Museum mit echten Funden aus der Region! Weltberühmt für Dinosaurier-Eier. Grabungsstätten in der Nähe.",
        details: "~1,5h von Toulouse, Aude. Museum + Fundstätten!",
        routeLink: "https://www.dinosauria.org/"
    },
    {
        id: 733,
        title: "Ambre des Corbières",
        type: "fossil",
        lat: 42.900, lng: 2.500,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Fossiler Bernstein!",
        description: "Bernstein-Vorkommen in den Corbières. Seltene Einschlüsse möglich! Im Forum diskutiert.",
        details: "~2h von Toulouse, Aude. Schwierig zu finden.",
        routeLink: "https://www.geoforum.fr/topic/61586-ambre-des-corbieres/"
    },
    {
        id: 734,
        title: "Gorges du Tarn (Géopatrimoine)",
        type: "fossil",
        lat: 44.320, lng: 3.300,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "UNESCO-Gebiet mit Fossilien!",
        description: "Spektakuläre Schluchten mit jurassischen Kalken. Teil des geologischen Erbes von Midi-Pyrénées.",
        details: "~2,5h von Toulouse, Lozère/Aveyron.",
        routeLink: "https://www.geoforum.fr/topic/27380-le-patrimoine-geologique-de-midi-pyrenees/"
    },

    // === PLUS BEAUX VILLAGES DE FRANCE ===

    {
        id: 800,
        title: "Cordes-sur-Ciel",
        type: "stadt",
        lat: 44.066, lng: 1.954,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Gotisches Himmelsdorf!",
        description: "1222 gegründete Bastide, schwebt über den Wolken. Mittelalterliche Gassen, Fachwerkhäuser, Katharer-Geschichte.",
        details: "~1h von Toulouse. Plus Beaux Villages de France!",
        routeLink: "https://www.google.com/maps/place/Cordes-sur-Ciel"
    },
    {
        id: 801,
        title: "Saint-Cirq-Lapopie",
        type: "stadt",
        lat: 44.465, lng: 1.670,
        image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Spektakuläres Felsendorf!",
        description: "Mittelalterliches Juwel an der Klippe über dem Lot. Eines der schönsten Dörfer Frankreichs!",
        details: "~1,5h von Toulouse. Absolutes Muss!",
        routeLink: "https://www.google.com/maps/place/Saint-Cirq-Lapopie"
    },
    {
        id: 802,
        title: "Puycelsi",
        type: "stadt",
        lat: 43.990, lng: 1.720,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Befestigte Bastide!",
        description: "Festungsdorf mit Blick über die Forêt de Grésigne. 10. Jhd. Wehrturm, beeindruckende Stadtmauern.",
        details: "~1h von Toulouse. Plus Beaux Villages!",
        routeLink: "https://www.google.com/maps/place/Puycelsi"
    },
    {
        id: 803,
        title: "Bruniquel",
        type: "stadt",
        lat: 44.056, lng: 1.663,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Zwei Burgen über dem Tal!",
        description: "Zwei mittelalterliche Burgen auf Felsen. Malerische Gassen, Blick über die Aveyron-Schlucht.",
        details: "~1h von Toulouse. Filmkulisse!",
        routeLink: "https://www.google.com/maps/place/Bruniquel"
    },
    {
        id: 804,
        title: "Castelnau-de-Montmiral",
        type: "stadt",
        lat: 43.966, lng: 1.816,
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Typische Arkaden-Bastide!",
        description: "Mittelalterliche Bastide mit Arkaden-Platz und Fachwerkhäusern. Gaillac-Weingebiet.",
        details: "~1h von Toulouse. Plus Beaux Villages!",
        routeLink: "https://www.google.com/maps/place/Castelnau-de-Montmiral"
    },
    {
        id: 805,
        title: "Auvillar",
        type: "stadt",
        lat: 44.068, lng: 0.901,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Runde Markthalle!",
        description: "Einzigartige runde Markthalle aus Stein! Blick über das Garonne-Tal. Jakobsweg-Station.",
        details: "~1h von Toulouse. Plus Beaux Villages!",
        routeLink: "https://www.google.com/maps/place/Auvillar"
    },
    {
        id: 806,
        title: "Conques",
        type: "stadt",
        lat: 44.599, lng: 2.397,
        image: "https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Romanisches Juwel!",
        description: "Abtei Sainte-Foy (UNESCO). Meisterwerk romanischer Kunst! Schatzkammer mit Goldstatuen.",
        details: "~2h von Toulouse. Absolut einzigartig!",
        routeLink: "https://www.google.com/maps/place/Conques"
    },
    {
        id: 807,
        title: "Saint-Bertrand-de-Comminges",
        type: "stadt",
        lat: 43.026, lng: 0.571,
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Römisches Erbe + Kathedrale!",
        description: "Antike römische Stadt + mittelalterliche Kathedrale. UNESCO-Welterbe der Jakobswege.",
        details: "~1,5h von Toulouse. Geschichte pur!",
        routeLink: "https://www.google.com/maps/place/Saint-Bertrand-de-Comminges"
    },
    {
        id: 808,
        title: "Lautrec",
        type: "stadt",
        lat: 43.707, lng: 2.138,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Knoblauch-Hauptstadt!",
        description: "Mittelalterliches Dorf & Heimat des rosa Knoblauchs. Windmühle, Fachwerkhäuser.",
        details: "~1h von Toulouse. Plus Beaux Villages!",
        routeLink: "https://www.google.com/maps/place/Lautrec"
    },
    {
        id: 809,
        title: "Fourcès",
        type: "stadt",
        lat: 43.992, lng: 0.228,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Einziges Runddorf Gascogne!",
        description: "Einzigartiges kreisförmiges Dorf mit Arkadenplatz. Bilderbuch-Gascogne!",
        details: "~1,5h von Toulouse. Unique!",
        routeLink: "https://www.google.com/maps/place/Fourcès"
    },
    {
        id: 810,
        title: "Penne",
        type: "stadt",
        lat: 44.073, lng: 1.733,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Ruinen auf dem Felsen!",
        description: "Dramatische Burgruine auf Felssporn über der Aveyron. Mittelalterliches Dorf am Hang.",
        details: "~1h von Toulouse. Fotogen!",
        routeLink: "https://www.google.com/maps/place/Penne+Tarn"
    },
    {
        id: 811,
        title: "Rieux-Volvestre",
        type: "stadt",
        lat: 43.252, lng: 1.196,
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Rosa Backsteinstadt!",
        description: "Historische Bischofsstadt mit pink-rotem Backstein. Prächtige Kathedrale, Stadttore.",
        details: "~45min von Toulouse. Plus Beaux Détours!",
        routeLink: "https://www.google.com/maps/place/Rieux-Volvestre"
    },

    // === TARBES / LOURDES REGION ===

    {
        id: 820,
        title: "Pic du Midi de Bigorre",
        type: "panorama",
        lat: 42.937, lng: 0.142,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Legendärer Gipfel 2877m!",
        description: "Observatorium mit 360° Panorama über die Pyrenäen! Sternwarte, Planetarium, 'Ponton dans le Ciel' Glasbrücke.",
        details: "~2h von Toulouse. Seilbahn von La Mongie.",
        routeLink: "https://www.picdumidi.com/"
    },
    {
        id: 821,
        title: "Cirque de Gavarnie",
        type: "schlucht",
        lat: 42.696, lng: -0.009,
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ UNESCO Welterbe!",
        description: "Spektakulärer Gebirgskessel mit Europas höchstem Wasserfall (423m)! Zu Fuß, Esel oder Pferd erreichbar.",
        details: "~2,5h von Toulouse. Absolutes Naturwunder!",
        routeLink: "https://www.google.com/maps/place/Cirque+de+Gavarnie"
    },
    {
        id: 822,
        title: "Pont d'Espagne & Lac de Gaube",
        type: "panorama",
        lat: 42.838, lng: -0.131,
        image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★★ Türkiser Bergsee!",
        description: "Spektakuläre Wasserfälle + kristallklarer Bergsee auf 1.725m. Spiegelt den Vignemale-Gipfel!",
        details: "~2h von Toulouse. Sessellift oder Wanderung.",
        routeLink: "https://www.cauterets.com/pont-despagne/"
    },
    {
        id: 823,
        title: "Cauterets (Thermalstadt)",
        type: "stadt",
        lat: 42.889, lng: -0.114,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Thermen + Berge!",
        description: "Historischer Kurort mit Thermalbädern. Berühmte Berlingots-Bonbons! Tor zum Nationalpark.",
        details: "~2h von Toulouse. Wellness + Wandern!",
        routeLink: "https://www.cauterets.com/"
    },
    {
        id: 824,
        title: "Cirque de Troumouse",
        type: "schlucht",
        lat: 42.729, lng: 0.058,
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Geheimtipp-Kessel!",
        description: "Größter Gebirgskessel der Pyrenäen! Weniger touristisch als Gavarnie. Murmeltier-Paradies!",
        details: "~2,5h von Toulouse. Auto bis oben!",
        routeLink: "https://www.google.com/maps/place/Cirque+de+Troumouse"
    },
    {
        id: 825,
        title: "Grottes de Bétharram",
        type: "hoehle",
        lat: 43.097, lng: -0.206,
        image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Höhle mit Boot + Zug!",
        description: "Riesige Tropfsteinhöhle über 5 Etagen! Bootsfahrt auf unterirdischem Fluss + Minizug.",
        details: "~1,5h von Toulouse. Einzigartig!",
        routeLink: "https://www.betharram.com/"
    },
    {
        id: 826,
        title: "Lourdes (Wallfahrtsort)",
        type: "stadt",
        lat: 43.095, lng: -0.048,
        image: "https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Weltberühmter Pilgerort!",
        description: "Grotte von Massabielle, Basilika, Kreuzweg. Zweitgrößter Tourismusort Frankreichs nach Paris!",
        details: "~1,5h von Toulouse.",
        routeLink: "https://www.lourdes-infotourisme.com/"
    },
    {
        id: 827,
        title: "Pic du Jer (Lourdes)",
        type: "panorama",
        lat: 43.077, lng: -0.026,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Standseilbahn-Panorama!",
        description: "Panoramablick über Lourdes, Tarbes und die Pyrenäen. Historische Standseilbahn seit 1900.",
        details: "In Lourdes. Schnell erreichbar!",
        routeLink: "https://www.google.com/maps/place/Pic+du+Jer"
    },
    {
        id: 828,
        title: "Brèche de Roland",
        type: "schlucht",
        lat: 42.694, lng: -0.038,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Legendäres Felstor!",
        description: "40m hohe, 100m breite Felsspalte in 2804m Höhe. Der Legende nach von Roland mit Schwert geschlagen!",
        details: "~2,5h + Wanderung. Für Erfahrene!",
        routeLink: "https://www.google.com/maps/place/Brèche+de+Roland"
    },
    {
        id: 829,
        title: "Lac d'Ayous",
        type: "panorama",
        lat: 42.857, lng: -0.469,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ Pic du Midi d'Ossau Spiegel!",
        description: "Bergseen-Kette mit perfekter Spiegelung des Pic du Midi d'Ossau. Eines der schönsten Wanderziele!",
        details: "~2h von Toulouse + Wanderung.",
        routeLink: "https://www.google.com/maps/place/Lac+d'Ayous"
    }
];