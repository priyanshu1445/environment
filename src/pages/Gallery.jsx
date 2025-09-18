import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaCamera, FaVideo } from "react-icons/fa";
import galleryBg from "../assets/gallery.jpg"; // Local background image
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

const galleryItems = [
  {
    type: "image",
 
    src: g1, // wind turbines renewable
  },
  {
    type: "image",

    src: g2, // drone forest replanting
  },
  {
    type: "image",
 
    src: g3, // water dam/reservoir
  },
  {
    type: "image",

    src: g4, // greenhouse farming
  },
  {
    type: "image",

    src: g5, // solar project
  },
  {
    type: "image",
  
    src: g6, // natural habitat
  },
];


const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const mediaRef = useRef(null);

  // ✅ Open and request fullscreen in one gesture
  const handleOpen = useCallback((item) => {
    setSelectedMedia(item);
    document.documentElement.classList.add("overflow-hidden");
    setTimeout(() => {
      if (mediaRef.current) {
        if (mediaRef.current.requestFullscreen) mediaRef.current.requestFullscreen();
        else if (mediaRef.current.webkitRequestFullscreen) mediaRef.current.webkitRequestFullscreen();
        else if (mediaRef.current.msRequestFullscreen) mediaRef.current.msRequestFullscreen();
      }
    }, 100);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedMedia(null);
    document.documentElement.classList.remove("overflow-hidden");
    if (document.fullscreenElement) document.exitFullscreen();
    if (document.webkitFullscreenElement) document.webkitExitFullscreen();
    if (document.msFullscreenElement) document.msExitFullscreen();
  }, []);

  // ✅ Auto-close overlay when exiting fullscreen
  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement) {
        setSelectedMedia(null);
        document.documentElement.classList.remove("overflow-hidden");
      }
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("MSFullscreenChange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      document.removeEventListener("MSFullscreenChange", onFullscreenChange);
    };
  }, []);

  // ✅ ESC fallback
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && selectedMedia) handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedMedia, handleClose]);

  return (
    <div className="bg-gray-50 overflow-hidden relative">
      {/* Hero Section */}
         <section
      className="relative h-[80vh] bg-fixed justify-center items-center flex text-white py-32 bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${galleryBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
          Our Gallery
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Explore our projects, infrastructure, and environmental initiatives through our premium gallery. 
          Each visual tells the story of our expertise and dedication.
        </p>
      </div>
    </section>


      {/* Gallery Grid */}
  <section className="mx-auto px-6 py-20 relative overflow-hidden">
  {/* Floating Shapes Background */}
 <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full  opacity-30 animate-float1"></div>
<div className="absolute top-40 right-20 w-56 h-56 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full  opacity-30 animate-float2"></div>
<div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full  opacity-30 animate-float3"></div>
<div className="absolute bottom-10 left-1/2 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full  opacity-30 animate-float3"></div>
<div className="absolute bottom-32 right-1/3 w-32 h-32 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full  opacity-30 animate-float1"></div>
<div className="absolute top-1/3 left-1/2 w-52 h-52 bg-gradient-to-r from-teal-300 to-green-500 rounded-full  opacity-30 animate-float2"></div>


  {/* Section Heading */}
  <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text relative z-10">
    Project Gallery
  </h2>

  {/* Gallery Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
    {galleryItems.map((item, idx) => (
      <div
        key={idx}
        className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white transition-transform transform hover:scale-105 hover:-translate-y-2"
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-60 object-cover rounded-3xl cursor-pointer transition-transform duration-500 group-hover:scale-110"
            onClick={() => handleOpen(item)}
          />
        ) : (
          <video
            src={item.src}
            className="w-full h-60 object-cover rounded-3xl cursor-pointer transition-transform duration-500 group-hover:scale-110"
            onClick={() => handleOpen(item)}
            loop
            muted
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center z-20">
        
          <h3 className="text-white text-lg font-semibold">{item.title}</h3>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Fullscreen Overlay */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <button
            aria-label="Close"
            className="absolute top-4 right-5 text-white text-4xl font-bold hover:text-gray-400 z-[10000]"
            onClick={handleClose}
          >
            ×
          </button>
          {selectedMedia.type === "image" ? (
            <img
              ref={mediaRef}
              src={selectedMedia.src}
              alt={selectedMedia.title}
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <video
              ref={mediaRef}
              src={selectedMedia.src}
              className="max-w-full max-h-full object-contain"
              controls
              autoPlay
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
