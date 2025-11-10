"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { 
  Mail, 
  ArrowLeft,
  ArrowRight,
  Shield,
  CheckCircle,
  Key
} from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Left Side - Information Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block h-full"
        >
        <div className="bg-secondary/30 rounded-3xl p-12 border border-border h-full">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6">
              <Key className="w-8 h-8 text-white" />
            </div>
            <h1 className=" text-4xl md:text-5xl font-normal text-foreground mb-4">
              Reset Password
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Don't worry, we'll help you regain access to your account
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Enter Your Email</h3>
                  <p className="text-sm text-muted-foreground">Provide the email address associated with your account</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Check Your Inbox</h3>
                  <p className="text-sm text-muted-foreground">We'll send you a secure link to reset your password</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Create New Password</h3>
                  <p className="text-sm text-muted-foreground">Follow the link and set a new secure password</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-background/50 rounded-2xl border border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Having trouble?</strong><br />
                Contact our support team at{" "}
                <a href="mailto:support@momsync.com" className="text-[#1f4b4a] hover:text-[#2d6a68] font-medium">
                  support@momsync.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Reset Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 border border-border">
            {/* Back Button */}
            <Link 
              href="/auth/login"
              className="inline-flex items-center text-sm font-medium text-[#1f4b4a] hover:text-[#2d6a68] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Link>

            <div className="mb-8">
              <h2 className=" text-3xl md:text-4xl font-normal text-foreground mb-2">
                Forgot Password?
              </h2>
              <p className="text-muted-foreground">
                Enter your email and we'll send you instructions to reset your password
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

              {/* Send Reset Link Button */}
              <Button size="lg" className="w-full rounded-full">
                Send Reset Link
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Additional Info */}
              <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#1f4b4a] shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground block mb-1">Security Notice</strong>
                    The password reset link will expire in 1 hour for security reasons. 
                    If you don't receive an email within 5 minutes, please check your spam folder.
                  </div>
                </div>
              </div>

              {/* Remember Password Link */}
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Remember your password?{" "}
                  <Link 
                    href="/auth/login" 
                    className="font-medium text-[#1f4b4a] hover:text-[#2d6a68] transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>

            {/* Help Section */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Need more help?
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Visit Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
