'use client'
import { addToCart } from '@/redux/features/cartReducer'
import { useAppDispatch } from '@/redux/store'
import { useUser } from '@clerk/nextjs'
import { Sora } from 'next/font/google'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500'] })

function AddInCartComp({ data }: { data: any }) {
  const dispatch = useAppDispatch()
  const user = useUser()
  const [quantity, setQuantity] = useState(0)

  const handleAddCart = async () => {
    try {
      if (user.isSignedIn == false || user.user?.id == undefined) {
        toast.error('Please Sign In to make cart')
        return
      }
      const res = await fetch('/api/updateCart', {
        method: 'PUT',
        body: JSON.stringify({ user_id: user.user?.id, product_id: data[0]._id, product_qty: quantity }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (res.ok) {
        toast.success('Item added to cart')
        dispatch(addToCart({ product: data[0], quantity }))
        setQuantity(0)
      }
    } catch (error) {
      console.log((error as { message: string }).message)
    }
  }

  return (
    <div className="flex flex-col items-center gap-y-10 text-center lp:items-start lp:text-left">
      <div>
        <h2 className="mt-10 text-xl font-semibold lp:mt-0 lp:text-3xl">{data[0].productName} </h2>
        <h3 className="font-bold text-gray-400 lp:text-xl">{data[0].productSubCategory}</h3>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="text-xs font-semibold tracking-wider">SELECT SIZE</p>
        <div className="flex gap-x-5">
          <button className="rounded-full bg-white px-2 py-2 font-bold text-gray-600 hover:shadow-xl lp:text-sm">
            XS
          </button>
          <button className="rounded-full bg-white px-2 py-2 font-bold text-gray-600 hover:shadow-xl lp:text-sm">
            S
          </button>
          <button className="rounded-full bg-white px-2 py-2 font-bold text-gray-600 hover:shadow-xl lp:text-sm">
            M
          </button>
          <button className="rounded-full bg-white px-2 py-2 font-bold text-gray-600 hover:shadow-xl lp:text-sm">
            L
          </button>
          <button className="rounded-full bg-white px-2 py-2 font-bold text-gray-600 hover:shadow-xl lp:text-sm">
            XL
          </button>
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <p className="font-semibold tracking-wider">Quantity:</p>
        <div className="flex items-center gap-x-6">
          <button
            onClick={() => {
              setQuantity((prev) => (prev > 0 ? prev - 1 : 0))
            }}
            className="shrink-0 rounded-full bg-gray-300 px-4 py-2 text-lg lp:h-12 lp:w-12"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="shrink-0 rounded-full bg-gray-300 px-4 py-2 text-lg  lp:h-12 lp:w-12"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <button
          onClick={handleAddCart}
          className="flex w-fit gap-x-2 border-2 border-b-black border-l-gray-600 border-r-black border-t-gray-600 bg-pri_black px-5 py-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-white"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 511.997 511.997"
          >
            <path
              d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zm102.54-336.113a19.128 19.128 0 00-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 00-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0018.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 00-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zm-257.615 65.762c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z"
              className="hovered-path custom-cursor-on-hover"
              data-original="#ffffff"
            ></path>
          </svg>
          <p className={`${sora.className} font-medium `}>Add to Cart</p>
        </button>
        <p className="text-xl font-bold tracking-wider">${data[0].productPrice}.00</p>
      </div>
    </div>
  )
}

export default AddInCartComp
