import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaGoogle, FaTwitter } from "react-icons/fa";
import logo from "../assets/envirologo.png"; // Replace with your logo path

const ModernFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="Skilled Enviro Services" className="w-full mb-4" />
          <p className="text-gray-400 text-sm">
            SKILLED ENVIRO SERVICES, an ISO 9001:2015 certified firm, provides specialized services in Environmental and Engineering solutions, Consulting services in Environment, Mining, construction and Industrial sector.
          </p>
          {/* Social icons */}
          <div className="flex mt-4 space-x-4">
            <a href="https://www.facebook.com/people/Skilled-Enviro-Services/100068131592409/" className="hover:text-green-500 transition"><FaFacebookF /></a>
          
            <a href="https://www.linkedin.com/in/sameer-singh-729294a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " className="hover:text-green-500 transition"><FaLinkedinIn /></a>
            {/* Google Icon */}
                <a
                  href="https://www.google.com/search?sca_esv=adca3bde667fa053&hl=en-GB&gl=in&output=search&kgmid=/g/11vjw5fkxy&q=Skilled+Enviro+Services,+Jaipur&shndl=30&shem=lsptbl1&source=sh/x/loc/act/m1/3&kgs=7cbf09793fe9e9f4&utm_source=lsptbl1,sh/x/loc/act/m1/3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  <FaGoogle  />
                </a>
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
            <li>
  <a href="tel:+917737986988" className="hover:text-blue-500">
    +91 7737986988
  </a>
</li>
<li>
  <a href="mailto:skilledenviro@gmail.com " className="hover:text-blue-500">
     skilledenviro@gmail.com 
  </a>
</li>

            <li>- C15, Laxmi Mansion, Prem Villa, Patrakar Colony, Mansarovar, Jaipur Rajasthan 302020</li>
          </ul>
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
