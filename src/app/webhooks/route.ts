import getStripe from '@/utils/get-stripejs';
import { NextRequest, NextResponse } from 'next/server'
// import Stripe from 'stripe';
const Stripe = require('stripe');


export async function POST(req: NextRequest) {

  // const stripe = await getStripe();
  // if ( stripe == null ) return NextResponse.json({ message: 'stripe is null' })
  const body = await req.json()
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  await stripe.checkout.sessions.listLineItems(
    body.data.object.id,
    { limit: 5 },
    function(err:any, lineItems:any) {
      console.log("LINE ITEMS FROM CALLBACK", lineItems);
      const items: any[] = lineItems.data;

      

    }
  )

try {
   console.log("WEBHOOK Runs");
   console.log("BODY EVENT",body);

    return NextResponse.json(
      JSON.stringify({
        message: 'Data Added',
      })
    )
  } catch (error: any) {
    console.log(error)
    NextResponse.json({ message: 'Something Went Wrong' })
  }
}
