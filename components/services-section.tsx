"use client"

import { motion } from "framer-motion"
import { Apple, Stethoscope, MessageCircle, Users } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "🥦 Balanced Nutrition Guide",
      description: "Healthy daily menu for pregnant mothers, complete with nutritional content and portions.",
      icon: Apple,
      color: "from-[#1f4b4a] to-[#2d6a68]",
      features: ["Healthy daily menu", "Complete nutritional content", "Proper portions"]
    },
    {
      title: "🩺 Health Tips & Routine Checkups",
      description: "Important education about pregnancy, danger signs, and when to see a doctor.",
      icon: Stethoscope,
      color: "from-[#2d6a68] to-[#3d7a78]",
      features: ["Pregnancy education", "Danger sign detection", "Checkup schedule"]
    },
    {
      title: "💬 Expert Consultation",
      description: "Direct access to midwives and nutritionists to answer your questions.",
      icon: MessageCircle,
      color: "from-[#3d7a78] to-[#4d8a88]",
      features: ["Chat with midwives", "Nutritionist consultation", "Quick response"]
    },
    {
      title: "🤱 Healthy Pregnant Mother Community",
      description: "Space for sharing experiences, motivation, and support among mothers.",
      icon: Users,
      color: "from-[#4d8a88] to-[#5d9a98]",
      features: ["Share experiences", "Community support", "Discussion forum"]
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-background">
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
            Everything You Need, In One Place
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Complete guide for healthy pregnancy and stunting prevention
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary/30 rounded-3xl p-8 flex flex-col h-[380px] transition-all duration-300 hover:bg-secondary/50 border border-border"
            >
              {/* Icon Container */}
              <div className="relative flex items-center justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="grow">
                <h3 className="font-sans text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
