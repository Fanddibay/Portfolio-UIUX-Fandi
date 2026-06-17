# Fandi Bayu — Portfolio

A premium portfolio website for **Fandi Bayu** (UI/UX Designer & Web Designer, Jakarta). Built with Vue 3, Vite, Vue Router, TailwindCSS, FontAwesome, and vue-i18n (EN/ID).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project structure

- **`/src/views/`** — Page components (Home, Work, About, Writing, Contact, Resume, Case Study).
- **`/src/components/`** — Reusable UI (Navbar, Footer, LanguageToggle, ProjectCard, etc.).
- **`/src/data/`** — Data files: `projects.ts`, `prototypes.ts`, `posts.ts`, `testimonials.ts`. Replace dummy content and image paths with your own.
- **`/src/i18n/`** — English and Indonesian locale JSON; language is persisted in `localStorage` and supports `?lang=en` / `?lang=id`.
- **`/src/composables/`** — `useHead.ts` (meta/SEO), `useReveal.ts` (scroll reveal).
- **`/public/`** — Static assets: `robots.txt`, `sitemap.xml`, `favicon.svg`. Add `resume-fandi-bayu.pdf` for the resume download and replace `og-image.jpg` for social previews.

## Replacing content

1. **Projects** — Edit `src/data/projects.ts`. Use real `coverImage` paths (e.g. in `/public/`) or full URLs.
2. **Prototypes** — `src/data/prototypes.ts`.
3. **Blog posts** — `src/data/posts.ts`.
4. **Testimonials** — `src/data/testimonials.ts`.
5. **Resume** — Place your PDF at `public/resume-fandi-bayu.pdf`.
6. **SEO** — Set `VITE_SITE_URL` in `.env` (e.g. `https://fandibayu.com`) for canonical URLs and sitemap. Update `public/sitemap.xml` and `public/robots.txt` with your production URL.

## Tech stack

- Vue 3 (Composition API, `<script setup>`)
- Vite 5
- Vue Router (history mode)
- TailwindCSS 3 (custom design tokens: surface, ink, accent, border)
- Font: IBM Plex Sans (Google Fonts)
- vue-i18n (EN/ID)
- @vueuse/head (meta, OG, Twitter, JSON-LD)
- FontAwesome (tree-shaken)

## SEO

- Per-route meta (title, description, canonical).
- Open Graph and Twitter Card meta tags.
- JSON-LD: Person, WebSite, CreativeWork (case studies).
- Semantic HTML, one H1 per page, lazy-loaded images.
- `robots.txt` and `sitemap.xml` in `/public/`.
