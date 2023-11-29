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
    <section className={`flex h-full w-full flex-col items-center justify-center  ${sora.className} mt-24`}>
      <Wrapper>
        <div className="flex flex-col px-10 py-10 tablet:gap-x-32 tablet:px-5 tablet:py-32 lp:flex-row">
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
                className="h-10  w-10 rounded-lg bg-[#f1f1f1] px-3 py-3 tablet:h-11  tablet:w-11"
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: '#0d0d0d' }}
                className="h-10  w-10 rounded-lg bg-[#f1f1f1] px-3 py-3 tablet:h-11  tablet:w-11"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: '#0d0d0d' }}
                className="h-10 w-10 rounded-lg bg-[#f1f1f1] px-3 py-3 tablet:h-11 tablet:w-11"
              />
            </div>
          </div>
          <div className="flex flex-wrap  gap-x-4  gap-y-4 pt-10 text-gray-500 tablet:flex-row tablet:gap-x-32">
            <div className="flex flex-col gap-y-4">
              <h5 className="text-lg font-bold ">Company</h5>
              <ul className="flex flex-col gap-y-4 text-xs tablet:text-base">
                <li>About</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>How it Works</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <h5 className="text-lg font-bold ">Support</h5>
              <ul className="flex flex-col gap-y-4 text-xs tablet:text-base">
                <li>Support Carrer</li>
                <li>24h Service</li>
                <li>Quick Chat</li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <h5 className="text-lg font-bold ">Contact</h5>
              <ul className="flex flex-col gap-y-4 text-xs tablet:text-base">
                <li>Whatsapp</li>
                <li>Support 24h</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="flex h-full w-full flex-col items-center justify-around gap-y-5 bg-pri_black px-5 py-4 text-gray-500 tablet:flex-row tablet:px-0">
        <p className="text-center">Copyright © 2023 Dine Market</p>
        <p className="text-center">
          Design by. <span className="font-semibold text-zinc-200">Weird Design Studio</span>
        </p>
        <p className="text-center">
          Code by.{' '}
          <span className="font-semibold text-zinc-200">
            <Link target="_blank" href={'https://github.com/MAhmedSid/Dine-Market'}>
              M. Ahmed Siddiqui on github
            </Link>
          </span>
        </p>
      </div>
    </section>
  )
}

export default Footer