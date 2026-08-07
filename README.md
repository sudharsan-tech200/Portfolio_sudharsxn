# Prathmesh Thorve — Developer Portfolio

A modern, animated portfolio site built with **React 18**, **TypeScript**, and **Vite**.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

**Live site:** _add your deployed URL here after deploying_

---

## Features

- **Scroll-triggered animations** — sections fade and slide into view using `IntersectionObserver`, with no animation library dependency
- **Animated ambient background** — three independently drifting gradient orbs rendered with pure CSS keyframes
- **Glassmorphism UI** — frosted-glass cards with `backdrop-filter` and hover elevation
- **Filterable skills** — animated proficiency bars that fill on scroll, filtered by Frontend / Backend / Cloud
- **Cursor spotlight** — the contact panel tracks mouse position and renders a radial glow beneath it
- **Scroll spy navigation** — the active nav item updates automatically as you scroll
- **Fully responsive** — CSS Grid `auto-fit` layouts adapt from mobile to widescreen
- **Accessible** — visible keyboard focus rings, semantic landmarks, and `prefers-reduced-motion` support
- **Zero runtime dependencies** beyond React — no UI kit, no CSS framework, ~51 kB gzipped

## Tech Stack

| Layer            | Choice                                   |
| ---------------- | ---------------------------------------- |
| Framework        | React 18                                 |
| Language         | TypeScript 5 (strict mode)               |
| Build tool       | Vite 5                                   |
| Styling          | CSS custom properties + inline styles    |
| Typography       | Inter, IBM Plex Mono                     |
| Deployment       | Vercel                                   |

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.tsx   # Drifting gradient orbs
│   ├── Nav.tsx                  # Fixed nav with scroll-spy state
│   ├── Hero.tsx                 # Landing section with staggered entrance
│   ├── Skills.tsx               # Filterable skills with animated bars
│   ├── Experience.tsx           # Career timeline
│   ├── Certifications.tsx       # Certification and education cards
│   ├── Contact.tsx              # Contact panel with cursor spotlight
│   ├── Footer.tsx
│   ├── GlassCard.tsx            # Reusable glassmorphism container
│   ├── SectionHeader.tsx        # Reusable section heading
│   └── Reveal.tsx               # Scroll-reveal wrapper
├── hooks/
│   └── index.ts                 # useInView, useMouseGlow, useScrolled
├── data/
│   └── portfolio.ts             # All content, fully typed
├── App.tsx                      # Layout + scroll-spy observer
├── main.tsx                     # Entry point
└── index.css                    # Design tokens, resets, keyframes
```

All content lives in a single typed file (`src/data/portfolio.ts`), so updating the site never requires touching component code.

## Getting Started

```bash
git clone https://github.com/prathmeshthorve/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Open http://localhost:5173.

### Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the dev server with HMR     |
| `npm run build`   | Type-check and build to `dist/`   |
| `npm run preview` | Preview the production build      |

## Deployment

Deploys to Vercel with no configuration:

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel detects Vite automatically — click **Deploy**

Netlify and GitHub Pages also work; the build command is `npm run build` and the output directory is `dist`.

## Customization

Edit `src/data/portfolio.ts` to change any content. To change the color scheme, edit the custom properties at the top of `src/index.css`:

```css
:root {
  --accent: #7c3aed;
  --accent-2: #3b82f6;
  --bg: #0a0a14;
}
```

## License

MIT — free to fork and adapt for your own portfolio.
