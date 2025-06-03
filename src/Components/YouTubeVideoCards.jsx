import React from 'react';

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/JGwWNGJdvx8",
  "https://www.youtube.com/embed/kJQP7kiw5Fk",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/JGwWNGJdvx8"
];


const YouTubeVideoCards = (videos) => {
  return (
    <div className="w-full px-4 py-6">
      {/* Carousel Container */}
      khankir put
      <div className="relative">
        {/* Videos Grid */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="inline-flex space-x-6">
            {videos.map((videoUrl, index) => {
              // Extract video ID from URL
              const videoId = videoUrl.split('/').pop();
              
              return (
                <div 
                  key={index}
                  className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white
                    w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
                    transform transition-all duration-300 hover:scale-105"
                >
                  {/* Video Embed */}
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Video Info (optional) */}
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 truncate">Video {index + 1}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Scroll Indicators (optional) */}
        <div className="flex justify-center mt-4 space-x-2">
          {videos.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Custom CSS to hide scrollbar but keep functionality
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// Add styles to head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default YouTubeVideoCards;
