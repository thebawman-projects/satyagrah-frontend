import React from 'react';
import homeImg1 from '../../images/imgHome1.png';
import homeImg2 from '../../images/imgHome2.png';
import homeImg3 from '../../images/imgHome3.png';
import homeImg4 from '../../images/imgHome4.png';
import homeImg5 from '../../images/imgHome5.png';
import homeImg6 from '../../images/imgHome6.png';

function HomeImageCard() {
  const images = [
    { img: homeImg1, title: "Campus View" },
    { img: homeImg2, title: "Library" },
    { img: homeImg3, title: "Classroom" },
    { img: homeImg4, title: "Laboratory" },
    { img: homeImg5, title: "Sports" },
    { img: homeImg6, title: "Events" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            <span className="relative z-10">Our Gallery</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 z-0 opacity-70"></span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore moments that define our institution's excellence
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeImageCard;
