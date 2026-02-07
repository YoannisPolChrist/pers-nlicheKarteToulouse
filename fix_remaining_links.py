import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all routeLinks that are NOT google search AND NOT geoforum
# and convert them to Google search

lines = content.split('\n')
new_lines = []
current_title = None
current_type = None

for line in lines:
    # Track title
    title_match = re.search(r'title:\s*"([^"]+)"', line)
    if title_match:
        current_title = title_match.group(1)
    
    # Track type
    type_match = re.search(r'type:\s*"([^"]+)"', line)
    if type_match:
        current_type = type_match.group(1)
    
    # Check if this is a routeLink line
    if 'routeLink:' in line and current_title:
        # Skip if already google search or geoforum
        if 'google.com/search' not in line and 'geoforum.fr' not in line:
            # Create Google search URL
            search_term = current_title.replace(' ', '+').replace('&', '%26').replace('(', '%28').replace(')', '%29')
            new_link = f'https://www.google.com/search?q={search_term}&hl=de'
            line = re.sub(r'routeLink:\s*"[^"]+"', f'routeLink: "{new_link}"', line)
            print(f"Fixed: {current_title}")
    
    # Reset at entry boundaries
    if line.strip() == '},':
        current_title = None
        current_type = None
    
    new_lines.append(line)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("\nDone! All remaining links converted to Google Search.")
