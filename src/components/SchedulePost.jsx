import React from 'react'

import { FiCheckCircle } from "react-icons/fi";
import device from '../assets/device.png';
import { FaArrowRightLong } from "react-icons/fa6";

const SchedulePost = () => {
  return (
    <div className='p-20 flex flex-row items-center justify-around'>
        <div className='w-1/2'>
            <div className='text-[#034D82] text-[36px]'>Schedule Your Post Whenever You Want</div>
            <div className='text-[16px] py-2 text-[#90A3B4]'>Publish your content automatically to ensure that your content reaches the right people. Built-in features such as</div>
            <div className='py-2 flex items-center flex-wrap gap-2 text-[#90A3B4]'><FiCheckCircle className='text-[#04AADD]'/> Best Time to Post</div>
            <div className='py-2 flex items-center flex-wrap gap-2 text-[#90A3B4]'><FiCheckCircle className='text-[#04AADD]'/> Geolocation</div>
            <div className='py-2 flex items-center flex-wrap gap-2 text-[#90A3B4]'><FiCheckCircle className='text-[#04AADD]'/> User Tag</div>
            <div className='py-2 flex items-center flex-wrap gap-2 text-[#90A3B4]'><FiCheckCircle className='text-[#04AADD]'/> Others benefit</div>
            <div className='text-[#04AADD] flex items-center justify-start gap-2'>Learn about schedule post <FaArrowRightLong /></div>
        </div>
        <div>
            <img src={device} alt='device-Image' height='[100%]' width='[50%]' />
        </div>
    </div>
  )
}

export default SchedulePost