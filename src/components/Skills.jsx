import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiVercel,
  SiKalilinux, SiWireshark, SiBurpsuite, SiPython 
} from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

function Skills() {
  const devSkills = [
    { icon: <SiHtml5 />, name: "HTML5", percentage: "90%", color: "text-orange-600" },
    { icon: <SiJavascript />, name: "JavaScript", percentage: "85%", color: "text-yellow-500" },
    { icon: <SiReact />, name: "React", percentage: "80%", color: "text-blue-400" },
    { icon: <SiTailwindcss />, name: "Tailwind", percentage: "90%", color: "text-cyan-500" },
    { icon: <SiBootstrap />, name: "Bootstrap", percentage: "85%", color: "text-purple-600" },
    { icon: <SiNodedotjs />, name: "Node.js", percentage: "75%", color: "text-green-600" },
    { icon: <SiExpress />, name: "Express", percentage: "75%", color: "text-gray-400" },
    { icon: <SiMongodb />, name: "Mongoose", percentage: "70%", color: "text-green-500" },
  ];

  const toolSkills = [
    { icon: <SiGit />, name: "Git", percentage: "75%", color: "text-orange-500" },
    { icon: <SiGithub />, name: "GitHub", percentage: "80%", color: "text-white" },
    { icon: <SiVercel />, name: "Vercel", percentage: "60%", color: "text-white" },
  ];

  const securitySkills = [
    { icon: <SiKalilinux />, name: "Kali Linux", percentage: "75%", color: "text-blue-500" },
    { icon: <SiWireshark />, name: "Wireshark", percentage: "70%", color: "text-blue-700" },
    { icon: <SiPython />, name: "Python Basics", percentage: "45%", color: "text-yellow-400" },
    { icon: <MdSecurity />, name: "Pen-Testing", percentage: "65%", color: "text-red-600" },
  ];

  const SkillCard = ({ skill, barColor = "bg-green-500" }) => (
    <div className='flex flex-col justify-center items-center gap-4 group w-28' id='Skills'>
      <div className={`${skill.color} cursor-pointer hover:scale-125 transition-all duration-300 text-[40px] drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]`}>
        {skill.icon}
      </div>
      <div className='flex flex-col items-center gap-2 w-full'>
        <div className='bg-gray-800 relative w-full h-1 rounded-full overflow-hidden'>
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: skill.percentage }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className={`absolute top-0 left-0 h-full ${barColor} shadow-[0_0_8px_currentcolor]`}
          ></motion.span>
        </div>
        <p className='text-gray-500 font-mono text-[9px] group-hover:text-white transition-colors'>
          {skill.percentage}
        </p>
      </div>
    </div>
  );

  return (
    <section id='Skills' className='min-h-screen py-20 px-5 flex flex-col items-center'>
      <motion.div 
        className='max-w-6xl mx-auto flex flex-col items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className='bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent font-bold text-3xl font-mono mb-16'>
          ./Root_Access/Skills.sh
        </h2>

        <div className='w-full mb-16'>
          <h3 className='text-green-500 font-mono text-lg mb-8'>&gt; _Fullstack_Skills</h3>
          <div className='flex flex-wrap justify-center gap-10'>
            {devSkills.map((s, i) => <SkillCard key={i} skill={s} />)}
          </div>
        </div>

        <div className='w-full mb-16'>
          <h3 className='text-blue-400 font-mono text-lg mb-8'>&gt; _Deployment_&_Version_Control</h3>
          <div className='flex flex-wrap justify-center gap-10'>
            {toolSkills.map((s, i) => <SkillCard key={i} skill={s} barColor="bg-blue-500" />)}
          </div>
        </div>

        <div className='w-full'>
          <h3 className='text-red-500 font-mono text-lg mb-8'>&gt; _Cyber_Security</h3>
          <div className='flex flex-wrap justify-center gap-10'>
            {securitySkills.map((s, i) => <SkillCard key={i} skill={s} barColor="bg-red-600" />)}
          </div>
        </div>
      </motion.div>
      <hr className='border-t border-white/20 w-[80%] mt-20' />
    </section>
  );
}

export default Skills;