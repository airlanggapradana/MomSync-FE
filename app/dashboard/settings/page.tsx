"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Lock, 
  Shield, 
  Globe, 
  Moon,
  Smartphone,
  Mail,
  Calendar,
  Heart,
  Eye,
  Save,
  Trash2,
  Download,
  Upload,
  AlertCircle
} from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6">
            <SettingsIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4">
            Settings & Preferences
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customize your experience and manage your account settings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">Profile</div>
              <div className="text-sm text-muted-foreground font-medium">Personal Information</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">12</div>
              <div className="text-sm text-muted-foreground font-medium">Active Notifications</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">Secure</div>
              <div className="text-sm text-muted-foreground font-medium">Privacy Protected</div>
            </div>
          </motion.div>
        </div>

        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Account Settings</h2>
              <p className="text-sm text-muted-foreground">Manage your personal information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6 space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium mb-2 block">Full Name</Label>
                <Input id="name" placeholder="Sarah Johnson" className="rounded-xl" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground font-medium mb-2 block">Email Address</Label>
                <Input id="email" type="email" placeholder="sarah.johnson@email.com" className="rounded-xl" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground font-medium mb-2 block">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" className="rounded-xl" />
              </div>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 space-y-4">
              <div>
                <Label htmlFor="address" className="text-foreground font-medium mb-2 block">Address</Label>
                <Input id="address" placeholder="123 Oak Street, Springfield" className="rounded-xl" />
              </div>
              <div>
                <Label htmlFor="emergency" className="text-foreground font-medium mb-2 block">Emergency Contact</Label>
                <Input id="emergency" placeholder="+1 (555) 987-6543" className="rounded-xl" />
              </div>
              <div>
                <Label htmlFor="blood-type" className="text-foreground font-medium mb-2 block">Blood Type</Label>
                <Input id="blood-type" placeholder="O+" className="rounded-xl" />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button size="lg" className="rounded-full">
              <Save className="w-5 h-5 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Cancel
            </Button>
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Notification Preferences</h2>
              <p className="text-sm text-muted-foreground">Choose what notifications you receive</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Appointment Reminders</div>
                    <div className="text-xs text-muted-foreground">Get notified before appointments</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Health Tracking</div>
                    <div className="text-xs text-muted-foreground">Daily health check reminders</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email Notifications</div>
                    <div className="text-xs text-muted-foreground">Receive updates via email</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#4d8a88] to-[#5d9a98] flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Push Notifications</div>
                    <div className="text-xs text-muted-foreground">Mobile app notifications</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Emergency Alerts</div>
                    <div className="text-xs text-muted-foreground">Critical health notifications</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Tips & Advice</div>
                    <div className="text-xs text-muted-foreground">Weekly pregnancy tips</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Privacy & Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Privacy & Security</h2>
              <p className="text-sm text-muted-foreground">Protect your data and privacy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Two-Factor Authentication</div>
                    <div className="text-xs text-muted-foreground">Extra security for your account</div>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Profile Visibility</div>
                    <div className="text-xs text-muted-foreground">Control who sees your profile</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Data Sharing</div>
                    <div className="text-xs text-muted-foreground">Share data with healthcare providers</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 space-y-4">
              <div>
                <Label htmlFor="current-password" className="text-foreground font-medium mb-2 block">Current Password</Label>
                <Input id="current-password" type="password" placeholder="••••••••" className="rounded-xl" />
              </div>
              <div>
                <Label htmlFor="new-password" className="text-foreground font-medium mb-2 block">New Password</Label>
                <Input id="new-password" type="password" placeholder="••••••••" className="rounded-xl" />
              </div>
              <div>
                <Label htmlFor="confirm-password" className="text-foreground font-medium mb-2 block">Confirm New Password</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" className="rounded-xl" />
              </div>
              <Button size="sm" className="rounded-full w-full">
                Update Password
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Appearance Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#4d8a88] to-[#5d9a98] flex items-center justify-center">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Appearance</h2>
              <p className="text-sm text-muted-foreground">Customize how the app looks</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
                    <Moon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Dark Mode</div>
                    <div className="text-xs text-muted-foreground">Toggle dark theme</div>
                  </div>
                </div>
                <Switch />
              </div>
            </div>

            <div className="bg-background/50 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Language</div>
                    <div className="text-xs text-muted-foreground">Select your language</div>
                  </div>
                </div>
                <Badge variant="outline" className="rounded-full">English</Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Data Management</h2>
              <p className="text-sm text-muted-foreground">Export or delete your data</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Export Data</div>
                  <div className="text-xs text-muted-foreground">Download all your health records</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Data
              </Button>
            </div>

            <div className="bg-background/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Delete Account</div>
                  <div className="text-xs text-muted-foreground">Permanently delete your account</div>
                </div>
              </div>
              <Button variant="destructive" size="sm" className="rounded-full w-full">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Help & Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">📞 Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
              <p className="text-sm text-muted-foreground mb-4">Get help via email</p>
              <Button variant="outline" size="sm" className="rounded-full">
                Contact Support
              </Button>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Help Center</h4>
              <p className="text-sm text-muted-foreground mb-4">Browse FAQs and guides</p>
              <Button variant="outline" size="sm" className="rounded-full">
                Visit Help Center
              </Button>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Report Issue</h4>
              <p className="text-sm text-muted-foreground mb-4">Report bugs or problems</p>
              <Button variant="outline" size="sm" className="rounded-full">
                Report Problem
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
