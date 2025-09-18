import React from "react";
import { FaRocket, FaShieldAlt, FaSyncAlt, FaHeadset } from "react-icons/fa";
import companyImage from "../assets/envirologo.png"; // Replace with your company image URL
// import ourStoryBg from "../assets/9495446.png"; // Replace with your background image URL

import bgImage from "../assets/9495446.png"; // Replace with your background image URL
import CEO from "../assets/ceo.jpeg"; // Replace with your CEO image URL


import aboutBg from "../assets/00008.jpg"; // Replace with your background image URL

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

// const teamMembers = [
//   { name: "John Doe", role: "Engineer", image: "https://yourdomain.com/assets/team1.jpg" },
//   { name: "Jane Smith", role: "Project Manager", image: "https://yourdomain.com/assets/team2.jpg" },
//   { name: "Mike Johnson", role: "Lead Consultant", image: "https://yourdomain.com/assets/team3.jpg" },
// ];

const ceo = {
  name: "Sameer Singh",
  role: "Chief Executive Officer",
  image: CEO,
  description: "Our clients consistently praise our expertise, professionalism, and reliability. They value our deep knowledge of environmental laws, clear guidance, and ability to simplify complex regulatory processes. With a focus on timely delivery, transparency, and sustainable solutions, we’ve built a reputation as a trusted partner for end-to-end environmental consultancy services."
};

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
<section
  style={{ backgroundImage: `url(${aboutBg})` }}
  className="relative bg-cover  bg-fixed bg-center bg-no-repeat text-white overflow-hidden h-[100vh] flex items-center justify-center"
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/50 to-black/40"></div>

  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-green-400 via-green-500 to-green-700 text-transparent bg-clip-text drop-shadow-lg">
      Welcome to Skilled Enviro Services
    </h1>

    <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
      Accredited by <span className="font-semibold text-green-300">QCI/NABET Category-A, Govt. of India </span>  
      and <span className="font-semibold">ISO 9001:2015 certified</span>, we are committed to delivering 
      sustainable Environmental and Engineering solutions. Since 2020, our team of experts has been 
      providing trusted consulting and industrial services across mining, construction, and environmental sectors.
    </p>

   
  </div>
</section>



{/* Company Story */}
<section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
  {/* Floating shapes */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 opacity-20 rounded-full animate-float1"></div>
  <div className="absolute top-20 right-10 w-48 h-48 bg-blue-300 opacity-20 rounded-full animate-float2"></div>
  <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-300 opacity-20 rounded-full animate-float3"></div>

  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left side - Company Story */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
        Our Story
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <span className="font-semibold text-green-600">SKILLED ENVIRO SERVICES</span>, 
        Accredited by <span className="font-medium">QCI/NABET Category-A, Govt. of India  </span> 
        and <span className="font-medium">ISO 9001:2015 certified</span>, was established in 2020 
        by experienced environmental and engineering experts. We provide specialized consulting, 
        industrial, and construction solutions while working towards our motto of 
        <span className="italic text-green-600"> Sustainable Environment</span>.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Quality Assurance and customer satisfaction are at the heart of our philosophy. 
        Our team of highly qualified experts from diverse fields — Environmental Sciences, 
        Chemistry, Botany, Zoology, Engineering, and Geology — ensures excellence and innovation 
        in every project we deliver.
      </p>
    </div>

    {/* Right side - Values Cards */}
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {values.concat([
          {
            title: "Excellence",
            desc: "Delivering the highest quality solutions with innovation and integrity.",
            gradient: "from-yellow-400 to-orange-500"
          }
        ]).map((value, idx) => (
          <div
            key={idx}
            className={`group relative p-6 rounded-2xl shadow-xl bg-white border-t-4 border-green-500 ${value.gradient} transition-transform transform hover:-translate-y-2 hover:shadow-2xl`}
          >
            {/* Animated Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-100 to-green-500 opacity-0 group-hover:opacity-50 transition duration-500 "></div>
            
            {/* Card Content */}
            <div className="relative">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

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



         {/* Team / CEO Section */}
   <section
      className=" mx-auto px-6 py-20 bg-cover bg-center bg-no-repeat rounded-2xl"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
        Meet Our Team
      </h2>

      {/* CEO */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-16 gap-6">
        <img
          src={ceo.image}
          alt={ceo.name}
          className="w-48 h-48 rounded-full object-cover shadow-xl"
        />
        <div className="text-center md:text-left bg-white/70 p-4 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">{ceo.name}</h3>
          <p className="text-gray-600 text-lg mt-2">{ceo.role}</p>
          <p className="text-gray-700 mt-4 max-w-md">{ceo.description}</p>
        </div>
      </div>

      {/* Team Members */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 bg-white/80 backdrop-blur-sm"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
        ))}
      </div> */}
    </section>


   

      <RecruitersSection/>


      

     

     
<TestimonialSection/>
   

    </div>
  );
};

export default About;
