import React from 'react'
import {motion} from 'framer-motion'
function News() {
  return (
    <motion.div
      className='min-h-screen flex flex-col justify-start items-center'
      id='News'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 1, ease: "easeOut" }}
    >
      <h2 className="bg-linear-to-r from-green-500 to-white bg-clip-text text-transparent font-bold text-3xl font-mono mb-20 mt-10">
        ./Root_Access/News.txt
      </h2>
      <div className='flex flex-row justify-center items-center flex-wrap gap-5'>
<div className='bg-white/5 backdrop-blur-md shadow-xl border border-white/20 p-5 flex flex-col gap-5 rounded-md w-100'>
<h3 className='text-green-700 font-mono font-bold'>Latest News  <span className='text-green-400 animate-pulse'>•</span></h3>
<h3 className='text-gray-300 font-mono text-lg'># BROADCAST: FREELANCE_LAUNCH</h3>
<div className="bg-emerald-950/10 border-l-2 border-emerald-600 p-4">
    <p className="text-gray-200 leading-relaxed text-sm">
      <span className="text-emerald-400 font-bold">ANNOUNCEMENT:</span> 
      I have officially launched my services on <span className="text-white underline">Mostaql </span>
      Follow my profile to get <span className="text-emerald-400 font-bold italic">High-Performance & Secure Web Applications</span> built with the latest defense standards.
    </p>
  </div>
  <a href="https://mostaql.com/u/Islam_Ghazy_Dev" target="_blank" rel="noopener noreferrer">
    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
      Learn More
    </button>
  </a>
</div>
<div className='bg-white/5 backdrop-blur-md shadow-xl border border-white/20 p-5 flex flex-col gap-5 rounded-md w-100'>
<h3 className='text-green-700 font-mono font-bold'>Latest News  <span className='text-green-400 animate-pulse'>•</span></h3>
<h3 className='text-gray-300 font-mono text-lg'># BROADCAST: FREELANCE_LAUNCH</h3>
<div className="bg-emerald-950/10 border-l-2 border-emerald-600 p-4">
    <p className="text-gray-200 leading-relaxed text-sm">
      <span className="text-emerald-400 font-bold">ANNOUNCEMENT:</span> 
      I have officially launched my services on <span className="text-white underline">khamsat </span>
      Follow my profile to get <span className="text-emerald-400 font-bold italic">High-Performance & Secure Web Applications</span> built with the latest defense standards.
    </p>
  </div>
  <a href="https://khamsat.com/user/islam_ghazy_dev" target="_blank" rel="noopener noreferrer">
    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
      Learn More
    </button>
  </a>
</div>
<div className='bg-white/5 backdrop-blur-md shadow-xl border border-white/20 p-5 flex flex-col gap-5 rounded-md w-100 h-78'>
<h3 className='text-green-700 font-mono font-bold'>Latest News  <span className='text-green-400 animate-pulse'>•</span></h3>


  <h3 className="text-white text-lg font-bold tracking-wider">
    # SYSTEM_UPDATE: ROLE_UPGRADE
  </h3>

  <div className="bg-black/20 border-l-2 border-emerald-600 p-4">
    <p className="text-gray-300 leading-relaxed text-sm">
      <span className="text-emerald-400 font-bold uppercase">Success:</span> 
      Profile officially upgraded to <span className="text-white underline">Junior Full-Stack Developer</span>. 
      Ready to architect end-to-end solutions with a heavy focus on <span className="text-emerald-400 italic font-bold">Web Security & Performance</span>.
    </p>
  </div>
</div>
    <hr className='border-t border-white/20 w-[80%] mt-15' />
      </div>
    </motion.div>
  )
}

export default News
