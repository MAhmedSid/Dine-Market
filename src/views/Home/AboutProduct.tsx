import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'

import img from '/public/images/product4.png'

import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

const AboutProduct = () => {
  return (
    <section className={`${sora.className} flex h-full w-full justify-center pt-20`}>
      <Wrapper>

        <div className='flex justify-end pb-4 pt-20'><h3 className='text-5xl font-extrabold leading-[4rem] max-w-[600px]'>Unique and Authentic Vintage Designer Jewellery</h3></div>

        <div className="flex gap-x-20">
          <div className="flex flex-[0.5] items-center justify-center px-4">
            <div className="relative grid grid-cols-2 gap-20">
              <p className="absolute -z-10 h-full w-full text-8xl font-bold text-[#ecedef] py-5">Different from others</p>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold">Using Good Quality Materials</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold">Using Good Quality Materials</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold">Using Good Quality Materials</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold">Using Good Quality Materials</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-[0.5] gap-x-10">
            <Image src={img} alt="ssh" />
            <div className="flex max-w-[500px] flex-col gap-y-6 ">
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
