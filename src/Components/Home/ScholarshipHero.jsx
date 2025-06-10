import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaGraduationCap, FaMoneyBillWave, FaHome } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

const cardBackgrounds = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
];

const ScholarshipHero = () => {
  const boxRefs = useRef([]);
  const borderRingRefs = useRef([]);
  const [seatsLeft, setSeatsLeft] = useState(8755);
  const seatsRef = useRef(8755);

  useEffect(() => {
    // Initialize seats
    seatsRef.current = 8755;
    
    // Random seat decrement function
    const decrementSeats = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Higher decrement rate during daytime (9AM to 9PM)
      const isDaytime = hours >= 9 && hours < 21;
      const decrementAmount = isDaytime 
        ? Math.floor(Math.random() * 2) + 1  // 1-2 seats
        : Math.random() > 0.7 ? 1 : 0;      // 30% chance of 1 seat
      
      if (seatsRef.current > 0) {
        seatsRef.current = Math.max(0, seatsRef.current - decrementAmount);
        setSeatsLeft(seatsRef.current);
      }
      
      // Random interval between 5 seconds to 2 minutes (shorter during day)
      const nextInterval = isDaytime 
        ? Math.random() * 30000 + 5000  // 5-35 seconds
        : Math.random() * 90000 + 30000; // 30-120 seconds
      
      setTimeout(decrementSeats, nextInterval);
    };
    
    // Start the seat decrement process
    setTimeout(decrementSeats, 5000);

    // Smooth zoom-boom effect on hover
    boxRefs.current.forEach((box) => {
      if (!box) return;
      
      box.addEventListener('mouseenter', () => {
        gsap.to(box, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        });
        gsap.to(box.querySelector('.icon-container'), {
          scale: 1.1,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      });
      
      box.addEventListener('mouseleave', () => {
        gsap.to(box, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(box.querySelector('.icon-container'), {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Continuous border ring animation
    borderRingRefs.current.forEach((ring, index) => {
      if (!ring) return;
      
      const colors = ['#3B82F6', '#F97316', '#EF4444', '#EC4899', '#B45309'];
      gsap.to(ring, {
        background: `conic-gradient(from 0deg, ${colors[index % colors.length]} 0%, ${colors[(index + 1) % colors.length]} 50%, ${colors[index % colors.length]} 100%)`,
        duration: 3,
        repeat: -1,
        ease: 'none',
        modifiers: {
          background: value => `${value.replace('0deg', '+=360')}`
        }
      });
    });
  }, []);

  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-white" />,
      title: "100% Scholarship",
      desc: "All fees covered"
    },
    {
      icon: <GiReceiveMoney className="text-4xl text-white" />,
      title: "No Tuition",
      desc: "Zero course costs"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-white" />,
      title: "No Loans",
      desc: "Debt-free education"
    },
    {
      icon: <FaHome className="text-4xl text-white" />,
      title: "Only Hostel",
      desc: "Just accommodation"
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center">
      {/* Floating animated dots - increased quantity and improved animation */}
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        const color = ['#3B82F6', '#F97316', '#EF4444', '#EC4899', '#B45309', '#10B981', '#6366F1'][Math.floor(Math.random() * 7)];
        
        return (
          <div 
            key={i}
            className="absolute rounded-full -z-1"
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size}px`,
              opacity: Math.random() * 0.4 + 0.1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${duration}s infinite ease-in-out`,
              animationDelay: `${delay}s`,
              filter: 'blur(1px)'
            }}
          />
        );
      })}
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => boxRefs.current[index] = el}
              className="relative rounded-2xl overflow-hidden transform transition-all duration-300 hover:z-10 will-change-transform"
            >
              {/* Border with animated ring */}
              <div className="absolute inset-0 rounded-2xl p-0.5 overflow-hidden">
                <div 
                  ref={el => borderRingRefs.current[index] = el}
                  className="absolute inset-0 rounded-[calc(1rem-2px)] overflow-hidden"
                  style={{
                    background: `conic-gradient(from 0deg, #3B82F6, #F97316, #EF4444, #EC4899, #B45309)`,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '2px'
                  }}
                ></div>
              </div>
              
              {/* Card Content */}
              <div 
                className="relative h-full p-8 flex flex-col items-center text-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cardBackgrounds[index]})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className="icon-container mb-6 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <div className="w-16 h-1 bg-white/50 mb-4"></div>
                <p className="text-lg text-white/90 font-medium">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button with seats counter */}
        <div className="text-center mt-12 md:mt-16">
          <div className="mb-6">
            <div className="inline-block bg-white/90 px-6 py-3 rounded-full shadow-lg">
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  {seatsLeft.toLocaleString()}
                </span> seats remaining
              </p>
            </div>
          </div>
          
          <button 
            className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Apply Now - Limited Seats</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
          
          <p className="mt-4 text-gray-600 font-medium">
            Seats are filling fast! Apply before it's too late.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
          }
          25% { 
            transform: translateY(-30px) translateX(15px) rotate(5deg); 
          }
          50% { 
            transform: translateY(0) translateX(30px) rotate(0deg); 
          }
          75% { 
            transform: translateY(30px) translateX(15px) rotate(-5deg); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default ScholarshipHero;
