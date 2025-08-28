import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/envirologo.png"; // Replace with your logo path

const ModernFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="Skilled Enviro Services" className="w-full mb-4" />
          <p className="text-gray-400 text-sm">
            SKILLED ENVIRO SERVICES, an ISO 9001:2015 certified firm, provides specialized services in Environmental and Engineering solutions, Consulting services in Environment, Mining, construction and Industrial sector.
          </p>
          {/* Social icons */}
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-green-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-500 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-green-500 transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-green-500 inline-block pb-1">Pages</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-green-500 transition">About</a></li>
            <li><a href="/service" className="hover:text-green-500 transition">Services</a></li>
            {/* <li><a href="/projects" className="hover:text-green-500 transition">Projects</a></li> */}
            <li><a href="/gallery" className="hover:text-green-500 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-green-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-green-500 inline-block pb-1">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>+91 7737986988</li>
            <li>info@skillenviroservices.com</li>
            <li>B-126, Model Town, Jagatpura Road, Jaipur-302017, Rajasthan, India</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-green-500 inline-block pb-1">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest updates</p>
          <form className="flex shadow-lg rounded-full overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-5 py-3 focus:outline-none text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-green-600 px-6 py-3 hover:bg-green-500 transition text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Skilled Enviro Services. All rights reserved.
      </div>
    </footer>
  );
};

export default ModernFooter;
