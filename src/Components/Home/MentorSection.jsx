import React from 'react';
import {motion} from 'framer-motion'
import mentor from '../../images/mentor.jpg';
// import { Link } from 'react-router-dom';
import Broucher from '../../images/Broucher.pdf'

const MentorSection = () => {
  return (
    <motion.div
    initial ={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:1}}
    className='w-full py-16 mb-[-2rem] px-4 text-black-800'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 rounded-br-[3rem] rounded-[.3rem]' src={mentor} alt='MentorImg' />
        <div className='flex flex-col justify-center text-black-800'>
          
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black-800'>10,000+ Happy Students
Activities & Counselling</h1>
          <p>
          Satyagrah Educational And Charitable Trust is a shining example of how a single individual's vision can turn into a social movement that impacts thousands of lives. Founded and chaired by Abhinav Akarsh in 2021, the trust was registered as an institution on August 30, 2020, with the aim of making a difference in the world of education in India.

          </p>
          <p className=' font-bold mt-2 text-black-800'> ~ SATYAGRAH CO-ORDINATOR & ASSOCIATE</p>
          <a href={Broucher} target="_blank" rel="noreferrer">
          <button className='bg-yellow-700 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>More</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MentorSection;