import React from "react";
import { FaHtml5,  FaJs, FaReact, FaNodeJs, FaGithub,  } from "react-icons/fa"; 
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; 
import { SiRedux } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <section className="py-16" id="technologies">
      <div className="container mx-auto text-center">
        <motion.h2
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
         className="text-3xl font-bold text-white mb-8">Technologies I Use</motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* HTML */}
          <motion.div  variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
           className="bg-purple-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaHtml5 />
            </div>
            <p className="mt-4 text-white font-semibold">HTML</p>
          </motion.div>

          {/* CSS */}
          <motion.div   variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="bg-purple-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <RiTailwindCssLine />
            </div>
            <p className="mt-4 text-white font-semibold">Tailwind CSS</p>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          className="bg-purple-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaJs />
            </div>
            <p className="mt-4 text-white font-semibold">JavaScript</p>
          </motion.div>

          {/* React */}
          <motion.div 
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="bg-purple-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaReact />
            </div>
            <p className="mt-4 text-white font-semibold">React</p>
          </motion.div>

          {/* Node.js */}
          <motion.div   variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="bg-purple-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaNodeJs />
            </div>
            <p className="mt-4 text-white font-semibold">Node.js</p>
          </motion.div>

          {/* GitHub */}
          <motion.div  variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
           className="bg-purple-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <FaGithub />
            </div>
            <p className="mt-4 text-white font-semibold">GitHub</p>
          </motion.div>
          
          <motion.div  variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
           className="bg-purple-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <SiRedux />
            </div>
            <p className="mt-4 text-white font-semibold">Redux</p>
          </motion.div>
          <motion.div  variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
           className="bg-purple-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
            <div className="text-white text-4xl">
              <DiMongodb />
            </div>
            <p className="mt-4 text-white font-semibold">MongoDB</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
