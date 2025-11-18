"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  Users, 
  MessageSquare, 
  Pill,
  BarChart3,
  TrendingUp,
  AlertCircle,
  Clock,
  CheckCircle,
  Calendar,
  Search,
  Plus,
  ChevronRight,
  Activity,
  Heart,
  Stethoscope
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Sample data
const patientStats = [
  { name: "Total Patients", value: "24", icon: Users, color: "from-blue-500 to-cyan-500", change: "+2 this week" },
  { name: "Active Consultations", value: "8", icon: MessageSquare, color: "from-purple-500 to-pink-500", change: "+3 today" },
  { name: "Prescriptions", value: "12", icon: Pill, color: "from-orange-500 to-red-500", change: "Pending review" },
  { name: "Overall Rating", value: "4.8", icon: TrendingUp, color: "from-green-500 to-emerald-500", change: "from 126 reviews" }
]

const recentPatients = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    condition: "Prenatal Checkup",
    lastVisit: "2 days ago",
    status: "stable",
    nextAppointment: "Nov 25, 2025"
  },
  {
    id: 2,
    name: "Emily Davis",
    age: 25,
    condition: "Gestational Diabetes",
    lastVisit: "5 days ago",
    status: "monitoring",
    nextAppointment: "Nov 22, 2025"
  },
  {
    id: 3,
    name: "Jessica Martinez",
    age: 31,
    condition: "High Blood Pressure",
    lastVisit: "1 week ago",
    status: "alert",
    nextAppointment: "Nov 20, 2025"
  },
  {
    id: 4,
    name: "Amanda Wilson",
    age: 26,
    condition: "Routine Checkup",
    lastVisit: "3 days ago",
    status: "stable",
    nextAppointment: "Dec 1, 2025"
  }
]

const consultationTrend = [
  { day: "Mon", consultations: 8, resolved: 6 },
  { day: "Tue", consultations: 12, resolved: 10 },
  { day: "Wed", consultations: 10, resolved: 8 },
  { day: "Thu", consultations: 15, resolved: 13 },
  { day: "Fri", consultations: 11, resolved: 11 },
  { day: "Sat", consultations: 6, resolved: 5 },
  { day: "Sun", consultations: 4, resolved: 4 }
]

const prescriptionData = [
  { name: "Vitamins", value: 28 },
  { name: "Antibiotics", value: 15 },
  { name: "Supplements", value: 32 },
  { name: "Other", value: 25 }
]

const COLORS = ["#1f4b4a", "#2d6a68", "#3d7a78", "#4d8a88"]

export default function ProviderDashboard() {
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-green-100 text-green-700"
      case "monitoring":
        return "bg-blue-100 text-blue-700"
      case "alert":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "stable":
        return <CheckCircle className="w-4 h-4" />
      case "monitoring":
        return <AlertCircle className="w-4 h-4" />
      case "alert":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 py-6 px-4 sm:px-6">
      <div className="">
      

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {patientStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-sm text-muted-foreground font-medium mb-2">{stat.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Consultation Trend & Prescription Distribution */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Consultation Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-border"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Weekly Consultation Trend</h2>
                <p className="text-muted-foreground">Track consultation volume and resolution rate</p>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={consultationTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" stroke="#9ca3af" style={{ fontSize: "12px" }} />
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
                    <Bar dataKey="consultations" fill="#1f4b4a" radius={[8, 8, 0, 0]} name="Total Consultations" />
                    <Bar dataKey="resolved" fill="#10b981" radius={[8, 8, 0, 0]} name="Resolved" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Prescription Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-border"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Prescription Distribution</h2>
                <p className="text-muted-foreground">Breakdown of prescribed medication types</p>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={prescriptionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {prescriptionData.map((entry, index) => (
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

          {/* Right Column - Quick Actions & Recent Updates */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>

              <div className="space-y-3">
                <Button className="w-full rounded-lg justify-start bg-linear-to-r from-[#1f4b4a] to-[#2d6a68] hover:shadow-lg">
                  <Plus className="w-4 h-4 mr-2" />
                  New Consultation
                </Button>
                <Button variant="outline" className="w-full rounded-lg justify-start">
                  <Pill className="w-4 h-4 mr-2" />
                  Write Prescription
                </Button>
                <Button variant="outline" className="w-full rounded-lg justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  View All Patients
                </Button>
                <Button variant="outline" className="w-full rounded-lg justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </motion.div>

            {/* Pending Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">Pending Tasks</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">Review Lab Results</p>
                    <p className="text-xs text-muted-foreground">3 pending results</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">Respond to Messages</p>
                    <p className="text-xs text-muted-foreground">5 unread messages</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">Approve Prescriptions</p>
                    <p className="text-xs text-muted-foreground">2 pending approvals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <h3 className="text-lg font-bold text-green-900">System Status</h3>
              </div>
              <p className="text-sm text-green-800">All systems operational. Last sync: 2 minutes ago</p>
            </motion.div>
          </div>
        </div>

        {/* Recent Patients Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Recent Patients</h2>
              <p className="text-muted-foreground">View and manage your patient list</p>
            </div>
            <Button className="rounded-lg">
              <Plus className="w-4 h-4 mr-2" />
              Add Patient
            </Button>
          </div>

          {/* Search Bar */}
          <div className="mb-6 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search patients by name or ID..."
              className="w-full bg-secondary/30 rounded-lg pl-10 pr-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-foreground"
            />
          </div>

          {/* Patients Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Patient Name</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Age</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Condition</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Last Visit</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Next Appointment</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentPatients.map((patient) => (
                  <tr key={patient.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {patient.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="font-medium text-foreground">{patient.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{patient.age}</td>
                    <td className="py-4 px-4 text-muted-foreground text-sm">{patient.condition}</td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusBadgeColor(patient.status)}>
                        {getStatusIcon(patient.status)}
                        <span className="ml-2 capitalize">{patient.status}</span>
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground text-sm">{patient.lastVisit}</td>
                    <td className="py-4 px-4 text-muted-foreground text-sm">{patient.nextAppointment}</td>
                    <td className="py-4 px-4">
                      <Button variant="ghost" size="sm" className="rounded-lg">
                        View <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
