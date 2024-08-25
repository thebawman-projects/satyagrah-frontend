import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import UniversityCards from '../Components/University/universityCards'
import Head from '../Components/University/Head'

const University = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navbar />
      <Head />
      <UniversityCards />
      <Footer />
    </div>
  )
}

export default University