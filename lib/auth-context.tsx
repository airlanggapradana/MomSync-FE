"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export type UserRole = 
  | "mother"
  | "doctor"
  | "midwife"
  | "nutritionist"
  | "partner"
  | "hospital-admin"
  | "merchant"
  | "pharmacist"
  | "platform-admin"
  | "support"

export interface User {
  email: string
  role: UserRole
  name: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  hasRole: (role: UserRole | UserRole[]) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Initialize auth from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("authUser")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Demo credentials validation
      const userMap: Record<string, { role: UserRole; name: string }> = {
        "mother@momsync.com": { role: "mother", name: "Sarah Johnson" },
        "doctor@momsync.com": { role: "doctor", name: "Dr. James Wilson" },
        "midwife@momsync.com": { role: "midwife", name: "Emily Davis" },
        "nutritionist@momsync.com": { role: "nutritionist", name: "Rachel Green" },
        "partner@momsync.com": { role: "partner", name: "Michael Johnson" },
        "hospital-admin@momsync.com": { role: "hospital-admin", name: "Admin User" },
        "merchant@momsync.com": { role: "merchant", name: "John Merchant" },
        "pharmacist@momsync.com": { role: "pharmacist", name: "Dr. Lisa Pharmacy" },
        "platform-admin@momsync.com": { role: "platform-admin", name: "Platform Admin" },
        "support@momsync.com": { role: "support", name: "Support Team" },
      }

      const userData = userMap[email]
      if (!userData || password !== "demo123") {
        throw new Error("Invalid credentials")
      }

      const newUser: User = {
        email,
        ...userData,
      }

      setUser(newUser)
      localStorage.setItem("authUser", JSON.stringify(newUser))
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("userRole")
    localStorage.removeItem("authUser")
    router.push("/auth/login")
  }

  const hasRole = (roles: UserRole | UserRole[]): boolean => {
    if (!user) return false
    if (Array.isArray(roles)) {
      return roles.includes(user.role)
    }
    return user.role === roles
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: user !== null,
    login,
    logout,
    hasRole,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
