import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import CourseHead from '../Components/Courses/CourseHead'

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar />
        <CourseCard />
        <Footer/>
    </div>
  )
}

export default Courses
