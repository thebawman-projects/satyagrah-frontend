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
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import  ApplySteps  from '../Components/Home/ApplySteps'
import Popup from '../Components/Home/Popup'
import YouTubeVideoCards from '../Components/YouTubeVideoCards'
import FacebookEmbedPosts from '../Components/FacebookEmbedPosts'
import BrochureDownload from "../Components/Home/BrochureDownload";


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=''>
    <Navbar />
    <Popup/>
   <div className="pt-24"> 
      <Slider />
      </div>
     <CourseHome />
      <JSCounter />
      <RegistrationLinkCard />
      <BrochureDownload />



{/* FOR YOUTUBE VIDEOS */}


    <YouTubeVideoCards videos={[
  "https://www.youtube.com/embed/DzwVjQu5wP4",
  "https://www.youtube.com/embed/-8HDlm7HTdY",
  "https://www.youtube.com/embed/MXMi9P74gFw",
  "https://www.youtube.com/embed/wuBlbheokd0",
  "https://www.youtube.com/embed/m3nqeOBjFGc",
  "https://www.youtube.com/embed/0ALqHnK_d7k",

]}/>

{/* FOR FACEBOOK POSTS */}


<FacebookEmbedPosts postUrls = {[
    'https://www.facebook.com/permalink.php?story_fbid=pfbid02jVaDTC1FCJz8PRuvCzEv2jCfbsqPbfMbHbyPWNBgxtZr4xR7UQ69AKyWUz1u1Qekl&id=100064861366081',
    'https://www.facebook.com/permalink.php?story_fbid=pfbid02KBTCgLsG651ddErEGy7nkjmwzyYLLATM7tbYwFKiSdygyN5ZDhPYPYcnKnezWc7Zl&id=100064861366081',
    'https://www.facebook.com/permalink.php?story_fbid=pfbid0hZJjQ536GK3fwhU22XaP3nNRDtsNiuWUwdwK8PCudHUu724an5ZHeAaYqjdJNzUbl&id=100064861366081',
    'https://www.facebook.com/permalink.php?story_fbid=pfbid022y3XMAqwu4ucH9XwkMcsvzEHub8Chj19Uj8gzQUdFVyjheHzomJkRPbifmM6Mk8Pl&id=100064861366081',
    'https://www.facebook.com/permalink.php?story_fbid=pfbid0p9m2YaUjaJMHdHpSjRVHR7kyxB8Q6NRnTo2TcyjxyCpsS7J3enUuWhRi1gsbY9LWl&id=100064861366081',
    'https://www.facebook.com/permalink.php?story_fbid=pfbid02bkPhycnCp8noeewqTk5xTDtY55pa4VZuy23bUJGK4cfnc78q66QM1xB1ymAXoFeMl&id=100064861366081',
    
  ]}/>



      
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
