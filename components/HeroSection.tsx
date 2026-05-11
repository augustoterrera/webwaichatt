"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, Phone } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { useLanguage } from "@/contexts/LanguageContext"

interface HeroSectionProps {
  scrollY: number
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  const [heroRef, heroInView] = useInView(0.3)
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      className="pt-32 pb-20 relative overflow-hidden select-none bg-gradient-to-br from-[#f7f8f4] via-[#eef7f1] to-[#fafaf7]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(37,154,114,0.14),transparent_34%),radial-gradient(circle_at_14%_34%,rgba(37,154,114,0.08),transparent_28%)] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"></div>
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#259A72_1px,transparent_1px),linear-gradient(90deg,#259A72_1px,transparent_1px)] [background-size:82px_82px] [mask-image:linear-gradient(to_bottom,black,transparent_74%)]"></div>

      {/* Parallax background elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#259A72]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1F7A5D]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative" ref={heroRef}>
        {/* Main content with phone and features */}
        <div className="relative min-h-[80vh] flex items-center justify-center">
          {/* Phone in center */}
          <div className={`relative select-none z-10 ${heroInView ? "animate-scale-in" : "opacity-0"}`}>
            <div className="relative transform hover:scale-105 transition-transform duration-700 animate-float">
              <div className="absolute -inset-8 translate-y-10 rounded-[3rem] bg-slate-950/25 blur-3xl"></div>
              <div className="absolute inset-x-8 bottom-4 h-20 rounded-full bg-[#259A72]/20 blur-2xl"></div>
              <img
                src="/images/chat_whatsapp.png"
                alt="Chat de WhatsApp automatizado por Waichatt"
                className="relative w-full h-auto max-w-sm mx-auto drop-shadow-[0_36px_70px_rgba(15,23,42,0.38)] select-none"
              />
            </div>
          </div>

          {/* Feature texts positioned around the phone */}

          {/* Top Left Feature */}
          <div className={`absolute top-1/4 left-8 max-w-xs ${heroInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute -left-4 top-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent to-[#259A72]/50"></div>
              <div className="absolute -left-6 top-1/2 w-3 h-3 bg-[#259A72]/70 rounded-full transform -translate-y-1/2 animate-pulse"></div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {t("hero.feature.sales")}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 font-medium">{t("hero.feature.sales.sub")}</p>
              </div>
            </div>
          </div>

          {/* Top Right Feature */}
          <div
            className={`absolute top-1/4 right-8 max-w-xs text-right ${heroInView ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute -right-4 top-1/2 w-16 h-0.5 bg-gradient-to-l from-transparent to-[#259A72]/50"></div>
              <div className="absolute -right-6 top-1/2 w-3 h-3 bg-[#259A72]/70 rounded-full transform -translate-y-1/2 animate-pulse"></div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {t("hero.feature.respond")}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 font-medium">{t("hero.feature.respond.sub")}</p>
              </div>
            </div>
          </div>

          {/* Bottom Left Feature */}
          <div
            className={`absolute bottom-1/4 left-8 max-w-xs ${heroInView ? "animate-slide-in-left" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute -left-4 top-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent to-[#259A72]/50"></div>
              <div className="absolute -left-6 top-1/2 w-3 h-3 bg-[#259A72]/70 rounded-full transform -translate-y-1/2 animate-pulse"></div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight whitespace-pre-line">
                  {t("hero.feature.sell")}
                </h3>

                <p className="text-lg md:text-xl text-gray-600 font-medium">{t("hero.feature.sell.sub")}</p>
              </div>
            </div>
          </div>

          {/* Bottom Right Feature */}
          <div
            className={`absolute bottom-1/4 right-8 max-w-xs text-right ${heroInView ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute -right-4 top-1/2 w-16 h-0.5 bg-gradient-to-l from-transparent to-[#259A72]/50"></div>
              <div className="absolute -right-6 top-1/2 w-3 h-3 bg-[#259A72]/70 rounded-full transform -translate-y-1/2 animate-pulse"></div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {t("hero.feature.implement")}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 font-medium">{t("hero.feature.implement.sub")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with traditional hero content */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`space-y-8 ${heroInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="space-y-4">
                <Badge className="bg-[#259A72]/10 text-[#259A72] hover:bg-[#259A72]/20 animate-bounce-subtle backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-1 animate-spin-slow" />
                  {t("hero.badge")}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {t("hero.title")}{" "}
                  <span className="bg-gradient-to-r from-[#259A72] to-[#1F7A5D] bg-clip-text text-transparent">
                    {t("hero.title.highlight")}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{t("hero.subtitle")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open("https://wa.me/+5493816814079", "_blank")}
                  size="lg"
                  className="bg-gradient-to-r from-[#259A72] to-[#1F7A5D] hover:from-[#1F7A5D] hover:to-[#259A72] text-white shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 animate-pulse-glow"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {t("hero.demo")}
                </Button>
                <Button
                  onClick={() => window.open("https://calendar.app.google/MSXoZnDqLGdtNmKx5", "_blank")}
                  size="lg"
                  variant="outline"
                  className="border-[#259A72]/40 text-[#259A72] hover:bg-[#259A72]/5 group bg-white/70 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  {t("hero.audit")}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
