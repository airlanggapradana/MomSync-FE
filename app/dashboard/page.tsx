"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Gauge, 
  Weight, 
  Wind, 
  Thermometer, 
  Droplets,
  TrendingUp,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  ChevronRight,
  AlertCircle
} from "lucide-react"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Sample data for mini charts
const miniChartData = [
  { time: "06:00", value: 72 },
  { time: "09:00", value: 75 },
  { time: "12:00", value: 78 },
  { time: "15:00", value: 76 },
  { time: "18:00", value: 74 },
  { time: "21:00", value: 72 }
]

const recoveryData = [
  { time: "Mon", recovery: 65, sleep: 7.2, stress: 45 },
  { time: "Tue", recovery: 72, sleep: 7.8, stress: 38 },
  { time: "Wed", recovery: 68, sleep: 7.0, stress: 42 },
  { time: "Thu", recovery: 78, sleep: 8.1, stress: 35 },
  { time: "Fri", recovery: 82, sleep: 8.0, stress: 32 },
  { time: "Sat", recovery: 85, sleep: 8.5, stress: 28 },
  { time: "Sun", recovery: 80, sleep: 8.2, stress: 30 }
]

const healthMetrics = [
  {
    id: 1,
    title: "Heart Rate",
    value: "72",
    unit: "BPM",
    icon: Heart,
    timestamp: "2 minutes ago",
    status: "normal",
    range: "60-100 BPM",
    color: "from-red-500 to-pink-500"
  },
  {
    id: 2,
    title: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    icon: Gauge,
    timestamp: "5 minutes ago",
    status: "normal",
    range: "<120/80",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "BMI",
    value: "24.5",
    unit: "kg/m²",
    icon: Weight,
    timestamp: "Today",
    status: "normal",
    range: "18.5-24.9",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "SpO₂",
    value: "98",
    unit: "%",
    icon: Wind,
    timestamp: "3 minutes ago",
    status: "normal",
    range: "95-100%",
    color: "from-purple-500 to-violet-500"
  },
  {
    id: 5,
    title: "Temperature",
    value: "98.6",
    unit: "°F",
    icon: Thermometer,
    timestamp: "1 minute ago",
    status: "normal",
    range: "98.6°F",
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 6,
    title: "Blood Sugar",
    value: "105",
    unit: "mg/dL",
    icon: Droplets,
    timestamp: "10 minutes ago",
    status: "normal",
    range: "70-100 fasting",
    color: "from-yellow-500 to-orange-500"
  }
]

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Williams",
    type: "Prenatal Checkup",
    date: "Nov 25, 2025",
    time: "2:00 PM",
    status: "confirmed"
  },
  {
    id: 2,
    doctor: "Dr. James Martinez",
    type: "Ultrasound",
    date: "Dec 2, 2025",
    time: "10:30 AM",
    status: "scheduled"
  }
]

const doctors = [
  { id: 1, name: "Dr. Sarah Williams", role: "OB/GYN", online: true },
  { id: 2, name: "Dr. James Martinez", role: "Ultrasound Specialist", online: false },
  { id: 3, name: "Dr. Emma Johnson", role: "Nutritionist", online: true }
]

export default function HealthDashboardPage() {
  const getStatusBadgeColor = (status: string) => {
    return status === "normal" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
  }

  const MetricCard = ({ metric }: { metric: typeof healthMetrics[0] }) => {
    const IconComponent = metric.icon
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border hover:shadow-lg hover:border-border/60 transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-4">
          <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${metric.color} flex items-center justify-center`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <Badge className={getStatusBadgeColor(metric.status)}>
            {metric.status}
          </Badge>
        </div>

        <h3 className="text-sm text-muted-foreground font-medium mb-2">{metric.title}</h3>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-foreground">{metric.value}</span>
          <span className="text-sm text-muted-foreground">{metric.unit}</span>
        </div>
        <div className="text-xs text-muted-foreground mb-3">Range: {metric.range}</div>

        {/* Mini Chart */}
        <div className="h-12 -mx-2 mb-3">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={miniChartData}>
              <defs>
                <linearGradient id={`grad-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={metric.color.split(" ")[1]} stopOpacity={0.3}/>
                  <stop offset="100%" stopColor={metric.color.split(" ")[1]} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip cursor={false} contentStyle={{ display: "none" }} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={metric.color.includes("red") ? "#ef4444" : metric.color.includes("blue") ? "#3b82f6" : metric.color.includes("green") ? "#22c55e" : metric.color.includes("purple") ? "#a855f7" : metric.color.includes("orange") ? "#f97316" : "#eab308"}
                fill={`url(#grad-${metric.id})`}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{metric.timestamp}</span>
          <TrendingUp className="w-4 h-4 text-green-600" />
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 sm:px-6">
      <div className="">
      

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Metrics and Recovery */}
          <div className="lg:col-span-2 space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {healthMetrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </div>

            {/* Recovery Tracker Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-border"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Weekly Recovery Tracker</h2>
                <p className="text-muted-foreground">Monitor your recovery patterns and sleep quality</p>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={recoveryData}>
                    <defs>
                      <linearGradient id="colorRecovery" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorSleep" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="time" stroke="#9ca3af" style={{ fontSize: "12px" }} />
                    <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid #e5e7eb",
                        borderRadius: "12px",
                        padding: "12px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="recovery" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: "#10b981", r: 5 }}
                      activeDot={{ r: 7 }}
                      name="Recovery (%)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="sleep" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: "#3b82f6", r: 5 }}
                      activeDot={{ r: 7 }}
                      name="Sleep (hours)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="stress" 
                      stroke="#ef4444" 
                      strokeWidth={3}
                      dot={{ fill: "#ef4444", r: 5 }}
                      activeDot={{ r: 7 }}
                      name="Stress Level"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Chat, Appointments, Map */}
          <div className="space-y-6">
            {/* Doctor Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Quick Chat</h3>
                <Badge className="bg-green-100 text-green-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Live
                </Badge>
              </div>

              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                <div className="bg-secondary/50 rounded-xl p-3 max-w-xs">
                  <p className="text-sm text-foreground">How are you feeling today?</p>
                  <span className="text-xs text-muted-foreground mt-1 block">Dr. Sarah Williams</span>
                </div>
                <div className="bg-[#1f4b4a] text-white rounded-xl p-3 max-w-xs ml-auto">
                  <p className="text-sm">Great! All my metrics look good.</p>
                  <span className="text-xs text-white/70 mt-1 block">2 min ago</span>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-secondary/30 rounded-lg px-3 py-2 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a]"
                />
                <Button size="sm" className="rounded-lg">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {doctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-all text-left"
                  >
                    <div className="w-8 h-8 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {doctor.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-foreground line-clamp-1">{doctor.name.split(" ")[0]}</div>
                      <div className={`text-xs ${doctor.online ? "text-green-600" : "text-muted-foreground"}`}>
                        {doctor.online ? "Online" : "Offline"}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Appointment Booking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">Upcoming Appointments</h3>

              <div className="space-y-3 mb-4">
                {upcomingAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="bg-secondary/30 rounded-lg p-3 border border-border/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{apt.type}</p>
                        <p className="text-xs text-muted-foreground">{apt.doctor}</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">
                        {apt.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {apt.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {apt.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="rounded-lg text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
                <Button className="rounded-lg text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Doctor
                </Button>
              </div>
            </motion.div>

            {/* Location Map Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border overflow-hidden"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">Nearest Clinic</h3>

              {/* Map Placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-[#1f4b4a]/10 to-[#2d6a68]/10 rounded-lg mb-4 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#1f4b4a] mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Healthcare Center Map</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">Medical Plaza Downtown</p>
                  <p className="text-xs text-muted-foreground">456 Health Street, Medical City</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Distance</p>
                    <p className="text-sm font-bold text-foreground">2.3 km</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <MapPin className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Alert Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-200"
            >
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900">Health Tip</p>
                  <p className="text-xs text-amber-800 mt-1">
                    Stay hydrated and maintain regular sleep schedule for optimal health during pregnancy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
