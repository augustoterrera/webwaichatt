"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"
type Translations = Record<Language, Record<string, string>>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

const translations: Translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.faq": "FAQ",
    "nav.crm": "CRM",
    "nav.plans": "Plans",
    "nav.integrations": "Integrations",
    "header.demo": "Schedule your demo",

    // Hero Section
    "hero.badge": "Advanced Conversational AI",
    "hero.title": "Automate your business with",
    "hero.title.highlight": "conversational AI",
    "hero.subtitle": "CRM, Intelligent Agents and Reports that transform your WhatsApp into a sales machine",
    "hero.demo": "Contact us",
    "hero.audit": "Schedule your free demo",
    "hero.ai.active": "AI Active 🤖",

    // Hero Features (new)
    "hero.feature.sales": "CLOSE COMPLETE SALES",
    "hero.feature.sales.sub": "FROM HELLO TO PAYMENT",
    "hero.feature.respond": "RESPOND AS IF YOU WERE YOU",
    "hero.feature.respond.sub": "LEARN FROM YOUR CATALOG",
    "hero.feature.sell": "SELL UP TO 3X\nMORE",
    "hero.feature.sell.sub": "OPTIMIZES ITSELF",
    "hero.feature.implement": "WE IMPLEMENT IT FOR YOU",
    "hero.feature.implement.sub": "NO CONFIGURATIONS",

    // Problem Solution Section
    "problem.title": "Tired of losing customers due to slow responses?",
    "problem.subtitle": "Waichatt responds for you, 24/7, learns from every conversation and helps you sell more",
    "problem.attention": "Attention",
    "problem.attention.desc": "Immediate response",
    "problem.sales": "Sales",
    "problem.sales.desc": "Automatic closing",
    "problem.schedule": "Schedule",
    "problem.schedule.desc": "Smart appointments",
    "problem.collection": "Collection",
    "problem.collection.desc": "Active follow-up",
    "problem.reports": "Reports",
    "problem.reports.desc": "Real-time insights",

    // CRM Section
    "crm.badge": "Intelligent CRM",
    "crm.title": "Manage all your conversations from one place",
    "crm.subtitle":
      "Our conversational CRM automatically organizes all your chats, identifies hot leads and helps you not miss any sales opportunity.",
    "crm.feature1": "Automatic conversation tagging",
    "crm.feature2": "Hot lead identification",
    "crm.feature3": "Complete customer history",
    "crm.feature4": "Real-time reports",
    "crm.action": "See CRM in action",
    "crm.integrated": "Integrated with",
    "crm.live": "Live",

    // Pricing Section
    "pricing.title": "Plans designed for your growth",
    "pricing.subtitle": "Scalable, flexible and with message accumulation",
    "pricing.popular": "Most Popular",
    "pricing.starter": "Starter",
    "pricing.starter.target": "Entrepreneurs and small businesses",
    "pricing.starter.messages": "1,000 messages",
    "pricing.pro": "Pro",
    "pricing.pro.target": "Growing companies",
    "pricing.pro.messages": "5,000 messages",
    "pricing.enterprise": "Enterprise",
    "pricing.enterprise.target": "Large companies",
    "pricing.enterprise.messages": "14,000 messages",
    "pricing.custom": "Custom",
    "pricing.custom.target": "Specific solutions",
    "pricing.custom.messages": "Unlimited messages",
    "pricing.contact": "Contact",
    "pricing.start": "Start now",
    "pricing.note": "💡 Unused messages accumulate for the next month",
    "pricing.services.title": "Other services we offer",
    "pricing.service1": "Personal assistants with AI",
    "pricing.service2": "Accounting system + AI",
    "pricing.service3": "Advertising with Meta ADS",
    "pricing.service4": "Data science (Business Intelligence)",
    "pricing.service5": "Automation of any process",
    "pricing.service6": "Customer service agent",
    "pricing.service7": "Agents for digital businesses (WhatsApp, marketing, Meta Ads, automated metrics and alerts)",
    "pricing.service8": "Website Creation",

    // Integrations Section
    "integrations.title": "Integrations that power your ecosystem",
    "integrations.subtitle": "Connect with the tools you already use",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "We answer the most common questions about Waichatt",

    "faq.q1": "What makes Waichatt different from other AIs?",
    "faq.a1": "Waichatt is the only AI on the market that can automate the entire sales flow from start to finish — from the first hello to the final payment. Unlike other tools that only automate parts of the process and still require manual responses, Waichatt handles the full conversation flow, ensuring efficiency and real results.",

    "faq.q2": "How does Waichatt connect to WhatsApp Business?",
    "faq.a2": "Waichatt connects directly to the official WhatsApp Business Cloud API, ensuring a secure and stable integration. Everything runs in the cloud with maximum security and 24/7 availability.",

    "faq.q3": "How much does it cost to implement Waichatt?",
    "faq.a3": "We offer plans starting at $60/month for small businesses and scalable enterprise solutions. All plans include full implementation, tech support, and automatic updates. Most businesses see ROI within the first 4 weeks.",

    "faq.q4": "How personalized is my AI assistant?",
    "faq.a4": "Your assistant is 100% tailored to your business. It learns from your product catalog, your communication style, and your sales process, adapting to your specific industry. It can handle complex inquiries, process orders, schedule appointments, and more — all while reflecting your brand’s voice.",

    "faq.q5": "Is Waichatt only for WhatsApp or does it support other platforms?",
    "faq.a5": "While we specialize in WhatsApp Business, Waichatt also integrates with Instagram, Facebook Messenger, Telegram, and over 50 additional platforms. You can manage all conversations from a single unified CRM.",

    "faq.q6": "Does the AI understand voice notes, photos and documents?",
    "faq.a6": "Yes, Waichatt can understand voice messages, images, documents, and all kinds of multimedia files.",

    "faq.q7": "Can the AI send photos or videos?",
    "faq.a7": "Yes, Waichatt can send images, videos, documents, voice messages, and any type of media. It can show your product catalog with photos, send demo videos, payment receipts, and anything else needed to close a sale.",

    "faq.q8": "What if the customer wants to speak to a human?",
    "faq.a8": "Waichatt is designed to detect when a customer needs human attention and can automatically transfer the chat to your team. You can also set up custom keywords that trigger the transfer to ensure customer satisfaction.",

    "faq.q9": "How long does it take to implement Waichatt?",
    "faq.a9": "Basic implementation takes 24–48 hours. Our team handles all setup, AI training with your info, and testing. More complex enterprise setups may take 1–2 weeks depending on required integrations.",

    "faq.q10": "What if I want to automate different areas of my business?",
    "faq.a10": "We offer a free audit to identify repetitive tasks that waste time and can be automated. Then we develop a custom solution to optimize those processes using AI.",

    "faq.q11": "Can I change my plan at any time?",
    "faq.a11": "Yes. You can upgrade or adjust your plan whenever needed. Changes apply according to the terms agreed with your advisor.",

    "faq.q12": "Are there hidden costs?",
    "faq.a12": "No. The price is clear from the beginning. It includes a monthly AI usage limit, and any capacity expansion is always communicated beforehand.",

    "faq.q13": "Do you offer a free trial?",
    "faq.a13": "Yes. To access a trial or guided demo, you can speak with a sales advisor.",

    "faq.q14": "What payment methods do you accept?",
    "faq.a14": "We accept credit cards, debit cards, and bank transfers, with monthly or annual billing depending on the commercial agreement.",
    // CTA Section
    "cta.title": "Want to see how it would work in your business?",
  "cta.subtitle": "Schedule a personalized demo and discover the potential of conversational AI for your company",
  "cta.demo": "Schedule demo",
  "cta.audit": "Request audit",



  // Footer
  "footer.tagline": "Intelligent automation for the future of your business",
  "footer.navigation": "Navigation",
  "footer.services": "Services",
  "footer.contact": "Contact",
  "footer.service1": "Personal assistants with AI",
  "footer.service2": "Accounting system + AI",
  "footer.service3": "Advertising with Meta Ads",
  "footer.service4": "Data science",
  "footer.support": "24/7 Support",
  "footer.demo": "Personalized demo",
  "footer.rights": `© ${new Date().getFullYear()} Waichatt. All rights reserved.`,
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms",



},
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.faq": "Preg frecuentes",
    "nav.crm": "Plataforma",
    "nav.plans": "Planes",
    "nav.integrations": "Integraciones",
    "header.demo": "Agendá una demo",

    // Hero Section
    "hero.badge": "CRM inmobiliario con IA para WhatsApp",
    "hero.title": "Gestioná tu inmobiliaria desde",
    "hero.title.highlight": "un solo lugar",
    "hero.subtitle": "Centralizá consultas, propiedades, visitas y seguimiento comercial con un CRM pensado para inmobiliarias.",
    "hero.demo": "Hablar por WhatsApp",
    "hero.audit": "Agendar demo",
    "hero.ai.active": "IA Activa 🤖",

    // Hero Features (new)
    "hero.feature.sales": "CAPTÁ LEADS DE WHATSAPP",
    "hero.feature.sales.sub": "SIN PERDER CONSULTAS",
    "hero.feature.respond": "RESPUESTAS CON IA",
    "hero.feature.respond.sub": "SEGÚN TU CARTERA",
    "hero.feature.sell": "AGENDA VISITAS",
    "hero.feature.sell.sub": "Y SEGUÍ CADA OPORTUNIDAD",
    "hero.feature.implement": "TU CRM INMOBILIARIO",
    "hero.feature.implement.sub": "LISTO PARA OPERAR",

    // Problem Solution Section
    "problem.title": "¿Tu inmobiliaria pierde oportunidades por falta de seguimiento?",
    "problem.subtitle": "Waichatt organiza tus consultas, detecta interesados, sugiere propiedades y ayuda a tu equipo a vender y alquilar mejor.",
    "problem.attention": "Consultas",
    "problem.attention.desc": "Todo WhatsApp ordenado",
    "problem.sales": "Leads",
    "problem.sales.desc": "Pipeline comercial",
    "problem.schedule": "Visitas",
    "problem.schedule.desc": "Agenda sincronizada",
    "problem.collection": "Propiedades",
    "problem.collection.desc": "Cartera centralizada",
    "problem.reports": "Métricas",
    "problem.reports.desc": "Estado de tu operación",

    // CRM Section
    "crm.badge": "CRM para inmobiliarias",
    "crm.title": "Convertí cada consulta en una oportunidad organizada",
    "crm.subtitle":
    "Gestioná conversaciones, contactos, propiedades, visitas y etapas comerciales desde una plataforma diseñada para equipos inmobiliarios.",
    "crm.feature1": "Bandeja de WhatsApp con agente IA por conversación",
    "crm.feature2": "Pipeline de leads: nuevo, contactado, visita y negociación",
    "crm.feature3": "Ficha completa del cliente con intereses y presupuesto",
    "crm.feature4": "Sugerencias de propiedades y reportes en tiempo real",
    "crm.action": "Ver CRM en acción",
    "crm.integrated": "Conectado con",
    "crm.live": "Activo",

    // Pricing Section
    "pricing.title": "Planes para equipos inmobiliarios",
    "pricing.subtitle": "Elegí el plan según el volumen de consultas, propiedades y agentes de tu inmobiliaria",
    "pricing.popular": "Más Popular",
    "pricing.starter": "Starter",
    "pricing.starter.target": "Inmobiliarias chicas que empiezan a ordenar sus consultas",
    "pricing.starter.messages": "1,000 mensajes",
    "pricing.pro": "Pro",
    "pricing.pro.target": "Equipos que gestionan múltiples propiedades y visitas",
    "pricing.pro.messages": "5,000 mensajes",
    "pricing.enterprise": "Enterprise",
    "pricing.enterprise.target": "Inmobiliarias con alto volumen y procesos avanzados",
    "pricing.enterprise.messages": "14,000 mensajes",
    "pricing.custom": "Personalizado",
    "pricing.custom.target": "Implementaciones a medida",
    "pricing.custom.messages": "Mensajes ilimitados",
    "pricing.contact": "Contactar",
    "pricing.start": "Comenzar ahora",
    "pricing.note": "Incluye implementación, configuración inicial y acompañamiento para tu equipo.",
    "pricing.services.title": "Qué puede incluir tu plataforma",
    "pricing.service1": "CRM de leads inmobiliarios",
    "pricing.service2": "Bandeja de WhatsApp centralizada",
    "pricing.service3": "Agente IA entrenado con tu cartera",
    "pricing.service4": "Gestión de propiedades",
    "pricing.service5": "Agenda de visitas",
    "pricing.service6": "Web inmobiliaria con catálogo",
    "pricing.service7": "Importación desde Tokko Broker",
    "pricing.service8": "Reportes comerciales",

    // Integrations Section
    "integrations.title": "Integraciones para tu operación inmobiliaria",

    // FAQ Section
    "faq.title": "Preguntas frecuentes",
    "faq.subtitle": "Resolvemos las dudas más comunes sobre Waichatt",

    "faq.q1": "¿Waichatt es un CRM o solo un bot de WhatsApp?",
    "faq.a1": "Es una plataforma CRM para inmobiliarias. Incluye conversaciones por WhatsApp, gestión de leads, propiedades, visitas, equipo, reportes y un agente IA configurable.",

    "faq.q2": "¿La IA puede recomendar propiedades a los clientes?",
    "faq.a2": "Sí. El agente puede interpretar zona, presupuesto, tipo de operación y preferencias del cliente para sugerir propiedades de tu cartera.",

    "faq.q3": "¿Puedo apagar la IA en una conversación?",
    "faq.a3": "Sí. Cada chat puede tener el agente IA activado o pausado, para que tu equipo tome el control cuando lo necesite.",

    "faq.q4": "¿Sirve para ventas y alquileres?",
    "faq.a4": "Sí. Podés gestionar propiedades en venta, alquiler o temporal, y seguir cada oportunidad desde el primer contacto hasta la negociación.",

    "faq.q5": "¿Puedo agendar visitas?",
    "faq.a5": "Sí. La plataforma incluye calendario con vistas por día, semana o mes, y puede sincronizarse con Google Calendar.",

    "faq.q6": "¿Puedo cargar propiedades ilimitadas?",
    "faq.a6": "Sí. Podés cargar todas las propiedades que necesites, con fotos, videos, precios, ubicación, amenities, estado de publicación y tipo de operación.",

    "faq.q7": "¿Se puede importar desde Tokko Broker?",
    "faq.a7": "Sí. La plataforma contempla importación y sincronización de propiedades desde Tokko Broker mediante API.",

    "faq.q8": "¿Qué pasa si responde una persona desde WhatsApp Business?",
    "faq.a8": "El bot puede pausarse automáticamente cuando interviene un humano, manteniendo una convivencia ordenada entre atención manual e IA.",

    "faq.q9": "¿La plataforma sirve para equipos?",
    "faq.a9": "Sí. Podés invitar integrantes, asignar roles y repartir conversaciones o leads entre agentes.",

    "faq.q10": "¿También incluye una web para mi inmobiliaria?",
    "faq.a10": "Sí. Incluye un sitio web propio para tu inmobiliaria, actualizado automáticamente con tu cartera de propiedades.",

    "faq.q11": "¿Puedo cambiar de plan en cualquier momento?",
    "faq.a11": "Sí. Podés actualizar o ajustar tu plan cuando lo necesites. Los cambios se aplican según las condiciones acordadas con tu asesor.",

    "faq.q12": "¿Hay costos ocultos?",
    "faq.a12": "No. El precio informado es claro desde el inicio. Incluye un límite mensual de uso de IA y, si necesitás ampliar capacidad, siempre se informa previamente.",

    "faq.q13": "¿Ofrecen prueba gratuita?",
    "faq.a13": "Sí. Para acceder a una prueba o demo guiada, podés hablar con un asesor de ventas.",

    "faq.q14": "¿Qué métodos de pago aceptan?",
    "faq.a14": "Aceptamos tarjetas de crédito, débito y transferencias bancarias, con facturación mensual o anual según el acuerdo comercial.",
    // CTA Section
    "cta.title": "¿Querés ver cómo funcionaría en tu inmobiliaria?",
    "cta.subtitle": "Agendá una demo y te mostramos cómo centralizar consultas, propiedades, visitas y seguimiento comercial.",
    "cta.demo": "Agendar demo",
    "cta.audit": "Hablar por WhatsApp",

    // Footer
    "footer.tagline": "CRM inmobiliario con WhatsApp e inteligencia artificial",
    "footer.navigation": "Navegación",
    "footer.services": "Plataforma",
    "footer.contact": "Contacto",
    "footer.service1": "CRM inmobiliario",
    "footer.service2": "Agente IA para WhatsApp",
    "footer.service3": "Gestión de propiedades",
    "footer.service4": "Agenda y reportes",
    "footer.support": "Soporte para tu equipo",
    "footer.demo": "Demo personalizada",
    "footer.rights": `© ${new Date().getFullYear()
  } Waichatt. Todos los derechos reservados.`,
    "footer.privacy": "Políticas de privacidad",
    "footer.terms": "Términos",




  },
}
