"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { 
  User, 
  Activity, 
  BookOpen, 
  Calendar, 
  FileText, 
  GraduationCap, 
  Shield,
  Menu,
  X,
  Home,
  Heart,
  ChevronRight,
  Settings,
  LogOut
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: Home,
      description: "Overview & Quick Access"
    },
    {
      title: "Mother Profile",
      href: "/profil",
      icon: User,
      description: "Manage profile information"
    },
    {
      title: "Health Monitoring",
      href: "/monitoring",
      icon: Activity,
      description: "Track vital signs & health"
    },
    {
      title: "Pregnancy Journal",
      href: "/jurnal",
      icon: BookOpen,
      description: "Daily mood & nutrition log"
    },
    {
      title: "Appointments",
      href: "/janji-temu",
      icon: Calendar,
      description: "Schedule & manage visits"
    },
    {
      title: "Lab Results",
      href: "/hasil-lab",
      icon: FileText,
      description: "View test results"
    },
    {
      title: "Education Hub",
      href: "/edukasi",
      icon: GraduationCap,  
      description: "Articles & learning resources"
    },
    {
      title: "Prevent Stunting",
      href: "/stunting",
      icon: Shield,
      description: "Prevention guidelines"
    }
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const SidebarContent = () => (
    <>
      {/* Sidebar Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <div>
            <h1 className=" text-xl font-semibold text-foreground">MomSync</h1>
            <p className="text-sm text-muted-foreground">Maternal Health Dashboard</p>
          </div>
        </div>

        {/* User Info */}
        <Card className="p-4 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Sarah Johnson</h3>
              <p className="text-xs text-muted-foreground">28 weeks pregnant</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Navigation */}
      <nav className="p-6">
        <div className="space-y-2">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                isActive(item.href)
                  ? "bg-linear-to-r from-[#1f4b4a] to-[#2d6a68] text-white shadow-lg"
                  : "hover:bg-secondary/50 text-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${
                  isActive(item.href) ? "text-white" : "text-muted-foreground group-hover:text-[#1f4b4a]"
                }`} />
                <div>
                  <div className={`font-medium text-sm ${
                    isActive(item.href) ? "text-white" : "text-foreground"
                  }`}>
                    {item.title}
                  </div>
                  <div className={`text-xs ${
                    isActive(item.href) ? "text-white/80" : "text-muted-foreground"
                  }`}>
                    {item.description}
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 ${
                isActive(item.href) ? "text-white" : "text-muted-foreground"
              }`} />
            </Link>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 pt-6 border-t border-border space-y-2">
          <Link
            href="/dashboard/settings"
            className="group flex items-center gap-3 p-4 rounded-xl hover:bg-secondary/50 text-foreground transition-all duration-200"
          >
            <Settings className="w-5 h-5 text-muted-foreground group-hover:text-[#1f4b4a]" />
            <span className="font-medium text-sm">Settings</span>
          </Link>
          <button className="group flex items-center gap-3 p-4 rounded-xl hover:bg-red-50 text-foreground transition-all duration-200 w-full text-left">
            <LogOut className="w-5 h-5 text-muted-foreground group-hover:text-red-600" />
            <span className="font-medium text-sm group-hover:text-red-600">Sign Out</span>
          </button>
        </div>
      </nav>
    </>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className=" text-lg font-semibold text-foreground">MomSync</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block sticky top-0 left-0 w-80 h-screen bg-background border-r border-border overflow-y-auto">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed lg:hidden top-0 left-0 z-40 w-80 h-screen bg-background border-r border-border overflow-y-auto"
            >
              <SidebarContent />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Content Header */}
          <div className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-20 hidden lg:block">
            <div className="flex items-center justify-between p-6">
              <div>
                <h1 className="text-2xl font-semibold text-foreground">
                  {navigationItems.find(item => isActive(item.href))?.title || "Dashboard"}
                </h1>
                <p className="text-muted-foreground">
                  {navigationItems.find(item => isActive(item.href))?.description || "Welcome to your maternal health dashboard"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button size="sm" className="rounded-full">
                  Emergency Contact
                </Button>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}