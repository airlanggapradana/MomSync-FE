import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Handle CORS preflight requests
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

// GET all health monitoring records for a mother
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const motherId = searchParams.get('motherId')

    if (!motherId) {
      return NextResponse.json(
        { error: 'motherId is required' },
        { status: 400 }
      )
    }

    const healthSigns = await prisma.healthSignsMonitoring.findMany({
      where: { motherId },
      orderBy: { created_at: 'desc' },
    })

    return NextResponse.json(healthSigns, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching health monitoring:', error)
    return NextResponse.json(
      { error: 'Failed to fetch health monitoring records' },
      { status: 500 }
    )
  }
}

// POST a new health monitoring record
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { motherId, heart_rate, blood_pressure, o2_saturation, stress_level } = body

    // Validate required fields
    if (!motherId || heart_rate === undefined || !blood_pressure) {
      return NextResponse.json(
        { error: 'motherId, heart_rate, and blood_pressure are required' },
        { status: 400 }
      )
    }

    const newHealthRecord = await prisma.healthSignsMonitoring.create({
      data: {
        motherId,
        heart_rate: Number(heart_rate),
        blood_pressure: String(blood_pressure),
        o2_saturation: o2_saturation ? Number(o2_saturation) : 0,
        stress_level: stress_level ? Number(stress_level) : 0,
      },
    })

    return NextResponse.json(newHealthRecord, { 
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating health monitoring record:', error)
    return NextResponse.json(
      { error: 'Failed to create health monitoring record' },
      { status: 500 }
    )
  }
}
