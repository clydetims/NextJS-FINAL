import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { comparedPassword } from '@/utils/hash'
import { generateToken } from '@/utils/jwt'

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        //Check if user exists
        const userRes = await pool.query(
            'SELECT * FROM users WHERE email = $1', [email]
        );

        if (userRes.rowCount === 0) {
            return NextResponse.json(
                {error: "Invalid email or password" },
                { status: 401 }
            );
        }

        const user = userRes.rows[0];

        // Compare password
        const isValid = await comparedPassword(password, user.password);
        if(isValid) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Generate Token
        const token = generateToken({
            id: user.id,
            email: user.email,
            role: user.role,
        });

        // Set cooki for session
        const response = NextResponse.json(
            { message: "Login successful", token},
            { status: 200 }
        );

        response.cookies.set("session_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60*60*24, // 1 day
        });

        return response;

    } catch (error) {
        console.error("Login error: ", error);
        return NextResponse.json({
            error: "Server error"
        }, {status: 500});
    }
}

