import React from "react";

// Import logos
import jsw from "../assets/l1.png";
import adaniLogo from "../assets/l2.jpg";
import jswLogo from "../assets/l4.jpg";
import vedantaLogo from "../assets/l5.png";
import hindalcoLogo from "../assets/l6.png";
import nmdcLogo from "../assets/l7.png";
import ltLogo from "../assets/l8.jpeg";
import jindalLogo from "../assets/l3.svg";
import "../index.css";

const recruiters = [
  { logo: jsw },
  { logo: adaniLogo },
  { logo: jswLogo },
  { logo: vedantaLogo },
  { logo: hindalcoLogo },
  { logo: nmdcLogo },
  { logo: ltLogo },
  { logo: jindalLogo },
];

const RecruitersSection = () => {
  // duplicate array for infinite effect
  const logos = [...recruiters, ...recruiters];

  return (
    <section className="bg-gradient-to-r from-green-700 via-green-800 to-green-700 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">
            Clients
          </span>
        </h2>
        <p className="text-black mb-12 max-w-2xl mx-auto text-lg">
          Trusted by leading organizations across the country for environmental,
          engineering, and industrial consultancy.
        </p>

        {/* First Row - Left Scroll */}
        <div className="relative w-full overflow-hidden mb-10">
          <div className="animate-marquee space-x-12 flex">
            {logos.map((recruiter, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-white rounded-xl shadow-xl p-6 hover:scale-110 transition-transform"
              >
                <img
                  src={recruiter.logo}
                  alt={`recruiter-${idx}`}
                  className="max-h-20 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right Scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-reverse space-x-12 flex">
            {logos.map((recruiter, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-white rounded-xl shadow-xl p-6 hover:scale-110 transition-transform"
              >
                <img
                  src={recruiter.logo}
                  alt={`recruiter-${idx}`}
                  className="max-h-20 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
