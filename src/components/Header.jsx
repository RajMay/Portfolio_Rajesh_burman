import 'boxicons/css/boxicons.min.css'
import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";



const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
       setIsMenuOpen(!isMenuOpen);
        const mobileMenu = document.getElementById('mobileMenu');
        //If it has the 'hidden' class, remove it to show the menu
        if (mobileMenu.classList.contains('hidden')) {

            mobileMenu.classList.remove('hidden');
        }
        //If it doesn't have the 'hidden' class, add it to hide the menu
        else {
            mobileMenu.classList.add('hidden');

        }


    }
    const handleScroll = (sectionId) => {
        setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    const [activeSection, setActiveSection] = useState("");

    return (



        <header className="z-50 flex justify-between  items-center py-4 px-4 lg:px-20 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 shadow-sm">
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl mt-4 font-dark  m-0">Rajesh Burman</h1>
                

            {/* Navigation links */}

          <nav
         
          className="hidden md:flex items-center gap-12 font-semibold ">
  {[
    { name: "HOME", id: "about" },
    { name: "PROJECTS", id: "projects" },
    { name: "SKILLS", id: "skills" },
    { name: "CONTACT", id: "contact" },
  ].map((item, index) => (
    <button
      key={index}
      onClick={() =>  handleScroll(item.id)}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration={`${1500 + index * 500}`}
      className='hover:text-orange-500 text-sm sm:text-base my-1 '
    >
      {item.name}
    </button>
  ))}

   <a
    href="/Rajesh_resume_public.pdf"
  download="Rajesh_resume.pdf" 
      className="
        px-8 py-3 
        ml-8
        rounded-full 
        font-semibold 
        text-white 
        bg-gradient-to-r from-orange-400 to-orange-600
        shadow-lg shadow-orange-500/30 
        hover:from-orange-500 hover:to-orange-700 
        hover:scale-105 
        cursor-pointer
        
        transition-all duration-300 ease-in-out
      "
    >
      Hire Me!
    </a>
</nav>


            {/* Hamburger menu for mobile */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i class='bx  bx-menu'  ></i>
            </button>

            {/* Social Icons */}
<div
data-aos="fade-left"
className="hidden md:flex items-center gap-6 z-50 ml-4">

  <a
    href="https://leetcode.com/u/RajeshDK/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-400 transition-colors text-2xl"
  >
    <SiLeetcode /> 
  </a>
  <a
    href="https://linkedin.com/in/rajesh-burman-574426280"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#0077b5] transition-colors text-2xl"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/RajMay"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-400 transition-colors text-2xl"
  >
    <FaGithub />
  </a>

 
  
</div>


            {/* Mobile Hidden by default navigation menu */}
           <div id="mobileMenu" className={`fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 
                    bg-black/50 backdrop-blur-md transform transition-transform duration-300
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

  <nav className="flex flex-col gap-6 items-center">
    {[
      { name: "ABOUT", id: "about" },
      { name: "PROJECTS", id: "projects" },
      { name: "SKILLS", id: "skills" },
      { name: "CONTACT", id: "contact" },
    ].map((item, index) => (
      <button
        key={index}
        onClick={() => handleScroll(item.id)}
        className="hover:text-orange-500 text-sm sm:text-base my-1"
      >
        {item.name}
      </button>
    ))}
    <a
    href="/Rajesh_resume_public.pdf"
  download="Rajesh_resume.pdf" 
      className="
        px-8 py-3 
        ml-8
        rounded-full 
        font-semibold 
        text-white 
        bg-gradient-to-r from-orange-400 to-orange-600
        shadow-lg shadow-orange-500/30 
        hover:from-orange-500 hover:to-orange-700 
        hover:scale-105 
        cursor-pointer
        
        transition-all duration-300 ease-in-out
      "
    >
      Hire Me!
    </a>
  </nav>



                <div className="flex gap-6 mt-6">
  <a href="https://linkedin.com/in/rajesh-burman-574426280" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-white text-2xl hover:text-[#0077b5]" />
  </a>
  <a href="https://github.com/RajMay" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-white text-2xl hover:text-gray-400" />
  </a>
</div>

            </div>




        </header>




    )
}

export default Header
