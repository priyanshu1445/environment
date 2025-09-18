import React from "react";
import { useParams, Link } from "react-router-dom";
import { allServices } from "../components/ServicesData"; 
import serviceBg from "../assets/parallax.jpg"; 
import TestimonialSection from "../components/TestimonialSection";
import RecruitersSection from "../components/RecruitersSection";
import bgImage from "../assets/9495446.png"; 

// ✅ Slugify function
const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const ServiceDetails = () => {
  const { slug } = useParams();

  // ✅ Find service by slug
  const service = allServices.find((s) => slugify(s.slug) === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Service Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          The service you're looking for doesn't exist.
        </p>
        <Link
          to="/services"
          className="text-white bg-green-600 hover:bg-green-700 py-2 px-6 rounded-lg transition duration-300"
        >
          Go Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Hero Section */}
      <div
        className="relative h-[80vh] text-white py-24 md:py-32 bg-gradient-to-r from-green-600 via-emerald-700 to-green-800"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${serviceBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[40vh] mx-auto px-6 flex flex-col items-center justify-center text-center rounded-lg">
          <h1 className="text-2xl mt-[120px] md:text-4xl font-extrabold mb-4">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">{service.description}</p>
          <Link
            to="/services"
            className="mt-6 inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-50 transition duration-300"
          >
            Back to Services
          </Link>
        </div>
      </div>

      {/* 🔹 Main Content */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-black">
          <div>
            <h2 className="md:text-3xl text-2xl font-semibold mb-6">
              About Our {service.title}
            </h2>
            <p className="leading-relaxed font-medium text-xl mb-4">{service.description}</p>
            <p className="leading-relaxed mb-4">
              Our {service.title.toLowerCase()} service offers innovative,
              efficient, and compliant solutions tailored to client needs.
            </p>

            {/* ✅ Dynamic features list */}
            {service.features && (
              <ul className="list-disc font-medium ml-5 space-y-2">
                {service.features.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>

          {service.image && (
            <div className="rounded-lg overflow-hidden ">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* 🔹 Extra Sections */}
      <RecruitersSection />
      <TestimonialSection />
    </div>
  );
};

export default ServiceDetails;
