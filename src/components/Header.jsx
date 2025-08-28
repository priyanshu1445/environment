// Header.jsx
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const downloadApp = () => {
    window.open("https://your-app-download-link.com", "_blank");
  };

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top Bar */}
      <div className="bg-green-600 text-white text-sm"> {/* ✅ Changed to green */}
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:gap-6">
            <a href="tel:+91 7737986988" className="flex items-center gap-1 hover:text-gray-200">
              <FaPhoneAlt /> +91 7737986988
            </a>
            <a href="mailto:info@skillenviroservices.com" className="flex items-center gap-1 hover:text-gray-200">
              <FaEnvelope /> info@skillenviroservices.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/fastscanqr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaFacebookF size={23} />
            </a>
            <a
              href="https://www.instagram.com/fastscanqr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaInstagram size={23} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn size={23} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-3">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center  ">
            {/* Logo */}
            <div className="flex items-center gap-4 font-bold">
  <Link to="/" className="flex items-center">
    <img
      src={logo}
      alt="Logo"
      className="md:h-16 h-10 w-auto object-contain cursor-pointer"
    />

    <div className="flex flex-col">
      <h1 className="md:text-3xl text-md text-green-500">
       <span className="md:text-4xl">S</span>KILLED <span className="md:text-4xl">E</span>NVIRO <span className="md:text-4xl">S</span>ERVICES
      </h1>
      <p className=" text-[10px] italic md:pl-7 font-medium text-teal-900">
        Your comprehensive environmental solutions partner
      </p>
    </div>
  </Link>
</div>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-lg text-gray-700 font-medium">
              <Link to="/" className="hover:text-green-600">Home</Link>
              <Link to="/about" className="hover:text-green-600">About</Link>
              <Link to="/services" className="hover:text-green-600">Service</Link>
              
              <Link to="/gallery" className="hover:text-green-600">Gallery</Link>
              <Link to="/contact" className="hover:text-green-600">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-65 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-4 py-4 text-gray-700 font-medium">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-green-600">
                  Services
                </Link>
              </li>

              
              <li>
                <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-green-600">
             Gallery
                </Link>
              </li>


               <li>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-600">
                  Contact
                </Link>
              </li>
          
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
