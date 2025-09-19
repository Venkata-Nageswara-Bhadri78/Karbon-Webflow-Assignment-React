import React from 'react'

import BasicRating from '../ui/BasicRating'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import photo from '../assets/feedback/photo.png';
import PaginationDots from '../ui/PaginationDots';

const PaginationBox = () => {
  return (
    <div className='flex justify-around gap-5 items-center p-10'>
        <div><IoIosArrowBack /></div>
        <div className='flex flex-col p-10 justify-start'>
            <div><BasicRating /></div>
            <div className='text-[#90A3B4]'>“With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”</div>
            <div className='flex justify-between items-center p-5'>
                <div className='flex items-center gap-4'>
                    <div><img src={photo} width='56px' /></div>
                    
                    <div>
                        <div className='text-[#034D82] text-[20px]'>Jaquon Hart</div>
                        <div className='text-[#90A3B4] text-[16px]'>Digital Marketing Executive, Hypebeast</div>
                    </div>
                </div>
            </div>
            <div><PaginationDots /></div>
        </div>
        <div>
            <div className='text-white rounded-full bg-[#034D82]'><MdKeyboardArrowRight size={30} /></div>
        </div>
    </div>
  )
}

export default PaginationBox