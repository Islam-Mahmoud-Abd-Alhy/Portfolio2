import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-black border-t border-gray-900 py-12 px-6 font-mono'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
        
        <div className='text-center md:text-left'>
          <h2 className='text-[#39FF14] text-xl font-bold tracking-tighter mb-1'>
            ISLAM MAHMOUD
          </h2>
          <p className='text-gray-500 text-xs'>
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        <div className='flex gap-6 text-gray-400 text-sm'>
          <a href="#About" className='hover:text-[#39FF14] transition-colors'>About</a>
          <a href="#Projects" className='hover:text-[#39FF14] transition-colors'>Projects</a>
          <a href="#Contact" className='hover:text-[#39FF14] transition-colors'>Contact</a>
        </div>

        <div className='flex gap-5 text-xl'>
          <a 
            href="https://github.com/Islam-Mahmoud-Abd-Alhy" 
            target="_blank" 
            className='text-gray-500 hover:text-white transition-all transform hover:-translate-y-1'
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/islam-mahmoud-abdel-hay-ghazy-3a8461385/" 
            target="_blank" 
            className='text-gray-500 hover:text-[#0077b5] transition-all transform hover:-translate-y-1'
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:islam2010ghazy@gmail.com" 
            target="_blank" 
            className='text-gray-500 hover:text-red-500 transition-all transform hover:-translate-y-1'
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a 
            href="tel:+201064186453" 
            target="_blank" 
            className='text-gray-500 hover:text-green-500 transition-all transform hover:-translate-y-1'
            title="Phone"
          >
            <FaPhoneAlt />
          </a>
        </div>

      </div>

      <div className='mt-8 text-center'>
        <span className='text-[10px] text-gray-700 uppercase tracking-[0.3em]'>
          Built with passion & clean code
        </span>
      </div>
    </footer>
  );
}

export default Footer;