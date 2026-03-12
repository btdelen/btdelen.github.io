import re, os

# 1. Fix coming soon description in ios-development.html, workshop.html, 3d-cad.html
for f in ['ios-development.html', 'workshop.html', '3d-cad.html']:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    # Add data-i18n to the coming soon description paragraph
    content = content.replace(
        '<p style="margin-top: 10px; max-width: 400px;">Content is currently being prepared. Please check\n                        back later.</p>',
        '<p data-i18n="projects.comingSoon.desc" style="margin-top: 10px; max-width: 400px;">Content is currently being prepared. Please check back later.</p>'
    )
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)

# 2. Add 3D CAD nav link to ALL html files
files = [f for f in os.listdir('.') if f.endswith('.html')]
for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    # Add 3D CAD after workshop in desktop nav (if not already present)
    if '3d-cad.html' not in content or f == '3d-cad.html':
        # Desktop nav
        content = re.sub(
            r'(<a href="workshop.html" class="nav-link(?:\s+active)?" data-i18n="nav.workshop">Workshop</a>)\n(\s*<a href="3d-cad.html)',
            r'\1\n\2',
            content
        )
        if 'href="3d-cad.html" class="nav-link"' not in content and 'href="3d-cad.html" class="nav-link active"' not in content:
            content = content.replace(
                '<a href="workshop.html" class="nav-link" data-i18n="nav.workshop">Workshop</a>\n                <a href="resume.html"',
                '<a href="workshop.html" class="nav-link" data-i18n="nav.workshop">Workshop</a>\n                <a href="3d-cad.html" class="nav-link" data-i18n="nav.cad">3D CAD</a>\n                <a href="resume.html"'
            )
            # Also for active workshop
            content = content.replace(
                '<a href="workshop.html" class="nav-link active" data-i18n="nav.workshop">Workshop</a>\n                <a href="resume.html"',
                '<a href="workshop.html" class="nav-link active" data-i18n="nav.workshop">Workshop</a>\n                <a href="3d-cad.html" class="nav-link" data-i18n="nav.cad">3D CAD</a>\n                <a href="resume.html"'
            )

        # Mobile nav
        if 'href="3d-cad.html" class="mobile-nav-link"' not in content and 'href="3d-cad.html" class="mobile-nav-link active"' not in content:
            content = content.replace(
                '<a href="workshop.html" class="mobile-nav-link" data-i18n="nav.workshop">Workshop</a>\n            <a href="resume.html"',
                '<a href="workshop.html" class="mobile-nav-link" data-i18n="nav.workshop">Workshop</a>\n            <a href="3d-cad.html" class="mobile-nav-link" data-i18n="nav.cad">3D CAD</a>\n            <a href="resume.html"'
            )
            content = content.replace(
                '<a href="workshop.html" class="mobile-nav-link active" data-i18n="nav.workshop">Workshop</a>\n            <a href="resume.html"',
                '<a href="workshop.html" class="mobile-nav-link active" data-i18n="nav.workshop">Workshop</a>\n            <a href="3d-cad.html" class="mobile-nav-link" data-i18n="nav.cad">3D CAD</a>\n            <a href="resume.html"'
            )
    
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)

# 3. Fix ios-development.html: remove "active" from projects nav-link
with open('ios-development.html', 'r', encoding='utf-8') as fh:
    content = fh.read()
content = content.replace(
    '<a href="projects.html" class="nav-link active" data-i18n="nav.projects">Projects</a>',
    '<a href="projects.html" class="nav-link" data-i18n="nav.projects">Projects</a>'
)
content = content.replace(
    '<a href="projects.html" class="mobile-nav-link active" data-i18n="nav.projects">Projects</a>',
    '<a href="projects.html" class="mobile-nav-link" data-i18n="nav.projects">Projects</a>'
)
with open('ios-development.html', 'w', encoding='utf-8') as fh:
    fh.write(content)

# 4. Fix workshop.html: remove "active" from projects nav-link
with open('workshop.html', 'r', encoding='utf-8') as fh:
    content = fh.read()
content = content.replace(
    '<a href="projects.html" class="nav-link active" data-i18n="nav.projects">Projects</a>',
    '<a href="projects.html" class="nav-link" data-i18n="nav.projects">Projects</a>'
)
content = content.replace(
    '<a href="projects.html" class="mobile-nav-link active" data-i18n="nav.projects">Projects</a>',
    '<a href="projects.html" class="mobile-nav-link" data-i18n="nav.projects">Projects</a>'
)
with open('workshop.html', 'w', encoding='utf-8') as fh:
    fh.write(content)

# 5. Fix 3d-cad.html: remove "active" from projects nav-link
with open('3d-cad.html', 'r', encoding='utf-8') as fh:
    content = fh.read()
content = content.replace(
    '<a href="projects.html" class="nav-link active" data-i18n="nav.projects">Projects</a>',
    '<a href="projects.html" class="nav-link" data-i18n="nav.projects">Projects</a>'
)
content = content.replace(
    '<a href="projects.html" class="mobile-nav-link active" data-i18n="nav.projects">Projects</a>',
    '<a href="projects.html" class="mobile-nav-link" data-i18n="nav.projects">Projects</a>'
)
with open('3d-cad.html', 'w', encoding='utf-8') as fh:
    fh.write(content)

print("Done: Coming soon text is now translatable and 3D CAD nav added everywhere.")
