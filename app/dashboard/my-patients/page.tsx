"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { 
  Search,
  Plus,
  Filter,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  MessageCircle,
  MoreVertical,
  ChevronRight,
  Clock
} from "lucide-react"

const allPatients = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Main St, City, State",
    condition: "Prenatal Checkup",
    status: "stable",
    lastVisit: "2 days ago",
    nextAppointment: "Nov 25, 2025",
    registeredDate: "Jan 2024"
  },
  {
    id: 2,
    name: "Emily Davis",
    age: 25,
    phone: "+1 (555) 234-5678",
    email: "emily.davis@email.com",
    address: "456 Oak Ave, City, State",
    condition: "Gestational Diabetes",
    status: "monitoring",
    lastVisit: "5 days ago",
    nextAppointment: "Nov 22, 2025",
    registeredDate: "Feb 2024"
  },
  {
    id: 3,
    name: "Jessica Martinez",
    age: 31,
    phone: "+1 (555) 345-6789",
    email: "jessica.m@email.com",
    address: "789 Pine Rd, City, State",
    condition: "High Blood Pressure",
    status: "alert",
    lastVisit: "1 week ago",
    nextAppointment: "Nov 20, 2025",
    registeredDate: "Mar 2024"
  },
  {
    id: 4,
    name: "Amanda Wilson",
    age: 26,
    phone: "+1 (555) 456-7890",
    email: "amanda.w@email.com",
    address: "321 Elm St, City, State",
    condition: "Routine Checkup",
    status: "stable",
    lastVisit: "3 days ago",
    nextAppointment: "Dec 1, 2025",
    registeredDate: "Apr 2024"
  },
  {
    id: 5,
    name: "Michelle Brown",
    age: 29,
    phone: "+1 (555) 567-8901",
    email: "michelle.b@email.com",
    address: "654 Maple Dr, City, State",
    condition: "Pregnancy Loss Support",
    status: "monitoring",
    lastVisit: "4 days ago",
    nextAppointment: "Nov 23, 2025",
    registeredDate: "May 2024"
  }
]

export default function MyPatientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

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

  const filteredPatients = allPatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || patient.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 py-6 px-4 sm:px-6">
      <div className="">
        

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or condition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-secondary/30 rounded-lg pl-10 pr-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-foreground"
              />
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-secondary/30 rounded-lg px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-foreground"
              >
                <option value="all">All Status</option>
                <option value="stable">Stable</option>
                <option value="monitoring">Monitoring</option>
                <option value="alert">Alert</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between bg-secondary/30 rounded-lg px-4 py-3 border border-border">
              <span className="text-sm text-muted-foreground">{filteredPatients.length} patients</span>
              <Filter className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </motion.div>

        {/* Patients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPatients.map((patient, index) => (
            <motion.div
              key={patient.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {patient.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{patient.name}</h3>
                    <p className="text-xs text-muted-foreground">{patient.age} years old</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="mb-4">
                <Badge className={getStatusBadgeColor(patient.status)}>
                  {patient.status}
                </Badge>
              </div>

              {/* Condition */}
              <div className="mb-4 p-3 bg-secondary/30 rounded-lg border border-border/50">
                <p className="text-xs text-muted-foreground font-medium mb-1">Primary Condition</p>
                <p className="text-sm font-semibold text-foreground">{patient.condition}</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">{patient.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">{patient.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground text-xs">{patient.address}</span>
                </div>
              </div>

              {/* Visit Info */}
              <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-secondary/20 rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Last Visit</p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {patient.lastVisit}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Next Appointment</p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {patient.nextAppointment}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm" className="rounded-lg">
                  <FileText className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-lg">
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button size="sm" className="rounded-lg col-span-1">
                  View <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPatients.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">No patients found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
