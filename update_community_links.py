# Update with REAL community and forum sources
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Update each fossil location with real community links
updates = [
    # Boussens - Real Géoforum thread
    (r'(id: 117,.*?title: "Petites Pyrénées \(Boussens\)".*?routeLink: )"[^"]*"',
     r'\1"https://www.geoforum.fr/topic/27746-département-haute-garonne-sites-fossiles/"',
     re.DOTALL),
    
    # Aurignac - Real Visorando hike
    (r'(id: 119,.*?title: "Aurignac.*?routeLink: )"[^"]*"',
     r'\1"https://www.visorando.com/randonnee-sentiers-des-fossiles-et-des-bruyeres-a/"',
     re.DOTALL),
]

new_content = content
for pattern, replacement, flags in updates:
    new_content = re.sub(pattern, replacement, new_content, flags=flags)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Updated with REAL community sources!")
print("\nAuthentic links:")
print("• Géoforum: Haute-Garonne fossils discussion thread")
print("• Visorando: Aurignac fossil trail GPS route")
print(f"\nTotal chars: {len(new_content)}")
