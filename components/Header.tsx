"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Menu, X } from "lucide-react"
import { LanguageSelector } from "@/components/LanguageSelector"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header
      className="fixed top-0 w-full z-50 border-b border-gray-200/70 bg-white/85 shadow-sm backdrop-blur-xl transition-all duration-500"
    >
      <div className="container mx-auto px-4 py-4 select-none">
        <div className="flex items-center justify-between">
          <div className="flex items-center animate-fade-in-left">
            <Image
              src="/logo_completo.svg"
              height={45}
              width={150}
              alt="Waichatt"
              className="drop-shadow-lg"
              style={{ height: "45px", width: "auto" }}
              loading="eager"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in-down">
            <a
              href="/#inicio"
              className="text-gray-700 transition-all duration-300 hover:scale-105 hover:text-[#259A72]"
            >
              {t("nav.home")}
            </a>
            <a
              href="/#crm"
              className="text-gray-700 transition-all duration-300 hover:scale-105 hover:text-[#259A72]"
            >
              {t("nav.crm")}
            </a>
            <a
              href="/#integraciones"
              className="text-gray-700 transition-all duration-300 hover:scale-105 hover:text-[#259A72]"
            >
              {t("nav.integrations")}
            </a>
            <a
              href="/#preguntas-frecuentes"
              className="text-gray-700 transition-all duration-300 hover:scale-105 hover:text-[#259A72]"
            >
              {t("nav.faq")}
            </a>
            <a
              href="/blog"
              className="text-gray-700 transition-all duration-300 hover:scale-105 hover:text-[#259A72]"
            >
              Blog
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector isInHeroSection={false} />
            <Button onClick={() => window.open("https://calendar.app.google/MSXoZnDqLGdtNmKx5", "_blank")} className="hidden md:flex bg-gradient-to-r from-[#259A72] to-[#1F7A5D] hover:from-[#1F7A5D] hover:to-[#259A72] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow">
              <Calendar className="w-4 h-4 mr-2" />
              {t("header.demo")}
            </Button>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#259A72] hover:text-[#1F7A5D]" />
              ) : (
                <Menu className="h-6 w-6 text-[#259A72] hover:text-[#1F7A5D]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="mt-4 border-t border-gray-200/70 pb-4 md:hidden animate-slide-down"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="/#inicio"
                className="text-gray-700 transition-colors hover:text-[#259A72]"
              >
                {t("nav.home")}
              </a>
              <a
                href="/#crm"
                className="text-gray-700 transition-colors hover:text-[#259A72]"
              >
                {t("nav.crm")}
              </a>
              <a
                href="/#integraciones"
                className="text-gray-700 transition-colors hover:text-[#259A72]"
              >
                {t("nav.integrations")}
              </a>
              <a
                href="/#preguntas-frecuentes"
                className="text-gray-700 transition-colors hover:text-[#259A72]"
              >
                {t("nav.faq")}
              </a>
              <a
                href="/blog"
                className="text-gray-700 transition-colors hover:text-[#259A72]"
              >
                Blog
              </a>
              <Button onClick={() => window.open("https://calendar.app.google/MSXoZnDqLGdtNmKx5", "_blank")} className="w-full bg-gradient-to-r from-[#259A72] to-[#1F7A5D] hover:from-[#1F7A5D] hover:to-[#259A72] text-white">
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
