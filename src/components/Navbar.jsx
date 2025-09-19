import React from 'react'
import { FaCircle } from "react-icons/fa";

const Navbar = () => {
    const itemStyling = 'text-center text-white'
  return (
    <div className='px-10 md:flex md:flex-row md:justify-between md:items-center'>
        <div className='hidden md:flex font-extrabold text-white text-4xl items-center'>
            ehya <FaCircle className='text-[#005490]' size={10}/>
        </div>
        <ul className='md:flex md:flex-row md:justify-around md:w-1/2 items-center'>
            <li className={itemStyling}>Home</li>
            <li className={itemStyling}>Landing</li>
            <li className={itemStyling}>Pages</li>
            <li className={itemStyling}>Docs</li>
            <li className={itemStyling}>Help</li>
            <li className={itemStyling}><button className='p-2 rounded-sm bg-blue-900 px-10 bg-gradient-to-l from-[#005490] to-[#328BCB]'>Login</button></li>
        </ul>
    </div>
  )
}

export default Navbar