import { useState } from 'react'

export interface HealthMeasurement {
  id: string
  motherId: string
  heart_rate: number
  blood_pressure: string
  o2_saturation: number
  stress_level: number
  created_at: string
  updated_at: string
}

export const useHealthMonitoring = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch all health monitoring records
  const fetchHealthRecords = async (motherId: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/health-monitoring?motherId=${motherId}`)
      if (!response.ok) throw new Error('Failed to fetch health records')
      return await response.json()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Fetch a single health monitoring record
  const fetchHealthRecord = async (id: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/health-monitoring/${id}`)
      if (!response.ok) throw new Error('Failed to fetch health record')
      return await response.json()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Create a new health monitoring record
  const createHealthRecord = async (
    motherId: string,
    data: {
      heart_rate: number
      blood_pressure: string
      o2_saturation?: number
      stress_level?: number
    }
  ) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/health-monitoring`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ motherId, ...data }),
      })
      if (!response.ok) throw new Error('Failed to create health record')
      return await response.json()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Update a health monitoring record (only specific fields)
  const updateHealthRecord = async (
    id: string,
    data: {
      heart_rate?: number
      blood_pressure?: string
      o2_saturation?: number
      stress_level?: number
    }
  ) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/health-monitoring/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Failed to update health record')
      return await response.json()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Delete a health monitoring record
  const deleteHealthRecord = async (id: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/health-monitoring/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete health record')
      return await response.json()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    fetchHealthRecords,
    fetchHealthRecord,
    createHealthRecord,
    updateHealthRecord,
    deleteHealthRecord,
  }
}
