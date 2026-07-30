export const nav = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
]

export const tickerItems = [
  { hi: 'AADI JAIN', txt: 'Game Dev · Data Science · AI/ML' },
  { hi: 'USICT', txt: 'B.Tech IT · CGPA 7.79' },
  { hi: 'IIT MADRAS', txt: 'B.S. Data Science · CGPA 7.0' },
  { hi: 'F1 NEURAL EVO', txt: 'Neuroevolution · Zero ML Libraries' },
  { hi: '1M+ SIMS', txt: 'Monte Carlo WDC Predictor' },
  { hi: 'VALORANT', txt: 'Co-Head · Heighers eSports · IIT Madras' },
  { hi: 'GODOT', txt: '2D Platformer · Physics Engine' },
  { hi: 'OPEN TO WORK', txt: 'Internships & Collaborations' },
]

export const aboutStats = [
  { num: '7.79', label: 'CGPA · USICT' },
  { num: '7', em: '.0', label: 'CGPA · IIT Madras' },
  { num: '1M', em: '+', label: 'MC Simulations' },
  { num: '5', em: '+', label: 'Major Projects' },
]

export const education = [
  {
    tag: 'Primary · Active',
    school: 'University School of Information & Communication Technology',
    degree: 'B.Tech in Information Technology · GGSIPU',
    period: 'Aug 2024 – Present · Delhi, India',
    cgpa: '7.79',
    variant: 'primary',
  },
  {
    tag: 'Dual Degree · Active',
    school: 'Indian Institute of Technology, Madras',
    degree: 'B.S. in Data Science & Applications',
    period: 'Aug 2024 – Present · Remote',
    cgpa: '7.0',
    variant: 'iit',
  },
  {
    tag: 'Senior Secondary',
    school: 'OPG World School',
    degree: 'Senior Secondary (90.2%) · Secondary (88.8%)',
    period: '2019 – 2023 · Delhi, India',
    variant: 'muted',
  },
  {
    tag: 'Schooling',
    school: 'JayShree Periwal High School',
    degree: 'Class I – X',
    period: '2010 – 2019 · Jaipur, India',
    variant: 'muted',
  },
]

export const experience = [
  {
    icon: '⚡',
    org: 'Heighers eSports · IIT Madras',
    role: 'Co-Head – Valorant Division',
    bullets: [
      'Co-led "Astra 4.0" and "Aarambh 4.0" Valorant tournaments — data, matchmaking, and live hosting.',
      'Boosted tournament registrations and YouTube viewership by 100% through targeted promotions.',
      'Managed community engagement and PR for competitive esports events.',
    ],
    date: 'Sep 2025 – Present',
    place: 'Remote',
  },
  {
    icon: '💻',
    org: 'DevSource · ACM Student Chapter',
    role: 'Coordinator',
    bullets: [
      'Conducted "Dev Camp" — a full bootcamp with hands-on Game Development sessions.',
      'Organized and led workshops on game development for student participants.',
    ],
    date: 'Aug 2025 – Present',
    place: 'Delhi',
  },
  {
    icon: '🔌',
    org: 'IETE Student Forum · USICT',
    role: 'Executive',
    bullets: [
      'Active executive member contributing to technical forums and student initiatives.',
    ],
    date: 'Sep 2025 – Present',
    place: 'Delhi',
  },
  {
    icon: '🏆',
    org: 'OPG World School',
    role: 'IT Head (Student Council) · Co-Founder, Tech Fest "Crypts"',
    bullets: [
      'Co-founded the school\'s first annual tech fest "Crypts" — now a recurring annual event.',
      'Led an 8-member team delivering STEM competitions, workshops, and gaming events for 50+ participants.',
      'Led all digital and IT initiatives for academic and extracurricular activities.',
    ],
    date: 'May 2022 – Jan 2023',
    place: 'Delhi',
  },
]

export const projects = [
  {
    featured: true,
    type: 'f1',
    typeLabel: '⚡ F1 · Neuroevolution',
    links: [
      { label: 'Demo ↗', href: 'https://f1-neural-sim.vercel.app/' },
      { label: 'GitHub ↗', href: 'https://github.com/DarthRevan02/f1_neural_sim' },
    ],
    name: 'F1 Neural Evolution',
    stats: [
      { val: '3', label: 'F1 Circuits' },
      { val: '5→8→2', label: 'Network Arch' },
      { val: '0', label: 'ML Libraries' },
    ],
    desc: 'Neuroevolution car simulator across Suzuka, Silverstone & Monza — built from pure matrix math with zero ML libraries. Feed-forward neural networks evolve across generations using genetic selection.',
    highlights: [
      'Pure Math.tanh() matrix operations — no TensorFlow, no sklearn',
      'Top-25% elite selection + Gaussian weight mutation',
      'O(1) spatial grid collision detection',
      'Real-time neural network visualizer + lap time graph',
    ],
    tags: ['JavaScript', 'Neuroevolution', 'Canvas 2D', 'Vercel'],
  },
  {
    type: 'ml',
    typeLabel: 'ML · Monte Carlo',
    links: [{ label: 'GitHub ↗', href: 'https://github.com/DarthRevan02/F1_predictor_project' }],
    name: 'F1 Race Predictor & WDC Simulator',
    desc: 'ML-powered F1 prediction system — 1M+ Monte Carlo simulations to model championship probability race by race.',
    highlights: [
      '10 modular prediction pipelines (winner, podium, DNF, strategy)',
      'R² = 0.85 on historical position predictions',
      'RESTful Flask API with real-time telemetry',
    ],
    tags: ['Python', 'scikit-learn', 'FastF1', 'Flask'],
  },
  {
    type: 'f1',
    typeLabel: 'F1 · Python Arcade',
    links: [{ label: 'GitHub ↗', href: 'https://github.com/DarthRevan02/f1_replay_terminal' }],
    name: 'F1 Race Replay System',
    desc: 'Interactive race replay synchronising multi-driver telemetry via per-frame linear interpolation. Full 2018–2025 season selector with live HUD.',
    highlights: [
      'Safety car simulation with phase transitions & VSC detection',
      'Clickable leaderboard, tyre compound & DRS state HUD',
      'Scrubbing progress bar across full race sessions',
    ],
    tags: ['Python', 'FastF1', 'Arcade', 'NumPy'],
  },
  {
    type: 'backend',
    typeLabel: 'Backend · Auth',
    links: [
      { label: 'Live ↗', href: 'http://icpcusict.dev/' },
      { label: 'GitHub ↗', href: 'https://github.com/utkarsh3078/ICPC-website' },
    ],
    name: 'ACM ICPC Portal',
    desc: 'RESTful API backend for a multi-role ICPC student portal — Student, Admin, and Alumni roles with JWT authentication.',
    highlights: [
      'RBAC with protected admin routes',
      'Session registration & attendance tracking APIs',
    ],
    tags: ['Node.js', 'JWT', 'RBAC', 'REST API'],
  },
  {
    type: 'fullstack',
    typeLabel: 'Full-Stack',
    links: [{ label: 'GitHub ↗', href: 'https://github.com/DarthRevan02' }],
    name: 'Attendance Checker',
    desc: 'Server-rendered attendance tracking app with responsive dashboard, secure APIs, and scalable PostgreSQL schema.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    type: 'game',
    typeLabel: 'Game Dev · Godot',
    links: [{ label: 'GitHub ↗', href: 'https://github.com/DarthRevan02' }],
    name: '2D Platformer',
    desc: 'Complete 2D platformer — player physics, collision detection, health system, multi-level progression built in Godot Engine.',
    tags: ['Godot', 'GDScript', 'Git'],
  },
  {
    type: 'f1',
    typeLabel: '⚡ F1 · Dashboard',
    links: [
      { label: 'Live ↗', href: 'https://f1dashboard-murex.vercel.app/' },
      { label: 'GitHub ↗', href: 'https://github.com/DarthRevan02/f1_dashboard' },
    ],
    name: "Aadi's Pit Wall · F1 2026 Dashboard",
    desc: 'Bold, single-page Formula 1 season dashboard — live-style ticker, race countdown, standings tables, calendar strip, and dark mode. Built with zero dependencies in pure HTML, CSS & JS.',
    highlights: [
      'Editorial-style hero with animated typography',
      'Driver & constructor standings with team color accents',
      'Live countdown to next race + paddock intel panel',
      'Dark mode with persisted preference · fully responsive',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
  },
]

export const skills = {
  col1: [
    {
      name: 'Languages',
      chips: [
        { label: 'Python', hot: true },
        { label: 'JavaScript ES6', hot: true },
        { label: 'C/C++' },
        { label: 'C#' },
        { label: 'SQL' },
        { label: 'Java' },
      ],
    },
    {
      name: 'Backend',
      chips: [
        { label: 'Node.js', hot: true },
        { label: 'Express.js', hot: true },
        { label: 'Django' },
        { label: 'Flask' },
        { label: 'REST APIs' },
        { label: 'JWT' },
        { label: 'RBAC' },
      ],
    },
    {
      name: 'Databases',
      chips: [
        { label: 'PostgreSQL', hot: true },
        { label: 'MongoDB' },
      ],
    },
  ],
  col2: [
    {
      name: 'Frontend',
      chips: [
        { label: 'Next.js', hot: true },
        { label: 'React', hot: true },
        { label: 'HTML5' },
        { label: 'CSS3' },
        { label: 'TailwindCSS' },
      ],
    },
    {
      name: 'Game Dev',
      chips: [
        { label: 'Godot', hot: true },
        { label: 'GDScript' },
        { label: 'Unreal Engine' },
        { label: 'Canvas 2D' },
      ],
    },
    {
      name: 'ML / Data',
      chips: [
        { label: 'scikit-learn', hot: true },
        { label: 'NumPy', hot: true },
        { label: 'Pandas', hot: true },
        { label: 'FastF1' },
        { label: 'Monte Carlo' },
      ],
    },
    {
      name: 'Tools',
      chips: [
        { label: 'Git' },
        { label: 'GitHub' },
        { label: 'Postman' },
        { label: 'Vercel' },
      ],
    },
  ],
}

export const contactLinks = [
  { icon: '✉', label: 'Email', value: 'aadiankitjain05@gmail.com', href: 'mailto:aadiankitjain05@gmail.com' },
  { icon: '⌥', label: 'GitHub', value: 'DarthRevan02', href: 'https://github.com/DarthRevan02' },
  { icon: '▣', label: 'LinkedIn', value: 'darthaadixd', href: 'https://www.linkedin.com/in/darthaadixd/' },
  { icon: '◎', label: 'Phone', value: '+91 92667 02639', href: 'tel:+919266702639' },
]
