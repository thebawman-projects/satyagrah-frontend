import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-9xl font-bold text-black">404</h1>
      <h2 className="text-4xl font-bold text-black">Page Not Found</h2>
      <p className="text-2xl font-bold text-red-800 mt-10 mb-20">
        The page you are looking for does not exist.
      </p>
      <Link
        className="px-4 py-2 bg-blue-700 rounded-md text-lg font-medium text-white hover:bg-gray-600"
        to="/"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
