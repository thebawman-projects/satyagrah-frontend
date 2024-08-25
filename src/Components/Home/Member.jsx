import React from 'react';
import member1 from '../../images/member1.jpeg'
import member2 from '../../images/member2.jpeg'
import member3 from '../../images/member3.jpeg'
import member4 from '../../images/member4.jpeg'
import member5 from '../../images/member5.jpeg'
import member6 from '../../images/member6.jpeg'
import member7 from '../../images/member7.jpeg'
import member8 from '../../images/member8.jpeg'
import member9 from '../../images/member9.jpeg'
import member10 from '../../images/member10.jpeg'

const Card = ({ photo, name, designation }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={photo} alt={name} className="w-full h-60 object-cover" />
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <p className="text-gray-700">{designation}</p>
    </div>
  </div>
);

const Member = () => {
  const people = [
    { photo: member4 , name: 'Abhinav Akarsh', designation: 'Chairman ' },
    { photo: member2 , name: 'Shailendra Kumar', designation: 'Board Of Director ' },
    { photo: member3 , name: 'Ayushi Akarsh', designation: 'Trustee ' },
    { photo: member6 , name: 'Vicky Singh', designation: 'Associate Manager ' },
    { photo: member8 , name: 'Palak Kumari', designation: 'Coordinator Manager ' },
    { photo: member1 , name: 'Dr.Rahul Kumar', designation: 'Resolution Committee Member ' },
    { photo: member5 , name: 'Akash Kumar Pathak', designation: 'Resolution Committee Member ' },
    { photo: member7 , name: 'Naveen Kumar', designation: 'Resolution Committee Member ' },
    { photo: member10 , name: 'Prince Raj', designation: 'Resolution Committee Member ' },
    { photo: member9 , name: 'Nagina Mahto ', designation: 'Resolution Committee Member ' },

  ];

  return (
    <div className="container mx-auto md:p-4 sm:p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {people.map((person, index) => (
          <Card key={index} photo={person.photo} name={person.name} designation={person.designation} />
        ))}
      </div>
    </div>
  );
};

export default Member;
