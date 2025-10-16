"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Menu, X } from "lucide-react"
import { LanguageSelector } from "@/components/LanguageSelector"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

interface HeaderProps {
  scrollY: number
}

export function Header({ scrollY }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    // Set window height on client side
    setWindowHeight(window.innerHeight)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate if we're still in hero section (assuming hero is about 80vh)
  const isInHeroSection = windowHeight > 0 ? scrollY < windowHeight * 0.1 : true

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isInHeroSection
        ? "bg-transparent"
        : "bg-white/10 backdrop-blur-lg border-b border-white/10"
        }`}
    >
      <div className={`container mx-auto px-4 py-4 select-none ${isMenuOpen && isInHeroSection ? "border-white/20 backdrop-blur-sm" : ""}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-0 animate-fade-in-left">
            <div className="">
              <Image src="/images/waichattLogo.png" height={55} width={55} alt="Logo waichatt" className="w-[55px] h-[55px] text-white" />
            </div>
            <span
              className={`text-2xl font-bold transition-all duration-500 ${isInHeroSection
                ? "text-white "
                : "text-[#268656] drop-shadow-lg"
                } `}
            >
              Waichatt
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in-down">
            <a
              href="/#inicio"
              className={`transition-all duration-300 hover:scale-105 ${isInHeroSection
                ? "text-white hover:text-[#268656]"
                : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                }`}
            >
              {t("nav.home")}
            </a>
            <a
              href="/#crm"
              className={`transition-all duration-300 hover:scale-105 ${isInHeroSection
                ? "text-white hover:text-[#268656]"
                : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                }`}
            >
              {t("nav.crm")}
            </a>
            <a
              href="/#planes"
              className={`transition-all duration-300 hover:scale-105 ${isInHeroSection
                ? "text-white hover:text-[#268656]"
                : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                }`}
            >
              {t("nav.plans")}
            </a>
            <a
              href="/#integraciones"
              className={`transition-all duration-300 hover:scale-105 ${isInHeroSection
                ? "text-white hover:text-[#268656]"
                : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                }`}
            >
              {t("nav.integrations")}
            </a>
            <a
              href="/#preguntas-frecuentes"
              className={`transition-all duration-300 hover:scale-105 ${isInHeroSection
                ? "text-white hover:text-[#268656]"
                : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                }`}
            >
              {t("nav.faq")}
            </a>
            <a
              href="/blog"
              className={`transition-all duration-300 hover:scale-105 ${isInHeroSection
                ? "text-white hover:text-[#268656]"
                : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                }`}
            >
              Blog
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector isInHeroSection={isInHeroSection} />
            <Button onClick={() => window.open("https://calendar.app.google/SCf1X8mmyjq3U6S86", "_blank")} className="hidden md:flex bg-gradient-to-r from-[#268656] to-[#1f6b4a] hover:from-[#1f6b4a] hover:to-[#268656] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow">
              <Calendar className="w-4 h-4 mr-2" />
              {t("header.demo")}
            </Button>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isInHeroSection ? "text-white" : "text-[#268656] hover:text-[#31634b] drop-shadow-lg"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isInHeroSection ? "text-white" : "text-[#268656] hover:text-[#31634b] drop-shadow-lg"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 border-t animate-slide-down ${isInHeroSection
              ? "border-white/20 backdrop-blur-sm"
              : ""
              }`}
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="/#inicio"
                className={`transition-colors ${isInHeroSection
                  ? "text-white hover:text-[#268656]"
                  : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                  }`}
              >
                {t("nav.home")}
              </a>
              <a
                href="/#crm"
                className={`transition-colors ${isInHeroSection
                  ? "text-white hover:text-[#268656]"
                  : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                  }`}
              >
                {t("nav.crm")}
              </a>
              <a
                href="/#planes"
                className={`transition-colors ${isInHeroSection
                  ? "text-white hover:text-[#268656]"
                  : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                  }`}
              >
                {t("nav.plans")}
              </a>
              <a
                href="/#integraciones"
                className={`transition-colors ${isInHeroSection
                  ? "text-white hover:text-[#268656]"
                  : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                  }`}
              >
                {t("nav.integrations")}
              </a>
              <a
                href="/#preguntas-frecuentes"
                className={`transition-colors ${isInHeroSection
                  ? "text-white hover:text-[#268656]"
                  : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                  }`}
              >
                {t("nav.faq")}
              </a>
              <a
                href="/blog"
                className={`transition-colors ${isInHeroSection
                  ? "text-white hover:text-[#268656]"
                  : "text-[#268656] hover:text-[#31634b] drop-shadow-md"
                  }`}
              >
                Blog
              </a>
              <Button onClick={() => window.open("https://calendar.app.google/SCf1X8mmyjq3U6S86", "_blank")} className="w-full bg-gradient-to-r from-[#268656] to-[#1f6b4a] hover:from-[#1f6b4a] hover:to-[#268656] text-white">
                <Calendar className="w-4 h-4 mr-2" />
                {t("header.demo")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}