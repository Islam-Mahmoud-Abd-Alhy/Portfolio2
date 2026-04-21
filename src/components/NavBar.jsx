import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react"; 
function NavBar() {
const [isOpen, setIsOpen] = useState(false); 
  return (
    <div className="w-full bg-white/10 backdrop-blur-md shadow-xl h-16  border-b border-white/20 fixed z-50">
      <header className="flex flex-row justify-evenly text-center items-center px-12">
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#00ff41] cursor-pointer z-[60]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.633h16.5M3.75 12h16.5m-16.5 5.367h16.5" />
          </svg>
        </div>
        <div className="group relative mt-5">
  <h4 className='text-[#00ff41] font-mono font-bold text-xl tracking-tighter transition-all group-hover:pl-2 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]'>
    <span className="text-gray-500 mr-1 text-md font-light">root@</span>
    ISLAM_MAHMOUD
  </h4>
  <div className="absolute -bottom-1 left-0 w-0 h-1px bg-[#00ff41] transition-all group-hover:w-full opacity-50"></div>
</div>
        <nav>
          <ul className="hidden md:flex flex-row gap-5 justify-center mt-5">
            <Link to="/portfolio" className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Home</Link> 
            <a href="#About"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">About</li></a>
            <a href="#Skills"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Skills</li></a>
            <a href="#Projects"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Projects</li></a> 
            <a href="#Articles"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Articles</li></a>
            <a href="#News"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">News</li></a>
            <a href="#Contact"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Contact</li></a>
          </ul>
        </nav>
        <div className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}>
           <ul className="flex flex-col gap-8 text-center">
              <Link onClick={() => setIsOpen(false)} to="/portfolio" className="text-2xl text-white font-mono font-bold">Home</Link>
              <a onClick={() => setIsOpen(false)} href="#About" className="text-2xl text-white font-mono font-bold">About</a>
              <a onClick={() => setIsOpen(false)} href="#Skills"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Skills</li></a>
             <a onClick={() => setIsOpen(false)} href="#Projects"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Projects</li></a> 
            <a onClick={() => setIsOpen(false)} href="#Articles"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Articles</li></a>
            <a onClick={() => setIsOpen(false)} href="#News"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">News</li></a>
            <a onClick={() => setIsOpen(false)} href="#Contact"><li className="text-white font-bold font-mono hover:text-[#00ff41] transition-all">Contact</li></a>
           </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
