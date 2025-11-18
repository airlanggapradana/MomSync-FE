"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Bed, 
  Users, 
  AlertTriangle,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  Search,
  Plus,
  ChevronRight,
  Activity,
  DollarSign,
  Calendar,
  Filter,
  Download,
  Edit2,
  Trash2,
  Phone,
  MapPin
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { useState } from "react"

// Sample data for partner/hospital
const partnerStats = [
  { name: "Available Beds", value: "12", icon: Bed, color: "from-blue-500 to-cyan-500", change: "+2 today" },
  { name: "Staff Active", value: "34", icon: Users, color: "from-purple-500 to-pink-500", change: "All on duty" },
  { name: "Emergency Queue", value: "3", icon: AlertTriangle, color: "from-red-500 to-orange-500", change: "Urgent cases" },
  { name: "Revenue Today", value: "$8,450", icon: DollarSign, color: "from-green-500 to-emerald-500", change: "+12% vs yesterday" }
]

const bedOccupancyData = [
  { time: "00:00", occupied: 15, available: 9 },
  { time: "04:00", occupied: 12, available: 12 },
  { time: "08:00", occupied: 18, available: 6 },
  { time: "12:00", occupied: 22, available: 2 },
  { time: "16:00", occupied: 20, available: 4 },
  { time: "20:00", occupied: 17, available: 7 },
  { time: "24:00", occupied: 14, available: 10 }
]

const departmentUtilization = [
  { name: "Maternity", value: 45, fill: "#1f4b4a" },
  { name: "ICU", value: 28, fill: "#2d6a68" },
  { name: "Pediatrics", value: 18, fill: "#4a9fa0" },
  { name: "General", value: 9, fill: "#7cb8b6" }
]

const staffSchedule = [
  {
    id: 1,
    name: "Dr. James Wilson",
    position: "Senior Obstetrician",
    shift: "Morning (7 AM - 3 PM)",
    status: "on-duty",
    phone: "+1-555-0101"
  },
  {
    id: 2,
    name: "Nurse Sarah Chen",
    position: "Head Nurse - Maternity",
    shift: "Afternoon (3 PM - 11 PM)",
    status: "on-duty",
    phone: "+1-555-0102"
  },
  {
    id: 3,
    name: "Dr. Emma Rodriguez",
    position: "Pediatrician",
    shift: "Night (11 PM - 7 AM)",
    status: "off-duty",
    phone: "+1-555-0103"
  },
  {
    id: 4,
    name: "Technician Mark Johnson",
    position: "Ultrasound Specialist",
    shift: "Morning (7 AM - 3 PM)",
    status: "on-duty",
    phone: "+1-555-0104"
  }
]

const emergencyQueue = [
  {
    id: 1,
    patient: "Maria Santos",
    priority: "high",
    condition: "Complicated Pregnancy",
    waitTime: "12 mins",
    arrived: "2:48 PM",
    assignedTo: "Dr. James Wilson"
  },
  {
    id: 2,
    patient: "Jessica Lee",
    priority: "high",
    condition: "Active Labor",
    waitTime: "5 mins",
    arrived: "2:55 PM",
    assignedTo: "Nurse Sarah Chen"
  },
  {
    id: 3,
    patient: "Amanda Brown",
    priority: "medium",
    condition: "Prenatal Complications",
    waitTime: "28 mins",
    arrived: "2:32 PM",
    assignedTo: "Waiting for availability"
  }
]

const revenueData = [
  { date: "Mon", revenue: 5200, target: 6000 },
  { date: "Tue", revenue: 6100, target: 6000 },
  { date: "Wed", revenue: 5800, target: 6000 },
  { date: "Thu", revenue: 7300, target: 6000 },
  { date: "Fri", revenue: 8200, target: 6000 },
  { date: "Sat", revenue: 7800, target: 6000 },
  { date: "Sun", revenue: 8450, target: 6000 }
]

export default function PartnerOverviewPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {partnerStats.map((stat, index) => {
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
                  <Badge className="text-xs bg-green-100 text-green-700">{stat.change}</Badge>
                </div>
                <h3 className="text-sm text-muted-foreground font-medium mb-1">{stat.name}</h3>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bed Occupancy Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">Bed Occupancy Trend</h2>
                <p className="text-sm text-muted-foreground">24-hour occupancy rate</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-lg">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bedOccupancyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px"
                  }} />
                  <Legend />
                  <Bar dataKey="occupied" stackId="a" fill="#1f4b4a" />
                  <Bar dataKey="available" stackId="a" fill="#a3d8d6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">Revenue Trend</h2>
                <p className="text-sm text-muted-foreground">Weekly performance</p>
              </div>
              <Badge className="bg-green-100 text-green-700">+12% vs last week</Badge>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px"
                  }} />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#1f4b4a" strokeWidth={3} dot={{ fill: "#1f4b4a", r: 5 }} />
                  <Line type="monotone" dataKey="target" stroke="#d1d5db" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Department Utilization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-6">Department Utilization</h2>

          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentUtilization}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentUtilization.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Emergency Queue */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Emergency Queue</h2>
            <p className="text-sm text-muted-foreground">{emergencyQueue.length} active cases</p>
          </div>
          <Badge className="bg-red-100 text-red-700">High Priority</Badge>
        </div>

        <div className="space-y-3">
          {emergencyQueue.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-xl border-2 transition-all ${
                item.priority === "high"
                  ? "bg-red-50 border-red-200"
                  : "bg-yellow-50 border-yellow-200"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-foreground">{item.patient}</p>
                  <p className="text-sm text-muted-foreground">{item.condition}</p>
                </div>
                <Badge className={item.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}>
                  {item.priority}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                <div>
                  <p className="text-muted-foreground">Wait Time</p>
                  <p className="font-semibold text-foreground">{item.waitTime}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Arrived</p>
                  <p className="font-semibold text-foreground">{item.arrived}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Assigned To</p>
                  <p className="font-semibold text-foreground text-xs">{item.assignedTo}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1 rounded-lg">
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                  Update Status
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Staff Scheduling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Staff Scheduling</h2>
            <p className="text-sm text-muted-foreground">{staffSchedule.length} team members</p>
          </div>
          <Button size="sm" className="rounded-lg">
            <Plus className="w-4 h-4 mr-2" />
            Add Schedule
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Position</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Shift</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Contact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffSchedule.map((staff) => (
                <tr key={staff.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-3 px-4">
                    <p className="font-medium text-foreground">{staff.name}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm text-muted-foreground">{staff.position}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {staff.shift}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className={staff.status === "on-duty" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}>
                      {staff.status === "on-duty" ? "On Duty" : "Off Duty"}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <a href={`tel:${staff.phone}`} className="text-sm text-[#1f4b4a] hover:text-[#2d6a68] flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {staff.phone}
                    </a>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="p-1 h-8 w-8">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-1 h-8 w-8 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Bed Management Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Bed Management</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Maternity Ward", total: 12, occupied: 9, available: 3 },
            { label: "ICU", total: 8, occupied: 5, available: 3 },
            { label: "Pediatrics", total: 10, occupied: 7, available: 3 },
            { label: "General Ward", total: 14, occupied: 8, available: 6 }
          ].map((ward, index) => (
            <Card key={index} className="p-4 bg-gradient-to-br from-white to-secondary/20 border-border">
              <p className="text-sm font-semibold text-foreground mb-3">{ward.label}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Total</span>
                  <span className="font-semibold text-foreground">{ward.total}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Occupied</span>
                  <span className="font-semibold text-foreground text-orange-600">{ward.occupied}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Available</span>
                  <span className="font-semibold text-foreground text-green-600">{ward.available}</span>
                </div>
              </div>

              <div className="w-full bg-secondary rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className="bg-linear-to-r from-[#1f4b4a] to-[#2d6a68] h-full transition-all"
                  style={{ width: `${(ward.occupied / ward.total) * 100}%` }}
                />
              </div>

              <Button size="sm" className="w-full rounded-lg text-xs">
                Manage Beds
              </Button>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
