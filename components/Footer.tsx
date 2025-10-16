"use client"

import { Bot } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center ">
              <div className="">
                <Image src="/images/waichattLogo.png" width={60} height={60} alt="Waichatt Icon" className="w-14 h-14 text-white" />
              </div>
              <span className="text-2xl font-bold">Waichatt</span>
            </div>
            <p className="text-gray-400">{t("footer.tagline")}</p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold mb-4">{t("footer.navigation")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#crm" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  {t("nav.crm")}
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  {t("nav.plans")}
                </a>
              </li>
              <li>
                <a
                  href="#integraciones"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  {t("nav.integrations")}
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t("footer.service1")}</li>
              <li>{t("footer.service2")}</li>
              <li>{t("footer.service3")}</li>
              <li>{t("footer.service4")}</li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@waichatt.com</li>
              <li>{t("footer.support")}</li>
              <li>{t("footer.demo")}</li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-gray-400">{t("footer.rights")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/politica-de-privacidad" className="text-gray-400 hover:text-white transition-colors hover:scale-110 inline-block">
              {t("footer.privacy")}
            </a>
            <a href="/terminos-y-condiciones" className="text-gray-400 hover:text-white transition-colors hover:scale-110 inline-block">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
