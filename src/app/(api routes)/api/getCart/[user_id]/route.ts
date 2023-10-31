import { cartTable, db } from '@/lib/dbClient'
import { eq, sql } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, { params }: { params: { user_id: string } }) {
  try {
    const data = await db.select().from(cartTable).where(eq(cartTable.user_id, params.user_id)).execute()
    return NextResponse.json({
      message: 'Data Added',
      data,
    })
  } catch (error: any) {
    console.log(error)
    NextResponse.json({ message: 'Something went wrong' })
  }
}

export async function POST(req: NextRequest, { params }: { params: { user_id: string } }) {
  try {
    const data = await db
      .select({ totalQty: sql<number>`sum(product_qty)` })
      .from(cartTable)
      .where(eq(cartTable.user_id, params.user_id))
      .execute()

    return NextResponse.json({
      message: 'Data Added',
      data,
    })
  } catch (error: any) {
    console.log(error)
    NextResponse.json({ message: 'Something went wrong' })
  }
}
