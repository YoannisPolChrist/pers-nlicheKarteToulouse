# Script to insert fossil and deep cave data into data.js
import re

# Read the original file
with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the last location entry (Mirepoix) and insert before the closing ];
# We'll search for the pattern that ends the last entry
pattern = r'(        routeLink: "https://www\.ariege-pyrenees\.com/mirepoix/randonnee-les-crestes-et-le-chateau-de-lagarde/tabid/2619/offreid/693630f0-c2d1-4235-862d-949666f56c86"\r?\n    }\r?\n\];)'

new_data = r'''        routeLink: "https://www.ariege-pyrenees.com/mirepoix/randonnee-les-crestes-et-le-chateau-de-lagarde/tabid/2619/offreid/693630f0-c2d1-4235-862d-949666f56c86"
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
];'''

# Replace using regex
new_content = re.sub(pattern, new_data, content)

# Write the result
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added fossil locations and deep caves!")
print(f"Original file had {len(content)} characters")
print(f"New file has {len(new_content)} characters")
