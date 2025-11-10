"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Brain, TrendingUp } from "lucide-react"

export function WhyImportantSection() {
  const facts = [
    {
      icon: AlertTriangle,
      stat: "1 in 4 children",
      description: "in Indonesia experience stunting — and most of it is caused by malnutrition since pregnancy.",
      color: "text-red-500"
    },
    {
      icon: Brain,
      stat: "Not just height",
      description: "stunting also affects brain development and children's intelligence for their future.",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      stat: "With proper care",
      description: "You can ensure your little one grows healthy, smart, and strong from the womb.",
      color: "text-green-500"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className=" text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mb-4 tracking-tight"
          >
            Why Does Stunting Prevention Start During Pregnancy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Every nutrient you consume today is an investment for your little one's future
          </motion.p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background rounded-2xl p-8 text-center shadow-lg border border-border"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6`}>
                <fact.icon className={`w-8 h-8 ${fact.color}`} />
              </div>
              <h3 className="font-sans text-xl font-semibold text-foreground mb-4">
                {fact.stat}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 text-center border-2 border-teal-200">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6">
              <span className="text-3xl">🤱</span>
            </div>
            <h3 className=" text-2xl font-semibold text-foreground mb-4">
              Happy Pregnant Mother Illustration
            </h3>
            <p className="text-muted-foreground">
              With a healthy and optimally developing fetus in a womb full of love
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}