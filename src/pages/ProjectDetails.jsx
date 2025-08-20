import React from "react";
import { useParams, Link } from "react-router-dom";
import { allProjects } from "../components/ProjectsData"; // Assuming this data is available
import { FaMapMarkerAlt, FaFolderOpen, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50 text-gray-800">
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
          <h1 className="text-4xl font-extrabold text-red-600 mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-6">Project Not Found</p>
          <Link
            to="/projects"
            className="inline-flex items-center text-white bg-gray-900 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition duration-300 transform hover:scale-105 shadow-md"
          >
            <FaArrowLeft className="mr-3" />
            Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        {/* Hero Section with Parallax Effect */}
        <div className="relative mb-16 lg:mb-24">
          {/* Main Image with Gradient Overlay */}
          <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={project.images?.[0] || "default-image.jpg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl p-8 flex flex-col justify-end text-white">
            <div className="max-w-4xl">
              <span className="bg-white/20 text-white text-xs font-bold uppercase py-1 px-3 rounded-full tracking-wider">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight">
                {project.title}
              </h1>
              <p className="flex items-center mt-4 text-lg text-white/80">
                <FaMapMarkerAlt className="mr-2 text-white" /> {project.location}
              </p>
              <p className="mt-4 text-xl text-white/90 font-light">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Details and Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Details Section */}
          <div className="lg:col-span-2 space-y-12 flex flex-col justify-between">
            <div>
              {project.details?.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Back to Projects Button */}
            <div className="mt-10">
              <Link
                to="/projects"
                className="inline-flex items-center text-white bg-green-900 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-md"
              >
                <FaArrowLeft className="mr-3" />
                Back to All Projects
              </Link>
            </div>
          </div>

          {/* Right: Sidebar with Summary & Gallery */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 bg-gray-50 rounded-2xl shadow-inner">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Project at a Glance</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="text-md font-semibold text-gray-700">Client:</h4>
                  <p className="text-gray-500">{project.client || "N/A"}</p>
                </li>
                <li>
                  <h4 className="text-md font-semibold text-gray-700">Year Completed:</h4>
                  <p className="text-gray-500">{project.year || "N/A"}</p>
                </li>
                <li>
                  <h4 className="text-md font-semibold text-gray-700">Services:</h4>
                  <p className="text-gray-500">{project.services || "N/A"}</p>
                </li>
              </ul>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {project.images?.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Project image ${index + 2}`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-green-100  transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
