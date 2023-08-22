import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '/public/images/logo.png'

import { Sora } from 'next/font/google'
import Link from 'next/link'

const sora = Sora({ subsets: ['latin'] })

const Footer = () => {
  return (
    <section className={`flex flex-col h-full w-full justify-center items-center  ${sora.className}`}>
      <Wrapper>
        <div className="flex flex-col lp:flex-row tablet:gap-x-32 py-10 px-10 tablet:px-5 tablet:py-32">
          <div className="flex flex-col gap-y-8">
            <Image src={logo} alt="ssh" className="w-40" />
            <p className="max-w-[450px] text-gray-500">
              Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials
              made.
            </p>
            <div className="flex gap-x-8">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: '#0d0d0d' }}
                className="h-11 w-11 rounded-lg bg-[#f1f1f1] px-3  py-3"
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: '#0d0d0d' }}
                className="h-11 w-11 rounded-lg bg-[#f1f1f1] px-3  py-3"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: '#0d0d0d' }}
                className="h-11 w-11 rounded-lg bg-[#f1f1f1] px-3 py-3"
              />
            </div>
          </div>
          <div className="flex flex-col tablet:flex-row  pt-10 tablet:pt-10 gap-y-8 tablet:gap-x-32 text-gray-500">
            <div className="flex flex-col gap-y-4">
              <h5 className="text-lg font-bold ">Company</h5>
              <ul className="flex flex-col gap-y-4">
                <li>About</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>How it Works</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <h5 className="text-lg font-bold ">Support</h5>
              <ul className="flex flex-col gap-y-4">
                <li>Support Carrer</li>
                <li>24h Service</li>
                <li>Quick Chat</li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <h5 className="text-lg font-bold ">Contact</h5>
              <ul className="flex flex-col gap-y-4">
                <li>Whatsapp</li>
                <li>Support 24h</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="flex flex-col tablet:flex-row h-full w-full items-center justify-around border-t border-pri_black text-gray-500 gap-y-5 py-4 px-5 tablet:px-0">
        <p className="text-center">Copyright © 2023 Dine Market</p>
        <p className='text-center'>
          Design by. <span className="text-black font-bold">Weird Design Studio</span>
        </p>
        <p className='text-center'>
          Code by. <span className="text-black font-bold"><Link target='_blank' href={"https://github.com/MAhmedSid/Dine-Market"}>M. Ahmed Siddiqui on github</Link></span>
        </p>
      </div>

    </section>
  )
}

export default Footer
