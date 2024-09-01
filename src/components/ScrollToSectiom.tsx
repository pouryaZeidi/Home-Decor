import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex w-[100%] h-[50px] items-center justify-between p-4 bg-white/30 backdrop-blur-md backdrop-saturate-150 border-b border-white/20'>
        <div onClick={() => scrollToSection('about-us')} className="cursor-pointer">ABOUT US</div>
        <div onClick={() => scrollToSection('vision-mission')} className="cursor-pointer">VISION & MISSION</div>
        <div onClick={() => scrollToSection('services')} className="cursor-pointer">OUR SERVICES</div>
        <div onClick={() => scrollToSection('team')} className="cursor-pointer">MEET THE TEAM</div>
        <div onClick={() => scrollToSection('feedback')} className="cursor-pointer">OUR FEEDBACK</div>
        <div onClick={() => scrollToSection('contact')} className="cursor-pointer">OUR CONTACT</div>
    </div>
  );
};

export default Navbar;
