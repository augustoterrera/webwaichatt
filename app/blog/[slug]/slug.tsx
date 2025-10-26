"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, ArrowRight, Linkedin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Footer } from "@/components/Footer"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { Header } from "@/components/Header"
interface MediaItem {
    url: string
    size: "small" | "medium" | "large" | "full"
}

interface Section {
    id: string
    title?: string
    subtitle?: string
    description: string
    images?: MediaItem[]
    videos?: MediaItem[]
}

interface Blog {
    id: number
    slug: string
    title: string
    subtitle: string
    description: string
    main_image: string
    sections: Section[]
    status: string
    created_at: string
    category: string
    recommendations?: number[]
}

interface Comment {
    id: number
    author: string
    date: string
    content: string
    replies?: Comment[]
}

interface Recommendations {
    id: number
    slug: string
    created_at: string
    subtitle: string
    main_image: string
    title: string
    category: string
}

interface BlogPageProps {
    blog: Blog
    recommendedBlogs: Recommendations[]
}




function getSizeClass(size: string) {
    switch (size) {
        case "small":
            return "max-w-sm"
        case "medium":
            return "max-w-2xl"
        case "large":
            return "max-w-4xl"
        case "full":
            return "max-w-full"
        default:
            return "max-w-4xl"
    }
}

export default function BlogPostPage({
    blog,
    recommendedBlogs,
}: Partial<BlogPageProps>) {
    const [showReplyForm, setShowReplyForm] = useState<number | null>(null)

    if (!blog) {
        notFound()
    }



    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <LanguageProvider>
            <Header scrollY={scrollY} />
            <div className="min-h-screen bg-background">
                {/* Hero Section with Gradient */}
                <section className="relative bg-gradient-to-br from-[#1F6B49] via-[#268656] to-[#2D9F6F] pt-8 pb-0">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="max-w-4xl mb-12">
                            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 mt-10">
                                Blog
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
                                {blog.title}
                            </h1>
                            {blog.subtitle && (
                                <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed">{blog.subtitle}</p>
                            )}
                            <div className="flex items-center gap-2 text-white/80">
                                <Calendar className="w-5 h-5" />
                                <time className="text-base">
                                    {new Date(blog.created_at).toLocaleDateString("es-ES", { dateStyle: "long" })}
                                </time>
                            </div>
                        </div>

                        {/* Featured Image */}
                        {blog.main_image && (
                            <div className="relative">
                                <div className="aspect-[21/9] md:aspect-[2/1] lg:aspect-[21/9] rounded-t-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={blog.main_image || "/placeholder.svg"}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Content Section */}
                <article className="bg-white">
                    <div className="max-w-4xl mx-auto px-6 py-16">
                        {blog.description && (
                            <div className="prose prose-lg max-w-none mb-16">
                                <p className="text-xl text-muted-foreground leading-relaxed text-pretty font-light">{blog.description}</p>
                            </div>
                        )}

                        <div className="space-y-16">
                            {blog.sections?.map((section: Section, index: number) => (
                                <section key={section.id} className="space-y-6">
                                    {section.title && (
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                                            {section.title}
                                        </h2>
                                    )}
                                    {section.subtitle && (
                                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground/90 text-balance leading-snug">
                                            {section.subtitle}
                                        </h3>
                                    )}
                                    {section.description && (
                                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{section.description}</p>
                                    )}

                                    {section.images && section.images.length > 0 && (
                                        <div className="flex flex-col items-center gap-6 my-10">
                                            {section.images.map((image, imgIndex) => (
                                                <div
                                                    key={imgIndex}
                                                    className={`rounded-xl overflow-hidden shadow-lg w-full ${getSizeClass(image.size)}`}
                                                >
                                                    <img
                                                        src={image.url || "/placeholder.svg"}
                                                        alt={`${section.title || "Imagen"} ${imgIndex + 1}`}
                                                        className="w-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {section.videos && section.videos.length > 0 && (
                                        <div className="flex flex-col items-center gap-6 my-10">
                                            {section.videos.map((video, vidIndex) => (
                                                <div
                                                    key={vidIndex}
                                                    className={`aspect-video rounded-xl overflow-hidden shadow-lg w-full ${getSizeClass(video.size)}`}
                                                >
                                                    <iframe
                                                        src={video.url.replace("watch?v=", "embed/")}
                                                        title={`Video ${vidIndex + 1}`}
                                                        className="w-full h-full"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {index < blog.sections.length - 1 && <hr className="border-border/50 my-16" />}
                                </section>
                            ))}
                        </div>

                        {/* Author/Company Card */}
                        {/*   <Card className="mt-16 border-0 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/cyberclick-logo.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-[#1F6B49] to-[#2D9F6F] text-white text-2xl">
                    C
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">CYBERCLICK</h3>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full border-[#268656] text-[#268656] hover:bg-[#268656] hover:text-white bg-transparent"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full border-[#268656] text-[#268656] hover:bg-[#268656] hover:text-white bg-transparent"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full border-[#268656] text-[#268656] hover:bg-[#268656] hover:text-white bg-transparent"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Somos una empresa tecnológica especializada en marketing digital y ventas con 25 años de experiencia
                    en el desarrollo de estrategias orientadas a resultados y optimización a medida de campañas de
                    publicidad y marketing digital. Acompañamos a nuestros clientes en la creación de estrategias de
                    adquisición en cualquier etapa del embudo de conversión, desde una perspectiva científica, analítica
                    e innovadora.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card> */}
                    </div>
                </article>

                {/* Recommended Articles */}
                {recommendedBlogs && recommendedBlogs.length > 0 && (
                    <section className="bg-gray-50 py-20 px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Posts que te pueden interesar</h2>
                                <div className="w-24 h-1 bg-[#268656]" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {recommendedBlogs.map((recBlog) => (
                                    <Link key={recBlog.id} href={`/blog/${recBlog.slug}`}>
                                        <Card className="h-full hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group border-0 shadow-md">
                                            {recBlog.main_image && (
                                                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                                                    <img
                                                        src={recBlog.main_image || "/placeholder.svg"}
                                                        alt={recBlog.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            )}
                                            <CardContent className="p-6">
                                                <Badge variant="outline" className="mb-3 border-[#268656] text-[#268656] rounded-full text-xs">
                                                    {recBlog.category}
                                                </Badge>
                                                <h3 className="text-xl font-bold mb-3 group-hover:text-[#268656] transition-colors text-balance leading-snug">
                                                    {recBlog.title}
                                                </h3>
                                                {recBlog.subtitle && (
                                                    <p className="text-muted-foreground text-sm mb-4 text-pretty line-clamp-2">
                                                        {recBlog.subtitle}
                                                    </p>
                                                )}
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                                    <Calendar className="w-4 h-4" />
                                                    <time>{new Date(recBlog.created_at).toLocaleDateString("es-ES", { dateStyle: "medium" })}</time>
                                                </div>
                                                <div className="flex items-center text-[#268656] font-semibold text-sm group-hover:gap-2 transition-all">
                                                    Leer artículo
                                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}


                <Footer />
            </div>
        </LanguageProvider>
    )
}
