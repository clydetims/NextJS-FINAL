


import { v4 as uuidv4 } from 'uuid'
import { verifyToken } from '@/utils/jwt'
import pool from '@/lib/db'
import { NextResponse } from 'next/server'


export async function POST(req: Request){
    const token = req.headers.get('authorization')?.split(' ')[1];

    if(!token){
        return NextResponse.json({ error: 'No Token' }, { status: 403 })
    }

    const decoded = verifyToken(token);
    if(!decoded){
        return NextResponse.json({ error: 'Invalid Token'}, { status: 403 })
    }
    
    const recorded_by = decoded.user_id

    const { description, amount, category } = await req.json();

    
    if(!description || !amount || !category){
        return NextResponse.json({ error: 'Missing fields'}, {status:400})
    }
    
    const recorded_at = new Date();

    try {
        const client = await pool.connect();
        await client.query(
            `INSERT INTO expenses (expense_id, recorded_by, description, amount, category, recorded_at) 
            VALUES($1, $2, $3, $4, $5, $6)`,
            [uuidv4(), recorded_by, description, amount, category, recorded_at]
        );

        client.release();
        return NextResponse.json({ message: 'Expense recorded'}, { status: 201})
    } catch(err) {
        console.log(err)
        return NextResponse.json({ error: 'Database error'}, {status: 500});
    }

}

 