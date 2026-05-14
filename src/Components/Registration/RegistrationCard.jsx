import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jsPDF } from 'jspdf';
import imgForm from '../../images/imgForm.png';
import qrpay from '../../images/qrnew.png';
import { IoMdClose } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';

// APNA GOOGLE APPS SCRIPT KA URL YAHAN DAALEIN
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUdlRnBW719JSQAIGujEFoG0grGSjO040SzORT3BlhQWtVw-aslIbDB8UkZtIktvXtOg/exec";

export const RegistrationCard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [modal, setModal] = useState(false);

  const [formData, setFormData] = useState({
    course: "", fullname: "", qualification: "", dob: "", gender: "",
    fathername: "", fatheroccupation: "", mothername: "", caste: "",
    income: "", address: "", pincode: "", email: "", mobile: "",
    alternatemobile: "", state: "",
  });

  const [paymentData, setPaymentData] = useState({
    name: "", paydate: "", mobile: "", upi: "",
  });

  const toggleModal = () => {
    setModal(!modal);
    document.body.classList.toggle("active-modal", !modal);
  };

  const textToCopy = "7667102184-1@okbizaxis";

  const copyText = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.success('Copied');
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = 128;
          canvas.height = 167;
          ctx.drawImage(img, 0, 0, 128, 167);
          const resizedImage = canvas.toDataURL('image/jpeg');
          setPhoto(resizedImage);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  // Sirf PDF Generate karne ka function
  const generatePDF = () => {
    const { course, state, fullname, qualification, dob, gender, fathername, fatheroccupation, mothername, caste, income, address, pincode, email, mobile, alternatemobile } = formData;
    const { upi, paydate } = paymentData;
    
    const doc = new jsPDF({ orientation: 'p', format: 'a4', compress: true });
    doc.addImage(imgForm, 'PNG', 0, 0, 212, 300);
    if (photo) doc.addImage(photo, 156, 77, 32, 40); // Condition add ki taki photo na hone par crash na ho
    
    doc.setFont('NotoSansAll-Regular');
    doc.text(course, 51.8, 96.4);
    doc.text(fullname, 37.5, 107.5);
    doc.text(qualification, 57, 116.7);
    doc.text(dob, 42, 128.2);
    doc.text(gender, 142, 126.2);
    doc.text(fathername, 40, 137.8);
    doc.text('IND', 143, 136.9);
    doc.text(mothername, 40, 148.8);
    doc.text(fatheroccupation, 148, 147);
    doc.text(income + ' /-', 82, 159);
    doc.text(caste, 142, 156.6);
    doc.text(address, 34, 170.5);
    doc.text(mobile, 34, 181);
    doc.text(pincode, 142, 181);
    doc.text(email, 35, 192.4);
    doc.text(alternatemobile, 142, 192.4);
    doc.text(state, 58, 212);
    doc.text('On: ' + paydate, 142, 224);
    doc.text('UPI Transaction ID : ' + upi, 45, 224);

    doc.save(`SATYAGRAH@${fullname}.pdf`);
  };

  // Data Google Sheet bhejkar PDF download karwane wala function
  const paymentForm = async () => {
    // Payment form validation
    if (!paymentData.name || !paymentData.paydate || !paymentData.upi || !paymentData.mobile) {
      toast.error("Please fill all payment details");
      return;
    }

    setLoading(true);
    
    try {
      // FormData ki jagah hum URLSearchParams use kar rahe hain
      // Ye Google Apps Script ke e.parameter ke sath 100% properly kaam karta hai
      const formPayload = new URLSearchParams();
      
      formPayload.append("sheetName", "Registration"); 
      
      // Registration Data append kar rahe hain
      Object.keys(formData).forEach(key => {
        formPayload.append(key, formData[key]);
      });
      
      // Payment Data append kar rahe hain
      formPayload.append("paymentName", paymentData.name);
      formPayload.append("paydate", paymentData.paydate);
      formPayload.append("upi", paymentData.upi);
      formPayload.append("paymentMobile", paymentData.mobile);

      // Google sheet pe request
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          // Ye header batata hai ki data URL encoded format me hai
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formPayload.toString(), // toString() karna zaroori hai
      });

      // Agar successfully sheet me chala gaya toh PDF generate karo aur navigate karo
      generatePDF();
      
      setFormData({
        course: "", fullname: "", qualification: "", dob: "", gender: "",
        fathername: "", fatheroccupation: "", mothername: "", caste: "",
        income: "", address: "", pincode: "", email: "", mobile: "",
        alternatemobile: "", state: "",
      });
      setPaymentData({ name: "", paydate: "", mobile: "", upi: "" });
      
      toggleModal();
      toast.success("Registration Done Successfully");
      navigate("/success/registrationform/apiCall/687refrjjjefewjwttokenfalse/wfewfwe/false/satyagrah/registrationdonetrue");

    } catch (error) {
      console.log(error);
      toast.error("Network Error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const paramsCheck = () => {
    if (!formData.alternatemobile || !formData.mobile || !formData.email || !formData.pincode || !formData.address || !formData.caste || !formData.fullname || !formData.course || !formData.state || !formData.income || !formData.qualification || !formData.mothername || !formData.dob || !formData.fatheroccupation || !formData.gender || !formData.fathername) {
      toast.error("Enter All Details");
    } else {
      toggleModal();
    }
  };

  return (
    // ... AAPKA BAAKI KA JSX/UI YAHAN WAISE KA WAISA HEE RAHEGA JAISE PEHLE THA ...
    // ... Neeche poora return() block as it is copy karke paste karein ...
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Registration Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Student Registration</h1>
          <p className="mt-2 text-blue-100">Fill in your details to complete registration</p>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8">
          {/* Photo Upload */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative w-32 h-40 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
              {photo ? (
                <img src={photo} alt="Uploaded" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">Your Photo</span>
              )}
            </div>
            <label className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Course</label>
              <input
                type="text"
                list="corse"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select Course"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              />
              <datalist id="corse">
                <option value="BTech" />
                <option value="MTech" />
                <option value="BSc Agriculture" />
                <option value="BSc Nursing" />
                <option value="BPharma" />
                <option value="BBA" />
                <option value="B.Ed" />
                <option value="D.Pharma" />
                <option value="Polytechnic" />
                <option value="MBA" />
                <option value="Law" />
                <option value="B.Sc Home Science" />
                <option value="Fashion Designing" />
                <option value="BAJMC" />
                <option value="Journalism" />
                <option value="B.Sc (Hons.)" />
                <option value="MBBS" />
                <option value="Paramedical" />
              </datalist>
            </div>

            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Your Name"
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              />
            </div>

            {/* Qualification */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Educational Qualification</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Highest Qualification"
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
            </div>

            {/* Caste */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Caste</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="caste"
                    value="General"
                    checked={formData.caste === "General"}
                    onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">General</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="caste"
                    value="SC/ST"
                    checked={formData.caste === "SC/ST"}
                    onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">SC/ST</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="caste"
                    value="OBC"
                    checked={formData.caste === "OBC"}
                    onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">OBC</span>
                </label>
              </div>
            </div>

            {/* Father's Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Father's Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Father's Name"
                value={formData.fathername}
                onChange={(e) => setFormData({ ...formData, fathername: e.target.value })}
              />
            </div>

            {/* Father's Occupation */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Father's Occupation</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Occupation"
                value={formData.fatheroccupation}
                onChange={(e) => setFormData({ ...formData, fatheroccupation: e.target.value })}
              />
            </div>

            {/* Mother's Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mother's Name"
                value={formData.mothername}
                onChange={(e) => setFormData({ ...formData, mothername: e.target.value })}
              />
            </div>

            {/* Family Income */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Family Income</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Annual Income"
                value={formData.income}
                onChange={(e) => setFormData({ ...formData, income: e.target.value })}
              />
            </div>

            {/* Address */}
            <div className="space-y-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Full Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            {/* Pincode */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Primary Number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
            </div>

            {/* Alternate Mobile */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Alternate Mobile</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Secondary Number"
                value={formData.alternatemobile}
                onChange={(e) => setFormData({ ...formData, alternatemobile: e.target.value })}
              />
            </div>

            {/* Location */}
            <div className="space-y-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Location For Higher Education</label>
              <input
                type="text"
                list="stat"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Preferred Location"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              />
              <datalist id="stat">
                <option value="Delhi/NCR" />
                <option value="Punjab" />
                <option value="Chandigarh" />
                <option value="Haryana" />
                <option value="West Bengal" />
                <option value="Rajasthan" />
                <option value="Pune" />
                <option value="Nasik" />
                <option value="Chennai" />
                <option value="Odisha" />
                <option value="Bangalore" />
                <option value="Madhya Pradesh" />
                <option value="Uttar Pradesh" />
                <option value="Andhra Pradesh" />
              </datalist>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              onClick={paramsCheck}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
            >
              Proceed To Pay
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-md w-full mx-auto shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-3 px-4 sm:py-4 sm:px-6 flex justify-between items-center sticky top-0">
              <h2 className="text-lg sm:text-xl font-bold text-white">Payment Details</h2>
              <button
                onClick={toggleModal}
                className="text-white hover:text-gray-200"
              >
                <IoMdClose size={20} className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Scrollable area */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {/* QR Code Section */}
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <img 
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain mb-3 sm:mb-4" 
                  src={qrpay} 
                  alt="QR Code" 
                />
                <div className="flex items-center bg-blue-50 px-3 py-1 sm:px-4 sm:py-2 rounded-lg mb-2 w-full justify-center">
                  <span className="font-mono text-blue-800 text-sm sm:text-base truncate max-w-[180px] sm:max-w-none">
                    {textToCopy}
                  </span>
                  <button
                    onClick={copyText}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <FiCopy size={16} className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-md sm:text-lg font-bold text-gray-800 mt-1 sm:mt-2">Rs 1000/-</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 text-center">
                  *Pay Registration Fees and Enter the Transaction Details
                </p>
              </div>

              {/* Payment Form */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                    value={paymentData.name}
                    onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={paymentData.paydate}
                    onChange={(e) => setPaymentData({ ...paymentData, paydate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">UPI Transaction ID</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Transaction ID"
                    value={paymentData.upi}
                    onChange={(e) => setPaymentData({ ...paymentData, upi: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mobile Number"
                    value={paymentData.mobile}
                    onChange={(e) => setPaymentData({ ...paymentData, mobile: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    onClick={paymentForm}
                    disabled={loading}
                    className="w-full py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit Payment"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
