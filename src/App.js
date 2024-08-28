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
import HomeImageCard from './Components/Home/HomeImageCard';
import Success from './Components/Registration/Success';
import { PaymentsAdmin } from './Admin/PaymentsAdmin';
import { LeadsAdmin } from './Admin/LeadsAdmin';

// axios.defaults.baseURL = 'https://satyagrah-backend-thebawman.onrender.com'
// axios.defaults.baseURL = 'http://localhost:4001'
axios.defaults.baseURL = 'https://satyagrahbackend-4ycxknrp.b4a.run/'
axios.defaults.withCredentials = true

function App() {
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
            <Route path='/about' element={<AboutUs />} />
            <Route path='/gallery' element={<HomeImageCard />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/success/registrationform/apiCall/687refrjjjefewjwttokenfalse/wfewfwe/false/satyagrah/registrationdonetrue' element={<Success />} />

            {/* Protected Routes  */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashBoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payments"
              element={
                <ProtectedRoute>
                  <PaymentsAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
             
                  <Register />
               
              }
            />
            <Route
              path="/leads"
              element={
                <ProtectedRoute>
                  <LeadsAdmin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App;
