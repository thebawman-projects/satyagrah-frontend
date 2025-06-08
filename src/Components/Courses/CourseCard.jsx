import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const CourseHead = () => {
  const bgImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-xl shadow-2xl mx-4 mt-4 mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10"></div>
      <img 
        src={bgImage} 
        alt="Students learning" 
        className="w-full h-64 md:h-80 object-cover object-center"
      />
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute bottom-6 left-6 text-white text-4xl md:text-6xl font-bold z-20"
      >
        Our Courses
      </motion.h1>
    </motion.div>
  );
};

const CourseCard = ({ title, courses, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple timeout-based animation trigger instead of intersection observer
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-100"
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>
      <ul className="p-4 space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
        {courses.map((course, i) => (
          <motion.li 
            key={course}
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 * i }}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-start"
          >
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>{course}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const CourseGrid = () => {
  const data = [
    {
      title: "Engineering",
      courses: [
        "Aerospace Engineering", 
        "Automobile Engineering", 
        "Bioinformatics Engineering",
        "Biomedical Engineering",
        "Biotechnology Engineering",
        "Chemical Engineering",
        "Computer Science Engineering",
        "Electrical and Electronics Engineering",
        "Electronics & Communication Engineering",
        "Food Process Engineering",
        "Genetic Engineering",
        "Information Technology Engineering",
        "Mechanical Engineering",
        "Nanotechnology Engineering",
        "Telecommunication Engineering",
        "Marine Engineering",
        "Aeronautics Engineering",
        "Petroleum Engineering",
        "Petrochemical Engineering",
        "Civil Engineering",
        "Mining Engineering"
      ]
    },
    {
      title: "Paramedical",
      courses: [
        "Diploma/ B.Sc./M.Sc. in Nursing",
        "B.Sc. in Cardiac Technology",
        "Perfusion Technology",
        "Operation Theatre Technology",
        "Anaesthesia Technology",
        "Renal Dialysis Technology",
        "Neuro Science Technology",
        "Radiology",
        "Optometry",
        "BPT/MPT",
        "ANM",
        "GNM",
        "PB Nursing",
        "DMLT",
        "BMLT",
        "M.Pharmacy",
        "B.Pharmacy",
        "D.Pharmacy"
      ]
    },
    {
      title: "Diploma",
      courses: [
        "Computer Science",
        "Electronics & Communication",
        "Civil",
        "Electrical",
        "Aeronautical",
        "Mining",
        "Fire and Safety",
        "Mechanical",
        "Diploma in Agriculture",
        "Diploma in Fashion Technology"
      ]
    },
    {
      title: "Non-Technical",
      courses: [
        "B.Sc. Agriculture",
        "Bachelor/Master of Commerce, Arts, Science subjects",
        "LLB (3 Years)",
        "BA-LLB (5 Years)",
        "Fashion Designing"
      ]
    },
    {
      title: "Education",
      courses: [
        "D.Ed.",
        "B.Ed.",
        "M.Ed."
      ]
    },
    {
      title: "Management",
      courses: [
        "BBA",
        "BCA",
        "BBM",
        "B.Com",
        "M.Com",
        "MBA",
        "MCA",
        "MBA Integrated",
        "Hotel Management"
      ]
    }
  ];

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <CourseHead />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'} gap-6`}
      >
        {data.map((item, index) => (
          <CourseCard 
            key={item.title} 
            title={item.title} 
            courses={item.courses} 
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CourseGrid;
