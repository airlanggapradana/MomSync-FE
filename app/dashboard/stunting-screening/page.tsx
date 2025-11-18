"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { 
  Plus,
  Search,
  AlertTriangle,
  TrendingUp,
  Download,
  Eye,
  Edit,
  MoreVertical,
  Filter,
  CheckCircle,
  Clock
} from "lucide-react"

const screeningData = [
  {
    id: "STUN001",
    childName: "Emma Davis",
    motherName: "Emily Davis",
    age: "8 months",
    height: "65 cm",
    weight: "6.5 kg",
    screeningDate: "Nov 15, 2025",
    status: "normal",
    risk: "low",
    notes: "Height and weight within normal range"
  },
  {
    id: "STUN002",
    childName: "Lucas Martinez",
    motherName: "Jessica Martinez",
    age: "12 months",
    height: "72 cm",
    weight: "8.2 kg",
    screeningDate: "Nov 10, 2025",
    status: "at-risk",
    risk: "medium",
    notes: "Height slightly below average, recommend monitoring"
  },
  {
    id: "STUN003",
    childName: "Oliver Wilson",
    motherName: "Amanda Wilson",
    age: "6 months",
    height: "62 cm",
    weight: "6.0 kg",
    screeningDate: "Nov 8, 2025",
    status: "normal",
    risk: "low",
    notes: "Good growth trajectory"
  },
  {
    id: "STUN004",
    childName: "Sophia Brown",
    motherName: "Michelle Brown",
    age: "10 months",
    height: "68 cm",
    weight: "7.5 kg",
    screeningDate: "Nov 5, 2025",
    status: "alert",
    risk: "high",
    notes: "Significant growth delay detected. Refer to pediatrician."
  },
  {
    id: "STUN005",
    childName: "James Johnson",
    motherName: "Sarah Johnson",
    age: "9 months",
    height: "66 cm",
    weight: "6.8 kg",
    screeningDate: "Nov 1, 2025",
    status: "normal",
    risk: "low",
    notes: "Height and weight tracking well"
  }
]

export default function StuntingScreeningPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [riskFilter, setRiskFilter] = useState("all")

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-green-100 text-green-700"
      case "at-risk":
        return "bg-yellow-100 text-yellow-700"
      case "alert":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal":
        return <CheckCircle className="w-4 h-4" />
      case "at-risk":
        return <AlertTriangle className="w-4 h-4" />
      case "alert":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "bg-green-100 text-green-700"
      case "medium":
        return "bg-yellow-100 text-yellow-700"
      case "high":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const filteredData = screeningData.filter(item => {
    const matchesSearch = item.childName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.motherName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRisk = riskFilter === "all" || item.risk === riskFilter
    return matchesSearch && matchesRisk
  })

  const stats = [
    { label: "Total Screenings", value: screeningData.length, color: "from-blue-500 to-cyan-500" },
    { label: "Normal", value: screeningData.filter(d => d.status === "normal").length, color: "from-green-500 to-emerald-500" },
    { label: "At Risk", value: screeningData.filter(d => d.status === "at-risk").length, color: "from-yellow-500 to-orange-500" },
    { label: "Alert", value: screeningData.filter(d => d.status === "alert").length, color: "from-red-500 to-pink-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 py-6 px-4 sm:px-6">
      <div className="">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
            >
              <p className="text-sm text-muted-foreground font-medium mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
        >
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Stunting Prevention</h3>
              <p className="text-sm text-blue-800">
                Regular screening helps identify growth delays early. Children identified as at-risk should receive additional nutritional support and monitoring.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border flex flex-col md:flex-row gap-4"
        >
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by child or mother name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-secondary/30 rounded-lg pl-10 pr-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-foreground"
            />
          </div>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="bg-secondary/30 rounded-lg px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-foreground md:w-40"
          >
            <option value="all">All Risk Levels</option>
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
          </select>
          <Button variant="outline" className="rounded-lg">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </motion.div>

        {/* Screening Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl border border-border overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/20">
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Child Name</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Mother</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Age</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Height</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Weight</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Risk Level</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${
                      index % 2 === 0 ? "bg-secondary/5" : ""
                    }`}
                  >
                    <td className="py-4 px-6">
                      <span className="font-mono text-sm font-semibold text-foreground">{item.id}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-medium text-foreground">{item.childName}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-muted-foreground">{item.motherName}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-muted-foreground">{item.age}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-medium text-foreground">{item.height}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-medium text-foreground">{item.weight}</span>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={getStatusBadgeColor(item.status)}>
                        {getStatusIcon(item.status)}
                        <span className="ml-2 capitalize">{item.status}</span>
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={getRiskBadgeColor(item.risk)}>
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="capitalize">{item.risk}</span>
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-muted-foreground">{item.screeningDate}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
                          <Download className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </button>
                      </div>
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
