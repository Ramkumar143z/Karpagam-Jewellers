import os
import re

def fix_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('./assets/', './public/assets/')
    new_content = new_content.replace('./webassets/', './public/webassets/')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filepath}')

def fix_src(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('./assets/', '../public/assets/')
    new_content = new_content.replace('./webassets/', '../public/webassets/')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filepath}')

for file in os.listdir('.'):
    if file.endswith('.html'):
        fix_html(file)

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.css', '.js')):
            fix_src(os.path.join(root, file))
