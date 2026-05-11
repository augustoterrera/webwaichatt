"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { ChevronDown,Globe } from "lucide-react"

interface LanguageSelectorProps {
  isInHeroSection?: boolean
}

export function LanguageSelector({ isInHeroSection = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
          isInHeroSection ? "hover:bg-white/10 text-white" : "hover:bg-gray-100 "
        }`}
      >
        <Globe className={`w-6 h-6 ${isInHeroSection ? "text-white" : "text-black/50"}`} />
        <span className={`text-sm font-medium ${isInHeroSection ? "text-white" : "text-gray-800"}`}>
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${
            isInHeroSection ? "text-white/70" : "text-black/50"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as "en" | "es")
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                language === lang.code ? "bg-gray-50 text-[#259A72]" : "text-gray-700"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
