import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaGlobe, 
  FaAward, 
  FaHandsHelping, 
  FaStar, 
  FaClock,
  FaTimes
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const WhyChooseUs = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Flexibility",
      icon: <FaClock />,
      description: "Custom learning paths tailored to your schedule",
      details: "Choose from self-paced online, hybrid, or intensive in-person formats with 24/7 resource access.",
      color: "#8B5CF6", // Purple
      bgGradient: "bg-gradient-to-br from-purple-100 to-pink-100"
    },
    {
      title: "Expertise",
      icon: <FaShieldAlt />,
      description: "Learn from industry veterans",
      details: "Our faculty brings 15+ years of field experience with real-world case studies.",
      color: "#F59E0B", // Amber
      bgGradient: "bg-gradient-to-br from-amber-100 to-orange-100"
    },
    {
      title: "Quality",
      icon: <FaStar />,
      description: "World-class curriculum standards",
      details: "ISO 9001 certified programs updated with latest OSHA and NFPA regulations.",
      color: "#3B82F6", // Blue
      bgGradient: "bg-gradient-to-br from-blue-100 to-cyan-100"
    },
    {
      title: "Support",
      icon: <FaHandsHelping />,
      description: "End-to-end mentorship",
      details: "From enrollment to job placement with 24/7 academic support.",
      color: "#10B981", // Emerald
      bgGradient: "bg-gradient-to-br from-emerald-100 to-teal-100"
    },
    {
      title: "Global",
      icon: <FaGlobe />,
      description: "Internationally recognized",
      details: "Certifications valid in 50+ countries with multilingual options.",
      color: "#7C3AED", // Violet
      bgGradient: "bg-gradient-to-br from-violet-100 to-indigo-100"
    },
    {
      title: "Certified",
      icon: <FaAward />,
      description: "Industry-accredited programs",
      details: "Approved by NSC and meeting BCSP certification requirements.",
      color: "#EC4899", // Pink
      bgGradient: "bg-gradient-to-br from-pink-100 to-rose-100"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const popup = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Decorative floating bubbles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 20, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-gray-400"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Satyagrah</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exceptional safety education that prepares you for a rewarding career through innovation and excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedFeature(feature)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${feature.bgGradient} p-[1px]`}
            >
              <motion.div 
                className="bg-white rounded-[11px] h-full p-6 flex flex-col"
                animate={{
                  scale: hoveredCard === index ? 0.98 : 1
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: feature.color }}
                >
                  {React.cloneElement(feature.icon, { 
                    className: "text-2xl text-white" 
                  })}
                </div>
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="mt-auto flex items-center text-blue-500 group-hover:text-blue-600 transition-colors">
                  <span className="mr-2">Learn more</span>
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl p-8 md:p-10 text-center border border-gray-200 shadow-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Join India's premier safety education community today.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>

      {/* Feature Popup Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              variants={popup}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-2xl w-full rounded-xl overflow-hidden bg-white shadow-2xl border border-gray-200"
              onClick={(e) => e.stopPropagation()}
              style={{ borderColor: selectedFeature.color }}
            >
              <div className="p-8">
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setSelectedFeature(null)}
                >
                  <FaTimes className="text-xl" />
                </button>
                
                <div className="flex items-start mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-6"
                    style={{ backgroundColor: selectedFeature.color }}
                  >
                    {React.cloneElement(selectedFeature.icon, { 
                      className: "text-2xl text-white" 
                    })}
                  </div>
                  <h3 
                    className="text-3xl font-bold mt-2"
                    style={{ color: selectedFeature.color }}
                  >
                    {selectedFeature.title}
                  </h3>
                </div>
                
                <div className="prose text-gray-600 mb-8">
                  <p className="text-lg">{selectedFeature.details}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-white font-bold py-2 px-6 rounded-lg shadow-md"
                    style={{ backgroundColor: selectedFeature.color }}
                  >
                    Learn More
                  </motion.button>
                  <a href="tel:+918877456111">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white border border-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-50"
                  >
                    Contact Advisor
                  </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;
