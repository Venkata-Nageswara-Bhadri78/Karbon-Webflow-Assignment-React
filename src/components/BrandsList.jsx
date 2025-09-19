import React from 'react'

import { FaSlackHash } from "react-icons/fa";
import airbnb from '../assets/brands/airbnb.png'
import google from '../assets/brands/google.png'
import netflix from '../assets/brands/netflix.png'
import slack from '../assets/brands/slack.png'
import uber from '../assets/brands/uber.png'

const BrandsList = () => {
  return (
    <div className='py-25 w-[80%] mx-auto flex justify-around'>
        <div className='p-3'>
            <img src={slack} alt='slack' width='100px' />
        </div>
        <div className='p-3'>
            <img src={netflix} alt='slack' width='100px' />
        </div>
        <div className='p-3'>
            <img src={google} alt='slack' width='100px' />
        </div>
        <div className='p-3'>
            <img src={airbnb} alt='slack' width='100px' />
        </div>
        <div className='p-3'>
            <img src={uber} alt='slack' width='100px' />
        </div>
    </div>
  )
}

export default BrandsList