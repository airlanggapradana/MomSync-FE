import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface Params {
  id: string
}

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

// GET a specific health monitoring record
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { error: 'Record ID is required' },
        { status: 400 }
      )
    }

    const healthRecord = await prisma.healthSignsMonitoring.findUnique({
      where: { id },
    })

    if (!healthRecord) {
      return NextResponse.json(
        { error: 'Health monitoring record not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(healthRecord, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching health monitoring record:', error)
    return NextResponse.json(
      { error: 'Failed to fetch health monitoring record' },
      { status: 500 }
    )
  }
}

// PUT/PATCH to update a specific health monitoring record
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { id } = await params
    const body = await req.json()

    if (!id) {
      return NextResponse.json(
        { error: 'Record ID is required' },
        { status: 400 }
      )
    }

    // Only allow updating specific fields
    const allowedFields = ['heart_rate', 'blood_pressure', 'o2_saturation', 'stress_level']
    const updateData: Record<string, any> = {}

    // Filter only allowed fields from the request body
    for (const field of allowedFields) {
      if (field in body) {
        if (field === 'blood_pressure') {
          updateData[field] = String(body[field])
        } else {
          updateData[field] = Number(body[field])
        }
      }
    }

    // Ensure at least one field is being updated
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: 'At least one field must be updated' },
        { status: 400 }
      )
    }

    const updatedRecord = await prisma.healthSignsMonitoring.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json(updatedRecord, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Health monitoring record not found' },
        { status: 404 }
      )
    }
    console.error('Error updating health monitoring record:', error)
    return NextResponse.json(
      { error: 'Failed to update health monitoring record' },
      { status: 500 }
    )
  }
}

// DELETE a health monitoring record
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { error: 'Record ID is required' },
        { status: 400 }
      )
    }

    await prisma.healthSignsMonitoring.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: 'Health monitoring record deleted successfully' },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Health monitoring record not found' },
        { status: 404 }
      )
    }
    console.error('Error deleting health monitoring record:', error)
    return NextResponse.json(
      { error: 'Failed to delete health monitoring record' },
      { status: 500 }
    )
  }
}
