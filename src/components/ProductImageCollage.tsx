'use client'
import React, { useState } from 'react'
import { urlFor } from '@/components/ProductCard'
import Image from 'next/image'

const ProductImageCollage = (data: any) => {
  const [index, setIndex] = useState(0)

  const productImages = data.data[0].productImages

  return (
    <div className=" flex justify-center px-2   gap-x-4 lp:gap-x-4 gap-y-2 lp:gap-y-0">


      <div className='flex flex-col gap-y-1'>
      {data &&
        productImages.map((item: any, indx: number) => {
          const idxNum = indx
          return (
            <Image
            src={urlFor(item.asset._ref).width(500).height(500).url()}
            width={600}
            height={600}
            key={item.asset._ref}
            alt={item.alt}
            className='min-h-[40px] min-w-[40px] max-h-[100px] max-w-[100px]  lp:h-28 lp:w-28'
            onMouseEnter={() => setIndex(idxNum)}
            />
            )
          })}
          </div>
            <Image
              src={urlFor(productImages[index].asset._ref).width(500).height(600).url()}
              alt="ssh"
              width={500}
              height={600}
              className="min-h-[208px] min-w-[176px] max-h-[600px] max-w-[566px]"
            />
    </div>
  )
}

export default ProductImageCollage
