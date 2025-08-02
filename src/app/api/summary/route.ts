


import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
    try {
        const result = await pool.query(`
            SELECT
                COALESCE(SUM(d.amount), 0)::float AS total_donations,
                COALESCE(SUM(e.amount), 0)::float AS total_expenses,
                (COALESCE(SUM(d.amount), 0) - COALESCE(SUM(e.amount), 0)):: float AS net_amount
            FROM donations d
            FULL OUTER JOIN expenses e ON TRUE;
        `);

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching summary:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}