import React from 'react'

const TableContent = () => {
  return (
    <div className='w-[100%] h-[100vh]  flex justify-between  items-center ' >
        <div className='sm:w-[50%] md:w-[30%] h-[100%] text-slate-700 '>
            <div className='w-[70%] h-[25%] flex  justify-center items-end text-[45px] font-bold  ml-[35px]' >
                TABLE OF CONTENT
                </div>
            <div className=' flex flex-col justify-between h-[60%] mt-[50px] ml-6 sm:ml-[25px] md:ml-[15px] lg:ml-[25px]'>
                <h2 className='text-[18px] sm:text-[22px] md:text-[23px] lg:text-[clamp(29,31,33)]'> <span>•</span> ABOUT US </h2>
                <h2 className='text-[18px] sm:text-[22px] md:text-[23px] lg:text-[clamp(29,31,33)]'> <span>•</span> VISION & MISSION </h2>
                <h2 className='text-[18px] sm:text-[22px] md:text-[23px] lg:text-[clamp(29,31,33)]'> <span>•</span> OUR STORY</h2>
                <h2 className='text-[18px] sm:text-[22px] md:text-[23px] lg:text-[clamp(29,31,33)]'> <span>•</span> MEET THE TEAM</h2>
                <h2 className='text-[18px] sm:text-[22px] md:text-[23px] lg:text-[clamp(29,31,33)]'> <span>•</span> OUR PORTFOLIO</h2>
                <h2 className='text-[18px] sm:text-[22px] md:text-[23px] lg:text-[clamp(29,31,33)]'> <span>•</span> CLIENT FEEDBACK</h2>
                <h2 className='text-[18px] sm:text-[22px] md:text-[23px] lg:text-[clamp(29,31,33)]'> <span>•</span> OUR CONTACT </h2>
            </div>
            </div>
        <img src="/table.png" alt="Design" className='sm:w-[50%] md:w-[60%] lg:w-[80%] object-cover h-[100vh]' />
    </div>
  )
}

export default TableContent