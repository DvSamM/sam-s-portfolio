import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { FaCode } from "react-icons/fa"; // Import the FaCode icon for Technologies
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="bg-black/50 h-[65px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto flex
         px-5 justify-between text-2xl text-white/50"
        >
          <Link
            to="home" activeClass="active" smooth={true} spy={true} offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          
           <Link
            to="technologies" activeClass="active" smooth={true} spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaCode />
          </Link>
          <Link
            to="about" activeClass="active" smooth={true} spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services" activeClass="active" smooth={true} spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work" activeClass="active" smooth={true} spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact" activeClass="active" smooth={true} spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
