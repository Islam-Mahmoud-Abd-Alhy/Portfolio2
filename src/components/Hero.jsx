import React from 'react'
import myProfileImg from '../Assets/portfolio.webp'; 
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div id="home">
      <main className='min-h-screen flex flex-col justify-center pt-24 md:pt-0'>
        <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-10 grow'>
          
          <motion.div
            className='bg-gradient-to-tr from-green-700 to-black w-56 h-56 md:w-80 md:h-80 overflow-hidden rounded-xl hover:shadow-2xl hover:shadow-green-500/50 group border border-green-900/30'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img 
              src={myProfileImg} 
              alt="Islam Mahmoud"
              className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 md'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}   
            transition={{ delay: 0.5, duration: 0.8 }} 
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
              Root@<span className='text-[#00ff41]'>Islam_Mahmoud</span>
            </h1>
            <p className="text-[#00ff41] font-mono mt-2 mb-6 text-sm md:text-lg">
              &gt; Security Engineer & Developer_
            </p>
            
            <div className='space-y-3 font-mono bg-black/40 p-6 rounded-lg border border-white/5 backdrop-blur-sm'>
                <p className='text-white text-sm md:text-base text-left'>
                  <span className="text-[#00ff41] font-bold">root@islam:~$</span> whoami
                </p>
                <p className='text-gray-300 text-sm md:text-base text-left leading-relaxed'>
                  Junior Full Stack Developer & Security Researcher.
                </p>
                <p className='text-gray-300 text-sm md:text-base text-left leading-relaxed'>
                  Bridging the gap between beautiful code and robust security.
                </p>
                <p className='text-gray-500 text-xs italic text-left pt-2 border-t border-white/5'>
                  // I build scalable web applications with a security-first mindset
                </p>
            </div>
          </motion.div>
        </div>

        <hr className='border-t border-white/10 w-[80%] mx-auto mb-10' />
      </main>
    </div>
  )
}

export default Hero;