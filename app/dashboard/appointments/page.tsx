"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, User, Plus, CheckCircle, AlertTriangle } from "lucide-react"

const appointments = [
  {
    id: "apt1abc",
    date: "2024-11-02T10:00:00Z",
    doctor: "Dr. Sarah Williams",
    specialty: "Obstetrician",
    location: "Women's Health Center - Room 205",
    type: "Routine Prenatal Checkup",
    status: "confirmed",
    notes: "Monthly checkup - blood pressure, weight, baby heartbeat",
    duration: "30 minutes"
  },
  {
    id: "apt1def", 
    date: "2024-11-15T14:30:00Z",
    doctor: "Dr. Michael Chen",
    specialty: "Ultrasound Specialist",
    location: "Radiology Department - Room 101",
    type: "Anatomy Scan",
    status: "scheduled",
    notes: "Detailed ultrasound to check baby's development",
    duration: "45 minutes"
  },
  {
    id: "apt1ghi",
    date: "2024-10-25T09:15:00Z",
    doctor: "Dr. Sarah Williams", 
    specialty: "Obstetrician",
    location: "Women's Health Center - Room 205",
    type: "Follow-up Visit",
    status: "completed",
    notes: "Blood work results review, nutrition counseling",
    duration: "20 minutes"
  }
]

export default function AppointmentsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700'
      case 'scheduled': return 'bg-blue-100 text-blue-700'
      case 'completed': return 'bg-gray-100 text-gray-700'
      case 'cancelled': return 'bg-red-100 text-red-700'
      default: return 'bg-blue-100 text-blue-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />
      case 'scheduled': return <Clock className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'cancelled': return <AlertTriangle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const upcomingAppointments = appointments.filter(apt => new Date(apt.date) > new Date())
  const pastAppointments = appointments.filter(apt => new Date(apt.date) <= new Date())

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
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4">
            Medical Appointments
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Manage your prenatal care appointments and healthcare visits
          </p>
          <Button size="lg" className="rounded-full">
            <Plus className="w-5 h-5 mr-2" />
            Schedule Appointment
          </Button>
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
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{upcomingAppointments.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Upcoming Appointments</div>
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
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{pastAppointments.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Completed Visits</div>
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
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">3</div>
              <div className="text-sm text-muted-foreground font-medium">Healthcare Providers</div>
            </div>
          </motion.div>
        </div>

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">Upcoming Appointments</h2>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <motion.div
                  key={appointment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary/30 rounded-3xl p-6 border border-border hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">{appointment.type}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mr-3">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          {formatDate(appointment.date)} at {formatTime(appointment.date)}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mr-3">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          {appointment.doctor} - {appointment.specialty}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#3d7a78] to-[#4d8a88] flex items-center justify-center mr-3">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                          {appointment.location}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#4d8a88] to-[#5d9a98] flex items-center justify-center mr-3">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          Duration: {appointment.duration}
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(appointment.status)}>
                      {getStatusIcon(appointment.status)}
                      <span className="ml-2 capitalize">{appointment.status}</span>
                    </Badge>
                  </div>
                  
                  {appointment.notes && (
                    <div className="bg-background/50 p-4 rounded-2xl">
                      <h4 className="font-semibold text-foreground mb-2">Appointment Notes</h4>
                      <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Past Appointments */}
        {pastAppointments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Appointments</h2>
            <div className="space-y-4">
              {pastAppointments.map((appointment, index) => (
                <motion.div
                  key={appointment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary/30 rounded-3xl p-6 border border-border hover:bg-secondary/50 transition-all duration-300 opacity-75"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{appointment.type}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mr-3">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          {formatDate(appointment.date)} at {formatTime(appointment.date)}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#2d6a68] to-[#3d7a78] flex items-center justify-center mr-3">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          {appointment.doctor} - {appointment.specialty}
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(appointment.status)}>
                      {getStatusIcon(appointment.status)}
                      <span className="ml-2 capitalize">{appointment.status}</span>
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/30 rounded-3xl p-8 border border-border"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">📅 Appointment Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Before Your Visit</h4>
              <p className="text-sm text-muted-foreground mb-4">Prepare questions, bring insurance cards, and arrive 15 minutes early</p>
              <h4 className="font-semibold text-foreground mb-2">What to Bring</h4>
              <p className="text-sm text-muted-foreground">Insurance card, medication list, prenatal vitamins, and previous test results</p>
            </div>
            <div className="bg-background/50 rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-2">During Your Visit</h4>
              <p className="text-sm text-muted-foreground mb-4">Ask questions, discuss concerns, and take notes about recommendations</p>
              <h4 className="font-semibold text-foreground mb-2">Follow-up Care</h4>
              <p className="text-sm text-muted-foreground">Schedule next appointment before leaving and follow any care instructions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}