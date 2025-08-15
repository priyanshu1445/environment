import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This service exceeded my expectations! The team was very professional and responsive.",
  },
  {
    name: "Sarah Lee",
    feedback:
      "Absolutely wonderful experience, everything was handled smoothly and efficiently.",
  },
  {
    name: "Michael Brown",
    feedback:
      "Highly recommended! Quality work and excellent customer support.",
  },
  {
    name: "Emily Davis",
    feedback:
      "The results were beyond what I expected. I’m truly impressed with their expertise.",
  },
  {
    name: "David Clark",
    feedback:
      "Prompt, reliable, and top-quality service. Couldn’t ask for more.",
  },
  {
    name: "Sophia Wilson",
    feedback:
      "I love how transparent and efficient the process was from start to finish.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden h-full flex flex-col justify-between transition-transform transform hover:scale-105 duration-300">
                
                {/* Decorative cut-off circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full translate-x-16 -translate-y-16"></div>
                
                {/* Feedback */}
                <p className="text-gray-600 italic mb-6 z-10 relative">
                  "{item.feedback}"
                </p>

                {/* Name */}
                <h4 className="font-semibold text-gray-900 z-10 relative">
                  — {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
