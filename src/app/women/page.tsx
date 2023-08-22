import Wrapper from '@/components/Wrapper'
import React from 'react'
import { groq } from 'next-sanity'
import client from '@/lib/sanityclient'
import ProductCard from '@/components/ProductCard'
import { ISanityProduct } from '../../../interfaces'

const page = async () => {
  const data = await client.fetch(groq`*[_type == "product" && productCategory->productSubCategory == "women"]`)


  return (
    <main className="flex h-full w-full justify-center pt-20">
      <Wrapper>
        <div className="grid h-full w-full grid-cols-1 items-center gap-x-10 gap-y-20 lp:grid-cols-4">
          {data.map((item: ISanityProduct) => {
            return (
                    <ProductCard
                    key={item.productName}
                    title={item.productName}
                    price={item.productPrice}
                    subCat={item.productSubCategory}
                    imgAlt="ssh"
                    imgSrc={item.mainImg.asset ? item.mainImg.asset._ref : "Img not found."}
                    slug={item.slug.current}
                    />
            )
          })}
        </div>
      </Wrapper>
    </main>
  )
}

export default page
