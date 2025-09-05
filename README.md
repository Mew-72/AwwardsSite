<!-- Tip: Replace the banner path with your own image (recommended: 1600×500 or similar) -->
<div align="center">
  <img src="./public/images/nav-logo.svg" width="500px"alt="Splyt — Awwwards‑Inspired Landing Page" width="100%" style="max-width:1200px;border-radius:12px;" />
  <h1>Splyt — Awwwards‑Inspired Landing Page</h1>
  <p>A modern, animated landing page for the Splyt beverage brand with rich visuals and scroll‑driven motion.</p>

  <!-- Tech badges -->
  <p>
    <img alt="React" src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-563D7C?style=for-the-badge&logo=vite&logoColor=FFD62E&labelColor=563D7C&color=764ABC">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white">
    <img alt="GSAP" src="https://img.shields.io/badge/GSAP-88ce02?style=for-the-badge&logo=greensock&logoColor=0b0">
  </p>
</div>

---

## Table of Contents
- Features
- Tech Stack
- Getting Started
- Scripts
- Project Structure
- Animations & Interactivity
- Customization
- Performance & Accessibility
- Deployment
- Credits

---

## ✨ Features

- React + Vite for fast DX and builds
- Tailwind CSS for utility‑first responsive styling
- GSAP animations:
  - Scroll‑based section reveals and pinning
  - Flavor slider with horizontal transitions
  - Staggered text/image entrances
- Responsive layout for mobile, tablet, desktop
- Custom fonts and rich media (video backgrounds, imagery)
- Sections:
  - Hero with animated headline and CTA
  - Flavor slider (horizontal scroll)
  - Nutrition highlights
  - Benefits and testimonials with pinning/reveals
  - Custom footer with social links

> Note: For performance, some animations are reduced/disabled on tablets and mobile.

---

## 🧰 Tech Stack

- React (Vite)
- Tailwind CSS
- GSAP + ScrollTrigger
- TypeScript (if enabled in your setup)
- Assets served from `public/` (images, fonts, videos)

---

## 🚀 Getting Started

Prerequisites:
- Node.js 18+ (recommended)
- npm (or pnpm/yarn)

Install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## 📜 Scripts

- `dev` — Start Vite dev server
- `build` — Production build
- `preview` — Serve the production build locally

Your project may include additional scripts; check `package.json` for the full list.

---

## 🗂️ Project Structure

```
AwwardsSite/
├─ public/                 # Static assets (images, fonts, videos)
├─ src/
│  ├─ components/          # Reusable UI (e.g., FlavorSlider, NavBar)
│  ├─ sections/            # Page sections (Hero, Flavor, Nutrition, etc.)
│  ├─ constants/           # Data and configuration (flavors, nutrients)
│  ├─ index.css            # Tailwind base + custom styles
│  └─ main.jsx/tsx         # App entry
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md
```

---

## 🌀 Animations & Interactivity

- GSAP + ScrollTrigger drive the majority of motion:
  - Section reveals on scroll
  - Pinned panels (Benefits/Testimonials)
  - Horizontal flavor slider transitions
- Animations are tuned for desktop; on smaller screens, effects may be simplified or disabled.
- Maintain 60fps by limiting heavy effects and large DOM updates within scroll/raf callbacks.

Tips:
- Use data/config from `src/constants/` to keep UI/animation logic separated from content.
- Target animation hooks via semantic class names or refs to avoid brittle selectors.

---

## 🎨 Customization

- Content:
  - Update `src/constants/` (flavors, nutrition facts, copy)
  - Replace images/videos in `public/`
- Styling:
  - Tailwind tokens in `tailwind.config.js` (colors, breakpoints, fonts)
  - Global styles in `src/index.css`
- Components/Sections:
  - Add new sections in `src/sections/` and register them in your page layout
  - Extend sliders or create new interactive modules under `src/components/`

Fonts/Assets:
- Project references Proxima Nova and Antonio. Ensure you have the rights to use bundled fonts and media, or replace them with licensed alternatives.

---

## ⚡ Performance & Accessibility

- Performance:
  - Prefer transform/opacity animations; avoid layout thrashing
  - Use responsive images and media formats (WebP/MP4)
  - Test with Lighthouse/Performance panel, especially on mobile throttling
- Accessibility:
  - Provide alt text for images
  - Preserve focus order and keyboard navigability for interactive elements
  - Ensure sufficient color contrast and motion‑reduction fallbacks where possible

---

## ☁️ Deployment

This is a static Vite app. Common options:

- Vercel:
  - Framework Preset: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Netlify:
  - Build Command: `npm run build`
  - Publish Directory: `dist`
- GitHub Pages:
  - Build locally or via CI: `npm run build`
  - Serve `dist/` via Pages (e.g., using `peaceiris/actions-gh-pages`)

If deploying under a subpath, set `base` in `vite.config` accordingly.

---

## 🏁 Credits

- Design inspired by Awwwards.com
- Built by [Mew-72](https://github.com/Mew-72)

Note: This project is for learning and portfolio purposes. Not affiliated with Splyt or any beverage brand.
