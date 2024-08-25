import React, { useState } from 'react'
import axios from "axios";
import './Registration.css'
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jsPDF } from 'jspdf'
import imgForm from '../../images/imgForm.png'
import qrpay from '../../images/qr.png'
import { IoMdClose } from 'react-icons/io'
import { FiCopy } from 'react-icons/fi'


export const RegistrationCard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);

  const [formData, setFormData] = useState({
    course: "",
    fullname: "",
    qualification: "",
    dob: "",
    gender: "",
    fathername: "",
    fatheroccupation: "",
    mothername: "",
    caste: "",
    income: "",
    address: "",
    pincode: "",
    email: "",
    mobile: "",
    alternatemobile: "",
    state: "",
  })

  const [paymentData, setPaymentData] = useState({
    name: "",
    paydate: "",
    mobile: "",
    upi: "",
  })

  // For Payment 

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }


  const paymentForm = async () => {
    setLoading(true);
    const { name, paydate, upi, mobile } = paymentData;
    try {
      setLoading(true)
      const { data } = await axios.post("/payment/pay", {
        name, paydate, upi, mobile
      });

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        registrationForm()
        setLoading(true);
        setPaymentData({});
        navigate("/success/registrationform/apiCall/687refrjjjefewjwttokenfalse/wfewfwe/false/satyagrah/registrationdonetrue");
        toast.success("Registration Done Successfully");
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const textToCopy = "7667102184@pthdfc";

  const copyText = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.success('Copied');
    });
  };

  // Photo Card
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

  const registrationForm = async () => {
    // setLoading(true);
    const { course, state, fullname, qualification, dob, gender, fathername, fatheroccupation, mothername, caste, income, address, pincode, email, mobile, alternatemobile } = formData;
    const { upi, paydate } = paymentData;
    const doc = new jsPDF({ orientation: 'p', format: 'a4', compress: true })
    doc.addImage(imgForm, 'PNG', 0, 0, 212, 300)
    doc.addImage(photo, 156, 77, 32, 40)
    doc.setFont('NotoSansAll-Regular');
    doc.text(course, 51.8, 96.4)
    doc.text(fullname, 37.5, 107.5)
    doc.text(qualification, 57, 116.7)
    doc.text(dob, 42, 128.2)
    doc.text(gender, 142, 126.2)
    doc.text(fathername, 40, 137.8)
    doc.text('IND', 143, 136.9)
    doc.text(mothername, 40, 148.8)
    doc.text(fatheroccupation, 148, 147)
    doc.text(income + ' /-', 82, 159)
    doc.text(caste, 142, 156.6)
    doc.text(address, 34, 170.5)
    doc.text(mobile, 34, 181)
    doc.text(pincode, 142, 181)
    doc.text(email, 35, 192.4)
    doc.text(alternatemobile, 142, 192.4)
    doc.text(state, 58, 212)
    doc.text('On: ' + paydate, 142, 224)
    doc.text('UPI Transaction ID : ' + upi, 45, 224)
    try {
      // setLoading(true)
      const { data } = await axios.post("/form/registration", {
        course, state, fullname, qualification, dob, gender, fathername, fatheroccupation, mothername, caste, income, address, pincode, email, mobile, alternatemobile
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        // setLoading(true);
        setFormData({});
        doc.save(`SATYAGRAH@${fullname}.pdf`)
      }
    } catch (error) {
      // setLoading(true)
      console.log(error);
    }
  };

  function paramsCheck() {
    if (!formData.alternatemobile || !formData.mobile || !formData.email || !formData.pincode || !formData.address || !formData.caste || !formData.fullname || !formData.course || !formData.state || !formData.income || !formData.qualification || !formData.mothername || !formData.dob || !formData.fatheroccupation || !formData.gender || !formData.fathername) {
      toast.error("Enter All Details")
    }
    else {
      toggleModal()
    }
  }


  return (
    <>
      <div>
        <section className="md:h-full flex  items-center text-white pb-4 bg-slate-800">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl pt-4 md:text-6xl xl:-mt-16 text-white font-semibold">
                Registration
              </h1>
            </div>


            <div className="containersx w-auto h-auto m-auto relative content-center bg-transparent">
              {/* Image */}
              <div className="input-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="mb-4"
                />
                {photo && (
                  <img src={photo} alt="Uploaded" className="w-32 h-42 object-cover" />
                )}
              </div>
              {/* image  */}



              <div className="content">
                <div className="forms">
                  <div className="user-details">


                    <div className="input-box">
                      <span className="details">Course</span>
                      <input type="text" list='corse' className='text-[0.5rem]' placeholder="Enter Course You Want To Apply" name='course' value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} />
                      <datalist id='corse'>
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

                    <div className="input-box">
                      <span className="details">Name</span>
                      <input type="text" placeholder="Enter Your Name" name='fullname' value={formData.fullname} onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Educational Qualification</span>
                      <input type="text" placeholder="Enter Your Highest Qualification" name='qualification' value={formData.qualification} onChange={(e) => setFormData({ ...formData, qualification: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Date Of Birth</span>
                      <input type="date" placeholder="Enter Date Of Birth" name='dob' value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
                    </div>
                    <div className="gender-details m-2 my-4" onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                      <span className="gender-title text-xs">Gender</span>
                      <br className='mb-2' />
                      <input type="radio" className='mx-1' name="gender" value='Male' />Male
                      <input type="radio" className='mx-1' name="gender" value='Female' />Female
                      <input type="radio" className='mx-1' name="gender" value='Other' />Other
                    </div>

                    <div className="gender-details mr-20 m-2 my-4" onChange={(e) => setFormData({ ...formData, caste: e.target.value })}>
                      <span className="gender-title text-xs">Caste</span>
                      <br />
                      <input type="radio" className='' name="caste" value='General' /> General
                      <input type="radio" className='mx-1' name="caste" value='SC/ST' /> SC/ST
                      <input type="radio" className='mx-1' name="caste" value='OBC' />OBC

                    </div>


                    <div className="input-box">
                      <span className="details">Father's Name</span>
                      <input type="text" placeholder="Enter Father's Name" name='fathername' value={formData.fathername} onChange={(e) => setFormData({ ...formData, fathername: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Father's Occupation</span>
                      <input type="text" placeholder="Enter Father's Occupation" name='fatheroccupation' value={formData.fatheroccupation} onChange={(e) => setFormData({ ...formData, fatheroccupation: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Mother's Name</span>
                      <input type="text" placeholder="Enter Mother's Name" name='mothername' value={formData.mothername} onChange={(e) => setFormData({ ...formData, mothername: e.target.value })} />
                    </div>

                    <div className="input-box">
                      <span className="details">Family Income</span>
                      <input type="text" placeholder="Enter Your Family Income" name='income' value={formData.income} onChange={(e) => setFormData({ ...formData, income: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Address</span>
                      <input type="text" placeholder="Enter Your Address" name='address' value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Pincode</span>
                      <input type="number" placeholder="Enter Your Pincode" name='pincode' value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Email</span>
                      <input type="email" placeholder="Enter Your Email" name='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Mobile Number</span>
                      <input type="text" placeholder="Enter Your Number" name='mobile' value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Alternate Mobile Number</span>
                      <input type="text" placeholder="Enter Your Number" name='alternatemobile' value={formData.alternatemobile} onChange={(e) => setFormData({ ...formData, alternatemobile: e.target.value })} />
                    </div>
                    <div className="input-box">
                      <span className="details">Location For Higher Education</span>
                      <input type="text" list='stat' placeholder="Choose a Location For Higher Education" name='state' value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
                      <datalist id='stat'>
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


                  <div className="button">
                    <button onClick={paramsCheck}
                    >
                      Proceed To Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay "></div>
          <div className="modal-content  ">
            <button onClick={toggleModal} className='flex flex-end float-right p-1 bg-red-700 rounded text-black'><IoMdClose /></button>
            {/* Qr Code  */}
            <div className="p-3 flex flex-col items-center justify-center contentz user-two">
              <img className='object-cover h-20  md:h-60 ' src={qrpay} alt='QR' />
              <div className="flex items-center space-x-2 contentz user-two">
                <span onClick={copyText} className="cursor-pointer">{textToCopy}</span>
                <FiCopy onClick={copyText} className="cursor-pointer w-5 h-5" />
              </div>
              <p className="md:text-4xl text-xl text-black font-bold mt-4">Rs 1000/-</p>
              <p className="md:text-sm text-[.75rem] text-black mt-2">*Pay Registration Fees and Enter the Transaction Details</p>
            </div>
            {/* qr  */}
            <div className="contentz">
              <div className="forms">
                <div className="user-details">
                  <div className="input-box">
                    <span className="detail text-black">Name</span>
                    <input type="text" className='text-[0.5rem]' placeholder="Enter Your Name" name='name' value={paymentData.name} onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })} required />
                  </div>

                  <div className="input-box">
                    <span className="details text-black">Payment Date</span>
                    <input type="date" placeholder="Enter Payment Date" name='paydate' value={paymentData.paydate} onChange={(e) => setPaymentData({ ...paymentData, paydate: e.target.value })} required />
                  </div>
                  <div className="input-box">
                    <span className="details text-black">UPI Transaction ID</span>
                    <input type="number" placeholder="Enter UPI Transaction ID" name='upi' value={paymentData.upi} onChange={(e) => setPaymentData({ ...paymentData, upi: e.target.value })} required />
                  </div>
                  <div className="input-box">
                    <span className="details text-black">Mobile Number</span>
                    <input type="number" placeholder="Enter Mobile Number" name='mobile' value={paymentData.mobile} onChange={(e) => setPaymentData({ ...paymentData, mobile: e.target.value })} required />
                  </div>
                </div>
                <div className="button">
                  <button onClick={paymentForm}
                    className={`${loading} save`}
                    disabled={loading}
                  >
                    {loading ? <div className="loader"></div> : "Submit"}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  )
}
