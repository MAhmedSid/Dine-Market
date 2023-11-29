import CartCard from '@/components/CartCard'
import CheckoutComp from '@/components/CheckoutComp'
import Wrapper from '@/components/Wrapper'
import { cartTable, db } from '@/lib/dbClient'
import client from '@/lib/sanityclient'
import { auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { ShoppingBag, ShoppingCart } from 'lucide-react'
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
  const productData = products.map((prdt:any)=>{
    return {
      ...prdt,
      quantity: data.find((item:any)=>item.product_id == prdt._id)?.product_qty,
    }
  })
  return (
    
    <main className="flex h-full min-h-[50vh] w-full justify-center">
      <Wrapper>
      {products.length !== 0 ?  
        <section className="flex flex-col tablet:flex-row h-full w-full justify-between gap-x-10 mt-20 px-4">
          <div className="w-full flex flex-col gap-y-10 ">
            <h2 className="text-2xl tablet:text-3xl font-bold">Shopping Cart</h2>
            <div className="w-full max-w-[700px] flex flex-col items-center gap-y-4">
              {/* CART CARDS  */}
              {products && products.map((prdt: any) => {
                  return <CartCard key={prdt.slug} prdt={prdt} data={data} />
                })}
            </div> 
          </div>
          <div className='w-full max-w-[400px]'>
            <CheckoutComp prdtData={productData} />
          </div>
        </section>
      :
      <section className='w-full min-h-[50vh] flex flex-col justify-center items-center gap-y-6'>
        <ShoppingCart className='w-10 h-10 tablet:h-20 tablet:w-20' />
        <p className='font-semibold text-xl lmb:text-2xl tablet:text-3xl'>Your Shopping cart is empty!</p>
      </section>
      }
      </Wrapper>
    </main>
    
  )
}
