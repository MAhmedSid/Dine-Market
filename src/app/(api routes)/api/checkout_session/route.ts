import { metadata } from './../../../layout';
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
  
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const body = await req.json();

    const origin = req.headers.get('origin');
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        success_url: `${origin}/orderdone`,
        cancel_url: `${origin}/ordercancelled`,
        submit_type:'pay',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          {shipping_rate:'shr_1OFGLWHydXzpBiHeloq3hBlG'}
        ],
        line_items: body.products.map((item:any)=>{
          return {
            price_data: {
              currency: 'usd',
              product_data:{
                name: item.productName,
                metadata:{
                  id: item._id
                }
              },
              unit_amount: item.productPrice * 100,
            },
            quantity: item.quantity,
            
          }
        }),
        payment_intent_data:{
          metadata:{
            user_id: body.user_id
          }
        }
      });
      return NextResponse.json({ session });

    } catch (err) {
      console.log("err",(err as any).message);
     return  NextResponse.json({ error: (err as any).message });
    }
}