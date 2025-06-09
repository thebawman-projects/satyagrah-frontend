import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import sankalplogo from '../../images/sankalp.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'University', path: '/university' },
    { name: 'About Us', path: '/about' },
  ];

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    }),
    hover: { scale: 1.05 },
    tap: { scale: 0.98 }
  };

  const mobileMenu = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: { 
      y: '-100%',
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-800/95 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-gray-800/90 py-3'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                className="h-10 w-auto" 
                src={sankalplogo} 
                alt="Sankalp Logo" 
              />
              <span className="ml-2 text-xl font-bold text-white hidden sm:inline">
                Satyagrah Educational & Charitable Trust
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex space-x-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-700/50 transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-400 w-0 group-hover:w-4/5 transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* AI Registration Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2"
            >
              <Link
                to="/registration"
                className="flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 3,
                    ease: 'linear',
                  }}
                />
                <FaRobot className="mr-2 text-yellow-200 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Register Now</span>
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/registration"
                className="flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md"
              >
                <FaRobot className="mr-1" />
                Register
              </Link>
            </motion.div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-label="Main menu"
            >
              {isOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                >
                  <FaTimes className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                >
                  <FaBars className="h-5 w-5" />
                </motion.div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenu}
            className="md:hidden fixed inset-0 z-40 bg-gray-700/95 backdrop-blur-sm pt-20 px-4 overflow-y-auto"
            style={{
              top: '4rem',
              height: 'calc(100vh - 4rem)'
            }}
          >
            <div className="space-y-1 pb-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-gray-100 hover:text-white hover:bg-gray-600/50 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                className="pt-2"
              >
                <Link
                  to="/registration"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center px-4 py-3 w-full text-lg font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-md hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 transition-all duration-500 shadow-lg"
                >
                  <FaRobot className="mr-2 animate-bounce" />
                  Register Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
