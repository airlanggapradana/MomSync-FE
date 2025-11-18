"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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
  LogOut,
  AlertCircle,
  Loader,
  MessageCircle,
  BarChart3,
  Bed,
  DollarSign,
  Users
} from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  // Get role from localStorage on mount
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole")
    setUserRole(storedRole || user?.role || "mother")
    setMounted(true)
  }, [user?.role])

  // Redirect to login if not authenticated
  if (isLoading || !mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1f4b4a]" />
      </div>
    )
  }

  if (!user) {
    router.push("/auth/login")
    return null
  }

  const MomnavigationItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
      description: "Overview & Quick Access",
      roles: ["mother", "doctor", "midwife", "nutritionist", "partner", "hospital-admin", "merchant", "pharmacist", "platform-admin", "support"]
    },
    // Mother-specific items
    {
      title : "Lab Results",
      href: "/dashboard/lab-results",
      icon: FileText,
      description: "View & manage lab reports",
      roles: ["mother", "doctor", "midwife", "nutritionist"]
    },
    {
      title: "Mother Profile",
      href: "/dashboard/profile",
      icon: User,
      description: "Manage profile information",
      roles: ["mother", "doctor", "midwife", "nutritionist", "partner"]
    },
    {
      title: "Health Monitoring",
      href: "/dashboard/monitoring",
      icon: Activity,
      description: "Track vital signs & health",
      roles: ["mother", "doctor", "midwife"]
    },
    {
      title: "Pregnancy Journal",
      href: "/dashboard/journal",
      icon: BookOpen,
      description: "Daily mood & nutrition log",
      roles: ["mother", "nutritionist"]
    },
    {
      title: "Appointments",
      href: "/dashboard/appointments",
      icon: Calendar,
      description: "Schedule & manage visits",
      roles: ["mother", "doctor", "midwife", "hospital-admin"]
    },
    {
      title: "Education Hub",
      href: "/dashboard/education",
      icon: GraduationCap,  
      description: "Articles & learning resources",
      roles: ["mother", "doctor", "midwife", "nutritionist", "partner"]
    },
    {
      title: "Prevent Stunting",
      href: "/dashboard/prevent-stunting",
      icon: Shield,
      description: "Prevention guidelines",
      roles: ["mother", "doctor", "midwife", "nutritionist", "platform-admin"]
    },
 
  ]

  const DocNavigationItems =[
       // Provider-specific items
    {
      title: "Overview",
      href: "/dashboard/provider-overview",
      icon: Home,
      description: "Provider dashboard overview",
      roles: ["doctor", "midwife", "nutritionist"]
    },
    {
      title: "My Patients",
      href: "/dashboard/my-patients",
      icon: User,
      description: "Manage your patients",
      roles: ["doctor", "midwife", "nutritionist"]
    },
    {
      title: "Consultations",
      href: "/dashboard/consultations",
      icon: MessageCircle,
      description: "Conduct consultations",
      roles: ["doctor", "midwife", "nutritionist"]
    },
    {
      title: "Prescriptions",
      href: "/dashboard/prescriptions",
      icon: FileText,
      description: "Create prescriptions",
      roles: ["doctor", "midwife", "nutritionist"]
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
      description: "View performance metrics",
      roles: ["doctor", "midwife", "nutritionist"]
    },
    {
      title: "Stunting Screening",
      href: "/dashboard/stunting-screening",
      icon: Shield,
      description: "Child growth monitoring",
      roles: ["doctor", "midwife", "nutritionist"]
    },
  ]

  const PartnerNavigationItems = [
    {
      title: "Overview",
      href: "/dashboard/partner-overview",
      icon: Home,
      description: "Partner operations overview",
      roles: ["partner", "hospital-admin", "merchant"]
    },
    {
      title: "Bed Management",
      href: "/dashboard/bed-management",
      icon: Bed,
      description: "Manage bed inventory",
      roles: ["partner", "hospital-admin"]
    },
    {
      title: "Staff Scheduling",
      href: "/dashboard/staff-scheduling",
      icon: User,
      description: "Manage staff & shifts",
      roles: ["partner", "hospital-admin"]
    },
    {
      title: "Emergency Queue",
      href: "/dashboard/emergency-queue",
      icon: AlertCircle,
      description: "Emergency case tracking",
      roles: ["partner", "hospital-admin"]
    },
    {
      title: "Financial",
      href: "/dashboard/financial",
      icon: DollarSign,
      description: "Financial analytics",
      roles: ["partner", "hospital-admin", "merchant"]
    },
    {
      title: "Analytics",
      href: "/dashboard/partner-analytics",
      icon: BarChart3,
      description: "Performance metrics",
      roles: ["partner", "hospital-admin"]
    },
  ]

  const PlatformAdminNavigationItems = [
    {
      title: "Overview",
      href: "/dashboard/platform-overview",
      icon: Home,
      description: "Platform overview & stats",
      roles: ["platform-admin"]
    },
    {
      title: "User Management",
      href: "/dashboard/user-management",
      icon: User,
      description: "Manage all users",
      roles: ["platform-admin"]
    },
    {
      title: "Content Management",
      href: "/dashboard/content-management",
      icon: FileText,
      description: "Manage platform content",
      roles: ["platform-admin"]
    },
    {
      title: "Community",
      href: "/dashboard/community",
      icon: Users,
      description: "Moderate community",
      roles: ["platform-admin"]
    },
    {
      title: "Analytics",
      href: "/dashboard/platform-analytics",
      icon: BarChart3,
      description: "Platform analytics",
      roles: ["platform-admin"]
    },
    {
      title: "Settings",
      href: "/dashboard/platform-settings",
      icon: Settings,
      description: "Platform configuration",
      roles: ["platform-admin"]
    },
  ]

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard"
    return pathname.includes(href)
  }

  
  const handleLogout = () => {
    logout()
  }

  // Determine navigation items based on user role from localStorage
  let navItems = MomnavigationItems
  if (userRole === "platform-admin" || userRole === "platform-support" || userRole === "support") {
    navItems = PlatformAdminNavigationItems
  } else if (userRole === "partner" || userRole === "hospital-admin" || userRole === "merchant") {
    navItems = PartnerNavigationItems
  } else if (userRole !== "mother") {
    navItems = DocNavigationItems
  }

  const SidebarContent = () => (
    <>
      {/* Sidebar Header */}
      <div className="p-6 border-b border-border">
        <div onClick={() => router.push("/")} className="flex items-center gap-3 mb-6 cursor-pointer">
          <Image src="/logo.jpg" alt="MomSync Logo" width={40} height={40} className="rounded-md" />
          <div>
            <h1 className=" text-xl font-semibold text-foreground">MomSync</h1>
            <p className="text-sm text-muted-foreground">Maternal Health Dashboard</p>
          </div>
        </div>

        {/* User Info */}
        <Card className="p-4 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground text-sm truncate">{user.name}</h3>
              <p className="text-xs text-muted-foreground capitalize truncate">{userRole?.replace("-", " ") || "User"}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Navigation */}
      <nav className="p-6">
        <div className="space-y-2">
          {navItems.map((item, index) => (
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
              <div className="flex items-center gap-3 min-w-0">
                <item.icon className={`w-5 h-5 shrink-0 ${
                  isActive(item.href) ? "text-white" : "text-muted-foreground group-hover:text-[#1f4b4a]"
                }`} />
                <div className="min-w-0">
                  <div className={`font-medium text-sm truncate ${
                    isActive(item.href) ? "text-white" : "text-foreground"
                  }`}>
                    {item.title}
                  </div>
                  <div className={`text-xs truncate ${
                    isActive(item.href) ? "text-white/80" : "text-muted-foreground"
                  }`}>
                    {item.description}
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 ${
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
          <button 
            onClick={handleLogout}
            className="group flex items-center gap-3 p-4 rounded-xl hover:bg-red-50 text-foreground transition-all duration-200 w-full text-left"
          >
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
                  {navItems.find(item => isActive(item.href))?.title || "Dashboard"}
                </h1>
                <p className="text-muted-foreground">
                  {navItems.find(item => isActive(item.href))?.description || "Welcome to your maternal health dashboard"}
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