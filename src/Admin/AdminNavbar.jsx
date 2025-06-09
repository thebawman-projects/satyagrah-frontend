import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaTachometerAlt, FaMoneyBillWave, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import sankalplogo from "../images/sankalp.png";
import { toast } from "react-hot-toast";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   const handleLogout = () =>{
    navigate('/')
    toast.success("Logged Out SuccesFully")
    window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function(event) {
    window.history.pushState(null, document.title, window.location.href);
  })
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 md:h-10"
              src={sankalplogo}
              alt="Sankalp"
            />
            <span className="hidden md:inline ml-4 text-white text-xl font-medium">Admin Dashboard</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink to="/dashboard" icon={<FaTachometerAlt className="mr-2" />} text="Dashboard" />
            <NavLink to="/payments" icon={<FaMoneyBillWave className="mr-2" />} text="Payments" />
            <NavLink to="/leads" icon={<FaUsers className="mr-2" />} text="Leads" />
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          <MobileNavLink to="/dashboard" icon={<FaTachometerAlt />} text="Dashboard" toggleMenu={toggleMenu} />
          <MobileNavLink to="/payments" icon={<FaMoneyBillWave />} text="Payments" toggleMenu={toggleMenu} />
          <MobileNavLink to="/leads" icon={<FaUsers />} text="Leads" toggleMenu={toggleMenu} />
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="w-full flex items-center px-3 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
  >
    {icon}
    {text}
  </Link>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ to, icon, text, toggleMenu }) => (
  <Link
    to={to}
    onClick={toggleMenu}
    className="flex items-center px-3 py-2 text-base font-medium text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
  >
    <span className="mr-3">{icon}</span>
    {text}
  </Link>
);

export default AdminNavbar;
