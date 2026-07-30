# Aadi Jain · Portfolio

A bold, editorial-style personal portfolio built with React + Vite. Racing-inspired visual language (Ferrari Red, Mercedes Teal, Racing Blue, Pirelli Yellow) on a clean light theme, with a Catppuccin-themed terminal easter egg.

## Sections

- **Hero** - animated name intro with racing stripe background
- **Ticker** - scrolling highlight strip
- **About Me** - bio, quick stats, terminal-style profile card
- **Education** - current degrees (USICT · GGSIPU and IIT Madras)
- **Experience** - esports, dev community, and leadership roles
- **Projects** - F1 neuroevolution sim, Monte Carlo race predictor, race replay system, and more
- **Tech Stack** - languages, ML/data, backend, frontend, tools
- **Get In Touch** - contact links (email, GitHub, LinkedIn, phone)

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Plain CSS (no framework) - see `src/index.css`

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── components/          # One component per section (Hero, About, Projects, etc.)
├── data/
│   └── portfolioData.js # All content lives here - edit this to update text/links
├── hooks/
│   └── useReveal.js     # Scroll-reveal IntersectionObserver hook
├── App.jsx
├── main.jsx
└── index.css             # All styling, incl. the color palette in :root
```

Most content updates (projects, skills, experience, contact info) only require editing `src/data/portfolioData.js` - no need to touch the components.

## Color Palette

Defined in `src/index.css` under `:root`, inspired by F1 team liveries:

| Variable       | Color               | Hex       |
|----------------|----------------------|-----------|
| `--rb`         | Racing Blue          | `#005AFF` |
| `--gold`       | Pirelli Yellow       | `#FFD100` |
| `--red`        | Ferrari Red          | `#DC0000` |
| `--green`      | Mercedes Teal        | `#00A896` |
| `--orange`     | McLaren Papaya       | `#FF8700` |
| `--white`      | Carbon Black (text)  | `#1A1A1A` |

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/), Netlify, or any static host - just point the build command to `npm run build` and the output directory to `dist`.

---

# Aadi Jain

Game Dev · Data Science · AI/ML · Backend

📍 Delhi, India · Available for Internships
✉ [aadiankitjain05@gmail.com](mailto:aadiankitjain05@gmail.com) · ⌥ [github.com/DarthRevan02](https://github.com/DarthRevan02) · ▣ [linkedin.com/in/darthaadixd](https://www.linkedin.com/in/darthaadixd/) · ◎ +91 92667 02639

---

## About

I'm an engineering student at **USICT, GGSIPU** pursuing a B.Tech in Information Technology, simultaneously enrolled in **IIT Madras's B.S. Data Science** programme - because one degree clearly wasn't enough.

I build things that blend analytical rigour with interactive design - scalable backend APIs, probabilistic championship simulators, physics-based game systems, and neural evolution demos. If it involves data, racing, or algorithms, I'm already interested.

When I'm not pushing commits, I'm heading the Valorant Dept, Heighers eSports, IIT Madras, organizing game dev workshops, or running F1 Monte Carlo simulations predicting championship outcomes before the engineers do.

**Quick stats:** 7.79 CGPA (USICT) · 7.0 CGPA (IIT Madras) · 1M+ Monte Carlo simulations · 5+ major projects

---

## Education

### University School of Information & Communication Technology
**B.Tech in Information Technology · GGSIPU**
Aug 2024 – Present · Delhi, India
CGPA: 7.79

### Indian Institute of Technology, Madras
**B.S. in Data Science & Applications**
Aug 2024 – Present · Remote
CGPA: 7.0

---

## Experience

### Heighers eSports · IIT Madras
**Head, Valorant Dept**
Sep 2025 – Present · Remote
- Led "Astra 4.0" and "Aarambh 4.0" Valorant tournaments - data, matchmaking, and live hosting.
- Boosted tournament registrations and YouTube viewership by 100% through targeted promotions.
- Managed community engagement and PR for competitive esports events.

### DevSource · ACM Student Chapter
**Coordinator**
Aug 2025 – Present · Delhi
- Conducted "Dev Camp" - a full bootcamp with hands-on Game Development sessions.
- Organized and led workshops on game development for student participants.

### IETE Student Forum · USICT
**Executive**
Sep 2025 – Present · Delhi
- Active executive member contributing to technical forums and student initiatives.

### OPG World School
**IT Head (Student Council) · Co-Founder, Tech Fest "Crypts"**
May 2022 – Jan 2023 · Delhi
- Co-founded the school's first annual tech fest "Crypts" - now a recurring annual event.
- Led an 8-member team delivering STEM competitions, workshops, and gaming events for 50+ participants.
- Led all digital and IT initiatives for academic and extracurricular activities.

---

## Projects

### F1 Neural Evolution
[Demo](https://f1-neural-sim.vercel.app/) · [GitHub](https://github.com/DarthRevan02/f1_neural_sim)

Neuroevolution car simulator across Suzuka, Silverstone & Monza - built from pure matrix math with zero ML libraries. Feed-forward neural networks evolve across generations using genetic selection.
- Pure `Math.tanh()` matrix operations - no TensorFlow, no sklearn
- Top-25% elite selection + Gaussian weight mutation
- O(1) spatial grid collision detection
- Real-time neural network visualizer + lap time graph

`JavaScript` `Neuroevolution` `Canvas 2D` `Vercel`

### F1 Race Predictor & WDC Simulator
[GitHub](https://github.com/DarthRevan02/F1_predictor_project)

ML-powered F1 prediction system - 1M+ Monte Carlo simulations to model championship probability race by race.
- 10 modular prediction pipelines (winner, podium, DNF, strategy)
- R² = 0.85 on historical position predictions
- RESTful Flask API with real-time telemetry

`Python` `scikit-learn` `FastF1` `Flask`

### F1 Race Replay System
[GitHub](https://github.com/DarthRevan02/f1_replay_terminal)

Interactive race replay synchronising multi-driver telemetry via per-frame linear interpolation. Full 2018–2025 season selector with live HUD.
- Safety car simulation with phase transitions & VSC detection
- Clickable leaderboard, tyre compound & DRS state HUD
- Scrubbing progress bar across full race sessions

`Python` `FastF1` `Arcade` `NumPy`

### ACM ICPC Portal
[Live](http://icpcusict.dev/) · [GitHub](https://github.com/utkarsh3078/ICPC-website)

RESTful API backend for a multi-role ICPC student portal - Student, Admin, and Alumni roles with JWT authentication.
- RBAC with protected admin routes
- Session registration & attendance tracking APIs

`Node.js` `JWT` `RBAC` `REST API`

### Attendance Checker
[GitHub](https://github.com/DarthRevan02)

Server-rendered attendance tracking app with responsive dashboard, secure APIs, and scalable PostgreSQL schema.

`Next.js` `TypeScript` `PostgreSQL`

### 2D Platformer
[GitHub](https://github.com/DarthRevan02)

Complete 2D platformer - player physics, collision detection, health system, multi-level progression built in Godot Engine.

`Godot` `GDScript` `Git`

### Aadi's Pit Wall · F1 2026 Dashboard
[Live](https://f1dashboard-murex.vercel.app/) · [GitHub](https://github.com/DarthRevan02/f1_dashboard)

Bold, single-page Formula 1 season dashboard - live-style ticker, race countdown, standings tables, calendar strip, and dark mode. Built with zero dependencies in pure HTML, CSS & JS.
- Editorial-style hero with animated typography
- Driver & constructor standings with team color accents
- Live countdown to next race + paddock intel panel
- Dark mode with persisted preference · fully responsive

`HTML5` `CSS3` `JavaScript` `Vercel`

---

## Tech Stack

**Languages:** Python, C/C++, JavaScript, C#, SQL, Java
**Data Science & ML:** NumPy, Pandas, scikit-learn, TensorFlow, PyTorch, Matplotlib
**Data Engineering & Analytics:** Excel, Streamlit
**Backend:** Node.js, Express.js, Django, Flask, FastAPI, REST APIs, JWT, RBAC
**Frontend:** Next.js, React, HTML5, CSS3, TailwindCSS
**Databases:** PostgreSQL, MongoDB, MySQL
**Developer Tools:** Git, GitHub, Postman, Docker, Jupyter Notebook
**Game Development:** Unreal Engine, Godot

---

## Contact

- ✉ Email: [aadiankitjain05@gmail.com](mailto:aadiankitjain05@gmail.com)
- ⌥ GitHub: [DarthRevan02](https://github.com/DarthRevan02)
- ▣ LinkedIn: [darthaadixd](https://www.linkedin.com/in/darthaadixd/)
- ◎ Phone: +91 92667 02639

*Delhi, India · Built with precision - no templates.*
