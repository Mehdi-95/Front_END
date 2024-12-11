import React from 'react';
import { FaPhoneAlt, FaPills, FaCapsules, FaHeartbeat, FaNotesMedical, FaVials } from 'react-icons/fa';
import k1 from '../assets/k1.png';
import k2 from '../assets/k2.png';
import k3 from '../assets/k3.png';
import k4 from '../assets/k4.png';
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';

const QuickActions = () => {
  return (
    <section className='w-full min-h-screen bg-white flex flex-col justify-center p-4'>
      {/* Title Section */}
      <div className='text-center mb-12'>
        <h1 className='text-xl font-bold text-[#5F77FF]'>QUICK ACTIONS</h1>
        <p className='text-2xl md:text-4xl text-gray-700 leading-relaxed'>
          Key features especially<br />for you
        </p>
      </div>

      {/* Content Section */}
      <div className='md:max-w-[1100px] m-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Side: Images and Text */}
        <div className='relative flex justify-center items-center'>
          {/* Text Bar */}
          <div 
  className='absolute bottom-[19%] left-[0%] text-black text-base font-bold py-1 px-3 rounded' 
  style={{ backgroundColor: 'transparent' }}
>
  Talk to over 100+ online doctors
</div>

          
          {/* Images */}
          <img src={k1} alt="k1" className='absolute top-[15%] left-[0%] w-48 h-38' />
          <img src={k2} alt="k2" className='absolute top-[22%] left-[54%] w-48 h-33' />
          <img src={k3} alt="k3" className='absolute top-[65%] right-[0%] w-28 h-35' />
          <img src={k4} alt="k4" className='absolute bottom-[19%] left-[0%] w-42 h-32' />
          <div
            className='absolute bottom-[40%] right-[15%] w-66 h-56 flex justify-center items-center rounded'
            style={{ backgroundColor: '#5F77FF' }}
          >
            <img src={doc1} alt="doc1" className='w-53 h-43' />
          </div>
          <img src={doc2} alt="doc2" className='absolute bottom-[32%] right-[23%] w-53 h-33' />
        </div>

        {/* Right Side: Key Features */}
        <div className='flex flex-col gap-6'>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaPhoneAlt size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Consult Doctor</h2>
              <p className='text-gray-700'>
                Talk to licensed doctors anytime, anywhere. Get expert advice, prescriptions, or second opinions through audio calls, video calls, or chat.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaPills size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Medicine</h2>
              <p className='text-gray-700'>
                Get digital prescriptions and order over-the-counter medicines effortlessly. Enjoy quick delivery and free reminders for refills.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaCapsules size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Pharmacy</h2>
              <p className='text-gray-700'>
                Explore a complete range of health and wellness products. Convenient shopping with trusted quality guaranteed.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaHeartbeat size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Vitals</h2>
              <p className='text-gray-700'>
                Monitor key health metrics like blood pressure, sugar levels, or BMI. Get personalized insights to manage your health better.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaNotesMedical size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Family Records & Checkups</h2>
              <p className='text-gray-700'>
                Manage and track your family’s medical history effortlessly with our secure and reliable e-health records system.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4 hover:bg-[#C4D9FF] p-4 rounded transition duration-300 ease-in-out'>
            <FaVials size={30} style={{ color: '#208486' }} />
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Lab Tests</h2>
              <p className='text-gray-700'>
                Book diagnostic tests easily and avoid long queues. Receive accurate, fast results directly in the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
