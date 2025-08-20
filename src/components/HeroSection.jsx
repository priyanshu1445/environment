import React from "react";
import logo from "../assets/logo.jpeg";

import "../index.css"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      
      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full opacity-30  animate-float1"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-700 rounded-full opacity-20  animate-float2"></div>
      <div className="absolute  left-40 top-30 right-10 w-40 h-40 bg-green-700 rounded-full opacity-20  animate-float2"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-green-500 rounded-full opacity-40  animate-float3"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Skilled Enviro Services"
          className="w-full h-28 object-contain mb-6 animate-fade-in"
        />
     
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mb-10 animate-slide-in delay-200">
          Your comprehensive environmental solutions partner
        </p>
        <a
          href="#about"
          className="px-8 py-3 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition animate-fade-in delay-400"
        >
          Learn More
        </a>
      </div>

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translate(0,0); }
            25% { transform: translate(10px,-15px); }
            50% { transform: translate(-10px,10px); }
            75% { transform: translate(5px,-5px); }
            100% { transform: translate(0,0); }
          }
          @keyframes float2 {
            0% { transform: translate(0,0); }
            25% { transform: translate(-15px,10px); }
            50% { transform: translate(10px,-10px); }
            75% { transform: translate(-5px,5px); }
            100% { transform: translate(0,0); }
          }
          @keyframes float3 {
            0% { transform: translate(0,0); }
            25% { transform: translate(5px,-10px); }
            50% { transform: translate(-5px,5px); }
            75% { transform: translate(10px,-5px); }
            100% { transform: translate(0,0); }
          }

          .animate-float1 { animation: float1 6s ease-in-out infinite; }
          .animate-float2 { animation: float2 8s ease-in-out infinite; }
          .animate-float3 { animation: float3 5s ease-in-out infinite; }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in { animation: fade-in 1s forwards; }

          @keyframes slide-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in { animation: slide-in 0.6s forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
