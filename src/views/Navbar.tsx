'use client'
import Wrapper from '@/components/Wrapper'
import React, { useEffect, useState } from 'react'

import logo from '/public/images/logo.png'
import Image from 'next/image'

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import { Fade as Hamburger } from 'hamburger-react'

import Link from 'next/link'
import { Sora } from 'next/font/google'

import { UserButton, useUser } from '@clerk/nextjs'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setCart } from '@/redux/features/cartReducer'
import { groq } from 'next-sanity'
import client from '@/lib/sanityclient'

const sora = Sora({ subsets: ['latin'] })

const Navbar = () => {
  const dispatch = useAppDispatch()
  const cartVal = useAppSelector((state) => {
    return state.cart.totalQuantity
  })
  const userObj = useUser()
  const [isOpen, setIsOpen] = useState(false)
  let effectRender = false

  useEffect(() => {
    ;(async function () {
      if (effectRender) return
      if (userObj.isSignedIn === false) {
        return
      }
      //GET req will fetch cart on this api path.
      const res = await fetch(`/api/getCart/${userObj.user?.id}`, { cache: 'no-cache', method: 'GET' })
      if (res.ok === true) {
        const body = await res.json()
        const data: any[] = body.data
        const totalQty: number = data?.reduce((preval: any, currval: any) => preval.product_qty + currval.product_qty)

        const productIds = []

        for (let item of body.data) {
          productIds.push(item.product_id)
        }
        const prdtData: any[] = await client.fetch(groq`*[_type == "product" && _id in [${productIds
          .map((id) => `"${id}"`)
          .join(',')}] ]{
        _id,
        "name":productName,
        "price":productPrice,
        "image":   mainImg.asset->url,
        "subcat": productCategory->productSubCategory,
      }`)

        const prdtData_with_qty = prdtData.map((prdt) => {
          return {
            ...prdt,
            quantity: body.data.find((item: any) => item.product_id == prdt._id).product_qty,
            totalPrice: body.data.find((item: any) => item.product_id == prdt._id).product_qty * prdt.price,
          }
        })

        dispatch(setCart({ totalQty, items: prdtData_with_qty }))

        effectRender = true
      }
    })()
  }, [userObj.isSignedIn])

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <header className={` flex h-full w-full justify-center py-7 ${sora.className}`}>
      <Wrapper>
        <div className="flex h-auto w-full items-center justify-between px-5 lp:px-5">
          <Link href={'/'}>
            <Image src={logo} alt="Dine Market logo" className="h-auto w-fit min-w-[150px] " />
          </Link>

          <nav className="hidden gap-x-10 lp:flex">
            <Link href={'/women'}>Female</Link>
            <Link href={'/men'}>Male</Link>
            <Link href={'/kids'}>Kids</Link>
            <Link href={'/products'}>All Products</Link>
          </nav>

          <div className="border-gray- hidden min-w-[400px] items-center justify-center gap-x-3 rounded-full border px-2 py-1 lp:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 612.01 612.01"
            >
              <path
                d="M606.209 578.714L448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 00.018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
                data-original="#000000"
              ></path>
            </svg>
            <input type="text" placeholder="What you looking for" className="w-full focus:outline-transparent " />
          </div>

          <Link
            href={'/cart'}
            className="relative hidden items-center justify-center  rounded-full bg-[#f1f1f1] p-3 transition-all duration-150 hover:scale-110 lp:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 511.997 511.997"
            >
              <path
                d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zm102.54-336.113a19.128 19.128 0 00-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 00-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0018.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 00-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zm-257.615 65.762c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z"
                className="hovered-path custom-cursor-on-hover"
                data-original="#000000"
              ></path>
            </svg>
            <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              {cartVal == null ? '0' : cartVal}
            </div>
          </Link>

          {userObj.isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              href="/sign-in"
              className=" my-1 rounded-full bg-pri_black bg-opacity-10 px-4 py-2 text-pri_black transition-all  duration-100 hover:bg-transparent"
            >
              Sign In
            </Link>
          )}

          <div className="z-[99999] block h-fit w-fit lp:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} duration={0.5} distance="sm" easing="ease-in" rounded />
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          lockBackgroundScroll={true}
          size={'100vw'}
          className="block  max-h-[100vh] lp:hidden"
        >
          <div className="h-full w-full ">
            <div className="flex h-[100px] items-center justify-start pl-7">
              <Image src={logo} alt="Dine Market logo" className="h-auto w-fit min-w-[150px] " />
            </div>
            <div className="flex flex-col items-center justify-center pt-40">
              <div className=" relative   flex items-center justify-center rounded-full bg-[#f1f1f1] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 511.997 511.997"
                >
                  <path
                    d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zm102.54-336.113a19.128 19.128 0 00-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 00-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0018.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 00-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zm-257.615 65.762c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z"
                    className="hovered-path custom-cursor-on-hover"
                    data-original="#000000"
                  ></path>
                </svg>
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                  {cartVal == null ? '0' : cartVal}
                </div>
              </div>
              <nav className="flex flex-col items-center justify-center gap-y-5 pt-10">
                <Link onClick={toggleDrawer} href={'/'}>
                  Home
                </Link>
                <Link onClick={toggleDrawer} href={'/women'}>
                  Female
                </Link>
                <Link onClick={toggleDrawer} href={'/men'}>
                  Male
                </Link>
                <Link onClick={toggleDrawer} href={'/kids'}>
                  Kids
                </Link>
                <Link onClick={toggleDrawer} href={'/products'}>
                  All Products
                </Link>
              </nav>
            </div>
          </div>
        </Drawer>
      </Wrapper>
    </header>
  )
}

export default Navbar
