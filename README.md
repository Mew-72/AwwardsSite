# Splyt Awwwards-Inspired Website

A modern, interactive landing page for the Splyt beverage brand, built with React, Vite, and Tailwind CSS. This project features advanced GSAP animations, responsive design, and a visually rich UI inspired by Awwwards-level web experiences.

## Features

- **React + Vite**: Fast development and build tooling.
- **Tailwind CSS**: Utility-first styling for rapid, responsive design.
- **GSAP Animations**: Smooth scroll-based and reveal animations for sections and sliders.
- **Responsive Layout**: Mobile, tablet, and desktop support.
- **Custom Fonts & Assets**: Uses Proxima Nova and Antonio fonts, with rich imagery and video backgrounds.
- **Section Highlights**:
  - Hero section with animated text and call-to-action
  - Flavor slider with horizontal scroll and animated transitions
  - Nutrition section with animated text and nutrient highlights
  - Benefits and testimonials with pinning and reveal effects
  - Custom footer with social links

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Start the development server:**
	```bash
	npm run dev
	```
3. **Build for production:**
	```bash
	npm run build
	```

## Project Structure

- `src/`
  - `components/` – Reusable UI components (e.g., `FlavorSlider`, `NavBar`)
  - `sections/` – Main page sections (Hero, Flavor, Nutrition, etc.)
  - `constants/` – Data and configuration
  - `index.css` – Tailwind and custom styles
- `public/` – Static assets (images, fonts, videos)

## Animations & Interactivity
- Scroll-based animations powered by GSAP and ScrollTrigger
- Responsive slider and text effects
- Animations are disabled on tablets and mobile for performance

## Customization
- Update `src/constants/` for flavors, nutrients, and other content
- Replace images and videos in `public/`
- Tweak Tailwind config for custom colors and breakpoints

## Credits
- Design inspired by Awwwards.com
- Built by [Mew-72](https://github.com/Mew-72)

**Note:** This project is for learning and portfolio purposes. Not affiliated with Splyt or any beverage brand.