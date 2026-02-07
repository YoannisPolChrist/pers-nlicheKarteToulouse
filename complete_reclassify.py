# Complete reclassification - remove ALL "wild" category
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Process line by line to be safe
new_lines = []
in_location = False
location_buffer = []
location_id = None
location_title = None

for line in lines:
    # Check if we're at a new location
    if re.match(r'\s*id:\s*\d+', line):
        in_location = True
        location_buffer = [line]
        match = re.search(r'id:\s*(\d+)', line)
        if match:
            location_id = match.group(1)
    elif in_location:
        location_buffer.append(line)
        
        # Capture title
        title_match = re.search(r'title:\s*"([^"]+)"', line)
        if title_match:
            location_title = title_match.group(1)
        
        # Check if we hit the type line
        if 'type:' in line:
            # Determine correct type based on title/description
            correct_type = None
            title_lower = location_title.lower() if location_title else ""
            
            # Caves/Grottos
            if any(word in title_lower for word in ['grotte', 'gouffre', 'trou', 'schacht', 'höhle']):
                correct_type = 'hoehle'
            # Gorges/Canyons
            elif any(word in title_lower for word in ['gorge', 'schlucht', 'canyon']):
                correct_type = 'schlucht'
            # Natural phenomena (water sources, waterfalls, natural pools)
            elif any(word in title_lower for word in ['fontaine', 'cascade', 'quelle', 'source', 'œil doux']):
                correct_type = 'panorama'
            # Default to panorama if unsure
            else:
                correct_type = 'panorama'
            
            # Replace the type
            new_line = re.sub(r'type:\s*"wild"', f'type: "{correct_type}"', line)
            location_buffer[-1] = new_line
        
        # Check if location ends
        if line.strip().startswith('}'):
            new_lines.extend(location_buffer)
            location_buffer = []
            in_location = False
            location_id = None
            location_title = None
    else:
        new_lines.append(line)

# Write back
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("✅ Komplette Umkategorisierung abgeschlossen!")
print("\n📊 Alle 'wild' Orte wurden kategorisiert:")
print("  • Grotten/Gouffres/Höhlen → hoehle")
print("  • Schluchten/Gorges → schlucht")
print("  • Quellen/Wasserfälle/Naturphänomene → panorama")
print("\n🚫 'Wild'-Kategorie komplett entfernt")
