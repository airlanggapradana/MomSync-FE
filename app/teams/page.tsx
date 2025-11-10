"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Stethoscope, 
  Apple, 
  Brain, 
  Baby, 
  Users, 
  Award,
  BookOpen,
  Target,
  MessageCircle,
  Calendar,
  Shield,
  Sparkles,
  GraduationCap,
  Activity
} from "lucide-react"

export default function OurTeamsPage() {
  const leadership = [
    {
      name: "Dr. Sarah Williams",
      role: "Chief Medical Officer & Co-Founder",
      specialization: "Obstetrics & Gynecology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in maternal-fetal medicine, Dr. Williams is passionate about preventing stunting through proper prenatal care.",
      education: "MD from Harvard Medical School",
      certifications: ["Board Certified OB/GYN", "Maternal-Fetal Medicine Specialist"],
      icon: Stethoscope,
      color: "from-[#1f4b4a] to-[#2d6a68]",
      achievements: [
        "Published 20+ research papers on maternal health",
        "Delivered 3,000+ babies safely",
        "TEDx speaker on pregnancy nutrition"
      ]
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Nutrition & Wellness",
      specialization: "Maternal & Child Nutrition",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Chen specializes in creating evidence-based nutrition plans that prevent stunting and support healthy fetal development.",
      education: "PhD in Nutritional Sciences, Stanford University",
      certifications: ["Registered Dietitian Nutritionist", "Certified Diabetes Educator"],
      icon: Apple,
      color: "from-[#2d6a68] to-[#3d7a78]",
      achievements: [
        "Developed nutrition guidelines for 5,000+ mothers",
        "Author of 'Eating for Two: Science-Based Nutrition'",
        "Award for Excellence in Maternal Nutrition"
      ]
    },
    {
      name: "Dr. Emily Johnson",
      role: "Pediatric Development Director",
      specialization: "Child Development & Pediatrics",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Johnson focuses on early childhood development and the long-term impacts of prenatal nutrition on child growth.",
      education: "MD, Johns Hopkins University",
      certifications: ["Board Certified Pediatrician", "Developmental-Behavioral Pediatrics"],
      icon: Baby,
      color: "from-[#3d7a78] to-[#4d8a88]",
      achievements: [
        "Pioneered developmental screening protocols",
        "Consultant for WHO on child nutrition",
        "Treated 10,000+ pediatric cases"
      ]
    }
  ]

  const medicalTeam = [
    {
      name: "Safwan Aulia Rahman",
      icon: Shield,
      color: "from-[#4d8a88] to-[#5d9a98]",
    },
    {
      name: "Aura Kalbu Darsono",
      icon: Activity,
      color: "from-[#5d9a98] to-[#6daaa8]",
    },
    {
      name: "Airlangga Pradana Prakusa",
      icon: Brain,
      color: "from-[#6daaa8] to-[#7dbab8]",
    },
    {
      name: "Kurniawan Candra Mahardika",
      icon: Heart,
      color: "from-[#7dbab8] to-[#8dcac8]",
    },
    {
      name: "Sulthon Kaffah Al Farizzi",
      icon: Apple,
      color: "from-[#1f4b4a] to-[#2d6a68]",
    },
    {
      name: "Sa'adah Luthfia Fatimah",
      icon: BookOpen,
      color: "from-[#2d6a68] to-[#3d7a78]",
    },
    {
      name: "Ilma Khoirunissa",
      icon: Target,
      color: "from-[#3d7a78] to-[#4d8a88]",
    }
  ]

  const supportTeam = [
    {
      name: "Patient Care Team",
      members: "15 Specialists",
      description: "24/7 support for all your pregnancy questions and concerns",
      icon: MessageCircle,
      color: "from-[#1f4b4a] to-[#2d6a68]"
    },
    {
      name: "Community Managers",
      members: "8 Facilitators",
      description: "Creating safe, supportive spaces for mother connections",
      icon: Users,
      color: "from-[#2d6a68] to-[#3d7a78]"
    },
    {
      name: "Education Team",
      members: "12 Content Creators",
      description: "Developing evidence-based educational materials",
      icon: GraduationCap,
      color: "from-[#3d7a78] to-[#4d8a88]"
    },
    {
      name: "Technology Team",
      members: "10 Engineers",
      description: "Building intuitive tools for seamless health tracking",
      icon: Sparkles,
      color: "from-[#4d8a88] to-[#5d9a98]"
    }
  ]

  const stats = [
    { number: "50+", label: "Healthcare Professionals" },
    { number: "100+", label: "Combined Years Experience" },
    { number: "10,000+", label: "Mothers Served" },
    { number: "98%", label: "Satisfaction Rate" }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h1 className=" text-4xl md:text-6xl lg:text-7xl font-normal text-center leading-[1.1] mb-6">
              Meet Our Expert Team
            </h1>
            
            <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals committed to your wellbeing and your baby's healthy development. 
              Our team combines decades of experience with compassionate, personalized care.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Medical Team */}
      <section className="py-20 px-4 sm:px-6 w-full bg-secondary/30">
        <div className="max-w-7xl mx-auto">
        

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#1f4b4a]">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${member.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <member.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    
               
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   

      <Footer />
    </main>
  )
}
