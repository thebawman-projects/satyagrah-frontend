import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { toast } from "react-hot-toast";
import { BsDownload, BsFileEarmarkExcel, BsFileEarmarkPdf } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import { FiEye, FiX } from "react-icons/fi";
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import FooterAdmin from "./FooterAdmin";
import { CSVLink } from 'react-csv'
import imgForm from '../images/imgForm.png'
import AdminNavbar from "./AdminNavbar";
import { PulseLoader } from "react-spinners";
import { motion } from "framer-motion";

export function AdminDashBoard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
  });

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/form/allforms");
        setData(res.data.forms);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  const getAllData = async () => {
    try {
      const res = await axios.get("/form/allforms");
      setData(res.data.forms);
    } catch (err) {
      console.log(err);
      toast.error("Failed to refresh data");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("/form/delete/" + id);
      setData(data.filter((p) => p.id !== id));
      getAllData();
      toast.success("Deleted Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete");
    }
  };

  const handleView = async (id) => {
    try {
      const res = await axios.get("/form/form/" + id);
      setSingleData(res.data.form);
      toggleModal();
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch details");
    }
  };

  let info = []
  data && data.forEach((element) => {
    info.push([
      element.fullname,
      element.course,
      element.email,
      element.mobile,
      element.alternatemobile,
      element.gender,
      element.dob.slice(0, 10),
      element.qualification,
      element.fathername,
      element.mothername,
      element.fatheroccupation,
      element.income,
      element.caste,
      element.address,
      element.pincode,
      element.state
    ]);
  });

  function exportPdf() {
    const doc = new jsPDF({ orientation: "landscape", format: 'a2', compress: true });
    doc.text("SATYAGRAH Students Data", 260, 10);
    doc.autoTable({
      head: [['Name', 'Course', 'Email', "Number", 'Alternate Number', 'Gender', 'Date of Birth', 'Qualification', `Father's Name`, `Mother's Name`, `Father's Occupation`, 'Income', 'Caste', 'Address', 'Pincode', 'State']],
      body: info,
      styles: {
        fontSize: 8,
        cellPadding: 2,
        overflow: 'linebreak'
      }
    });
    doc.save("SatyagrahFormsData.pdf");
    toast.success("PDF exported successfully");
  };

  const togglePDF = () => {
    const doc = new jsPDF({ orientation: 'p', format: 'a4', compress: true });
    doc.addImage(imgForm, 'PNG', 0, 0, 212, 300);
    doc.setFont('NotoSansAll-Regular');
    doc.text(singleData.course, 51.8, 96.4);
    doc.text(singleData.fullname, 37.5, 107.5);
    doc.text(singleData.qualification, 57, 116.7);
    doc.text(singleData.dob.toString().slice(0, 10), 40.8, 128.2);
    doc.text(singleData.gender, 142, 126.2);
    doc.text(singleData.fathername, 40, 137.8);
    doc.text('IND', 143, 136.9);
    doc.text(singleData.mothername, 40, 148.8);
    doc.text(singleData.fatheroccupation, 148, 147);
    doc.text(singleData.income.toString() + ' /-', 82, 159);
    doc.text(singleData.caste, 142, 156.6);
    doc.text(singleData.address, 34, 170.5);
    doc.text(singleData.mobile.toString(), 34, 181);
    doc.text(singleData.pincode.toString(), 142, 181);
    doc.text(singleData.email, 35, 192.4);
    doc.text(singleData.alternatemobile.toString(), 142, 192.4);
    doc.text(singleData.state, 58, 212);
    doc.save(`SATYAGRAH@${singleData.fullname}.pdf`);
    toast.success("Form downloaded successfully");
    toggleModal();
  };

 const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "fullname",
      headerName: "Name",
      width: 200,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "course",
      headerName: "Course",
      width: 190,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "mobile",
      headerName: "Number",
      width: 220,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium truncate"
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "caste",
      headerName: "Caste",
      width: 120,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "View",
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleView(params.id)}
          className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-100"
          title="View Details"
        >
          <FiEye size={18} />
        </motion.button>
      ),
    },
    {
      field: "Delete",
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleDelete(params.id)}
          className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-100"
          title="Delete"
        >
          <RiDeleteBack2Line size={18} />
        </motion.button>
      ),
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800">Student Applications</h1>
              <p className="text-gray-600 mt-1">Manage all student applications in one place</p>
            </div>
            
            <div className="p-4 flex flex-wrap justify-between items-center bg-gray-50">
              <div className="flex space-x-3 mb-4 sm:mb-0">
                <CSVLink data={data} filename="SATYAGRAHFormsData">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors"
                  >
                    <BsFileEarmarkExcel className="mr-2" />
                    Export CSV
                  </motion.button>
                </CSVLink>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={exportPdf}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-colors"
                >
                  <BsFileEarmarkPdf className="mr-2" />
                  Export PDF
                </motion.button>
              </div>
              
              <div className="text-sm text-gray-500">
                Showing {row.length} records
              </div>
            </div>
            
            <div className="w-full h-[calc(100vh-280px)] p-4 overflow-hidden">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <PulseLoader color="#3B82F6" size={15} />
                </div>
              ) : (
                <div className="w-full h-full">
                  <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5, 10, 20]}
                    disableSelectionOnClick
                    autoHeight={false}
                    loading={loading}
                    components={{
                      Pagination: (props) => (
                        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                          <div className="flex-1 flex justify-between sm:hidden">
                            <button
                              onClick={() => props.onPageChange(props.page - 1)}
                              disabled={props.page === 0}
                              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                              Previous
                            </button>
                            <button
                              onClick={() => props.onPageChange(props.page + 1)}
                              disabled={!props.hasNextPage}
                              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                              Next
                            </button>
                          </div>
                          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                              <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">{(props.page * props.pageSize) + 1}</span> to{' '}
                                <span className="font-medium">
                                  {Math.min((props.page + 1) * props.pageSize, props.rowCount)}
                                </span>{' '}
                                of <span className="font-medium">{props.rowCount}</span> results
                              </p>
                            </div>
                            <div>
                              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button
                                  onClick={() => props.onPageChange(props.page - 1)}
                                  disabled={props.page === 0}
                                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <span className="sr-only">Previous</span>
                                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </button>
                                {[...Array(props.pageCount)].map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => props.onPageChange(index)}
                                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                      props.page === index
                                        ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                    }`}
                                  >
                                    {index + 1}
                                  </button>
                                ))}
                                <button
                                  onClick={() => props.onPageChange(props.page + 1)}
                                  disabled={props.page >= props.pageCount - 1}
                                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <span className="sr-only">Next</span>
                                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </nav>
                            </div>
                          </div>
                        </div>
                      ),
                      LoadingOverlay: () => (
                        <div className="flex justify-center items-center h-full">
                          <PulseLoader color="#3B82F6" size={15} />
                        </div>
                      ),
                    }}
                    sx={{
                      '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#f3f4f6',
                      },
                      '& .MuiDataGrid-cell': {
                        borderRight: '1px solid #e5e7eb',
                      },
                      '& .MuiDataGrid-cell:focus': {
                        outline: 'none',
                      },
                      '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                      },
                      '& .MuiDataGrid-virtualScroller': {
                        overflowX: 'hidden',
                      },
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Student Details Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4 text-center">
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
              onClick={toggleModal}
            ></div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block w-full max-w-3xl text-left align-middle transition-all transform bg-white rounded-lg shadow-xl overflow-hidden z-50"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Student Details
                    </h3>
                    <p className="text-gray-500">{singleData.course} Application</p>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Personal Information</h4>
                    <DetailItem label="Full Name" value={singleData.fullname} />
                    <DetailItem label="Date of Birth" value={singleData.dob?.slice(0, 10) || '-'} />
                    <DetailItem label="Gender" value={singleData.gender} />
                    <DetailItem label="Qualification" value={singleData.qualification} />
                    <DetailItem label="Caste" value={singleData.caste} />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Contact Information</h4>
                    <DetailItem label="Email" value={singleData.email} />
                    <DetailItem label="Mobile" value={singleData.mobile} />
                    <DetailItem label="Alternate Mobile" value={singleData.alternatemobile} />
                    <DetailItem label="Address" value={singleData.address} />
                    <DetailItem label="Pincode" value={singleData.pincode} />
                    <DetailItem label="State" value={singleData.state} />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Family Information</h4>
                    <DetailItem label="Father's Name" value={singleData.fathername} />
                    <DetailItem label="Mother's Name" value={singleData.mothername} />
                    <DetailItem label="Father's Occupation" value={singleData.fatheroccupation} />
                    <DetailItem label="Family Income" value={singleData.income} />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Course Information</h4>
                    <DetailItem label="Course Applied" value={singleData.course} />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={togglePDF}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <BsDownload className="mr-2" />
                  Download Form
                </motion.button>
                <button
                  onClick={toggleModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      
      <FooterAdmin />
    </div>
  );
}

const DetailItem = ({ label, value }) => (
  <div className="mb-2">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 font-semibold">{value || '-'}</dd>
  </div>
);
