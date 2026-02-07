# Clean up and verify all locations with REAL community sources
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove ALL current fossil locations from Toulouse section
# We'll only keep the original distant ones with verified links
pattern = r',\s*// --- FOSSILIEN UM TOULOUSE.*?(?=\s*\];)'
content = re.sub(pattern, '', content, flags=re.DOTALL)

# Now add ONLY 100% verified locations with real working community links
verified_fossils = r''',

    // --- FOSSILIEN UM TOULOUSE (Verifizierte Community-Quellen) ---
    {
        id: 117,
        title: "Aurignac (Sentier des Fossiles)",
        type: "fossil",
        lat: 43.218, lng: 0.882,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        shortDesc: "Offizieller Fossilien-Wanderweg.",
        description: "6,2 km markierter Wanderweg 'Sentier des Fossiles et des Bruyères'. Geologischer Lehrpfad mit GPS-Track.",
        details: "✓ Verifiziert: Visorando-Community",
        routeLink: "https://www.visorando.com/randonnee-sentiers-des-fossiles-et-des-bruyeres-a-aurignac.html"
    }
]'''

# Insert before closing ];
content_final = re.sub(r'(\];)$', verified_fossils, content)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content_final)

print("✅ Cleaned up! Only verified community sources kept.")
print("\n🔍 Verified locations:")
print("  • Aurignac (Visorando GPS track)")
print("\n❌ Removed unverified locations:")
print("  • Boussens (no real forum thread found)")
print("  • Martres-Tolosane (no community source)")
print("  • Larcan (no community discussion)")
print("  • All other locations without real links")
print(f"\nFile size: {len(content_final)} chars")
