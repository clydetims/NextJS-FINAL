import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid'
import pool from '@/lib/db'
import { hashPassword } from "@/utils/hash";
import { generateToken } from '@/utils/jwt'

export async function POST(req: Request) {
    console.log('Hello')
    try{
        const body = await req.json()
        const { first_name, last_name, email, password } = body
        
        console.log('check user acc')
        if (!first_name || !last_name || !email || !password) {
            return NextResponse.json({
                error: 'Missing required fields'
            }, { status: 400 })
        }

        
        // Check if user exists
        const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        if(existing.rows.length > 0) {
            return NextResponse.json({ 
                error: 'Email already registered'
            }, {status: 409})
        }
        
        const hashedPassword = await hashPassword(password)
        const user_id = uuidv4()
        const created_at = new Date()
        const role = 'guest'

        await pool.query(
            `INSERT INTO users (user_id, first_name, last_name, email, password, role, created_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
             [user_id, first_name, last_name, email, hashedPassword, role, created_at]
        )

        const token = generateToken({ user_id, email, role })

        return NextResponse.json({
            mesasge: 'User registered successfully',
            token,
            user: {
                user_id,
                first_name,
                last_name,
                email,
                role,
                created_at
            },

        })

    } catch (error: any) {
        console.error(error)
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 })
    }
}




