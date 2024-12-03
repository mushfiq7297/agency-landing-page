import React, { useState } from "react";
import { BiCalendarCheck } from "react-icons/bi";
import Button from "../shared/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white  p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/3BJ3jcB/LOGO.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <a href="/" className="text-2xl font-bold text-gray-800">
            Octopi
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-black">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-black">
            About
          </a>
          <a href="#services" className="text-gray-600 hover:text-black">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </a>
        </div>

        {/* Right: Button */}
        <div className="hidden md:block">
          <Button text="Book Now" Icon={BiCalendarCheck} />
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            <a
              href="#home"
              className="text-gray-600 hover:text-black text-center"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-black text-center"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-black text-center"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-black text-center"
            >
              Contact
            </a>
            <div className="mt-4">
              <Button text="Book Now" Icon={BiCalendarCheck} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;