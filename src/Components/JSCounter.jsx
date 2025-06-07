import React, { useRef } from "react";
import { animate, motion } from "framer-motion";

const JSCounter = () => {
  const studentsCount = useRef(null);
  const institutionsCount = useRef(null);
  const coursesCount = useRef(null);
  const mentorsCount = useRef(null);

  const animationStudentsCount = () => {
    animate(0, 10000, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => (studentsCount.current.textContent = v.toFixed()),
    });
  };

  const animationInstitutionsCount = () => {
    animate(0, 300, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => (institutionsCount.current.textContent = v.toFixed()),
    });
  };

  const animationCoursesCount = () => {
    animate(0, 500, {
      duration: 1.7,
      ease: "easeOut",
      onUpdate: (v) => (coursesCount.current.textContent = v.toFixed()),
    });
  };

  const animationMentorsCount = () => {
    animate(0, 100, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => (mentorsCount.current.textContent = v.toFixed()),
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-indigo-100 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-emerald-100 filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Students */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              <motion.span
                whileInView={animationStudentsCount}
                ref={studentsCount}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              ></motion.span>
              <span className="text-gray-400">+</span>
            </p>
            <p className="text-sm md:text-lg font-medium text-gray-600">Students</p>
          </motion.div>

          {/* Institutions */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              <motion.span
                ref={institutionsCount}
                whileInView={animationInstitutionsCount}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              ></motion.span>
              <span className="text-gray-400">+</span>
            </p>
            <p className="text-sm md:text-lg font-medium text-gray-600">Institutions</p>
          </motion.div>

          {/* Courses */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              <motion.span
                ref={coursesCount}
                whileInView={animationCoursesCount}
                className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
              ></motion.span>
              <span className="text-gray-400">+</span>
            </p>
            <p className="text-sm md:text-lg font-medium text-gray-600">Courses</p>
          </motion.div>

          {/* Mentors */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              <motion.span
                ref={mentorsCount}
                whileInView={animationMentorsCount}
                className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"
              ></motion.span>
              <span className="text-gray-400">+</span>
            </p>
            <p className="text-sm md:text-lg font-medium text-gray-600">Mentors</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JSCounter;
