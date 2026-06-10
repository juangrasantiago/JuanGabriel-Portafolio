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
      badge: "Available for opportunities",
      role: "Junior Cybersecurity & Cloud Specialist",
      bio: "I secure systems and build resilient cloud infrastructure. Focused on threat analysis, vulnerability assessment, and Azure cloud security — turning hands-on lab work into real-world defense.",
      viewProjects: "View Projects",
      getInTouch: "Get in touch",
    },
    about: {
      index: "01",
      title: "About Me",
      p1: "I'm a junior cybersecurity and cloud specialist with a passion for protecting systems and understanding how attackers think. My journey started with curiosity about how networks work and quickly grew into a focus on securing them.",
      p2a: "I hold the",
      p2b: "and",
      p2c: "certifications, and I spend my time building practical skills through home labs — running packet captures, probing web apps, and hardening Linux environments.",
      p3: "I'm eager to join a team where I can grow as a security analyst or cloud engineer, contribute to a strong security posture, and keep learning every day.",
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
      items: [
        {
          code: "AZ-900",
          name: "Microsoft Azure Fundamentals",
          issuer: "Microsoft",
          desc: "Core cloud concepts, Azure services, pricing, and governance.",
        },
        {
          code: "SC-900",
          name: "Security, Compliance & Identity Fundamentals",
          issuer: "Microsoft",
          desc: "Security, compliance, and identity concepts across Microsoft cloud.",
        },
      ],
    },
    skills: {
      index: "03",
      title: "Skills & Tooling",
      groups: [
        { category: "Languages", items: ["Python", "JavaScript", "SQL", "HTML", "CSS"] },
        { category: "Cloud & Systems", items: ["Azure", "Linux", "Docker"] },
        { category: "Security Tools", items: ["Nmap", "Wireshark", "Burp Suite"] },
        { category: "Workflow", items: ["GitHub"] },
      ],
    },
    projects: {
      index: "04",
      title: "Projects",
      items: [
        {
          title: "Azure Secure Landing Zone",
          desc: "Designed a hardened Azure environment with role-based access control, network security groups, and centralized logging via Microsoft Sentinel.",
          tags: ["Azure", "RBAC", "Sentinel", "IaC"],
        },
        {
          title: "Network Traffic Analyzer",
          desc: "Python tool that parses packet captures, flags suspicious traffic patterns, and generates summary reports of potential intrusions.",
          tags: ["Python", "Wireshark", "Networking"],
        },
        {
          title: "Web App Vulnerability Scanner",
          desc: "Automated scanner that probes common OWASP Top 10 issues against a target, integrating Burp Suite findings into a single dashboard.",
          tags: ["Burp Suite", "OWASP", "Python"],
        },
        {
          title: "Linux Hardening Toolkit",
          desc: "Collection of shell scripts that apply CIS benchmark controls, audit user permissions, and lock down SSH on Debian servers.",
          tags: ["Linux", "Bash", "Hardening"],
        },
      ],
    },
    labs: {
      index: "05",
      title: "Cybersecurity Labs",
      items: [
        {
          name: "TryHackMe — Offensive Path",
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
      desc: "I'm actively looking for junior cybersecurity and cloud roles. Whether you have an opportunity, a question, or just want to talk security — my inbox is always open.",
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
      certifications: "Certs",
      skills: "Skills",
      projects: "Proyectos",
      labs: "Labs",
      contact: "Contacto",
      switchTo: "EN",
      switchLabel: "Cambiar a inglés",
    },
    hero: {
      badge: "Disponible para oportunidades",
      role: "Especialista Junior en Ciberseguridad y Cloud",
      bio: "Aseguro sistemas y construyo infraestructura cloud resiliente. Enfocado en análisis de amenazas, evaluación de vulnerabilidades y seguridad en Azure — convirtiendo el trabajo práctico de laboratorio en defensa del mundo real.",
      viewProjects: "Ver proyectos",
      getInTouch: "Contáctame",
    },
    about: {
      index: "01",
      title: "Sobre mí",
      p1: "Soy un especialista junior en ciberseguridad y cloud con pasión por proteger sistemas y entender cómo piensan los atacantes. Mi camino empezó con la curiosidad por cómo funcionan las redes y pronto se convirtió en un enfoque por asegurarlas.",
      p2a: "Tengo las certificaciones",
      p2b: "y",
      p2c: ", y dedico mi tiempo a desarrollar habilidades prácticas mediante laboratorios caseros — capturando paquetes, analizando aplicaciones web y fortaleciendo entornos Linux.",
      p3: "Tengo muchas ganas de unirme a un equipo donde pueda crecer como analista de seguridad o ingeniero cloud, contribuir a una postura de seguridad sólida y seguir aprendiendo cada día.",
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
      items: [
        {
          code: "AZ-900",
          name: "Microsoft Azure Fundamentals",
          issuer: "Microsoft",
          desc: "Conceptos básicos de cloud, servicios de Azure, precios y gobernanza.",
        },
        {
          code: "SC-900",
          name: "Fundamentos de Seguridad, Cumplimiento e Identidad",
          issuer: "Microsoft",
          desc: "Conceptos de seguridad, cumplimiento e identidad en la nube de Microsoft.",
        },
      ],
    },
    skills: {
      index: "03",
      title: "Habilidades y herramientas",
      groups: [
        { category: "Lenguajes", items: ["Python", "JavaScript", "SQL", "HTML", "CSS"] },
        { category: "Cloud y sistemas", items: ["Azure", "Linux", "Docker"] },
        { category: "Herramientas de seguridad", items: ["Nmap", "Wireshark", "Burp Suite"] },
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
        },
        {
          title: "Analizador de tráfico de red",
          desc: "Herramienta en Python que analiza capturas de paquetes, detecta patrones de tráfico sospechosos y genera informes resumidos de posibles intrusiones.",
          tags: ["Python", "Wireshark", "Redes"],
        },
        {
          title: "Escáner de vulnerabilidades web",
          desc: "Escáner automatizado que prueba los problemas comunes del OWASP Top 10 sobre un objetivo, integrando los hallazgos de Burp Suite en un único panel.",
          tags: ["Burp Suite", "OWASP", "Python"],
        },
        {
          title: "FRIKIZONE",
          desc: "Proyecto de fin de grado de DAW, página web online de venta de juegos de mesa y juegos de consola",
          tags: ["HTML", "CSS", "PHP","JavaScritp"],
        },
      ],
    },
    labs: {
      index: "05",
      title: "Laboratorios de ciberseguridad",
      items: [
        {
          name: "TryHackMe — Ruta ofensiva",
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
      desc: "Estoy buscando activamente roles junior en ciberseguridad y cloud. Ya sea que tengas una oportunidad, una pregunta o solo quieras hablar de seguridad — mi bandeja de entrada siempre está abierta.",
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
