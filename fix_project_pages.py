import os

for f in ['project-ball-balancer.html', 'project-mainboard.html', 'project-robot-arm.html']:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    # Desktop nav: add 3D CAD after workshop if missing
    if 'href="3d-cad.html" class="nav-link"' not in content:
        content = content.replace(
            'href="workshop.html" class="nav-link" data-i18n="nav.workshop">Workshop</a>\n                <a href="resume.html"',
            'href="workshop.html" class="nav-link" data-i18n="nav.workshop">Workshop</a>\n                <a href="3d-cad.html" class="nav-link" data-i18n="nav.cad">3D CAD</a>\n                <a href="resume.html"'
        )
    
    # Mobile nav: add 3D CAD after workshop if missing
    if 'href="3d-cad.html" class="mobile-nav-link"' not in content:
        content = content.replace(
            'href="workshop.html" class="mobile-nav-link" data-i18n="nav.workshop">Workshop</a>\n            <a href="resume.html"',
            'href="workshop.html" class="mobile-nav-link" data-i18n="nav.workshop">Workshop</a>\n            <a href="3d-cad.html" class="mobile-nav-link" data-i18n="nav.cad">3D CAD</a>\n            <a href="resume.html"'
        )
    
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print(f"Updated {f}")

print("Done!")
