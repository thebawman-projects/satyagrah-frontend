import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';

const FacebookEmbedPosts = ({postUrls}) => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollIntervalRef = useRef(null);

  // Fixed height configuration
  const fixedHeight = 500; // Set your desired fixed height in pixels
  const fixedAspectRatio = 1.5; // Width to height ratio (1.5:1)

  // Sample Facebook post URLs to embed
  

  // Load Facebook SDK
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      return;
    }

    scrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = container.offsetWidth * 0.8; // Scroll 80% of container width
        
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 5000); // Scroll every 5 seconds

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth * 0.8,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth * 0.8,
        behavior: 'smooth'
      });
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  return (
    <div className="max-w-full mx-auto bg-gray-100 p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="conatainer">
          <p className="common-heading regulatory text-gray-600 md:text-3xl sm:text-2xl p-2 ml-[-2rem] md:ml-2">Featured Facebook Posts</p>
        </div>
        <button 
          onClick={toggleAutoScroll}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
        >
          {isAutoScrolling ? (
            <>
              <FaPause /> Pause
            </>
          ) : (
            <>
              <FaPlay /> Play
            </>
          )}
        </button>
      </div>

      <div className="relative">
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hidden md:block"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 py-4 px-1 snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {postUrls.map((url, index) => (
            <div 
              key={index} 
              className="flex-none w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 snap-start"
              style={{ height: `${fixedHeight}px` }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div 
                  className="fb-post" 
                  data-href={url}
                  data-width={fixedHeight * fixedAspectRatio}
                  data-height={fixedHeight}
                  data-show-text="true"
                  data-lazy="true"
                >
                  <blockquote cite={url} className="fb-xfbml-parse-ignore">
                    <a href={url}>View post on Facebook</a>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hidden md:block"
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>

      <style jsx global>{`
        .fb-post iframe {
          width: 100% !important;
          height: ${fixedHeight}px !important;
          min-height: ${fixedHeight}px !important;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FacebookEmbedPosts;
