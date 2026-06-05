export type Locale = "pt" | "en";

export type ProjectPlatform = "mobile" | "web";

export type Project = {
  name: string;
  description: string;
  tech: readonly string[];
  platform: ProjectPlatform;
  company?: string;
  url?: string;
  primary?: boolean;
  highlights?: readonly string[];
};

export type PortfolioContent = {
  locale: Locale;
  htmlLang: string;
  profile: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    summary: string;
  };
  navLinks: readonly { href: string; label: string }[];
  experiences: readonly {
    company: string;
    role: string;
    period: string;
    location: string;
    highlights: readonly string[];
  }[];
  skillGroups: readonly { title: string; skills: readonly string[] }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    expectedCompletion: string;
  };
  certifications: readonly string[];
  languages: readonly { name: string; level: string }[];
  featuredProjects: Project[];
  studyProjects: Project[];
  ui: {
    hero: {
      greeting: string;
      contact: string;
      explore: string;
      scrollAria: string;
    };
    about: { eyebrow: string; title: string; description: string };
    experience: { eyebrow: string; title: string; description: string };
    skills: { eyebrow: string; title: string; description: string };
    education: {
      eyebrow: string;
      title: string;
      description: string;
      graduation: string;
      certifications: string;
      languages: string;
      expectedCompletion: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      description: string;
      primaryProject: string;
      studyTitle: string;
      studyDescription: string;
      platformMobile: string;
      platformWeb: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      email: string;
      phone: string;
    };
    footer: { rights: string; builtWith: string };
    header: { openMenu: string; closeMenu: string; lightMode: string; darkMode: string };
  };
};
