"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { 
  Heart, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  Shield,
  CheckCircle
} from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center mt-20 py-12 px-4 sm:px-6">
      <div className="max-w-xl w-full  gap-8 items-center">
    

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 border border-border">
            <div className="mb-8 text-center lg:text-left">
              <h2 className=" text-3xl md:text-4xl font-normal text-foreground mb-2">
                Sign In
              </h2>
              <p className="text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>

            <form className="space-y-6">
              {/* Email Field */}
              <div className="bg-background/50 rounded-2xl px-6 space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  Email Address
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="sarah.johnson@email.com" 
                  className="rounded-xl border-border/50"
                />
              </div>

              {/* Password Field */}
              <div className="bg-background/50 rounded-2xl px-6 space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  Password
                </Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="rounded-xl border-border/50 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium text-foreground cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <Link 
                  href="/auth/forgot-password" 
                  className="text-sm font-medium text-[#1f4b4a] hover:text-[#2d6a68] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button size="lg" className="w-full rounded-full">
                Sign In
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-secondary/30 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" size="lg" className="rounded-full">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link 
                    href="/auth/signup" 
                    className="font-medium text-[#1f4b4a] hover:text-[#2d6a68] transition-colors"
                  >
                    Sign up for free
                  </Link>
                </p>
              </div>
            </form>

            {/* Security Badge */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Your information is secure and encrypted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
