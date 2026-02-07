# Add new fossil sites near Toulouse
import re

# Read the current file
with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the last fossil entry and add new nearby Toulouse locations before ];
pattern = r'(        routeLink: "https://www\.ardeche-guide\.com/"\r?\n    }\r?\n\];)'

new_toulouse_fossils = r'''        routeLink: "https://www.ardeche-guide.com/"
    },

    // --- FOSSILIEN DIREKT UM TOULOUSE (Haute-Garonne) ---
    {
        id: 117,
        title: "Boussens (Carrière)",
        type: "fossil",
        lat: 43.258, lng: 1.060,
        image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Ammoniten & Seeigel – 40 Min von Toulouse.",
        description: "Bekannte Karriere südwestlich von Toulouse. Gute Fundstelle für Ammoniten und Seeigel (Échinides). Crétacé-Schichten.",
        details: "Forum-Empfehlung! Zugang nach Rücksprache.",
        routeLink: "https://www.geoforum.fr/"
    },
    {
        id: 118,
        title: "Martres-Tolosane",
        type: "fossil",
        lat: 43.200, lng: 1.008,
        image: "https://images.unsplash.com/photo-1594380643763-e380e227df5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Thanétien-Gastropoden.",
        description: "Berühmt für Gastropoden wie Hippochrenes teodorii aus dem Thanétien (Paläozän). Kleine Petites Pyrénées.",
        details: "Ca. 60 Mio. Jahre alt. Klassischer Fundort.",
        routeLink: "https://www.researchgate.net/"
    },
    {
        id: 119,
        title: "Aurignac (Sentier des Fossiles)",
        type: "fossil",
        lat: 43.218, lng: 0.882,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Offizieller Fossilien-Wanderweg.",
        description: "Markierter 'Sentier des Fossiles' um die Colline de Joulin. Geologischer Lehrpfad mit Fundmöglichkeiten.",
        details: "Ideal für Familien. Nur 1 Std. von Toulouse.",
        routeLink: "https://www.guide-toulouse-pyrenees.com/"
    },
    {
        id: 120,
        title: "Carrière de Larcan",
        type: "fossil",
        lat: 43.105, lng: 0.985,
        image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "K/T-Grenze sichtbar (Kreide-Tertiär).",
        description: "Wissenschaftlich bedeutend: Sichtbare Kreide-Tertiär-Grenze. Maastrichtien-Fossilien wie Otostoma retzii.",
        details: "Petites Pyrénées. Geologisch hochspannend!",
        routeLink: "https://www.researchgate.net/"
    },
    {
        id: 121,
        title: "Tourtouse",
        type: "fossil",
        lat: 43.403, lng: 1.512,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Leicht zugänglicher Fundort.",
        description: "Von Géoforum-Nutzern als einfach zugängliche Fundstelle in der Nähe von Toulouse empfohlen.",
        details: "Nur 30 Min nordöstlich. Guter Einstieg.",
        routeLink: "https://www.geoforum.fr/"
    },
    {
        id: 122,
        title: "Clermont-le-Fort",
        type: "fossil",
        lat: 43.448, lng: 1.418,
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Pleistozän-Megafauna.",
        description: "Fund von Megaloceros giganteus (Riesenhirsch). Pleistozän-Ablagerungen. Fossilien im Museum Toulouse.",
        details: "Nur 15 Min südlich von Toulouse!",
        routeLink: "https://www.mineralienatlas.de/"
    }
];'''

# Replace
new_content = re.sub(pattern, new_toulouse_fossils, content)

# Write
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Added 6 new fossil locations around Toulouse!")
print(f"File size: {len(new_content)} characters")
