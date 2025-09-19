import React from 'react'
import homepage from '../assets/homepage.png';

import { FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='p-10 flex items-center'>
        <div className='text-white'>
            <pre className='text-[64px] font-sans whitespace-pre font-bold'>
            We help you <br />
            grow your business <br /> 
            faster
            </pre>
            <p className='text-[16px] leading-7 py-5'>Ehya is the Instagram analytics platform teams use to stay <br />
                focused on the goals, track engagement for report your <br />
                business .
            </p>
            <div className='flex gap-15 items-center'>
                <div className='bg-white text-[#00A8DB] px-7 py-4 rounded-md'>See how it works</div>
                <div className='flex items-center gap-2'>Get a free demo <FaArrowRightLong /> </div>
            </div>
        </div>
        <div className="absolute -right-7 top-20 z-20">
            <img src={homepage} alt="homepage" width='1038px' className="object-contain" />
        </div>
    </div>
  )
}

export default Hero