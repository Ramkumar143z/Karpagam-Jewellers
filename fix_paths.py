import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace /assets/ with ./assets/
    new_content = re.sub(r'(?<=[\"\'\(])/assets/', './assets/', content)
    # Replace /webassets/ with ./webassets/
    new_content = re.sub(r'(?<=[\"\'\(])/webassets/', './webassets/', new_content)
    # Replace /src/ with ./src/
    new_content = re.sub(r'(?<=[\"\'\(])/src/', './src/', new_content)
    # Replace /vite.svg with ./vite.svg
    new_content = re.sub(r'(?<=[\"\'])/vite\.svg', './vite.svg', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filepath}')

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root:
        continue
    for file in files:
        if file.endswith(('.html', '.css', '.js')):
            process_file(os.path.join(root, file))
