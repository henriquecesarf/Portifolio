import type { PortfolioContent } from "../types";

export const contentPt: PortfolioContent = {
  locale: "pt",
  htmlLang: "pt-BR",
  profile: {
    name: "Henrique Cesar Farias Dantas",
    title: "Desenvolvedor Front-end & Mobile",
    tagline: "React • TypeScript • Next.js • React Native",
    location: "Lauro de Freitas, BA",
    phone: "(71) 98475-6868",
    email: "henriquecesarfdantas@gmail.com",
    linkedin: "https://www.linkedin.com/in/henrique-cesar-06338222b/",
    github: "https://github.com/henriquecesarf",
    summary:
      "Desenvolvedor Front-end e Mobile com 6+ anos de experiência em React, TypeScript, Next.js e React Native (Expo). Especializado em aplicações de alta performance, sistemas em tempo real e interfaces complexas — web e mobile. Construí apps operacionais com WebSockets, GPS, mapas e comunicação em tempo real; plataformas SaaS com dashboards e relatórios; e apps de fitness e coaching gamificado. Implementei CI/CD com GitHub Actions + Kubernetes e otimizei performance em projetos de escala (redução de 20–30% em tempo de carregamento). Cursando Análise e Desenvolvimento de Sistemas (término 2025).",
  },
  navLinks: [
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#formacao", label: "Formação" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ],
  experiences: [
    {
      company: "BX2 Tecnologia",
      role: "Desenvolvedor de Front-end",
      period: "04/2025 – atual",
      location: "Salvador, BA (Híbrido)",
      highlights: [
        "Liderei a arquitetura front-end do Tático Despacho — plataforma web de despacho operacional em tempo real (React + TypeScript), com +600 dispositivos monitorados simultaneamente",
        "Desenvolvi o app mobile de despacho (Expo/React Native) com GPS, mapas, chat em tempo real, OCR e integração WebSocket para equipes em campo",
        "Implementei estado global com Hookstate, validação Zod + React Hook Form e WebSockets para atualizações live (localização, câmeras, despachos)",
        "Criei componentes reutilizáveis e janelas arrastáveis com persistência por usuário (MUI)",
        "Configurei pipeline CI/CD completo (GitHub Actions → Docker → Kubernetes) com versionamento semântico automático",
      ],
    },
    {
      company: "Sensi Technology LTDA",
      role: "Desenvolvedor Front-end Júnior",
      period: "08/2022 – 08/2024",
      location: "Lauro de Freitas, BA",
      highlights: [
        "Desenvolvi plataforma de streaming de coaching gamificada (IEX) com React, Material-UI e Styled Components; componentes interativos que aumentaram engajamento em 70%",
        "Desenvolvi o app mobile HomeFit (Expo/React Native) — treinos personalizados, avaliação física, programas com vídeo e assinatura premium",
        "Contribuí no front-end do SimerPay (SaaS de energia) e do painel administrativo Sistema Único da Simer com React, Chakra UI e TanStack Query",
        "Otimizei Autoconect (venda de veículos) em 20% de performance via refatoração e lazy loading",
        "Implementei relatórios dinâmicos e corrigi bugs críticos de usabilidade",
      ],
    },
    {
      company: "Be Manager Soluções Digitais LTDA",
      role: "Desenvolvedor Front-end Júnior (Freelancer)",
      period: "08/2020 – 10/2022",
      location: "Remoto",
      highlights: [
        "Arquitei e desenvolvi front-end de plataforma de gestão hospitalar, reduzindo tempo de carregamento em 15%",
        "Refatorei telas e implementei relatórios customizados, melhorando usabilidade para equipes médicas",
      ],
    },
  ],
  skillGroups: [
    { title: "Front-end Web", skills: ["React.js", "TypeScript", "Next.js", "Vue.js", "PWA"] },
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
      title: "Estilização",
      skills: ["Tailwind CSS", "Chakra UI", "Material-UI", "Styled Components", "Native Base"],
    },
    {
      title: "Estado & Forms",
      skills: ["Hookstate", "Zustand", "React Hook Form + Zod", "Redux (Saga)", "TanStack Query"],
    },
    {
      title: "Ferramentas & DevOps",
      skills: [
        "Git",
        "GitHub Actions",
        "Docker",
        "Kubernetes (básico)",
        "ESLint/Prettier/Husky",
        "Socket.io / WebSockets",
      ],
    },
    {
      title: "Outros",
      skills: ["Node.js", "REST APIs", "Twilio/WebRTC", "MySQL/MongoDB", "Scrum/Kanban"],
    },
  ],
  education: {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Unime",
    location: "Lauro de Freitas, BA",
    expectedCompletion: "12/2025",
  },
  certifications: [
    "Metodologia Ágil: Scrum e Kanban (GitHub, Monday, Jira) – 2023",
    "React: TypeScript, Styled Components, Redux Saga, Otimização de Performance – 2022",
    "C#: Orientação a Objetos, Consumo de APIs, Manipulação de Arquivos – 2022",
    "Docker e Linux Fundamentals – 2021",
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário (leitura, escrita e conversação)" },
  ],
  featuredProjects: [
    {
      name: "Tático Despacho",
      description:
        "Plataforma web de despacho operacional para segurança pública — central de atendimento, coordenação de despachos em tempo real, mapas táticos, monitoramento de vídeo, gestão de frota e almoxarifado, além de módulo administrativo completo.",
      tech: ["React", "TypeScript", "MUI", "Hookstate", "Socket.io", "Leaflet", "React Hook Form + Zod"],
      platform: "web",
      company: "IPQ / BX2",
      primary: true,
      highlights: [
        "+600 dispositivos monitorados simultaneamente",
        "Janelas arrastáveis com layout persistido por usuário",
        "Mapas táticos, histórico e predição em tempo real",
        "CI/CD com GitHub Actions, Docker e Kubernetes",
      ],
    },
    {
      name: "Despacho Mobile (Spoc)",
      description:
        "App mobile complementar ao Tático Despacho — ocorrências, abordagens, GPS em tempo real, chat (texto/áudio/vídeo), mapas, botão de pânico e consultas em campo.",
      tech: ["Expo", "React Native", "TypeScript", "Socket.io", "Zustand", "Maps"],
      platform: "mobile",
      company: "IPQ / BX2",
    },
    {
      name: "HomeFit",
      description:
        "App de fitness com treinos personalizados em casa — avaliação física, programas com calendário, exercícios guiados com vídeo, comandos de voz e assinatura premium.",
      tech: ["Expo", "React Native", "TypeScript", "React Navigation", "OneSignal"],
      platform: "mobile",
      company: "Sensi Technology",
    },
    {
      name: "SimerPay (Simer SaaS)",
      description:
        "Plataforma SaaS de gestão de energia — unidades consumidoras, contratos, faturas, compra de energia, simulações, mercado CCEE/PLD e relatórios exportáveis.",
      tech: ["React", "TypeScript", "Chakra UI", "TanStack Query", "Socket.io"],
      platform: "web",
      company: "Sensi Technology",
    },
    {
      name: "Sistema Único da Simer",
      description:
        "Painel administrativo web para gestão energética — faturas, UCs, distribuidoras, contratos, tarifas, usuários/permissões e relatórios gerenciais.",
      tech: ["React", "TypeScript", "Chakra UI", "TanStack Query", "React PDF"],
      platform: "web",
      company: "Sensi Technology",
    },
  ],
  studyProjects: [
    {
      name: "SkillFlow",
      description:
        "Showcase de habilidades front-end — dashboard com autenticação, CRUD de tarefas, tema claro/escuro, testes (Vitest + Cypress), Docker, SonarQube e API mock em Node.js.",
      tech: ["React 19", "TypeScript", "Vite", "Zustand", "React Query", "Cypress"],
      url: "https://github.com/henriquecesarf/skillflow",
      platform: "web",
    },
    {
      name: "Relatórios PDF/CSV",
      description:
        "Sistema de relatórios dinâmicos com exportação em PDF e CSV — filtros, tabelas interativas e geração de documentos para download.",
      tech: ["React", "TypeScript", "Vite"],
      url: "https://github.com/henriquecesarf/Sistema-de-relat-rios-export-veis-PDF-CSV",
      platform: "web",
    },
    {
      name: "activity-timer",
      description: "Projeto do curso React: escrevendo com TypeScript (Alura)",
      tech: ["TypeScript", "React"],
      url: "https://github.com/henriquecesarf/activity-timer",
      platform: "web",
    },
    {
      name: "NLW-ProjectNotes",
      description: "Aplicação de notas desenvolvida no NLW",
      tech: ["TypeScript", "React"],
      url: "https://github.com/henriquecesarf/NLW-ProjectNotes",
      platform: "web",
    },
  ],
  ui: {
    hero: {
      greeting: "Olá, eu sou",
      contact: "Entrar em contato",
      explore: "Explorar",
      scrollAria: "Rolar para a seção sobre",
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Resumo profissional",
      description: "Um pouco da minha trajetória e do que me move como desenvolvedor.",
    },
    experience: {
      eyebrow: "Carreira",
      title: "Experiência profissional",
      description: "Projetos de alta escala, sistemas em tempo real e entregas com impacto mensurável.",
    },
    skills: {
      eyebrow: "Stack",
      title: "Habilidades técnicas",
      description: "Tecnologias que uso no dia a dia para construir interfaces performáticas e escaláveis.",
    },
    education: {
      eyebrow: "Formação",
      title: "Educação e certificações",
      description: "Base acadêmica e cursos que complementam minha prática profissional.",
      graduation: "Graduação",
      certifications: "Certificações",
      languages: "Idiomas",
      expectedCompletion: "Conclusão prevista:",
    },
    projects: {
      eyebrow: "Portfólio",
      title: "Projetos em destaque",
      description:
        "Experiência prática em plataformas web e apps mobile em produção — projetos corporativos sem links públicos.",
      primaryProject: "Projeto principal",
      studyTitle: "Projetos de estudo",
      studyDescription: "Repositórios pessoais e exercícios de aprendizado.",
      platformMobile: "Mobile",
      platformWeb: "Web",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar?",
      description: "Estou aberto a oportunidades remotas e projetos desafiadores em front-end e mobile.",
      email: "E-mail",
      phone: "Telefone",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Desenvolvido com Next.js, TypeScript e Tailwind CSS",
    },
    header: {
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      lightMode: "Ativar modo claro",
      darkMode: "Ativar modo escuro",
    },
  },
};
