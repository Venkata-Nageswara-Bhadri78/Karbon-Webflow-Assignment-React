import React from 'react'

import { FaCircle } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { IoHeartCircle } from "react-icons/io5";

import { GiHearts } from "react-icons/gi";
import { BiSolidHeartCircle } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='bg-black text-white'>
        <div className='flex justify-around p-5 w-[80%] mx-auto'>
            {/* First Div */}
            <div className=''>
                <div className='py-3 hidden md:flex font-extrabold text-white text-4xl items-center'>
                    ehya <FaCircle className='text-[#005490]' size={10}/>
                </div>
                <div className='py-2 w-[60%] text-[#D3D6D8]'>Build a modern and creative website with crealand</div>
                <div className='flex gap-1 py-5'>
                    <div className='p-2 bg-gray-800 rounded-full'><FaGoogle /></div>
                    <div className='p-2 bg-gray-800 rounded-full'><FaInstagram /></div>
                    <div className='p-2 bg-gray-800 rounded-full'><FaTwitter /></div>
                    <div className='p-2 bg-gray-800 rounded-full'><FaLinkedin /></div>
                </div>
            </div>

            {/* Second Div */}
            <div className='p-2'>
                <h1 className='pb-3 font-semibold'>Product</h1>
                <p className='py-2.5 text-[#D3D6D8]'>Landing Page</p>
                <p className='py-2.5 text-[#D3D6D8]'>Features</p>
                <p className='py-2.5 text-[#D3D6D8]'>Documentation</p>
                <p className='py-2.5 text-[#D3D6D8]'>Referral Program</p>
                <p className='py-2.5 text-[#D3D6D8]'>Pricing</p>
            </div>

            {/* Third Div */}
            <div className='p-2'>
                <h1 className='pb-3 font-semibold'>Services</h1>
                <p className='py-2.5 text-[#D3D6D8]'>Documentation</p>
                <p className='py-2.5 text-[#D3D6D8]'>Design</p>
                <p className='py-2.5 text-[#D3D6D8]'>Themes</p>
                <p className='py-2.5 text-[#D3D6D8]'>Illustrations</p>
                <p className='py-2.5 text-[#D3D6D8]'>UI Kit</p>
            </div>

            {/* Fourth Div */}
            <div className='p-2'>
                <h1 className='pb-3 font-semibold'>Company</h1>
                <p className='py-2.5 text-[#D3D6D8]'>About</p>
                <p className='py-2.5 text-[#D3D6D8]'>Terms</p>
                <p className='py-2.5 text-[#D3D6D8]'>Privacy Policy</p>
                <p className='py-2.5 text-[#D3D6D8]'>Careers</p>
            </div>

            {/* Fifth Div */}
            <div className='p-2'>
                <h1 className='pb-3 font-semibold'>More</h1>
                <p className='py-2.5 text-[#D3D6D8]'>Documentation</p>
                <p className='py-2.5 text-[#D3D6D8]'>License</p>
                <p className='py-2.5 text-[#D3D6D8]'>Changelog</p>
            </div>
        </div>
        <div className='flex py-15 flex-col items-center justify-center'>
            <div className='text-[#005490] rounded-full'><BiSolidHeartCircle size={50} /></div>
            <div className='p-5'>Copyright © 2021. Crafted with love.</div>
        </div>
    </div>
  )
}

export default Footer