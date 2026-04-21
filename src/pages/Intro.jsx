import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function Intro() {
    const navigate = useNavigate()
  const [systemInfo, setSystemInfo] = useState({ Os: "Scanning...", Browser: "Analyzing..." });
  useEffect(() => {
    const Ua = navigator.userAgent;
    let Os = Ua.includes("Win") ? "Windows 11 Pro" : Ua.includes("Mac") ? "MacOS" : "Linux Kernel";
    let Browser = Ua.includes("Chrome") ? "Google Chrome" : "Firefox Browser";
    setTimeout(() => setSystemInfo({ Os, Browser }), 1000);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen flex items-center justify-center p-6 selection:bg-[#00ff41] selection:text-black">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-[#0f0f0f]/90 backdrop-blur-xl border border-[#00ff41]/20 rounded-xl shadow-[0_0_50px_rgba(0,255,65,0.1)] overflow-hidden"
      >
        
        <div className="bg-[#1a1a1a] px-5 py-3 flex items-center justify-between border-b border-[#00ff41]/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5555] shadow-[0_0_10px_#ff5555]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f1fa8c]"></div>
            <div className="w-3 h-3 rounded-full bg-[#50fa7b]"></div>
          </div>
          <div className="text-[#00ff41]/50 text-[10px] font-mono tracking-widest uppercase">
         Terminal
          </div>
        </div>

        <div className="p-8 font-mono text-[15px] md:text-[17px]">
          
          <div className="mb-6">
            <span className="text-[#00ff41] drop-shadow-[0_0_5px_#00ff41]">ISLAM@GUEST</span>
            <span className="text-white mx-2">:</span>
            <span className="text-[#8be9fd]">~</span>
            <span className="text-[#ff79c6] ml-2">$</span>
            <span className="text-white ml-3">whoami --version_check</span>
          </div>

          <div className="space-y-4 border-l-2 border-[#00ff41]/20 pl-6 my-8">
            <div className="flex items-center">
              <span className="text-[#ffb86c] w-24 inline-block">ROOT:</span>
              <span className="text-white font-bold tracking-tight">ISLAM MAHMOUD</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ffb86c] w-24 inline-block">USER:</span>
              <span className="text-white font-bold tracking-tight">GUEST</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#8be9fd] w-24 inline-block">SYSTEM:</span>
              <span className="text-[#50fa7b]">{systemInfo.Os}</span>
            </div>

            <div className="flex items-center">
              <span className="text-[#bd93f9] w-24 inline-block">CLIENT:</span>
              <span className="text-[#50fa7b]">{systemInfo.Browser}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#ff79c6] font-bold">❯</span>
            <div className="flex items-center">
               <input 
  type="text"
  className="bg-transparent border-none outline-none focus:ring-1 focus:ring-[#00ff41]/50 focus:bg-[#00ff41]/5 transition-all duration-300 px-2 rounded-sm text-[#00ff41] placeholder:text-gray-600 w-full" 
  placeholder="Waiting for Commands..." 
  onKeyDown={(e) =>{ if(e.key === 'Enter')
navigate('/portfolio');
  }}
/>
               <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-2 w-3 h-6 bg-[#00ff41] shadow-[0_0_15px_#00ff41]"
               />
            </div>
          </div>

        </div>
      </motion.div>

      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00ff41]/5 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
}

export default Intro;