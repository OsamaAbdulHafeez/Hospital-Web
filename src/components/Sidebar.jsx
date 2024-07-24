import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaBars, FaTimes ,FaAmbulance } from 'react-icons/fa';
import { LiaHospitalSolid } from "react-icons/lia";
import { CgEditBlackPoint } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative h-full">
      {/* Sidebar for large screens */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-customdark text-white z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0`}>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 md:hidden">
          <FaTimes size={24} />
        </button>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-6">Edhi Center</h2>
          <ul>
            <li>
              <Link to="/" className="flex items-center p-2 hover:bg-gray-700">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/users" className="flex items-center p-2 hover:bg-gray-700">
                <FaUser className="mr-2" /> Users
              </Link>
            </li>
            <li>
              <Link to="/hospitals" className="flex items-center p-2 hover:bg-gray-700">
                <LiaHospitalSolid className="mr-2" /> Hospitals
              </Link>
            </li>
            <li>
              <Link to="/points" className="flex items-center p-2 hover:bg-gray-700">
                <CgEditBlackPoint className="mr-2" /> Points
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar toggle button for mobile screens */}
      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 md:hidden">
        <FaBars size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
