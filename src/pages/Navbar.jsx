// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full justify-between p-2">
        <div>logo</div>
        <div className='space-x-3'>
          <Link to="/about" className="hover:text-gray-600">About</Link>
          <Link to="/projects" className="hover:text-gray-600">For Students</Link>
          <Link to="/nonprofits" className="hover:text-gray-600">For Nonprofits</Link>
          <Link to="/sponsors" className="hover:text-gray-600">Sponsor</Link>
      </div>
    </nav>
  );
};

export default Navbar;
