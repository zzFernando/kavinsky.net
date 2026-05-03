# Fernando "Kavinsky" Silveira — AI Researcher Portfolio

Portfolio website with a **Fallout Pip-Boy/Terminal interface** theme. Static site deployed via Firebase Hosting.

## Features

- **Fallout Terminal Design**: CRT scanlines, green phosphor glow, glitch effects
- **Pip-Boy Sidebar**: Radiation meter, character stats, inventory
- **Color Toggle**: Switch between green/amber themes (saved in localStorage)
- **Boot Sounds**: Audio beeps via Web Audio API
- **Scroll Animations**: Sections fade in with IntersectionObserver
- **Responsive**: Desktop, tablet, mobile

## Content

- Hero with profile photo and social links (GitHub, LinkedIn, Email, Lattes)
- About & currently investigating sections
- Education (5 degrees/postgrads)
- Research interests & tech stack
- Aeronautics section
- 3 Featured projects (CuMiDaVis, GeneCancerPredictor, neuroevo-weight-space-viz) with images and links
- Publications placeholder
- ExpLAIn laboratory info
- Contact section

## Quick Start

```bash
# Just open index.html in a browser
open index.html
```

## Project Structure

```
├── index.html          # Fallout terminal homepage
├── styles.css          # Fallout theme styles
├── script.js           # Terminal effects and interactions
├── firebase.json       # Firebase Hosting configuration
├── .firebaserc         # Firebase project alias
├── robots.txt          # SEO robots file
└── assets/             # Images, favicon
```

## Color Toggle

Click the **AMBER** button in the header to switch themes:
- **Green** (default): Classic Fallout terminal
- **Amber**: Amber monochrome terminal

Preference persists via localStorage.

## Assets

All images in `assets/images/`:
- `profile_pic.jpeg` — Profile photo
- `education.png`, `tdc_pic.png`, `aero.png`, `robot.png`, `contact.png` — Section images
- `cumida.png`, `gcp.png`, `neuro.png` — Project screenshots
- `favicon.svg` — Site favicon

## Deploy

```bash
firebase deploy
```

---

**War. War never changes.**

Fernando Silveira · UFRGS · ExpLAIn · AI Researcher
