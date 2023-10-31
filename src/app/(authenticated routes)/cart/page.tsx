import CartCard from '@/components/CartCard'
import Wrapper from '@/components/Wrapper'
import { cartTable, db } from '@/lib/dbClient'
import client from '@/lib/sanityclient'
import { auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { groq } from 'next-sanity'
import React from 'react'

export default async function page() {
  const { userId } = auth()
  const productIds = []

  const data = await db.select().from(cartTable).where(eq(cartTable.user_id, userId!)).execute()
  for (let item of data) {
    productIds.push(item.product_id)
  }
  const products = await client.fetch(groq`*[_type == "product" && _id in [${productIds
    .map((id) => `"${id}"`)
    .join(',')}] ]{
  _id,
  productName,
  productPrice,
  "imgUrl":   mainImg.asset->url,
  "category": productCategory->productSubCategory,
  "slug": slug.current
}`)
  return (
    <main className="flex h-full min-h-[50vh] w-full justify-center">
      <Wrapper>
        <section className="flex h-full w-full justify-between gap-x-4">
          <div className="">
            <h2 className="text-3xl font-bold">Cart Items</h2>
            <div className="flex flex-col gap-y-4">
              {/* CART CARDS  */}
              {products &&
                products.map((prdt: any) => {
                  return <CartCard key={prdt.slug} prdt={prdt} data={data} />
                })}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Check out Details</h2>
          </div>
        </section>
      </Wrapper>
    </main>
  )
}
