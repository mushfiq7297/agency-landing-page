import { BiCalendarCheck } from "react-icons/bi";
import Button from "../shared/Button";
import { useState } from "react";
import Logo from "../assets/LOGO.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 w-full mx-auto max-w-6xl ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10"
          />
          <a href="/" className="text-2xl font-bold text-gray-800">
            <h1 className="text-navyBlue">AQUAS</h1>
          </a>
        </div>

        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-navyBlue font-semibold hover:text-white">
            Home
          </a>
          <a
            href="#about"
            className="text-navyBlue font-semibold hover:text-white text-center"
          >
            About us
          </a>
          <a
            href="#services"
            className="text-navyBlue font-semibold hover:text-white text-center"
          >
            Website
          </a>
          <a
            href="#contact"
            className="text-navyBlue font-semibold hover:text-white text-center"
          >
            Marketing
          </a>
          <a
            href="#contact"
            className="text-navyBlue font-semibold hover:text-white text-center"
          >
            Branding
          </a>
          <a
            href="#contact"
            className="text-navyBlue font-semibold hover:text-white text-center"
          >
            Blogs
          </a>
        </div>

        {/* Right: Button */}
        <div className="hidden md:block">
          <Button text="Book Now" Icon={BiCalendarCheck} />
        </div>

       
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            <a
              href="#home"
              className="text-navyBlue font-semibold hover:text-white text-center"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-navyBlue font-semibold hover:text-white text-center"
            >
              About us
            </a>
            <a
              href="#services"
              className="text-navyBlue font-semibold hover:text-white text-center"
            >
              Website
            </a>
            <a
              href="#contact"
              className="text-navyBlue font-semibold hover:text-white text-center"
            >
              Marketing
            </a>
            <a
              href="#contact"
              className="text-navyBlue font-semibold hover:text-white text-center"
            >
              Branding
            </a>
            <a
              href="#contact"
              className="text-navyBlue font-semibold hover:text-white text-center"
            >
              Blogs
            </a>
            <div className="mt-4 text-center md:text-center lg:text-right ">
              <Button text="Book Now" Icon={BiCalendarCheck} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
