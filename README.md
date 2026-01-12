# Kadek Dodik Wirawan — Portfolio (GitHub Pages)

Live site: https://kadekdodikwirawan.github.io/

## Overview
Personal portfolio for Full Stack Architecture and Cloud Engineering work. Built with a modern, performance-focused stack and a clean, glass UI theme. Optimized for SEO and social sharing.

## Tech Stack
- HTML + Tailwind CSS (CDN)
- Vanilla JavaScript
- Isotope (masonry/grid layout and reflow)
- Custom styles in `assets/css/style.css`
- SEO: meta tags + JSON-LD Schema

## Project Structure
```
index.html
assets/
	css/
		style.css
	images/
	js/
		isotope.pkgd.min.js
		main.js
```

## Key Features
- Responsive layout with dark glass aesthetic
- Portfolio grid with Isotope masonry (`.grid-projects` / `.grid-item`)
- Mobile navigation and smooth section navigation
- Rich metadata (Open Graph, Twitter cards) + Person schema

## Getting Started (Local Preview)
Quick ways to view the site locally:

1) Open directly: double-click `index.html` in your file explorer.

2) Serve locally with Python (Windows/macOS/Linux):
```bash
python -m http.server 5500
# then visit: http://localhost:5500/
```

3) VS Code: use the “Live Server” extension on `index.html`.

## Editing Content
- Hero, About, Services, and Contact sections live in [index.html](index.html).
- Portfolio items are cards inside the `.grid-projects` container in [index.html](index.html). Each card uses the `.grid-item` class.
- Isotope initialization is in [assets/js/main.js](assets/js/main.js). Adjust layout options or reflow timing there.
- Styles are in [assets/css/style.css](assets/css/style.css). Tune spacing, colors, borders, and effects.
- Update SEO meta and social image in [index.html](index.html) (`meta` tags, JSON-LD block).

## Deployment
This is a user/organization GitHub Pages root repository. Pushing changes to the default branch updates https://kadekdodikwirawan.github.io/ automatically.

## Credits
- Tailwind CSS (CDN)
- Isotope by Metafizzy
