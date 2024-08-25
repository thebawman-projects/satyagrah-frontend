import React from "react";
import './JsCounter.css'
import { animate, motion } from 'framer-motion'
import { useRef } from "react";

const JSCounter = () => {
  const studentsCount = useRef(null);
  const projectCount = useRef(null);
  const institutionsCount = useRef(null);
  const CourseCount = useRef(null);

  const animationStudentsCount = () => {
    animate(0, 10000, {
      duration: 1,
      onUpdate: (v) => (studentsCount.current.textContent = v.toFixed()),
    });
  };
  const animationInstitutionsCount = () => {
    animate(0, 300, {
      duration: 1,
      onUpdate: (v) => (institutionsCount.current.textContent = v.toFixed()),
    });
  };
  const animationCourseCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (CourseCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };


  return (
    <section className="bg-slatAe-800 section section-work-data ">
      <div className="container grid grid-cols-4">
        <div>
          <p className="text-[1rem] md:text-[3rem] ">
        <motion.span
                  whileInView={animationStudentsCount}
                  ref={studentsCount}
                ></motion.span>+</p>
          <p className="text-[1rem] md:text-[1.5rem]">Students</p>
        </div>
        <div>
        <p className="text-[1rem] md:text-[3rem] ">
        <motion.span
                    ref={institutionsCount}
                    whileInView={animationInstitutionsCount}
                  >
                  </motion.span>+
                  </p>
          <p className="text-[1rem] md:text-[1.5rem]">Institutions</p>
        </div>
        <div>
        <p className="text-[1rem] md:text-[3rem] ">
        <motion.span
                    ref={CourseCount}
                    whileInView={animationCourseCount}
                  >
                  </motion.span>+
                  </p>
          <p className="text-[1rem] md:text-[1.5rem]">Courses</p>
        </div>
        <div>
        <p className="text-[1rem] md:text-[3rem] ">
        <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                  </motion.span>+
                  </p>
          <p className="text-[1rem] md:text-[1.5rem]">Mentors</p>
        </div>
      </div>
    </section>
  );
};

export default JSCounter;
