# Zhao Wang — Personal Website

Bilingual (English / 中文) personal academic website for **Zhao Wang (王曌)**, transport
data scientist & GIS researcher at the Institute for Transport Studies, University of Leeds.

- Warm, Claude-inspired palette (ivory + clay/coral); editorial serif headings.
- Career presented in **three parts** (Civil & Structural Engineering → National Highways
  & TRL → University of Leeds / Horizon Europe).
- 18 journal + 5 conference publications with DOIs, filterable by type.
- EN / 中 language toggle (persists across reloads).

## Run locally

It loads React/Babel from a CDN, so use any static server (not a file:// double-click):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy (GitHub Pages)

Push this folder to a repo and enable **Settings → Pages → Deploy from a branch → main /(root)**.
The `.nojekyll` file is required so `_ds_bundle.js` (underscore prefix) is served.

## Edit content

All text and links live in `site-data.js` (bilingual `{ en, zh }` fields). Images are in
`assets/`. Set `talk.youtubeId` to embed a talk video.

Built on the *Zhao Wang Research* design system.
