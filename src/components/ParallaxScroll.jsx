import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Slide data: each slide has an image, title, and description
const slides = [
  {
    image: 'https://source.unsplash.com/1600x900/?nature,green',
    title: 'Green Innovation',
    description: 'Driving change through eco-friendly technology.'
  },
  {
    image: 'https://source.unsplash.com/1600x900/?forest',
    title: 'Forest Conservation',
    description: 'Protecting natural habitats for future generations.'
  },
  {
    image: 'https://source.unsplash.com/1600x900/?solar,energy',
    title: 'Solar Power',
    description: 'Harnessing clean energy from the sun.'
  },
  {
    image: 'https://source.unsplash.com/1600x900/?wind,turbine',
    title: 'Wind Energy',
    description: 'Sustainable solutions for a cleaner tomorrow.'
  }
];

const ParallaxScroll = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        dir="rtl"
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-center bg-cover flex items-center justify-center text-center px-4"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)), url(${slide.image})`
              }}
            >
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-6">
                  {slide.description}
                </p>
                <a
                  href="/about"
                  className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
                >
                  Discover More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ParallaxScroll;
