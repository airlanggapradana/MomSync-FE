"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Users,
  Plus,
  Edit2,
  Trash2,
  Search,
  Clock,
  Phone,
  Mail,
  Filter,
  Download,
  Copy,
  Check,
  Calendar
} from "lucide-react"
import { useState } from "react"

const staffData = [
  {
    id: 1,
    name: "Dr. James Wilson",
    position: "Senior Obstetrician",
    department: "Maternity",
    phone: "+1-555-0101",
    email: "james.wilson@hospital.com",
    currentShift: "Morning (7 AM - 3 PM)",
    shiftStatus: "on-duty",
    startDate: "Jan 15, 2020",
    certification: "MD, Obstetrics"
  },
  {
    id: 2,
    name: "Nurse Sarah Chen",
    position: "Head Nurse - Maternity",
    department: "Maternity",
    phone: "+1-555-0102",
    email: "sarah.chen@hospital.com",
    currentShift: "Afternoon (3 PM - 11 PM)",
    shiftStatus: "on-duty",
    startDate: "Mar 22, 2019",
    certification: "RN, BSN"
  },
  {
    id: 3,
    name: "Dr. Emma Rodriguez",
    position: "Pediatrician",
    department: "Pediatrics",
    phone: "+1-555-0103",
    email: "emma.rodriguez@hospital.com",
    currentShift: "Night (11 PM - 7 AM)",
    shiftStatus: "off-duty",
    startDate: "Jun 10, 2021",
    certification: "MD, Pediatrics"
  },
  {
    id: 4,
    name: "Technician Mark Johnson",
    position: "Ultrasound Specialist",
    department: "Imaging",
    phone: "+1-555-0104",
    email: "mark.johnson@hospital.com",
    currentShift: "Morning (7 AM - 3 PM)",
    shiftStatus: "on-duty",
    startDate: "Aug 05, 2020",
    certification: "RDMS"
  },
  {
    id: 5,
    name: "Nurse Lisa Anderson",
    position: "ICU Nurse",
    department: "ICU",
    phone: "+1-555-0105",
    email: "lisa.anderson@hospital.com",
    currentShift: "Afternoon (3 PM - 11 PM)",
    shiftStatus: "on-duty",
    startDate: "Feb 18, 2018",
    certification: "RN, CCU"
  }
]

const shifts = [
  { id: 1, name: "Morning", time: "7 AM - 3 PM" },
  { id: 2, name: "Afternoon", time: "3 PM - 11 PM" },
  { id: 3, name: "Night", time: "11 PM - 7 AM" }
]

const departments = ["All", "Maternity", "Pediatrics", "ICU", "Imaging", "General"]

const staffStats = [
  { label: "Total Staff", value: 34, color: "from-blue-500 to-cyan-500" },
  { label: "On Duty", value: 18, color: "from-green-500 to-emerald-500" },
  { label: "Off Duty", value: 12, color: "from-gray-500 to-slate-500" },
  { label: "On Leave", value: 4, color: "from-yellow-500 to-orange-500" }
]

export default function StaffSchedulingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const filteredStaff = staffData.filter(staff => {
    const matchesSearch = 
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDept = selectedDepartment === "All" || staff.department === selectedDepartment
    return matchesSearch && matchesDept
  })

  const handleCopyEmail = (email: string, id: number) => {
    navigator.clipboard.writeText(email)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {staffStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <Users className="w-6 h-6 text-white" />
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
          <h2 className="text-xl font-bold text-foreground">Staff Directory</h2>
          <Button className="rounded-lg">
            <Plus className="w-4 h-4 mr-2" />
            Add Staff Member
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or position..."
              className="pl-10 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? "default" : "outline"}
                size="sm"
                className="rounded-lg"
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
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

      {/* Staff Table */}
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
              <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Position</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Department</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Current Shift</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Contact</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((staff) => (
              <tr key={staff.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="py-3 px-4">
                  <p className="font-semibold text-foreground">{staff.name}</p>
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm text-muted-foreground">{staff.position}</p>
                </td>
                <td className="py-3 px-4">
                  <Badge className="bg-blue-100 text-blue-700">{staff.department}</Badge>
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {staff.currentShift}
                  </p>
                </td>
                <td className="py-3 px-4">
                  <Badge className={staff.shiftStatus === "on-duty" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}>
                    {staff.shiftStatus === "on-duty" ? "On Duty" : "Off Duty"}
                  </Badge>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <a href={`tel:${staff.phone}`} className="text-sm text-[#1f4b4a] hover:underline flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => handleCopyEmail(staff.email, staff.id)}
                      className="text-sm text-[#1f4b4a] hover:text-[#2d6a68] transition-colors"
                    >
                      {copiedId === staff.id ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
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

      {/* Shift Templates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Shift Templates</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shifts.map((shift) => (
            <Card key={shift.id} className="p-4 bg-gradient-to-br from-white to-secondary/20 border-border">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-foreground">{shift.name} Shift</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4" />
                    {shift.time}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                  View Schedule
                </Button>
                <Button size="sm" className="flex-1 rounded-lg">
                  Assign Staff
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
