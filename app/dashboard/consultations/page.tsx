"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle,
  Send,
  Clock,
  User,
  Phone,
  MoreVertical,
  Search,
  Plus,
  CheckCircle,
  AlertCircle,
  Paperclip
} from "lucide-react"

const consultations = [
  {
    id: 1,
    patientName: "Sarah Johnson",
    patientPhone: "+1 (555) 123-4567",
    topic: "Prenatal Checkup",
    startTime: "Today, 2:00 PM",
    status: "active",
    messages: [
      { type: "doctor", text: "Hello Sarah, how are you feeling today?", time: "2:00 PM" },
      { type: "patient", text: "I'm doing well, just some mild back pain", time: "2:02 PM" },
      { type: "doctor", text: "That's common during pregnancy. Let's discuss some stretches and exercises.", time: "2:03 PM" }
    ]
  },
  {
    id: 2,
    patientName: "Emily Davis",
    patientPhone: "+1 (555) 234-5678",
    topic: "Blood Sugar Management",
    startTime: "Today, 1:30 PM",
    status: "completed",
    messages: [
      { type: "doctor", text: "Hi Emily, your glucose levels look good this week", time: "1:30 PM" },
      { type: "patient", text: "Thank you! I've been following the diet plan", time: "1:32 PM" }
    ]
  },
  {
    id: 3,
    patientName: "Jessica Martinez",
    patientPhone: "+1 (555) 345-6789",
    topic: "Medication Adjustment",
    startTime: "Today, 3:00 PM",
    status: "scheduled",
    messages: []
  },
  {
    id: 4,
    patientName: "Amanda Wilson",
    patientPhone: "+1 (555) 456-7890",
    topic: "Nutritional Consultation",
    startTime: "Tomorrow, 10:30 AM",
    status: "scheduled",
    messages: []
  }
]

export default function ConsultationsPage() {
  const [selectedConsultation, setSelectedConsultation] = useState(consultations[0])
  const [messageInput, setMessageInput] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "completed":
        return "bg-blue-100 text-blue-700"
      case "scheduled":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <MessageCircle className="w-4 h-4" />
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "scheduled":
        return <Clock className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const filteredConsultations = consultations.filter(c =>
    c.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.topic.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle message sending logic here
      setMessageInput("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 py-6 px-4 sm:px-6">
      <div className="">
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Consultation List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border"
          >
            <div className="mb-4">
              <h2 className="text-lg font-bold text-foreground mb-4">Active Consultations</h2>

              {/* Search */}
              <div className="relative mb-4">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search consultations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-secondary/30 rounded-lg pl-10 pr-3 py-2 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-sm"
                />
              </div>
            </div>

            {/* Consultation List */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredConsultations.map((consultation) => (
                <button
                  key={consultation.id}
                  onClick={() => setSelectedConsultation(consultation)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    selectedConsultation.id === consultation.id
                      ? "bg-[#1f4b4a]/10 border-[#1f4b4a] bg-gradient-to-r from-[#1f4b4a]/5 to-[#2d6a68]/5"
                      : "border-border/50 hover:bg-secondary/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {consultation.patientName.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">{consultation.patientName}</p>
                        <p className="text-xs text-muted-foreground truncate">{consultation.topic}</p>
                      </div>
                    </div>
                    <Badge className={getStatusBadgeColor(consultation.status)}>
                      {getStatusIcon(consultation.status)}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {consultation.startTime}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Chat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-6 border border-border flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {selectedConsultation.patientName.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{selectedConsultation.patientName}</h3>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusBadgeColor(selectedConsultation.status)}>
                      {getStatusIcon(selectedConsultation.status)}
                      <span className="ml-1">{selectedConsultation.status}</span>
                    </Badge>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Consultation Info */}
            <div className="mb-4 p-4 bg-secondary/30 rounded-lg border border-border/50">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Topic</p>
                  <p className="text-sm font-semibold text-foreground">{selectedConsultation.topic}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Time</p>
                  <p className="text-sm font-semibold text-foreground">{selectedConsultation.startTime}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Phone</p>
                  <p className="text-sm font-semibold text-foreground">{selectedConsultation.patientPhone}</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 bg-secondary/20 rounded-lg p-4 mb-4 overflow-y-auto max-h-64 space-y-4">
              {selectedConsultation.messages.length > 0 ? (
                selectedConsultation.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === "doctor" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs ${
                        message.type === "doctor"
                          ? "bg-[#1f4b4a] text-white rounded-lg rounded-tr-none"
                          : "bg-background border border-border text-foreground rounded-lg rounded-tl-none"
                      } p-3`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.type === "doctor" ? "text-white/70" : "text-muted-foreground"}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-muted-foreground">No messages yet. Start the consultation.</p>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="w-full bg-secondary/30 rounded-lg pl-4 pr-10 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-[#1f4b4a] text-foreground"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-secondary/50 rounded transition-colors">
                  <Paperclip className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <Button onClick={handleSendMessage} className="rounded-lg">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
