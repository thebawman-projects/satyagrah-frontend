import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Reviews from '../Components/Home/Reviews'
import Affiliation from '../Components/Home/Affiliation'
import University from '../Components/Home/University'
import Slider from '../Components/Home/Slider'
import MentorSection from '../Components/Home/MentorSection'
import JSCounter from '../Components/JSCounter'
import HomeImageCard from '../Components/Home/HomeImageCard'
import RegistrationLinkCard from '../Components/Home/RegistrationLinkCard'
import CourseHome from '../Components/Home/CourseHome'
import { WhyChooseUs } from '../Components/Home/WhyChooseUs'
import { ApplySteps } from '../Components/Home/ApplySteps'
import Popup from '../Components/Home/Popup'


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=''>
    <Navbar />
    <Popup className="absolute z-20"/>
    <Slider  />
    <JSCounter/>
    <CourseHome />
    <RegistrationLinkCard />
    <MentorSection />
<WhyChooseUs />
    <HomeImageCard />
    <University />
    <Reviews />
    <Affiliation />
    <ApplySteps />
    <Footer />
    </div>
  )
}

export default HomePage