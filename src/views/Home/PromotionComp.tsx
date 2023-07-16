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
    <section className={`${sora.className} flex h-full w-full justify-center pt-20`}>
      <Wrapper>
        <div className="flex h-full w-full flex-col items-center gap-y-5">
          <h3 className="text-sm font-bold tracking-wider text-blue-600">PROMOTIONS</h3>
          <h2 className="text-4xl font-bold text-pri_black">Our Promotions Events</h2>

          <div className="grid max-h-[410px] w-full grid-flow-col grid-cols-5 grid-rows-2 gap-4">
            <div className="col-span-3 row-span-1 flex justify-between bg-[#d6d6d8] px-5">
              <div className="flex flex-col justify-center gap-y-2 ">
                <h4 className="text-3xl font-bold text-pri_black">
                  {' '}
                  GET UP TO <span className="text-4xl">60%</span>
                </h4>
                <p className="text-lg">For the summer season</p>
              </div>
              <Image src={event1} alt="Dine Market" />
            </div>

            <div className="col-span-3 row-span-1 flex flex-col items-center justify-center bg-pri_black text-white">
              <h4 className="pb-4  text-4xl font-bold">GET 30% Off</h4>
              <p className="text-sm tracking-wider">USE PROMO CODE</p>
              <p className="mt-1  w-fit rounded-lg bg-white bg-opacity-10 px-10 py-2 text-lg font-bold tracking-[0.3rem] ">
                DINEWEEKENDSALE
              </p>
            </div>

            <div className="col-span-1 row-span-2 flex-col overflow-y-hidden bg-[#efe1c7] px-4 pt-4">
              <h5>Flex Sweatshirt</h5>
              <div className="flex gap-x-2 text-lg">
                <span className="line-through">$100.00</span>
                <span className="font-bold">$75.00</span>
              </div>
              <Image src={event2} alt="Dine Market" className="h-full w-full object-top " />
            </div>

            <div className="col-span-1 row-span-2  flex-col overflow-y-hidden bg-[#d7d7d9] px-4 pt-4">
              <h5>Flex Push Button Bomber</h5>
              <div className="flex gap-x-2 text-lg">
                <span className="line-through">$225.00</span>
                <span className="font-bold">$190.00</span>
              </div>
              <Image src={event3} alt="Dine Market" className="h-full w-full object-top  " />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PromotionComp
