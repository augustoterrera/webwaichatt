"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Target, Calendar, TrendingUp, BarChart3 } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { useLanguage } from "@/contexts/LanguageContext"

export function ProblemSolutionSection() {
  const [problemRef, problemInView] = useInView(0.2)
  const { t } = useLanguage()

  const problemSolutions = [
    { icon: Clock, title: t("problem.attention"), desc: t("problem.attention.desc"), delay: "0s" },
    { icon: Target, title: t("problem.sales"), desc: t("problem.sales.desc"), delay: "0.1s" },
    { icon: Calendar, title: t("problem.schedule"), desc: t("problem.schedule.desc"), delay: "0.2s" },
    { icon: TrendingUp, title: t("problem.collection"), desc: t("problem.collection.desc"), delay: "0.3s" },
    { icon: BarChart3, title: t("problem.reports"), desc: t("problem.reports.desc"), delay: "0.4s" },
  ]

  return (
    <section className="py-20 bg-white/50 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-r from-[#259A72]/5 to-[#1F7A5D]/5 animate-gradient-shift-slow"></div>
      <div className="container mx-auto px-4" ref={problemRef}>
        <div className={`text-center space-y-6 mb-16 ${problemInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-gray-900 animate-text-reveal">{t("problem.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("problem.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {problemSolutions.map((item, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-2xl transition-all duration-500 border-[#259A72]/20 hover:border-[#259A72]/40 group hover:scale-110 ${
                problemInView ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: item.delay }}
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#259A72] to-[#1F7A5D] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#259A72] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
