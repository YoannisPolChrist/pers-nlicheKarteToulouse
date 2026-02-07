# Add hiking trails (gorges, waterfalls, lakes) + nearby fossil sites
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# New locations - hikes + fossils near Toulouse
new_locations = r''',

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
    }
]'''

# Insert before closing ];
content = re.sub(r'\];\s*$', new_locations + '\n];', content)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Wanderungen + nahe Fossilien-Orte hinzugefügt!")
print("\n🥾 WANDERUNGEN (12 Stück):")
print("  Cascades: Lac d'Oô (275m!), Cascade d'Ars (246m)")
print("  Seen: Espingo, Lac Vert, Bethmale, Garbet, Bleu")
print("  Gorges: Galamus, Frau, Saint-Georges, Pierre Lys")
print("\n🦴 FOSSILIEN NAHE TOULOUSE (6 Stück):")
print("  30-45min: Aurignac, Petites Pyrénées")
print("  1h: Saint-Gaudens (17 Sites!)")
print("  1,5h: Phosphatières, Crayssac (Dino-Spuren!)")
print("  Ariège: Col d'Ussat")
