"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Play, Download, Clock, Star, Users, Search } from "lucide-react"

const educationContent = [
  {
    id: "edu1abc",
    title: "Nutrition During Pregnancy",
    description: "Essential nutrients, meal planning, and foods to avoid during pregnancy",
    type: "article",
    duration: "8 min read",
    category: "nutrition",
    rating: 4.8,
    views: 1247,
    tags: ["nutrition", "diet", "vitamins", "health"]
  },
  {
    id: "edu1def",
    title: "Exercise Guidelines for Expecting Mothers",
    description: "Safe exercises, routines, and physical activities during each trimester",
    type: "video",
    duration: "15 min watch",
    category: "fitness",
    rating: 4.9,
    views: 2103,
    tags: ["exercise", "fitness", "trimester", "safety"]
  },
  {
    id: "edu1ghi",
    title: "Understanding Fetal Development",
    description: "Week-by-week guide to your baby's growth and development milestones",
    type: "guide",
    duration: "12 min read",
    category: "development",
    rating: 4.7,
    views: 1856,
    tags: ["development", "fetus", "milestones", "weeks"]
  },
  {
    id: "edu1jkl",
    title: "Preparing for Labor and Delivery",
    description: "Birth plans, pain management options, and what to expect during labor",
    type: "course",
    duration: "45 min course",
    category: "birth",
    rating: 4.9,
    views: 934,
    tags: ["labor", "delivery", "birth-plan", "hospital"]
  },
  {
    id: "edu1mno",
    title: "Mental Health During Pregnancy",
    description: "Managing stress, anxiety, and emotional changes throughout pregnancy",
    type: "article",
    duration: "6 min read",
    category: "mental-health",
    rating: 4.6,
    views: 1523,
    tags: ["mental-health", "stress", "anxiety", "emotional"]
  },
  {
    id: "edu1pqr",
    title: "Breastfeeding Basics",
    description: "Getting started with breastfeeding, positions, and common challenges",
    type: "video",
    duration: "20 min watch",
    category: "breastfeeding",
    rating: 4.8,
    views: 1674,
    tags: ["breastfeeding", "nursing", "baby-care", "feeding"]
  }
]

const categories = [
  "All", "Nutrition", "Fitness", "Development", "Birth", "Mental Health", "Breastfeeding"
]

export default function EducationPage() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />
      case 'article': return <BookOpen className="w-4 h-4" />
      case 'guide': return <BookOpen className="w-4 h-4" />
      case 'course': return <Play className="w-4 h-4" />
      default: return <BookOpen className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-700'
      case 'article': return 'bg-blue-100 text-blue-700'
      case 'guide': return 'bg-green-100 text-green-700'
      case 'course': return 'bg-purple-100 text-purple-700'
      default: return 'bg-blue-100 text-blue-700'
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{educationContent.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Educational Resources</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{educationContent.filter(c => c.type === 'video').length}</div>
              <div className="text-sm text-muted-foreground font-medium">Video Lessons</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">4.8</div>
              <div className="text-sm text-muted-foreground font-medium">Average Rating</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#4d8a88] to-[#5d9a98] flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">9.3K</div>
              <div className="text-sm text-muted-foreground font-medium">Total Views</div>
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Content */}
        <div className="mb-12">
          <h2 className=" text-3xl font-normal text-foreground mb-8 text-center">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getTypeColor(content.type)}>
                    {getTypeIcon(content.type)}
                    <span className="ml-2 capitalize">{content.type}</span>
                  </Badge>
                  <div className="flex items-center text-sm text-foreground">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                    {content.rating}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{content.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed grow">
                  {content.description}
                </p>

                <div className="bg-background/50 rounded-2xl p-4 border border-border/50 mb-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {content.views.toLocaleString()} views
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full rounded-full">
                  {content.type === 'video' || content.type === 'course' ? 'Watch Now' : 'Read Now'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-secondary/30 rounded-3xl p-10 border border-border"
        >
          <div className="text-center mb-10">
            <h3 className=" text-3xl md:text-4xl font-normal text-foreground mb-3">
              📚 Recommended Learning Path
            </h3>
            <p className="text-muted-foreground text-lg">
              Follow this structured journey through your pregnancy trimesters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-3">First Trimester</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nutrition basics, prenatal vitamins, and early pregnancy care essentials
              </p>
            </div>
            
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-3">Second Trimester</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Exercise routines, fetal development tracking, and preparing for birth
              </p>
            </div>
            
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-3">Third Trimester</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Labor preparation, breastfeeding basics, and newborn care essentials
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}