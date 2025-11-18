"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Users,
  MessageCircle,
  TrendingUp,
  Flag,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  Heart,
  Reply,
  Clock,
  Award
} from "lucide-react"

const communityStats = [
  { label: "Total Members", value: 15420, icon: Users, color: "from-blue-500 to-cyan-500", change: "+8.3% this month" },
  { label: "Active Posts", value: 3847, icon: MessageCircle, color: "from-purple-500 to-pink-500", change: "+156 today" },
  { label: "Engagement Rate", value: "34.2%", icon: TrendingUp, color: "from-green-500 to-emerald-500", change: "+5.1% vs last week" },
  { label: "Reported Posts", value: 42, icon: Flag, color: "from-orange-500 to-red-500", change: "12 pending review" }
]

const discussions = [
  { id: 1, title: "Tips for Managing Morning Sickness", author: "Sarah M.", category: "Pregnancy", replies: 45, likes: 234, views: 1203, date: "2 hours ago", status: "active", verified: true },
  { id: 2, title: "Postpartum Recovery Experiences", author: "Emily R.", category: "Recovery", replies: 78, likes: 456, views: 2341, date: "5 hours ago", status: "active", verified: true },
  { id: 3, title: "Best Hospital Experiences", author: "Jessica L.", category: "Healthcare", replies: 23, likes: 145, views: 892, date: "1 day ago", status: "active", verified: false },
  { id: 4, title: "Nutrition During Pregnancy", author: "Anna W.", category: "Nutrition", replies: 56, likes: 389, views: 1567, date: "2 days ago", status: "active", verified: true },
  { id: 5, title: "Mental Health Support", author: "David T.", category: "Wellness", replies: 34, likes: 267, views: 945, date: "3 days ago", status: "flagged", verified: true },
]

const topContributors = [
  { id: 1, name: "Dr. Sarah Johnson", posts: 234, followers: 1245, badge: "Expert", verified: true },
  { id: 2, name: "Midwife Emma", posts: 189, followers: 892, badge: "Contributor", verified: true },
  { id: 3, name: "Nutrition Coach Lisa", posts: 167, followers: 756, badge: "Specialist", verified: true },
  { id: 4, name: "Community Manager", posts: 145, followers: 234, badge: "Staff", verified: true },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {communityStats.map((stat, index) => {
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

      {/* Community Discussions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Community Discussions</h2>
            <p className="text-sm text-muted-foreground">Moderate and manage community posts</p>
          </div>
          <Button className="rounded-lg whitespace-nowrap">
            <MessageCircle className="w-4 h-4 mr-2" />
            Start Discussion
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search discussions..."
              className="pl-10 rounded-lg border-border"
            />
          </div>
          <Button variant="outline" className="rounded-lg whitespace-nowrap">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="rounded-lg whitespace-nowrap">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Discussions List */}
        <div className="space-y-3">
          {discussions.map((discussion) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`p-4 rounded-xl border transition-all hover:shadow-md ${
                discussion.status === "flagged"
                  ? "bg-red-50 border-red-200"
                  : "bg-background border-border hover:bg-secondary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-foreground">{discussion.title}</h3>
                    {discussion.status === "flagged" && (
                      <Badge className="bg-red-100 text-red-700 text-xs">Flagged</Badge>
                    )}
                    {discussion.verified && (
                      <Award className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    by <span className="font-medium">{discussion.author}</span> • {discussion.category}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4 shrink-0">
                  <button className="p-2 rounded hover:bg-secondary/50 transition-colors">
                    <Edit className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                  </button>
                  <button className="p-2 rounded hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <Reply className="w-4 h-4" />
                  {discussion.replies} replies
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-red-500" />
                  {discussion.likes} likes
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {discussion.views.toLocaleString()} views
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <Clock className="w-4 h-4" />
                  {discussion.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Top Contributors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Top Contributors</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Contributor</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Posts</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Followers</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Badge</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {topContributors.map((contributor) => (
                <tr key={contributor.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center text-white text-xs font-bold">
                        {contributor.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{contributor.name}</p>
                        {contributor.verified && <p className="text-xs text-green-600">✓ Verified</p>}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-semibold text-foreground">{contributor.posts}</td>
                  <td className="py-3 px-4 text-foreground">{contributor.followers.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <Badge className="bg-blue-100 text-blue-700">{contributor.badge}</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button size="sm" variant="outline" className="rounded-lg text-xs">
                      Manage
                    </Button>
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
