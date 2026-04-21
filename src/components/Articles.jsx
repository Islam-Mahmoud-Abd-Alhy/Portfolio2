import React from "react";
import { motion } from 'framer-motion';
function Articles() {
  return (
    <motion.div
      className="min-h-screen py-24 flex flex-col items-center justify-center gap-10 px-6"
      id="Articles"
      initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
     >
      <h2 className="bg-linear-to-r from-green-500 to-white bg-clip-text text-transparent font-bold text-3xl font-mono mb-20 md:mb-10">
        ./Root_Access/Articles.txt
      </h2>
      <div className="flex flex-row justify-center gap-3 mb-3 flex-wrap">
        <div className="bg-white/5 backdrop-blur-md shadow-xl border border-white/20 p-5 flex flex-col gap-5 rounded-xl w-100">
          <div>
            <h3 className="text-red-500 mb-1 font-bold tracking-wider underline">
              # LOG_FILE: XSS_PATCH_01
            </h3>
            <p className="text-gray-400 text-xs italic">
              // Date: 2026-04-20 | Status: RESOLVED
            </p>
          </div>
          <div className="bg-red-950/10 border-l-2 border-red-600 p-3">
          <p className="text-gray-300"><span className="text-red-400 font-bold">DETECTION:</span> XSS vulnerability found in session management. Tokens were exposed via <code className="bg-red-900/20 px-1 text-red-200">document.cookie</code>.</p>
        </div>
        <div className="space-y-2">
          <p className="text-green-400 font-bold">--- IMPLEMENTED SOLUTION ---</p>
          <div className="bg-black/50 p-3 rounded border border-gray-800">
            <code className="text-blue-300 block">Set-Cookie: token=JWT_TOKEN;</code>
            <code className="text-blue-300 block ml-4">HttpOnly; <span className="text-gray-500">// Blocks JS access</span></code>
            <code className="text-blue-300 block ml-4">Secure; <span className="text-gray-500">// HTTPS only</span></code>
            <code className="text-blue-300 block ml-4">SameSite=Strict;</code>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-2 text-green-500 animate-pulse">
          <span className="text-xl">✔</span>
          <span className="text-xs font-bold tracking-tighter uppercase">Security Level: Hardened</span>
        </div>
        </div>
        <div className="bg-white/5 backdrop-blur-md shadow-xl border border-white/20 p-5 flex flex-col gap-5 rounded-xl w-100">
  <div>
    <h3 className="text-cyan-500 mb-1 font-bold tracking-wider underline">
      # LOG_FILE: CSRF_SHIELD_02
    </h3>
    <p className="text-gray-400 text-xs italic">
      // Date: 2026-04-20 | Status: DEPLOYED
    </p>
  </div>

  <div className="bg-cyan-950/10 border-l-2 border-cyan-600 p-3">
    <p className="text-gray-300">
      <span className="text-cyan-400 font-bold">DETECTION:</span> CSRF risk identified. 
      Browser attached sensitive cookies to cross-origin requests.
    </p>
  </div>

  <div className="space-y-2">
    <p className="text-green-400 font-bold">--- SECURITY ENFORCEMENT ---</p>
    <div className="bg-black/50 p-3 rounded border border-gray-800">
      <code className="text-blue-300 block">CORS: origin: 'academy.live';</code>
      <code className="text-blue-300 block ml-4">Credentials: true;</code>
      <code className="text-purple-300 block ml-4">Cookie: SameSite=Strict; <span className="text-gray-500">// Isolation</span></code>
    </div>
  </div>

  <div className="flex items-center gap-2 pt-2 text-green-500 animate-pulse">
    <span className="text-xl">✔</span>
    <span className="text-xs font-bold tracking-tighter uppercase">Integrity: Verified</span>
  </div>
</div>
<div className="bg-white/5 backdrop-blur-md shadow-xl border border-white/20 p-5 flex flex-col gap-5 rounded-xl w-100">
  <div>
    <h3 className="text-orange-500 mb-1 font-bold tracking-wider underline">
      # SECURITY_LOG: FTP_ANONYMOUS_EXPLOIT
    </h3>
    <p className="text-gray-400 text-xs italic">
      // Target: FTP Service | Status: SYSTEM_PATCHED
    </p>
  </div>

  <div className="bg-orange-950/10 border-l-2 border-orange-600 p-3 text-start">
    <p className="text-gray-300">
      <span className="text-orange-400 font-bold">ATTACK VECTOR:</span> 
      Unauthorized access via IP targeting. Attacker bypasses authentication by entering <code className="text-white">"anonymous"</code> as username with an empty password.
    </p>
  </div>

  <div className="space-y-2 text-start">
    <p className="text-green-400 font-bold">--- EXPLOIT SIMULATION ---</p>
    <div className="bg-black/50 p-3 rounded border border-gray-800 font-mono text-[11px]">
      <p className="text-gray-400"># ftp 192.168.1.105</p>
      <p className="text-blue-300">Connected to 192.168.1.105.</p>
      <p className="text-white">Name: <span className="text-yellow-400 font-bold italic">anonymous</span></p>
      <p className="text-white">Password: <span className="text-gray-500 italic">[ENTER]</span></p>
      <p className="text-green-400 font-bold">230 Login successful. Access Granted.</p>
    </div>
  </div>

  <div className="flex items-center gap-2 pt-2 text-green-500 animate-pulse">
    <span className="text-xl">🛡️</span>
    <span className="text-xs font-bold tracking-tighter uppercase">Server Lockdown: Completed</span>
  </div>
</div>
</div>
    <hr className='border-t border-white/20 w-[80%] mt-10' />
</motion.div>
  );
}

export default Articles;
