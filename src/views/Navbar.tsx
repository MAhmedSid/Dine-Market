import Wrapper from '@/components/Wrapper'
import React from 'react'

import logo from '/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Sora } from 'next/font/google'


const sora = Sora({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <header className={`h-full w-full py-7 flex justify-center ${sora.className}`}>
      <Wrapper>
        <div className="flex h-auto w-full justify-between items-center">
          <Image src={logo} alt="Dine Market logo" className='w-fit min-w-[150px] h-auto ' />

          <nav className="flex gap-x-10">
            <Link href={'/'}>Female</Link>
            <Link href={'/'}>Male</Link>
            <Link href={'/'}>Kids</Link>
            <Link href={'/'}>All Products</Link>
          </nav>

          <div className="flex border border-gray- gap-x-3 justify-center items-center px-2 py-1 min-w-[400px] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 612.01 612.01"
            >
              <path
                d="M606.209 578.714L448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 00.018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
                data-original="#000000"
              ></path>
            </svg>
            <input type="text" placeholder="What you looking for" className="w-full focus:outline-transparent " />
          </div>

          <div className="relative flex items-center justify-center bg-[#f1f1f1] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 511.997 511.997"
            >
              <path
                d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zm102.54-336.113a19.128 19.128 0 00-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 00-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0018.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 00-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zm-257.615 65.762c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z"
                className="hovered-path custom-cursor-on-hover"
                data-original="#000000"
              ></path>
            </svg>
            <div className='absolute -top-1 -right-1 flex justify-center items-center bg-red-600 h-5 w-5 rounded-full text-white text-xs'>0</div>
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default Navbar
