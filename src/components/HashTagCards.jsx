import React from 'react'
import feather_activity from '../assets/feather_activity.png';
import feature_command from '../assets/feather_command.png';
import feather_tending_up from '../assets/feather_trending-up.png';
import feather_navigation from '../assets/feather_navigation.png';
const HashTagCards = () => {
  return (
    <div className='p-10'>
        <div className='w-1/2 text-center mx-auto pb-10 p-6'>
            <div className='text-[36px] py-5 text-[#034D82]'>Track any hashtag(s) Performance</div>
            <div className='text-[16px] text-[#8EA9C1]'>Don’t waste time on search manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.</div>
        </div>
        <div className='flex justify-around gap-3'>
            {/* First Box */}
            <div className=' h-[230px] w-55 rounded-lg px-4 hover:shadow-2xl transition-shadow'>
                <div className='py-4 px-2'>
                    <div className='flex justify-center items-center w-[35px] h-[35px] rounded-md bg-gradient-to-l from-[#EF4444] to-[#FF8989]'>
                        <img className='p-[6px]' src={feather_activity} alt='feather_activity' width='30px' height='30px' />
                    </div>
                </div>
                <div className='text-[#034D82] p-2 font-semibold'>
                    <div className=''>Hashtag Growth</div>
                </div>
                <div className='p-2 text-sm text-[#8EA9C1]'>
                    <div>Follow a hashtag growth total posts, videos and images.</div>
                </div>
            </div>

            {/* Second Box */}
            <div className=' h-[230px] w-55 rounded-lg px-4 hover:shadow-2xl transition-shadow duration-300'>
                <div className='py-4 px-2'>
                    <div className='flex justify-center items-center w-[35px] h-[35px] rounded-md bg-gradient-to-l to-[#86B4FF] from-[#3B82F6]'>
                        <img className='p-[6px]' src={feature_command} alt='feather_activity' width='30px' height='30px' />
                    </div>
                </div>
                <div className='text-[#034D82] p-2 font-semibold'>
                    <div>Influencers by Hashtag</div>
                </div>
                <div className='p-2 text-sm text-[#8EA9C1]'>
                    <div>Identify the most influential people posting with your hashtag.</div>
                </div>
            </div>

            {/* Third Box */}
            <div className=' h-[230px] w-55 rounded-lg px-4 hover:shadow-2xl transition-shadow duration-300'>
                <div className='py-4 px-2'>
                    <div className='flex justify-center items-center w-[35px] h-[35px] rounded-md bg-gradient-to-l from-[#FFD285] to-[#F59E0B]'>
                        <img className='p-[6px]' src={feather_tending_up} alt='feather_activity' width='30px' height='30px' />
                    </div>
                </div>
                <div className='text-[#034D82] p-2 font-semibold'>
                    <div>Most Influental Post</div>
                </div>
                <div className='p-2 text-sm text-[#8EA9C1]'>
                    <div>See the most influential posts on hashtag you are following on.</div>
                </div>
            </div>

            {/* Fourth Box */}
            <div className=' h-[230px] w-55 rounded-lg px-4 hover:shadow-2xl transition-shadow duration-300'>
                <div className='py-4 px-2'>
                    <div className='flex justify-center items-center w-[35px] h-[35px] rounded-md bg-gradient-to-l from-[#48DFCE] to-[#14B8A6]'>
                        <img className='p-[6px]' src={feather_navigation} alt='feather_activity' width='30px' height='30px' />
                    </div>
                </div>
                <div className='text-[#034D82] p-2 font-semibold'>
                    <div>Hashtag Growth</div>
                </div>
                <div className='p-2 text-sm text-[#8EA9C1]'>
                    <div>Follow a hashtag growth total posts, videos and images.</div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default HashTagCards