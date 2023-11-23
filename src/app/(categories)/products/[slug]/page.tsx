import Wrapper from '@/components/Wrapper'
import React from 'react'
import { groq } from 'next-sanity'
import client from '@/lib/sanityclient'
import ProductImageCollage from '@/components/ProductImageCollage'
import { Circle } from 'lucide-react'

import { Sora } from 'next/font/google'
import AddInCartComp from '@/components/AddInCartComp'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500'] })

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await client.fetch(groq`*[_type == "product" &&  slug.current == "${params.slug}" ] `)

  return (
    <main className={`${sora.className} flex h-full w-full justify-center pt-20`}>
      <Wrapper>
        <div className="h-full w-full">
          <div className="flex flex-col lp:flex-row lp:justify-around">
            <ProductImageCollage data={data} />
            <AddInCartComp data={data} />
          </div>

          <div className="mt-20 flex flex-col px-5 lp:mt-0 lp:px-20">
            <div className="relative flex items-center  lp:min-h-[200px]">
              <p className={`${sora.className} absolute -z-10 text-5xl font-black text-[#f2f3f7] lp:text-8xl  `}>
                Overview
              </p>
              <p className="text-xl font-semibold tracking-widest">Product Information</p>
            </div>
            <div className="h-[2px] w-full bg-gray-300"></div>
            <div className="flex flex-col gap-y-10 py-10">
              <div className="flex flex-col gap-x-72 lp:flex-row">
                <p className="text-sm font-bold tracking-wider text-gray-400 lp:min-w-[200px]">PRODUCT DETAILS</p>
                <p>{data[0].productDetails}</p>
              </div>
              <div className="flex flex-col gap-x-72 lp:flex-row">
                <p className="text-sm font-bold tracking-wider text-gray-400 lp:min-w-[200px]">PRODUCT CARE</p>
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
