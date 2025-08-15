import React from "react";
import {
  FaMountain,
  FaWater,
  FaIndustry,
  FaFlask,
  FaCogs,
  FaWarehouse,
  FaRoad,
  FaBuilding
} from "react-icons/fa";
import { FaFlaskVial } from "react-icons/fa6";

const services = [
  {
    icon: <FaMountain className="text-3xl text-white" />,
    title: "Mining Projects",
    description: "Comprehensive environmental and engineering solutions for mining operations."
  },
  {
    icon: <FaWater className="text-3xl text-white" />,
    title: "Irrigation Projects",
    description: "Sustainable water management and irrigation system planning."
  },
  {
    icon: <FaFlask className="text-3xl text-white" />,
    title: "Mineral Beneficiation",
    description: "Optimized processes for mineral separation and value enhancement."
  },
  {
    icon: <FaIndustry className="text-3xl text-white" />,
    title: "Metallurgical Industries",
    description: "Tailored environmental solutions for metallurgical manufacturing."
  },
  {
    icon: <FaCogs className="text-3xl text-white" />,
    title: "Cement Plants",
    description: "Eco-friendly process optimization for cement production."
  },
  {
    icon: <FaWarehouse className="text-3xl text-white" />,
    title: "Asbestos Plants",
    description: "Safe and compliant asbestos plant environmental services."
  },
  {
    icon: <FaFlaskVial className="text-3xl text-white" />,
    title: "Synthetic Organic Industries",
    description: "Sustainable solutions for chemical and synthetic industries."
  },
  {
    icon: <FaRoad className="text-3xl text-white" />,
    title: "Highway Projects",
    description: "Environmentally conscious planning for highway developments."
  },
  {
    icon: <FaBuilding className="text-3xl text-white" />,
    title: "Construction Projects",
    description: "Comprehensive environmental compliance for construction sites."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Delivering premium, sustainable, and innovative environmental and engineering
          solutions across multiple industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-100 shadow-lg rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-green-200"
            >
              {/* Icon circle */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
