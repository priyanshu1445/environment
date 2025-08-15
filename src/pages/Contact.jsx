import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">

      {/* Hero / Intro Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text animate-slide-in">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in">
            Have a question or want to discuss your project? Reach out to our expert team and we’ll get back to you promptly.
          </p>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 opacity-20 rounded-full animate-float1 "></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-blue-300 opacity-20 rounded-full animate-float2 "></div>
        <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-300 opacity-20 rounded-full animate-float3 "></div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Floating Background Shapes */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-green-400 opacity-20 rounded-full animate-float1 "></div>
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-400 opacity-20 rounded-full animate-float2 "></div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-purple-400 opacity-20 rounded-full animate-float3 "></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-300 hover:to-green-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
         <div className="flex flex-col justify-center space-y-8">
  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
    Contact Information
  </h2>

  {/* Address */}
  <div className="flex items-center space-x-4 hover:scale-105 transition cursor-pointer">
    <FaMapMarkerAlt className="text-green-500 text-2xl" />
    <p className="text-gray-700 text-lg">
      B-126, Model Town, Jagatpura Road, Jaipur-302017, Rajasthan, India
    </p>
  </div>

  {/* Phone */}
  <div className="flex items-center space-x-4 hover:scale-105 transition">
    <FaPhoneAlt className="text-green-500 text-2xl" />
    <a
      href="tel:+917737986988"
      className="text-gray-700 text-lg hover:text-green-600 transition"
    >
      +91 7737986988
    </a>
  </div>

  {/* Email */}
  <div className="flex items-center space-x-4 hover:scale-105 transition">
    <FaEnvelope className="text-green-500 text-2xl" />
    <a
      href="mailto:info@skillenviroservices.com"
      className="text-gray-700 text-lg hover:text-green-600 transition"
    >
      info@skillenviroservices.com
    </a>
  </div>

  {/* Social Media */}
  <div className="mt-10">
    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
    <div className="flex space-x-4">
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-white hover:bg-green-500 transition"
      >
        <FaFacebookF />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-white hover:bg-green-500 transition"
      >
        <FaTwitter />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-white hover:bg-green-500 transition"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-white hover:bg-green-500 transition"
      >
        <FaInstagram />
      </a>
    </div>
  </div>
</div>


        </div>
      </section>
    </div>
  );
};

export default Contact;
