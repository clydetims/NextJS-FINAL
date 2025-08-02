

import { NextResponse } from 'next/server'
import { v4 as uuidv4  } from 'uuid'
import pool from '@/lib/db'
import { verifyToken } from '@/utils/jwt';



export async function POST(req: Request){
    const token = req.headers.get('authorization')?.split(' ')[1];
    if (!token) return NextResponse.json({ error: 'No Token'}, { status: 401 });

    const decoded = verifyToken(token);
    if(!decoded) return NextResponse.json({ error: 'Invalid Token'}, { status: 403 });

    const user_id = decoded.user_id;
    const { source_name, description, amount, category, payment_method } = await req.json();

    if(!amount || !category || !payment_method){
        return NextResponse.json({ error: 'Missing field' }, { status: 400 })
    }

    const donate_date = new Date();

    try {
        const client = await pool.connect()
        await client.query(`
            INSERT INTO donations (
                donation_id, user_id, source_name, description, amount, category, payment_method, created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `,[uuidv4(),user_id,source_name, description, amount, category,payment_method, donate_date]);

        client.release()
        return NextResponse.json({ message: 'Donation recorded' }, { status: 201 });
    } catch (err){

        return NextResponse.json({ error: err || 'Database error' }, { status: 500 });
    }
    
    
}