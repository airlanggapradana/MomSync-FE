"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { 
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts"
import {
  TrendingUp,
  Users,
  Heart,
  Activity,
  Download,
  Calendar,
  Filter
} from "lucide-react"

const patientGrowth = [
  { month: "Jan", patients: 10, newPatients: 3 },
  { month: "Feb", patients: 14, newPatients: 4 },
  { month: "Mar", patients: 18, newPatients: 4 },
  { month: "Apr", patients: 24, newPatients: 6 },
  { month: "May", patients: 31, newPatients: 7 },
  { month: "Jun", patients: 38, newPatients: 7 },
  { month: "Jul", patients: 45, newPatients: 7 },
  { month: "Aug", patients: 52, newPatients: 7 },
  { month: "Sep", patients: 58, newPatients: 6 },
  { month: "Oct", patients: 65, newPatients: 7 },
  { month: "Nov", patients: 75, newPatients: 10 }
]

const conditionBreakdown = [
  { name: "Prenatal Checkup", value: 25 },
  { name: "Gestational Diabetes", value: 18 },
  { name: "High Blood Pressure", value: 15 },
  { name: "Anemia", value: 10 },
  { name: "Other", value: 7 }
]

const consultationMetrics = [
  { week: "Week 1", completed: 15, pending: 3, resolved: 14 },
  { week: "Week 2", completed: 18, pending: 2, resolved: 17 },
  { week: "Week 3", completed: 22, pending: 4, resolved: 21 },
  { week: "Week 4", completed: 19, pending: 5, resolved: 18 }
]

const appointmentStatus = [
  { status: "Completed", value: 180 },
  { status: "Scheduled", value: 45 },
  { status: "Cancelled", value: 12 },
  { status: "No-show", value: 8 }
]

const COLORS = ["#1f4b4a", "#2d6a68", "#3d7a78", "#4d8a88", "#10b981"]

const analyticsCards = [
  {
    label: "Total Consultations",
    value: "158",
    change: "+12% from last month",
    icon: Activity,
    color: "from-blue-500 to-cyan-500"
  },
  {
    label: "Patient Satisfaction",
    value: "4.8/5",
    change: "+0.2 from last month",
    icon: Heart,
    color: "from-red-500 to-pink-500"
  },
  {
    label: "Completion Rate",
    value: "94%",
    change: "+3% improvement",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500"
  },
  {
    label: "Avg Response Time",
    value: "2.3h",
    change: "-0.5h faster",
    icon: Activity,
    color: "from-purple-500 to-pink-500"
  }
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 py-6 px-4 sm:px-6">
      <div className="">
       
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analyticsCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-sm text-muted-foreground font-medium mb-2">{card.label}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-foreground">{card.value}</span>
                </div>
                <p className="text-xs text-green-600">{card.change}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Patient Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Patient Growth</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={patientGrowth}>
                  <defs>
                    <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1f4b4a" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#1f4b4a" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: "12px" }} />
                  <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "12px"
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="patients"
                    stroke="#1f4b4a"
                    fillOpacity={1}
                    fill="url(#colorPatients)"
                    strokeWidth={2}
                    name="Total Patients"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Condition Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Condition Breakdown</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={conditionBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {conditionBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "12px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Consultation Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Weekly Consultation Metrics</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={consultationMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" stroke="#9ca3af" style={{ fontSize: "12px" }} />
                  <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "12px"
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: "14px", paddingTop: "10px" }} />
                  <Bar dataKey="completed" fill="#1f4b4a" radius={[8, 8, 0, 0]} name="Completed" />
                  <Bar dataKey="pending" fill="#fbbf24" radius={[8, 8, 0, 0]} name="Pending" />
                  <Bar dataKey="resolved" fill="#10b981" radius={[8, 8, 0, 0]} name="Resolved" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Appointment Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Appointment Status Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={appointmentStatus}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ status, value }) => `${status}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {appointmentStatus.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={[
                          "#10b981",
                          "#3b82f6",
                          "#ef4444",
                          "#f97316"
                        ][index % 4]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "12px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
