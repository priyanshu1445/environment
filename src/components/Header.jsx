// Header.jsx
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
   FaGoogle ,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const downloadApp = () => {
    window.open("https://your-app-download-link.com", "_blank");
  };

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top Bar */}
    <div className="bg-green-600 text-white text-sm">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
    {/* Contact Info */}
    <div className="flex flex-col sm:flex-row items-center sm:gap-6">
      <a
        href="tel:+917737986988"
        className="flex items-center gap-1 hover:text-gray-200"
      >
        <FaPhoneAlt /> +91 7737986988
      </a>
      <a
        href="mailto:skilledenviro@gmail.com"
        className="flex items-center gap-1 hover:text-gray-200"
      >
        <FaEnvelope /> skilledenviro@gmail.com
      </a>
    </div>

    {/* Social Media Icons */}
    <div className="flex items-center gap-5">
      <a
        href="https://www.facebook.com/people/Skilled-Enviro-Services/100068131592409/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-200"
      >
        <FaFacebookF size={23} />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/sameer-singh-729294a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        className="hover:text-gray-200"
      >
        <FaLinkedinIn size={23} />
      </a>

      {/* Google Icon */}
      <a
        href="https://www.google.com/search?sca_esv=adca3bde667fa053&hl=en-GB&gl=in&output=search&kgmid=/g/11vjw5fkxy&q=Skilled+Enviro+Services,+Jaipur&shndl=30&shem=lsptbl1&source=sh/x/loc/act/m1/3&kgs=7cbf09793fe9e9f4&utm_source=lsptbl1,sh/x/loc/act/m1/3"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-200"
      >
        <FaGoogle size={23} />
      </a>
    </div>
  </div>
</div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-3">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-4 font-bold">
              <NavLink to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="md:h-16 h-10 w-auto object-contain cursor-pointer"
                />

                <div className="flex flex-col">
                  <h1 className="md:text-3xl text-md text-green-500">
                    <span className="md:text-4xl">S</span>KILLED{" "}
                    <span className="md:text-4xl">E</span>NVIRO{" "}
                    <span className="md:text-4xl">S</span>ERVICES
                  </h1>
                  <p className=" text-[10px] italic md:pl-7 font-medium text-teal-900">
                    Your comprehensive environmental solutions partner
                  </p>
                </div>
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-lg text-gray-700 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : "hover:text-green-600"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : "hover:text-green-600"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : "hover:text-green-600"
                }
              >
                Service
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : "hover:text-green-600"
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : "hover:text-green-600"
                }
              >
                Contact
              </NavLink>
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
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-green-600 font-bold" : "hover:text-green-600"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-green-600 font-bold" : "hover:text-green-600"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-green-600 font-bold" : "hover:text-green-600"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-green-600 font-bold" : "hover:text-green-600"
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-green-600 font-bold" : "hover:text-green-600"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
