import React from 'react'
import { motion } from "framer-motion";
function Mysterious() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-white text-2xl font-bold font-mono'>
      <motion.div className=' text-center md:w-auto h-auto bg-gray-700/10 border-2 border-green-600/25 rounded-3xl flex flex-col gap-3 items-center justify-center backdrop-blur-sm group p-10'
initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
      >
        <p className='p-10'>This is a mysterious section<span className='text-green-500'>...Stay tuned for updates !</span></p> 
        <div className="mb-6 opacity-80 transition-transform duration-500 group-hover:scale-105">
           <svg className="w-20 h-20 text-green-500/40 group-hover:text-green-500 transition-all duration-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm3 8H9V7a3 3 0 0 1 6 0v3z"/>
           </svg>
        </div>
        <h2 className="text-2xl font-black font-mono tracking-[0.2em] text-green-500 mb-2 animate-pulse">
           SYSTEM_MAZE: LOCKED
        </h2>
        <input type="text" className='p-1 mb-1 border-2 border-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-0 placeholder:text-[15px] placeholder:white/30' placeholder='Suggest The Mysterious Section ...' /> 
        <p className='text-red-500  font-mono text-[8px] mb-5'>[Warning] <span className='text-white'>The Hint is AnyWhere Search Abou it if You a True Programmer</span></p>
      </motion.div>
      <hr className='border-t border-white/20 w-[80%] mt-15' />
    </div>
  )
}

export default Mysterious
