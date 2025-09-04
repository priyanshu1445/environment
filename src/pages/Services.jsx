import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/jkl.jpg";
import FeaturesSection from "../components/FeaturesSection";
import { additionalServices } from "../components/ServicesData"; // ✅ import

// Helper to create slugs for URLs
const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const Services = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white h-screen"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text drop-shadow-lg">
            Innovative Environmental & Engineering Solutions
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Driving sustainable progress with expertise in environmental
            management, infrastructure, and industrial solutions.
          </p>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </section>

      {/* Core Services */}
      <FeaturesSection />

      {/* Additional Services */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-medium mb-16 text-center text-gray-800 tracking-wider">
            Additional <span className="font-medium text-green-600">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {additionalServices.map((service, idx) => (
              <Link
                key={idx}
                to={`/services/${(service.urlTitle)}`}
                className="group relative block p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform scale-0 group-hover:scale-150 blur-xl"></div>

                <div className="flex flex-col items-start z-10 relative">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-2xl bg-gray-100 text-green-600 text-2xl transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-base font-light">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
