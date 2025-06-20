// API service for fetching data
// This file can be expanded later to connect to a backend

// Project data
export const projects = [
  {
    id: 1,
    title: "AI Story Generator",
    description:
      "An AI-powered tool to generate creative stories based on user input.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "AI", "Netlify"],
    imageUrl:
      "https://images.unsplash.com/photo-1531746790731-6c087f694bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // AI/tech-themed image
    projectUrl: "https://ai-story-generator-65.netlify.app/",
    githubUrl: "https://github.com/Iflaqbhat/Ai-story-generator.git",
  },
  {
    id: 2,
    title: "WanderKashmir",
    description: "A travel guide application showcasing the beauty of Kashmir.",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    imageUrl:
      "https://images.unsplash.com/photo-1591820783654-ffa2b5ee4028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Scenic Kashmir-like image
    projectUrl: "https://iflaqbhat.github.io/WanderKashmir/",
    githubUrl: "https://github.com/Iflaqbhat/WanderKashmir.git",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A weather application providing real-time forecasts using APIs.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Weather API"],
    imageUrl:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Weather-themed image
    projectUrl: "", // No live demo provided
    githubUrl: "https://github.com/Iflaqbhat/weather-forecast-app.git",
  },
  {
    id: 4,
    title: "Simple Blog Backend (PostgreSQL)",
    description: "A basic REST API for a blog using Node.js, Express, and PostgreSQL. Stores and retrieves posts from a PostgreSQL database.",
    techStack: ["Node.js", "Express.js", "PostgreSQL"],
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    projectUrl: "",
    githubUrl: "https://github.com/Iflaqbhat/simple-blog-backend-postgres", // Update with your repo
  },
  {
    id: 5,
    title: "Next.js Starter Portfolio",
    description: "A starter portfolio built with Next.js and Tailwind CSS. Demonstrates SSR and static site generation.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    projectUrl: "",
    githubUrl: "https://github.com/Iflaqbhat/nextjs-portfolio-starter", // Update with your repo
  },
];

// Skills data
export const skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: "javascript",
    level: 90,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: "typescript",
    level: 50,
  },
  {
    id: 3,
    name: "React",
    icon: "react",
    level: 70,
  },
  {
    id: 4,
    name: "Node.js",
    icon: "nodejs",
    level: 65,
  },
  {
    id: 5,
    name: "Express.js",
    icon: "express",
    level: 60,
  },
  {
    id: 6,
    name: "MongoDB",
    icon: "mongodb",
    level: 55,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: "tailwind",
    level: 60,
  },
  {
    id: 8,
    name: "Bootstrap",
    icon: "bootstrap",
    level: 65,
  },
  {
    id: 9,
    name: "PostgreSQL",
    icon: "postgresql",
    level: 40,
  },
  {
    id: 10,
    name: "Next.js",
    icon: "nextjs",
    level: 30,
  },
  {
    id: 11,
    name: "Java",
    icon: "java",
    level: 40,
  },
  {
    id: 12,
    name: "Prisma",
    icon: "prisma",
    level: 40,
  },
];

// Experience data
export const experiences = [
  {
    id: 1,
    company: "Innobyte Services",
    position: "MERN Stack Developer Intern",
    duration: "June 2023 - July 2023",
    description:
      "Worked as a MERN stack intern, helping with web development tasks and learning about real-world projects.",
  },
  {
    id: 2,
    company: "Snapsec.co",
    position: "Full Stack Developer",
    duration: "March 1, 2025 - April 30, 2025",
    description:
      "Worked as a Full Stack Developer, contributing to both frontend and backend development, and delivering features for production systems.",
  },
];

// Education data
export const education = [
  {
    id: 1,
    institution: "BGS Institute of Technology",
    degree: "B.E. in Computer Science",
    duration: "August 2020 - August 2024",
    description:
      "Studied computer science fundamentals, data structures, algorithms, and software engineering principles. Participated in various coding competitions and hackathons.",
  },
];

// Certifications data
export const certifications = [
  {
    id: 1,
    title: "MERN Stack Development",
    issuer: "Acciojob",
    date: "April 2025",
    credentialUrl: "https://drive.google.com/file/d/1BUloWS6fbrlTUUzflrdptAqTMtcoIfT6/view", // Placeholder to be updated
  },
  {
    id: 2,
    title: "Developing Frontend Apps with React",
    issuer: "Coursera",
    date: "March 2022",
    credentialUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MNQRSAR5VI7J/CERTIFICATE_LANDING_PAGE~MNQRSAR5VI7J.jpeg", // Placeholder to be updated
  },
  {
    id: 3,
    title: "Introduction to Java",
    issuer: "coursera",
    date: "June 2022",
    credentialUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8SDEBU4WRZ53/CERTIFICATE_LANDING_PAGE~8SDEBU4WRZ53.jpeg", // Placeholder to be updated
  },
];

// Contact information
export const contactInfo = {
  email: "ifuubhat72@gmail.com", // Placeholder to be updated
  github: "https://github.com/Iflaqbhat", // Placeholder to be updated
  linkedin: "https://linkedin.com/in/iflaq-khurshid", // Placeholder to be updated
  twitter: "https://twitter.com/yichajayiz", // Placeholder to be updated
  instagram: "https://instagram.com/iflaq", // Placeholder to be updated
  phone: "+91 6005154365",
  resume: "https://drive.google.com/file/d/1gHBkqAY58j6E21GmIpGg1WfAHsr_kpKH/view?usp=sharing",
};

// Bounty & Hackathon Projects
export const bountyProjects = [
  {
    id: 1,
    title: "Wall of Wish 🌸",
    description: "Submit your wish, store it on-chain using PDAs, and watch the garden grow. Built on Solana blockchain with React for SuperteamUK ChainReaction.",
    techStack: ["React", "Lovable", "Tailwind CSS", "JavaScript/TypeScript"],
    imageUrl: "/images/wallOFWish.png",
    projectUrl: "https://solwishgarden.netlify.app",
    githubUrl: "https://github.com/Iflaqbhat/sol-wish-garden",
  },
  {
    id: 2,
    title: "AI x Blockchain (Encode x Solana Hackathon)",
    description: "A real-world impact project leveraging Solana's speed and scalability. Built for the Encode x Solana Hackathon with SuperteamUK.",
    techStack: ["React", "Lovable", "Tailwind CSS", "JavaScript/TypeScript"],
    imageUrl: "/images/Ai x Blockchain.png",
    projectUrl: "https://mellow-banoffee-7b4b83.netlify.app",
    githubUrl: "", // Add GitHub link if available
  },
  {
    id: 3,
    title: "AI x Solana Agent (Colosseum Hackathon)",
    description: "An onchain AI agent built with Vite, React, OpenAI, and Supabase on Solana. Shipped for the SuperteamUK Colosseum hackathon.",
    techStack: ["React", "Lovable", "Tailwind CSS", "JavaScript/TypeScript"],
    imageUrl: "/images/Ai x Solana.png",
    projectUrl: "https://aisolanaagent.netlify.app",
    githubUrl: "https://github.com/Iflaqbhat/solana-agent-forge.git",
  },
];
