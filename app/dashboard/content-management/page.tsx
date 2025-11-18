"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  FileText,
  Plus,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  Eye,
  Globe,
  Clock,
  User,
  TrendingUp
} from "lucide-react"

const contentItems = [
  { id: 1, title: "Prenatal Care Guide", type: "Article", status: "published", author: "Dr. Smith", views: 2450, likes: 312, publishDate: "2024-11-15", category: "Education" },
  { id: 2, title: "Healthy Pregnancy Diet", type: "Blog Post", status: "published", author: "Nutritionist Jane", views: 1890, likes: 245, publishDate: "2024-11-10", category: "Nutrition" },
  { id: 3, title: "Labor & Delivery Video", type: "Video", status: "published", author: "Medical Team", views: 5420, likes: 680, publishDate: "2024-11-05", category: "Education" },
  { id: 4, title: "Mental Health During Pregnancy", type: "Article", status: "draft", author: "Dr. Johnson", views: 0, likes: 0, publishDate: "Draft", category: "Wellness" },
  { id: 5, title: "Postpartum Recovery Tips", type: "Blog Post", status: "published", author: "Wellness Coach", views: 1234, likes: 156, publishDate: "2024-10-28", category: "Recovery" },
  { id: 6, title: "Breastfeeding Techniques", type: "Article", status: "archived", author: "Lactation Expert", views: 890, likes: 112, publishDate: "2024-09-15", category: "Parenting" },
]

export default function ContentManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Content</p>
                <p className="text-3xl font-bold text-foreground">1,247</p>
                <p className="text-xs text-green-600 mt-2">↑ 8.2% this month</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
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
                <p className="text-sm text-muted-foreground mb-1">Published</p>
                <p className="text-3xl font-bold text-foreground">1,089</p>
                <p className="text-xs text-green-600 mt-2">87.3% of total</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
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
                <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                <p className="text-3xl font-bold text-foreground">847K</p>
                <p className="text-xs text-green-600 mt-2">↑ 23.5% vs last week</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white to-secondary/20 border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Engagement</p>
                <p className="text-3xl font-bold text-foreground">94.2K</p>
                <p className="text-xs text-orange-600 mt-2">Likes & Comments</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Content Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Content Library</h2>
            <p className="text-sm text-muted-foreground">Manage all published and draft content</p>
          </div>
          <Button className="rounded-lg whitespace-nowrap">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search content by title or author..."
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

        {/* Content Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Title & Type</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Author</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Views</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Engagement</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contentItems.map((item) => (
                <tr key={item.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className="bg-blue-100 text-blue-700">{item.category}</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center text-white text-xs font-bold">
                        {item.author.charAt(0)}
                      </div>
                      <span className="text-sm text-foreground">{item.author}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className={
                      item.status === "published" ? "bg-green-100 text-green-700" :
                      item.status === "draft" ? "bg-yellow-100 text-yellow-700" :
                      "bg-gray-100 text-gray-700"
                    }>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{item.views.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-red-600">❤️ {item.likes}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{item.publishDate}</td>
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
    </div>
  )
}
