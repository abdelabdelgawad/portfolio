// ---------------------------------------------------------------------------
// This file is the ONLY place you should need to touch to put your real
// content in. Every section on the page pulls from here.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Abdelrahman Abdelgawad", // TODO: your full name
  role: "Full Stack Software Engineer", // TODO: e.g. "Full-Stack Software Engineer"
  location: "Brooklyn, NY", // TODO
  email: "abdelabdelgawad03@gmail.com", // TODO
  resumeUrl: "/resume.pdf", // TODO: drop your resume PDF in /public/resume.pdf
  intro:
    "I build full-stack applications and tools, from real-time systems to applied ML experiments. Recently focused on React/TypeScript on the front end and Python/SQL on the back end, with a growing interest in computer vision.", // TODO: 2-3 sentences, written for a recruiter skimming in 10 seconds
  photo: "/Headshot_Abdel.jpg", // TODO: replace with a real headshot, e.g. /public/headshot.jpg, and update this path
};

export const socials = [
  { label: "GitHub", href: "https://github.com/abdelabdelgawad", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abdelabdelgawad", icon: "linkedin" },
  { label: "Email", href: "mailto:abdelabdelgawad03@gmail.com", icon: "mail" },
  // Uncomment if relevant to your work:
  { label: "YouTube", href: "https://youtube.com/@abdelabdelgawad", icon: "youtube" },
  { label: "Instagram", href: "https://instagram.com/abdel_ramen_noodles", icon: "instagram" },
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
] as const;

// Keep this list tight. 12-16 items you'd be comfortable being interviewed
// on, grouped so a recruiter can parse it in a few seconds rather than
// reading a wall of badges.
export const stack = [
  {
    category: "Languages",
    items: ["Python", "Java", "SQL", "C/C++", "JavaScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Flask"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "PostgreSQL", "AWS", "Vercel"],
  },
] as const;

// TODO: replace with your real projects. Keep 3-6 of your strongest —
// quality over quantity. `tags` should draw from the stack above.
export const projects = [
  {
    name: "FencingTime",
    description:
      "A web app that recreates core tournament-bracket and scoring flows from FencingTime, built to practice full-stack architecture with a relational schema behind it.",
    tags: ["React", "SQL", "Node.js"],
    githubUrl: "https://github.com/abdelabdelgawad/fencingtime",
    liveUrl: "https://fencingtime.vercel.app",
    image: "/projects/fencingtime.png",
  },
  {
    name: "NASA APOD",
    description:
      "Browses NASA's Astronomy Picture of the Day archive through their public API, with search and a saved-favorites view backed by SQL.",
    tags: ["React", "SQL", "REST API"],
    githubUrl: "https://github.com/abdelabdelgawad/nasa-apod",
    liveUrl: "",
    image: "/projects/apod.png",
  },
  {
    name: "Particle Simulator",
    description:
      "An interactive 2D particle system exploring gravity, collisions, and emergent motion in real time, with adjustable simulation parameters.",
    tags: ["Python", "PyGame"],
    githubUrl: "https://github.com/abdelabdelgawad/particle-life",
    liveUrl: "",
    image: "/projects/particles.png",
  },
  {
    name: "Java Drawing Application",
    description:
      "A lightweight desktop drawing application with shape, brush, and layer tools, built to get hands-on with Java Swing and event-driven UI.",
    tags: ["Java"],
    githubUrl: "https://github.com/abdelabdelgawad/drawingapplication",
    liveUrl: "",
    image: "/projects/drawing-app.png",
  },
] as const;

// TODO: keep this to technical / relevant roles, per your call to drop
// non-technical positions like property management.
export const experience = [
  {
    role: "Professional Services Consultant",
    org: "Company Name",
    location: "City, ST",
    start: "Month Year",
    end: "Month Year",
    bullets: [
      "One line on scope and impact, led with an action verb and a metric where you have one.",
      "Second bullet on a distinct contribution, not a restatement of the first.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "University Name, Lab Name",
    location: "City, ST",
    start: "Month Year",
    end: "Month Year",
    bullets: [
      "What you built, analyzed, or automated, and for what research question.",
      "Any resulting publication, poster, or presentation, if applicable.",
    ],
  },
  {
    role: "Coding Camp Tutor",
    org: "Organization Name",
    location: "City, ST",
    start: "Month Year",
    end: "Month Year",
    bullets: [
      "Taught/mentored N students in [language/topic], covering [specifics].",
      "Anything you built or improved about the curriculum or materials.",
    ],
  },
] as const;

export const education = [
  {
    school: "Graduate School Name",
    degree: "M.S. in Computer Science", // TODO
    location: "City, ST",
    start: "Year",
    end: "Year",
    details: ["Relevant coursework, thesis topic, or GPA if strong."],
  },
  {
    school: "Undergraduate School Name",
    degree: "B.S. in Computer Science", // TODO
    location: "City, ST",
    start: "Year",
    end: "Year",
    details: ["Relevant coursework, honors, or GPA if strong."],
  },
] as const;
