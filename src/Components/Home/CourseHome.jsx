import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import backgroundImage from '../../images/lab2.jpg';
import { Link } from 'react-router-dom';

const CourseHome = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.4
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-indigo-100 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-emerald-100 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-amber-100 mix-blend-multiply filter blur-xl"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">Premium</span> Study Consultation
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Let Satyagrah guide you through every step of your study application journey with expert advice tailored to your unique profile.
          </motion.p>
        </div>

        <motion.div 
          variants={cardVariants}
          className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-6"
              >
                Why Choose Satyagrah?
              </motion.h3>
              
              <motion.ul 
                variants={containerVariants}
                className="space-y-4"
              >
                <motion.li 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-300">Personalized university shortlisting based on your profile</p>
                </motion.li>
                
                <motion.li 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-300">Strategic profile building for competitive applications</p>
                </motion.li>
                
                <motion.li 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-300">End-to-end application process management</p>
                </motion.li>
              </motion.ul>
              
              <motion.div 
                variants={itemVariants}
                className="mt-8"
              >
            <Link to="/registration">
                <button className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Register Now
                </button>
                </Link>
              </motion.div>
            </div>
            
            <div className="bg-gray-800 p-8 md:p-10 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="relative w-full h-64 md:h-full"
              >
                {isMobile ? (
                  <img 
                    src={backgroundImage}
                    alt="Consultation illustration"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img 
                      src={backgroundImage}
                    alt="Consultation illustration"
                    className="w-full h-full object-contain"
                  />
                )}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-indigo-600 opacity-20 filter blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-emerald-600 opacity-20 filter blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CourseHome;
