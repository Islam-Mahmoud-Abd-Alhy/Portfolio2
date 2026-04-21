import React from "react";
import { motion } from "framer-motion";
import project1 from "../Assets/project1.webp";
import project2 from "../Assets/project2.webp";
import project3 from "../Assets/project3.webp";
import project4 from "../Assets/project4.webp";
import project5 from "../Assets/project5.webp";
import project6 from "../Assets/project6.webp";
function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center" id="Projects">
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        id="Projects"
        className="flex flex-col justify-start items-center gap-10 min-h-screen text-white"
      >
        <h2 className="bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent font-bold text-3xl font-mono">
          ./Root_Access/Projects.sh
        </h2>
        <section className="flex flex-row justify-center items-center gap-10 flex-wrap pr-1 pl-1 overflow-hidden pt-10">
          {/* Project 1 */}
          <div className="bg-white/5 backdrop-blur-md shadow-xl p-10 rounded-2xl flex flex-col justify-center gap-5 items-center hover:-translate-y-10 transition-all hover:shadow-green-500/20 group w-96 h-125 mb-2">
            <img
              src={project1}
              alt="Project 1"
              className="w-80 rounded-2xl group-hover:scale-105"
            />
            <h3 className="font-bold font-mono">My First Portfolio</h3>
            <p className="w-60 text-center">
              This is my first portfolio project in Front End Devlopment
            </p>
            <div className="flex flex-row gap-5">
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Html 5
              </div>
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Css 3
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Java Script
              </div>
            </div>
            <a
              href="https://islam-mahmoud-abd-alhy.github.io/Portfolio/"
              target="_blank"
            >
              <button className="bg-green-800/70 p-2 w-50 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all cursor-pointer">
                View Project
              </button>
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-white/5 backdrop-blur-md shadow-xl p-7 rounded-2xl flex flex-col justify-center gap-5 items-center hover:-translate-y-10 transition-all hover:shadow-green-500/20 group w-96 h-125 mb-4">
            <img
              src={project2}
              alt="Project 2"
              className="w-80 rounded-2xl group-hover:scale-105"
            />
            <h3 className="font-bold font-mono">Cafe</h3>
            <p className="w-60 text-center">
              This is my second project in Front End Devlopment. It Is About A
              Cafe with Modern Design.
            </p>
            <div className="flex flex-row gap-5">
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Html 5
              </div>
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Css 3
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Java Script
              </div>
            </div>
            <a
              href="https://islam-mahmoud-abd-alhy.github.io/Ig-Cafe/"
              target="_blank"
            >
              <button className="bg-green-800/70 p-2 w-50 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all cursor-pointer">
                View Project
              </button>
            </a>
          </div>
          {/* Project 3 */}
          <div className="bg-white/5 backdrop-blur-md shadow-xl p-7 rounded-2xl flex flex-col justify-center gap-5 items-center hover:-translate-y-10 transition-all hover:shadow-green-500/20 group w-96 mb-4">
            <img
              src={project3}
              alt="Project 3"
              className="w-80 rounded-2xl group-hover:scale-105"
            />
            <h3 className="font-bold font-mono">E-commerce (Shop.co)</h3>
            <p className="w-100 text-center">
              This is my third project in Front End Devlopment. It Is About a
              E-commerce With Modern Design.
            </p>
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Html 5
              </div>
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Css 3
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Java Script
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                bootstrap
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                FontAwesome
              </div>
            </div>
            <a
              href="https://islam-mahmoud-abd-alhy.github.io/Shop.co/Main.html"
              target="_blank"
            >
              <button className="bg-green-800/70 p-2 w-50 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all cursor-pointer">
                View Project
              </button>
            </a>
          </div>
          {/* Project 4 */}
          <div className="bg-white/5 backdrop-blur-md shadow-xl p-7 rounded-2xl flex flex-col justify-center gap-5 items-center hover:-translate-y-10 transition-all hover:shadow-green-500/20 group w-96 mb-4">
            <img
              src={project4}
              alt="Project 4"
              className="w-80 rounded-2xl group-hover:scale-105"
            />
            <h3 className="font-bold font-mono">Weekend</h3>
            <p className="w-90 text-center">
              This is my fourth project in Front End Devlopment. It Is About a
              E-commerce With Modern Design.
            </p>
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Html 5
              </div>
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Css 3
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Java Script
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                bootstrap
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                FontAwesome
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Animate.css
              </div>
            </div>
            <a
              href="https://islam-mahmoud-abd-alhy.github.io/Weekend/Main.html"
              target="_blank"
            >
              <button className="bg-green-800/70 p-2 w-50 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all cursor-pointer">
                View Project
              </button>
            </a>
          </div>
          {/* Project 5 */}
          <div className="bg-white/5 backdrop-blur-md shadow-xl p-7 rounded-2xl flex flex-col justify-center gap-5 items-center hover:-translate-y-10 transition-all hover:shadow-green-500/20 group w-96 pl-3 pr-3 h-140 mb-4">
            <img
              src={project5}
              alt="Project 5"
              className="w-80 rounded-2xl group-hover:scale-105"
            />
            <h3 className="font-bold font-mono"> My Second Portfolio</h3>
            <p className="w-80 text-center">
              This is my fifth project in Front End Devlopment. It Is an
              Portolio With Modern Design. I used React and Tailwind CSS in this
              project to make it more modern and responsive.
            </p>
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                React
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Taillwend
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Java Script
              </div>
            </div>
            <a
              href="https://islam-mahmoud-abd-alhy.github.io/Weekend/Main.html"
              target="_blank"
            >
              <button className="bg-green-800/70 p-2 w-50 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all cursor-pointer">
                View Project
              </button>
            </a>
          </div>
          {/* Project 6 */}
          <div className="bg-white/5 backdrop-blur-md shadow-xl p-7 rounded-2xl flex flex-col justify-center gap-5 items-center hover:-translate-y-10 transition-all hover:shadow-green-500/20 group w-96 pl-3 pr-3 h-140 mb-4">
            <img
              src={project6}
              alt="Project 6"
              className="w-80 rounded-2xl group-hover:scale-105"
            />
            <h3 className="font-bold font-mono">E-commerce (Demo Store)</h3>
            <p className="w-80 text-center">
              This is my sixth project in Front End Devlopment. It Is a
              E-commerce With Modern Design .
            </p>
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Html 5
              </div>
              <div className="bg-green-800/70 p-2 w-20 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Css 3
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Java Script
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                Gsap
              </div>
              <div className="bg-green-800/70 p-2 w-30 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all">
                EmailJs
              </div>
            </div>
            <a
              href="https://islam-mahmoud-abd-alhy.github.io/Weekend/Main.html"
              target="_blank"
            >
              <button className="bg-green-800/70 p-2 w-50 text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all cursor-pointer">
                View Project
              </button>
            </a>
          </div>

          {/* Project 7 */}
          <div className="bg-white/5 backdrop-blur-md shadow-xl p-7 rounded-2xl flex flex-col justify-center gap-5 items-center hover:-translate-y-10 transition-all hover:shadow-green-500/20 group w-96 pl-3 pr-3 h-auto">
            <div className="w-80 h-48 rounded-2xl bg-gray-800/50 flex items-center justify-center border border-white/5 relative overflow-hidden group-hover:border-green-500/10 transition-colors">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-50"></div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 text-green-800/60 group-hover:text-green-500/70 transition-colors relative z-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="absolute bottom-4 text-xs font-mono font-bold text-gray-500 tracking-widest uppercase z-10">
                Preview Locked
              </span>
            </div>

            <h3 className="font-bold font-mono">DashBoard</h3>
            <p className="w-80 text-center">
              This Is a project Full Stack . It Is a Dashboard For Lerning With
              a High Security Protcols
            </p>

            <div className="flex items-center gap-2 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <p className="text-red-500 text-[10px] uppercase font-black tracking-widest">
                Under Development
              </p>
            </div>
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
              {[
                "React",
                "Tailwind",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-green-800/70 p-2 w-auto text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>

            <button
              disabled
              className="bg-green-800/30 p-2 w-50 text-center rounded-2xl font-mono font-bold text-gray-500 transition-all cursor-not-allowed border border-white/5"
            >
              View Project
            </button>
          </div>
          {/* Project 8 */}
          <div className="bg-white/5 backdrop-blur-md shadow-xl p-7 rounded-2xl flex flex-col justify-center gap-5 items-center hover:-translate-y-10 transition-all hover:shadow-green-500/20 group mt-5 w-96 pl-3 pr-3 h-auto">
            <div className="w-80 h-48 rounded-2xl bg-gray-800/50 flex items-center justify-center border border-white/5 relative overflow-hidden group-hover:border-green-500/10 transition-colors">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-50"></div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16 text-green-800/60 group-hover:text-green-500/70 transition-colors relative z-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="absolute bottom-4 text-xs font-mono font-bold text-gray-500 tracking-widest uppercase z-10">
                Preview Locked
              </span>
            </div>

            <h3 className="font-bold font-mono">E-commerce (Dev Store)</h3>
            <p className="w-80 text-center">
              This Is a project Full Stack . It Is a E-commerce For Lerning With a High Security Protocols.
            </p>

            <div className="flex items-center gap-2 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <p className="text-red-500 text-[10px] uppercase font-black tracking-widest">
                Under Development
              </p>
            </div>
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
              {[
                "Html 5",
                "Css 3",
                "JavaScript",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-green-800/70 p-2 w-auto text-center rounded-2xl font-mono font-bold group-hover:bg-green-500/70 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>

            <button
              disabled
              className="bg-green-800/30 p-2 w-50 text-center rounded-2xl font-mono font-bold text-gray-500 transition-all cursor-not-allowed border border-white/5"
            >
              View Project
            </button>
          </div>
    <hr className='border-t border-white/20 w-[80%] mt-10' />
        </section>
      </motion.main>
    </div>
  );
}

export default Projects;
