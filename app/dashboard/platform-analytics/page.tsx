"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  BarChart3,
  TrendingUp,
  Users,
  Activity,
  Filter,
  Download,
  Calendar
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts"

const analyticsStats = [
  { label: "Page Views", value: "847K", icon: Activity, color: "from-blue-500 to-cyan-500", change: "+23.5% vs last week" },
  { label: "Unique Users", value: "124K", icon: Users, color: "from-purple-500 to-pink-500", change: "+18.2% growth" },
  { label: "Avg. Session Duration", value: "4m 32s", icon: Calendar, color: "from-green-500 to-emerald-500", change: "+45s vs last month" },
  { label: "Conversion Rate", value: "3.24%", icon: TrendingUp, color: "from-orange-500 to-red-500", change: "+0.8% improvement" }
]

const trafficData = [
  { week: "Week 1", visits: 4000, users: 2400, conversions: 240 },
  { week: "Week 2", visits: 5200, users: 2890, conversions: 389 },
  { week: "Week 3", visits: 4800, users: 2600, conversions: 340 },
  { week: "Week 4", visits: 6100, users: 3400, conversions: 480 },
  { week: "Week 5", visits: 5900, users: 3200, conversions: 420 },
  { week: "Week 6", visits: 7200, users: 4100, conversions: 590 },
  { week: "Week 7", visits: 6800, users: 3900, conversions: 520 },
  { week: "Week 8", visits: 8100, users: 4700, conversions: 680 },
]

const deviceBreakdown = [
  { name: "Mobile", value: 45 },
  { name: "Desktop", value: 38 },
  { name: "Tablet", value: 17 }
]

const pagePerformance = [
  { page: "Home", views: 12450, avgTime: "2m 14s", bounce: "34.2%" },
  { page: "Education Hub", views: 8920, avgTime: "3m 45s", bounce: "28.5%" },
  { page: "Health Monitoring", views: 7340, avgTime: "4m 12s", bounce: "22.1%" },
  { page: "Community", views: 6780, avgTime: "5m 33s", bounce: "19.8%" },
  { page: "Appointments", views: 5620, avgTime: "2m 8s", bounce: "41.3%" },
]

const topReferrers = [
  { source: "Google Search", traffic: 34250, percentage: "40.4%" },
  { source: "Direct", traffic: 18920, percentage: "22.3%" },
  { source: "Facebook", traffic: 15670, percentage: "18.5%" },
  { source: "Instagram", traffic: 11230, percentage: "13.2%" },
  { source: "Twitter", traffic: 4890, percentage: "5.6%" },
]

const colors = ["#1f4b4a", "#2d6a68", "#4a9fa0"]

export default function PlatformAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsStats.map((stat, index) => {
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
                  <Badge className="bg-green-100 text-green-700">{stat.change}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Traffic Trends</h2>
              <p className="text-sm text-muted-foreground">8-week visitor analytics</p>
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
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1f4b4a" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1f4b4a" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2d6a68" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2d6a68" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="week" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px"
                }} />
                <Legend />
                <Area type="monotone" dataKey="visits" stroke="#1f4b4a" fill="url(#colorVisits)" name="Visits" />
                <Area type="monotone" dataKey="users" stroke="#2d6a68" fill="url(#colorUsers)" name="Users" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Device Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-6">Device Breakdown</h2>

          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {deviceBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Page Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border overflow-x-auto"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Top Pages</h2>

        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground">Page</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Views</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Avg. Time</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {pagePerformance.map((page, index) => (
              <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground">{page.page}</td>
                <td className="py-3 px-4 text-foreground">{page.views.toLocaleString()}</td>
                <td className="py-3 px-4 text-muted-foreground">{page.avgTime}</td>
                <td className="py-3 px-4">
                  <Badge className={page.bounce > "40%" ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"}>
                    {page.bounce}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Top Referrers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Top Traffic Sources</h2>

        <div className="space-y-3">
          {topReferrers.map((referrer, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground mb-1">{referrer.source}</p>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-linear-to-r from-[#1f4b4a] to-[#2d6a68] h-full transition-all"
                    style={{ width: referrer.percentage }}
                  />
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-semibold text-foreground">{referrer.traffic.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{referrer.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
