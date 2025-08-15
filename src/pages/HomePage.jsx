import React from 'react'
import ParallaxScroll from '../components/ParallaxScroll'
import WhoWeAre from '../components/WhoWeAre'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialSection from '../components/TestimonialSection'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
  return (
    <div>
       <ParallaxScroll />
       <WhoWeAre />

       <FeaturesSection/>
       <TestimonialSection />
       <HeroSection />
    </div>
  )
}

export default HomePage
