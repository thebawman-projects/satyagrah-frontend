import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { 
  useGridApiContext,
  useGridSelector,
  gridPageSelector,
  gridPageCountSelector,
  gridRowCountSelector,
  gridPageSizeSelector
} from '@mui/x-data-grid';
import { toast } from "react-hot-toast";
import { BsDownload, BsFileEarmarkExcel, BsFileEarmarkPdf } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import { FiEye, FiX } from "react-icons/fi";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import FooterAdmin from "./FooterAdmin";
import { CSVLink } from 'react-csv';
import AdminNavbar from "./AdminNavbar";
import { PulseLoader } from "react-spinners";
import { motion } from "framer-motion";

export function LeadsAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleData, setSingleData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
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
        const res = await axios.get("/leads/allforms");
        setData(res.data.leadsForms);
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
      const res = await axios.get("/leads/allforms");
      setData(res.data.leadsForms);
    } catch (err) {
      console.log(err);
      toast.error("Failed to refresh data");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("/leads/delete/" + id);
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
      const res = await axios.get("/leads/form/" + id);
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
      element.name,
      element.email,
      element.phone,
      element.program
    ]);
  });

  function exportPdf() {
    const doc = new jsPDF({ orientation: "landscape", format: 'a2', compress: true });
    doc.text("SATYAGRAH Leads Data", 260, 10);
    doc.autoTable({
      head: [['Name', 'Email', 'Mobile', 'Program']],
      body: info,
      styles: {
        fontSize: 8,
        cellPadding: 2,
        overflow: 'linebreak'
      }
    });
    doc.save("SatyagrahLeadsData.pdf");
    toast.success("PDF exported successfully");
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
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium truncate"
    },
    {
      field: "phone",
      headerName: "Mobile",
      width: 180,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "program",
      headerName: "Program",
      width: 220,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "View",
      width: 80,
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
      width: 80,
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
        name: item.name,
        email: item.email,
        phone: "+91 " + item.phone,
        program: item.program,
      });
    });

  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const rowCount = useGridSelector(apiRef, gridRowCountSelector);
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);

    return (
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => apiRef.current.setPage(page - 1)}
            disabled={page === 0}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => apiRef.current.setPage(page + 1)}
            disabled={page >= pageCount - 1}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{(page * pageSize) + 1}</span> to{' '}
              <span className="font-medium">
                {Math.min((page + 1) * pageSize, rowCount)}
              </span>{' '}
              of <span className="font-medium">{rowCount}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => apiRef.current.setPage(page - 1)}
                disabled={page === 0}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              {[...Array(pageCount)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => apiRef.current.setPage(index)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    page === index
                      ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => apiRef.current.setPage(page + 1)}
                disabled={page >= pageCount - 1}
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
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800">Leads Management</h1>
              <p className="text-gray-600 mt-1">Manage all student leads in one place</p>
            </div>
            
            <div className="p-4 flex flex-wrap justify-between items-center bg-gray-50">
              <div className="flex space-x-3 mb-4 sm:mb-0">
                <CSVLink data={data} filename="SATYAGRAHLeadsData">
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
                      Pagination: CustomPagination,
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

      {/* Lead Details Modal */}
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
              className="inline-block w-full max-w-2xl text-left align-middle transition-all transform bg-white rounded-lg shadow-xl overflow-hidden z-50"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Lead Details
                    </h3>
                    <p className="text-gray-500">{singleData.program} Inquiry</p>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                
                <div className="mt-6 grid grid-cols-1 gap-4 max-h-[70vh] overflow-y-auto">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Contact Information</h4>
                    <DetailItem label="Full Name" value={singleData.name} />
                    <DetailItem label="Email" value={singleData.email} />
                    <DetailItem label="Mobile" value={singleData.phone} />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Program Information</h4>
                    <DetailItem label="Program Interested" value={singleData.program} />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <BsDownload className="mr-2" />
                  Download Details
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
