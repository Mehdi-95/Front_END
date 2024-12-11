import React from 'react';
import heroImg from '../assets/heroImg.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';

const HeroSection = () => {
  return (
    <section className='w-full min-h-screen bg-white flex flex-col justify-center px-4 md:px-8 py-12'>
      
      {/* Section for profile images and "Talk to over 100+ online doctors" */}
      <div className='flex flex-col justify-center items-center mt-8 md:mt-12'>
        <div className='flex -space-x-2'>
          {/* Content Container */}
          <div className='relative flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-500'>
            <div className='flex -space-x-4'>
              <img 
                src={image1} 
                alt="doctor1" 
                className='w-10 h-10 rounded-full border-2 border-white shadow-md transform transition-all duration-300 hover:scale-125 hover:z-10' 
              />
              <img 
                src={image2} 
                alt="doctor2" 
                className='w-10 h-10 rounded-full border-2 border-white shadow-md transform transition-all duration-300 hover:scale-125 hover:z-10' 
              />
              <img 
                src={image3} 
                alt="doctor3" 
                className='w-10 h-10 rounded-full border-2 border-white shadow-md transform transition-all duration-300 hover:scale-125 hover:z-10' 
              />
            </div>
            <span className='text-sm font-medium text-gray-800 whitespace-nowrap'>
              Talk to over 100+ online doctors
            </span>
          </div>
        </div>
      </div>

      {/* Section for "One Technology" and "Millions Improved Lives" */}
      <div className='text-center mt-6 md:mt-8'>
        <p className='py-2 text-2xl md:text-4xl text-black font-bold transform transition-all duration-500 hover:text-[#208486]'>
          One Technology
        </p>
        <h1 className='leading-tight md:leading-[42px] py-2 text-xl md:text-3xl font-semibold text-black'>
          Millions <span className='text-[#208486]'>Improved</span> Lives.
        </h1>
        <button className='px-4 md:px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-4 md:mt-6 text-sm md:text-base'>
          Get in Touch
        </button>
      </div>

      {/* Section for hero image and corner images */}
      <div className='relative w-full mt-8 md:mt-12'>
        <img 
          src={heroImg} 
          alt="hero" 
          className='w-full max-w-[90%] md:max-w-[80%] mx-auto object-contain transform transition-all duration-500 hover:scale-105 shadow-xl' 
        />

        {/* Hospital Visit */}
        <div className='absolute top-[-5%] left-[8%] md:left-[20%] bg-[#F3EEFF] px-10 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-2xl transform transition-all duration-500'>
          <span className='text-sm font-medium'>🏥 Hospital Visit</span>
        </div>

        {/* Lab Tests */}
        <div className='absolute top-[25%] left-[5%] md:left-[15%] bg-[#E8F4FF] px-10 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-2xl transform transition-all duration-500'>
          <span className='text-sm font-medium'>🔬 Lab Tests</span>
        </div>

        {/* Medicine Reminders */}
        <div className='absolute top-[-2%] right-[8%] md:right-[22%] bg-[#FFE8E0] px-10 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-2xl transform transition-all duration-500'>
          <span className='text-sm font-medium'>💊 Medicines Reminders</span>
        </div>

        {/* Consult Doctors */}
        <div className='absolute top-[30%] right-[5%] md:right-[18%] bg-[#E0FFE8] px-10 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-2xl transform transition-all duration-500'>
          <span className='text-sm font-medium'>👨‍⚕️ Consult Doctors</span>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
