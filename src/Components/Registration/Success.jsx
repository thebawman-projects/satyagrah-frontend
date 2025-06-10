import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import downloadAnimation from "./animation.json";

function Success() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
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

  // Array of colorful balls data
  const floatingBalls = [
    { id: 1, color: "bg-blue-400/20", size: "w-12 h-12", duration: 15, delay: 0 },
    { id: 2, color: "bg-purple-400/20", size: "w-16 h-16", duration: 20, delay: 2 },
    { id: 3, color: "bg-pink-400/20", size: "w-20 h-20", duration: 25, delay: 4 },
    { id: 4, color: "bg-indigo-400/20", size: "w-14 h-14", duration: 18, delay: 1 },
    { id: 5, color: "bg-teal-400/20", size: "w-10 h-10", duration: 22, delay: 3 },
    { id: 6, color: "bg-amber-400/20", size: "w-18 h-18", duration: 17, delay: 5 },
  ];

  // Premium checkmark SVG
  const PremiumCheckmark = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#8b5cf6" />
        </filter>
      </defs>
      <path
        d="M20,50 L40,70 L80,30"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#shadow)"
      />
    </svg>
  );

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 overflow-hidden">
      {/* Floating background balls */}
      {floatingBalls.map((ball) => (
        <motion.div
          key={ball.id}
          className={`absolute rounded-full ${ball.color} ${ball.size}`}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
          }}
          transition={{
            duration: ball.duration,
            delay: ball.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 overflow-hidden relative z-10"
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
              {/* Premium Success Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Animated Checkmark with Glow */}
                <motion.div
                  className="relative mb-6"
                  initial={{ scale: 0.5, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-xl animate-pulse"></div>
                  <PremiumCheckmark />
                </motion.div>

                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Registration Complete!
                </h1>
                <p className="text-gray-600 mt-2">
                  Welcome to endless opportunities.
                </p>

                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                >
                  <span className="text-white text-sm font-semibold tracking-wide">
                    SATYAGRAH SCHOLAR
                  </span>
                </motion.div>

                {/* Premium Note */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 p-4 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 rounded-xl border border-blue-100/50 backdrop-blur-sm w-full relative overflow-hidden"
                >
                  <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-purple-400/20"></div>
                  <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-pink-400/20"></div>
                  <div className="relative z-10">
                    <p className="text-sm text-gray-800 font-medium">
                      <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Exclusive Access Granted:
                      </span>{" "}
                      You've unlocked endless career opportunities that will elevate your personality and skills. 
                      Welcome to SATYAGRAH EDUCATIONAL TRUST.
                    </p>
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="w-full mt-8"
                >
                  <Link
                    to="/"
                    className="block w-full text-center py-3.5 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.01] relative overflow-hidden group"
                  >
                    <span className="relative z-10">Continue to Dashboard</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <p className="text-xs text-gray-500 mt-3">
                     This decision is worth a million. 😊
                  </p>
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
