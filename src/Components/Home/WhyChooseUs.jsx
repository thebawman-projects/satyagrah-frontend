import React from 'react';
import { FaRegSmile, FaRegStar, FaGlobe, FaUserTie, FaHandsHelping, FaCertificate } from 'react-icons/fa';

export const WhyChooseUs = () => {
  return (
    <div className=" py-12 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Why Choose Us</h2>
        <p className='text-xs align-center items-center mb-16'>Choose Satyagrah Educational & Charitable Trust and it’s constituent units for an exceptional learning experience that prepares you for a rewarding career in safety. With expert faculty, practical training, and a strong focus on industry needs, we empower you to become a competent and confident safety professional.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
              <FaRegSmile className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Flexibility</h3>
            <p className="mt-2 text-gray-600 text-xs">Flexibility in learning, excellence in safety - Choose Satyagrah Educational & Charitable Trust and it's constituent units.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-4">
              <FaRegStar className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Quality</h3>
            <p className="mt-2 text-gray-600 text-xs">Excellence in safety education - Embrace quality at Satyagrah Educational & Charitable Trust and it's constituent units.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-500 rounded-full flex items-center justify-center mb-4">
              <FaGlobe className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Global</h3>
            <p className="mt-2 text-gray-600 text-xs">Embrace global opportunities with Satyagrah Educational & Charitable Trust and it's constituent units.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
              <FaUserTie className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Expertise</h3>
            <p className="mt-2 text-gray-600 text-xs">Unlock your safety expertise with Satyagrah Educational & Charitable Trust and it's constituent units..</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-4">
              <FaHandsHelping className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Support</h3>
            <p className="mt-2 text-gray-600 text-xs">Empowering your safety journey - Discover unwavering support at Satyagrah Educational & Charitable Trust and it's constituent units.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-500 rounded-full flex items-center justify-center mb-4">
              <FaCertificate className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Certified</h3>
            <p className="mt-2 text-gray-600 text-xs">Certified excellence - Choose Satyagrah Educational & Charitable Trust and it's constituent units for a trusted safety education.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


