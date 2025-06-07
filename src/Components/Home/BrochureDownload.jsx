import React from "react";
import { motion } from "framer-motion";
import Broucher from '../../images/Broucher.pdf'

const BrochureDownload = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
      

        <div className="relative inline-block">
          {/* Main download card */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.2
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Program Brochure 2025</h3>
                <p className="text-blue-100">Includes course details, university details, and network information</p>
              </div>
               <a href={Broucher} target="_blank" rel="noreferrer">
              <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center whitespace-nowrap">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Now (2.4MB)
              </button>
              </a>
            </div>
          </motion.div>

          {/* Alumni network indicator floating above */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200 flex items-center"
          >
            <span className="text-xs font-semibold text-gray-500 mr-1">JOIN OUR</span>
            <span className="text-sm font-bold text-indigo-600">100+ ALUMNI NETWORK</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownload;
