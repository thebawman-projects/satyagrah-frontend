import React, { useEffect, useRef } from 'react';

const YouTubeVideoCards = ({ videos }) => {
  const containerRef = useRef(null);
  const scrollInterval = useRef(null);

  // Auto-scroll with pause on hover
  useEffect(() => {
    const startAutoScroll = () => {
      scrollInterval.current = setInterval(() => {
        if (containerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
          const maxScroll = scrollWidth - clientWidth;
          
          if (scrollLeft >= maxScroll - 10) {
            containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
          }
        }
      }, 1500); // Adjust this number to change scroll timing (in milliseconds)
    };

    startAutoScroll();

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
         <div className="conatainer">
        <p className="common-heading regulatory text-gray-600 md:text-3xl sm:text-2xl p-2 ml-[-2rem] md:ml-2"> Our Latest Activities</p>
      </div>
      <div 
        ref={containerRef}
        className="grid grid-flow-col auto-cols-[90vw] sm:auto-cols-[45vw] lg:auto-cols-[30vw] gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {videos.map((video, index) => {
          // Handle both string URLs and object formats
          const videoUrl = typeof video === 'string' ? video : video.url;
          const videoTitle = typeof video === 'string' ? `Video ${index + 1}` : video.title || `Video ${index + 1}`;
          const videoId = videoUrl.split('/').pop().split('?')[0];
          
          return (
           
            <div 
              key={`${videoId}-${index}`}
              className="snap-start flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-gray-900"
            >
                 
              <div className="relative pt-[56.25%] w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                  title={videoTitle}  // Required accessible title
                  aria-label={videoTitle}  // Additional accessibility
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"  // Better performance
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Add styles to hide scrollbar
if (typeof document !== 'undefined') {
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
}

export default YouTubeVideoCards;
