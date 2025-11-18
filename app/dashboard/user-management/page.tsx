"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Users,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  ToggleRight,
  ToggleLeft,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react"

const users = [
  { id: 1, name: "Sarah Johnson", email: "sarah.johnson@example.com", role: "Mother", status: "active", joinDate: "2024-08-15", lastActive: "2 hours ago", verified: true },
  { id: 2, name: "Dr. Michael Chen", email: "doctor@momsync.com", role: "Doctor", status: "active", joinDate: "2024-07-20", lastActive: "30 mins ago", verified: true },
  { id: 3, name: "Emily Davis", email: "midwife@momsync.com", role: "Midwife", status: "active", joinDate: "2024-06-10", lastActive: "5 hours ago", verified: true },
  { id: 4, name: "James Wilson", email: "partner@momsync.com", role: "Partner", status: "inactive", joinDate: "2024-05-01", lastActive: "3 days ago", verified: true },
  { id: 5, name: "Lisa Anderson", email: "nutritionist@momsync.com", role: "Nutritionist", status: "active", joinDate: "2024-04-15", lastActive: "1 hour ago", verified: false },
  { id: 6, name: "David Martinez", email: "merchant@momsync.com", role: "Merchant", status: "active", joinDate: "2024-03-20", lastActive: "12 hours ago", verified: true },
]

export default function UserManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                <p className="text-3xl font-bold text-foreground">8,243</p>
                <p className="text-xs text-green-600 mt-2">↑ 12.5% this month</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Users</p>
                <p className="text-3xl font-bold text-foreground">5,420</p>
                <p className="text-xs text-green-600 mt-2">65.8% engagement</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Unverified</p>
                <p className="text-3xl font-bold text-foreground">127</p>
                <p className="text-xs text-orange-600 mt-2">1.5% of total</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, or role..."
              className="pl-10 rounded-lg border-border"
            />
          </div>
          <Button variant="outline" className="rounded-lg whitespace-nowrap">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" className="rounded-lg whitespace-nowrap">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">User</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Role</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Verified</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Joined</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Last Active</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-semibold text-foreground">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className="bg-blue-100 text-blue-700">{user.role}</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${user.status === "active" ? "bg-green-500" : "bg-gray-400"}`} />
                      <span className="text-sm text-foreground capitalize">{user.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {user.verified ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-orange-600" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{user.joinDate}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {user.lastActive}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded hover:bg-secondary/50 transition-colors">
                        <Edit className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </button>
                      <button className="p-2 rounded hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Bulk Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Bulk Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-lg">
            <ToggleRight className="w-4 h-4 mr-2" />
            Activate Selected
          </Button>
          <Button variant="outline" className="rounded-lg">
            <ToggleLeft className="w-4 h-4 mr-2" />
            Deactivate Selected
          </Button>
          <Button variant="outline" className="rounded-lg">
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button variant="outline" className="rounded-lg text-red-600 hover:text-red-700">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Selected
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
