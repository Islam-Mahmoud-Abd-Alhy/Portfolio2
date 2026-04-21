import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("BckkUPh-Pzb0qgK4Y");
    setStatus('Sending...');

    emailjs.sendForm(
      'service_dtestx8', 
      'template_0zyxjye', 
      form.current, 
      'BckkUPh-Pzb0qgK4Y'
    )
    .then((result) => {
    console.log("SUCCESS!", result.text);
}, (error) => {
    console.log("FAILED...", error); 
});
  };

  return (
    <motion.section className='min-h-screen text-white py-20 px-6 flex flex-col items-center justify-center font-mono'
    id='Contact'
    initial={{opacity:0,y:50}}
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }}
    transition={{delay:1,duration:1,ease: "easeOut"}}>
      
      <div className='w-full max-w-xl'>
        <div className='mb-10'>
          <h2 className='text-3xl font-bold border-l-4 border-[#39FF14] pl-4 mb-2'>Get In Touch</h2>
          <p className='text-gray-400 text-sm'>Have a project in mind? Let's build something great together.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-xs uppercase text-[#39FF14] mb-2'>Your Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                className='w-full bg-[#0a0a0a] border border-gray-800 p-3 rounded focus:border-[#39FF14] outline-none transition-all'
                placeholder="Islam Ghazy"
              />
            </div>
            <div>
              <label className='block text-xs uppercase text-[#39FF14] mb-2'>Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                className='w-full bg-[#0a0a0a] border border-gray-800 p-3 rounded focus:border-[#39FF14] outline-none transition-all'
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div>
            <label className='block text-xs uppercase text-[#39FF14] mb-2'>Subject</label>
            <input 
              type="text" 
              name="title" 
              className='w-full bg-[#0a0a0a] border border-gray-800 p-3 rounded focus:border-[#39FF14] outline-none transition-all'
              placeholder="Project Collaboration"
            />
          </div>

          <div>
            <label className='block text-xs uppercase text-[#39FF14] mb-2'>Message</label>
            <textarea 
              name="message" 
              rows="5" 
              required 
              className='w-full bg-[#0a0a0a] border border-gray-800 p-3 rounded focus:border-[#39FF14] outline-none transition-all resize-none'
              placeholder="Tell me more about your project..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className='w-full bg-[#39FF14] text-black font-bold py-3 rounded hover:bg-white transition-all transform active:scale-95 cursor-pointer'
          >
            SEND MESSAGE
          </button>

          {status && (
            <p className='text-center text-sm mt-4 font-semibold text-[#39FF14]'>
              {status}
            </p>
          )}
        </form>
      </div>

    </motion.section>
  );
}

export default Contact;