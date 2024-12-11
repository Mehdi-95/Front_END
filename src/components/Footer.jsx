import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import logo from '../assets/l2.svg';
import A1 from '../assets/A1.png';
import A2 from '../assets/A2.png';
import A3 from '../assets/A3.png';

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-r from-[#001f3f] to-[#004e89] text-white p-8'>
      <div className='max-w-[1200px] m-auto grid lg:grid-cols-5 md:grid-cols-2 gap-8'>
        {/* Logo and Tagline */}
        <div className='flex flex-col items-start'>
          <img src={logo} alt="Logo" className='w-32 mb-4 transform transition-all hover:scale-110' />
          <p className='text-sm font-medium text-gray-300'>Your health, your way! Smarter care is just a tap away.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-xl font-bold mb-2 transform transition-all hover:scale-110'>Quick Links</h2>
          <ul>
            <li><a href="#" className='hover:underline hover:text-blue-400 transition-colors'>Home</a></li>
            <li><a href="#" className='hover:underline hover:text-blue-400 transition-colors'>About Us</a></li>
            <li><a href="#" className='hover:underline hover:text-blue-400 transition-colors'>Our Services</a></li>
            <li><a href="#" className='hover:underline hover:text-blue-400 transition-colors'>Contact Us</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className='text-xl font-bold mb-2 transform transition-all hover:scale-110'>Download App</h2>
          <div className='flex flex-col gap-2'>
            <img src={A1} alt="Google Play" className='w-32 h-10 shadow-lg transform transition-all hover:scale-105' />
            <img src={A2} alt="App Store" className='w-32 h-10 shadow-lg transform transition-all hover:scale-105' />
            <img src={A3} alt="Huawei AppGallery" className='w-32 h-10 shadow-lg transform transition-all hover:scale-105' />
          </div>
        </div>

        {/* Socials */}
        <div>
          <h2 className='text-xl font-bold mb-2 transform transition-all hover:scale-110'>Follow Us</h2>
          <div className='flex gap-6'>
            <FaFacebookF className='text-2xl transform transition-all hover:text-[#4267B2] hover:scale-110' />
            <FaInstagram className='text-2xl transform transition-all hover:text-[#E4405F] hover:scale-110' />
            <FaTwitter className='text-2xl transform transition-all hover:text-[#1DA1F2] hover:scale-110' />
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className='text-xl font-bold mb-2 transform transition-all hover:scale-110'>Location</h2>
          <p className='text-sm font-medium text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-400 mt-8 pt-4 text-center'>
        <p className='text-sm'>© Ideation, 2024. All Rights Reserved.</p>
        <div className='flex justify-center gap-4 mt-2'>
          <a href="#" className='hover:underline hover:text-blue-400 transition-colors text-sm'>Privacy Policy</a>
          <a href="#" className='hover:underline hover:text-blue-400 transition-colors text-sm'>Terms & Conditions</a>
        </div>
        <div className='mt-4'>
          <a href="#" className='inline-block'>
            <AiOutlineArrowUp size={30} className='hover:text-white transform transition-all hover:scale-110' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
