import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { toast } from "react-hot-toast";
import { RiDeleteBack2Line } from "react-icons/ri";
import sankalplogo from "../images/sankalp.png";
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import FooterAdmin from "./FooterAdmin";
import {CSVLink} from 'react-csv'
import { Link, useNavigate } from "react-router-dom";

export function LeadsAdmin() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get("/leads/allforms")
      .then((res) => setData(res.data.leadsForms))
      .catch((err) => console.log(err));      
  }, []);


  const getAllData = async () =>{
    axios
      .get("/leads/allforms")
      .then((res) => setData(res.data.leadsForms))
  }

  const handleDelete = async (id) => {
      await axios.delete("/leads/delete/" + id);
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
 
let info = []
data && data.forEach((element,index,array)=>{
  info.push([element.name,element.email,element.phone,element.program])
})
  function exportPdf () {
    const doc = new jsPDF({ orientation: "landscape",format:'a2',compress:true });
    doc.text("Satyagrah Leads Students Data", 260, 10)
    doc.autoTable({
      head:[['Name','Email','Mobile',"Program",]],
      body: info
    })    
    doc.save("satyagrahLeadsData.pdf");
  };

   
  const columns = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 0.1 },
    { field: "name", minWidth: 200, headerName: "Name", flex: 0.2 },
    {
        field: "email",
        headerName: "Email",
        type: "email",
        minWidth: 180,
        flex: 0.18,
      },
    {
      field: "phone",
      headerName: "Mobile Number",
      type: "number",
      minWidth: 180,
      flex: 0.15,
    },
    {
      field: "program",
      headerName: "Program",
      minWidth: 220,
      flex: 0.2,
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
        name: item.name,
        email: item.email,
        phone: "+91 " + item.phone,
        program: item.program,
      });
    });

  return (
    <>
      <div>
        <nav>
            <img
              className="object-cover h-8 md:h-16"
              src={sankalplogo}
              alt="Satyagrah"
            />
          <h2 className="text-white text-center float-right hidden md:contents text-2xl pr-20">
            Leads
          </h2>
          <Link to="/dashboard">
            <button
              className="border hover:bg-red-500 hover:text-black border-1 border-yellow-400 rounded px-3 py-1 bg-blue-900 text-white"
            >
              Dashboard
            </button>
            </Link>
            <Link to="/payments">
            <button
              className="border hover:bg-red-500 hover:text-black border-1 border-yellow-400 rounded px-3 py-1 bg-blue-900 text-white"
            >
              Payments
            </button>
            </Link>
          <Link to='/'><button onClick={handleLogout} className="text-white border -ml-2 md:ml-8 hover:bg-red-500 hover:text-black border-1 border-yellow-400 rounded px-3 py-1">LogOut</button></Link>
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
        <CSVLink data={data} filename="satyagrahLeadsData">
        <button className="pdfbtn">
          Export as CSV
        </button>
        </CSVLink>
        
        <button className=" ml-4 md:ml-20 lg:ml-40 pdfbtn" onClick={exportPdf}>
          Export as PDF
        </button>
      </div>
  

      {/* PopUp Starts  */}

      
<FooterAdmin />
      {/* PopUp Ends  */}
    </>
  );
}
