"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"

export function EducationalBlogSection() {
  const articles = [
    {
      title: "7 Important Nutrients to Prevent Stunting",
      excerpt: "Learn essential nutrients that pregnant mothers must consume to ensure optimal fetal development and prevent stunting from early on.",
      category: "Nutrition",
      readTime: "5 minutes",
      date: "October 28, 2025",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Signs of Healthy Pregnancy in Every Trimester",
      excerpt: "Recognize important milestones in each pregnancy phase and when you need to be alert to immediately consult with a doctor.",
      category: "Health",
      readTime: "8 minutes", 
      date: "October 26, 2025",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Healthy Pregnant Mother Menu: Practical No-Fuss Recipes",
      excerpt: "Collection of easy and nutritious recipes to meet the daily nutritional needs of pregnant mothers without kitchen hassles.",
      category: "Recipes",
      readTime: "6 minutes",
      date: "October 24, 2025", 
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  const categoryColors = {
    "Nutrition": "bg-teal-100 text-teal-700",
    "Health": "bg-cyan-100 text-cyan-700", 
    "Recipes": "bg-emerald-100 text-emerald-700"
  }

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6"
          >
            <BookOpen className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className=" text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-4 tracking-tight"
          >
            Latest Articles & Education
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Discover the latest tips about healthy pregnancy, nutrition, and ways to prevent stunting with research-based information and real experiences
          </motion.p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 group"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[article.category as keyof typeof categoryColors]}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="font-sans text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="rounded-full px-8">
            📖 Read Articles Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}