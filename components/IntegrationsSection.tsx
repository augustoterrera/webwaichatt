"use client"

import { useInView } from "@/hooks/useInView"
import { useLanguage } from "@/contexts/LanguageContext"
import { integrations } from "@/data/constants"

export function IntegrationsSection() {
  const [integrationsRef, integrationsInView] = useInView(0.2)
  const { t } = useLanguage()

  // Crear múltiples copias para scroll infinito verdadero
  const infiniteIntegrations = [...integrations, ...integrations]

  return (
    <section id="integraciones" className="py-20 relative overflow-hidden select-none">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#259A72]/10 to-[#1F7A5D]/10"></div>
      </div>

      <div className="container mx-auto px-4" ref={integrationsRef}>
        <div className={`text-center space-y-6 mb-16 ${integrationsInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-gray-900 animate-text-reveal">{t("integrations.title")}</h2>
        </div>

        <div className="overflow-hidden select-none">
          <ul className="flex w-max gap-6 animate-scroll-x">
            {infiniteIntegrations.map((item, i) => (
              <li
                key={i}
                className="shrink-0 rounded-lg p-4 hover:scale-105 transition-transform duration-200 bg-white/50 backdrop-blur-sm shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={item} 
                    alt="Integration logo"
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain filter brightness-110 hover:brightness-125 transition-all duration-200"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
