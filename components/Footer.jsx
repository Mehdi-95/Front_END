import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import logo from '../assets/logo2.svg';
import A1 from '../assets/A1.png';
import A2 from '../assets/A2.png';
import A3 from '../assets/A3.png';

const Footer = () => {
  return (
    <footer className='w-full bg-[#001f3f] text-white p-8'>
      <div className='max-w-[1200px] m-auto grid lg:grid-cols-5 md:grid-cols-2 gap-8'>
        {/* Logo and Tagline */}
        <div className='flex flex-col'>
          <img src={logo} alt="Logo" className='w-32 mb-2' />
          <p>Your health, your way! Smarter care is just a tap away.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-xl font-bold mb-2'>Quick Links</h2>
          <ul>
            <li><a href="#" className='hover:underline'>Home</a></li>
            <li><a href="#" className='hover:underline'>About Us</a></li>
            <li><a href="#" className='hover:underline'>Our Services</a></li>
            <li><a href="#" className='hover:underline'>Contact Us</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className='text-xl font-bold mb-2'>Download App</h2>
          <div className='flex flex-col gap-2'>
            <img src={A1} alt="Google Play" className='w-32 h-10' />
            <img src={A2} alt="App Store" className='w-32 h-10' />
            <img src={A3} alt="Huawei AppGallery" className='w-32 h-10' />
          </div>
        </div>

        {/* Socials */}
        <div>
          <h2 className='text-xl font-bold mb-2'>Follow Us</h2>
          <div className='flex gap-4'>
            <FaFacebookF className='hover:text-[#4267B2]' />
            <FaInstagram className='hover:text-[#E4405F]' />
            <FaTwitter className='hover:text-[#1DA1F2]' />
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className='text-xl font-bold mb-2'>Location</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-400 mt-8 pt-4 text-center'>
        <p>© Ideation, 2024. All Rights Reserved.</p>
        <div className='flex justify-center gap-4 mt-2'>
          <a href="#" className='hover:underline'>Privacy Policy</a>
          <a href="#" className='hover:underline'>Terms & Conditions</a>
        </div>
        <div className='mt-4'>
          <a href="#" className='inline-block'>
            <AiOutlineArrowUp size={30} className='hover:text-[#ffffff]' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
