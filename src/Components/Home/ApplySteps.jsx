import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaUserEdit, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaHandshake, 
  FaStar,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ApplySteps = () => {
  const steps = [
    {
      number: 1,
      icon: <FaGraduationCap />,
      title: "Minimum Eligibility",
      description: "10th/12th Passed with 50% Marks, Age 16-17 Years",
      color: "from-blue-400 to-blue-500"
    },
    {
      number: 2,
      icon: <FaUserEdit />,
      title: "Application Process",
      description: "86 Branches Across States with Course Options",
      color: "from-purple-400 to-purple-500"
    },
    {
      number: 3,
      icon: <FaPhoneAlt />,
      title: "Verification Call",
      description: "Receive Welcome Call from Our Team",
      color: "from-emerald-400 to-emerald-500"
    },
    {
      number: 4,
      icon: <FaMapMarkerAlt />,
      title: "Final Counseling",
      description: "Visit Our Head Office for Final Approval",
      color: "from-amber-400 to-amber-500"
    },
    {
      number: 5,
      icon: <FaHandshake />,
      title: "Scholarship Award",
      description: "100% Scholarship with Bond Agreement",
      color: "from-red-400 to-red-500"
    },
    {
      number: 6,
      icon: <FaStar />,
      title: "Dream Achievement",
      description: "Begin Your Higher Education Journey",
      color: "from-indigo-400 to-indigo-500"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Satyagrah Scholar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to unlock your 100% scholarship opportunity
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content Card */}
              <div className="relative h-full bg-white rounded-xl p-6 shadow-lg border border-gray-100 group-hover:border-transparent transition-all duration-300">
                {/* Number Badge */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl mb-6`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                
                {/* Learn More */}
                <div className="flex items-center text-blue-500 group-hover:text-blue-600 transition-colors">
                  <span className="mr-2 font-medium">Learn more</span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <Link to="/registration" className="flex items-center justify-center">
            <span className="relative z-10 flex items-center justify-center">
              Apply Now <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            </Link>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplySteps;
