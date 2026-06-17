# Design Document — Fandi Bayu Portfolio

## 1. Project Overview

A personal portfolio website for **Fandi Bayu**, a UI/UX Designer & Web Designer based in Jakarta, Indonesia. The site showcases selected work (case studies), interactive prototypes, writing, testimonials, and provides contact/resume download functionality. It supports bilingual content (English & Indonesian).

- **Domain:** `fandibayu.com`
- **Version:** 1.0.0

---

## 2. Technology Stack

| Layer            | Technology                                |
|------------------|-------------------------------------------|
| Framework        | Vue 3 (Composition API, `<script setup>`) |
| Build Tool       | Vite 5                                    |
| Language         | TypeScript 5                              |
| Styling          | Tailwind CSS 3 + custom design tokens     |
| Routing          | Vue Router 4 (history mode)               |
| i18n             | vue-i18n 9 (Composition API mode)         |
| Head/Meta        | @vueuse/head                              |
| Icons            | Font Awesome 6 (SVG core + vue-fontawesome) |
| Font             | IBM Plex Sans (Google Fonts)              |
| Post-processing  | PostCSS + Autoprefixer                    |

---

## 3. Architecture

### 3.1 Application Bootstrap (`src/main.ts`)

```
createApp(App)
  .use(router)      // Vue Router — SPA routing
  .use(i18n)        // vue-i18n — bilingual support
  .use(head)        // @vueuse/head — dynamic <head> management
  .component('FontAwesomeIcon', ...) // global icon component
  .mount('#app')
```

### 3.2 Layout Structure

```
App.vue
└── LayoutView.vue
    ├── TheNavbar.vue        (sticky header, scroll-aware)
    ├── <RouterView />       (page content)
    ├── TheFooter.vue        (scroll-to-top, social links, nav)
    └── LanguageToggle.vue   (fixed bottom-right pill)
```

### 3.3 Directory Structure

```
src/
├── assets/           # Static assets (CSS, images, resume HTML)
├── components/       # Reusable UI components
├── composables/      # Shared logic (useHead, useReveal)
├── data/             # Static data (projects, prototypes, testimonials, posts)
├── i18n/             # Internationalization config + locale JSON files
├── plugins/          # Font Awesome icon library setup
├── router/           # Vue Router configuration
├── views/            # Page-level components (routed)
├── App.vue           # Root component
└── main.ts           # Application entry point
```

---

## 4. Routing

| Path             | Name        | View              | Description                       |
|------------------|-------------|-------------------|-----------------------------------|
| `/`              | Home        | HomeView          | Landing page with all sections    |
| `/work`          | Work        | HomeView          | Alias — same as Home              |
| `/work/:slug`    | CaseStudy   | CaseStudyView     | Individual project case study     |
| `/about`         | About       | AboutView         | Bio, values, experience, tools    |
| `/writing`       | Writing     | WritingView       | Blog posts / articles list        |
| `/contact`       | Contact     | ContactView       | Contact info + social links       |
| `/resume`        | Resume      | ResumeView        | Resume download page              |

**Scroll behavior:** Restores saved position, smooth-scrolls to hash anchors, or scrolls to top.

**Locale sync:** A `beforeEach` guard calls `syncLocaleFromQuery()` to read `?lang=en|id` from the URL.

---

## 5. Design System

### 5.1 Color Palette

| Token            | Value       | Usage                                |
|------------------|-------------|--------------------------------------|
| `surface`        | `#f1f5f9`   | Backgrounds, cards (slate-100)       |
| `ink`            | `#1a1a1a`   | Primary text                         |
| `ink-muted`      | `#5c5c5c`   | Secondary text                       |
| `ink-soft`       | `#2d2d2d`   | Tertiary text / hover states         |
| `accent`         | `#c17f59`   | Primary accent (warm copper)         |
| `accent-hover`   | `#a86b47`   | Accent hover state                   |
| `border`         | `#e5e5e5`   | Default borders                      |
| `border-strong`  | `#d4d4d4`   | Emphasized borders                   |

### 5.2 Typography

- **Font family:** IBM Plex Sans (300–700 weights)
- **Fallback:** `system-ui`, `sans-serif`
- **Base styles (Tailwind `@layer base`):**
  - `h1`: 4xl / 5xl / 6xl, bold, tracking-tight
  - `h2`: 2xl / 3xl / 4xl, semibold
  - `h3`: xl / 2xl, semibold

### 5.3 Spacing & Layout

- **Container:** Centered, max-width `1400px` (2xl), with responsive padding (1.5rem–3rem)
- **Section padding:** `py-16 / py-20 / py-24` (responsive) via `SectionWrapper`
- **Custom spacing:** `18` (4.5rem), `22` (5.5rem), `30` (7.5rem)
- **Border radius:** `2xl` (1rem), `3xl` (1.5rem), `4xl` (2rem)

### 5.4 Shadows

| Token        | Value                               | Usage              |
|-------------|--------------------------------------|--------------------|
| `soft`       | `0 2px 12px rgba(0,0,0,0.04)`       | Subtle elevation   |
| `card`       | `0 4px 24px rgba(0,0,0,0.06)`       | Card default       |
| `card-hover` | `0 12px 40px rgba(0,0,0,0.08)`      | Card hover state   |

### 5.5 CSS Utilities (Custom)

| Class             | Purpose                                          |
|-------------------|--------------------------------------------------|
| `.link-underline` | Animated underline on hover (accent color)       |
| `.focus-ring`     | Accessible focus-visible ring (accent + offset)  |
| `.reveal`         | Scroll-triggered fade-in + translateY animation  |
| `.scrollbar-hide` | Hide scrollbar while keeping scroll functionality |
| `.scroll-to-top-icon` | Floating chevron with infinite float animation |

---

## 6. Components

### 6.1 TheNavbar
- **Sticky header** that transforms on scroll (>80px):
  - Default: full-width bar with bottom border
  - Scrolled: centered pill with rounded corners + shadow
- **Left:** Avatar + name (name appears after scroll via `<Transition>`)
- **Right (desktop):** Nav links (Work, About, Writing) + Resume download button
- **Active state:** Black pill background for current route
- **Mobile:** Hamburger menu → full-height slide-in drawer from right with backdrop blur
- **Social links** displayed in mobile drawer

### 6.2 TheFooter
- Scroll-to-top button (arched shape, centered, with floating chevron animation)
- Tagline text, social icon row, email link
- Footer navigation links with animated underline

### 6.3 LanguageToggle
- Fixed position (bottom-right corner)
- Oval pill with sliding dark indicator
- EN/ID toggle buttons; active = white text on dark pill
- Persists choice to `localStorage` (`portfolio-lang`)

### 6.4 SectionWrapper
- Generic section container with consistent max-width, padding, and vertical spacing
- Accepts `id` and `class` props

### 6.5 ProjectCard
- Displays a single project with cover image, metadata, tags, and link
- Used in both FeaturedCaseStudies and WorkView

### 6.6 FeaturedCaseStudies
- Tab-based filtering: All / Dashboard / Web App / Landing Page / Mobile App
- Category assignment via tag priority system (dashboard > mobile > web-app > landing)
- "All" shows first 8 projects; category tabs show up to 2

### 6.7 PrototypeCard
- Displays interactive prototype thumbnails with "Try" or "View" action

### 6.8 SquareAccents
- Decorative grid pattern (5 cols x 10 rows) with irregular diagonal placement
- Left and right variants; hidden on mobile (`sm:` breakpoint)

---

## 7. Pages / Views

### 7.1 HomeView (Landing Page)
Sections in order:
1. **Hero** — Greeting, intro copy, CTA buttons (About Me + Download Resume), thumbnail grid with lightbox
2. **Featured Case Studies** — Tabbed project cards
3. **Prototypes** — Grid of interactive prototype cards
4. **Upwork / Work Together** — Dark section with Upwork stats + profile link
5. **Writing** — Latest 3 blog post previews
6. **Testimonials** — Horizontal scroll carousel (full-width)

### 7.2 AboutView
Sections:
1. Photo + greeting + intro paragraphs
2. Values (3 numbered cards)
3. Specialties grid (8 items, 4-col)
4. Languages spoken (Indonesian native, English proficient)
5. Software/tools (Figma, Cursor, ChatGPT, Lovable)
6. Design process (4 steps)
7. Working experience timeline (Solusi247, Upwork, Fiverr, PrimeSkills)
8. CTA to contact page

### 7.3 CaseStudyView
- Dynamic route (`/work/:slug`)
- Header: back link, title, subtitle, metadata (role, tools, timeline)
- Cover image
- Content sections: Overview, Problem, Constraints, Approach, Key Screens, Outcome, Reflection
- Sticky sidebar TOC (desktop)
- Image gallery with lightbox
- Prev/Next project navigation
- Redirects to `/work` if slug not found

### 7.4 WritingView
- Lists all blog posts (5 dummy posts sourced from i18n translations)
- Each card: date, source, title, excerpt, read-more link

### 7.5 ContactView
- Centered layout: heading, tagline, email link, social icon buttons

### 7.6 ResumeView
- Centered layout with download button for PDF resume

---

## 8. Data Layer

All data is static and defined in `src/data/`:

| File              | Interface     | Description                             |
|-------------------|---------------|-----------------------------------------|
| `projects.ts`     | `Project`     | 9 projects with slug, title, tags, status, cover image, tools, timeline |
| `prototypes.ts`   | `Prototype`   | 6 interactive prototypes with thumbnails |
| `testimonials.ts` | `Testimonial` | 5 client testimonials with quotes and avatars |
| `posts.ts`        | —             | Blog post data (used alongside i18n translations) |

**Project statuses:** `Live`, `NDA`, `Coming soon`

**Helper functions:**
- `getProjectBySlug(slug)` — Find a project by slug
- `getNextProject(slug)` / `getPrevProject(slug)` — Adjacent project navigation

---

## 9. Internationalization (i18n)

- **Locales:** English (`en.json`), Indonesian (`id.json`)
- **Default locale:** English
- **Locale resolution priority:**
  1. `localStorage` (`portfolio-lang` key)
  2. URL query parameter (`?lang=en|id`)
  3. Fallback: `en`
- **Composition API mode** (`legacy: false`)
- **Fallback locale:** English
- **Sync on navigation:** `syncLocaleFromQuery()` in router guard

---

## 10. SEO & Meta Tags

### 10.1 Composable: `usePageMeta()`
Sets per-page:
- `<title>`, `<meta description>`
- Open Graph tags (title, description, image, URL, type)
- Twitter Card tags (summary_large_image)
- Canonical URL
- Optional `noindex` support

### 10.2 Composable: `useJsonLd()`
Injects JSON-LD structured data:
- `Person` schema on homepage (name, job title, URL, social profiles, address)
- `WebSite` schema on homepage
- `CreativeWork` schema on case study pages

### 10.3 Static SEO Files
- `public/robots.txt`
- `public/sitemap.xml`
- OG image: `/og-image.jpg` (referenced in useHead)

---

## 11. Animations & Interactions

### 11.1 Scroll Reveal (`useReveal`)
- Uses `IntersectionObserver` (threshold: 0.1, rootMargin: -40px bottom)
- Elements with `.reveal` class fade in + slide up when entering viewport
- Applied per-view via `useReveal(sectionRef)`

### 11.2 Lightbox
- Implemented in HomeView (hero thumbnails) and CaseStudyView (gallery)
- `<Teleport>` to body with backdrop blur
- Smooth scale + opacity transitions
- Close on Escape key, backdrop click, or close button
- Body scroll lock when open

### 11.3 Navbar Scroll Transform
- Tracks `window.scrollY` with passive listener
- Transitions between flat bar and floating pill at 80px threshold
- Name text slides in with translate + opacity transition

### 11.4 Language Toggle
- Sliding pill indicator with CSS `left` transition (300ms ease-out)

### 11.5 Other
- Link underline animation (width 0 → 100% on hover)
- Scroll-to-top icon: infinite float animation + hover scale
- Testimonial carousel: horizontal scroll with `scrollbar-hide`

---

## 12. Build & Performance

### 12.1 Code Splitting
- **Vendor chunk:** `vue-vendor` = `vue` + `vue-router` + `vue-i18n`
- **Route-level lazy loading:** All views use dynamic `import()` for code splitting

### 12.2 Asset Optimization
- Images: lazy loading (`loading="lazy"`), fallback sources via `data-fallback`
- Font preconnect to Google Fonts in both `index.html` and `App.vue`
- Font Awesome tree-shaking: only used icons registered in `plugins/fontawesome.ts`

### 12.3 Scripts

| Command    | Description                  |
|------------|------------------------------|
| `npm run dev`     | Start Vite dev server  |
| `npm run build`   | Type-check + production build |
| `npm run preview` | Preview production build |

---

## 13. Accessibility

- **Focus management:** `.focus-ring` utility on all interactive elements (focus-visible ring with accent color)
- **ARIA attributes:** `aria-label`, `aria-modal`, `aria-expanded`, `aria-hidden` used throughout
- **Semantic HTML:** `<header>`, `<main>`, `<footer>`, `<article>`, `<nav>`, `<section>`, `<blockquote>`, `<cite>`
- **Keyboard navigation:** Escape closes lightbox and modals
- **Image alt text:** All images have descriptive alt text
- **Color contrast:** Dark ink (#1a1a1a) on light backgrounds for readability

---

## 14. External Integrations

| Service      | Purpose                      | Implementation         |
|-------------|------------------------------|------------------------|
| Google Fonts | IBM Plex Sans typeface       | `<link>` preconnect    |
| Upwork       | Freelance profile link       | External anchor        |
| LinkedIn     | Social profile               | Font Awesome brand icon|
| Behance      | Portfolio showcase           | Font Awesome brand icon|
| Dribbble     | Design shots                 | Font Awesome brand icon|
| Medium       | Blog / writing               | Font Awesome brand icon|
| Unsplash     | Placeholder images           | Direct URL references  |
| SimpleIcons  | Tool brand icons (About page)| CDN URLs               |

---

## 15. Environment Variables

| Variable         | Default                      | Purpose              |
|------------------|------------------------------|----------------------|
| `VITE_SITE_URL`  | `https://fandibayu.com`     | Canonical site URL for meta tags and OG images |

Defined in `.env.example` as a template.
