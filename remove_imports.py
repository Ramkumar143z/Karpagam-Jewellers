import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove bare imports
    new_content = re.sub(r"import\s+.*?from\s+['\"]gsap.*?['\"];?\n", '', content)
    new_content = re.sub(r"import\s+['\"].*?\.css['\"];?\n", '', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filepath}')

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.js'):
            process_file(os.path.join(root, file))
