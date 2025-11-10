"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { User, Activity, BookOpen, Calendar, FileText, GraduationCap, Shield } from "lucide-react"

export function QuickAccessSection() {
  const features = [
    {
      title: "Mother Profile",
      description: "Manage your profile and pregnancy information",
      icon: User,
      href: "/profil",
      color: "from-[#1f4b4a] to-[#2d6a68]",
      stats: "4 Active Profiles"
    },
    {
      title: "Health Monitoring",
      description: "Track vital signs and daily health",
      icon: Activity,
      href: "/monitoring",
      color: "from-[#2d6a68] to-[#3d7a78]",
      stats: "98% Accuracy"
    },
    {
      title: "Pregnancy Journal",
      description: "Record your pregnancy journey and daily mood",
      icon: BookOpen,
      href: "/jurnal",
      color: "from-[#3d7a78] to-[#4d8a88]",
      stats: "Daily Tracking"
    },
    {
      title: "Appointments",
      description: "Schedule consultations with doctors",
      icon: Calendar,
      href: "/janji-temu",
      color: "from-[#4d8a88] to-[#5d9a98]",
      stats: "24/7 Booking"
    },
    {
      title: "Lab Results",
      description: "Access and monitor your lab test results",
      icon: FileText,
      href: "/hasil-lab",
      color: "from-[#5d9a98] to-[#6daaa8]",
      stats: "Real-time Results"
    },
    {
      title: "Education & Articles",
      description: "Learn health tips from experts",
      icon: GraduationCap,
      href: "/edukasi",
      color: "from-[#6daaa8] to-[#7dbab8]",
      stats: "50+ Articles"
    },
    {
      title: "Prevent Stunting",
      description: "Complete guide to stunting prevention",
      icon: Shield,
      href: "/stunting",
      color: "from-[#7dbab8] to-[#8dcac8]",
      stats: "Prevention Guide"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className=" text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-4 tracking-tight"
          >
            MomSync Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Quick access to all features you need to maintain health during pregnancy
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={feature.href}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-l-4 border-l-[#1f4b4a] bg-background/80 backdrop-blur-sm">
                  {/* Icon and Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">{feature.stats}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#1f4b4a] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Quick Action Button */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button 
                      size="sm" 
                      className="w-full rounded-full text-xs group-hover:bg-[#1f4b4a] transition-colors"
                    >
                      Open Now
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Start Your Healthy Pregnancy Journey 🤱
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              All features are specifically designed to accompany you in maintaining the health of mother and baby. 
              Start exploring now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}