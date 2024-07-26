import React, { useState } from 'react';
import { FaHome, FaUser,  FaBars, FaTimes, FaAmbulance } from 'react-icons/fa';
import { LiaHospitalSolid } from "react-icons/lia";
import { CgEditBlackPoint } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative h-full">
     
      <div className={`fixed top-0 left-0 w-64 h-full bg-customdark text-white z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0`}>
       
        <div className="p-4 pt-16"> 
          <h2 className="text-2xl font-bold mb-6">Edhi Center</h2>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) =>
                `flex items-center p-2 ${isActive ? 'bg-red-900 rounded' : 'hover:bg-red-900'}`
              } onClick={handleLinkClick}>
                <FaHome className="mr-2" /> Home
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/hospitals" className={({ isActive }) =>
                `flex items-center p-2 ${isActive ? 'bg-red-900 rounded' : 'hover:bg-red-900'}`
              } onClick={handleLinkClick}>
                <LiaHospitalSolid className="mr-2" /> Hospitals
              </NavLink>
            </li>
            <li>
              <NavLink to="/points" className={({ isActive }) => 
                `flex items-center p-2 ${isActive ? 'bg-red-900 rounded' : 'hover:bg-red-900'}`}
                onClick={handleLinkClick}>
                <CgEditBlackPoint className="mr-2" /> Points
              </NavLink>
            </li>
            <li>
              <NavLink to="/createuser" className={({ isActive }) => 
                `flex items-center p-2 ${isActive ? 'bg-red-900 rounded' : 'hover:bg-red-900'}`}
                onClick={handleLinkClick}>
                <FaUser className="mr-2" /> Create User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 md:hidden">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
};

export default Sidebar;
