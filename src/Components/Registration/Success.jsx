import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Success() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-800">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <AiOutlineCheckCircle className="w-16 h-16 text-green-500 animate-pulse" />
          <h1 className="text-[1.3rem] font-bold text-gray-800">Registration Done Successfully!</h1>
          <p className="text-gray-600">Form Downloaded Successfully.</p>
          <Link to="/" className="w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">Go to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
