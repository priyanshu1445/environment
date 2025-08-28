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
import heroBg from "../assets/jkl.jpg"; // Replace with your hero background image
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


{/*  hero  */}
   <section
  className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white h-screen"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="text-center z-10 px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text drop-shadow-lg">
      Innovative Environmental <br /> & Engineering Solutions
    </h1>
    <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      Driving sustainable progress with expertise in environmental management, 
      infrastructure, and industrial solutions.  
      Partner with us to build a cleaner, smarter, and future-ready world.
    </p>
  </div>

  {/* Dark Overlay for Contrast */}
  <div className="absolute inset-0 bg-black/70"></div>
</section>


      {/* Core Services */}
<section className="bg-white py-24 px-6 relative overflow-hidden">
  {/* Ambient gradient lighting in the background */}
  {/* <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-white to-70% z-0"></div> */}

  {/* Floating blurred shapes */}
  <div className="absolute top-20 -left-10 w-72 h-72 bg-green-300 rounded-full  animate-float1"></div>
  <div className="absolute bottom-20 -right-10 w-80 h-80 bg-pink-200 rounded-full animate-float2 delay-1000"></div>
  <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-200 rounded-full animate-float3 delay-700"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <h2 className="text-5xl font-medium mb-16 text-center text-gray-800 tracking-wider">
      Our <span className="font-medium text-green-600">Core Services</span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {mainServices.map((service, idx) => (
        <Link
          to={`/services/${slugify(service.title)}`}
          key={idx}
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
              A brief, elegant description of the service.
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>



      {/* Why Choose Us Section */}
   <section className="relative mx-auto px-6 py-24 rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 via-white to-green-700">
  {/* Floating background shapes */}
  <div className="absolute top-10 -left-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 -right-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

  <div className="relative z-10">
    <h2 className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 text-transparent bg-clip-text animate-gradient-x">
      Why Choose Us
    </h2>
    <p className="text-center max-w-3xl mx-auto text-gray-600 text-lg mb-16 leading-relaxed">
      We combine <span className="font-semibold text-green-600">innovation</span>, 
      <span className="font-semibold text-green-600"> sustainability</span>, 
      and <span className="font-semibold text-green-600">expertise</span> to deliver top-tier solutions for all environmental and industrial projects. 
      Our dedicated team ensures high-quality standards, compliance, and efficiency in every project.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Expert Team",
          desc: "Highly skilled professionals with years of experience in diverse industries.",
        },
        {
          title: "Advanced Technology",
          desc: "Utilizing modern tools and technology to ensure precision and efficiency.",
        },
        {
          title: "Sustainable Solutions",
          desc: "Eco-friendly approaches that meet regulatory standards and protect the environment.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 to-emerald-600 opacity-0 group-hover:opacity-10 transition duration-500"></div>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Additional Services */}
<section className="bg-white py-24 px-6 relative overflow-hidden">
  {/* Ambient gradient background */}
  {/* <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-white to-70% z-0"></div> */}

  {/* Floating blurred shapes */}
  <div className="absolute top-20 -left-10 w-72 h-72 bg-green-300 rounded-full  animate-float1"></div>
  <div className="absolute bottom-20 -right-10 w-80 h-80 bg-red-300 rounded-full animate-float2 delay-1000"></div>
  <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200 rounded-full  animate-float3 delay-700"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <h2 className="text-5xl font-medium mb-16 text-center text-gray-800 tracking-wider">
      Additional <span className="font-medium text-green-600">Services</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {otherServices.map((service, idx) => (
        <Link
          key={idx}
          to={`/services/${slugify(service)}`}
          className="group relative block p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
        >
          {/* Top-right subtle glow on hover */}
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform scale-0 group-hover:scale-150 blur-xl"></div>

          <div className="flex flex-col items-start z-10 relative">
            <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-2xl bg-gray-100 text-green-600 text-2xl transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
              {/* Placeholder for icon/initial letter */}
              <span>{service.charAt(0)}</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              {service}
            </h3>
            <p className="text-gray-500 text-base font-light">
              {service === "SOCIAL IMPACT ASSESSMENT STUDY" &&
                "Comprehensive evaluation of social impact for projects."}
              {service === "ENVIRONMENTAL MONITORING" &&
                "Regular monitoring to ensure sustainable environmental practices."}
              {service === "FOREST CLEARANCE" &&
                "Guidance and approval assistance for forest clearance requirements."}
              {service === "CONSENT TO ESTABLISH/OPERATE" &&
                "Support in obtaining regulatory approvals for operations."}
              {service === "MINING PLAN" &&
                "Preparation of detailed mining plans adhering to legal standards."}
              {service === "DGPS SURVEY" &&
                "High-precision surveys using DGPS technology."}
              {service === "REPLENISHMENT STUDY" &&
                "Analysis and planning for resource replenishment."}
              {service === "LEGAL COMPLIANCE" &&
                "Ensuring all activities meet legal and regulatory requirements."}
            </p>
          </div>
        </Link>
      ))}
    </div>
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
