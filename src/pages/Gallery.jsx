import React, { useState } from "react";
import { FaCamera, FaVideo } from "react-icons/fa";

const galleryItems = [
  { type: "image", title: "Mining Project Site", src: "https://placehold.co/400x300" },
  { type: "video", title: "Irrigation Project Overview", src: "https://placehold.co/400x300" },
  { type: "image", title: "Cement Plant Facility", src: "https://placehold.co/400x300" },
  { type: "image", title: "Highway Construction", src: "https://placehold.co/400x300" },
  { type: "video", title: "Industrial Plant Process", src: "https://placehold.co/400x300" },
  { type: "image", title: "Environmental Monitoring", src: "https://placehold.co/400x300" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-50 overflow-hidden relative">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text animate-slide-in">
            Our Gallery
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in">
            Explore our projects, infrastructure, and environmental initiatives through our premium gallery. Each visual tells the story of our expertise and dedication.
          </p>
        </div>

        {/* Hero Floating Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 opacity-20 rounded-full animate-float1 "></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-blue-300 opacity-20 rounded-full animate-float2 "></div>
        <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-300 opacity-20 rounded-full animate-float3 "></div>
      </section>

      {/* Gallery Grid Section */}
      <section className=" mx-auto px-6 py-20 relative overflow-hidden">
        {/* Background floating shapes */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-green-500 opacity-20 rounded-full animate-float1 "></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500 opacity-20 rounded-full animate-float2 "></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500 opacity-20 rounded-full animate-float3 "></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400 opacity-20 rounded-full animate-float1 "></div>

        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text animate-slide-in">
          Project Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white transition-transform transform hover:scale-105 hover:-translate-y-2 hover:shadow-4xl"
            >
              {/* Floating shapes behind each card */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-300 opacity-30 rounded-full animate-float1 blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-400 opacity-20 rounded-full animate-float2 blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-purple-400 opacity-25 rounded-full animate-float3 blur-xl group-hover:scale-110 transition-transform duration-700"></div>

              {/* Gradient hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-40 transition duration-500 rounded-3xl blur-3xl"></div>

              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover rounded-3xl cursor-pointer relative z-10 transition-transform duration-500 group-hover:scale-110"
                onClick={() => setSelectedImage(item.src)}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center z-20">
                <div className="text-white text-4xl mb-2 scale-90 group-hover:scale-100 transition-transform duration-500">
                  {item.type === "image" ? <FaCamera /> : <FaVideo />}
                </div>
                <h3 className="text-white text-lg font-semibold opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative">
            <img src={selectedImage} alt="Preview" className="max-h-[80vh] rounded-2xl shadow-2xl" />
            <button
              className="absolute top-2 right-2 text-white text-3xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-600 to-green-800">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
          Want to See More?
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto animate-fade-in">
          Contact us to learn more about our ongoing projects and get exclusive insights into our work.
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

export default Gallery;
    