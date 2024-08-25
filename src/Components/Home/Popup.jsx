import React, { useState, useEffect } from 'react';
import axios from "axios";
import { toast } from "react-hot-toast";
import homeImg2 from '../../images/frontimg2.png'
import homeImg1 from '../../images/frontimg1.png'
import homeImg3 from '../../images/frontimg3.png'
import homeImg4 from '../../images/frontimg4.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { FaFacebook,  FaInstagram, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
SwiperCore.use([Autoplay, Navigation]);



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
    const {  name, email, phone, program } = formData;
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
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl mx-4 relative flex flex-col md:flex-row">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
             <FaTimes/>
            </button>
            <div className="md:w-1/2 hidden md:block max-h-[950px] p-4 pr-8 items-center align-center">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                loop={true}
                autoplay = {{
                  delay:2000,
                  disableOnInteraction:false,
                  reverseDirection:true
                }}
              >
                <SwiperSlide><img src={homeImg1} alt="Building 1" /></SwiperSlide>
                <SwiperSlide><img src={homeImg2} alt="Building 2" /></SwiperSlide>
                <SwiperSlide><img src={homeImg4} alt="Building 4" /></SwiperSlide>
                <SwiperSlide><img src={homeImg3} alt="Building 3" /></SwiperSlide>
              </Swiper>
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-xl font-bold mb-2">REQUEST A CALLBACK</h2>
              <div className="bg-yellow-300 text-center py-1 mb-4"> Or Call US : 8877456111</div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mobile No.</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Program</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
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
                <button  type='submit'
          className={`${loading} bg-blue-500 text-white w-full px-4 py-2 rounded`}
          disabled={loading}
        >
          {loading ? <div className="loader"></div> : "Submit Request"}
        </button>
              
              </form>
              <div className="mt-4 flex justify-center space-x-4">
              <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-700">Contact us via: </span>
              <div className="flex space-x-4 ml-4">
                <a href="https://www.facebook.com/profile.php?id=100064861366081" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook size={24} />
                </a>
                <a href="https://x.com/satyagrah_trust" className="text-blue-400 hover:text-blue-600">
                  <FaXTwitter size={24} />
                </a>
                <a href="https://www.instagram.com/satyagrah_educational_trust?igsh=MTNyaGJxdmp6d3ZpMg==" className="text-pink-600 hover:text-pink-800">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};




export default Popup
