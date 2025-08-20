import React from "react";
import { FaRocket, FaShieldAlt, FaSyncAlt, FaHeadset } from "react-icons/fa";
import companyImage from "../assets/logo.jpeg"; // Replace with your company image URL

import "../index.css"; // Ensure your styles are imported
import TestimonialSection from "../components/TestimonialSection";
import RecruitersSection from "../components/RecruitersSection";

const features = [
  { icon: <FaRocket />, title: "Fast Performance", description: "Efficient solutions that save time and resources for your projects.", gradient: "from-green-500 to-green-700" },
  { icon: <FaShieldAlt />, title: "Trusted & Certified", description: "ISO 9001:2015 certified services ensuring quality and reliability.", gradient: "from-blue-500 to-blue-700" },
  { icon: <FaSyncAlt />, title: "Innovative Solutions", description: "Cutting-edge methods for environmental and engineering challenges.", gradient: "from-purple-500 to-purple-700" },
  { icon: <FaHeadset />, title: "24/7 Support", description: "Dedicated team ready to assist you anytime, anywhere.", gradient: "from-pink-500 to-pink-700" },
];

const values = [
  { title: "Integrity", desc: "We uphold honesty, transparency, and ethical standards in all our projects.", gradient: "from-green-400 to-green-600" },
  { title: "Innovation", desc: "Continuously improving and implementing cutting-edge solutions for our clients.", gradient: "from-blue-400 to-blue-600" },
  { title: "Sustainability", desc: "Ensuring our solutions are environmentally responsible and sustainable.", gradient: "from-purple-400 to-purple-600" },
];

const teamMembers = [
  { name: "John Doe", role: "Engineer", image: "https://yourdomain.com/assets/team1.jpg" },
  { name: "Jane Smith", role: "Project Manager", image: "https://yourdomain.com/assets/team2.jpg" },
  { name: "Mike Johnson", role: "Lead Consultant", image: "https://yourdomain.com/assets/team3.jpg" },
];

const ceo = {
  name: "Mr. John CEO",
  role: "Chief Executive Officer",
  image: "https://yourdomain.com/assets/ceo.jpg",
  description: "Leading the company with vision and expertise, ensuring our mission of providing top-notch environmental and engineering solutions is achieved."
};

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
              About Skilled Enviro Services
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              We provide specialized Environmental and Engineering services with ISO 9001:2015 certification. Our expertise spans consulting, industrial solutions, and construction services.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform transition hover:scale-105 hover:bg-green-500"
            >
              Contact Us
            </a>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src={companyImage}
              alt="Skilled Enviro Services"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">Our Story</h2>
        <p className="text-gray-700 text-lg mb-6 text-center max-w-3xl mx-auto">
          Skilled Enviro Services was founded with the mission to provide sustainable, innovative, and reliable environmental and engineering solutions. We have successfully delivered projects across multiple industries including mining, construction, and industrial sectors, always maintaining the highest standards of quality.
        </p>
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
          Our dedicated team of experts ensures that every project is completed efficiently, safely, and responsibly, helping clients achieve their environmental compliance and engineering goals.
        </p>
      </section>

       {/* Values with Floating Shapes */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 opacity-20 rounded-full animate-float1"></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-blue-300 opacity-20 rounded-full animate-float2"></div>
        <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-300 opacity-20 rounded-full animate-float3"></div>

        <h2 className="text-3xl font-bold mb-12 text-center relative z-10 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative z-10">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 border-t-4 border-gradient-to-r ${value.gradient} bg-white`}
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>



         {/* Team / CEO Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">Meet Our Team</h2>

        {/* CEO */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-16 gap-6">
          <img src={ceo.image} alt={ceo.name} className="w-48 h-48 rounded-full object-cover shadow-xl" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">{ceo.name}</h3>
            <p className="text-gray-600 text-lg mt-2">{ceo.role}</p>
            <p className="text-gray-700 mt-4 max-w-md">{ceo.description}</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 bg-white">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover mb-4 shadow-lg" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>


      <RecruitersSection/>


      

      {/* Features / Services */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 text-center bg-white"
              >
                <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-tr ${feature.gradient} text-white text-3xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
<TestimonialSection/>
   

    </div>
  );
};

export default About;
