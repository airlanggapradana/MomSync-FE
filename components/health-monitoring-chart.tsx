"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts'

interface MonitoringData {
  date: string
  bloodPressureSystolic: number
  bloodPressureDiastolic: number
  heartRate: number
  temperature: number
  weight: number
}

interface HealthMonitoringChartProps {
  data: MonitoringData[]
  type: 'bloodPressure' | 'heartRate' | 'temperature' | 'weight'
}

export function HealthMonitoringChart({ data, type }: HealthMonitoringChartProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return `${date.getMonth() + 1}/${date.getDate()}`
  }

  const formattedData = data.map(item => ({
    dateLabel: formatDate(item.date),
    date: item.date,
    bloodPressureSystolic: item.bloodPressureSystolic,
    bloodPressureDiastolic: item.bloodPressureDiastolic,
    heartRate: item.heartRate,
    temperature: item.temperature,
    weight: item.weight
  }))

  const renderChart = () => {
    switch (type) {
      case 'bloodPressure':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formattedData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSystolic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1f4b4a" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#1f4b4a" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorDiastolic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2d6a68" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2d6a68" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="dateLabel" 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
                domain={[60, 140]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }}
              />
              <Area 
                type="monotone" 
                dataKey="bloodPressureSystolic" 
                stroke="#1f4b4a" 
                fillOpacity={1} 
                fill="url(#colorSystolic)"
                strokeWidth={2}
                name="Systolic"
              />
              <Area 
                type="monotone" 
                dataKey="bloodPressureDiastolic" 
                stroke="#2d6a68" 
                fillOpacity={1} 
                fill="url(#colorDiastolic)"
                strokeWidth={2}
                name="Diastolic"
              />
            </AreaChart>
          </ResponsiveContainer>
        )

      case 'heartRate':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="dateLabel" 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
                domain={[60, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }}
              />
              <Line 
                type="monotone" 
                dataKey="heartRate" 
                stroke="#2d6a68" 
                strokeWidth={3}
                dot={{ fill: '#2d6a68', r: 4 }}
                activeDot={{ r: 6 }}
                name="Heart Rate (BPM)"
              />
            </LineChart>
          </ResponsiveContainer>
        )

      case 'temperature':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="dateLabel" 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
                domain={[97, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }}
              />
              <Line 
                type="monotone" 
                dataKey="temperature" 
                stroke="#3d7a78" 
                strokeWidth={3}
                dot={{ fill: '#3d7a78', r: 4 }}
                activeDot={{ r: 6 }}
                name="Temperature (°F)"
              />
            </LineChart>
          </ResponsiveContainer>
        )

      case 'weight':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formattedData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4d8a88" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4d8a88" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="dateLabel" 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
                domain={[140, 150]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }}
              />
              <Area 
                type="monotone" 
                dataKey="weight" 
                stroke="#4d8a88" 
                fillOpacity={1} 
                fill="url(#colorWeight)"
                strokeWidth={2}
                name="Weight (lbs)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )

      default:
        return null
    }
  }

  return (
    <div className="w-full h-full">
      {renderChart()}
    </div>
  )
}
