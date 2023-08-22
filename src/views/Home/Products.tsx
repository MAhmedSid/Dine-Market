import HomeCarousal from '@/components/HomeCarousal'
import Wrapper from '@/components/Wrapper'
import React from 'react'


const Products = () => {
  return (
    <section className="flex h-full w-full justify-center  text-center tablet:text-left px-5 tablet:px-0  pt-24 tablet:pt-20">
      <Wrapper>
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-5">
          <h3 className="text-sm font-bold tracking-wider text-blue-600">PRODUCTS</h3>
          <h4 className="text-4xl font-bold text-pri_black">Check What We Have</h4>
          <div className='w-full max-w-[400px] tablet:max-w-none h-[500px] tablet:h-[800px]  '>
          <HomeCarousal/>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Products
