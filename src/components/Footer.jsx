import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/LOGO.png"

const Footer = () => {
  // Animation variants
  const fadeInFromBelow = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <footer className="text-white py-10 max-w-6xl mx-auto">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation on partial visibility
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeInFromLeft}
        >
          <div className="flex flex-col space-x-2">
            <img
              src={Logo}
              alt="Octopi Digital"
              className="w-10 h-10"
            />
            <h2 className="font-bold text-lg">AQUAS Digital</h2>
          </div>
          <p className="text-sm">
            AQUAS Digital Ltd is a dynamic force in the digital landscape,
            pioneering innovative solutions through a blend of creativity and
            cutting-edge technology.
          </p>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          variants={fadeInFromBelow}
        >
          <h3 className="text-lg font-bold">CONTACT US</h3>
          <div className="space-y-2 text-sm">
            <p>
               Redmonton, canada
            </p>
            <p>
               Monday - Friday | 9AM
              - 5PM
            </p>
            <p>
               +1 832-925-4256
            </p>
          </div>
        </motion.div>

        {/* Our Services */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          variants={fadeInFromLeft}
        >
          <h3 className="text-lg font-bold">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO</li>
            <li>Social Media Management</li>
            <li>Logo Design</li>
          </ul>
        </motion.div>

        {/* Automation */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          variants={fadeInFromBelow}
        >
          <h3 className="text-lg font-bold">AUTOMATION</h3>
          <ul className="space-y-2 text-sm">
            <li>AI Booking Bot</li>
            <li>Email Funnel</li>
            <li>SMS Funnel</li>
            <li>Booking Funnel</li>
            <li>Marketing Dashboard</li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          variants={fadeInFromLeft}
        >
          <h3 className="text-lg font-bold">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              Career
              <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded">
                We are hiring
              </span>
            </li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
        variants={fadeInFromBelow}
      >
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>Copyright 2024 All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-behance"></i>
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
