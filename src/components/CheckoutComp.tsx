'use client'
import getStripe from '@/utils/get-stripejs'
import { useUser } from '@clerk/nextjs'
import React from 'react'

function CheckoutComp({ prdtData }: { prdtData: any }) {
  const { isLoaded, isSignedIn, user } = useUser()

  const totalQty = prdtData.reduce((sum: number, curVal: any) => sum + curVal.quantity, 0)
  const totalAmount = prdtData.reduce((sum: number, curVal: any) => sum + curVal.productPrice * curVal.quantity, 0)

  const handleCheckout = async (e: React.MouseEvent) => {
    const products = prdtData
    try {
      const response = await fetch('/api/checkout_session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products, user_id: user?.id }),
        cache: 'no-store',
      })

      if (response.status === 200) {
        const data = await response.json()
        const stripe = await getStripe()
        if (stripe === null) {
          console.log('stripe is null')
          return
        }
        stripe.redirectToCheckout({ sessionId: data.session.id })
      }
    } catch (error) {
      console.log((error as { message: string }).message)
    }
  }

  return (
    <section className='flex flex-col gap-y-5 shadow-lg p-10 rounded-xl'>
      <h2 className="text-3xl font-bold">Order Summary</h2>

      <div className="flex flex-col gap-y-5    ">
        <div className="flex gap-x-5">
          <p className='text-lg font-semibold'>Quantity:</p>
          <p className='text-lg font-medium'>
            {totalQty} {totalQty > 1 ? 'items' : 'item'}
          </p>
        </div>
        <div className="flex gap-x-5">
          <p className='text-lg font-semibold'>Total Amount:</p>
          <p className='text-lg font-medium'>${totalAmount}</p>
        </div>
      </div>
      <button className="bg-pri_black text-white hover:bg-green-700 transition-all duration-100 px-4 py-2 outline" onClick={handleCheckout}>
        Process to Checkout
      </button>
    </section>
  )
}

export default CheckoutComp
