# Folio Editorial Template

Minimal editorial portfolio template for writers, photographers and researchers. Print inspired layout, generous whitespace, elegant serif type, solid colors only.

## Features

1. Hero with large serif headline, availability badge and entrance motion
2. Selected work list with hover preview image plus detail modal view
3. About section with portrait, stats and experience timeline
4. Services grid plus testimonials
5. Contact panel with mailto form fallback plus light and dark theme toggle

## Run

```bash
npm install && npm run dev
```

Then open the URL shown in the terminal, usually http://localhost:5173

## Build

```bash
npm install && npm run build
```

## Customization

* Edit copy and lists in `src/data.js` for work, timeline, services and testimonials
* Edit colors in `tailwind.config.js` under `colors` using paper, ink, accent, night
* Swap portrait and preview images in `src/components/About.jsx` and `src/data.js` with your own files in `public/`
* Theme choice is stored in local storage under `folio-theme`
* Contact email lives in `src/components/Contact.jsx` in the mailto link

## Assumptions

* Demo images use picsum.photos placeholders so the template looks complete before you add your own art
* Fonts use system serif and sans stacks so there is no webfont download at build time
* Contact form uses mailto on purpose so no backend is needed
