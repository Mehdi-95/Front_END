import React from 'react';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';  {/* Add g5 */}
import g6 from '../assets/g6.png';  {/* Add g6 */}
import pha from '../assets/pha.png';
import phb from '../assets/phb.png';
import ask from '../assets/ask.png';

const Achievement = () => {
  return (
    <section className="w-full bg-white p-5 relative">
      <div className="text-center mb-8">
        <h1 className="text-1xl font-bold text-[#5F77FF]">SERVICES</h1>
        <p className="text-4xl text-gray-700">Our extensive care features</p>
      </div>

      {/* Position all images */}

      {/* Position g1 image farther from top-left corner and enhanced size, horizontally stretched */}
      <img
        src={g1}
        alt="g1"
        className="absolute top-[52%] left-[18%] w-44 h-50"
      />

      {/* Position g2 image farther from top-right corner and enhanced size, horizontally stretched */}
      <img
  src={g2}
  alt="g2"
  className="absolute top-[26%] right-[72%] w-64 h-53"  // Increased width for g2
/>


      {/* Position g3 image farther from bottom-left corner and enhanced size, horizontally stretched */}
      <img
        src={g3}
        alt="g3"
        className="absolute top-[70%] left-[18%] w-40 h-50"
      />

      {/* Position g4 image farther from bottom-right corner and enhanced size, horizontally stretched */}
      <img
        src={g4}
        alt="g4"
        className="absolute bottom-[53%] right-[74%] w-48 h-50"
      />

      {/* Position g5 image closer to the top-left corner and enhanced size */}
      <img
        src={g5}
        alt="g5"
        className="absolute top-[63%] left-[24%] w-44 h-50"
      />

      {/* Position g6 image closer to the bottom-right corner and enhanced size */}
      <img
        src={g6}
        alt="g6"
        className="absolute bottom-[49%] right-[67%] w-35 h-50"
      />

      {/* Center content merged with phone images and Ask image */}
      <div className="flex flex-col items-center justify-center relative mt-10">
        {/* Phone images */}
        <div className="flex space-x-10">
          <div className="relative">
            <img src={pha} alt="pha" className="w-96 h-[590px]" /> {/* Increased vertical size */}
            {/* Position ask on top of pha */}
            <img
              src={ask}
              alt="ask"
              className="absolute top-[58%] left-35 w-88 h-33" /* Positioned ask on top of pha */
            />
          </div>
          <img src={phb} alt="phb" className="w-96 h-[590px]" /> {/* Increased vertical size */}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
