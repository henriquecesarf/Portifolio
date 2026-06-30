import type { PortfolioContent } from "../types";

export const contentEn: PortfolioContent = {
  locale: "en",
  htmlLang: "en",
  profile: {
    name: "Henrique Cesar Farias Dantas",
    title: "Front-end & Mobile Developer",
    tagline: "React • TypeScript • Next.js • React Native",
    location: "Lauro de Freitas, BA, Brazil",
    phone: "(71) 98475-6868",
    email: "henriquecesarfdantas@gmail.com",
    linkedin: "https://www.linkedin.com/in/henrique-cesar-06338222b/",
    github: "https://github.com/henriquecesarf",
    summary:
      "Front-end and Mobile Developer with 6+ years of experience in React, TypeScript, Next.js, and React Native (Expo). Specialized in high-performance applications, real-time systems, and complex interfaces — web and mobile. Built operational apps with WebSockets, GPS, maps, and real-time communication; SaaS platforms with dashboards and reports; and fitness and gamified coaching apps. Implemented CI/CD with GitHub Actions + Kubernetes and optimized performance on large-scale projects (20–30% load time reduction). Pursuing a Systems Analysis and Development degree (expected 2025).",
  },
  navLinks: [
    { href: "#sobre", label: "About" },
    { href: "#experiencia", label: "Experience" },
    { href: "#habilidades", label: "Skills" },
    { href: "#formacao", label: "Education" },
    { href: "#projetos", label: "Projects" },
    { href: "#contato", label: "Contact" },
  ],
  experiences: [
    {
      company: "BX2 Tecnologia",
      role: "Front-end Developer",
      period: "Apr 2025 – present",
      location: "Salvador, BA (Hybrid)",
      highlights: [
        "Led the front-end architecture of Tático Despacho — a real-time operational dispatch web platform (React + TypeScript) monitoring 600+ devices simultaneously",
        "Built the dispatch mobile app (Expo/React Native) with GPS, maps, real-time chat, OCR, and WebSocket integration for field teams",
        "Implemented global state with Hookstate, Zod + React Hook Form validation, and WebSockets for live updates (location, cameras, dispatches)",
        "Created reusable components and draggable windows with per-user layout persistence (MUI)",
        "Set up a full CI/CD pipeline (GitHub Actions → Docker → Kubernetes) with automatic semantic versioning",
      ],
    },
    {
      company: "Sensi Technology LTDA",
      role: "Junior Front-end Developer",
      period: "Aug 2022 – Aug 2024",
      location: "Lauro de Freitas, BA",
      highlights: [
        "Built a gamified coaching streaming platform (IEX) with React, Material-UI, and Styled Components; interactive components increased engagement by 70%",
        "Developed the HomeFit mobile app (Expo/React Native) — personalized workouts, fitness assessment, video programs, and premium subscription",
        "Contributed to SimerPay (energy SaaS) and the Sistema Único da Simer admin panel with React, Chakra UI, and TanStack Query",
        "Optimized Autoconect (vehicle sales) by 20% through refactoring and lazy loading",
        "Implemented dynamic reports and fixed critical usability bugs",
      ],
    },
    {
      company: "Be Manager Soluções Digitais LTDA",
      role: "Junior Front-end Developer (Freelancer)",
      period: "Aug 2020 – Oct 2022",
      location: "Remote",
      highlights: [
        "Architected and developed the front-end of a hospital management platform, reducing load time by 15%",
        "Refactored screens and implemented custom reports, improving usability for medical teams",
      ],
    },
  ],
  skillGroups: [
    { title: "Web Front-end", skills: ["React.js", "TypeScript", "Next.js", "Vue.js", "PWA"] },
    {
      title: "Mobile",
      skills: [
        "React Native",
        "Expo",
        "React Navigation",
        "EAS Build/Updates",
        "Maps & GPS",
        "Push Notifications",
      ],
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "Chakra UI", "Material-UI", "Styled Components", "Native Base"],
    },
    {
      title: "State & Forms",
      skills: ["Hookstate", "Zustand", "React Hook Form + Zod", "Redux (Saga)", "TanStack Query"],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git",
        "GitHub Actions",
        "Docker",
        "Kubernetes (basic)",
        "ESLint/Prettier/Husky",
        "Socket.io / WebSockets",
      ],
    },
    {
      title: "Other",
      skills: ["Node.js", "REST APIs", "Twilio/WebRTC", "MySQL/MongoDB", "Scrum/Kanban"],
    },
  ],
  degrees: [
    {
      category: "Bachelor's Degree",
      degree: "Systems Analysis and Development",
      institution: "Universidade Unime",
      location: "Lauro de Freitas, BA",
      period: "Dec 2025",
      isExpectedCompletion: true,
    },
    {
      category: "Technical Education",
      degree: "Systems Development",
      institution: "SENAI CIMATEC",
      period: "Aug 2020 - Dec 2021",
      grade: "8.5",
      skills: [
        "API Development",
        "Git",
        "Web Development",
        "CSS",
        "React",
        "C#",
        "Vue",
        "Teamwork",
        "React Native",
      ],
    },
  ],
  certifications: [
    {
      title: "NLW Unite – React.js (Rocketseat) – Apr 2024",
      url: "https://app.rocketseat.com.br/certificates/12d35def-45b6-4583-830c-d864b0200798",
    },
    {
      title: "React: Styled Components (Alura) – Mar 2024",
      url: "https://cursos.alura.com.br/certificate/8352093b-b06c-4e61-bcc9-c065e9825f5d",
    },
    {
      title: "React: Redux Saga (Alura) – Mar 2024",
      url: "https://cursos.alura.com.br/certificate/e5dad657-5e7f-44ed-89d3-b9beccd356c6",
    },
    {
      title: "NLW Expert – React Track (Rocketseat) – Feb 2024",
      url: "https://app.rocketseat.com.br/certificates/9feb6a42-f098-462a-a4f1-21798b42178e",
    },
    {
      title: "React: Performance Optimization (Alura) – Feb 2024",
      url: "https://cursos.alura.com.br/certificate/3d001646-2a8c-4ffc-be3c-dce8423c0c02",
    },
    {
      title: "React: TypeScript (Alura) – Feb 2024",
      url: "https://cursos.alura.com.br/certificate/a8696e3b-8aea-4d24-aee2-0a920890ad89",
    },
    { title: "Agile Methodology: Scrum and Kanban (GitHub, Monday, Jira) – 2023" },
    { title: "C#: Object-Oriented Programming, API Consumption, File Handling – 2022" },
    { title: "Docker and Linux Fundamentals – 2021" },
  ],
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Intermediate (reading, writing, and conversation)" },
  ],
  featuredProjects: [
    {
      name: "Tático Despacho",
      description:
        "Operational dispatch web platform for public safety — call center, real-time dispatch coordination, tactical maps, video monitoring, fleet and warehouse management, plus a full admin module.",
      tech: ["React", "TypeScript", "MUI", "Hookstate", "Socket.io", "Leaflet", "React Hook Form + Zod"],
      platform: "web",
      company: "IPQ / BX2",
      primary: true,
      highlights: [
        "600+ devices monitored simultaneously",
        "Draggable windows with per-user persisted layout",
        "Tactical maps, history, and real-time prediction",
        "CI/CD with GitHub Actions, Docker, and Kubernetes",
      ],
    },
    {
      name: "Despacho Mobile (Spoc)",
      description:
        "Mobile app complementing Tático Despacho — incidents, approaches, real-time GPS, chat (text/audio/video), maps, panic button, and field queries.",
      tech: ["Expo", "React Native", "TypeScript", "Socket.io", "Zustand", "Maps"],
      platform: "mobile",
      company: "IPQ / BX2",
    },
    {
      name: "HomeFit",
      description:
        "Fitness app with personalized home workouts — fitness assessment, calendar-based programs, video-guided exercises, voice commands, and premium subscription.",
      tech: ["Expo", "React Native", "TypeScript", "React Navigation", "OneSignal"],
      platform: "mobile",
      company: "Sensi Technology",
    },
    {
      name: "SimerPay (Simer SaaS)",
      description:
        "Energy management SaaS platform — consumer units, contracts, invoices, energy purchases, simulations, CCEE/PLD market, and exportable reports.",
      tech: ["React", "TypeScript", "Chakra UI", "TanStack Query", "Socket.io"],
      platform: "web",
      company: "Sensi Technology",
    },
    {
      name: "Sistema Único da Simer",
      description:
        "Web admin panel for energy management — invoices, consumer units, distributors, contracts, tariffs, users/permissions, and management reports.",
      tech: ["React", "TypeScript", "Chakra UI", "TanStack Query", "React PDF"],
      platform: "web",
      company: "Sensi Technology",
    },
  ],
  studyProjects: [
    {
      name: "Portfolio",
      description:
        "Personal portfolio built with Next.js — structured résumé, light/dark theme, i18n (PT/EN), experience, education, and projects sections, deployed on Vercel.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
      url: "https://github.com/henriquecesarf/Portifolio",
      platform: "web",
    },
    {
      name: "SkillFlow",
      description:
        "Front-end skills showcase — dashboard with authentication, task CRUD, light/dark theme, tests (Vitest + Cypress), Docker, SonarQube, and Node.js mock API.",
      tech: ["React 19", "TypeScript", "Vite", "Zustand", "React Query", "Cypress"],
      url: "https://github.com/henriquecesarf/skillflow",
      platform: "web",
    },
    {
      name: "PDF/CSV Reports",
      description:
        "Dynamic reporting system with PDF and CSV export — filters, interactive tables, and document generation for download.",
      tech: ["React", "TypeScript", "Vite"],
      url: "https://github.com/henriquecesarf/Sistema-de-relat-rios-export-veis-PDF-CSV",
      platform: "web",
    },
    {
      name: "activity-timer",
      description: "Project from the Alura course React: Writing with TypeScript",
      tech: ["TypeScript", "React"],
      url: "https://github.com/henriquecesarf/activity-timer",
      platform: "web",
    },
    {
      name: "NLW-ProjectNotes",
      description: "Notes application built during NLW",
      tech: ["TypeScript", "React"],
      url: "https://github.com/henriquecesarf/NLW-ProjectNotes",
      platform: "web",
    },
  ],
  ui: {
    hero: {
      greeting: "Hi, I'm",
      contact: "Get in touch",
      explore: "Explore",
      scrollAria: "Scroll to about section",
    },
    about: {
      eyebrow: "About me",
      title: "Professional summary",
      description: "A bit about my journey and what drives me as a developer.",
    },
    experience: {
      eyebrow: "Career",
      title: "Professional experience",
      description: "Large-scale projects, real-time systems, and measurable-impact deliveries.",
    },
    skills: {
      eyebrow: "Stack",
      title: "Technical skills",
      description: "Technologies I use daily to build performant and scalable interfaces.",
    },
    education: {
      eyebrow: "Education",
      title: "Education & certifications",
      description: "Academic background and courses that complement my professional practice.",
      graduation: "Academic education",
      certifications: "Certifications",
      languages: "Languages",
      expectedCompletion: "Expected completion:",
      grade: "Grade:",
      viewCertificate: "View certificate",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Featured projects",
      description:
        "Hands-on experience with web platforms and mobile apps in production — corporate projects without public links.",
      primaryProject: "Main project",
      studyTitle: "Study projects",
      studyDescription: "Personal repositories and learning exercises.",
      platformMobile: "Mobile",
      platformWeb: "Web",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk?",
      description: "Open to remote opportunities and challenging front-end and mobile projects.",
      email: "Email",
      phone: "Phone",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, TypeScript, and Tailwind CSS",
    },
    header: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      lightMode: "Switch to light mode",
      darkMode: "Switch to dark mode",
      language: "Language",
      switchToPortuguese: "Switch to Portuguese",
      switchToEnglish: "Switch to English",
    },
  },
};
