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
    <div className="w-full h-[96px] bg-white shadow-sm">
      <div className="p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center">
        <img src={Logo} alt="logo" className="h-[25px] cursor-pointer" />

        <ul className="hidden md:flex gap-8 font-medium text-gray-800">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer">Our Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
        </ul>

        <div className="md:flex hidden items-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Download App
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <img src={SearchIcon} alt="search" className="w-5 h-5" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <img src={MenuIcon} alt="menu" className="w-5 h-5" />
          </button>
        </div>

      
      </div>

      <div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className={
            toggle
              ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden'
              : 'hidden'
          }
        >
          <li className="p-4 hover:bg-gray-50">Home</li>
          <li className="p-4 hover:bg-gray-50">About Us</li>
          <li className="p-4 hover:bg-gray-50">Our Services</li>
          <li className="p-4 hover:bg-gray-50">Contact Us</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="px-8 py-3 bg-[#5F77FF] text-white">
              Download App
            </button>
            <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src={SearchIcon} alt="search" className="w-5 h-5" />
            </button>
            <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src={MenuIcon} alt="menu" className="w-5 h-5" />
            </button>
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
