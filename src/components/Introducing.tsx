import React from 'react';

const Introducing = () => {
  return (
    <div className='w-full h-[100vh] '>

    <div className=' w-full relative flex flex-col md:flex-row justify-between '>

      <img 
        src="/itroduc1.png" 
        alt="" 
        className='w-full md:w-[49%] h-[50vh] object-cover' 
        />

      <img 
        src="/itroduc2.png" 
        alt="" 
        className='hidden md:flex w-full md:w-[49%] h-[50vh] object-cover' 
        />

      <div 
        className='absolute w-[250px] h-[380px] md:h-[500px] md:w-[330px] lg:w-[400px] lg:h-[600px] left-5 sm:left-14 top-40 bg-gray-400 opacity-85 rounded-xl'
        >
        <img 
          src="/man1.jpg" 
          alt="man office" 
          className='rounded-[50%] w-[165px] h-[140px] sm:w-[175px] sm:h-[140px] md:w-[200px] md:h-[175px] lg:w-[250px] lg:h-[230px] absolute left-[45px] sm:left-11 md:left-[85px] lg:left-20 top-16' 
          />
        
        <div className=' text-slate-700  absolute flex justify-center flex-col h-[50%]  items-center bottom-0 text-center'>
          <h3 className='font-bold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]'>
            Benjamin Shah
          </h3>
          <p className='font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>
            CEO
          </p>
          <p className='flex justify-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] p-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae adipisci odio officiis blanditiis.</p>
        </div>
      </div>
          </div>
      <div className='w-[80%] md:w-[100%] flex justify-end  mt-28 md:mt-5 '>
        <div className=' w-[90%]  md:w-[50%] lg:w-[55%] lg:mr-2 text-slate-700  '>
        <h2 className='font-extrabold text-[32px] mt-5 sm:text-[48px] '>INTRODUCING</h2>
        <p className='text-[14px] sm:text-[19px] md:text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus libero sed orci fermentum, pretium tristique sem ultrices. Sed eu justo ipsum. Vestibulum molestie blandit velit nec consequat. Suspendisse at mi mattis, pharetra enim a, luctus libero. Nam aliquet elit ac velit fringilla, sit
        amet facilisis ipsum sollicitudin ultrices.</p>
        </div>
      </div>
    </div>
  );
}

export default Introducing;
