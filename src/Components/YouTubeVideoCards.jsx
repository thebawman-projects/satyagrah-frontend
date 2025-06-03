import React, { useEffect, useRef } from 'react';

const YouTubeVideoCards = ({ videos }) => {
  const containerRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    // Auto-scroll functionality
    const startAutoScroll = () => {
      scrollInterval.current = setInterval(() => {
        if (containerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
          const maxScroll = scrollWidth - clientWidth;
          
          if (scrollLeft >= maxScroll - 10) {
            // If at end, scroll back to start
            containerRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Otherwise scroll right
            containerRef.current.scrollBy({
              left: 400,
              behavior: 'smooth'
            });
          }
        }
      }, 1500); // Scroll every 3 seconds
    };

    startAutoScroll();

    // Pause on hover
    const container = containerRef.current;
    const pauseScroll = () => clearInterval(scrollInterval.current);
    const resumeScroll = () => startAutoScroll();

    container?.addEventListener('mouseenter', pauseScroll);
    container?.addEventListener('mouseleave', resumeScroll);

    return () => {
      clearInterval(scrollInterval.current);
      container?.removeEventListener('mouseenter', pauseScroll);
      container?.removeEventListener('mouseleave', resumeScroll);
    };
  }, []);

  return (
    <div className="w-full px-4 py-6 mx-auto">
      <div 
        ref={containerRef}
        className="grid grid-flow-col auto-cols-[90vw] sm:auto-cols-[45vw] lg:auto-cols-[30vw] gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {videos.map((videoUrl, index) => {
          const videoId = videoUrl.split('/').pop();
          
          return (
            <div 
              key={index}
              className="snap-start flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-gray-900"
            >
              <div className="relative pt-[56.25%] w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Add custom styles for scrollbar hiding
const styleElement = document.createElement('style');
styleElement.innerHTML = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(styleElement);

export default YouTubeVideoCards;
