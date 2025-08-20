import React from 'react'
import ParallaxScroll from '../components/ParallaxScroll'
import WhoWeAre from '../components/WhoWeAre'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialSection from '../components/TestimonialSection'
import HeroSection from '../components/HeroSection'
import RecruitersSection from '../components/RecruitersSection'

const HomePage = () => {
  return (
    <div>
       <ParallaxScroll />
       <WhoWeAre />

       <FeaturesSection/>
       <RecruitersSection/>
       <TestimonialSection />
       <section className="text-center py-20 bg-gradient-to-r from-green-600 to-green-800">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
          Interested in Our Services?
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto animate-fade-in">
          Get in touch with our expert team today to discuss your project requirements and how we can assist you.
        </p>
        <a
          href="tel:+917737986988"
          className="inline-block bg-gradient-to-r from-green-100 to-green-300 text-green-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-50 hover:to-green-200 transition"
        >
          Contact Us
        </a>
      </section>
       {/* <HeroSection /> */}
    </div>
  )
}

export default HomePage
