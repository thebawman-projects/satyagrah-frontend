import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import downloadAnimation from "./animation.json"; 

function Success() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowSuccess(true), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full p-8 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
      >
        <div className="flex flex-col items-center space-y-6">
          {/* Download Animation */}
          {!showSuccess ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-32 h-32 mb-4">
                <Lottie animationData={downloadAnimation} loop={true} />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${downloadProgress}%` }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
              <p className="text-gray-600 mt-2 text-sm">
                Downloading... {downloadProgress}%
              </p>
            </motion.div>
          ) : (
            <>
              {/* Success Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative">
                  <AiOutlineCheckCircle className="w-20 h-20 text-emerald-500" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-100 opacity-0"
                    animate={{ opacity: [0, 0.3, 0], scale: [1, 1.5, 2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mt-4">
                  Registration Complete!
                </h1>
                <p className="text-gray-600">
                  Your form has been downloaded successfully.
                </p>

                {/* Premium Note */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 w-full"
                >
                  <p className="text-sm text-blue-800 font-medium">
                    <span className="text-blue-600 font-bold">Premium Note:</span>{" "}
                    This decision is worth a million - you've just secured your 
                    future with this exclusive registration. Welcome to excellence.
                  </p>
                </motion.div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-full mt-8"
                >
                  <Link
                    to="/"
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Return to Home
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Success;
