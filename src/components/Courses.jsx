import React from 'react';
import { FaLaptopMedical, FaClipboardList, FaUserShield, FaUserMd, FaMedkit } from 'react-icons/fa';
import backImg from '../assets/back.png';
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
        <h1 className='text-1xl font-bold text-[#5F77FF]'>SERVICES</h1>
        <p className='text-4xl text-gray-700'>Our extensive care features</p>
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
        <div className="relative w-full max-w-[150%] max-h-[100%] mx-auto p-4">
  {/* Background Image */}
  <img src={backImg} alt="Background" className="w-full h-full rounded-lg" />

  {/* Position Images with Comments */}
  {/* Image 1 */}
  <img
    src={c1}
    alt="c1"
    className="absolute"
    style={{ top: '120px', left: '50px', width: '72px', height: '64px' }}
  />

  {/* Image 2 */}
  <img
    src={c2}
    alt="c2"
    className="absolute"
    style={{ top: '80px', right: '50px', width: '72px', height: '64px' }}
  />

  {/* Image 3 */}
  <img
    src={c3}
    alt="c3"
    className="absolute"
    style={{ bottom: '160px', left: '60px', width: '72px', height: '64px' }}
  />

  {/* Central Image */}
  <img
    src={ph4}
    alt="ph4"
    className="absolute"
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
    className="absolute"
    style={{
      top: '180px',
      left: '74%',
      transform: 'translateX(-50%)',
      width: '180px',
    }}
  />

  {/* Image 6 */}
  <img
    src={rec}
    alt="Rec"
    className="absolute"
    style={{
      top: '330px',
      left: '42%',
      transform: 'translateX(-50%)',
      width: '43%',
    }}
  />

  {/* Image 7 */}
  <img
    src={card}
    alt="Card"
    className="absolute"
    style={{
      top: '320px',
      left: '85%',
      transform: 'translateX(-50%)',
      width: '240px',
    }}
  />
</div>

      </div>
    </section>
  );
}

export default LeftSection;
