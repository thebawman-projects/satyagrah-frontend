import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import CourseCard from '../Components/Courses/CourseCard'
import CourseHead from '../Components/Courses/CourseHead'

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='bg-slate-800'>
        <Navbar />
        <CourseHead/>
        <CourseCard />
        <Footer/>
    </div>
  )
}

export default Courses