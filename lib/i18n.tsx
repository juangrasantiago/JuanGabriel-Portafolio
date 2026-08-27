"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "en" | "es"

type Dict = typeof translations.en

export const translations = {
  en: {
    nav: {
      about: "About",
      certifications: "Certs",
      skills: "Skills",
      projects: "Projects",
      labs: "Labs",
      contact: "Contact",
      switchTo: "ES",
      switchLabel: "Switch to Spanish",
    },
    hero: {
      badge: "Ready to work",
      role: "Junior Cybersecurity | Web Developer | Cloud",
      bio: "I secure systems and build resilient cloud infrastructure. Focused on threat analysis, vulnerability assessment, and Azure cloud security — turning hands-on lab work into real-world defense.",
      viewProjects: "Projects",
      getInTouch: "Get in touch",
    },
    about: {
      index: "01",
      title: "About Me",
      p1: "I'm an IT technician with recent specialization in cybersecurity and cloud computing. I'm passionate about protecting systems and understanding the mindset of attackers. My career began with a curiosity about how networks work and soon evolved into a focus on their security.",
      p2a: "I hold the",
      p2b: "and",
      p2c: "certifications, I dedicate my time to developing practical skills through home labs and personal projects, as well as capturing packets, analyzing web applications, and strengthening Linux environments.",
      p3: "I am eager to receive an opportunity to join a team where I can grow in this world of new technologies, contribute to a solid security posture, and continue learning every day.",
      highlights: [
        {
          title: "Security First",
          desc: "Vulnerability assessment, threat modeling, and defensive analysis.",
        },
        {
          title: "Cloud Native",
          desc: "Azure fundamentals, identity, and secure infrastructure design.",
        },
        {
          title: "Hands-On Labs",
          desc: "Continuous practice with offensive and defensive tooling.",
        },
      ],
    },
    certifications: {
      index: "02",
      title: "Certifications",
      verified: "Verified",
      viewCertificate: "View Certificate",
      items: [
        {
          code: "AZ-900",
          name: "Microsoft Azure Fundamentals",
          issuer: "Microsoft",
          desc: "Core cloud concepts, Azure services, pricing, and governance.",
          pdf: "/certs/Credencial az900 - Juan Gabriel.pdf"
        },
        {
          code: "SC-900",
          name: "Security, Compliance & Identity Fundamentals",
          issuer: "Microsoft",
          desc: "Security, compliance, and identity concepts across Microsoft cloud.",
          pdf: "/certs/CertificadoSC-900.pdf"
        },
      ],
    },
    skills: {
      index: "03",
      title: "Skills & Tooling",
      groups: [
        { category: "Languages", items: ["Python", "JavaScript", "SQL", "HTML", "CSS"] },
        { category: "Cloud & Systems", items: ["Azure", "Linux", "Docker"] },
        { category: "Security Tools", items: ["Nmap", "Wireshark", "Burp Suite", "Mestasploit", "John the Ripper"] },
        { category: "Workflow", items: ["GitHub"] },
      ],
    },
    projects: {
      index: "04",
      title: "Projects",
      items: [
        {
          title: "JGScan",
          desc: "TCP port scanner with service detection, risk analysis, and report export. Developed as a portfolio project in cybersecurity/ethical hacking.",
          tags: ["Nmap", "Python", "Linux"],
          github: "https://github.com/juangrasantiago/JGScan",
          demo: ""
        },
        {
          title: "Burguer Q'Komo? — Digital menu website for restaurants",
          desc: "Digital menu for the fast-food restaurant Q'Komo?. A static website built using HTML, CSS, and vanilla JavaScript, without frameworks or external dependencies. It features a minimalist design with a dark background and an orange-red color palette. It includes sticky navigation, a hero section, and all menu categories organized and dynamically rendered directly from the code.",
          tags: ["Html", "CSS", "JavasCript"],
          github: "https://github.com/juangrasantiago/Burger-Q-Komo-",
          demo: "https://qkomo.vercel.app/#"
        },
        {
          title: "JGSAnalyzer",
          desc: "HTTP security header analysis tool developed in Python. Detects missing headers, classifies the risk, and generates JSON reports.",
          tags: ["Python"],
          github: "https://github.com/juangrasantiago/JGSAnalyzer",
          demo: ""
        },
        {
          title: "JGSPasswordKeys",
          desc: "Complex password generator with cryptographically secure entropy (secrets module) and an encrypted local vault (Fernet + PBKDF2-HMAC-SHA256) to store credentials by service, protected by a master password.",
          tags: ["Python", "Cryptography", "CLI"],
          github: "https://github.com/juangrasantiago/JGSPasswordKeys",
          demo: ""
        },
        {
          title: "FRIKIZONE",
          desc: "Final project for DAW degree, online website for selling board games and console games",
          tags: ["HTML", "CSS", "JavaScript", "PHP"],
          github: "https://github.com/juangrasantiago/FRIKIZONE",
          demo: ""
        },
      ],
    },
    labs: {
      index: "05",
      title: "Cybersecurity Labs",
      items: [
        {
          name: "HackTheBox — Offensive Path",
          desc: "Completed rooms covering enumeration, privilege escalation, and exploitation in controlled environments.",
          level: "Intermediate",
        },
        {
          name: "Packet Capture Analysis",
          desc: "Dissected live and recorded traffic with Wireshark to identify ARP spoofing, port scans, and exfiltration attempts.",
          level: "Hands-on",
        },
        {
          name: "Nmap Recon Lab",
          desc: "Mapped network topologies, fingerprinted services, and documented attack surface across isolated subnets.",
          level: "Hands-on",
        },
        {
          name: "Web Exploitation with Burp",
          desc: "Intercepted and manipulated requests to test for injection, broken auth, and insecure direct object references.",
          level: "Intermediate",
        },
      ],
    },
    contact: {
      index: "06",
      title: "Get In Touch",
      desc: "I'm actively seeking junior roles in cybersecurity and cloud. Whether you have an opportunity, a question, or just want to discuss something we have in common—my inbox is always open.",
      cta: "Say Hello",
    },
    footer: {
      built: "Built & secured by Juan Gabriel Santiago",
      designed: "Designed with Next.js & Tailwind",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      certifications: "Certificaciones",
      skills: "Habilidades",
      projects: "Proyectos",
      labs: "Labs",
      contact: "Contacto",
      switchTo: "EN",
      switchLabel: "Cambiar a inglés",
    },
    hero: {
      badge: "Listo para Demostrar",
      role: "Junior en Ciberseguridad | Desarrollador Web | Cloud",
      bio: "Aseguro sistemas y construyo infraestructura cloud resiliente. Enfocado en análisis de amenazas, evaluación de vulnerabilidades y seguridad en Azure — convirtiendo el trabajo práctico de laboratorio en defensa del mundo real.",
      viewProjects: "Proyectos",
      getInTouch: "Contáctame",
    },
    about: {
      index: "01",
      title: "Sobre mí",
      p1: "Soy Técnico IT con reciente especialización en ciberseguridad y conocimientos en cloud. Con pasión por proteger sistemas y entender cómo piensan los atacantes. Mi camino empezó con la curiosidad por cómo funcionan las redes y pronto se convirtió en un enfoque por asegurarlas.",
      p2a: "Tengo las certificaciones",
      p2b: "y",
      p2c: ", y dedico mi tiempo a desarrollar habilidades prácticas mediante laboratorios caseros y proyectos personales, como también capturando paquetes, analizando aplicaciones web y fortaleciendo entornos Linux.",
      p3: "Tengo muchas ganas de recibir una oportunidad de un equipo donde pueda crecer en este mundo de las nuevas técnologias, contribuir a una postura de seguridad sólida y seguir aprendiendo cada día.",
      highlights: [
        {
          title: "Seguridad primero",
          desc: "Evaluación de vulnerabilidades, modelado de amenazas y análisis defensivo.",
        },
        {
          title: "Cloud nativo",
          desc: "Fundamentos de Azure, identidad y diseño de infraestructura segura.",
        },
        {
          title: "Laboratorios prácticos",
          desc: "Práctica continua con herramientas ofensivas y defensivas.",
        },
      ],
    },
    certifications: {
      index: "02",
      title: "Certificaciones",
      verified: "Verificada",
      viewCertificate: "Ver certificado",
      items: [
        {
          code: "AZ-900",
          name: "Microsoft Azure Fundamentals",
          issuer: "Microsoft",
          desc: "Conceptos básicos de cloud, servicios de Azure, precios y gobernanza.",
          pdf: "/certs/Credencial az900 - Juan Gabriel.pdf"
        },
        {
          code: "SC-900",
          name: "Fundamentos de Seguridad, Cumplimiento e Identidad",
          issuer: "Microsoft",
          desc: "Conceptos de seguridad, cumplimiento e identidad en la nube de Microsoft.",
          pdf: "/certs/CertificadoSC-900.pdf"
        },
      ],
    },
    skills: {
      index: "03",
      title: "Habilidades y herramientas",
      groups: [
        { category: "Lenguajes", items: ["Python", "JavaScript", "SQL", "HTML", "CSS",] },
        { category: "Cloud y sistemas", items: ["Azure", "Linux", "Docker"] },
        { category: "Herramientas de seguridad", items: ["Nmap", "Wireshark", "Burp Suite", "Mestasploit", "John the Ripper"] },
        { category: "Flujo de trabajo", items: ["GitHub"] },
      ],
    },
    projects: {
      index: "04",
      title: "Proyectos",
      items: [
        {
          title: "JGScan",
          desc: "Escáner de puertos TCP con detección de servicios, análisis de riesgo y exportación de reportes. Desarrollado como proyecto de portafolio en ciberseguridad / hacking ético.",
          tags: ["Nmap", "Python", "Linux"],
          github: "https://github.com/juangrasantiago/JGScan",
          demo: ""
        },
        {
          title: "Burguer Q'Komo? — Web de carta digital para restaurante",
          desc: "Carta digital para el restaurante de comida rápida Q'Komo?. Web estática desarrollada con HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias externas. Diseño minimalista con fondo oscuro y paleta naranja-rojiza. Incluye navegación sticky, hero section y todas las categorías del menú organizadas y renderizadas dinámicamente desde el propio código.",
          tags: ["Html", "CSS", "JavasCript"],
          github: "https://github.com/juangrasantiago/Burger-Q-Komo-",
          demo: "https://qkomo.vercel.app/#"
        },
        {
          title: "JGSAnalyzer",
          desc: "Herramienta de análisis de cabeceras de seguridad HTTP desarrollada en Python. Detecta cabeceras ausentes, clasifica el riesgo y genera reportes JSON.",
          tags: ["Python"],
          github: "https://github.com/juangrasantiago/JGSAnalyzer",
          demo: ""
        },
        {
          title: "JGSPasswordKeys",
          desc: "Generador de contraseñas complejas con entropía criptográfica real (módulo secrets) y bóveda cifrada local (Fernet + PBKDF2-HMAC-SHA256) para guardar credenciales por servicio, protegida con contraseña maestra.",
          tags: ["Python", "Criptografía", "CLI"],
          github: "https://github.com/juangrasantiago/JGSPasswordKeys",
          demo: ""
        },
        {
          title: "FRIKIZONE",
          desc: "Proyecto de fin de grado de DAW, página web online de venta de juegos de mesa y juegos de consola",
          tags: ["HTML", "CSS", "JavaScript", "PHP"],
          github: "https://github.com/juangrasantiago/FRIKIZONE",
          demo: "" 
        },
      ],
    },
    labs: {
      index: "05",
      title: "Laboratorios de ciberseguridad",
      items: [
        {
          name: "HackTheBox — Ruta ofensiva",
          desc: "Completé salas que cubren enumeración, escalada de privilegios y explotación en entornos controlados.",
          level: "Intermedio",
        },
        {
          name: "Análisis de captura de paquetes",
          desc: "Analicé tráfico en vivo y grabado con Wireshark para identificar ARP spoofing, escaneos de puertos e intentos de exfiltración.",
          level: "Práctico",
        },
        {
          name: "Laboratorio de reconocimiento con Nmap",
          desc: "Mapeé topologías de red, identifiqué servicios y documenté la superficie de ataque en subredes aisladas.",
          level: "Práctico",
        },
        {
          name: "Explotación web con Burp",
          desc: "Intercepté y manipulé peticiones para probar inyección, autenticación rota y referencias directas inseguras a objetos.",
          level: "Intermedio",
        },
      ],
    },
    contact: {
      index: "06",
      title: "Contacto",
      desc: "Estoy buscando activamente roles junior en ciberseguridad y cloud. Ya sea que tengas una oportunidad, una pregunta o solo quieras hablar de algo que tengamos en común — mi bandeja de entrada siempre estará abierta.",
      cta: "Saludar",
    },
    footer: {
      built: "Creado y asegurado por Juan Gabriel Santiago",
      designed: "Diseñado con Next.js y Tailwind",
    },
  },
} as const

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang") as Lang | null
    if (stored === "en" || stored === "es") {
      setLang(stored)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("portfolio-lang", lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((prev) => (prev === "en" ? "es" : "en"))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
