import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header className="py-4 ">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold">
              <span className="bg-gradient-to-r from-customPink via-blue-500 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:to-purple-200 transition-all duration-300">
                DevSam
              </span>
              <div className="mt-1">
                <span className="text-sm text-gray-300 font-light tracking-wider">
                  Frontend Specialist
                </span>
              </div>
            </h1>
          </motion.div>
          {/* Call-to-Action Button with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#contact"
              className="relative inline-flex items-center px-6 py-2 border font-extrabold overflow-hidden text-white rounded-full font-mono group bg-purple-500 hover:bg-black "
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              {/* <span className="relative font-semibold">Work With Me</span> */}
              <button>Work With Me</button>
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
export default Header;