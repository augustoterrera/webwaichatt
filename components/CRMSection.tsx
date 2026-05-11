"use client"
import { Badge } from "@/components/ui/badge"
import { BarChart3, CheckCircle } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { useLanguage } from "@/contexts/LanguageContext"

interface CRMSectionProps {
  scrollY: number
}

export function CRMSection({ scrollY }: CRMSectionProps) {
  const [crmRef, crmInView] = useInView(0.2)
  const { t } = useLanguage()

  const features = [t("crm.feature1"), t("crm.feature2"), t("crm.feature3"), t("crm.feature4")]

  return (
    <section className="py-20 relative overflow-hidden select-none " id="crm">
      <div
        className="absolute inset-0 opacity-20" 
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#259A72]/10 to-[#1F7A5D]/10"></div>
      </div>

      <div className="container mx-auto px-4" ref={crmRef}>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 xl:gap-16 items-center">
          <div className={`space-y-6 ${crmInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <Badge className="bg-[#259A72]/10 text-[#259A72] hover:bg-[#259A72]/20 animate-bounce-subtle">
                <BarChart3 className="w-4 h-4 mr-1" />
                {t("crm.badge")}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 animate-text-reveal">{t("crm.title")}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">{t("crm.subtitle")}</p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 ${crmInView ? "animate-slide-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-[#259A72] animate-bounce-in" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative w-full max-w-[820px] lg:ml-auto ${crmInView ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 animate-float relative">
              <img
                src="/images/CRMimagen.png"
                alt="Dashboard CRM de Waichatt"
                className="w-full h-auto rounded-lg "
              />

              {/* Logos de integración flotantes */}
              <div className="absolute -top-6 -left-14 hidden md:flex flex-col space-y-3">
                <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
                  <img src="/images/logoWhatsapp.png" alt="WhatsApp Integration" className="w-12 h-12" />
                </div>
                <div
                  className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-subtle flex items-center justify-center"
                  style={{ animationDelay: "0.5s" }}
                >
                  <img src="/images/logoMeta.png" alt="Meta Integration" className="w-11 h-11 object-contain" />
                </div>
              </div>

              {/* Badge de integración en la esquina superior derecha */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#259A72] to-[#1F7A5D] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse flex items-center space-x-2">
                <span>{t("crm.integrated")}</span>
                <div className="flex space-x-1">
                  <img src="/images/logoWhatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                  <img src="/images/logoMeta.png" alt="Meta" className="w-6 h-6 object-contain" />
                </div>
              </div>

              {/* Indicador de estado en vivo */}
              <div className="absolute -bottom-1 -left-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <span>{t("crm.live")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
