"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { 
  Plus,
  Search,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  Filter,
  Download,
  Eye,
  Edit,
  MoreVertical
} from "lucide-react"

const prescriptions = [
  {
    id: "RX001",
    patientName: "Sarah Johnson",
    medication: "Prenatal Vitamin",
    dosage: "1 tablet daily",
    frequency: "Once daily",
    duration: "Throughout pregnancy",
    prescribedDate: "Nov 15, 2025",
    dueDate: "Dec 15, 2025",
    status: "active",
    notes: "Take with breakfast"
  },
  {
    id: "RX002",
    patientName: "Emily Davis",
    medication: "Metformin",
    dosage: "500 mg",
    frequency: "Twice daily",
    duration: "3 months",
    prescribedDate: "Nov 10, 2025",
    dueDate: "Feb 10, 2026",
    status: "active",
    notes: "Monitor blood sugar levels"
  },
  {
    id: "RX003",
    patientName: "Jessica Martinez",
    medication: "Amlodipine",
    dosage: "5 mg",
    frequency: "Once daily",
    duration: "Ongoing",
    prescribedDate: "Nov 5, 2025",
    dueDate: "Dec 5, 2025",
    status: "pending",
    notes: "Blood pressure management"
  },
  {
    id: "RX004",
    patientName: "Amanda Wilson",
    medication: "Iron Supplement",
    dosage: "325 mg",
    frequency: "Once daily",
    duration: "2 months",
    prescribedDate: "Nov 1, 2025",
    dueDate: "Dec 31, 2025",
    status: "completed",
    notes: "For anemia prevention"
  },
  {
    id: "RX005",
    patientName: "Michelle Brown",
    medication: "Folic Acid",
    dosage: "400 mcg",
    frequency: "Once daily",
    duration: "3 months",
    prescribedDate: "Nov 12, 2025",
    dueDate: "Feb 12, 2026",
    status: "active",
    notes: "Neural tube defect prevention"
  }
]

export default function PrescriptionsPage() {
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "completed":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4" />
      case "pending":
        return <AlertCircle className="w-4 h-4" />
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const statsCards = [
    { label: "Total Prescriptions", value: prescriptions.length, color: "from-blue-500 to-cyan-500" },
    { label: "Active", value: prescriptions.filter(p => p.status === "active").length, color: "from-green-500 to-emerald-500" },
    { label: "Pending", value: prescriptions.filter(p => p.status === "pending").length, color: "from-yellow-500 to-orange-500" },
    { label: "Completed", value: prescriptions.filter(p => p.status === "completed").length, color: "from-purple-500 to-pink-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 py-6 px-4 sm:px-6">
      <div className="">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsCards.map((stat, index) => (
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
              placeholder="Search by patient name, medication..."
              className="w-full bg-secondary/30 rounded-lg pl-10 pr-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-foreground"
            />
          </div>
          <select className="bg-secondary/30 rounded-lg px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-foreground md:w-40">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <Button variant="outline" className="rounded-lg">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </motion.div>

        {/* Prescriptions Table */}
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
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Rx ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Patient</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Medication</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Dosage</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Frequency</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Due Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((prescription, index) => (
                  <tr
                    key={prescription.id}
                    className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${
                      index % 2 === 0 ? "bg-secondary/5" : ""
                    }`}
                  >
                    <td className="py-4 px-6">
                      <span className="font-mono text-sm font-semibold text-foreground">{prescription.id}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {prescription.patientName.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="text-sm font-medium text-foreground">{prescription.patientName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-foreground font-medium">{prescription.medication}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-muted-foreground">{prescription.dosage}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-muted-foreground">{prescription.frequency}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {prescription.dueDate}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={getStatusBadgeColor(prescription.status)}>
                        {getStatusIcon(prescription.status)}
                        <span className="ml-2 capitalize">{prescription.status}</span>
                      </Badge>
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
