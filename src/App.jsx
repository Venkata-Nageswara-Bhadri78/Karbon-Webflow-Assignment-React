import { useState } from 'react'

import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandsList from './components/BrandsList'
import HashTagCards from './components/HashTagCards'
import SchedulePost from './components/SchedulePost'
import GettingTrail from './components/GettingTrail'
import Footer from './components/Footer'
import FeedbackSection from './components/FeedbackSection'
function App() {

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
        <div className='p-10 bg-white'><GettingTrail /></div>
        <Footer />
      </div>
    </div>
  )
}

export default App
