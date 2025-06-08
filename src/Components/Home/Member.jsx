import React from 'react';
import { motion } from 'framer-motion';
import member1 from '../../images/member1.jpeg';
import member2 from '../../images/member2.jpeg';
import member3 from '../../images/member3.jpeg';
import member4 from '../../images/member4.jpeg';
import member5 from '../../images/member5.jpeg';
import member6 from '../../images/member6.jpeg';
import member7 from '../../images/member7.jpeg';
import member8 from '../../images/member8.jpeg';
import member9 from '../../images/member9.jpeg';
import member10 from '../../images/member10.jpeg';

const Card = ({ photo, name, designation, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut"
    }}
    whileHover={{ 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
  >
    <div className="overflow-hidden h-60">
      <motion.img 
        src={photo} 
        alt={name} 
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <div className="p-5">
      <motion.h2 
        className="font-bold text-xl mb-2 text-gray-800"
        whileHover={{ color: "#3B82F6" }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.h2>
      <motion.p 
        className="text-gray-600"
        whileHover={{ color: "#4B5563" }}
        transition={{ duration: 0.2 }}
      >
        {designation}
      </motion.p>
    </div>
  </motion.div>
);

const Member = () => {
  const people = [
    { photo: member4, name: 'Abhinav Akarsh', designation: 'Chairman' },
    { photo: member2, name: 'Shailendra Kumar', designation: 'Board Of Director' },
    { photo: member3, name: 'Ayushi Akarsh', designation: 'Trustee' },
    { photo: member6, name: 'Vicky Singh', designation: 'Associate Manager' },
    { photo: member8, name: 'Palak Kumari', designation: 'Coordinator Manager' },
    { photo: member1, name: 'Dr. Rahul Kumar', designation: 'Resolution Committee Member' },
    { photo: member5, name: 'Akash Kumar Pathak', designation: 'Resolution Committee Member' },
    { photo: member7, name: 'Naveen Kumar', designation: 'Resolution Committee Member' },
    { photo: member10, name: 'Prince Raj', designation: 'Resolution Committee Member' },
    { photo: member9, name: 'Nagina Mahto', designation: 'Resolution Committee Member' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {people.map((person, index) => (
          <Card 
            key={index} 
            photo={person.photo} 
            name={person.name} 
            designation={person.designation} 
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Member;
