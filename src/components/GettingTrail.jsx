import React from 'react'

import image from '../assets/trails/Item.png';
import image1 from '../assets/trails/item1.png';
import image2 from '../assets/trails/item2.png';
import image3 from '../assets/trails/item3.png';
import image4 from '../assets/trails/item4.png';
import bgm from '../assets/trails/bg/sector.png'
const GettingTrail = () => {
  return (
    <div className='mx-auto flex items-center justify-between bg-[#01B8D9] text-white p-10'>
        <div className='w-1/3'>
            <div className='text-[36px]'>Grow your brand presence on social media 😍</div>
            <div className='text-[14px] py-3'>Join with more 1200+ happy customers</div>
            <div className='flex items-center gap-3'>
            <div className="flex flex-row">
                <div><img src={image1} width={40} className="rounded-full" /></div>
                <div className="-ml-4"><img src={image2} width={40} className="rounded-full" /></div>
                <div className="-ml-4"><img src={image3} width={40} className="rounded-full" /></div>
                <div className="-ml-4"><img src={image4} width={40} className="rounded-full" /></div>
                <div className="-ml-4"><img src={image} width={40} className="rounded-full" /></div>
            </div>
            <div className='underline'>and others</div>
            </div>
        </div>
        <div>
            <button className='bg-white text-[#00B8D9] rounded-sm p-4'>Get your trail now</button>
        </div>
    </div>
  )
}

export default GettingTrail