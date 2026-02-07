import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all location entries and update non-fossil routeLinks
lines = content.split('\n')
new_lines = []
current_title = None
current_type = None
in_entry = False

for i, line in enumerate(lines):
    # Track title
    title_match = re.search(r'title:\s*"([^"]+)"', line)
    if title_match:
        current_title = title_match.group(1)
    
    # Track type
    type_match = re.search(r'type:\s*"([^"]+)"', line)
    if type_match:
        current_type = type_match.group(1)
    
    # Update routeLink for non-fossil entries
    if 'routeLink:' in line and current_type and current_type != 'fossil' and current_title:
        # Create Google search URL
        search_term = current_title.replace(' ', '+').replace('&', '%26')
        new_link = f'https://www.google.com/search?q={search_term}&hl=de'
        # Replace the line
        line = re.sub(r'routeLink:\s*"[^"]+"', f'routeLink: "{new_link}"', line)
        print(f"Updated: {current_title} -> Google Search")
    
    # Reset at entry boundaries
    if line.strip() == '},':
        current_title = None
        current_type = None
    
    new_lines.append(line)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("\nDone! All non-fossil links updated to Google Search.")
