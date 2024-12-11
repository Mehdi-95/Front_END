import React from 'react'
import heroImg from '../assets/heroImg.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'

const HeroSection = () => {
  return (
    <section className='w-full min-h-screen bg-white flex flex-col justify-center'>
      
      {/* Section for profile images and "Talk to over 100+ online doctors" */}
      <div className='flex flex-col justify-center items-center mt-12'>
        <div className='flex items-center border border-gray-300 rounded-full px-4 py-2'>
          <div className='flex -space-x-2'>
            <img src={image1} alt="person1" className='w-8 h-8 rounded-full border-2 border-white'/>
            <img src={image2} alt="person2" className='w-8 h-8 rounded-full border-2 border-white'/>
            <img src={image3} alt="person3" className='w-8 h-8 rounded-full border-2 border-white'/>
          </div>
          <span className='ml-2 text-gray-700'>Talk to over 100+ online doctors</span>
        </div>
      </div>

      {/* Section for "One Technology" and "Millions Improved Lives" */}
      <div className='text-center mt-8'>
        <p className='py-2 text-4xl text-black font-bold'>One Technology</p>
        <h1 className='md:leading-[42px] py-2 md:text-3xl text-lg font-semibold text-black'>
          Millions <span className='text-[#208486]'>Improved</span> Lives.
        </h1>
        <button className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-6'>
          Get in Touch
        </button>
        <form className='input-box-shadow flex justify-between items-center bg-transparent gap-2 mt-4'>
        
        </form>
      </div>

      {/* Section for hero image and corner images */}
      <div className='relative w-full mt-12'>
        <img 
          src={heroImg} 
          alt="hero" 
          className='w-full max-w-[80%] mx-auto object-contain' 
        />
        
{/* Position g1 image farther from top-left corner and enhanced size, horizontally stretched */}
<img src={g1} alt="g1" className='absolute top-[18%] left-[24%] w-44 h-50' />

{/* Position g2 image farther from top-right corner and enhanced size, horizontally stretched */}
<img src={g2} alt="g2" className='absolute top-[18%] right-[33%] w-48 h-50' />

{/* Position g3 image farther from bottom-left corner and enhanced size, horizontally stretched */}
<img src={g3} alt="g3" className='absolute top-[57%] left-[9%] w-40 h-50' />

{/* Position g4 image farther from bottom-right corner and enhanced size, horizontally stretched */}
<img src={g4} alt="g4" className='absolute bottom-[15%] right-[11%] w-44 h-50' />


      </div>
      
    </section>
  )
}

export default HeroSection
