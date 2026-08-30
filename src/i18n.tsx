import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

const en = {
  nav: {
    home: "Home",
    about: "About",
    skill: "Skills",
    projects: "Projects",
    experience: "Experience",
    testimonials: "Reviews",
    services: "Packages",
    contact: "Contact",
  },
  home: {
    heading: "I am into",
    headingAccent: "software engineering",
    subtitle:
      "I create clean and dynamic web experiences using modern technologies.",
    quote: "Master the logic, and any language becomes just syntax.",
    roles: [
      "Fullstack Developer",
      "React Engineer",
      ".NET Developer",
      "API & Microservices",
      "Problem Solver",
    ],
    downloadCv: "Download CV",
    downloadLicense: "Download Professional License",
  },
  about: {
    title: "About me",
    lead: "Software engineer from Colombia. I started out self-taught and turned that curiosity into a career building real products.",
    paragraphs: [
      "Since 2023 I've been developing and maintaining production systems — from internal tools at Alpes Solutions and Outsourcing Davinci to public-service platforms at the UARIV. I work across the whole stack with React, Angular, .NET, Node.js and NestJS.",
      "I care about clean, maintainable code and interfaces that feel effortless. I'm just as comfortable designing a database schema as I am polishing the last detail of a UI. On the side, I help small businesses build a solid presence online.",
    ],
    facts: [
      { label: "Location", value: "Colombia · Remote-friendly" },
      { label: "Experience", value: "3+ years in production" },
      { label: "Focus", value: "Fullstack · React · .NET · Node" },
      { label: "Status", value: "Open to opportunities" },
    ],
  },
  skills: {
    title: "Skills & Technologies",
    subtitle:
      "These are the technologies and tools I use to create modern and scalable web experiences.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "DevOps & Tools",
    },
  },
  projects: {
    title: "Projects",
    subtitle:
      "A selection of projects where I apply my skills in web and mobile development.",
    downloadApk: "Download APK",
    demo: "Live demo",
    code: "Code",
    portfolio: {
      title: "Personal Portfolio",
      description:
        "This portfolio is a personal project designed to showcase my skills and experience in web development.",
    },
    barbershop: {
      title: "Barbershop Management App",
      description:
        "Mobile application for managing barbershops: appointments, clients and services, with a NestJS backend and PostgreSQL database.",
    },
  },
  experience: {
    title: "Work Experience",
    active: "Active",
    finished: "Finished",
    visit: "Visit Page",
    certificate: "Download certificate",
    uariv: {
      company:
        "UARIV - Unidad para la Atención y Reparación Integral a las Víctimas",
      date: "January 2026 - Present",
      description:
        "I work as a software developer, contributing to the development and maintenance of systems that support the institution's mission of serving and supporting victims.",
    },
    davinci: {
      company: "Alpes Solutions S.A.S - Outsourcing Davinci",
      date: "November 2023 - July 2025",
      description:
        "I have been part of various projects within the company, collaborating with the team, fulfilling my responsibilities, and proposing ideas that have contributed to tasks being carried out efficiently and without setbacks.",
    },
    alpes: {
      company: "Alpes Solutions S.A.S",
      date: "June - November 2023 (5 months)",
      description:
        "I strengthened the knowledge I had developed on my own by integrating it into collaborative work. In addition, in the work environment I acquired essential soft skills that have allowed me to adapt better and communicate effectively with the team.",
    },
  },
  testimonials: {
    title: "Recommendations",
    subtitle: "What colleagues I've worked with say.",
    jeferson: {
      role: "Computer Engineer · Full Stack Web Developer at Clínica Materno Infantil San Luis (formerly at Alpes Solutions S.A.S)",
      quote:
        "A proactive, results-oriented computer engineer with experience building and optimizing web applications. He stands out for his teamwork and for delivering efficient solutions in clinical and corporate environments.",
    },
    carlos: {
      role: "Computer Engineer · Full Stack & Flutter Developer (Full Stack Programmer at SDSTI)",
      quote:
        "A developer focused on mobile and web applications, specialized in Flutter and digital tourism projects. He has worked on innovative solutions that integrate frontend and backend with a practical and academic mindset.",
    },
  },
  services: {
    title: "Packages",
    subtitle:
      "Do you have a business? I build custom websites so your business gets a strong online presence.",
    mostPopular: "Most popular",
    quote: "Custom quote",
    delivery: "Estimated delivery:",
    cta: "Request via WhatsApp",
    footnote:
      "Hosting and domain not included. Need something different? Reach out and we'll build a custom plan for you.",
    whatsappMsg: (plan: string) =>
      `Hi Angel, I'm interested in the ${plan} plan to build my website.`,
    basic: {
      name: "Basic",
      tagline: "Digital Presence",
      delivery: "5-7 business days",
      features: [
        "Single-page landing page",
        "Responsive design",
        "Up to 4 sections (Hero, Services, Gallery, Contact)",
        "Contact form to WhatsApp/email",
        "Basic SEO",
        "1 round of revisions",
      ],
    },
    professional: {
      name: "Professional",
      tagline: "Online Business",
      delivery: "10-15 business days",
      features: [
        "Custom 5-6 page website",
        "Home, About, Services/Products, Gallery, Contact",
        "WhatsApp Business integration",
        "On-page SEO",
        "2 rounds of revisions",
      ],
    },
    premium: {
      name: "Premium",
      tagline: "Custom Platform",
      delivery: "4-6 weeks",
      features: [
        "Web app with a custom backend",
        "Database and admin panel",
        "User authentication",
        "Online payments (Wompi/PayU)",
        "Custom UI/UX design",
        "3 rounds of revisions + 15 days of support",
      ],
    },
  },
  contact: {
    title: "Let's build something together",
    subtitle:
      "I'm open to new opportunities and collaborations. Feel free to reach out.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePh: "Your name",
      emailPh: "you@email.com",
      messagePh: "Tell me about your project...",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Try again or write me directly.",
      invalidName: "Please enter your name.",
      invalidEmail: "Please enter a valid email.",
      invalidMessage: "Please enter a message (at least 10 characters).",
    },
  },
};

type Dict = typeof en;

const es: Dict = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    skill: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    testimonials: "Reseñas",
    services: "Paquetes",
    contact: "Contacto",
  },
  home: {
    heading: "Lo mío es la",
    headingAccent: "ingeniería de software",
    subtitle:
      "Creo experiencias web limpias y dinámicas usando tecnologías modernas.",
    quote: "Domina la lógica y cualquier lenguaje se vuelve solo sintaxis.",
    roles: [
      "Desarrollador Fullstack",
      "Ingeniero React",
      "Desarrollador .NET",
      "APIs y Microservicios",
      "Solucionador de problemas",
    ],
    downloadCv: "Descargar CV",
    downloadLicense: "Descargar Tarjeta Profesional",
  },
  about: {
    title: "Sobre mí",
    lead: "Ingeniero de software colombiano. Empecé de forma autodidacta y convertí esa curiosidad en una carrera construyendo productos reales.",
    paragraphs: [
      "Desde 2023 desarrollo y mantengo sistemas en producción: desde herramientas internas en Alpes Solutions y Outsourcing Davinci hasta plataformas de servicio público en la UARIV. Trabajo en todo el stack con React, Angular, .NET, Node.js y NestJS.",
      "Me importa el código limpio y mantenible y las interfaces que se sienten naturales. Me siento igual de cómodo diseñando el esquema de una base de datos que puliendo el último detalle de una UI. Por fuera de mi rol principal, ayudo a pequeños negocios a construir una presencia sólida en internet.",
    ],
    facts: [
      { label: "Ubicación", value: "Colombia · Trabajo remoto" },
      { label: "Experiencia", value: "3+ años en producción" },
      { label: "Enfoque", value: "Fullstack · React · .NET · Node" },
      { label: "Estado", value: "Abierto a oportunidades" },
    ],
  },
  skills: {
    title: "Habilidades y Tecnologías",
    subtitle:
      "Estas son las tecnologías y herramientas que uso para crear experiencias web modernas y escalables.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      tools: "DevOps y Herramientas",
    },
  },
  projects: {
    title: "Proyectos",
    subtitle:
      "Una selección de proyectos donde aplico mis habilidades en desarrollo web y móvil.",
    downloadApk: "Descargar APK",
    demo: "Ver demo",
    code: "Código",
    portfolio: {
      title: "Portafolio Personal",
      description:
        "Este portafolio es un proyecto personal diseñado para mostrar mis habilidades y experiencia en desarrollo web.",
    },
    barbershop: {
      title: "App de Gestión para Barberías",
      description:
        "Aplicación móvil para gestionar barberías: citas, clientes y servicios, con backend en NestJS y base de datos PostgreSQL.",
    },
  },
  experience: {
    title: "Experiencia Laboral",
    active: "Activo",
    finished: "Finalizado",
    visit: "Visitar página",
    certificate: "Descargar certificado",
    uariv: {
      company:
        "UARIV - Unidad para la Atención y Reparación Integral a las Víctimas",
      date: "Enero 2026 - Actualidad",
      description:
        "Trabajo como desarrollador de software, contribuyendo al desarrollo y mantenimiento de sistemas que apoyan la misión de la entidad de atender y acompañar a las víctimas.",
    },
    davinci: {
      company: "Alpes Solutions S.A.S - Outsourcing Davinci",
      date: "Noviembre 2023 - Julio 2025",
      description:
        "Hice parte de varios proyectos dentro de la empresa, colaborando con el equipo, cumpliendo mis responsabilidades y proponiendo ideas que ayudaron a que las tareas se realizaran de forma eficiente y sin contratiempos.",
    },
    alpes: {
      company: "Alpes Solutions S.A.S",
      date: "Junio - Noviembre 2023 (5 meses)",
      description:
        "Reforcé el conocimiento que había desarrollado por mi cuenta integrándolo al trabajo colaborativo. Además, en el entorno laboral adquirí habilidades blandas esenciales que me han permitido adaptarme mejor y comunicarme de forma efectiva con el equipo.",
    },
  },
  testimonials: {
    title: "Recomendaciones",
    subtitle: "Lo que dicen colegas con los que he trabajado.",
    jeferson: {
      role: "Ingeniero Informático · Desarrollador Web Full Stack en Clínica Materno Infantil San Luis (antes en Alpes Solutions S.A.S)",
      quote:
        "Ingeniero informático proactivo y orientado a resultados, con experiencia en construcción y optimización de aplicaciones web. Se destaca por su capacidad de trabajo en equipo y por aportar soluciones eficientes en entornos clínicos y corporativos.",
    },
    carlos: {
      role: "Ingeniero Informático · Desarrollador FullStack y Flutter (Programador Full Stack en SDSTI)",
      quote:
        "Desarrollador con enfoque en aplicaciones móviles y web, especializado en Flutter y proyectos de turismo digital. Ha trabajado en soluciones innovadoras que integran frontend y backend con visión práctica y académica.",
    },
  },
  services: {
    title: "Paquetes",
    subtitle:
      "¿Tienes un negocio? Construyo sitios web a la medida para que tu negocio tenga una presencia online sólida.",
    mostPopular: "Más popular",
    quote: "Cotización personalizada",
    delivery: "Entrega estimada:",
    cta: "Solicitar por WhatsApp",
    footnote:
      "Hosting y dominio no incluidos. ¿Necesitas algo distinto? Escríbeme y armamos un plan a tu medida.",
    whatsappMsg: (plan: string) =>
      `Hola Angel, estoy interesado en el plan ${plan} para construir mi sitio web.`,
    basic: {
      name: "Básico",
      tagline: "Presencia Digital",
      delivery: "5-7 días hábiles",
      features: [
        "Landing page de una sola página",
        "Diseño responsive",
        "Hasta 4 secciones (Inicio, Servicios, Galería, Contacto)",
        "Formulario de contacto a WhatsApp/email",
        "SEO básico",
        "1 ronda de revisiones",
      ],
    },
    professional: {
      name: "Profesional",
      tagline: "Negocio Online",
      delivery: "10-15 días hábiles",
      features: [
        "Sitio web a la medida de 5-6 páginas",
        "Inicio, Nosotros, Servicios/Productos, Galería, Contacto",
        "Integración con WhatsApp Business",
        "SEO on-page",
        "2 rondas de revisiones",
      ],
    },
    premium: {
      name: "Premium",
      tagline: "Plataforma a la Medida",
      delivery: "4-6 semanas",
      features: [
        "Aplicación web con backend a la medida",
        "Base de datos y panel de administración",
        "Autenticación de usuarios",
        "Pagos en línea (Wompi/PayU)",
        "Diseño UI/UX personalizado",
        "3 rondas de revisiones + 15 días de soporte",
      ],
    },
  },
  contact: {
    title: "Construyamos algo juntos",
    subtitle:
      "Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en escribirme.",
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      namePh: "Tu nombre",
      emailPh: "tu@correo.com",
      messagePh: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error: "Algo salió mal. Intenta de nuevo o escríbeme directamente.",
      invalidName: "Por favor ingresa tu nombre.",
      invalidEmail: "Por favor ingresa un correo válido.",
      invalidMessage: "Por favor ingresa un mensaje (mínimo 10 caracteres).",
    },
  },
};

const dictionaries: Record<Lang, Dict> = { en, es };

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "es") return saved;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("es")) {
    return "es";
  }
  return "en";
}

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dict;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "en" ? "es" : "en")),
      t: dictionaries[lang],
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
