import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaHandsHelping, FaChalkboardTeacher, FaAward } from 'react-icons/fa';
import mentor from '../../images/boroban.png';

const MentorSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
       <div className="conatainer">
        <p className="common-heading regulatory text-gray-600 md:text-3xl sm:text-2xl p-2 ml-[-2rem] md:ml-2"> About Our Mentor</p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Happy Students */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-8 text-center text-white shadow-2xl"
          >
            <FaUserGraduate className="text-4xl text-blue-400 mx-auto mb-4" />
            <span className="text-5xl font-bold block mb-2">10,000+</span>
            <span className="text-xl text-gray-300">Happy Students</span>
          </motion.div>

          {/* Activities & Counselling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-8 text-center text-white shadow-2xl"
          >
            <FaHandsHelping className="text-4xl text-purple-400 mx-auto mb-4" />
            <span className="text-5xl font-bold block mb-2">360°</span>
            <span className="text-xl text-gray-300">Activities & Counselling</span>
          </motion.div>

          {/* New Feature - Certified Programs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-8 text-center text-white shadow-2xl"
          >
            <FaAward className="text-4xl text-amber-400 mx-auto mb-4" />
            <span className="text-5xl font-bold block mb-2">50+</span>
            <span className="text-xl text-gray-300">Certified Programs</span>
          </motion.div>
        </div>

        {/* About Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900 rounded-full opacity-20 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-900 rounded-full opacity-20 -ml-24 -mb-24"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Satyagrah Educational and Charitable Trust is a shining example of how a single individual's vision can turn into a social movement that impacts thousands of lives. Founded in 2021 and registered on August 20, 2023, we're making a significant difference in India's educational landscape.
              </p>
              
              <div className="border-t border-gray-700 pt-6">
                <p className="text-lg font-medium text-white">SATYAGRAH EDUCATIONAL TRUST</p>
                <p className="text-blue-400">Empowering futures through education</p>
              </div>
            </div>

            {/* Right Profile */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg mb-4">
                <img 
                  src={mentor}
                  alt="Abhinav Akarsh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">Abhinav Akarsh</h3>
              <p className="text-blue-400 mb-2">Coordinator & Head Mentor</p>
              <p className="text-gray-400 text-sm">Transforming education since 2021</p>
              
              {/* Mentor Badge */}
              <div className="mt-4 flex items-center bg-gray-800 rounded-full px-4 py-2">
                <FaChalkboardTeacher className="text-yellow-400 mr-2" />
                <span className="text-sm">Certified Education Mentor</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorSection;
