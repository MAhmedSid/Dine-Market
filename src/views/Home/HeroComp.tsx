import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

import MainImg from "/public/images/main_img.webp"
import featured1 from "/public/images/featured1.png"
import featured2 from "/public/images/featured2.png"
import featured3 from "/public/images/featured3.png"
import featured4 from "/public/images/featured4.png"



import { Sora } from 'next/font/google'


const sora = Sora({ subsets: ['latin'] })


const HeroComp = () => {
  return <section className="h-full w-full flex justify-center px-5 tablet:px-0">
<Wrapper>
    <div className="flex  w-full">


    <div className="flex-[0.5] flex flex-col justify-center  gap-y-10 pt-16">

    <p className={`${sora.className} px-5 py-2 w-fit rounded-md font-semibold text-[#001aff] bg-[#e1edff] `}>Sale 70%</p>

    <h1 className={`${sora.className} text-pri_black text-5xl font-bold tracking-wider leading-[60px]`}>An Industrial Take on Streetwear</h1>

    <p className={`${sora.className} text-stone-600 max-w-[450px]`}>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>

    <button className="bg-pri_black flex gap-x-2 py-4 px-9 w-fit text-white border-2 border-t-gray-600 border-l-gray-600 border-b-black border-r-black">
         <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-white"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 511.997 511.997"
            >
              <path
                d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zm102.54-336.113a19.128 19.128 0 00-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 00-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0018.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 00-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zm-257.615 65.762c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z"
                className="hovered-path custom-cursor-on-hover"
                data-original="#ffffff"
              ></path>
            </svg> 
            <p className={`${sora.className} font-medium `}>Start Shopping</p></button>

    <div className="grid grid-cols-2 tablet:grid-cols-4 h-fit w-full  mt-0 tablet:mt-24 gap-y-4 tablet:gap-y-0 ">
    <Image src={featured1} alt="Dine Market" className="min-h-[35px] w-auto" />
    <Image src={featured2} alt="Dine Market" className="min-h-[35px] w-auto" />
    <Image src={featured3} alt="Dine Market" className="min-h-[35px] w-auto" />
    <Image src={featured4} alt="Dine Market" className="min-h-[35px] w-auto" />
    </div>


    </div>

        <div className="flex-[0.5] relative hidden lp:flex justify-center items-center1">
        <Image src={MainImg} alt="Hero Image" className="m-auto"/>

        <div className="h-full w-full absolute -z-10 flex justify-center items-center">
        <div className=" w-full h-full max-h-[550px] max-w-[550px] bg-[#ffece3] rounded-full " />
        </div>

        </div>

    </div>
</Wrapper>
  </section>;
};

export default HeroComp;
