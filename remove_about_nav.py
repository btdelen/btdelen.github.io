import os

files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'about.html' and f != 'index.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    # Remove desktop nav about link
    content = content.replace(
        '                <a href="about.html" class="nav-link" data-i18n="nav.about">About</a>\n', ''
    )
    content = content.replace(
        '                <a href="about.html" class="nav-link active" data-i18n="nav.about">About</a>\n', ''
    )
    
    # Remove mobile nav about link
    content = content.replace(
        '            <a href="about.html" class="mobile-nav-link" data-i18n="nav.about">About</a>\n', ''
    )
    content = content.replace(
        '            <a href="about.html" class="mobile-nav-link active" data-i18n="nav.about">About</a>\n', ''
    )
    
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print(f"Updated {f}")

print("Done!")
