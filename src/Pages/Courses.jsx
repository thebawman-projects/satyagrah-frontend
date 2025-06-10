import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import CourseCard from '../Components/Courses/CourseCard'

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
       <Navbar />
        {/* <CourseHead/> */}
        <div className="pt-[5.5rem]"> 
        <CourseCard />
        </div>
        {/* <CourseCard/> */}
        <Footer/>
    </div>
  )
}

export default Courses
