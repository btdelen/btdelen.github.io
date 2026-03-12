import os
import re

files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Desktop Nav
    content = re.sub(
        r'(<a href="projects.html" class="nav-link(?: active)?" data-i18n="nav.projects">.*?</a>)\n\s*(?:<a href="pcb-circuit-design.html".*?</a>\n\s*)?',
        r'\1\n                <a href="pcb-circuit-design.html" class="nav-link" data-i18n="nav.pcb">PCB Design</a>\n                <a href="ios-development.html" class="nav-link" data-i18n="nav.ios">iOS Development</a>\n                <a href="workshop.html" class="nav-link" data-i18n="nav.workshop">Workshop</a>\n                ',
        content
    )
    
    # Mobile Nav
    content = re.sub(
        r'(<a href="projects.html" class="mobile-nav-link(?: active)?" data-i18n="nav.projects">.*?</a>)\n\s*(?:<a href="pcb-circuit-design.html".*?</a>\n\s*)?',
        r'\1\n            <a href="pcb-circuit-design.html" class="mobile-nav-link" data-i18n="nav.pcb">PCB Design</a>\n            <a href="ios-development.html" class="mobile-nav-link" data-i18n="nav.ios">iOS Development</a>\n            <a href="workshop.html" class="mobile-nav-link" data-i18n="nav.workshop">Workshop</a>\n            ',
        content
    )
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Navigation updated successfully.")
