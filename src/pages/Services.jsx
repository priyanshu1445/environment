import React from "react";
import { 
  FaMountain, 
  FaWater, 
  FaIndustry, 
  FaRoad, 
  FaCogs, 
  FaBuilding, 
  FaFlask, 
  FaHardHat 
} from "react-icons/fa"; // Replaced FaMining with FaMountain
import { Link } from "react-router-dom";  // <-- Added

const mainServices = [
  { title: "MINING PROJECTS", icon: <FaMountain size={28} /> },
  { title: "IRRIGATION PROJECTS", icon: <FaWater size={28} /> },
  { title: "MINERAL BENEFICIATION", icon: <FaIndustry size={28} /> },
  { title: "METALLURGICAL INDUSTRIES", icon: <FaCogs size={28} /> },
  { title: "CEMENT PLANTS", icon: <FaBuilding size={28} /> },
  { title: "SYNTHETIC ORGANIC INDUSTRIES", icon: <FaFlask size={28} /> },
  { title: "HIGHWAY PROJECTS", icon: <FaRoad size={28} /> },
  { title: "CONSTRUCTION PROJECTS", icon: <FaHardHat size={28} /> },
  
];

const otherServices = [
  "SOCIAL IMPACT ASSESSMENT STUDY",
  "ENVIRONMENTAL MONITORING",
  "FOREST CLEARANCE",
  "CONSENT TO ESTABLISH/OPERATE",
  "MINING PLAN",
  "DGPS SURVEY",
  "REPLENISHMENT STUDY",
  "LEGAL COMPLIANCE",
];

// Helper to create slugs for URLs
const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

const Services = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden py-32">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text animate-slide-in">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in">
            Skilled Enviro Services offers specialized environmental and engineering solutions tailored for diverse industries. Explore our expertise below.
          </p>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 opacity-20 rounded-full animate-float1 "></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-blue-300 opacity-20 rounded-full animate-float2 "></div>
        <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-300 opacity-20 rounded-full animate-float3 "></div>
      </section>

      {/* Core Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text animate-slide-in">
          Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {mainServices.map((service, idx) => (
            <Link
              to={`/services/${slugify(service.title)}`}  // <-- changed from div to Link with URL
              key={idx}
              className="p-6 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition bg-white flex flex-col items-center justify-center text-center relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition duration-500 blur-3xl rounded-3xl"></div>
              <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-gradient-to-tr from-green-400 to-green-600 text-white text-2xl shadow-lg z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold z-10">{service.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className=" mx-auto px-6 py-20 bg-green-100 rounded-3xl relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text animate-slide-in">
          Why Choose Us
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mb-10">
          We combine innovation, sustainability, and expertise to deliver top-tier solutions for all environmental and industrial projects. Our dedicated team ensures high-quality standards, compliance, and efficiency in every project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 bg-white text-center">
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600 text-sm">Highly skilled professionals with years of experience in diverse industries.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 bg-white text-center">
            <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
            <p className="text-gray-600 text-sm">Utilizing modern tools and technology to ensure precision and efficiency.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 bg-white text-center">
            <h3 className="text-xl font-semibold mb-2">Sustainable Solutions</h3>
            <p className="text-gray-600 text-sm">Eco-friendly approaches that meet regulatory standards and protect the environment.</p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
   <section className="max-w-7xl mx-auto px-6 py-20 rounded-t-3xl relative overflow-hidden">
  <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
    Additional Services
  </h2>

  <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 opacity-20 rounded-full animate-float1 "></div>
  <div className="absolute top-20 right-10 w-48 h-48 bg-blue-600 opacity-20 rounded-full animate-float2 "></div>
  <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-500 opacity-20 rounded-full animate-float3 "></div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
    {otherServices.map((service, idx) => (
      <Link
        key={idx}
        to={`/services/${slugify(service)}`} // <-- Wrap in Link & use slugify
        className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-white text-center relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition duration-500 blur-3xl rounded-3xl"></div>
        <h3 className="font-semibold text-lg relative z-10">{service}</h3>
        <p className="text-gray-600 text-sm mt-2 relative z-10">
          {service === "SOCIAL IMPACT ASSESSMENT STUDY" && "Comprehensive evaluation of social impact for projects."}
          {service === "ENVIRONMENTAL MONITORING" && "Regular monitoring to ensure sustainable environmental practices."}
          {service === "FOREST CLEARANCE" && "Guidance and approval assistance for forest clearance requirements."}
          {service === "CONSENT TO ESTABLISH/OPERATE" && "Support in obtaining regulatory approvals for operations."}
          {service === "MINING PLAN" && "Preparation of detailed mining plans adhering to legal standards."}
          {service === "DGPS SURVEY" && "High-precision surveys using DGPS technology."}
          {service === "REPLENISHMENT STUDY" && "Analysis and planning for resource replenishment."}
          {service === "LEGAL COMPLIANCE" && "Ensuring all activities meet legal and regulatory requirements."}
        </p>
      </Link>
    ))}
  </div>
</section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-600 to-green-800">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
          Interested in Our Services?
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto animate-fade-in">
          Get in touch with our expert team today to discuss your project requirements and how we can assist you.
        </p>
        <a
          href="tel:+917737986988"
          className="inline-block bg-gradient-to-r from-green-100 to-green-300 text-green-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-50 hover:to-green-200 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default Services;
