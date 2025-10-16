"use client"

import { useState, useEffect } from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection"
import { CRMSection } from "@/components/CRMSection"
import { PricingSection } from "@/components/PricingSection"
import { IntegrationsSection } from "@/components/IntegrationsSection"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"

export default function WaichattLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 overflow-x-hidden">
        <Header scrollY={scrollY} />
        <HeroSection scrollY={scrollY} />
        <ProblemSolutionSection />
        <CRMSection scrollY={scrollY} />
        <PricingSection />
        <IntegrationsSection scrollY={scrollY} />
        <FAQSection />
        <CTASection scrollY={scrollY} />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
