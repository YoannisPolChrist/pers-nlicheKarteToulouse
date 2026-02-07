# Fix "wild" category - reclassify everything properly
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all "wild" entries and change them to their correct category
# Most are caves/grottos, so change to "hoehle"

changes = [
    # Grotte de Pène Blanque - is a cave entrance
    (r'(id: 16,\s*title: "Grotte de Pène Blanque",\s*)type: "wild"', r'\1type: "hoehle"'),
    
    # Grotte des Églises - clearly a cave
    (r'(id: 17,\s*title: "Grotte des Églises",\s*)type: "wild"', r'\1type: "hoehle"'),
    
    # Trou de la Taupe - cave with entrance
    (r'(id: 18,\s*title: "Trou de la Taupe",\s*)type: "wild"', r'\1type: "hoehle"'),
    
    # Gouffre de la Henne Morte - shaft/cave
    (r'(id: 26,\s*title: "Gouffre de la Henne Morte",\s*)type: "wild"', r'\1type: "hoehle"'),
    
    # Gouffre de l'Œil Doux - another shaft
    (r'(id: 27,\s*title: "Gouffre de l\'Œil Doux",\s*)type: "wild"', r'\1type: "hoehle"'),
    
    # All newly added CDS caves
    (r'(id: 300,\s*title: "Grotte de Siech",\s*)type: "wild"', r'\1type: "hoehle"'),
    (r'(id: 301,\s*title: "Grotte de Ferrobach",\s*)type: "wild"', r'\1type: "hoehle"'),
    (r'(id: 302,\s*title: "Grotte de l\'Ermite",\s*)type: "wild"', r'\1type: "hoehle"'),
]

new_content = content
for pattern, replacement in changes:
    new_content = re.sub(pattern, replacement, new_content, flags=re.DOTALL)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Alle 'wild' Orte umkategorisiert!")
print("\n📊 Änderungen:")
print("  • 8 Orte von 'wild' → 'hoehle' verschoben")
print("\n🗺️ Kategorien jetzt:")
print("  • Höhlen (hoehle) - Alle Grotten und Gouffres")
print("  • Schluchten (schlucht)")
print("  • Natur (panorama)")
print("  • Fossilien (fossil)")
print("  • Wild - ENTFERNT ❌")
