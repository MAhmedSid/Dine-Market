'use client'
import getStripe from '@/utils/get-stripejs'
import { useUser } from '@clerk/nextjs';
import React from 'react'

function CheckoutComp({prdtData}:{prdtData:any}) {
  const { isLoaded, isSignedIn, user } = useUser();
  const handleCheckout = async (e: React.MouseEvent) => {
    const products = prdtData;
    try {
      const response = await fetch('/api/checkout_session', {
        method: 'POST',
        headers: {"Content-Type":"application/json"} ,
        body: JSON.stringify({products, user_id: user?.id}),
        cache: 'no-store',
      })

      if (response.status === 200) {
        const data = await response.json()
        console.log('DATa', data.session)
        const stripe = await getStripe()
        if(stripe === null) {
          console.log('stripe is null')
          return;
        }
        stripe.redirectToCheckout({ sessionId: data.session.id });
      }
    } catch (error) {
      console.log((error as { message: string }).message)
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-bold">Check out Details</h2>
      <button className="" onClick={handleCheckout}>
        Checkout
      </button>
    </section>
  )
}

export default CheckoutComp
