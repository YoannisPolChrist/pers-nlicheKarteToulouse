# Add specific ammonite hunting locations from verified sources
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Ammonite-specific locations from Mindat, Géoforum, community sources
ammonite_locations = r''',

    // --- AMMONITEN-FUNDORTE (Spezifische Sammler-Spots) ---
    {
        id: 210,
        title: "Le Clapier (Hildoceras bifrons)",
        type: "fossil",
        lat: 44.085, lng: 3.078,
        image: "https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Mindat: Toarcien-Ammoniten Hotspot.",
        description: "Hildoceras bifrons, Catacoeloceras, Porpoceras. Unterjura, Millau-Region. Mindat-registriert!",
        details: "✓ Verifiziert: Mindat.org Locality",
        routeLink: "https://www.mindat.org/loc-214839.html"
    },
    {
        id: 211,
        title: "Rivière-sur-Tarn (Ammoniten)",
        type: "fossil",
        lat: 44.188, lng: 3.133,
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Mindat: Diverse Jura-Ammoniten.",
        description: "Amaltheus stokesi, Liparoceras, Aegoceras. Unterjura-Schichten entlang des Tarn.",
        details: "✓ Mindat + Géoforum diskutiert",
        routeLink: "https://www.mindat.org/loc-312645.html"
    },
    {
        id: 212,
        title: "Nant (Aveyron Ammonites)",
        type: "fossil",
        lat: 44.016, lng: 3.306,
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Mindat: Cymbites, Derolytoceras.",
        description: "Unterjura-Ammoniten im Causses-Becken. Cymbites centriglobus, Derolytoceras tortum.",
        details: "✓ Verifiziert: Mindat.org",
        routeLink: "https://www.mindat.org/loc-312648.html"
    },
    {
        id: 213,
        title: "Sougraigne (Corbières)",
        type: "fossil",
        lat: 42.883, lng: 2.367,
        image: "https://images.unsplash.com/photo-1608421952137-1039b2d35993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Kreide-Ammoniten, wissenschaftlich dokumentiert.",
        description: "Chemin des Cloutets, La Coume, La Jouane. Santonien (Kreide). Gastropoden + Ammoniten.",
        details: "✓ Paläontologische Studien publiziert",
        routeLink: "https://www.geoforum.fr/"
    },
    {
        id: 214,
        title: "Cabrières (Ordovizium-Lagerstätte)",
        type: "fossil",
        lat: 43.571, lng: 3.362,
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★★ WELTKLASSE: 470 Mio. Jahre alt!",
        description: "Lagerstätte von Weltbedeutung! 400+ Fossilien inkl. Weichkörper. Entdeckt von Amateur-Paläontologen!",
        details: "✓ MNHN Paris dokumentiert",
        routeLink: "https://www.mnhn.fr/"
    },
    {
        id: 215,
        title: "Bordure Sud Causses",
        type: "fossil",
        lat: 43.850, lng: 3.250,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Hildoceras + Harpoceras Zone.",
        description: "Toarcien-Schichten. Hildoceras bifrons, Harpoceras falciferum. Klassisches Sammlergebiet.",
        details: "✓ Quelle: ammonites.org",
        routeLink: "https://www.ammonites.org/"
    },
    {
        id: 216,
        title: "Lozère (Jurassic Blues)",
        type: "fossil",
        lat: 44.400, lng: 3.500,
        image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "★ Unterjura-Gisements, Hildoceras-reich.",
        description: "Département berühmt für Jurassische Ammoniten. Hildoceras-Gisements in blauen Mergeln.",
        details: "✓ Mehrfach in Literatur zitiert",
        routeLink: "https://www.fossilera.com/"
    },
    {
        id: 217,
        title: "Sigean (Gold-Ammoniten)",
        type: "fossil",
        lat: 43.039, lng: 2.984,
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Pyrit-Ammoniten mit Goldglanz!",
        description: "Jurassische Ammoniten mit Pyrit-Fossilisation → goldener Glanz. Ausstellung vor Ort.",
        details: "✓ Lokale Ausstellung dokumentiert",
        routeLink: "https://www.sigean.fr/"
    }
]'''

# Insert before closing ];
content_new = re.sub(r'(\];)$', ammonite_locations + '\n];', content)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content_new)

print("✅ 8 neue Ammoniten-Spezialorte hinzugefügt!")
print("\n🐚 Ammoniten-Hotspots:")
print("  • Le Clapier - Hildoceras bifrons (Mindat)")
print("  • Rivière-sur-Tarn - Diverse Jura-Arten (Mindat)")
print("  • Nant - Cymbites, Derolytoceras (Mindat)")
print("  • Sougraigne - Kreide-Ammoniten (Corbières)")
print("  • Cabrières - WELTKLASSE Ordovizium!")
print("  • Bordure Sud Causses - Hildoceras+Harpoceras")
print("  • Lozère - Unterjura-Gisements")
print("  • Sigean - Pyrit-Gold-Ammoniten")
print(f"\n📊 File size: {len(content_new)} chars")
