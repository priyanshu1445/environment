import React from 'react';
import backgroundImage from '../assets/parallax.jpg'; // Adjust the path as necessary

const ParallaxScroll = () => {
  return (
    <div
      className="w-full h-[100vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(${backgroundImage})`
      }}
    >
      <div className="text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 bg-clip-text text-transparent">
            Skilled Enviro
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6">
          Empowering businesses with sustainable solutions that protect our planet and ensure a greener future.
        </p>
       <a
  href="/about"
  className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
>
  Discover More
</a>

      </div>
    </div>
  );
};

export default ParallaxScroll;
