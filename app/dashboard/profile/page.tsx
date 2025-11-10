"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { User, Phone, Mail, MapPin, Calendar, Heart, Baby, Clock, AlertCircle, Edit, Activity } from "lucide-react"

// Dummy data for Mother Profiles
const motherProfiles = [
  {
    id: "cm1abc123",
    name: "Sarah Johnson",
    age: 28,
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Oak Street, Springfield, USA",
    emergency_contact: "+1 (555) 987-6543",
    pregnancy_start: "2024-03-15T00:00:00Z",
    expected_due_date: "2024-12-15T00:00:00Z",
    created_at: "2024-03-15T08:30:00Z",
    updated_at: "2024-10-25T14:20:00Z",
    current_week: 28,
    trimester: 3,
    blood_type: "O+",
    complications: ["Gestational Diabetes"],
    notes: "Regular monitoring required for blood sugar levels. Diet and exercise plan in place."
  },
  {
    id: "cm1def456",
    name: "Emily Davis",
    age: 32,
    phone: "+1 (555) 234-5678",
    email: "emily.davis@email.com",
    address: "456 Pine Avenue, Riverside, USA",
    emergency_contact: "+1 (555) 876-5432",
    pregnancy_start: "2024-04-20T00:00:00Z",
    expected_due_date: "2025-01-20T00:00:00Z",
    created_at: "2024-04-20T10:15:00Z",
    updated_at: "2024-10-24T16:45:00Z",
    current_week: 24,
    trimester: 2,
    blood_type: "A+",
    complications: [],
    notes: "Healthy pregnancy progression. Continue with regular prenatal vitamins and exercise routine."
  },
  {
    id: "cm1ghi789",
    name: "Jessica Wilson",
    age: 26,
    phone: "+1 (555) 345-6789",
    email: "jessica.wilson@email.com",
    address: "789 Maple Drive, Lakewood, USA",
    emergency_contact: "+1 (555) 765-4321",
    pregnancy_start: "2024-05-10T00:00:00Z",
    expected_due_date: "2025-02-10T00:00:00Z",
    created_at: "2024-05-10T09:20:00Z",
    updated_at: "2024-10-23T11:30:00Z",
    current_week: 20,
    trimester: 2,
    blood_type: "B+",
    complications: ["Iron Deficiency"],
    notes: "Iron supplements prescribed. Regular blood tests to monitor iron levels and hemoglobin."
  },
  {
    id: "cm1jkl012",
    name: "Amanda Brown",
    age: 35,
    phone: "+1 (555) 456-7890",
    email: "amanda.brown@email.com",
    address: "321 Cedar Lane, Hilltown, USA",
    emergency_contact: "+1 (555) 654-3210",
    pregnancy_start: "2024-02-05T00:00:00Z",
    expected_due_date: "2024-11-05T00:00:00Z",
    created_at: "2024-02-05T14:45:00Z",
    updated_at: "2024-10-22T09:15:00Z",
    current_week: 36,
    trimester: 3,
    blood_type: "AB+",
    complications: ["High Blood Pressure"],
    notes: "Advanced maternal age pregnancy. Regular monitoring for blood pressure and fetal development."
  }
]

export default function MotherProfilePage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getWeeksRemaining = (dueDateString: string) => {
    const dueDate = new Date(dueDateString)
    const today = new Date()
    const diffTime = dueDate.getTime() - today.getTime()
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7))
    return Math.max(0, diffWeeks)
  }

  const getTrimesterColor = (trimester: number) => {
    switch (trimester) {
      case 1:
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 2:
        return 'bg-green-100 text-green-700 border-green-200'
      case 3:
        return 'bg-purple-100 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  // Statistics
  const totalMothers = motherProfiles.length
  const averageAge = Math.round(motherProfiles.reduce((sum, mother) => sum + mother.age, 0) / totalMothers)
  const withComplications = motherProfiles.filter(mother => mother.complications.length > 0).length

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] mb-6">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4">
            Mother Profiles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Manage and view detailed mother profile information with comprehensive health tracking
          </p>
          <Button size="lg" className="rounded-full">
            <User className="w-5 h-5 mr-2" />
            Add New Profile
          </Button>
        </motion.div>

        {/* Statistics Cards */}
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
              <div className="text-4xl font-bold text-foreground mb-2">{totalMothers}</div>
              <div className="text-sm text-muted-foreground font-medium">Total Profiles</div>
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
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{averageAge}</div>
              <div className="text-sm text-muted-foreground font-medium">Average Age</div>
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
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{withComplications}</div>
              <div className="text-sm text-muted-foreground font-medium">Need Special Care</div>
            </div>
          </motion.div>
        </div>

        {/* Mother Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {motherProfiles.map((mother, index) => (
            <motion.div
              key={mother.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-2xl flex items-center justify-center shrink-0">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{mother.name}</h3>
                    <p className="text-muted-foreground">{mother.age} years old</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="rounded-full">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>

              {/* Pregnancy Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center">
                      <Baby className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-foreground">Week {mother.current_week}</span>
                  </div>
                  <Badge className={getTrimesterColor(mother.trimester)}>
                    Trimester {mother.trimester}
                  </Badge>
                </div>
                
                <div className="bg-background/50 rounded-2xl p-5 border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-foreground">{getWeeksRemaining(mother.expected_due_date)} weeks</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Until due date</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-background/50 rounded-2xl p-5 border border-border/50 mb-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1f4b4a]" />
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-[#1f4b4a]" />
                    <span>{mother.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-[#1f4b4a]" />
                    <span>{mother.email}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-[#1f4b4a] mt-0.5" />
                    <span>{mother.address}</span>
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="bg-background/50 rounded-2xl p-5 border border-border/50 mb-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#1f4b4a]" />
                  Medical Information
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Blood Type:</span>
                    <span className="font-medium text-foreground">{mother.blood_type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Due Date:</span>
                    <span className="font-medium text-foreground">{formatDate(mother.expected_due_date)}</span>
                  </div>
                  {mother.complications.length > 0 && (
                    <div>
                      <span className="text-muted-foreground block mb-2">Complications:</span>
                      <div className="flex flex-wrap gap-2">
                        {mother.complications.map((complication, idx) => (
                          <Badge key={idx} className="bg-red-100 text-red-700 border-red-200">
                            {complication}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50/50 rounded-2xl p-5 border border-red-200/50 mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  Emergency Contact
                </h4>
                <p className="text-sm text-foreground font-medium">{mother.emergency_contact}</p>
              </div>

              {/* Doctor's Notes */}
              {mother.notes && (
                <div className="bg-green-50/50 rounded-2xl p-5 border border-green-200/50 mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Doctor's Notes</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mother.notes}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
                <Button size="sm" className="rounded-full">
                  View Full Profile
                </Button>
                <Button size="sm" variant="outline" className="rounded-full">
                  <Calendar className="w-4 h-4 mr-1" />
                  Schedule
                </Button>
                <Button size="sm" variant="outline" className="rounded-full">
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-secondary/30 rounded-3xl p-10 border border-border">
            <div className="text-center mb-10">
              <h3 className=" text-3xl md:text-4xl font-normal text-foreground mb-3">
                📋 Profile Management Tips
              </h3>
              <p className="text-muted-foreground text-lg">
                Best practices for maintaining accurate mother profiles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center shrink-0">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Keep Information Updated</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Regular updates ensure accurate medical care and better health outcomes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center shrink-0">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Emergency Contacts</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Always maintain current emergency contact information for quick response
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center shrink-0">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Medical History</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Document all complications and medical conditions thoroughly
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#4d8a88] to-[#5d9a98] flex items-center justify-center shrink-0">
                    <span className="text-white text-lg font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Regular Monitoring</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Track pregnancy progress and important milestones consistently
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#5d9a98] to-[#6daaa8] flex items-center justify-center shrink-0">
                    <span className="text-white text-lg font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Maintain open communication with healthcare providers at all times
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#6daaa8] to-[#7dbab8] flex items-center justify-center shrink-0">
                    <span className="text-white text-lg font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Privacy & Security</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ensure all personal information is kept secure and confidential
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}