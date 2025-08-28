import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Import local images
import natureImg from '../assets/h1.jpg';
import forestImg from '../assets/h2.jpg';
import solarImg from '../assets/h3.jpg';

// Slide data: each slide has an image, title, and description
const slides = [
  {
    image: natureImg,
    title: 'Innovating for a Greener Future',
    description:
      'Empowering communities with sustainable technology that heals our planet and inspires generations to come.'
  },
  {
    image: forestImg,
    title: 'Guardians of the Earth',
    description:
      'Preserving forests, protecting biodiversity, and creating a balance where nature and humanity thrive together.'
  },
  {
    image: solarImg,
    title: 'Energy From the Sun',
    description:
      'Transforming sunlight into endless clean power — building a brighter tomorrow without harming today.'
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
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-6 leading-relaxed">
                  {slide.description}
                </p>
                <a
                  href="/about"
                  className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg shadow-xl transition duration-300 transform hover:scale-105"
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
