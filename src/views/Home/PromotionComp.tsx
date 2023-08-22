import Wrapper from '@/components/Wrapper'
import React from 'react'

import event1 from '/public/images/event1.png'
import event2 from '/public/images/event2.png'
import event3 from '/public/images/event3.png'

import { Sora } from 'next/font/google'
import Image from 'next/image'

const sora = Sora({ subsets: ['latin'] })

const PromotionComp = () => {
  return (
    <section className={`${sora.className} flex h-full w-full justify-center px-8 pt-20`}>
      <Wrapper>
        <div className="flex h-full w-full flex-col items-center gap-y-5">
          <h3 className="text-sm font-bold tracking-wider text-blue-600">PROMOTIONS</h3>
          <h2 className="text-center text-4xl font-bold text-pri_black">Our Promotions Events</h2>

          <div className="grid w-full grid-cols-1 gap-4 tablet:max-h-[410px] tablet:grid-flow-col tablet:grid-cols-5  tablet:grid-rows-2 ">

            <div className="flex flex-col justify-between bg-[#d6d6d8] px-5 tablet:col-span-3 tablet:row-span-1 tablet:flex-row">
              <div className="flex flex-col justify-center gap-y-2 px-5 pt-10 tablet:px-0 tablet:pt-0 ">
                <h4 className="text-3xl font-bold text-pri_black">
                  {' '}
                  GET UP TO <span className="text-4xl">60%</span>
                </h4>
                <p className="text-lg">For the summer season</p>
              </div>
              <Image src={event1} alt="Dine Market" />
            </div>

            <div className="flex flex-col items-center justify-center bg-pri_black p-7 text-white tablet:col-span-3 tablet:row-span-1 tablet:p-0">
              <h4 className="pb-4  text-4xl font-bold">GET 30% Off</h4>
              <p className="text-sm tracking-wider">USE PROMO CODE</p>
              <p className="mt-1  w-fit rounded-lg bg-white bg-opacity-10 px-5 py-2 text-sm  font-medium tracking-widest tablet:px-10 tablet:text-lg tablet:font-bold  tablet:tracking-[0.3rem] ">
                DINEWEEKENDSALE
              </p>
            </div>

            <div className="flex-col overflow-y-hidden items-center bg-[#efe1c7] tablet:col-span-1  tablet:row-span-2 ">
              <div className="px-4 pt-4 w-full  tablet:max-w-none">
                <h5>Flex Sweatshirt</h5>
                <div className="flex flex-col gap-x-2 text-lg lp:flex-row">
                  <span className="line-through">$100.00</span>
                  <span className="font-bold">$75.00</span>
                </div>
              </div>
              <div className='h-full w-full flex justify-center'>
              <Image src={event2} alt="Dine Market" className="h-full w-full max-w-[300px] tablet:max-w-none object-cover " />
              </div>
            </div>

            <div className="flex-col overflow-y-hidden   bg-[#d7d7d9] tablet:col-span-1  tablet:row-span-2 ">
              <div className="px-4 pt-4">
                <h5>Flex Push Button Bomber</h5>
                <div className="flex flex-col gap-x-2 text-lg lp:flex-row">
                  <span className="line-through">$225.00</span>
                  <span className="font-bold">$190.00</span>
                </div>
              </div>
              <div className='h-full w-full flex justify-center'>
              <Image src={event3} alt="Dine Market" className="h-full w-full max-w-[300px] tablet:max-w-none object-cover " />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PromotionComp
