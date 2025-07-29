import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Parse JSON body from the request
    const body = await request.json()

    // Destructure values from the body
    const { email, password } = body

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // TODO: Add your login logic (e.g., check DB, hash password, etc.)
    console.log('Logging in:', email, password)

    // Example success response
    return NextResponse.json({ success: true, message: 'Logged in successfully' })

  } catch (error) {
    console.error('Error in login route:', error)
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
