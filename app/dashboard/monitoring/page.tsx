"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Button as RegularButton } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Thermometer, TrendingUp, Calendar, AlertTriangle, CheckCircle, Plus, BarChart3, Droplets } from "lucide-react"
import { HealthMonitoringChart } from "@/components/health-monitoring-chart"
import { useState } from "react"

// Dummy data for Health Monitoring
const healthSigns = [
  {
    id: "hs1abc",
    date: "2024-10-28T08:30:00Z",
    blood_pressure_systolic: 118,
    blood_pressure_diastolic: 76,
    heart_rate: 82,
    temperature: 98.6,
    weight: 145,
    notes: "Feeling good, no morning sickness today. Good appetite and energy levels.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  },
  {
    id: "hs1def",
    date: "2024-10-27T09:15:00Z", 
    blood_pressure_systolic: 122,
    blood_pressure_diastolic: 78,
    heart_rate: 85,
    temperature: 98.4,
    weight: 144.8,
    notes: "Slight headache in the morning, resolved after rest. Baby movements felt strongly.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  },
  {
    id: "hs1ghi",
    date: "2024-10-26T08:45:00Z",
    blood_pressure_systolic: 115,
    blood_pressure_diastolic: 74,
    heart_rate: 80,
    temperature: 98.5,
    weight: 144.5,
    notes: "Great energy levels. Prenatal yoga session completed.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  },
  {
    id: "hs1jkl",
    date: "2024-10-25T09:00:00Z",
    blood_pressure_systolic: 120,
    blood_pressure_diastolic: 77,
    heart_rate: 83,
    temperature: 98.7,
    weight: 144.2,
    notes: "Mild fatigue in the afternoon. Rested well.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  },
  {
    id: "hs1mno",
    date: "2024-10-24T08:30:00Z",
    blood_pressure_systolic: 117,
    blood_pressure_diastolic: 75,
    heart_rate: 81,
    temperature: 98.5,
    weight: 144,
    notes: "Normal day, good appetite and sleep quality.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  },
  {
    id: "hs1pqr",
    date: "2024-10-23T09:20:00Z",
    blood_pressure_systolic: 119,
    blood_pressure_diastolic: 76,
    heart_rate: 84,
    temperature: 98.6,
    weight: 143.8,
    notes: "Baby very active today. Regular checkup scheduled.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  },
  {
    id: "hs1stu",
    date: "2024-10-22T08:15:00Z",
    blood_pressure_systolic: 116,
    blood_pressure_diastolic: 73,
    heart_rate: 79,
    temperature: 98.4,
    weight: 143.5,
    notes: "Feeling energetic. Completed light exercise routine.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  }
]

export default function HealthMonitoringPage() {
  const [selectedChart, setSelectedChart] = useState<'bloodPressure' | 'heartRate' | 'temperature' | 'weight'>('bloodPressure')

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (value: number, type: string) => {
    switch (type) {
      case 'bp_systolic':
        if (value < 120) return 'text-green-600'
        if (value < 140) return 'text-yellow-600'
        return 'text-red-600'
      case 'heart_rate':
        if (value >= 60 && value <= 100) return 'text-green-600'
        return 'text-yellow-600'
      default:
        return 'text-green-600'
    }
  }

  const latestSigns = healthSigns[0]
  const averageBP = Math.round((healthSigns.reduce((sum, sign) => sum + sign.blood_pressure_systolic, 0)) / healthSigns.length)
  const averageHR = Math.round((healthSigns.reduce((sum, sign) => sum + sign.heart_rate, 0)) / healthSigns.length)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4">
            Health Monitoring
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Track vital signs and daily health measurements for optimal pregnancy care
          </p>
          <Button size="lg" className="rounded-full">
            <Plus className="w-5 h-5 mr-2" />
            Add Measurement
          </Button>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{averageBP}/76</div>
              <div className="text-sm text-muted-foreground font-medium">Avg Blood Pressure</div>
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
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{averageHR}</div>
              <div className="text-sm text-muted-foreground font-medium">Avg Heart Rate (BPM)</div>
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
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{healthSigns.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Measurements This Week</div>
            </div>
          </motion.div>
        </div>

        {/* Latest Measurement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6">Latest Measurement</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">
                  {latestSigns.blood_pressure_systolic}/{latestSigns.blood_pressure_diastolic}
                </div>
                <div className="text-sm text-muted-foreground">Blood Pressure</div>
              </div>
            </div>
            <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mb-3">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{latestSigns.heart_rate}</div>
                <div className="text-sm text-muted-foreground">Heart Rate (BPM)</div>
              </div>
            </div>
            <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center mb-3">
                  <Thermometer className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{latestSigns.temperature}°F</div>
                <div className="text-sm text-muted-foreground">Temperature</div>
              </div>
            </div>
            <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#4d8a88] to-[#5d9a98] flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{latestSigns.weight} lbs</div>
                <div className="text-sm text-muted-foreground">Weight</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Health Trends</h2>
                <p className="text-sm text-muted-foreground">7-day overview of your vital signs</p>
              </div>
            </div>
          </div>

          {/* Chart Type Selector */}
          <div className="flex flex-wrap gap-3 mb-6">
            <RegularButton
              variant={selectedChart === 'bloodPressure' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedChart('bloodPressure')}
            >
              <Heart className="w-4 h-4 mr-2" />
              Blood Pressure
            </RegularButton>
            <RegularButton
              variant={selectedChart === 'heartRate' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedChart('heartRate')}
            >
              <Activity className="w-4 h-4 mr-2" />
              Heart Rate
            </RegularButton>
            <RegularButton
              variant={selectedChart === 'temperature' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedChart('temperature')}
            >
              <Thermometer className="w-4 h-4 mr-2" />
              Temperature
            </RegularButton>
            <RegularButton
              variant={selectedChart === 'weight' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedChart('weight')}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Weight
            </RegularButton>
          </div>

          {/* Chart Display */}
          <div className="bg-background/50 rounded-2xl p-6 border border-border/50" style={{ height: '400px' }}>
            <HealthMonitoringChart 
              data={healthSigns.map(sign => ({
                date: sign.date,
                bloodPressureSystolic: sign.blood_pressure_systolic,
                bloodPressureDiastolic: sign.blood_pressure_diastolic,
                heartRate: sign.heart_rate,
                temperature: sign.temperature,
                weight: sign.weight
              })).reverse()}
              type={selectedChart}
            />
          </div>
        </motion.div>

        {/* Health History */}
        <div className="space-y-6 mb-12">
          <h2 className=" text-3xl font-normal text-foreground">Recent Measurements</h2>
          {healthSigns.map((sign, index) => (
            <motion.div
              key={sign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-semibold text-xl text-foreground">{formatDate(sign.date)}</h3>
                  <p className="text-muted-foreground">{sign.motherName}</p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">Normal Range</Badge>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-background/50 rounded-2xl p-4 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Blood Pressure</div>
                  <div className="font-semibold text-foreground">{sign.blood_pressure_systolic}/{sign.blood_pressure_diastolic} mmHg</div>
                </div>
                <div className="bg-background/50 rounded-2xl p-4 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Heart Rate</div>
                  <div className="font-semibold text-foreground">{sign.heart_rate} BPM</div>
                </div>
                <div className="bg-background/50 rounded-2xl p-4 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Temperature</div>
                  <div className="font-semibold text-foreground">{sign.temperature}°F</div>
                </div>
                <div className="bg-background/50 rounded-2xl p-4 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Weight</div>
                  <div className="font-semibold text-foreground">{sign.weight} lbs</div>
                </div>
              </div>

              {sign.notes && (
                <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-200/50">
                  <h4 className="font-semibold text-foreground mb-2">Notes</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sign.notes}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-secondary/30 rounded-3xl p-10 border border-border"
        >
          <div className="text-center mb-8">
            <h3 className=" text-3xl md:text-4xl font-normal text-foreground mb-3">
              💡 Health Monitoring Tips
            </h3>
            <p className="text-muted-foreground text-lg">
              Best practices for accurate and consistent health tracking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground text-lg mb-3">Daily Measurements</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Take measurements at the same time each day for consistency and accurate tracking
              </p>
              <h4 className="font-semibold text-foreground text-lg mb-3">Record Everything</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Include detailed notes about how you're feeling and any symptoms you experience
              </p>
            </div>
            
            <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground text-lg mb-3">Watch for Changes</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Monitor trends carefully and report any significant changes to your doctor immediately
              </p>
              <h4 className="font-semibold text-foreground text-lg mb-3">Stay Hydrated</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proper hydration is essential and affects all vital signs measurements
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}