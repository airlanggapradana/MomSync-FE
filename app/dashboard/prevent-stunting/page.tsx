"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, AlertTriangle, Target, Scale, Apple, Activity, BookOpen, CheckCircle, Heart } from "lucide-react"

const stuntingData = {
  currentStatus: "normal",
  riskLevel: "low",
  lastMeasurement: {
    date: "2024-10-25",
    height: "5'4\"",
    weight: "145 lbs",
    bmi: 24.8,
    fundalHeight: "28 cm"
  },
  babyGrowth: {
    estimatedWeight: "2.5 lbs",
    length: "14.8 inches",
    percentile: "50th",
    developmentStage: "normal"
  }
}

const preventionTips = [
  {
    category: "Nutrition",
    icon: <Apple className="w-6 h-6" />,
    title: "Balanced Diet",
    description: "Consume adequate protein, iron, folate, and calcium daily",
    actions: [
      "Eat 3 meals + 2 healthy snacks daily",
      "Include lean proteins in every meal",
      "Take prenatal vitamins as prescribed",
      "Stay hydrated with 8-10 glasses of water"
    ]
  },
  {
    category: "Monitoring",
    icon: <Scale className="w-6 h-6" />,
    title: "Regular Check-ups",
    description: "Consistent prenatal care and growth monitoring",
    actions: [
      "Attend all scheduled prenatal appointments",
      "Monitor weight gain according to guidelines",
      "Track fundal height measurements",
      "Report any concerns immediately"
    ]
  },
  {
    category: "Lifestyle",
    icon: <Activity className="w-6 h-6" />,
    title: "Healthy Habits",
    description: "Maintain healthy lifestyle choices during pregnancy",
    actions: [
      "Get adequate sleep (7-9 hours nightly)",
      "Exercise regularly with doctor approval",
      "Avoid smoking and alcohol completely",
      "Manage stress through relaxation techniques"
    ]
  },
  {
    category: "Education",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Knowledge & Support",
    description: "Stay informed and seek support when needed",
    actions: [
      "Learn about proper nutrition during pregnancy",
      "Join prenatal classes and support groups",
      "Communicate openly with healthcare providers",
      "Access reliable pregnancy information sources"
    ]
  }
]

const nutritionPlan = [
  {
    nutrient: "Protein",
    dailyTarget: "75-100g",
    sources: ["Lean meats", "Fish", "Eggs", "Beans", "Dairy"],
    importance: "Essential for baby's tissue and organ development"
  },
  {
    nutrient: "Iron",
    dailyTarget: "27mg",
    sources: ["Red meat", "Spinach", "Lentils", "Fortified cereals"],
    importance: "Prevents anemia and supports baby's blood development"
  },
  {
    nutrient: "Folate",
    dailyTarget: "600mcg",
    sources: ["Leafy greens", "Citrus fruits", "Fortified grains"],
    importance: "Reduces risk of neural tube defects"
  },
  {
    nutrient: "Calcium",
    dailyTarget: "1000mg",
    sources: ["Dairy products", "Leafy greens", "Almonds"],
    importance: "Builds strong bones and teeth for baby"
  }
]

export default function StuntingPreventionPage() {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-700'
      case 'moderate': return 'bg-yellow-100 text-yellow-700'
      case 'high': return 'bg-red-100 text-red-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-100 text-green-700'
      case 'concern': return 'bg-yellow-100 text-yellow-700'
      case 'risk': return 'bg-red-100 text-red-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="">
      
        {/* Current Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">Normal</div>
              <div className="text-sm text-muted-foreground font-medium">Current Status</div>
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
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">Low Risk</div>
              <div className="text-sm text-muted-foreground font-medium">Stunting Risk</div>
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
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">50th</div>
              <div className="text-sm text-muted-foreground font-medium">Growth Percentile</div>
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
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">On Track</div>
              <div className="text-sm text-muted-foreground font-medium">Development</div>
            </div>
          </motion.div>
        </div>

        {/* Current Measurements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#1f4b4a]" />
            Latest Measurements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background/50 rounded-2xl p-5 border border-border/50 text-center">
              <div className="text-2xl font-bold text-foreground mb-1">145 lbs</div>
              <div className="text-sm text-muted-foreground">Weight</div>
            </div>
            <div className="bg-background/50 rounded-2xl p-5 border border-border/50 text-center">
              <div className="text-2xl font-bold text-foreground mb-1">28 cm</div>
              <div className="text-sm text-muted-foreground">Fundal Height</div>
            </div>
            <div className="bg-background/50 rounded-2xl p-5 border border-border/50 text-center">
              <div className="text-2xl font-bold text-foreground mb-1">2.5 lbs</div>
              <div className="text-sm text-muted-foreground">Baby Weight</div>
            </div>
            <div className="bg-background/50 rounded-2xl p-5 border border-border/50 text-center">
              <div className="text-2xl font-bold text-foreground mb-1">14.8 in</div>
              <div className="text-sm text-muted-foreground">Baby Length</div>
            </div>
          </div>
        </motion.div>

        {/* Prevention Strategies */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className=" text-3xl md:text-4xl font-normal text-foreground mb-3">
              Prevention Strategies
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive approaches to ensure healthy development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preventionTips.map((tip, index) => (
              <motion.div
                key={tip.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300 h-full"
              >
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center shrink-0 mr-4">
                    <div className="text-white">{tip.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {tip.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-[#1f4b4a] mr-3 mt-0.5 shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nutrition Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Apple className="w-6 h-6 text-[#1f4b4a]" />
            Daily Nutrition Targets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nutritionPlan.map((nutrient, index) => (
              <div key={nutrient.nutrient} className="bg-background/50 rounded-2xl p-6 border border-border/50">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-foreground text-lg">{nutrient.nutrient}</h3>
                  <Badge variant="outline" className="text-[#1f4b4a] border-[#1f4b4a]/30">{nutrient.dailyTarget}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{nutrient.importance}</p>
                <div className="text-sm">
                  <strong className="text-foreground">Sources:</strong>{" "}
                  <span className="text-muted-foreground">{nutrient.sources.join(", ")}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Educational Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-secondary/30 rounded-3xl p-10 border border-border"
        >
          <div className="text-center mb-8">
            <h3 className=" text-3xl md:text-4xl font-normal text-foreground mb-3">
              🌱 Understanding Healthy Growth
            </h3>
            <p className="text-muted-foreground text-lg">
              Essential knowledge for preventing stunting and ensuring optimal development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground text-lg mb-3">What is Stunting?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Stunting occurs when a child doesn't reach their growth potential due to poor nutrition, 
                repeated infections, or inadequate care during critical periods.
              </p>
              <h4 className="font-semibold text-foreground text-lg mb-3">Prevention is Key</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The first 1,000 days (from conception to age 2) are crucial for preventing stunting 
                and ensuring optimal development.
              </p>
            </div>
            
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground text-lg mb-3">During Pregnancy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Proper maternal nutrition and prenatal care are essential for preventing stunting 
                before birth.
              </p>
              <h4 className="font-semibold text-foreground text-lg mb-3">Monitoring Progress</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Regular check-ups help track both maternal and fetal growth to identify and address 
                any concerns early.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}