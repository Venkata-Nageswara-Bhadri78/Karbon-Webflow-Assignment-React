import React from 'react'
import PaginationBox from './PaginationBox'

const FeedbackSection = () => {
  return (
    <div className='bg-[#EFFBFF] p-10 flex items-center flex-row'>
        <div className='w-[60%] p-10'>
            <div className='text-[36px] text-[#034D82] '>Powering the growth of 100+ business & retailers in Indonesia.</div>
            <div className='text-[#90A3B4] text-[16px]'>From single store, startups, to large multi-store brands.</div>
        </div>
        <div>
            <PaginationBox />
        </div>
    </div>
  )
}

export default FeedbackSection