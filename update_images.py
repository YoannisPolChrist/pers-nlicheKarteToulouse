import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all entries and update their images
# Pattern: find title followed by image within same entry block
pattern = r'(title:\s*"([^"]+)"[^}]*?)(image:\s*")[^"]+(")'

def replace_image(match):
    full_match = match.group(1)
    title = match.group(2)
    prefix = match.group(3)
    suffix = match.group(4)
    
    # Clean title for keywords
    keywords = title.replace('(', ' ').replace(')', ' ').replace('&', ' ')
    keywords = keywords.replace('★', '').replace('/', ' ').replace('-', ' ')
    keywords = keywords.replace("'", '').replace(',', ' ')
    # Get first 3 words, clean and join
    words = [w.strip() for w in keywords.split() if w.strip() and len(w) > 2][:3]
    keyword_str = ','.join(words)
    
    new_url = f'https://source.unsplash.com/600x400/?{keyword_str}'
    print(f"Updated: {title} -> {keyword_str}")
    
    return full_match + prefix + new_url + suffix

new_content = re.sub(pattern, replace_image, content, flags=re.DOTALL)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("\nDone! All images updated.")
