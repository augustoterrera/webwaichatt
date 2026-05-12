"use client"

import { LanguageProvider } from "@/contexts/LanguageContext"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection"
import { CRMSection } from "@/components/CRMSection"
import { IntegrationsSection } from "@/components/IntegrationsSection"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"

export default function WaichattLanding() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 overflow-x-hidden">
        <Header />
        <HeroSection />
        <ProblemSolutionSection />
        <CRMSection />
        <IntegrationsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
