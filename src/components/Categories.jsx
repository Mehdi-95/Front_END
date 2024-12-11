import React from 'react';
import { FaPhoneAlt, FaPills, FaCapsules, FaHeartbeat, FaNotesMedical, FaVials } from 'react-icons/fa';
import k1 from '../assets/k1.png';
import k2 from '../assets/k2.png';
import k3 from '../assets/k3.png';
import k4 from '../assets/k4.png';
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import bcg from '../assets/bcg.png';

const QuickActions = () => {
  return (
    <section className='w-full min-h-screen bg-white flex flex-col justify-center p-4'>
      {/* Title Section */}
      <div className='text-center mb-8 md:mb-12 px-4'>
        <h1 className='text-lg md:text-xl font-bold text-[#5F77FF]'>QUICK ACTIONS</h1>
        <p className='text-xl md:text-2xl lg:text-4xl text-gray-700 leading-relaxed mt-2'>
          Key features especially<br className='hidden md:block' /> for you
        </p>
      </div>

      {/* Content Section */}
      <div className='md:max-w-[1100px] m-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-8'>
        {/* Left Side: Images and Text */}
        <div className='relative flex justify-center items-center min-h-[500px] md:min-h-[600px]'>
          {/* Dark card with icons */}
          <div className='absolute top-[10%] left-[5%] w-[280px] h-[180px] bg-[#1E1E1E] rounded-2xl p-6 z-10'>
            <h3 className='text-white text-xl font-semibold mb-4'>Choose experts from any department</h3>
            <div className='grid grid-cols-4 gap-4'>
              <div className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center'>
                <svg className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center'>
                <svg className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center'>
                <svg className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center'>
                <svg className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Doctor appointment card */}
          <div className='absolute top-[25%] left-[25%] w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden z-20'>
            <div className='bg-[#5F77FF] h-[200px] w-full relative'>
              <img src={doc1} alt="doctor" className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180px] h-auto' />
            </div>
            <div className='p-4'>
              <div className='flex justify-between items-center mb-2'>
                <div>
                  <h4 className='text-lg font-semibold'>Dr. Khadija Iqbal</h4>
                  <p className='text-sm text-gray-500'>General Practitioner</p>
                </div>
                <div className='bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm'>
                  Confirmed
                </div>
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <span>08:30 am - 09:00 pm</span>
              </div>
              <div className='flex gap-2 mt-4'>
                <button className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                  <svg className='w-5 h-5 text-blue-600' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                  </svg>
                </button>
                <button className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                  <svg className='w-5 h-5 text-blue-600' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                  <svg className='w-5 h-5 text-blue-600' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className='w-10 h-10 rounded-full bg-red-100 flex items-center justify-center'>
                  <svg className='w-5 h-5 text-red-600' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Doctor profiles strip */}
          <div className='relative w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bcg.png})` }}>
  <div className='absolute top-[70%] right-[10%] bg-white/80 backdrop-blur-lg rounded-full px-6 py-4 flex items-center gap-5 z-30 shadow-2xl transform transition-all hover:scale-105'>
    <div className='flex -space-x-4'>
      <img src={image1} alt="doctor1" className='w-12 h-12 rounded-full border-4 border-white shadow-lg' />
      <img src={image2} alt="doctor2" className='w-12 h-12 rounded-full border-4 border-white shadow-lg' />
      <img src={image3} alt="doctor3" className='w-12 h-12 rounded-full border-4 border-white shadow-lg' />
    </div>
    <span className='text-lg font-medium text-gray-800'>Get Expert Advice from 100+ Online Doctors</span>
  </div>

</div>


          {/* Certification badge */}
          <div className='absolute bottom-[30%] right-[15%] w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-30'>
            <svg className='w-8 h-8 text-blue-600' viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        {/* Right Side: Key Features */}
        <div className='flex flex-col gap-4 md:gap-6'>
          <div className='flex items-start gap-3 md:gap-4 hover:bg-[#C4D9FF] p-3 md:p-4 rounded transition duration-300 ease-in-out'>
            <FaPhoneAlt size={24} className="text-[#208486] mt-1 flex-shrink-0" />
            <div>
              <h2 className='text-lg md:text-xl font-semibold text-gray-900'>Consult Doctor</h2>
              <p className='text-sm md:text-base text-gray-700'>
                Talk to licensed doctors anytime, anywhere. Get expert advice, prescriptions, or second opinions through audio calls, video calls, or chat.
              </p>
            </div>
          </div>
          
          <div className='flex items-start gap-3 md:gap-4 hover:bg-[#C4D9FF] p-3 md:p-4 rounded transition duration-300 ease-in-out'>
            <FaPills size={24} className="text-[#208486] mt-1 flex-shrink-0" />
            <div>
              <h2 className='text-lg md:text-xl font-semibold text-gray-900'>Medicine</h2>
              <p className='text-sm md:text-base text-gray-700'>
                Get digital prescriptions and order over-the-counter medicines effortlessly. Enjoy quick delivery and free reminders for refills.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3 md:gap-4 hover:bg-[#C4D9FF] p-3 md:p-4 rounded transition duration-300 ease-in-out'>
            <FaCapsules size={24} className="text-[#208486] mt-1 flex-shrink-0" />
            <div>
              <h2 className='text-lg md:text-xl font-semibold text-gray-900'>Pharmacy</h2>
              <p className='text-sm md:text-base text-gray-700'>
                Explore a complete range of health and wellness products. Convenient shopping with trusted quality guaranteed.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3 md:gap-4 hover:bg-[#C4D9FF] p-3 md:p-4 rounded transition duration-300 ease-in-out'>
            <FaHeartbeat size={24} className="text-[#208486] mt-1 flex-shrink-0" />
            <div>
              <h2 className='text-lg md:text-xl font-semibold text-gray-900'>Vitals</h2>
              <p className='text-sm md:text-base text-gray-700'>
                Monitor key health metrics like blood pressure, sugar levels, or BMI. Get personalized insights to manage your health better.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3 md:gap-4 hover:bg-[#C4D9FF] p-3 md:p-4 rounded transition duration-300 ease-in-out'>
            <FaNotesMedical size={24} className="text-[#208486] mt-1 flex-shrink-0" />
            <div>
              <h2 className='text-lg md:text-xl font-semibold text-gray-900'>Family Records & Checkups</h2>
              <p className='text-sm md:text-base text-gray-700'>
                Manage and track your family's medical history effortlessly with our secure and reliable e-health records system.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3 md:gap-4 hover:bg-[#C4D9FF] p-3 md:p-4 rounded transition duration-300 ease-in-out'>
            <FaVials size={24} className="text-[#208486] mt-1 flex-shrink-0" />
            <div>
              <h2 className='text-lg md:text-xl font-semibold text-gray-900'>Lab Tests</h2>
              <p className='text-sm md:text-base text-gray-700'>
                Book lab tests online and get results digitally. Home sample collection available for your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
