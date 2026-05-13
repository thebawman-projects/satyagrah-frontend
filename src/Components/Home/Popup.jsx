import React, { useState, useEffect } from 'react';
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

  // Google Apps Script se mila hua URL yaha daalein
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUdlRnBW719JSQAIGujEFoG0grGSjO040SzORT3BlhQWtVw-aslIbDB8UkZtIktvXtOg/exec";

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

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.program) {
      toast.error("Please fill all the fields!");
      return false;
    }
    return true;
  };

 const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) return; // Validation check

    setLoading(true);  
    
    try {
      // Data ko FormData object me convert kar rahe hain
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("program", formData.program);

      // Fetch request to Google Apps Script
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        // Dhyan de: Yahan se headers hata diye gaye hain, browser automatically FormData handle kar lega
        body: formPayload,
      });

      toast.success("Thanks for registering! Your details have been submitted.");
      setFormData({ name: '', email: '', phone: '', program: '' }); // Form reset
      setIsOpen(false); // Popup close

    } catch (error) {
      console.error("Form error:", error);
      toast.error("Network error. Could not submit the form.");
    } finally {
      setLoading(false); 
    }
  };

  const handleClickOutside = (e) => {
    // Agar background pe click hota hai toh popup band ho jayega
    if (e.target.id === 'popup-container') {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          id="popup-container"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50 p-4 transition-opacity duration-300"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[90vw] md:max-w-4xl mx-auto relative flex flex-col md:flex-row overflow-hidden max-h-[90vh] overflow-y-auto animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 hover:bg-gray-100 transition-colors z-10 bg-white rounded-full p-2 shadow-md"
            >
              <FaTimes className="text-sm sm:text-base"/>
            </button>
            
            {/* Image Slider Section */}
            <div className="hidden md:block md:w-1/2 h-auto relative p-3">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 rounded-l-xl"></div>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="h-full rounded-lg overflow-hidden"
              >
                {[homeImg1, homeImg2, homeImg4, homeImg3].map((img, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <img 
                      src={img} 
                      alt={`Campus ${index + 1}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                <h2 className="text-2xl font-bold mb-2">Start Your Educational Journey</h2>
                <p className="text-sm opacity-90">Get expert guidance for your academic future</p>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
              <div className="text-center mb-6">
                <HiAcademicCap className="text-4xl text-blue-600 mx-auto mb-2" />
                <h2 className="text-2xl font-bold text-gray-800">REQUEST A CALLBACK</h2>
                <div className="flex items-center justify-center mt-2">
                  <FaPhoneAlt className="text-blue-500 mr-2 text-sm" />
                  <span className="text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors">
                    <a href="tel:8877456111">Or Call Us: 8877456111</a>
                  </span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    placeholder="Enter your mobile number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white text-sm"
                  >
                    <option value="">Select Program</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Management">Management</option>
                    <option value="Education">Education</option>
                    <option value="Paramedical">Paramedical</option>
                    <option value="Non-Technical">Non-Technical</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center px-4 py-2.5 mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''} text-sm`}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <>
                      <FiSend className="mr-2 text-sm" />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-3">Connect with us on social media</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=100064861366081" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                    <FaFacebook size={16} />
                  </a>
                  <a href="https://x.com/satyagrah_trust" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all">
                    <FaXTwitter size={16} />
                  </a>
                  <a href="https://www.instagram.com/satyagrah_educational_trust?igsh=MTNyaGJxdmp6d3ZpMg==" target="_blank" rel="noopener noreferrer" className="bg-pink-100 p-2 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
                    <FaInstagram size={16} />
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
