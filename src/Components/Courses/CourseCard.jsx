import React from 'react';
import { useMediaQuery } from 'react-responsive';



const CourseList = ({ title, courses }) => {
  
  return (
    <div className="my-4 mx-8">
    <div className=" p-4 bg-transparent">
      <h2 className="text-white text-2xl font-bold border-b-2 border-dashed border-gray-300">{title}</h2>
      <ul className="mt-2 space-y-1">
        {courses.map((cours) => (
          <li key={cours} className="text-white text-lg">{cours}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

const CourseGrid = () => {
  const data = [
    {
      title: "Engineering",
      courses: ["•	Aerospace Engineering", "•	Automobile Engineering", "•	Bioinformatics Engineering", "•	Biomedical Engineering", "•	Biotechnology Engineering", "•	Chemical Engineering" ,"•	Computer science Engineering","•	Electrical and Electronics Engineering","•	Elec. & Communication Engineering","•	Food process Engineering","•	Genetic Engineering","•	Information technology Engineering","•	Mechanical Engineering","•	Nanotechnology Engineering","•	Telecommunication Engineering","•	Marine Engineering","•	Aeronautics Engineering","•	Petroleum Engineering","•	Petrochemical Engineering","•	Civil Engineering","•	Mining Engineering"]
    },
    {
      title: "Paramedical",
      courses: ["•	Diploma/ B.Sc./M.Sc. in Nursing","•	B.Sc. in cardiac technology","•	Perfusion technology","•	Operation theatre technology","•	Anaesthesia technology","•	Renal dialysis technology","•	Neuro science technology","•	Radiology","•	Optometry","•	BPT/MPT","•	ANM","•	GNM","•	PB  Nursing","•	DMLT","•	BMLT","•	M.Pharmacy","•	B.Pharmacy","•	D.Pharmacy"]
    },
    {
      title: "Diploma",
      courses: ["•	Computer science","•	Electronics & communication","•	Civil","•	Electrical ","•	Aeronautical","•	Mining","•	Fire and safety","•	Mechanical","•	Diploma in agriculture","•	Diploma in fashion technology"]
    },
    {
      title: "Non-Technical",
      courses: ["•	B.Sc. Agriculture","•	Bachelor/Master of Commerce, Arts, Science subjects","•	LLB (3 Years)","•	BA-LLB (5 Years)","•	Fashion Designing"]
    },
    {
      title: "Education",
      courses: ["•	D.Ed.","•	B.Ed.","•	M.Ed."]
    },
    {
      title: "Management",
      courses: ["•	BBA","•	BCA","•	BBM","•	B.Com","•	M.Com","•	MBA","•	MCA","•	MBA Integrated","•	Hotel Management"]
    }
  ];
  
  
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
      {data.map((item) => (
        <CourseList key={item.title} title={item.title} courses={item.courses} />
      ))}
    </div>
  );
};

export default CourseGrid;


