import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaUserPlus } from 'react-icons/fa';

const FooterAdmin = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 shadow-lg border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <a 
            href="https://github.com/TheBawMan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200"
          >
            <FaGithub className="mr-2 text-xl" />
            <span className="text-sm md:text-base font-medium">Developed By @TheBawMan</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/register" 
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors duration-200"
          >
            <FaUserPlus className="mr-2" />
            <span>Admin Register</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterAdmin;
