import React from "react";
import { Link } from "react-router-dom";


const steps = [
  { id: 1, title: 'Minimum Eligibility Criteria', description: '10th/12th Passed, 50% Marks & Age 16-17 Years', bgColor: 'bg-teal-500', bottomColor: 'bg-blue-500' },
  { id: 2, title: 'Apply', description: '86 Available Branches With Your State (Location) & Course Choice', bgColor: 'bg-pink-500', bottomColor: 'bg-yellow-500' },
  { id: 3, title: 'Verification & Welcome Call', description: 'He/She Will Receive The Verification And Welcome Call', bgColor: 'bg-orange-500', bottomColor: 'bg-red-500' },
  { id: 4, title: 'Final Counseling', description: 'For Final Counseling, Please Visit Our Head Office', bgColor: 'bg-green-500', bottomColor: 'bg-purple-500' },
  { id: 5, title: 'Become A Scholar', description: 'Become a Scholar & Get 100% Scholarship With a Bond Agreement', bgColor: 'bg-purple-500', bottomColor: 'bg-cyan-500' },
  { id: 6, title: 'Enjoy Your Dream', description: 'Enjoy Your Higher Studies.', bgColor: 'bg-pink-500', bottomColor: 'bg-orange-500' },
];

const StepCard = ({ step }) => (
  <div className={`relative ${step.bgColor} p-6 rounded-xl shadow-lg transform transition-transform duration-200 hover:scale-105 rounded-br-full`}>
    <div className={`absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center text-4xl text-black bg-white rounded-full border-4 `}>
      {step.id}
    </div>
    <h3 className="mt-10 font-bold text-xl mb-2">{step.title}</h3>
    <p className="text-gray-700 mr-6">{step.description}</p>

  </div>
);

export const ApplySteps = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-8">
    <h1 className="text-3xl font-bold mb-8 text-center">Steps to Become a Satyagrah Scholar</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map(step => (
        <StepCard key={step.id} step={step} />
      ))}
    </div>
    <Link to='/registration'> <button className="mt-10 px-8 py-4 bg-red-500 text-white rounded-lg rounded-br-3xl shadow-lg transition-transform duration-200 hover:scale-105">Apply Now</button> </Link>
  </div>

  );
}
 
