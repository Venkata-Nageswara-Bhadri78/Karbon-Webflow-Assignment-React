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
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className='overflow-x-hidden'>
      <HomePage />
    </div>
  )
}

export default App
