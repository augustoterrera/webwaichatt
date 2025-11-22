"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageSquare, ChevronRight, CheckCircle } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { useLanguage } from "@/contexts/LanguageContext"

export function PricingSection() {
  const [plansRef, plansInView] = useInView(0.2)
  const { t } = useLanguage()

  const plans = [
    {
      name: t("pricing.starter"),
      price: "$60",
      period: "/mes",
      messages: t("pricing.starter.messages"),
      target: t("pricing.starter.target"),
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: t("pricing.pro"),
      price: "$180",
      period: "/mes",
      messages: t("pricing.pro.messages"),
      target: t("pricing.pro.target"),
      popular: true,
      color: "from-[#268656] to-[#1f6b4a]",
    },
    {
      name: t("pricing.enterprise"),
      price: "$450",
      period: "/mes",
      messages: t("pricing.enterprise.messages"),
      target: t("pricing.enterprise.target"),
      popular: false,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: t("pricing.custom"),
      price: t("pricing.custom").includes("Custom") ? "Custom" : "A medida",
      period: "",
      messages: t("pricing.custom.messages"),
      target: t("pricing.custom.target"),
      popular: false,
      color: "from-orange-500 to-red-500",
    },
  ]

  const services = [
    t("pricing.service1"),
    t("pricing.service2"),
    t("pricing.service3"),
    t("pricing.service4"),
    t("pricing.service5"),
    t("pricing.service6"),
    t("pricing.service7"),
    t("pricing.service8"),
  ]

  return (
    <section id="planes" className="py-20 bg-white/50 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-r from-[#268656]/5 to-[#1f6b4a]/5 animate-gradient-shift"></div>
      <div className="container mx-auto px-4" ref={plansRef}>
        <div className={`text-center space-y-6 mb-16 ${plansInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-gray-900 animate-text-reveal">{t("pricing.title")}</h2>
          <p className="text-xl text-gray-600">{t("pricing.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-500 group hover:scale-110 ${
                plan.popular
                  ? "border-[#268656]/40 shadow-xl scale-105 animate-pulse-border"
                  : "border-[#268656]/20 hover:border-[#268656]/40"
              } ${plansInView ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <Badge className="bg-gradient-to-r from-[#268656] to-[#1f6b4a] text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    {t("pricing.popular")}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center relative">
                <CardTitle className="text-2xl text-gray-900 group-hover:text-[#268656] transition-colors">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">

                  <p className="text-sm text-gray-600">{plan.target}</p>
                  <Badge variant="outline" className="text-[#268656] border-[#268656]/30">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    {plan.messages}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                onClick={()=>  window.open("https://wa.me/+5493816814079", "_blank")}
                  className={`w-full group-hover:scale-105 transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#268656] to-[#1f6b4a] hover:from-[#1f6b4a] hover:to-[#268656] text-white animate-pulse-glow"
                      : "border-[#268656]/40 text-[#1f6b4a] hover:bg-[#268656]/5"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === t("pricing.custom") ? t("pricing.contact") : t("pricing.start")}
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 space-y-6 ${plansInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        > 
          <p className="text-sm text-gray-600">{t("pricing.note")}</p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#268656]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("pricing.services.title")}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 ${plansInView ? "animate-slide-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-[#268656] flex-shrink-0" />
                  <span className="text-gray-700 text-left">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
