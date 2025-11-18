"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Settings as SettingsIcon,
  Bell,
  Lock,
  User,
  Database,
  Shield,
  Save,
  RotateCcw,
  Search,
  Mail,
  AlertCircle,
  CheckCircle
} from "lucide-react"

const settings = [
  {
    category: "General Settings",
    items: [
      { name: "Platform Name", value: "MomSync", type: "text", description: "Application name" },
      { name: "Platform URL", value: "https://momsync.com", type: "text", description: "Main platform URL" },
      { name: "Support Email", value: "support@momsync.com", type: "email", description: "Customer support email" },
    ]
  },
  {
    category: "Notification Settings",
    items: [
      { name: "Email Notifications", value: true, type: "toggle", description: "Send email notifications" },
      { name: "SMS Alerts", value: true, type: "toggle", description: "Send SMS alerts for critical issues" },
      { name: "Daily Digest", value: true, type: "toggle", description: "Send daily summary digest" },
    ]
  },
  {
    category: "Security Settings",
    items: [
      { name: "Two-Factor Authentication", value: true, type: "toggle", description: "Require 2FA for admin accounts" },
      { name: "Force Password Reset", value: false, type: "toggle", description: "Force users to reset password" },
      { name: "Session Timeout (minutes)", value: "30", type: "number", description: "Idle session timeout" },
    ]
  },
  {
    category: "Content Moderation",
    items: [
      { name: "Auto-Moderate Posts", value: true, type: "toggle", description: "Automatically moderate posts" },
      { name: "Require Approval", value: false, type: "toggle", description: "Require manual approval for new content" },
      { name: "Max Post Length", value: "5000", type: "number", description: "Maximum characters per post" },
    ]
  },
  {
    category: "Data Management",
    items: [
      { name: "Backup Frequency", value: "daily", type: "select", description: "Database backup frequency", options: ["hourly", "daily", "weekly", "monthly"] },
      { name: "Retention Period (days)", value: "90", type: "number", description: "Log retention period" },
      { name: "Export Data Format", value: "json", type: "select", description: "Default export format", options: ["json", "csv", "xml"] },
    ]
  }
]

export default function PlatformSettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Platform Settings</h1>
            <p className="text-muted-foreground mt-1">Manage platform configuration and preferences</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-lg">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset to Defaults
            </Button>
            <Button className="rounded-lg">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </motion.div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
      >
        <div className="flex items-start gap-4">
          <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-lg font-semibold text-green-900 mb-1">System Operational</h2>
            <p className="text-sm text-green-700">All systems are running smoothly. Last backup completed 2 hours ago.</p>
          </div>
        </div>
      </motion.div>

      {/* Settings Sections */}
      {settings.map((section, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
              <SettingsIcon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-foreground">{section.category}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="space-y-2 p-4 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>

                {item.type === "text" || item.type === "email" || item.type === "number" ? (
                  <Input
                    type={item.type}
                    defaultValue={item.value as string}
                    className="rounded-lg border-border"
                  />
                ) : item.type === "toggle" ? (
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-foreground">{item.value ? "Enabled" : "Disabled"}</span>
                    <div className={`w-12 h-6 rounded-full transition-colors ${item.value ? "bg-green-600" : "bg-gray-300"}`}>
                      <div className={`w-5 h-5 rounded-full bg-white mt-0.5 transition-transform ${item.value ? "ml-6" : "ml-0.5"}`} />
                    </div>
                  </div>
                ) : (
                  <select className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground">
                    {/* @ts-ignore */}
                    {item.options?.map((option) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200"
      >
        <div className="flex items-start gap-4 mb-4">
          <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xl font-bold text-red-900">Danger Zone</h2>
            <p className="text-sm text-red-700 mt-1">These actions are irreversible. Proceed with caution.</p>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-red-200">
          <div className="flex items-center justify-between p-4 bg-red-100/30 rounded-lg border border-red-200/50">
            <div>
              <p className="font-semibold text-red-900">Clear Cache</p>
              <p className="text-xs text-red-700 mt-1">Clear all system cache (may cause temporary slowdown)</p>
            </div>
            <Button variant="outline" className="rounded-lg text-red-600 hover:text-red-700 border-red-300 hover:bg-red-50">
              Clear
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-red-100/30 rounded-lg border border-red-200/50">
            <div>
              <p className="font-semibold text-red-900">Reset All Settings</p>
              <p className="text-xs text-red-700 mt-1">Reset all platform settings to factory defaults</p>
            </div>
            <Button variant="outline" className="rounded-lg text-red-600 hover:text-red-700 border-red-300 hover:bg-red-50">
              Reset
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-red-100/30 rounded-lg border border-red-200/50">
            <div>
              <p className="font-semibold text-red-900">Maintenance Mode</p>
              <p className="text-xs text-red-700 mt-1">Take platform offline for maintenance (users won't be able to access)</p>
            </div>
            <Button variant="outline" className="rounded-lg text-red-600 hover:text-red-700 border-red-300 hover:bg-red-50">
              Enable
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
