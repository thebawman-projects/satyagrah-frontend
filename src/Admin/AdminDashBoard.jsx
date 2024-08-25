import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { toast } from "react-hot-toast";
import { BsArrowRightSquare } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import sankalplogo from "../images/sankalp.png";
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import FooterAdmin from "./FooterAdmin";
import {CSVLink} from 'react-csv'
import imgForm from '../images/imgForm.png'
import { Link, useNavigate } from "react-router-dom";

export function AdminDashBoard() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({
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

  
  const [modal, setModal] = useState(false);
 
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    axios
      .get("/form/allforms")
      .then((res) => setData(res.data.forms))
      .catch((err) => console.log(err));      
  }, []);


  const getAllData = async () =>{
    axios
      .get("/form/allforms")
      .then((res) => setData(res.data.forms))
  }

  const handleDelete = async (id) => {
      await axios.delete("/form/delete/" + id);
      setData(data.filter((p) => p.id !== id));
      getAllData()
      toast.success("Deleted Successfully"); 
  };

  const handleLogout = () =>{
    navigate('/')
    toast.success("Logged Out SuccesFully")
    window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function(event) {
    window.history.pushState(null, document.title, window.location.href);
  })
  }

  const handleView = async (id) => {
    await axios.get("/form/form/" + id).then((res) => setSingleData(res.data.form))
  };
 
let info = []
data && data.forEach((element,index,array)=>{
  info.push([element.fullname,element.course,element.email,element.mobile,element.alternatemobile,element.gender,element.dob.slice(0,10),element.qualification,element.fathername,element.mothername,element.fatheroccupation,element.income,element.caste,element.address,element.pincode,element.state])
})
  function exportPdf () {
    const doc = new jsPDF({ orientation: "landscape",format:'a2',compress:true });
    doc.text("SATYAGRAH Students Data", 260, 10)
    doc.autoTable({
      head:[['Name','Course','Email',"Number", 'Alternate Number', 'Gender','Date of Birth','Qualification',`Father's Name`, `Mother's Name`, `Father's Occupation`,'Income','Caste','Address','Pincode', 'State']],
      body: info
    })    
    doc.save("SatyagrahFormsData.pdf");
  };

  const togglePDF = () => {
    const doc = new jsPDF({orientation:'p',format:'a4',compress:true})
    doc.addImage(imgForm, 'PNG',0,0,212,300)
    doc.setFont('NotoSansAll-Regular');
    doc.text(singleData.course, 51.8,96.4)
    doc.text(singleData.fullname,37.5,107.5)
    doc.text(singleData.qualification,57,116.7)
    doc.text(singleData.dob.toString().slice(0,10),40.8,128.2)
    doc.text(singleData.gender,142,126.2)
    doc.text(singleData.fathername,40,137.8)
    doc.text('IND',143,136.9)
    doc.text(singleData.mothername,40,148.8)
    doc.text(singleData.fatheroccupation,148,147)
    doc.text(singleData.income.toString() +' /-',82,159)
    doc.text(singleData.caste,142,156.6)
    doc.text(singleData.address,34,170.5)
    doc.text(singleData.mobile.toString() ,34,181)
    doc.text(singleData.pincode.toString(),142,181)
    doc.text(singleData.email,35,192.4)
    doc.text(singleData.alternatemobile.toString(),142,192.4)
    doc.text(singleData.state,58,212)
    doc.save(`SATYAGRAH@${singleData.fullname}.pdf`);
    toast.success("Downloaded Successfully")
    window.location.reload()
  };
   
  const columns = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 0.1 },
    { field: "fullname", minWidth: 200, headerName: "Name", flex: 0.2 },
    {
      field: "course",
      headerName: "Course",
      minWidth: 180,
      flex: 0.15,
    },
    {
      field: "mobile",
      headerName: "Number",
      type: "number",
      minWidth: 180,
      flex: 0.18,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 220,
      flex: 0.2,
    },

    {
      field: "gender",
      headerName: "Gender",
      minWidth: 128,
      flex: 0.1,
    },
    {
      field: "caste",
      headerName: "Caste",
      minWidth: 120,
      flex: 0.1,
    },
    {
      field: "View",
      flex: 0.08,
      minWidth: 90,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <div className="mx-4">
              
              <button
                onClick={(e) => {
                  handleView(params.id);
                  toggleModal();
                }}
                className=""
              >
                <BsArrowRightSquare size={20} />
              </button>
            </div>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.1,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <div className="mx-4 text-red-700">
              <button onClick={() => handleDelete(params.id)}>
                <RiDeleteBack2Line size={25} />
              </button>
            </div>
          </>
        );
      },
    },
  ];

  const row = [];

  data &&
    data.forEach((item) => {
      row.push({
        id: item._id,
        fullname: item.fullname,
        course: item.course,
        mobile: "+91 " + item.mobile,
        email: item.email,
        gender: item.gender,
        caste: item.caste,
      });
    });

  return (
    <>
      <div>
        <nav>
            <img
              className="object-cover h-8 md:h-16"
              src={sankalplogo}
              alt="Sankalp"
            />
          <h2 className="text-white text-center float-right hidden md:contents text-2xl pr-20">
            Admin
          </h2>
          <Link to="/payments">
            <button
              className="border hover:bg-red-500 hover:text-black border-1 border-yellow-400 rounded px-3 py-1 bg-blue-900 text-white"
            >
              Payments
            </button>
            </Link>
          <Link to="/leads">
            <button
              className="border hover:bg-red-500 hover:text-black border-1 border-yellow-400 rounded px-3 py-1 bg-blue-900 text-white"
            >
              Leads
            </button>
            </Link>
          <Link to='/'><button onClick={handleLogout} className="text-white border hover:bg-red-500 hover:text-black border-1 border-yellow-400 rounded px-3 py-1">LogOut</button></Link>
        </nav>
      </div>
      <div className="w-full  pt-1 mt-10 bg-white">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={12}
          disableSelectionOnClick
          autoHeight
        />
      </div>
      <div className="text-center my-4">
        <CSVLink data={data} filename="SATYAGRAHFormsData">
        <button className="pdfbtn">
          Export as CSV
        </button>
        </CSVLink>
        
        <button className=" ml-4 md:ml-20 lg:ml-40 pdfbtn" onClick={exportPdf}>
          Export as PDF
        </button>
      </div>
  

      {/* PopUp Starts  */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content bg-white rounded-xl">
            <div className="container mx-auto p-4">
              <h1 className="text-3xl text-center text-white font-bold border-b-4 border-dotted border-white">
                Student Data
              </h1>
              <table className="table-auto w-full mt-4 text-white">
                <tbody>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Course</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.course}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Name</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.fullname}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Qualification</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.qualification}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Email</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.email}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Mobile</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.mobile}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Parent's Mobile</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.alternatemobile}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">D.O.B</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.dob.slice(0,10)}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Gender</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.gender}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Caste</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.caste}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1pxitalic">Father's Name</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.fathername}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Mother's Name</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.mothername}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">
                      Father's Occupation
                    </td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.fatheroccupation}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Family Income</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.income}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Address</td>
                    <td className="border px-4 border-black border-1px font-semibold">
                      {singleData.address}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 border-black border-1px italic">Pincode</td>
                    <td className="border border-black border-1px px-4 font-semibold">
                      {singleData.pincode}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-black border-1px border px-4 italic">Location</td>
                    <td className="border border-black border-1px px-4 font-semibold">
                      {singleData.state}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center border-t-4 border-white border-dotted">
              <div className="inline mr-4">
            <button
              className="btn-modal px-2 py-1  rounded bg-red-900 text-white"
              onClick={toggleModal}
            >
              Close
            </button>
            
            </div><div className="inline mx-4">
            <button
              className="btn-modal px-2 py-1 rounded bg-blue-900 text-white"
              onClick={togglePDF}
            >
              Download
            </button>
            </div>
            </div>
          </div>
        </div>
      )}
<FooterAdmin />
      {/* PopUp Ends  */}
    </>
  );
}
