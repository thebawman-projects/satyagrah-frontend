import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { toast } from "react-hot-toast";
import { BsBoxArrowLeft, BsFileEarmarkExcel, BsFileEarmarkPdf } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import { FiEye, FiX } from "react-icons/fi";
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import FooterAdmin from "./FooterAdmin";
import { CSVLink } from 'react-csv'
import AdminNavbar from "./AdminNavbar";
import { PulseLoader } from "react-spinners";
import { motion } from "framer-motion";

export function PaymentsAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [rowCountState, setRowCountState] = useState(0);
  const [singleData, setSingleData] = useState({
    name: "",
    paydate: "",
    mobile: "",
    upi: "",
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
        const res = await axios.get("/payment/allpayments");
        setData(res.data.payments);
        setRowCountState(res.data.payments.length);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error("Failed to fetch payment data");
      }
    };
    fetchData();
  }, []);

  const getAllData = async () => {
    try {
      const res = await axios.get("/payment/allpayments");
      setData(res.data.payments);
      setRowCountState(res.data.payments.length);
    } catch (err) {
      console.log(err);
      toast.error("Failed to refresh data");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("/payment/delete/" + id);
      setData(data.filter((p) => p._id !== id));
      setRowCountState(rowCountState - 1);
      toast.success("Payment deleted successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete payment");
    }
  };

  const handleView = async (id) => {
    try {
      const res = await axios.get("/payment/payment/" + id);
      setSingleData(res.data.payment);
      toggleModal();
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch payment details");
    }
  };

  let info = [];
  data && data.forEach((element) => {
    info.push([
      element.name,
      element.paydate,
      element.mobile,
      element.upi
    ]);
  });

  function exportPdf() {
    const doc = new jsPDF({ orientation: "landscape", format: 'a2', compress: true });
    doc.text("SATYAGRAH Payments Data", 260, 10);
    doc.autoTable({
      head: [['Name', 'Payment Date', 'Mobile Number', "UPI Transaction ID"]],
      body: info,
      styles: {
        fontSize: 8,
        cellPadding: 2,
        overflow: 'linebreak'
      }
    });
    doc.save("SatyagrahPaymentsData.pdf");
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
      width: 280,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "paydate",
      headerName: "Payment Date",
      width: 250,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "mobile",
      headerName: "Number",
      width: 250,
      headerClassName: "font-bold bg-gray-100",
      cellClassName: "font-medium"
    },
    {
      field: "upi",
      headerName: "UPI Transaction ID",
      width: 350,
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

  const rows = data.map((item) => ({
    id: item._id,
    name: item.name,
    paydate: item.paydate,
    mobile: "+91 " + item.mobile,
    upi: item.upi,
  }));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800">Payment Records</h1>
              <p className="text-gray-600 mt-1">Manage all payment records in one place</p>
            </div>
            
            <div className="p-4 flex flex-wrap justify-between items-center bg-gray-50">
              <div className="flex space-x-3 mb-4 sm:mb-0">
                <CSVLink data={data} filename="SATYAGRAHPaymentsData">
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
                Showing {rowCountState} records
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
                    rows={rows}
                    columns={columns}
                    rowCount={rowCountState}
                    loading={loading}
                    pageSizeOptions={[5, 10, 20]}
                    paginationModel={paginationModel}
                    paginationMode="client"
                    onPaginationModelChange={setPaginationModel}
                    disableSelectionOnClick
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

      {/* Payment Details Modal */}
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
              className="inline-block w-full max-w-md text-left align-middle transition-all transform bg-white rounded-lg shadow-xl overflow-hidden z-50"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Payment Details
                    </h3>
                    <p className="text-gray-500">Transaction ID: {singleData.upi}</p>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3 border-b pb-2">Payment Information</h4>
                    <DetailItem label="Name" value={singleData.name} />
                    <DetailItem label="Payment Date" value={singleData.paydate} />
                    <DetailItem label="Mobile Number" value={singleData.mobile} />
                    <DetailItem label="UPI Transaction ID" value={singleData.upi} />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg">
                 <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={toggleModal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <BsBoxArrowLeft className="mr-2" />
                  Close
                </motion.button>
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
