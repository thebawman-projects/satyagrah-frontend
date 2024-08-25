import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
// import MentorAbout from '../Components/MentorAbout'
import Members from '../Components/Members'


const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar />
        <Members/>
        {/* <MentorAbout /> */}
        <Footer />
    </div>
  )
}

export default AboutUs