// FeaturesSection.js
import React from "react";
import { Link } from "react-router-dom";
import { allServices } from "../components/ServicesData"; // ✅ Import your data

// ✅ Slugify function
const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const FeaturesSection = () => {
  // ✅ Filter only Main/Core Services (first 11)
  const mainServices = allServices.slice(0, 11);

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-white to-70% z-0"></div>

      {/* Floating blurred shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 opacity-20 rounded-full animate-float1"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-emerald-500 opacity-20 rounded-full animate-float2"></div>
      <div className="absolute bottom-20 left-50 w-36 h-36 bg-blue-400 opacity-20 rounded-full animate-float3"></div>
      <div className="absolute bottom-1/2 right-1/4 w-48 h-48 bg-purple-500 opacity-20 rounded-full animate-float3"></div>
      <div className="absolute bottom-50 left-100 w-48 h-48 bg-purple-900 opacity-20 rounded-full animate-float3"></div>
      <div className="absolute bottom-64 right-1/5 w-48 h-48 bg-yellow-500 opacity-20 rounded-full animate-float3"></div>
      <div className="absolute bottom-100 right-1/2 w-48 h-48 bg-pink-500 opacity-20 rounded-full animate-float3"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl font-medium mb-6 tracking-tight text-gray-800">
          Our{" "}
          <span className="text-green-600 font-medium">
            Services
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Delivering premium, sustainable, and innovative environmental and engineering
          solutions across multiple industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {mainServices.map((service, index) => (
            <Link
              to={`/services/${(service.urlTitle)}`} // ✅ slug instead of ID
              key={index}
              className="group relative block p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Top-right subtle glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform scale-0 group-hover:scale-150 blur-xl"></div>

              <div className="flex flex-col items-start z-10 relative">
                <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-2xl bg-gray-100 text-green-600 text-3xl transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
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
  );
};

export default FeaturesSection;
