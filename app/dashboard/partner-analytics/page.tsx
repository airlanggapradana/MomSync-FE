"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  BarChart3,
  TrendingUp,
  Users,
  Bed,
  DollarSign,
  Filter,
  Download,
  Calendar
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts"

const analyticsStats = [
  { label: "Total Admissions", value: 1245, icon: Users, color: "from-blue-500 to-cyan-500", change: "+8.2% this month" },
  { label: "Bed Utilization", value: "87%", icon: Bed, color: "from-purple-500 to-pink-500", change: "+5% vs last month" },
  { label: "Average Revenue/Patient", value: "$2,450", icon: DollarSign, color: "from-green-500 to-emerald-500", change: "+12% growth" },
  { label: "Patient Satisfaction", value: "4.8/5", icon: TrendingUp, color: "from-orange-500 to-red-500", change: "+0.2 points" }
]

const admissionTrendData = [
  { month: "Jan", admissions: 89, discharges: 82, readmissions: 12 },
  { month: "Feb", admissions: 102, discharges: 98, readmissions: 14 },
  { month: "Mar", admissions: 95, discharges: 91, readmissions: 11 },
  { month: "Apr", admissions: 118, discharges: 115, readmissions: 16 },
  { month: "May", admissions: 142, discharges: 138, readmissions: 19 },
  { month: "Jun", admissions: 165, discharges: 160, readmissions: 22 },
  { month: "Jul", admissions: 187, discharges: 182, readmissions: 25 }
]

const departmentPerformance = [
  { department: "Maternity", admissions: 520, revenue: 185400, satisfaction: 4.9 },
  { department: "ICU", admissions: 210, revenue: 112300, satisfaction: 4.7 },
  { department: "Pediatrics", admissions: 285, revenue: 95200, satisfaction: 4.8 },
  { department: "General", admissions: 230, revenue: 78500, satisfaction: 4.6 }
]

const outcomeData = [
  { name: "Successful", value: 89 },
  { name: "Complications", value: 7 },
  { name: "Transferred", value: 3 },
  { name: "Other", value: 1 }
]

const staffPerformanceData = [
  { name: "Dr. Wilson", patients: 42, rating: 4.9 },
  { name: "Nurse Chen", patients: 35, rating: 4.8 },
  { name: "Dr. Rodriguez", patients: 28, rating: 4.7 },
  { name: "Tech Johnson", patients: 31, rating: 4.9 }
]

const monthlyComparisonData = [
  { month: "Jan", target: 100, actual: 89, efficiency: 89 },
  { month: "Feb", target: 110, actual: 102, efficiency: 92.7 },
  { month: "Mar", target: 105, actual: 95, efficiency: 90.5 },
  { month: "Apr", target: 125, actual: 118, efficiency: 94.4 },
  { month: "May", target: 145, actual: 142, efficiency: 97.9 },
  { month: "Jun", target: 170, actual: 165, efficiency: 97.1 },
  { month: "Jul", target: 190, actual: 187, efficiency: 98.4 }
]

const colors = ["#1f4b4a", "#2d6a68", "#4a9fa0", "#7cb8b6"]

export default function PartnerAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Analytics Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-green-100 text-green-700">{stat.change}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Admission Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Admission Trends</h2>
              <p className="text-sm text-muted-foreground">7-month patient flow analysis</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-lg">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={admissionTrendData}>
                <defs>
                  <linearGradient id="colorAdmissions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1f4b4a" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1f4b4a" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorDischarges" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2d6a68" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2d6a68" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px"
                }} />
                <Legend />
                <Area type="monotone" dataKey="admissions" stroke="#1f4b4a" fill="url(#colorAdmissions)" name="Admissions" />
                <Area type="monotone" dataKey="discharges" stroke="#2d6a68" fill="url(#colorDischarges)" name="Discharges" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Patient Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-6">Patient Outcomes</h2>

          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={outcomeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {outcomeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Department Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border overflow-x-auto"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Department Performance</h2>

        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground">Department</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Admissions</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Revenue</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Satisfaction</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Performance</th>
            </tr>
          </thead>
          <tbody>
            {departmentPerformance.map((dept, index) => (
              <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground">{dept.department}</td>
                <td className="py-3 px-4 text-muted-foreground">{dept.admissions}</td>
                <td className="py-3 px-4 text-foreground font-medium">${(dept.revenue / 1000).toFixed(1)}K</td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-100 text-green-700">{dept.satisfaction}/5</Badge>
                </td>
                <td className="py-3 px-4">
                  <div className="w-20 bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-[#1f4b4a] to-[#2d6a68] h-full transition-all"
                      style={{ width: `${(dept.satisfaction / 5) * 100}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Monthly Target vs Actual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Monthly Target vs Actual</h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyComparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #e5e7eb",
                borderRadius: "8px"
              }} />
              <Legend />
              <Bar dataKey="target" fill="#d1d5db" name="Target" />
              <Bar dataKey="actual" fill="#1f4b4a" name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Staff Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Top Staff Performance</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {staffPerformanceData.map((staff, index) => (
            <Card key={index} className="p-4 bg-gradient-to-br from-white to-secondary/20 border-border">
              <p className="font-semibold text-foreground mb-3">{staff.name}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Patients Treated</p>
                  <p className="text-2xl font-bold text-foreground">{staff.patients}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Patient Rating</p>
                  <Badge className="bg-green-100 text-green-700">{staff.rating}/5</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
