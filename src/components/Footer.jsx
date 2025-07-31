import React from "react";
import {  FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-orange-500">Rajesh Burman</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "Home", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
           
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-orange-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
      

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
          
            { icon: <FaTwitter />, link: "https://x.com/kuchupucho" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rajesh-burman-574426280" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/westttcoasttt/" },
            { icon: <FaGithub />, link: "https://github.com/RajMay" }
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-orange-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Rajesh Burman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;