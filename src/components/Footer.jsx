import React from "react";
import { FaInstagram, FaTiktok, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" py-6 flex justify-center items-center space-x-14 ">

            <a href="https://github.com/Ta3mari1" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-[#39FF14] drop-shadow-lg hover:text-[#32CD32] transition duration-300" size={40} />
            </a>


            <a href="https://www.instagram.com/ahmad.ta3mari/#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[#9D00FF] drop-shadow-lg hover:text-[#B200FF] transition duration-300" size={40} />
            </a>

            <a href="https://www.tiktok.com/@ta3mari2001" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-[#FF0000] drop-shadow-lg hover:text-[#FF4500] transition duration-300" size={40} />
            </a>


            <a href="https://www.linkedin.com/in/ahmad-alteneh/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#0011FF] drop-shadow-lg hover:text-[#4169E1] transition duration-300" size={40} />
            </a>
        </footer>
    );
}
