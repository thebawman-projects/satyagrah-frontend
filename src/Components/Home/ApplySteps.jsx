import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ApplySteps = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" py-12 bg-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Easy Steps to Apply
        </motion.h2>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-start" variants={itemVariants}>
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white text-xl font-bold">01</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">Complete Application Form</h3>
              <p className="mt-2 text-gray-600">Fill out the application form with your personal details.</p>
            </div>
          </motion.div>
          <motion.div className="flex items-start" variants={itemVariants}>
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 text-white text-xl font-bold">02</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">Choose your program</h3>
              <p className="mt-2 text-gray-600">Select the program that best fits your career goals.</p>
            </div>
          </motion.div>
          <motion.div className="flex items-start" variants={itemVariants}>
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white text-xl font-bold">03</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">Additional information</h3>
              <p className="mt-2 text-gray-600">Provide any additional information about yourself or your circumstances.</p>
            </div>
          </motion.div>
          <motion.div className="flex items-start" variants={itemVariants}>
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 text-white text-xl font-bold">04</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">Payment of Fees</h3>
              <p className="mt-2 text-gray-600">Complete the payment of fees to finalize your application.</p>
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-8 text-center">
         <Link to='/registration'> <motion.button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ENROLL NOW
          </motion.button></Link>
        </div>
      </div>
    </div>
  );
};


