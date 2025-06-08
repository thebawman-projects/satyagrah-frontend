import React, { useState, useEffect } from 'react';
import axios from "axios";
import { toast } from "react-hot-toast";
import homeImg2 from '../../images/frontimg2.png';
import homeImg1 from '../../images/frontimg1.png';
import homeImg3 from '../../images/frontimg3.png';
import homeImg4 from '../../images/frontimg4.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { FaFacebook, FaInstagram, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    setLoading(true);  
    event.preventDefault();
    const { name, email, phone, program } = formData;
    try {
      const { data } = await axios.post("/leads/registration", {
        name, email, phone, program
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false); 
      } else {
        toast.success("Thanks For Registration");
        setIsOpen(false);
        setFormData({}); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.id === 'popup-container') {
      // setIsOpen(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          id="popup-container"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50 p-2"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-xl shadow-2xl w-[80vw] sm:w-[90vw] md:w-[80vw] lg:max-w-3xl mx-auto relative flex flex-col md:flex-row overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button - Always visible */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1 sm:p-1.5 shadow-md"
            >
              <FaTimes className="text-sm sm:text-base"/>
            </button>
            
            {/* Image Slider Section - Hidden on mobile */}
            <div className="hidden md:block md:w-1/2 h-auto relative p-2 sm:p-3">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-1"></div>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  reverseDirection: true
                }}
                className="h-full rounded-lg overflow-hidden"
              >
                <SwiperSlide className="p-1">
                  <img 
                    src={homeImg1} 
                    alt="Building 1" 
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className="p-1">
                  <img 
                    src={homeImg2} 
                    alt="Building 2" 
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className="p-1">
                  <img 
                    src={homeImg4} 
                    alt="Building 4" 
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide className="p-1">
                  <img 
                    src={homeImg3} 
                    alt="Building 3" 
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                </SwiperSlide>
              </Swiper>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white z-2">
                <h2 className="text-lg sm:text-xl font-bold mb-1">Start Your Educational Journey</h2>
                <p className="text-xs sm:text-sm opacity-90">Get expert guidance for your academic future</p>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-3 sm:p-4">
              <div className="text-center mb-3 sm:mb-4">
                <HiAcademicCap className="text-2xl sm:text-3xl text-blue-600 mx-auto mb-1 sm:mb-2" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">REQUEST A CALLBACK</h2>
                <div className="flex items-center justify-center mt-1 sm:mt-2 mb-2 sm:mb-3">
                  <FaPhoneAlt className="text-blue-500 mr-1 sm:mr-2 text-xs sm:text-sm" />
                  <span className="text-gray-700 font-medium text-xs sm:text-sm">Or Call Us: 8877456111</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 sm:px-3 sm:py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-xs sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 sm:px-3 sm:py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-xs sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 sm:px-3 sm:py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-xs sm:text-sm"
                    placeholder="Enter your mobile number"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 sm:px-3 sm:py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none bg-white text-xs sm:text-sm"
                  >
                    <option value="">Select Program</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Medical">Management</option>
                    <option value="Degree">Education</option>
                    <option value="Paramedical">Paramedical</option>
                    <option value="Non-Technical">Non-Technical</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium shadow-md hover:shadow-lg transition-all ${loading ? 'opacity-80' : ''} text-xs sm:text-sm`}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <>
                      <FiSend className="mr-1 sm:mr-2 text-xs sm:text-sm" />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-2 sm:mb-3">Connect with us on social media</p>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=100064861366081" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <FaFacebook size={12} className="sm:w-4" />
                  </a>
                  <a href="https://x.com/satyagrah_trust" className="text-gray-800 hover:text-gray-600 transition-colors">
                    <FaXTwitter size={12} className="sm:w-4" />
                  </a>
                  <a href="https://www.instagram.com/satyagrah_educational_trust?igsh=MTNyaGJxdmp6d3ZpMg==" className="text-pink-600 hover:text-pink-800 transition-colors">
                    <FaInstagram size={12} className="sm:w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
