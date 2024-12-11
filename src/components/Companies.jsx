import React from 'react';

const Achievement = () => {
  return (
    <section className='w-full bg-white p-5'>
      <div className='md:max-w-[1100px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-[#5F77FF] text-3xl md:text-4xl font-bold shadow-lg transform transition-all duration-300'>
            Our Impact
          </h2>
          <h3 className='text-4xl font-bold mt-2 transform transition-all duration-300'>
            Our Milestones
          </h3>
          <p className='text-lg mt-4 opacity-80'>
            Top used healthcare app used by millions of happy users
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8'>
            <div className='text-center p-6 bg-gradient-to-r from-[#5F77FF] to-[#4A64E2] text-white rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300'>
              <h4 className='text-5xl font-bold'>15M+</h4>
              <p className='text-lg'>Active Users</p>
            </div>
            <div className='text-center p-6 bg-gradient-to-r from-[#5F77FF] to-[#4A64E2] text-white rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300'>
              <h4 className='text-5xl font-bold'>3K+</h4>
              <p className='text-lg'>Health Providers</p>
            </div>
            <div className='text-center p-6 bg-gradient-to-r from-[#5F77FF] to-[#4A64E2] text-white rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300'>
              <h4 className='text-5xl font-bold'>2M+</h4>
              <p className='text-lg'>Downloads from app stores</p>
            </div>
            <div className='text-center p-6 bg-gradient-to-r from-[#5F77FF] to-[#4A64E2] text-white rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300'>
              <h4 className='text-5xl font-bold'>4.7</h4>
              <p className='text-lg'>Rating out of 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
