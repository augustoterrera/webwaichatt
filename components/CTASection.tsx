"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface CTASectionProps {
  scrollY: number
}

export function CTASection({ scrollY }: CTASectionProps) {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-r from-[#259A72] to-[#1F7A5D] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent animate-gradient-shift"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold animate-text-reveal">{t("cta.title")}</h2>
          <p className="text-xl opacity-90">{t("cta.subtitle")}</p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
             onClick={() => window.open("https://calendar.app.google/MSXoZnDqLGdtNmKx5", "_blank")}
              size="lg"
              className="bg-white text-[#259A72] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t("cta.demo")}
            </Button>
            <Button
             onClick={() => window.open("https://calendar.app.google/MSXoZnDqLGdtNmKx5", "_blank")}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#259A72] bg-transparent hover:scale-110 transition-all duration-300"
            >
              {t("cta.audit")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
