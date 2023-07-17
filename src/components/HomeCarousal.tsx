'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'
import img from '/public/images/product1.png'

import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

const HomeCarousal = () => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      autoHeight={false}
      className={`w-full h-full   ${sora.className}`}
    >
      <SwiperSlide className="cursor-pointer pt-10">
        <div className="flex h-fit w-full flex-col gap-y-2 tablet:px-10  transition-all duration-300 hover:scale-110">
          <Image src={img} alt="ssh" className="h-fit w-full" />
          <p className="font-bold tracking-widest">Pink Fleece Sweatpants</p>
          <p className="text-lg font-bold">$195</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer pt-10">
        <div className="flex h-fit w-full flex-col gap-y-2 tablet:px-10 ">
          <Image src={img} alt="ssh" className="h-fit w-full" />
          <p className="font-bold tracking-widest">Pink Fleece Sweatpants</p>
          <p className="text-lg font-bold">$195</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer pt-10">
        <div className="flex h-fit w-full flex-col gap-y-2 tablet:px-10 ">
          <Image src={img} alt="ssh" className="h-fit w-full" />
          <p className="font-bold tracking-widest">Pink Fleece Sweatpants</p>
          <p className="text-lg font-bold">$195</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer pt-10">
        <div className="flex h-fit w-full flex-col gap-y-2 tablet:px-10 ">
          <Image src={img} alt="ssh" className="h-fit w-full" />
          <p className="font-bold tracking-widest">Pink Fleece Sweatpants</p>
          <p className="text-lg font-bold">$195</p>
        </div>
      </SwiperSlide>

    </Swiper>
  )
}

export default HomeCarousal
