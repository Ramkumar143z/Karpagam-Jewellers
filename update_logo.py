import glob
html_files = glob.glob('*.html')
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('style="height: 30px; width: auto;"', 'style="height: 60px; width: auto;"')
    content = content.replace('style="height: 40px; width: auto;"', 'style="height: 80px; width: auto;"')
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print(f'Successfully updated logo sizes in {len(html_files)} files.')
