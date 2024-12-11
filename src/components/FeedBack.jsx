import React from 'react';
import ph3 from '../assets/ph3.png';
import A1 from '../assets/A1.png';
import A2 from '../assets/A2.png';
import A3 from '../assets/A3.png';

const HealthCareAccess = () => {
  return (
    <section className='w-full h-auto bg-[#D3DAFF] flex flex-col justify-center p-4'>
      <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-5'>
        <div className='flex flex-col justify-center'>
          <div className='text-left mb-8'>
            <p className='text-1xl text-gray-700'>
              Get the best healthcare access to you.<br />
            </p>
            <p className='text-1xl font-bold text-gray-700'>
              Your health, your way! Smarter care is just a tap away. Get the app and stay connected to wellness.
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <img src={A1} alt="A1" className='w-18 h-10' />
            <img src={A2} alt="A2" className='w-18 h-10' />
            <img src={A3} alt="A3" className='w-18 h-10' />
          </div>
        </div>
        <div className='flex justify-center items-center relative'>
          <img 
            src={ph3} 
            alt="ph3" 
            className='w-full max-w-[100%] transform scale-110 -translate-y-10 shadow-lg' 
          />
        </div>
      </div>
    </section>
  );
}

export default HealthCareAccess;
