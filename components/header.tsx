"use client"
import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { LogOut, User } from "lucide-react"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated, user, logout } = useAuth()
  const isDashboardPage = pathname.startsWith("/dashboard")
  const isAuthPage = pathname.startsWith("/auth")

  const handleLogout = () => {
    logout()
  }

  const routeDashboard = () => {
    const userRole = localStorage.getItem("userRole")
    if (userRole === "mother") {
      router.push("/dashboard")
    } else {
      router.push("/dashboard/provider-overview")
    }
  }
  if (isAuthPage) {
    return null
  }

  return (
    <header className={` ${!isDashboardPage ? "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border" : "hidden"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <Image src="./logo.jpg" alt="MomSync Logo" width={32} height={32} className="rounded-md" />
            <span className=" text-foreground">MomSync.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
        
            <Link href="/about" className="text-sm text-foreground font-bold hover:text-[#1f4b4a] transition-colors">
              About
            </Link>
            <Link href="/teams" className="text-sm text-foreground font-bold hover:text-[#1f4b4a] transition-colors">
              Teams
            </Link>

          </nav>

          {/* CTA Button */}
          {isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <div onClick={routeDashboard} className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{user.role.replace("-", " ")}</p>
                </div>
              </div>
              <Button onClick={handleLogout} variant="outline" className="rounded-full px-4 gap-2">
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Button onClick={() => router.push("/auth/login")} className="rounded-full px-6">
              Sign in 🤱
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
