import React from "react";
import { useParams, Link } from "react-router-dom";
import { allServices } from "../components/ServicesData";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = allServices.find((s) => slugify(s.title) === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Service Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="text-white bg-green-600 hover:bg-green-700 py-2 px-6 rounded-lg transition duration-300"
        >
          Go Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-700 to-green-800 text-white py-24 md:py-32">
        <div className="max-w-7xl h-[40vh] mx-auto px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{service.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{service.description}</p>
          <Link
            to="/services"
            className="mt-6 inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-50 transition duration-300"
          >
            Back to Services
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Our {service.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our {service.title.toLowerCase()} service offers innovative, efficient, and compliant solutions tailored to client needs.
          </p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Custom-tailored service</li>
            <li>Expert guidance</li>
            <li>Compliance-first approach</li>
          </ul>
        </div>
        {service.image && (
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
