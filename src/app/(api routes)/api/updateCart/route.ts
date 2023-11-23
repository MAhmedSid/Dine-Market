import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { Cart, cartTable, db } from '@/lib/dbClient'



export async function POST(req: NextRequest) {
  const body = await req.json()
  try {
    const qty_arr = await db
    .select({ product_qty: cartTable.product_qty })
    .from(cartTable)
    .where(eq(cartTable.user_id, body.user_id))
    .execute()
    const qty = qty_arr[0]?.product_qty ? qty_arr[0]?.product_qty : 0

    console.log("QTY FROM Update Cart",qty);

    const data = await db
    .insert(cartTable)
    .values({user_id:body.user_id,product_id:body.product_id,product_qty:body.product_qty})
    .onConflictDoUpdate({ target: [cartTable.user_id,cartTable.product_id], set: { product_qty: body.isIncrement ? qty + 1 : qty - 1 } })
    .execute()
    
    return NextResponse.json(
      JSON.stringify({
        message: 'Data Added',
        data,
      })
    )
  } catch (error: any) {
    console.log(error)
    NextResponse.json({ message: 'Something went wrong' })
  }
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  try {
    const qty_arr = await db
      .select({ product_qty: cartTable.product_qty })
      .from(cartTable)
      .where(eq(cartTable.user_id, body.user_id))
      .execute()
    const qty = qty_arr[0]?.product_qty ? qty_arr[0]?.product_qty : 0

    const data = await db
    .insert(cartTable)
    .values(body)
    .onConflictDoUpdate({ target: [cartTable.user_id,cartTable.product_id], set: { product_qty: qty + body.product_qty } })
    .execute()
    
    return NextResponse.json(
      JSON.stringify({
        message: 'Data Added',
        data,
      })
    )
  } catch (error: any) {
    console.log(error)
    NextResponse.json({ message: 'Something went wrong' })
  }
}
