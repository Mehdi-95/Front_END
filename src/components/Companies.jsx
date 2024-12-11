import React from 'react';

const Achievement = () => {
  return (
    <section className='w-full bg-white p-5'>
      <div className='md:max-w-[1100px] m-auto'>
        <div className='text-center'>
          <h2 className='text-[#5F77FF] text-2xl font-bold'>Our Impact</h2>
          <h3 className='text-4xl font-bold mt-2'>Our Milestones</h3>
          <p className='text-lg mt-4'>Top used healthcare app used by millions of happy users</p>
          <div className='flex justify-around mt-8'>
            <div className='text-center'>
              <h4 className='text-[#5F77FF] text-5xl font-bold'>15M+</h4>
              <p className='text-lg'>Active Users</p>
            </div>
            <div className='text-center'>
              <h4 className='text-[#5F77FF] text-5xl font-bold'>3K+</h4>
              <p className='text-lg'>Health Providers</p>
            </div>
            <div className='text-center'>
              <h4 className='text-[#5F77FF] text-5xl font-bold'>2M+</h4>
              <p className='text-lg'>Downloads from app stores</p>
            </div>
            <div className='text-center'>
              <h4 className='text-[#5F77FF] text-5xl font-bold'>4.7</h4>
              <p className='text-lg'>Rating out of 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievement
