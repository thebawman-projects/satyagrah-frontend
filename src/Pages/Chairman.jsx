import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import Members from '../Components/Members'

const Chairman = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Navbar/>
    <Members/>
    <Footer/>
    </>
  )
}

export default Chairman