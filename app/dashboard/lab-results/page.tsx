"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, TrendingUp, CheckCircle, AlertTriangle, Upload } from "lucide-react"

const labResults = [
  {
    id: "lr1abc",
    date: "2024-10-25T09:00:00Z",
    testType: "Complete Blood Count (CBC)",
    doctor: "Dr. Sarah Williams",
    status: "normal",
    results: [
      { name: "Hemoglobin", value: "12.5 g/dL", range: "11.5-15.5 g/dL", status: "normal" },
      { name: "Hematocrit", value: "37%", range: "34-45%", status: "normal" },
      { name: "White Blood Cells", value: "7,200/μL", range: "4,000-11,000/μL", status: "normal" },
      { name: "Platelets", value: "245,000/μL", range: "150,000-450,000/μL", status: "normal" }
    ]
  },
  {
    id: "lr1def",
    date: "2024-10-20T11:30:00Z", 
    testType: "Glucose Screening Test",
    doctor: "Dr. Sarah Williams",
    status: "normal",
    results: [
      { name: "Glucose (1-hour)", value: "135 mg/dL", range: "<140 mg/dL", status: "normal" }
    ]
  },
  {
    id: "lr1ghi",
    date: "2024-10-15T08:45:00Z",
    testType: "Urinalysis", 
    doctor: "Dr. Sarah Williams",
    status: "normal",
    results: [
      { name: "Protein", value: "Trace", range: "Negative-Trace", status: "normal" },
      { name: "Glucose", value: "Negative", range: "Negative", status: "normal" },
      { name: "Bacteria", value: "Few", range: "Few-Moderate", status: "normal" }
    ]
  }
]

export default function LabResultsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-100 text-green-700'
      case 'abnormal': return 'bg-red-100 text-red-700'
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal': return <CheckCircle className="w-4 h-4" />
      case 'abnormal': return <AlertTriangle className="w-4 h-4" />
      case 'pending': return <TrendingUp className="w-4 h-4" />
      default: return <CheckCircle className="w-4 h-4" />
    }
  }

  const getResultStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-600'
      case 'high': return 'text-red-600'
      case 'low': return 'text-orange-600'
      default: return 'text-green-600'
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div>
      

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{labResults.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Total Lab Reports</div>
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
              <div className="text-4xl font-bold text-foreground mb-2">{labResults.filter(r => r.status === 'normal').length}</div>
              <div className="text-sm text-muted-foreground font-medium">Normal Results</div>
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
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Results Within Range</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Lab Results</h2>
          
          <div className="space-y-6">
            {labResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-secondary/30 rounded-3xl p-8 border border-border hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{result.testType}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] flex items-center justify-center mr-3">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        {formatDate(result.date)}
                      </div>
                      <div className="text-sm text-muted-foreground ml-11">
                        Ordered by: {result.doctor}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(result.status)}>
                      {getStatusIcon(result.status)}
                      <span className="ml-2 capitalize">{result.status}</span>
                    </Badge>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="bg-background/50 rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4">Test Results</h4>
                  <div className="space-y-3">
                    {result.results.map((test, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-border/50">
                        <div>
                          <div className="font-medium text-foreground">{test.name}</div>
                          <div className="text-sm text-muted-foreground">Reference: {test.range}</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-semibold ${getResultStatusColor(test.status)}`}>
                            {test.value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">{test.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-secondary/30 rounded-3xl p-10 border border-border"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">🔬 Understanding Your Lab Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Normal Values</h4>
              <p className="text-sm text-muted-foreground mb-4">Results within the reference range indicate healthy levels for pregnancy</p>
              <h4 className="font-semibold text-foreground mb-2">Track Changes</h4>
              <p className="text-sm text-muted-foreground">Monitor trends over time to ensure your health is on track</p>
            </div>
            <div className="bg-background/50 rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Ask Questions</h4>
              <p className="text-sm text-muted-foreground mb-4">Discuss any concerns or abnormal results with your healthcare provider</p>
              <h4 className="font-semibold text-foreground mb-2">Keep Records</h4>
              <p className="text-sm text-muted-foreground">Save all lab results for your medical records and future reference</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}