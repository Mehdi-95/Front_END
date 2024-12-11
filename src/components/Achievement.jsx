import React from 'react';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
import g6 from '../assets/g6.png';
import pha from '../assets/pha.png';
import phb from '../assets/phb.png';
import ask from '../assets/ask.png';

const Achievement = () => {
  return (
    <section className="w-full bg-white p-5 relative overflow-hidden">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#5F77FF] tracking-wide">SERVICES</h1>
        <p className="text-4xl text-gray-700 mt-2">Our extensive care features</p>
      </div>

      {/* Position all images with 3D effects */}

      {/* g1 with shadow, hover effects */}
      <img
        src={g1}
        alt="g1"
        className="absolute top-[52%] left-[18%] w-44 h-50 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
      />

      {/* g2 with shadow, hover effects */}
      <img
        src={g2}
        alt="g2"
        className="absolute top-[26%] right-[72%] w-64 h-53 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
      />

      {/* g3 with shadow, hover effects */}
      <img
        src={g3}
        alt="g3"
        className="absolute top-[70%] left-[18%] w-40 h-50 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
      />

      {/* g4 with shadow, hover effects */}
      <img
        src={g4}
        alt="g4"
        className="absolute bottom-[53%] right-[74%] w-48 h-50 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
      />

      {/* g5 with shadow, hover effects */}
      <img
        src={g5}
        alt="g5"
        className="absolute top-[63%] left-[24%] w-44 h-50 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
      />

      {/* g6 with shadow, hover effects */}
      <img
        src={g6}
        alt="g6"
        className="absolute bottom-[49%] right-[67%] w-35 h-50 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
      />

      {/* Center content with phone images and Ask image */}
      <div className="flex flex-col items-center justify-center relative mt-10 space-y-10">
        {/* Phone images with 3D effect */}
        <div className="flex space-x-10">
          <div className="relative group">
            <img 
              src={pha} 
              alt="pha" 
              className="w-96 h-[590px] transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            />
            {/* Ask image with position on top and shadow */}
            <img
              src={ask}
              alt="ask"
              className="absolute top-[58%] left-[35%] w-88 h-33 transform transition-transform duration-500 hover:scale-110 hover:shadow-xl"
            />
          </div>
          <img 
            src={phb} 
            alt="phb" 
            className="w-96 h-[590px] transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
