import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'

import img from '/public/images/product4.png'

import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

const AboutProduct = () => {
  return (
    <section className={`${sora.className} flex h-full w-full justify-center px-5 pt-20 tablet:px-0`}>
      <Wrapper>
        <div className="flex pb-4 pt-20 tablet:justify-end">
          <h3 className="max-w-[600px]  text-center text-4xl font-extrabold h-auto !leading-[4rem] tablet:text-left tablet:text-5xl">
            Unique and Authentic Vintage Designer Jewellery
          </h3>
        </div>

        <div className="flex flex-col gap-y-10 tablet:gap-x-20  lp:flex-row">
          <div className="flex flex-[0.5] items-center justify-center px-4">
            <div className="relative grid grid-cols-2 gap-7 tablet:gap-20">
              <div className="absolute -z-10 flex h-full w-full flex-col justify-center  py-5 text-6xl font-bold text-[#ecedef] lp:text-8xl">
                <p className='pt-5'>Different</p>
                <p className='pt-5'>from</p>
                <p className='pt-5'>others</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold">Using Good Quality Materials</p>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold">Using Good Quality Materials</p>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold">Using Good Quality Materials</p>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold">Using Good Quality Materials</p>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-[0.5]  flex-col gap-x-10 lp:flex-row">
            <Image src={img} alt="ssh" />
            <div className="flex max-w-[500px] flex-col gap-y-6 pt-5 tablet:pt-0">
              <p style={{ wordSpacing: '10px' }} className="leading-7">
                This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to
                detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
              </p>
              <button className="flex w-fit gap-x-2  border-2 border-b-black border-l-gray-600 border-r-black border-t-gray-600 bg-pri_black px-7 py-3 text-sm font-semibold text-white">
                See All Products
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default AboutProduct
