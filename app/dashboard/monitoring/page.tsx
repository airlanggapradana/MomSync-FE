"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Button as RegularButton } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Thermometer, TrendingUp, Calendar, AlertTriangle, CheckCircle, Plus, BarChart3, Droplets, X, Check } from "lucide-react"
import { HealthMonitoringChart } from "@/components/health-monitoring-chart"
import { useState, useEffect } from "react"
import { useHealthMonitoring } from "@/hooks/use-health-monitoring"
import { useToast } from "@/hooks/use-toast"
import { HealthSignsMonitoring } from "@prisma/client"

// Dummy data for Health Monitoring - Extended dataset for realistic charting
const generateDummyData = () => {
  const data = []
  const now = new Date()
  
  for (let i = 0; i < 365; i++) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    
    // Generate realistic vital signs with slight variations
    const baseSystolic = 115 + Math.random() * 15
    const baseDiastolic = 75 + Math.random() * 10
    const baseHeartRate = 75 + Math.random() * 20
    const baseTemp = 98.4 + (Math.random() - 0.5) * 0.8
    const baseWeight = 143 + Math.random() * 4
    
    data.push({
      id: `hs${i}`,
      date: date.toISOString(),
      blood_pressure_systolic: Math.round(baseSystolic),
      blood_pressure_diastolic: Math.round(baseDiastolic),
      heart_rate: Math.round(baseHeartRate),
      temperature: Math.round(baseTemp * 10) / 10,
      weight: Math.round(baseWeight * 10) / 10,
      notes: i % 3 === 0 ? `Day ${i} - Regular monitoring` : "",
      motherId: "cm1abc123",
      motherName: "Sarah Johnson"
    })
  }
  
  return data
}

const healthSigns = generateDummyData()



export default function HealthMonitoringPage() {
  const [selectedChart, setSelectedChart] = useState<'bloodPressure' | 'heartRate' | 'temperature' | 'weight'>('bloodPressure')
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<'day' | 'week' | 'month' | 'year'>('week')
  const [isEditingLatest, setIsEditingLatest] = useState(false)
  const [editedValues, setEditedValues] = useState({
    blood_pressure_systolic: 0,
    blood_pressure_diastolic: 0,
    heart_rate: 0,
    temperature: 0,
    weight: 0,
  })
  // @ts-ignore 
  const [localLatestSigns, setLocalLatestSigns] = useState<HealthSignsMonitoring>(healthSigns[0])
  const { updateHealthRecord, loading, fetchHealthRecord } = useHealthMonitoring()
  const { toast } = useToast()

  // fetch every 
  useEffect(() => {
    const loadLatestRecord = async () => {
      try {
        await fetchHealthRecord("cmhyd6ku2000353mgmnl5q49h").then((data) => {
          setLocalLatestSigns(data)
          console.log(data)
          setEditedValues({
            blood_pressure_systolic: data.blood_pressure_systolic,
            blood_pressure_diastolic: data.blood_pressure_diastolic,
            heart_rate: data.heart_rate,
            temperature: data.temperature,
            weight: data.weight,
          })
        })
      } catch (error) {
        console.error("Failed to load latest health record:", error)
      }
    }

    loadLatestRecord()

    
  }, [isEditingLatest])
  console.log(localLatestSigns)

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

  const handleSaveLatestMeasurement = async () => {
    try {
      

      await updateHealthRecord(localLatestSigns.id, {
        blood_pressure: `${editedValues.blood_pressure_systolic}/${editedValues.blood_pressure_diastolic}`,
        heart_rate: editedValues.heart_rate,
      })

      // Update local state
      setLocalLatestSigns({
        ...localLatestSigns,
        blood_pressure: `${editedValues.blood_pressure_systolic}/${editedValues.blood_pressure_diastolic}`,
        heart_rate: editedValues.heart_rate,
      })

      setIsEditingLatest(false)
      toast({
        title: "Success",
        description: "Health measurements updated successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update health measurements",
        variant: "destructive",
      })
    }
  }

  const handleCancelEdit = () => {
    setIsEditingLatest(false)
    
  }

  const averageBP = Math.round((healthSigns.reduce((sum, sign) => sum + sign.blood_pressure_systolic, 0)) / healthSigns.length)
  const averageHR = Math.round((healthSigns.reduce((sum, sign) => sum + sign.heart_rate, 0)) / healthSigns.length)

  const getFilteredData = () => {
    const now = new Date()
    const filtered = healthSigns.filter(sign => {
      const signDate = new Date(sign.date)
      const timeDiff = now.getTime() - signDate.getTime()
      const daysDiff = timeDiff / (1000 * 60 * 60 * 24)

      switch (selectedTimePeriod) {
        case 'day':
          return daysDiff <= 1
        case 'week':
          return daysDiff <= 7
        case 'month':
          return daysDiff <= 30
        case 'year':
          return daysDiff <= 365
        default:
          return true
      }
    })
    return filtered
  }

  const filteredData = getFilteredData()
  const getTimePeriodLabel = () => {
    switch (selectedTimePeriod) {
      case 'day':
        return '1-day overview'
      case 'week':
        return '7-day overview'
      case 'month':
        return '30-day overview'
      case 'year':
        return '1-year overview'
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="">
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
              <div className="text-4xl font-bold text-foreground mb-2">{localLatestSigns.blood_pressure}</div>
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
              <div className="text-4xl font-bold text-foreground mb-2">{localLatestSigns.heart_rate}</div>
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Latest Measurement</h2>
            {!isEditingLatest && (
              <RegularButton
                variant="outline"
                size="sm"
                onClick={() => setIsEditingLatest(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Edit
              </RegularButton>
            )}
          </div>

          {isEditingLatest ? (
            <div className="space-y-6">
              {/* Blood Pressure Edit */}
              <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
                <label className="block text-sm font-medium text-foreground mb-3">Blood Pressure (mmHg)</label>
                <div className="flex gap-3 items-center">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={editedValues.blood_pressure_systolic}
                      onChange={(e) =>
                        setEditedValues({
                          ...editedValues,
                          blood_pressure_systolic: Number(e.target.value),
                        })
                      }
                      placeholder="Systolic"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
                    />
                  </div>
                  <span className="text-muted-foreground">/</span>
                  <div className="flex-1">
                    <input
                      type="number"
                      value={editedValues.blood_pressure_diastolic}
                      onChange={(e) =>
                        setEditedValues({
                          ...editedValues,
                          blood_pressure_diastolic: Number(e.target.value),
                        })
                      }
                      placeholder="Diastolic"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
                    />
                  </div>
                </div>
              </div>

              {/* Heart Rate Edit */}
              <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
                <label className="block text-sm font-medium text-foreground mb-3">Heart Rate (BPM)</label>
                <input
                  type="number"
                  value={editedValues.heart_rate}
                  onChange={(e) =>
                    setEditedValues({
                      ...editedValues,
                      heart_rate: Number(e.target.value),
                    })
                  }
                  placeholder="Enter heart rate"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
                />
              </div>

           

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end">
                <RegularButton
                  variant="outline"
                  onClick={handleCancelEdit}
                  disabled={loading}
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </RegularButton>
                <RegularButton
                  onClick={handleSaveLatestMeasurement}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Check className="w-4 h-4 mr-2" />
                  {loading ? 'Saving...' : 'Save'}
                </RegularButton>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-foreground mb-1">
                    {localLatestSigns.blood_pressure}
                  </div>
                  <div className="text-sm text-muted-foreground">Blood Pressure</div>
                </div>
              </div>
              <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mb-3">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-foreground mb-1">{localLatestSigns.heart_rate}</div>
                  <div className="text-sm text-muted-foreground">Heart Rate (BPM)</div>
                </div>
              </div>
           
            </div>
          )}
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
                <p className="text-sm text-muted-foreground">{getTimePeriodLabel()} of your vital signs</p>
              </div>
            </div>
          </div>

          {/* Time Period Filter */}
          <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-border/50">
            <RegularButton
              variant={selectedTimePeriod === 'day' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedTimePeriod('day')}
            >
              Day
            </RegularButton>
            <RegularButton
              variant={selectedTimePeriod === 'week' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedTimePeriod('week')}
            >
              Week
            </RegularButton>
            <RegularButton
              variant={selectedTimePeriod === 'month' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedTimePeriod('month')}
            >
              Month
            </RegularButton>
            <RegularButton
              variant={selectedTimePeriod === 'year' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedTimePeriod('year')}
            >
              Year
            </RegularButton>
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
          
          </div>

          {/* Chart Display */}
          <div className="bg-background/50 rounded-2xl p-6 border border-border/50" style={{ height: '400px' }}>
            <HealthMonitoringChart 
              data={filteredData.map(sign => ({
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
          {filteredData.length > 0 ? (
            filteredData.map((sign, index) => (
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
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/30 rounded-3xl p-12 border border-border text-center"
            >
              <p className="text-muted-foreground text-lg">No measurements found for the selected time period</p>
            </motion.div>
          )}
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