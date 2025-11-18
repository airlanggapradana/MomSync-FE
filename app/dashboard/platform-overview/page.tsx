"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  Users,
  TrendingUp,
  Activity,
  AlertCircle,
  Filter,
  Download,
  Globe,
  Clock
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts"

const overviewStats = [
  { label: "Total Users", value: 8243, icon: Users, color: "from-blue-500 to-cyan-500", change: "+12.5% this month", trend: "up" },
  { label: "Active Sessions", value: 2847, icon: Activity, color: "from-purple-500 to-pink-500", change: "+8.3% vs yesterday", trend: "up" },
  { label: "System Health", value: "99.8%", icon: TrendingUp, color: "from-green-500 to-emerald-500", change: "All systems operational", trend: "stable" },
  { label: "Pending Issues", value: 12, icon: AlertCircle, color: "from-orange-500 to-red-500", change: "3 critical", trend: "down" }
]

const userGrowthData = [
  { month: "Jan", users: 1200, active: 890, new: 120 },
  { month: "Feb", users: 1450, active: 1050, new: 250 },
  { month: "Mar", users: 1890, active: 1380, new: 440 },
  { month: "Apr", users: 2450, active: 1820, new: 560 },
  { month: "May", users: 3200, active: 2450, new: 750 },
  { month: "Jun", users: 4150, active: 3200, new: 950 },
  { month: "Jul", users: 5340, active: 4120, new: 1190 },
  { month: "Aug", users: 6780, active: 5340, new: 1440 },
]

const roleDistribution = [
  { name: "Mothers", value: 4210 },
  { name: "Doctors", value: 1850 },
  { name: "Midwives", value: 980 },
  { name: "Nutritionists", value: 650 },
  { name: "Partners", value: 320 },
  { name: "Admins", value: 233 }
]

const platformMetrics = [
  { metric: "Server Response Time", value: "145ms", status: "optimal" },
  { metric: "Database Performance", value: "98.5%", status: "optimal" },
  { metric: "API Uptime", value: "99.95%", status: "optimal" },
  { metric: "Storage Usage", value: "62%", status: "warning" }
]

const recentActivity = [
  { type: "User Signup", count: 245, time: "Last 24 hours", icon: "📝" },
  { type: "Content Published", count: 38, time: "Last 24 hours", icon: "📄" },
  { type: "Support Tickets", count: 67, time: "Open", icon: "🎫" },
  { type: "System Alerts", count: 3, time: "Last 7 days", icon: "⚠️" }
]

const colors = ["#1f4b4a", "#2d6a68", "#4a9fa0", "#7cb8b6", "#a8ceca", "#c8dede"]

export default function PlatformOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, index) => {
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
                  <Badge className={stat.trend === "up" ? "bg-green-100 text-green-700" : stat.trend === "stable" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}>
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">User Growth</h2>
              <p className="text-sm text-muted-foreground">8-month platform growth analysis</p>
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
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1f4b4a" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1f4b4a" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="users" stroke="#1f4b4a" fill="url(#colorUsers)" name="Total Users" />
                <Area type="monotone" dataKey="active" stroke="#2d6a68" fill="url(#colorActive)" name="Active Users" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Role Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-6">User Roles</h2>

          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roleDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {roleDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* System Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">System Performance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformMetrics.map((metric, index) => (
            <Card key={index} className="p-4 bg-gradient-to-br from-white to-secondary/20 border-border">
              <p className="text-sm text-muted-foreground mb-2">{metric.metric}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <div className={`w-3 h-3 rounded-full ${metric.status === "optimal" ? "bg-green-500" : "bg-yellow-500"}`} />
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Recent Activity</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentActivity.map((activity, index) => (
            <Card key={index} className="p-4 bg-gradient-to-br from-white to-secondary/20 border-border hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{activity.type}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
                <span className="text-2xl">{activity.icon}</span>
              </div>
              <p className="text-3xl font-bold text-foreground mt-4">{activity.count}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
