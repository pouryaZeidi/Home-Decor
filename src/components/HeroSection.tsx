import React from 'react';

const HeroSection = () => {
  return (
    <div>
      <div className='relative w-full h-[100vh]'>
        <img src="/wall.jpg" alt="Background" className="w-full h-[100vh] object-cover" />
        
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[75%] text-nowrap flex justify-center -translate-y-1/2 text-white font-extrabold text-[42px] sm:text-[48px] md:text-[60px] lg:text-[75px]  tracking-wide drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]'>
          HOME DECOR
        </div>
        
        <div className='w-[300px] sm:w-[350px] md:w-[380px] lg:w-[420px] h-[70px] flex items-center font-extrabold rounded-md bg-white absolute top-[82%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center text-[16px] sm:text-[17px] md:text-[19px] lg:text-[21px] justify-center '>
          DESIGNED BY. WARNER & SPENCER
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
