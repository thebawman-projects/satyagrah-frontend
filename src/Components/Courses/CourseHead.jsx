import React from 'react';
import src from '../../images/CourseBG.jpg'

const CourseHead = () => {
  return (
    <div className="relative p-4 bg-slate-800">
      <img src={src} alt="Img" className="w-full h-auto  object-cover rounded-lg shadow-md" />
      <h1 className="absolute bottom-0 left-0 text-black md:text-6xl font-bold text-2xl bg-white p-2 rounded-tr-lg md:px-8 md:py-4">
        Courses List
      </h1>
    </div>
  );
};

export default CourseHead;
