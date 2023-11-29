'use client'
import { decrementCartProduct, incrementCartProduct } from '@/redux/features/cartReducer'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function CartCard({ prdt, data }: { prdt: any; data: any }) {

  const dispatch = useAppDispatch()
  const userObj = useUser()
  const cartPrdt = useAppSelector((state) => {
    return state.cart.items.find((item) => item._id === prdt._id)
  })


  const [isMutating, setIsMutating] = useState(false)

  const prdtData = data.find((obj: any) => prdt._id === obj.product_id)

  const handleIncrement = async (e: any) => {
    e.preventDefault()
    try {
      setIsMutating(true)
      dispatch(incrementCartProduct(prdt._id))
      const res = await fetch('/api/updateCart', {
        method: 'POST',
        body: JSON.stringify({
          user_id: userObj?.user?.id,
          product_id: prdtData.product_id,
          product_qty: 0,
          isIncrement: true,
        }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        setIsMutating(false)

        toast.error('Something went Wrong. Try Again')
        return
      }
      setIsMutating(false)
    } catch (error) {
      console.log((error as { message: string }).message)
      setIsMutating(false)
    }
  }

  const handleDecrement = async (e: any) => {
    e.preventDefault()
    try {
      setIsMutating(true)

      dispatch(decrementCartProduct(prdt._id))
      const res = await fetch('/api/updateCart', {
        method: 'POST',
        body: JSON.stringify({
          user_id: userObj?.user?.id,
          product_id: prdtData.product_id,
          product_qty: 0,
          isIncrement: false,
        }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        toast.error('Something went Wrong. Try Again')
        setIsMutating(false)
        return
      }
      setIsMutating(false)
    } catch (error) {
      console.log((error as { message: string }).message)
      setIsMutating(false)
    }
  }

  return (
    <>
      {cartPrdt && cartPrdt.quantity > 0 && (
        <Link
          href={`/products/${prdt.slug}`}
          className={`flex flex-col tablet:flex-row gap-x-5 rounded-xl shadow-md transition-all duration-100 hover:scale-105 max-w-[200px] tablet:max-w-full`}
        >
          <div className="h-full w-[200px] tablet:w-[300px]">
            <Image
              src={prdt.imgUrl}
              alt="will add after"
              width={200}
              height={300}
              className="h-full w-full rounded-xl"
            />
          </div>
          <div className="flex w-full flex-col justify-between p-3 gap-y-3">
            <div>
              <h5 className="text-lg font-semibold">{prdt.productName}</h5>
              <p className="text-zinc-500">{prdt.category}</p>
            </div>

            <div className="flex flex-col gap-y-4 tablet:flex-row tablet:items-center justify-between">
              <div className="flex items-center gap-x-5">
                <button
                  disabled={isMutating}
                  onClick={handleDecrement}
                  className={`z-10  shrink h-8 w-8  rounded-full px-2 text-lg
                  ${
                    isMutating ? 'bg-gray-400 ' : 'bg-gray-300  active:bg-zinc-400'
                  } transition-all duration-100 lp:h-8 lp:w-8`}
                >
                  -
                </button>
                <p className="w-8">{cartPrdt && cartPrdt.quantity}</p>
                <button
                  disabled={isMutating}
                  onClick={handleIncrement}
                  className={`shrink-0 rounded-full  px-2 text-lg
                  ${
                    isMutating ? 'bg-gray-400 ' : 'bg-gray-300  active:bg-zinc-400'
                  } transition-all duration-100 h-8 w-8 lp:h-8 lp:w-8`}
                >
                  +
                </button>
              </div>
              <p className="font-bold">${cartPrdt ? cartPrdt?.totalPrice : 0}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default CartCard
