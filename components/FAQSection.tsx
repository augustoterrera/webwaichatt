"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`border-b border-gray-200 pb-4 animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
      <button
        className="w-full text-left py-4 flex items-center justify-between group hover:text-[#259A72] transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-[#259A72] transition-colors">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#259A72] flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#259A72] border-[#259A72] rotate-180" : ""}`}
        >
          <ChevronRight
            className={`w-4 h-4 transition-all duration-300 ${isOpen ? "text-white rotate-90" : "text-gray-600 group-hover:text-[#259A72]"}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="pb-4 animate-fade-in-up">
          <p className="text-gray-600 leading-relaxed pl-0">{answer}</p>
        </div>
      )}
    </div>
  )
}

// FAQSection.ts
export function FAQSection() {
  const { t } = useLanguage()
  const faqs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  return (
    <section className="py-20 relative overflow-hidden select-none" id="preguntas-frecuentes">
      <div className="absolute inset-0 bg-gradient-to-r from-[#259A72]/5 to-[#1F7A5D]/5 animate-gradient-shift-slow"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 animate-text-reveal">{t("faq.title")}</h2>
            <p className="text-xl text-gray-600">{t("faq.subtitle")}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={t(`faq.q${faq}`)} answer={t(`faq.a${faq}`)} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
