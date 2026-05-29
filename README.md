# Ayush Kumar — Personal Portfolio

A modern, responsive, single-page portfolio for **Ayush Kumar** — Data & Business Analyst,
IIT Bhilai '27, currently interning with the District Administration, Dantewada (GovTech &
Healthcare Analytics) and ex-DRDO researcher.

> Built from scratch with **vanilla HTML, CSS, and JavaScript** — no framework, no build step,
> no dependencies. Just open `index.html` and it works.

---

## Features

- **Hero** with animated typing effect, status badge, code-card decoration
- **About** with personal info card and live stats
- **Skills** grouped into 6 categories (Analytics & BI, Languages, Libraries, Concepts, Security, Tools)
- **Experience timeline** — Dantewada (current), DRDO, IIT Bhilai roles
- **Featured projects** pulled from your real GitHub repos
- **GitHub stats** — auto-updating cards (Stats, Streak, Top Languages)
- **Education** — IIT Bhilai + Higher Secondary
- **Leadership & Positions** — 6 student-leadership cards
- **Certifications** — DefineCareer × CCPS workshop, DRDO certificate
- **Contact** with direct email, LinkedIn, GitHub, X/Twitter
- **Smooth scroll**, **active nav highlight**, **scroll reveal animations**, **mobile hamburger menu**
- **Dark theme** with violet → indigo → cyan gradient accents

---

## File structure

```
ayush-portfolio/
├── index.html      # All page content & sections
├── style.css       # Design system, layout, animations, responsiveness
├── script.js       # Typing effect, nav, reveal animations, back-to-top
└── README.md       # This file
```

External (loaded via CDN — no install needed):
- Google Fonts: `Inter` + `JetBrains Mono`
- Font Awesome 6.5.1 icons
- GitHub stats images from `github-readme-stats.vercel.app`

---

## Run locally

Just open `index.html` in any modern browser.

Or, for live-reload during edits, run a tiny local server:

```bash
# Python 3
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deploy (free options)

### Option 1 — GitHub Pages (recommended)
1. Push this folder to a repo (e.g. `ayushkr80/ayushkr80.github.io` or any repo with Pages enabled).
2. Go to **Settings → Pages** → set **Source** = `main` branch, root.
3. Site will be live at `https://ayushkr80.github.io/<repo>/`.

### Option 2 — Vercel
1. Run `npx vercel` in this folder (or import the repo on vercel.com).
2. Accept defaults — Vercel auto-detects static sites.

### Option 3 — Netlify
1. Drag-and-drop this folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

---

## How to update content

All content is in `index.html` — edit it directly. Common updates:

| What you want to change | Where |
|---|---|
| Tagline / typing phrases | `script.js` → `phrases` array |
| Add a new project | duplicate a `<article class="project-card">` in `index.html` |
| Add experience | duplicate a `.timeline-item` in `index.html` |
| Update email / socials | hero section + contact section in `index.html` |
| Color theme | `:root` in `style.css` (variables `--primary`, `--accent`, etc.) |
| GitHub stats username | hardcoded as `ayushkr80` in `index.html` (search & replace) |

---

## Customization tips

- The whole color system is driven by CSS variables at the top of `style.css`. Change
  `--primary`, `--primary-2`, `--accent` and the entire site re-themes.
- The site is built mobile-first and tested at 1440px / 1024px / 768px / 480px.
- All animations respect motion — none auto-play sounds, videos, or popups.

---

## Credits

- Design + code: **Ayush Kumar** (with AI-assisted scaffolding)
- Icons: [Font Awesome](https://fontawesome.com)
- Fonts: [Google Fonts](https://fonts.google.com)
- GitHub stat cards: [github-readme-stats](https://github.com/anuraghazra/github-readme-stats),
  [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)

---

© Ayush Kumar
