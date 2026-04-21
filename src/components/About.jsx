import React from 'react'
import { motion } from 'framer-motion';
function About() {
  return (
    <motion.div 
    className='min-h-screen text-white flex flex-col justify-start items-center' 
    id='About'
    initial={{opacity:0,y:50}}
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }}
    transition={{delay:1,duration:1,ease: "easeOut"}}
    >
        <h2 className='bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent font-bold text-3xl font-mono mb-16'>
          ./Root_Access/Skills.sh
        </h2>
<p className='text-green-200 text-center max-w-4xl mt-20 font-mono font-bold'>I'm a web developer and aspiring researcher who believes that code isn't just a tool for building websites, but an architecture that must remain secure and unhackable. My journey began with a deep curiosity about smartphones and evolved into a passion for full-stack applications. My goal is to combine my creative design with the highest standards of digital security to deliver a safe and seamless user experience.</p>
<a href="#Contact"><button className='border-2 border-green-700 mt-20 p-3 font-mono font-bold hover:bg-green-700 transition-all hover:text-black cursor-pointer w-50'>Contact Us</button></a>
    <hr className='border-t border-white/20 w-[80%] mt-20' />

    </motion.div>
  )
}

export default About
