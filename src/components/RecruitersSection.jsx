import React from "react";
import "../index.css";

// Import logos (1 to 20)
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.svg";
import l4 from "../assets/l4.jpg";
import l5 from "../assets/l5.png";
import l6 from "../assets/l6.png";
import l7 from "../assets/l7.png";
import l8 from "../assets/l8.jpeg";
import l9 from "../assets/l9.jpg";
import l10 from "../assets/l10.jpg";
import l11 from "../assets/l11.jpg";
import l12 from "../assets/l12.jpg";
import l13 from "../assets/l13.jpg";
import l14 from "../assets/l14.jpg";
import l15 from "../assets/l15.jpg";
import l16 from "../assets/l16.jpg";
import l17 from "../assets/l17.jpg";
import l18 from "../assets/l18.jpg";
import l19 from "../assets/l19.jpg";
import l20 from "../assets/l20.jpg";

const recruiters = [
  { logo: l1 },
  { logo: l2 },
  { logo: l3 },
  { logo: l4 },
  { logo: l5 },
  { logo: l6 },
  { logo: l7 },
  { logo: l8 },
  { logo: l9 },
  { logo: l10 },
  { logo: l11 },
  { logo: l12 },
  { logo: l13 },
  { logo: l14 },
  { logo: l15 },
  { logo: l16 },
  { logo: l17 },
  { logo: l18 },
  { logo: l19 },
  { logo: l20 },
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
