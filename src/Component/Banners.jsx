import React, { useRef } from "react";
import image from "../assets/samava.png";
import { FaGithub, FaLinkedin, FaMailBulk, FaTiktok, FaTwitter, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banners = ({ contactRef }) => {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <section className=" py-10 min-h-[85vh] lg:min-h-[78vh] flex items-center bg-white-900" id="home">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center overflow-hidden">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-[20px] lg:text-[40px] font-bold leading-tight text-gray-100 whitespace-nowrap"
          >
            Hello, I'm <span className="text-purple-500">OYEWOLE&nbsp;SAMUEL</span>
          </motion.h1>

          <motion.div
  variants={fadeIn("up", 0.4)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.7 }}
  className="mb-6 text-[20px] lg:text-[40px] font-medium leading-tight text-gray-200"
>
  <span className="mr-3">I specialize in</span>
  <TypeAnimation
    sequence={[
      "MERN Stack Development",
      2000,
     "Frontend Development",
      2000,
      "Building Dynamic UIs",
      2000,
      "React & JavaScript",
      2000,
    ]}
    speed={50}
    className="text-purple-500"
    wrapper="span"
    repeat={Infinity}
  />
</motion.div>


          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg lg:mx-0 text-gray-300"
          >
           I’ve been crafting websites and digital experiences using the MERN stack and frontend technologies for the past 2 years. My expertise lies in creating intuitive, responsive interfaces that engage users and drive results.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-col sm:flex-row gap-x-6 gap-y-4 items-center mb-10 w-full justify-center"
          >
            <button
              onClick={scrollToContact}
              className="bg-purple-700 text-white px-3 py-2 font-extrabold border rounded-sm shadow-lg hover:bg-black transition duration-300 text-white sm:w-auto"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex gap-x-6 text-[24px] text-gray-300"
          >
            <a  href="https://wa.me/08160885374" target="_blank" className="hover:text-white transition duration-300">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/DvSamM/" target="_blank" className="hover:text-white transition duration-300">
              <FaGithub />
            </a>
            <a  href="https://x.com/Sammie21__"  className="hover:text-white transition duration-300">
              <FaTwitter />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex-1 max-w-[300px] lg:max-w-[350px] mx-auto mb-8 lg:mb-0"
        >
          <img
            src={image}
            alt="Avatar"
            className="rounded-full shadow-lg border-2 border-blue-500"
          />
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Banners;
