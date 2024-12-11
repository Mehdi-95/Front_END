import React, { useState } from 'react';
import Logo from '../assets/l1.svg';
import SearchIcon from '../assets/search.png';
import MenuIcon from '../assets/menu.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-auto md:h-[96px] bg-white shadow-lg relative rounded-b-3xl transform transition-all ease-in-out duration-300 hover:shadow-2xl">
      <div className="p-4 md:max-w-[1080px] max-w-full mx-auto w-full h-full flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <img src={Logo} alt="logo" className="h-[25px] cursor-pointer transition-transform transform hover:scale-105" />
          <button onClick={handleToggle} className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <img src={MenuIcon} alt="menu" className="w-6 h-6" />
          </button>
        </div>

        <ul className="hidden md:flex gap-4 lg:gap-8 font-medium text-gray-800">
          <li className="hover:text-blue-600 cursor-pointer transition-all transform hover:scale-110">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition-all transform hover:scale-110">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer transition-all transform hover:scale-110">Our Services</li>
          <li className="hover:text-blue-600 cursor-pointer transition-all transform hover:scale-110">Contact Us</li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 lg:px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm lg:text-base shadow-lg transform transition-all hover:scale-105">
            Download App
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow-md transform transition-all hover:scale-110">
            <img src={SearchIcon} alt="search" className="w-5 h-5" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow-md transform transition-all hover:scale-110">
            <img src={MenuIcon} alt="menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: toggle ? 1 : 0, height: toggle ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="w-full md:hidden overflow-hidden"
        >
          <ul className="flex flex-col w-full bg-white mt-4 space-y-2">
            <li className="px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">Home</li>
            <li className="px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">About Us</li>
            <li className="px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">Our Services</li>
            <li className="px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">Contact Us</li>
            <div className="flex flex-col gap-3 p-4">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg transform transition-all hover:scale-105">
                Download App
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center shadow-md transform transition-all hover:scale-110">
                <img src={SearchIcon} alt="search" className="w-5 h-5" />
              </button>
            </div>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
