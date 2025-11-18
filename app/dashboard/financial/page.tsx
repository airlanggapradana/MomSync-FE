"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Filter,
  Download,
  Eye,
  Calendar,
  Clock
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const financialStats = [
  { label: "Total Revenue", value: "$128,450", icon: DollarSign, color: "from-green-500 to-emerald-500", change: "+12% vs last month", trend: "up" },
  { label: "Operating Costs", value: "$45,230", icon: TrendingDown, color: "from-red-500 to-orange-500", change: "-8% vs last month", trend: "down" },
  { label: "Net Profit", value: "$83,220", icon: TrendingUp, color: "from-blue-500 to-cyan-500", change: "+18% vs last month", trend: "up" },
  { label: "Pending Invoices", value: "$12,340", icon: Clock, color: "from-yellow-500 to-amber-500", change: "3 days average", trend: "neutral" }
]

const revenueData = [
  { month: "Jan", revenue: 45200, target: 50000, expenses: 22100 },
  { month: "Feb", revenue: 52100, target: 50000, expenses: 24300 },
  { month: "Mar", revenue: 48900, target: 50000, expenses: 23200 },
  { month: "Apr", revenue: 61200, target: 50000, expenses: 25400 },
  { month: "May", revenue: 58700, target: 50000, expenses: 24800 },
  { month: "Jun", revenue: 72300, target: 50000, expenses: 28200 },
  { month: "Jul", revenue: 89400, target: 50000, expenses: 31500 }
]

const serviceRevenue = [
  { name: "Prenatal Care", value: 32 },
  { name: "Delivery Services", value: 28 },
  { name: "Consultations", value: 18 },
  { name: "Lab Services", value: 12 },
  { name: "Other", value: 10 }
]

const expenseBreakdown = [
  { label: "Staff Salaries", amount: "$28,450", percentage: 62.8, color: "#1f4b4a" },
  { label: "Medical Supplies", amount: "$8,230", percentage: 18.2, color: "#2d6a68" },
  { label: "Utilities", amount: "$5,100", percentage: 11.3, color: "#4a9fa0" },
  { label: "Maintenance", amount: "$3,450", percentage: 7.6, color: "#a3d8d6" }
]

const paymentMethods = [
  { method: "Insurance", amount: 65340, percentage: 50.8 },
  { method: "Direct Payment", amount: 42230, percentage: 32.9 },
  { method: "Government", amount: 20880, percentage: 16.2 }
]

export default function FinancialPage() {
  const colors = ["#1f4b4a", "#2d6a68", "#4a9fa0", "#7cb8b6", "#a3d8d6"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {financialStats.map((stat, index) => {
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
                  <Badge className={stat.trend === "up" ? "bg-green-100 text-green-700" : stat.trend === "down" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"}>
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
        {/* Revenue Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Revenue Trend</h2>
              <p className="text-sm text-muted-foreground">7-month performance analysis</p>
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
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px"
                }} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#1f4b4a" strokeWidth={3} dot={{ fill: "#1f4b4a", r: 5 }} name="Revenue" />
                <Line type="monotone" dataKey="target" stroke="#d1d5db" strokeWidth={2} strokeDasharray="5 5" name="Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Service Revenue Pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-6">Service Revenue Mix</h2>

          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceRevenue}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceRevenue.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Expense Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Expense Breakdown</h2>

        <div className="space-y-4">
          {expenseBreakdown.map((expense, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-medium text-foreground">{expense.label}</p>
                <div className="text-right">
                  <p className="font-bold text-foreground">{expense.amount}</p>
                  <p className="text-xs text-muted-foreground">{expense.percentage}%</p>
                </div>
              </div>
              <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                <div
                  className="h-full transition-all"
                  style={{ width: `${expense.percentage}%`, backgroundColor: expense.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Revenue by Payment Method */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Revenue by Payment Method</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">{method.method}</p>
                <p className="text-2xl font-bold text-foreground">${(method.amount / 1000).toFixed(1)}K</p>
              </div>

              <div className="bg-secondary rounded-full h-2 overflow-hidden">
                <div
                  className="bg-linear-to-r from-[#1f4b4a] to-[#2d6a68] h-full transition-all"
                  style={{ width: `${method.percentage}%` }}
                />
              </div>

              <p className="text-xs text-muted-foreground mt-2">{method.percentage}% of total</p>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Monthly Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Revenue vs Expenses Comparison</h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #e5e7eb",
                borderRadius: "8px"
              }} />
              <Legend />
              <Bar dataKey="revenue" fill="#1f4b4a" name="Revenue" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  )
}
