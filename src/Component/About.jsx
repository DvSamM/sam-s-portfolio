import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; 
import SAM from "../assets/Sam.jpg"
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/SAMUELFERANMIRESUME.pdf'; // This should be the path to your CV file in the public folder
    link.download = 'DevSam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className=" py-16 text-white" id="about">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
        >
          <img
            src={SAM} 
            alt="About Me"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-1/2 lg:pl-10"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 mb-4">
          I'm a passionate MERN stack developer with a love for creating dynamic and user-friendly web applications. While I enjoy working on all aspects of development, I have a particular passion for frontend development. Crafting responsive and visually appealing user interfaces is what excites me the most!
          </p>
          <p className="text-gray-300 mb-4">
          In addition to coding, I love sharing knowledge and collaborating with fellow developers. When I'm not coding, you can find me exploring new technologies, enjoying a good book, or working on personal projects to enhance my skills.
          </p>
          <button
              onClick={handleDownloadCV}
                            className="relative inline-flex items-center px-6 py-2 border font-extrabold overflow-hidden text-white rounded-full font-mono group bg-purple-500 hover:bg-black text-white "
            >
              <FaDownload />
              Download Resume
            </button>
          {/* <a
            href=""
            className="inline-block  bg-blue-600 text-white px-6 py-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FaDownload/>
            Download Resume
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
