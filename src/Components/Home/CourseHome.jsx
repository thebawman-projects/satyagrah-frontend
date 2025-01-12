import React from 'react';
import backgroundImage from '../../images/lab2.jpg';
import { Link } from "react-router-dom";

const CourseHome = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl font-bold mb-2"> Get Free & Quality Online Consultation</h1>
        <h2 className="text-2xl mb-4">Councelling Starts Now.</h2>
        <p className="mb-5 px-5 text-sm">Satyagrah Trust आपके खाने-रहने और परीक्षा शुल्क को छोड़कर आपकी शिक्षा में हर प्रकार की मदद के लिए Welcome करता है, आपको जिस कोर्स में एडमिशन लेना है, जिस भी State में पढ़ना है आपको दोनों चीज़ो को चुनने की पूरी आज़ादी है, पर College Allotment का फैसला बोर्ड के मेंबर आपकी Counselling के बाद करेंगे, जो State Govt. University /AICTE/PCI/NCI/NCBT/NBA/NAAC Govt. of india से Approved रहेगा। हमारा ट्रस्ट किसी भी छात्र एवं छात्रा का किसी भी Private or Deemed University में नामांकन नहीं कराता है और इस तरह की University में नामांकन कराय हुए छात्रों की कोई मदद नहीं करता है। आपको दी गई Scholarship कर्ज नहीं होगी, बस आपको इरादा रखना है कि पढ़ने के बाद आप भी किसी एक जरूरतमंद बच्चे को बिना किसी जाति-धर्म देखे गोद लेकर पढ़ायेंगे, और अपनी शादी में दहेज नहीं लेंगे ना देंगे और ना ही अपने परिवार को लेने देंगे। इस मिशन से खुद जुड़ें और दूसरों को भी जोड़ें। Online Form भरने का भी पोर्टल Open कर दिया गया है, Satyagrah Trust के बारे में आप Phone करके या हमारी Website: www.satyagrahtrust.in से पूरी जानकारी प्राप्त कर सकते हैं. आप हमारे Youtube चैनल से भी जानकारी प्राप्त कर सकते हैं|</p>
        <Link to="/registration"><button className="  text-[1rem] bg-blue-950 text-black-800 bg-yellow-500 hover:bg-yellow-600  font-bold py-2 px-4 rounded">
         Registration
        </button></Link>
      </div>
    </div>
  );
};

export default CourseHome;
