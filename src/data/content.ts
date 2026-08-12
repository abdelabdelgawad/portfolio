




export const profile = {
  name: "Abdelrahman Abdelgawad",
  role: "Full Stack Software Engineer",
  location: "Brooklyn, NY",
  email: "abdelabdelgawad0@gmail.com",
  phoneNumber: "+1 (915) 873-2908",
  resumeUrl: "/resume.pdf",
  intro:
    "Hi there! I'm a software engineer and CS Master's student who's all about building full-stack applications (even if it involves twice as much head scratching).\nWhen I'm not coding, I'm probably out fencing, enjoying a good book, or deep in a video game.",
  photo: "/headshot_abdel.png",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/abdelabdelgawad", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abdelabdelgawad", icon: "linkedin" },
  // { label: "Email", href: "mailto:abdelabdelgawad0@gmail.com", icon: "mail" },
  { label: "YouTube", href: "https://youtube.com/@abdelabdelgawad/videos", icon: "youtube" },
  { label: "Instagram", href: "https://instagram.com/abdel_ramen_noodles", icon: "instagram" },
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
] as const;


export const stack = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Linux", "Git", "Docker", "AWS", "Google Cloud", "PostgreSQL"],
  },
] as const;


export const projects = [
  {
    name: "FencingTime",
    description:
      "A full-stack tournament management app, allowing users to manage fencers and events, track scores, and view results, with a PostgreSQL backend and a React frontend.",
    tags: ["React", "Node.js", "SQL"],
    githubUrl: "https://github.com/abdelabdelgawad/fencingtime",
    liveUrl: "https://fencingtime.vercel.app",
    image: "/projects/fencingtime.png",
    status: "WIP",
  },
  {
    name: "NASA APOD",
    description:
      "Browse NASA's Astronomy Picture of the Day through their public API, wrapped in a simple React interface.",
    tags: ["React", "REST API"],
    githubUrl: "https://github.com/abdelabdelgawad/nasa-apod",
    liveUrl: "https://nasa-apod.abdelgawad.dev/",
    image: "/projects/nasa-apod.png",
    status: "Complete",
  },
  {
    name: "Particle Simulator",
    description:
      "An interactive 2D particle system built using PyGame, exploring forces and emergent behavior through adjustable simulation parameters.",
    tags: ["Python", "PyGame"],
    githubUrl: "https://github.com/abdelabdelgawad/particle-life",
    liveUrl: "",
    image: "/projects/particles.png",
    status: "Complete",
  },
  {
    name: "Java Drawing Application",
    description:
      "A lightweight desktop drawing application with shape and color tools, built to get hands-on with OOP and GUI development.",
    tags: ["Java", "GUI"],
    githubUrl: "https://github.com/abdelabdelgawad/drawingapplication",
    liveUrl: "https://github.com/abdelabdelgawad/DrawingApplication/releases/download/v1.0.0/DrawingApplication.jar",
    image: "/projects/drawing-app.png",
    status: "Complete",
  },
] as const;


export const experience = [
  {
    role: "Professional Services Consultant",
    org: "Bright Brains IT",
    location: "Brooklyn, NY",
    start: "June 2025",
    end: "August 2026",
    bullets: [
      "Configure, customize, and deploy Nexthink DEX (Digital Employee Experience) solutions for business clients, ensuring optimal system performance and scalability.",
      "Develop collectors and automation workflows to integrate Nexthink with ITSM platforms, streamlining incident detection, and improve endpoint monitoring.",
      "Analyze large-scale endpoint and user experience data, building queries and dashboards that surface actionable insights for IT teams.",
      "Troubleshoot technical issues across distributed environments, collaborating with engineering teams and documenting solutions for client environments.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Pennsylvania State University",
    location: "University Park, PA",
    start: "January 2024",
    end: "May 2024",
    bullets: [
      "Co-authored a research paper on training visual transformers, helping develop and clarify deep learning topics including CNNs, gradient descent, and image classification using MNIST and Fashion-MNIST datasets.",
      "Collaborated with faculty and TAs to write and revise 15+ textbook questions and sections, ensuring clarity, technical accuracy, and accessibility for students.",
      "Reviewed and formatted 20+ mathematical equations and theoretical explanations using LaTeX to support future versions of the course textbook.",
    ],
  },
  {
    role: "Coding Camp Tutor",
    org: "Girls Who Code",
    location: "Brooklyn, NY",
    start: "June 2023",
    end: "August 2023",
    bullets: [
      "Led coding lessons for 20+ middle school students, introducing programming fundamentals (variables, loops, conditionals, and functions) through interactive Scratch projects.",
      "Assisted in designing and delivering 12 engaging lesson plans with instructors, fostering creativity and computational thinking.",
      "Provided one-on-one support to students, helping them debug code and understand programming concepts, resulting in improved problem-solving skills.",
    ],
  },
] as const;


export const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "M.S. in Computer Science",
    location: "Atlanta, GA",
    start: "2025",
    end: "2027",
    details: ["Specialization in Computational Perception & Robotics"],
  },
  {
    school: "Pennsylvania State University",
    degree: "B.S. in Computer Science",
    location: "University Park, PA",
    start: "2021",
    end: "2024",
    details: ["Minor in Mathematics", "Minor in Cybersecurity Foundations"],
  },
] as const;