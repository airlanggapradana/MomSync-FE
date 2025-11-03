"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/3d-button"
import { Heart, Target, Users, Award, Shield, Stethoscope, BookOpen, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe every mother deserves personalized, loving support throughout their pregnancy journey.",
      color: "from-[#1f4b4a] to-[#2d6a68]"
    },
    {
      icon: Shield,
      title: "Evidence-Based",
      description: "All our guidance is backed by medical research and approved by healthcare professionals.",
      color: "from-[#2d6a68] to-[#3d7a78]"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Building a supportive community where mothers can share experiences and encourage each other.",
      color: "from-[#3d7a78] to-[#4d8a88]"
    },
    {
      icon: Target,
      title: "Prevention Focus",
      description: "Dedicated to preventing stunting from conception through early childhood development.",
      color: "from-[#4d8a88] to-[#5d9a98]"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Healthy Mothers" },
    { number: "50+", label: "Healthcare Professionals" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ]

  const team = [
    {
      name: "Dr. Sarah Williams",
      role: "Chief Medical Officer",
      specialization: "Obstetrics & Gynecology",
      icon: Stethoscope,
      color: "from-[#1f4b4a] to-[#2d6a68]"
    },
    {
      name: "Dr. Michael Chen",
      role: "Nutrition Specialist",
      specialization: "Maternal & Child Nutrition",
      icon: BookOpen,
      color: "from-[#2d6a68] to-[#3d7a78]"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Pediatric Consultant",
      specialization: "Child Development",
      icon: Award,
      color: "from-[#3d7a78] to-[#4d8a88]"
    }
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
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-center leading-[1.1] mb-6">
              About MomSync
            </h1>
            
            <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering mothers with knowledge, care, and community support to ensure healthy pregnancies 
              and prevent stunting from the very beginning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 w-full bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/10 rounded-3xl p-8 border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive, accessible, and evidence-based support for pregnant mothers, 
                ensuring optimal maternal and fetal health while preventing stunting through proper nutrition, 
                education, and continuous care from conception through early childhood.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border-2 border-teal-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every child is born healthy and reaches their full growth potential, 
                where stunting is prevented through empowered mothers who have access to the knowledge, 
                resources, and support they need for a healthy pregnancy journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 w-full bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making a difference in maternal and child health, one mother at a time
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 text-center shadow-lg border border-border"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#1f4b4a] mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 w-full bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary/30 rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 w-full bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated healthcare professionals committed to your wellbeing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-3xl p-8 text-center shadow-lg border border-border"
              >
                <div className={`w-20 h-20 rounded-full bg-linear-to-br ${member.color} flex items-center justify-center mx-auto mb-6`}>
                  <member.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-[#1f4b4a] font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.specialization}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 w-full bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-background rounded-3xl p-12 border border-border"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                MomSync was founded with a simple yet powerful mission: to ensure every mother has access 
                to the knowledge and support needed for a healthy pregnancy and to prevent stunting from the very beginning.
              </p>
              
              <p>
                Seeing the alarming statistics about stunting in Indonesia, where 1 in 4 children are affected, 
                our founders—a team of healthcare professionals and technology experts—came together to create 
                a comprehensive platform that bridges the gap between medical knowledge and everyday mothers.
              </p>
              
              <p>
                What started as a small initiative has grown into a trusted community of over 10,000 mothers, 
                supported by 50+ healthcare professionals. We combine evidence-based medical guidance with 
                practical, easy-to-follow advice that fits into busy lives.
              </p>
              
              <p>
                Today, MomSync continues to evolve, incorporating the latest research in maternal and child 
                health while maintaining our core commitment: empowering mothers with the tools they need to 
                give their children the healthiest possible start in life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/10 rounded-3xl border-4 border-b-8 border-border shadow-2xl p-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Join Our Community
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Become part of a supportive community dedicated to healthy pregnancies and preventing stunting. 
              Get expert guidance, personalized support, and connect with other mothers on the same journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 bg-linear-to-r from-[#1f4b4a] to-[#2d6a68]">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
