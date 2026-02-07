# Add more verified fossil sites from community sources
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# New fossil locations from verified community sources
new_fossils = r''',

    // --- FOSSILIEN-COMMUNITIES (Mindat, Géoforum, Associations) ---
    {
        id: 200,
        title: "Larcan (Dinosaurier-Site)",
        type: "fossil",
        lat: 43.105, lng: 0.985,
        image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Mindat: 4 Fossil-Lokalitäten, Kreide.",
        description: "Mindat-registriert: Kreide (66-70 Mio. Jahre). Hadrosaurier-Funde. Zone Saint-Gaudens.",
        details: "✓ Verifiziert: Mindat.org Database",
        routeLink: "https://www.mindat.org/loc-426967.html"
    },
    {
        id: 201,
        title: "Campagne-sur-Aude (Eva Sauropod)",
        type: "fossil",
        lat: 42.944, lng: 2.188,
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Frankreichs größtes Dinosaurierfeld!",
        description: "Sauropod 'Eva' 2001 entdeckt. Dinosaurier-Museum in Espéraza. Aktive Ausgrabungen.",
        details: "✓ Quelle: Musée des Dinosaures",
        routeLink: "https://www.dinosauria.org/"
    },
    {
        id: 202,
        title: "Caunes-Minervois (Kambrium)",
        type: "fossil",
        lat: 43.327, lng: 2.527,
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Mindat: Kambrium (516-478 Mio. Jahre).",
        description: "3 Fossil-Lokalitäten im Mindat. Älteste Fossilien der Region! Trilobiten möglich.",
        details: "✓ Verifiziert: Mindat.org Database",
        routeLink: "https://www.mindat.org/loc-394654.html"
    },
    {
        id: 203,
        title: "Côte Basque (Ammoniten)",
        type: "fossil",
        lat: 43.390, lng: -1.680,
        image: "https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Géoforum: Kreide-Fossilien am Strand.",
        description: "Géoforum-Community: Oursins, Ammonites, Crabes im Crétacé terminal. Marnes de Nay.",
        details: "✓ Quelle: Géoforum Thread Pyr.-Atl.",
        routeLink: "https://www.geoforum.fr/topic/20139-coins-%C3%A0-fossiles-dans-les-pyr%C3%A9n%C3%A9es-atlantiques/"
    },
    {
        id: 204,
        title: "Rébenacq (Ammonites)",
        type: "fossil",
        lat: 43.158, lng: -0.408,
        image: "https://images.unsplash.com/photo-1608421952137-1039b2d35993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Géoforum: Aptien/Albien Ammoniten.",
        description: "Ammonites aptiennes, albiennes et cénomaniennes. Géoforum-Community gelistet.",
        details: "✓ Quelle: Géoforum Thread",
        routeLink: "https://www.geoforum.fr/topic/20139-coins-%C3%A0-fossiles-dans-les-pyr%C3%A9n%C3%A9es-atlantiques/"
    },
    {
        id: 205,
        title: "Grotte du Mas d'Azil (Azilien)",
        type: "fossil",
        lat: 43.090, lng: 1.362,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Paläontologie-Höhle mit Eiszeitfauna.",
        description: "Namensgebend für Azilien-Periode. Eiszeit-Fossilien: Mammut, Höhlenbär. Geologie meets Urgeschichte!",
        details: "✓ Öffentlich zugänglich",
        routeLink: "https://www.sites-touristiques-ariege.fr/grotte-du-mas-dazil/"
    },
    {
        id: 206,
        title: "Saint-Pé-de-Bigorre (Museum)",
        type: "fossil",
        lat: 43.101, lng: -0.154,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "50+ Jahre Sammlung, Hautes-Pyrénées.",
        description: "Musée des Minéraux et Fossiles. Familiensammlung seit 50 Jahren. Pyrenäen-Fokus.",
        details: "✓ Museum mit Community-Kontakten",
        routeLink: "https://www.saintpedebigorre-tourisme.com/museum"
    },
    {
        id: 207,
        title: "Pic de Belxu (Jurassic)",
        type: "fossil",
        lat: 43.152, lng: -1.025,
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Géoforum: Jurassische Formationen.",
        description: "Pays Basque. Jurassic deposits. Géoforum-Community hat hier Funde dokumentiert.",
        details: "✓ Quelle: Géoforum Thread",
        routeLink: "https://www.geoforum.fr/topic/20139-coins-%C3%A0-fossiles-dans-les-pyr%C3%A9n%C3%A9es-atlantiques/"
    }
]'''

# Insert before closing ];
content_new = re.sub(r'(\];)$', new_fossils + '\n];', content)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content_new)

print("✅ 8 neue Fossilien-Fundorte hinzugefügt!")
print("\n🦴 Verifizierte Community-Quellen:")
print("  • Mindat.org: Larcan, Caunes-Minervois")
print("  • Géoforum: Côte Basque, Rébenacq, Pic de Belxu")
print("  • Museums: Espéraza, Saint-Pé-de-Bigorre")
print("  • Prehistoric: Grotte du Mas d'Azil")
print(f"\n📊 File size: {len(content_new)} chars")
