import React from 'react';
import { FaLaptopMedical, FaClipboardList, FaUserShield, FaUserMd, FaMedkit } from 'react-icons/fa';
import backImg from '../assets/back.png';
import bcg from '../assets/bcg.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import ph4 from '../assets/ph4.png';
import rec from '../assets/Rec.png';
import wifi from '../assets/wifi.png';
import card from '../assets/Card.png';

const LeftSection = () => {
  return (
    <section className='w-full h-screen bg-white flex flex-col justify-center p-4'>
      <div className='text-center mb-8'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#5F77FF]'>SERVICES</h1>
        <p className='text-2xl sm:text-3xl md:text-4xl text-gray-700'>Our extensive care features</p>
      </div>
      <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold text-gray-900'>Key features especially for you</h1>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaLaptopMedical size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Insurance Tech Suite</h2>
              <p className='text-gray-700'>Streamline insurance operations with advanced digital tools. Simplify claims, policies, and customer management effortlessly.</p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaClipboardList size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Smart OPD Care System</h2>
              <p className='text-gray-700'>Experience seamless outpatient care with our smart, digital-driven OPD solutions. Improve patient management and efficiency.</p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaUserShield size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Adaptable Health & Life Benefits</h2>
              <p className='text-gray-700'>Tailor health and life plans to your organization’s needs. Flexible solutions for comprehensive employee coverage.</p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaUserMd size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Client-Centric Health Products</h2>
              <p className='text-gray-700'>Discover affordable health products designed to build and sustain long-term client relationships.</p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaMedkit size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Integrated Wellness Programs</h2>
              <p className='text-gray-700'>Promote workplace well-being with customized digital wellness solutions for healthier, happier employees.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-full max-h-[100%] mx-auto p-4">
          {/* Background Image */}
          <img src={backImg} alt="Background" className="w-full h-full rounded-lg shadow-lg" />

          {/* Doctors Profile Section */}
          <div className='absolute top-[15%] left-[10%] overflow-hidden group transition-all duration-300 hover:scale-105'>
            {/* Background Layer */}
            <div className='absolute inset-0 bg-gradient-to-r from-white/90 to-white/50 backdrop-blur-md rounded-full'></div>
            
            {/* Background Image */}
            <img 
              src={bcg} 
              alt="Background Pattern" 
              className='absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay'
            />
          </div>

          {/* Position Images with Comments */}
          {/* Image 1 */}
          <img
            src={c1}
            alt="c1"
            className="absolute lg:left-10 lg:top-24 md:left-5 md:top-16 sm:left-3 sm:top-12 transform transition-all duration-500 hover:scale-105"
            style={{
              width: '72px',
              height: '64px',
              top: '120px',
              left: '10%',
            }}
          />

          {/* Image 2 */}
          <img
            src={c2}
            alt="c2"
            className="absolute lg:right-10 lg:top-20 md:right-6 md:top-12 sm:right-3 sm:top-8 transform transition-all duration-500 hover:scale-105"
            style={{
              width: '72px',
              height: '64px',
              top: '80px',
              right: '10%',
            }}
          />

          {/* Image 3 */}
          <img
            src={c3}
            alt="c3"
            className="absolute lg:left-10 lg:bottom-16 md:left-6 md:bottom-12 sm:left-3 sm:bottom-8 transform transition-all duration-500 hover:scale-105"
            style={{
              width: '72px',
              height: '64px',
              bottom: '160px',
              left: '10%',
            }}
          />

          {/* Central Image */}
          <img
            src={ph4}
            alt="ph4"
            className="absolute lg:w-1/2 md:w-2/3 sm:w-3/4 lg:left-1/2 lg:transform lg:-translate-x-1/2 transform transition-all duration-500 hover:scale-105"
            style={{
              top: '160px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50%',
            }}
          />

          {/* Image 5 */}
          <img
            src={wifi}
            alt="WiFi"
            className="absolute lg:w-1/4 md:w-1/3 sm:w-1/2 lg:left-3/4 lg:top-44 md:left-3/4 md:top-32 sm:left-3/4 sm:top-28 transform transition-all duration-500 hover:scale-105"
            style={{
              width: '180px',
              top: '180px',
              left: '74%',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Image 6 */}
          <img
            src={rec}
            alt="Rec"
            className="absolute lg:w-2/5 md:w-1/2 sm:w-3/4 lg:left-2/4 lg:top-80 md:left-2/4 md:top-64 sm:left-2/4 sm:top-56 transform transition-all duration-500 hover:scale-105"
            style={{
              width: '43%',
              top: '330px',
              left: '42%',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Image 7 */}
          <img
            src={card}
            alt="Card"
            className="absolute lg:w-1/3 md:w-1/2 sm:w-2/3 lg:left-5/6 lg:top-80 md:left-5/6 md:top-64 sm:left-5/6 sm:top-56 transform transition-all duration-500 hover:scale-105"
            style={{
              width: '240px',
              top: '320px',
              left: '85%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
