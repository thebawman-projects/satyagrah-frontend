import React from 'react';
import lab from '../../images/lab1.jpg'
import { Link } from "react-router-dom";

const RegistrationLinkCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6">
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-orange-500 transform -skew-y-6"></div>
        <div className="relative z-10 flex items-center justify-center h-96">
          <img src={lab} alt="Graphic Element" className="object-cover h-full w-full" />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 bg-white">
        <h1 className="text-4xl font-bold mb-4">Giving Wings to Your Career</h1>
        <p className="text-lg mb-2">Under the guidance of our trained faculty and with the support of our alumni network from different parts of the globe we have been supplementing the careers of students. Be it preparation for government & defense services, getting a dream job at MNC’s, or starting up your own venture SATYAGRAH gives you the right direction towards a successful career trek.</p>
        <Link to="/courses"><button className="homeregbutton text-[1rem] bg-blue-950 text-white">View Courses</button></Link>
      </div>
    </div>
  );
};

export default RegistrationLinkCard;
