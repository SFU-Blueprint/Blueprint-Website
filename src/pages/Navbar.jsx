// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full">
        <div className='text-green-500'>logo</div>
        <div >
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
