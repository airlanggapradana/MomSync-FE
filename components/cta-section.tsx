"use client"

import { Button } from "@/components/ui/3d-button"
import { Heart, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")
  
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-background rounded-3xl border-4 border-b-8 border-border shadow-2xl overflow-hidden"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 pointer-events-none" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6"
            >
              <Heart className="w-8 h-8 text-white fill-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className=" text-4xl md:text-5xl font-bold mb-6"
            >
              Let's Start Small Steps for a Great Future
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Register for free to get the <strong>"7 Days of Nutrition to Prevent Stunting"</strong> guide directly to your email.
            </motion.p>

            {/* Email Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-6"
            >
              <div className="relative flex-1 w-full">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 rounded-full border-2 border-border focus:border-[#1f4b4a]"
                />
              </div>
              <Button 
                size="lg" 
                className="rounded-full bg-linear-to-r from-[#1f4b4a] to-[#2d6a68] hover:from-[#16403f] hover:to-[#245856] border-[#0f2e2d] shrink-0"
              >
                Send Guide Now
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-muted-foreground"
            >
              100% Free • No Spam • Unsubscribe Anytime • Trusted by 10,000+ Mothers
            </motion.p>

            {/* Bonus Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 p-6 bg-secondary/50 rounded-2xl max-w-2xl mx-auto"
            >
              <h3 className="font-semibold text-foreground mb-2">🎁 Bonus You'll Get:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✅ Daily nutrition checklist for pregnant mothers</li>
                <li>✅ 21 healthy anti-nausea recipes</li>
                <li>✅ Free consultation group access</li>
                <li>✅ Weekly tips updates</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
