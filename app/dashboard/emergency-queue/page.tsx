"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  AlertTriangle,
  Plus,
  Edit2,
  Trash2,
  Search,
  Filter,
  Download,
  Clock,
  User,
  Phone,
  AlertCircle,
  CheckCircle,
  Pill,
  Activity
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useState } from "react"

const emergencyStats = [
  { label: "Total Cases", value: 156, color: "from-blue-500 to-cyan-500", change: "+8 this week" },
  { label: "Pending", value: 3, color: "from-red-500 to-orange-500", change: "Active" },
  { label: "In Progress", value: 7, color: "from-yellow-500 to-amber-500", change: "Being treated" },
  { label: "Resolved", value: 146, color: "from-green-500 to-emerald-500", change: "This month" }
]

const emergencyTrendData = [
  { date: "Mon", cases: 12, resolved: 10 },
  { date: "Tue", cases: 18, resolved: 15 },
  { date: "Wed", cases: 14, resolved: 13 },
  { date: "Thu", cases: 22, resolved: 20 },
  { date: "Fri", cases: 25, resolved: 23 },
  { date: "Sat", cases: 19, resolved: 17 },
  { date: "Sun", cases: 15, resolved: 14 }
]

const activeEmergencies = [
  {
    id: 1,
    caseNumber: "EMG-2025-001",
    patient: "Maria Santos",
    age: 32,
    priority: "high",
    condition: "Complicated Pregnancy - Severe Bleeding",
    arrived: "2:48 PM",
    waitTime: "12 mins",
    assignedTo: "Dr. James Wilson",
    severity: "critical"
  },
  {
    id: 2,
    caseNumber: "EMG-2025-002",
    patient: "Jessica Lee",
    age: 28,
    priority: "high",
    condition: "Active Labor - Cord Compression",
    arrived: "2:55 PM",
    waitTime: "5 mins",
    assignedTo: "Nurse Sarah Chen",
    severity: "critical"
  },
  {
    id: 3,
    caseNumber: "EMG-2025-003",
    patient: "Amanda Brown",
    age: 35,
    priority: "medium",
    condition: "Prenatal Complications - Hypertension Crisis",
    arrived: "2:32 PM",
    waitTime: "28 mins",
    assignedTo: "Waiting for availability",
    severity: "high"
  }
]

const completedCases = [
  {
    id: 1,
    caseNumber: "EMG-2025-001",
    patient: "Lisa Thompson",
    condition: "Postpartum Hemorrhage",
    duration: "45 mins",
    outcome: "Successful",
    dischargedAt: "Nov 18, 2:30 PM"
  },
  {
    id: 2,
    caseNumber: "EMG-2025-002",
    patient: "Michelle Garcia",
    condition: "Gestational Preeclampsia",
    duration: "32 mins",
    outcome: "Successful",
    dischargedAt: "Nov 18, 2:15 PM"
  },
  {
    id: 3,
    caseNumber: "EMG-2025-003",
    patient: "Rachel Kim",
    condition: "Fetal Distress",
    duration: "55 mins",
    outcome: "Successful",
    dischargedAt: "Nov 18, 1:45 PM"
  }
]

export default function EmergencyQueuePage() {
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active")
  const [searchQuery, setSearchQuery] = useState("")

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700"
      case "medium":
        return "bg-yellow-100 text-yellow-700"
      case "low":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getSeverityIcon = (severity: string) => {
    if (severity === "critical") return <AlertTriangle className="w-5 h-5 text-red-600" />
    if (severity === "high") return <AlertCircle className="w-5 h-5 text-orange-600" />
    return <Activity className="w-5 h-5 text-yellow-600" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {emergencyStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Emergency Trends Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Emergency Cases Trend</h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={emergencyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #e5e7eb",
                borderRadius: "8px"
              }} />
              <Legend />
              <Bar dataKey="cases" fill="#ef4444" name="Total Cases" />
              <Bar dataKey="resolved" fill="#10b981" name="Resolved" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Active vs Completed Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <Button
              variant={activeTab === "active" ? "default" : "outline"}
              className="rounded-lg"
              onClick={() => setActiveTab("active")}
            >
              Active Cases ({activeEmergencies.length})
            </Button>
            <Button
              variant={activeTab === "completed" ? "default" : "outline"}
              className="rounded-lg"
              onClick={() => setActiveTab("completed")}
            >
              Completed ({completedCases.length})
            </Button>
          </div>
          <Button className="rounded-lg">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {activeTab === "active" ? (
          <div className="space-y-4">
            {activeEmergencies.map((emergency) => (
              <div
                key={emergency.id}
                className="p-4 rounded-xl border-2 border-red-200 bg-red-50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getSeverityIcon(emergency.severity)}
                      <div>
                        <p className="font-semibold text-foreground">{emergency.patient}</p>
                        <p className="text-xs text-muted-foreground">Case: {emergency.caseNumber}</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground font-medium">{emergency.condition}</p>
                  </div>
                  <Badge className={getPriorityColor(emergency.priority)}>
                    {emergency.priority.toUpperCase()}
                  </Badge>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4 py-4 border-y border-red-200">
                  <div>
                    <p className="text-xs text-muted-foreground">Age</p>
                    <p className="font-semibold text-foreground">{emergency.age} yrs</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Arrived</p>
                    <p className="font-semibold text-foreground">{emergency.arrived}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Wait Time</p>
                    <p className="font-semibold text-orange-600">{emergency.waitTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Assigned To</p>
                    <p className="font-semibold text-foreground text-sm">{emergency.assignedTo}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 rounded-lg bg-red-600 hover:bg-red-700">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Update Status
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                    View Full Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                    Reassign Staff
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {completedCases.map((case_) => (
              <div
                key={case_.id}
                className="p-4 rounded-xl border border-green-200 bg-green-50/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-foreground">{case_.patient}</p>
                        <p className="text-xs text-muted-foreground">{case_.caseNumber}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{case_.condition}</p>
                  </div>

                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-700 mb-2">{case_.outcome}</Badge>
                    <div className="text-xs text-muted-foreground">
                      <p>Duration: {case_.duration}</p>
                      <p>{case_.dischargedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
