import Wrapper from '@/components/Wrapper'
import React from 'react'
import { groq } from 'next-sanity'
import client from '@/lib/sanityclient'
import ProductImageCollage from '@/components/ProductImageCollage'
import { Circle } from 'lucide-react'

import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500'] })

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await client.fetch(groq`*[_type == "product" &&  slug.current == "${params.slug}" ] `)

  return (
    <main className={`${sora.className} flex h-full w-full justify-center pt-20`}>
      <Wrapper>
        <div className="h-full w-full">
          <div className="flex flex-col lp:flex-row lp:justify-around">
            <ProductImageCollage data={data} />
            <div className="flex flex-col gap-y-10 text-center items-center lp:items-start lp:text-left">
              <div>
                <h2 className="font-semibold text-xl lp:text-3xl mt-10 lp:mt-0">{data[0].productName} </h2>
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
                  <button className="shrink-0 lp:h-12 lp:w-12 rounded-full bg-gray-300 px-4 py-2 text-lg">-</button>
                  <p>2</p>
                  <button className="shrink-0 lp:h-12 lp:w-12 rounded-full bg-gray-300 px-4  py-2 text-lg">+</button>
                </div>
              </div>

              <div className="flex items-center gap-x-3">
                <button className="flex w-fit gap-x-2 border-2 border-b-black border-l-gray-600 border-r-black border-t-gray-600 bg-pri_black px-5 py-2 text-white">
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
          </div>

          <div className="flex flex-col px-5 lp:px-20 mt-20 lp:mt-0">
            <div className="relative flex items-center  lp:min-h-[200px]">
              <p className={`${sora.className} absolute -z-10 text-5xl font-black text-[#f2f3f7] lp:text-8xl  `}>
                Overview
              </p>
              <p className="text-xl font-semibold tracking-widest">Product Information</p>
            </div>
            <div className="h-[2px] w-full bg-gray-300"></div>
            <div className="flex flex-col gap-y-10 py-10">
              <div className="flex flex-col lp:flex-row gap-x-72">
                <p className="lp:min-w-[200px] text-sm font-bold tracking-wider text-gray-400">PRODUCT DETAILS</p>
                <p>{data[0].productDetails}</p>
              </div>
              <div className="flex flex-col lp:flex-row gap-x-72">
                <p className="lp:min-w-[200px] text-sm font-bold tracking-wider text-gray-400">PRODUCT CARE</p>
                <div className="flex flex-col gap-y-2">
                  {data[0].productCare.map((x: any) => (
                    <p className="flex items-center gap-x-2" key={x}>
                      <Circle height={10} width={10} />
                      {x}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default page
