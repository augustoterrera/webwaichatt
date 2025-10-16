"use client"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { useState, useEffect } from "react"
import { CTASection } from "@/components/CTASection"


interface Blog {
    id: number
    slug: string
    title: string
    subtitle: string
    description: string
    main_image: string
    status: string
    created_at: string
}
interface blogPage {
    blogs: Blog[] | []
}

export default function BlogPage({ blogs }: blogPage) {

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <div>
            <LanguageProvider>
                <Header scrollY={scrollY} />
                <div className="min-h-screen bg-background">
                    <section className="relative bg-gradient-to-br from-[#1F6B49] via-[#268656] to-[#2D9F6F] py-24 px-6 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">Blog</Badge>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
                                Aprende sobre automatización con IA
                            </h1>
                            <p className="text-xl text-white/90 text-pretty max-w-2xl mx-auto">
                                Guías, tutoriales y mejores prácticas para transformar tu negocio con WhatsApp y conversational AI
                            </p>
                        </div>
                    </section>

                    {/* Blog Grid */}
                    <section className="max-w-7xl mx-auto px-6 py-16">
                        {blogs.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-muted-foreground text-lg">No hay artículos publicados aún.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogs.map((blog: Blog) => (
                                    <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
                                        <Card className="h-full overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                                            <div className="aspect-video relative overflow-hidden bg-muted">
                                                {blog.main_image ? (
                                                    <img
                                                        src={blog.main_image || "/placeholder.svg"}
                                                        alt={blog.title}
                                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-[#268656] to-[#1F6B49]" />
                                                )}
                                            </div>
                                            <CardContent className="p-6 space-y-4">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Calendar className="w-4 h-4" />
                                                    <time>{new Date(blog.created_at).toLocaleDateString("es-AR")}</time>
                                                </div>
                                                <h2 className="text-2xl font-bold text-foreground group-hover:text-[#268656] transition-colors text-balance">
                                                    {blog.title}
                                                </h2>
                                                {blog.subtitle && <p className="text-muted-foreground text-pretty">{blog.subtitle}</p>}
                                                <div className="flex items-center gap-2 text-[#268656] font-medium pt-2">
                                                    Leer más
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </section>

                    <CTASection scrollY={scrollY} />
                </div>
                <Footer />
            </LanguageProvider>
        </div>
    )
}
