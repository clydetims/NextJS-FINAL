import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import { validateSignupData } from '@/lib/validations';
import { hashPassword, generateToken } from '@/lib/auth';

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input data
    const validation = validateSignupData(body);
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validation.errors 
        },
        { status: 400 }
      );
    }

    const { first_name, last_name, email, password } = validation.data;

    // Check if user already exists
    const existingUser = await sql`
      SELECT id FROM users WHERE email = ${email}
    `;

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const newUser = await sql`
      INSERT INTO users (first_name, last_name, email, password)
      VALUES (${first_name}, ${last_name}, ${email}, ${hashedPassword})
      RETURNING id, first_name, last_name, email, created_at
    `;

    const user = newUser[0];

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email
    });

    // Return success response
    return NextResponse.json(
      {
        message: 'User created successfully',
        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          createdAt: user.created_at
        },
        token
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);

    // Handle database constraint errors
    if (error.code === '23505') { // Unique violation
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}