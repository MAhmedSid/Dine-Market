import Wrapper from '@/components/Wrapper'
import React from 'react'

import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

const NewsLetterComp = () => {
  return (
    <section className={`flex h-full w-full justify-center py-48 ${sora.className}`}>
      <Wrapper>
        <div className="relative flex flex-col items-center justify-center gap-y-5">
          <p className="absolute -z-10 text-9xl font-black text-[#f2f3f7] ">Newsletter</p>
          <h3 className="text-3xl font-bold tracking-widest">Subscribe Our Newsletter</h3>
          <p>Get the latest information and promo offers directly</p>
          <form className="flex w-full justify-center gap-x-2 pt-4">
            <input type="text" placeholder="Input email address" className="border border-gray-400 px-4 py-2 text-xs w-80" />
            <button className="flex w-fit gap-x-2  border-2 border-b-black border-l-gray-600 border-r-black border-t-gray-600 bg-black px-5 py-2 text-sm font-semibold text-white">
              Get Started
            </button>
          </form>
        </div>
      </Wrapper>
    </section>
  )
}

export default NewsLetterComp
