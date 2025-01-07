import React from "react";
import { FaInstagram, FaTiktok, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" py-6 flex justify-center items-center space-x-14">
            {/* GitHub - Neon Green */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-[#39FF14] drop-shadow-lg hover:text-[#32CD32] transition duration-300" size={40} />
            </a>

            {/* Instagram - Neon Purple */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[#9D00FF] drop-shadow-lg hover:text-[#B200FF] transition duration-300" size={40} />
            </a>

            {/* TikTok - Red */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-[#FF0000] drop-shadow-lg hover:text-[#FF4500] transition duration-300" size={40} />
            </a>

            {/* LinkedIn - Neon Dark Blue */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#0011FF] drop-shadow-lg hover:text-[#4169E1] transition duration-300" size={40} />
            </a>
        </footer>
    );
}
