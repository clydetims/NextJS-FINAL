

import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
    try {
        const result = await pool.query(`
            SELECT
                'donation' as type,
                source_name AS description,
                amount::float as amount,
                category,
                TO_CHAR(created_at, 'YYYY-MM-DD') as date,
                created_at as sort_date
            FROM donations

            UNION ALL

            SELECT
                'expense' as type,
                description,
                amount::float as amount,
                category,
                TO_CHAR(recorded_at, 'YYYY-MM-DD') as date,
                recorded_at as sort_date
            FROM expenses

            ORDER BY sort_date DESC
            LIMIT 10
        `);

        return NextResponse.json(result.rows)
    } catch (err) {
        return NextResponse.json({ error: err||'Internal Server Error'}, { status: 500 })
    }
}