import React from 'react';
import backgroundImage from '../../images/lab2.jpg';
import { Link } from "react-router-dom";

const CourseHome = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl font-bold mb-2"> Get Free & Quality Online Consultation</h1>
        <h2 className="text-2xl mb-4">Councelling Starts Now.</h2>
        <p className="mb-5 px-5 text-sm">The role of Satyagrah is designed to help you smoothly manage your study application process, right from unique profile building and university shortlisting based on your profile and areas of interest.</p>
        <Link to="/registration"><button className="  text-[1rem] bg-blue-950 text-black-800 bg-yellow-500 hover:bg-yellow-600  font-bold py-2 px-4 rounded">
         Registration
        </button></Link>
      </div>
    </div>
  );
};

export default CourseHome;
