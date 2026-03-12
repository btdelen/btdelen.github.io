import os, re

files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    # 1. Add Home nav link at the start of desktop nav (if not already present)
    if 'data-i18n="nav.home"' not in content:
        content = content.replace(
            '<nav class="nav">\n                <a href="projects.html"',
            '<nav class="nav">\n                <a href="index.html" class="nav-link" data-i18n="nav.home">Home</a>\n                <a href="projects.html"'
        )
    
    # 2. Add Home nav link at the start of mobile nav (if not already present)
    if 'mobile-nav-link" data-i18n="nav.home"' not in content:
        content = content.replace(
            '<nav class="mobile-nav-links">\n            <a href="projects.html"',
            '<nav class="mobile-nav-links">\n            <a href="index.html" class="mobile-nav-link" data-i18n="nav.home">Home</a>\n            <a href="projects.html"'
        )
    
    # 3. Remove CV Download Button block from header
    # Pattern: from <!-- CV Download Button --> to the closing </a> + whitespace before </div>
    content = re.sub(
        r'\s*<!-- CV Download Button -->.*?Download CV\s*</a>',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Also remove mobile-cv button if present
    content = re.sub(
        r'\s*<a href="#" class="btn btn-primary cv-btn mobile-cv".*?Download CV</a>',
        '',
        content,
        flags=re.DOTALL
    )
    
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print(f"Updated {f}")

print("Done!")
