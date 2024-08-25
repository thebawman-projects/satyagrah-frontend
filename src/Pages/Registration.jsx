import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import { RegistrationCard } from '../Components/Registration/RegistrationCard'

const Registration = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar />
        <RegistrationCard />
        <Footer/>
    </div>
  )
}

export default Registration