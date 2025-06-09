import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Auth/AuthContext';
import ProtectedRoute from './Auth/ProtectedRoute';
import "./App.css";
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import University from './Pages/University';
import Login from './Admin/Login';
import Register from './Admin/Register';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Courses from './Pages/Courses';
import Registration from './Pages/Registration';
import { AdminDashBoard } from './Admin/AdminDashBoard';
import NotFound from './Components/NotFound';
import Success from './Components/Registration/Success';
import { PaymentsAdmin } from './Admin/PaymentsAdmin';
import { LeadsAdmin } from './Admin/LeadsAdmin';
import PhotosCard from './Pages/PhotosCard';
import { useState, useEffect } from 'react';
import loading from '../src/images/loading.png';

axios.defaults.baseURL = 'https://satyagrahbackend-4ycxknrp.b4a.run/'
axios.defaults.withCredentials = true

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const increment = Math.floor(1 + Math.random() * 4); // Whole numbers only
        if (prev + increment >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // Smooth fade out
          return 100;
        }
        return prev + increment;
      });
    }, 100);

    window.addEventListener('load', () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    });

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="relative w-64 h-64 mb-8"> {/* Added margin-bottom */}
          {/* Circular progress with cuts */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="4"
              strokeDasharray="1, 10" // Creates the cuts/dashes
              strokeLinecap="round"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${progress * 2.5}, 251`} // 2πr ≈ 251 when r=40
              transform="rotate(-90 50 50)"
            />
          </svg>
          
          {/* Logo centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={loading}
              alt="Satyagrah Logo" 
              className="w-24 h-24 object-contain animate-pulse" // Added subtle pulse animation
            />
          </div>
        </div>
        
        {/* Percentage text below the ring */}
        <div className="text-3xl font-bold text-blue-600 transition-all duration-300">
          {progress}%
        </div>
        
        {/* Loading text */}
        <p className="mt-2 text-gray-500">Loading your experience...</p>
      </div>
    );
  }

  return (
    <>
      <Toaster position='top-center' toastOptions={{ duration: 2000 }} />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/university' element={<University />} />
            <Route path='/login' element={<Login />} />
            <Route path='/gallery' element={<PhotosCard />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/success/registrationform/apiCall/687refrjjjefewjwttokenfalse/wfewfwe/false/satyagrah/registrationdonetrue' element={<Success />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><AdminDashBoard /></ProtectedRoute>} />
            <Route path="/payments" element={<ProtectedRoute><PaymentsAdmin /></ProtectedRoute>} />
            <Route path="/register" element={<Register />} />
            <Route path="/leads" element={<ProtectedRoute><LeadsAdmin /></ProtectedRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App;
