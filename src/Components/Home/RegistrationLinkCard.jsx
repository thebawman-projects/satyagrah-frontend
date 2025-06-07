import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaGlobeAmericas, FaUserTie, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegistrationLinkCard = () => {
  const careerPaths = [
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "Government Services",
      desc: "Comprehensive preparation for civil & defense services",
      color: "bg-blue-600"
    },
    {
      icon: <FaGlobeAmericas className="text-2xl" />,
      title: "Global Careers",
      desc: "Placement support for international opportunities",
      color: "bg-purple-600"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Corporate Careers",
      desc: "Pathways to dream jobs at top MNCs",
      color: "bg-teal-600"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Entrepreneurship",
      desc: "Guidance to launch your own venture",
      color: "bg-amber-600"
    }
  ];

  return (
    <section className="bg-white pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Giving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Wings</span> to Your Career
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Under the guidance of our expert faculty and global alumni network, we propel students toward success. Whether preparing for government services, landing MNC jobs, or launching startups, SATYAGRAH provides the perfect launchpad for your career trajectory.
            </p>
            <Link to="/courses">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300 shadow-md"
            >
              View Courses
            </motion.button>
            </Link>
          </motion.div>

          {/* Career Path Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${path.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-lg mb-4 bg-white/20 flex items-center justify-center">
                  {path.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-white/90">{path.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Alumni Network Section */}
       
      </div>
    </section>
  );
};

export default RegistrationLinkCard;
