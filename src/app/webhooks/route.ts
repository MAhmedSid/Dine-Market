import { cartTable, db } from '@/lib/dbClient';
import getStripe from '@/utils/get-stripejs';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { NextRequest, NextResponse } from 'next/server'
// import Stripe from 'stripe';
const Stripe = require('stripe');


export async function POST(req: NextRequest) {

  const body = await req.json()
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const paymentIntent = await stripe.paymentIntents.retrieve(body.data.object.payment_intent as string);


try {
 if(body.type === 'checkout.session.completed'){
   const res = await db.delete(cartTable).where(eq(cartTable.user_id, paymentIntent.metadata.user_id)).execute()
   console.log("RES",res);
 }
  console.log("payment intent metadata", paymentIntent.metadata);
  console.log("BODY EVENT",body);

    return NextResponse.json(
      JSON.stringify({
        message: 'Req completed',
      })
    )
  } catch (error: any) {
    console.log(error)
    NextResponse.json({ message: 'Something Went Wrong' })
  }
}
