"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Bed, 
  Plus,
  Edit2,
  Trash2,
  Search,
  Filter,
  Download,
  Clock,
  User,
  Phone,
  AlertCircle
} from "lucide-react"
import { useState } from "react"

const bedData = [
  {
    id: "M001",
    ward: "Maternity Ward",
    bedNumber: "M-001",
    status: "occupied",
    patient: "Sarah Johnson",
    admissionDate: "Nov 15, 2025",
    expectedDischarge: "Nov 20, 2025",
    contactNumber: "+1-555-0201",
    notes: "Post-operative monitoring"
  },
  {
    id: "M002",
    ward: "Maternity Ward",
    bedNumber: "M-002",
    status: "vacant",
    patient: null,
    admissionDate: null,
    expectedDischarge: null,
    contactNumber: null,
    notes: "Cleaned and ready"
  },
  {
    id: "M003",
    ward: "Maternity Ward",
    bedNumber: "M-003",
    status: "occupied",
    patient: "Emily Davis",
    admissionDate: "Nov 18, 2025",
    expectedDischarge: "Nov 22, 2025",
    contactNumber: "+1-555-0202",
    notes: "Active labor"
  },
  {
    id: "I001",
    ward: "ICU",
    bedNumber: "ICU-001",
    status: "occupied",
    patient: "Jessica Martinez",
    admissionDate: "Nov 14, 2025",
    expectedDischarge: "Nov 21, 2025",
    contactNumber: "+1-555-0203",
    notes: "Critical - Continuous monitoring"
  },
  {
    id: "I002",
    ward: "ICU",
    bedNumber: "ICU-002",
    status: "maintenance",
    patient: null,
    admissionDate: null,
    expectedDischarge: null,
    contactNumber: null,
    notes: "Equipment upgrade in progress"
  },
  {
    id: "P001",
    ward: "Pediatrics",
    bedNumber: "P-001",
    status: "occupied",
    patient: "Baby Thompson",
    admissionDate: "Nov 17, 2025",
    expectedDischarge: "Nov 19, 2025",
    contactNumber: "+1-555-0204",
    notes: "Jaundice treatment"
  }
]

const bedStats = [
  { label: "Total Beds", value: 44, color: "from-blue-500 to-cyan-500" },
  { label: "Occupied", value: 28, color: "from-orange-500 to-red-500" },
  { label: "Vacant", value: 14, color: "from-green-500 to-emerald-500" },
  { label: "Maintenance", value: 2, color: "from-gray-500 to-slate-500" }
]

export default function BedManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedWard, setSelectedWard] = useState("All")

  const wards = ["All", "Maternity Ward", "ICU", "Pediatrics", "General Ward"]

  const filteredBeds = bedData.filter(bed => {
    const matchesSearch = 
      bed.bedNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (bed.patient && bed.patient.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesWard = selectedWard === "All" || bed.ward === selectedWard
    return matchesSearch && matchesWard
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "occupied":
        return "bg-orange-100 text-orange-700"
      case "vacant":
        return "bg-green-100 text-green-700"
      case "maintenance":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bedStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <Bed className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters and Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Bed Inventory</h2>
          <Button className="rounded-lg">
            <Plus className="w-4 h-4 mr-2" />
            Add Bed
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by bed number or patient..."
              className="pl-10 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {wards.map((ward) => (
              <Button
                key={ward}
                variant={selectedWard === ward ? "default" : "outline"}
                size="sm"
                className="rounded-lg"
                onClick={() => setSelectedWard(ward)}
              >
                {ward}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-lg flex-1">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg flex-1">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Beds Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground">Bed ID</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Ward</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Patient</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Admission Date</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Expected Discharge</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Contact</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBeds.map((bed) => (
              <tr key={bed.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="py-3 px-4">
                  <p className="font-semibold text-foreground">{bed.bedNumber}</p>
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm text-muted-foreground">{bed.ward}</p>
                </td>
                <td className="py-3 px-4">
                  <Badge className={getStatusColor(bed.status)}>
                    {bed.status.charAt(0).toUpperCase() + bed.status.slice(1)}
                  </Badge>
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm font-medium text-foreground">{bed.patient || "-"}</p>
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm text-muted-foreground">{bed.admissionDate || "-"}</p>
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm text-muted-foreground">{bed.expectedDischarge || "-"}</p>
                </td>
                <td className="py-3 px-4">
                  {bed.contactNumber && (
                    <a href={`tel:${bed.contactNumber}`} className="text-sm text-[#1f4b4a] hover:underline">
                      {bed.contactNumber}
                    </a>
                  )}
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
      </motion.div>
    </div>
  )
}
