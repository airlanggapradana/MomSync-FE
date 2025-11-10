"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Plus, Calendar, Heart, Baby } from "lucide-react"

const journalEntries = [
  {
    id: "je1abc",
    date: "2024-10-28T10:30:00Z",
    title: "Feeling Great Today!",
    content: "Had an amazing morning! Baby was very active during breakfast. No morning sickness today. Doctor visit went well yesterday - everything looks perfect.",
    mood: "happy",
    symptoms: ["Active baby movements", "Good appetite"],
    tags: ["wellness", "baby-activity"],
  },
  {
    id: "je1def", 
    date: "2024-10-27T14:20:00Z",
    title: "Doctor Visit Update",
    content: "Had my routine checkup today. Blood pressure is perfect. Baby's heartbeat is strong and steady. Got to see baby on ultrasound - so amazing!",
    mood: "content",
    symptoms: ["Slight fatigue"],
    tags: ["doctor-visit", "checkup"],
  }
]

export default function JournalPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long', 
      day: 'numeric'
    })
  }

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'happy': return 'bg-green-100 text-green-700'
      case 'content': return 'bg-blue-100 text-blue-700'
      case 'peaceful': return 'bg-purple-100 text-purple-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4">
            Pregnancy Journal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Document your pregnancy journey and capture every precious moment
          </p>
          <Button size="lg" className="rounded-full">
            <Plus className="w-5 h-5 mr-2" />
            New Entry
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
              <div className="text-4xl font-bold text-foreground mb-2">{journalEntries.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Total Entries</div>
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
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">28</div>
              <div className="text-sm text-muted-foreground font-medium">Week of Pregnancy</div>
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
                <Baby className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">12</div>
              <div className="text-sm text-muted-foreground font-medium">Weeks to Go</div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className=" text-3xl font-normal text-foreground">Recent Entries</h2>
          
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{entry.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(entry.date)}
                  </div>
                </div>
                <Badge className={getMoodColor(entry.mood)}>
                  {entry.mood}
                </Badge>
              </div>

              <div className="mb-6">
                <p className="text-foreground leading-relaxed text-base">{entry.content}</p>
              </div>

              {entry.symptoms && entry.symptoms.length > 0 && (
                <div className="mb-6 bg-background/50 rounded-2xl p-5 border border-border/50">
                  <h4 className="font-semibold mb-3 text-sm text-foreground">Symptoms & Notes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {entry.symptoms.map((symptom, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag, idx) => (
                  <Badge key={idx} className="bg-[#1f4b4a]/10 text-[#1f4b4a] border-[#1f4b4a]/20 text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/30 rounded-3xl p-10 border border-border"
        >
          <div className="text-center mb-8">
            <h3 className=" text-3xl md:text-4xl font-normal text-foreground mb-3">
              ✨ Journaling Tips
            </h3>
            <p className="text-muted-foreground text-lg">
              Make the most of your pregnancy journal with these helpful insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground text-lg mb-3">Daily Moments</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Record baby movements, cravings, and how you're feeling each day to track patterns
              </p>
              <h4 className="font-semibold text-foreground text-lg mb-3">Milestone Tracking</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Document doctor visits, ultrasounds, and special pregnancy moments for lasting memories
              </p>
            </div>
            
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground text-lg mb-3">Emotional Journey</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Write about your emotions, fears, excitement, and dreams for your baby's future
              </p>
              <h4 className="font-semibold text-foreground text-lg mb-3">Future Memories</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These entries will become precious memories to share with your child as they grow
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}