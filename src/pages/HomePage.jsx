import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BrandsList from '../components/BrandsList'
import SchedulePost from '../components/SchedulePost'
import HashTagCards from '../components/HashTagCards'
import FeedbackSection from '../components/FeedbackSection'
import GettingTrail from '../components/GettingTrail'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className=''>
        <div className='p-20 bg-[#27C0EF]'>
            <Navbar />
            <Hero />
        </div>
        <div className=''>
            <BrandsList />
            <SchedulePost />
            <HashTagCards />
            <FeedbackSection />
            <div className='px-20 py-10 pt-20 bg-white'><GettingTrail /></div>
            <Footer />
        </div>
    </div>
  )
}

export default HomePage