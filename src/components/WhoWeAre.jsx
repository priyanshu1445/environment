import React, { useEffect, useRef, useState } from "react";
import AboutImg from "../assets/a1.jpg";

const WhoWeAre = () => {
  const countersRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (countersRef.current) {
      observer.observe(countersRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 2020, label: "Founded" },
    { number: 20, label: "Projects Delivered", suffix: "+" },
    { number: 10, label: "Expert Consultants", suffix: "+" },
    { number: 100, label: "Client Satisfaction", suffix: "%" },
  ];

  const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCounter) return;
      let start = 0;
      const duration = 1500; // 1.5 seconds
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [startCounter, target]);

    return (
      <span>
        {count}
        {suffix || ""}
      </span>
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-green-900 via-emerald-700 to-green-900 py-24 overflow-hidden text-white">
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
        {/* Row 1: Image + Short Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left: Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
              <img
                src={AboutImg}
                alt="Skilled Enviro Experts"
                className="w-full h-[400px] object-cover object-bottom transform group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-800/50 to-transparent"></div>
            </div>
          </div>

          {/* Right: Short Title + Tagline */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              Skilled Enviro Services — delivering sustainable environmental
              and engineering solutions since 2020.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-block bg-white/20 text-white font-semibold px-4 py-1 rounded-full backdrop-blur-sm shadow border border-white/30">
                QCI/NABET Category-A
              </span>
              <span className="inline-block bg-white/20 text-white font-semibold px-4 py-1 rounded-full backdrop-blur-sm shadow border border-white/30">
                ISO 9001:2015
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Long Description */}
        <div className="space-y-4 text-gray-100 max-w-5xl text-lg text-justify ">
          <p>
            <strong>Skilled Enviro Services</strong>, accredited by QCI/NABET
            (Category-A), Govt. of India, and ISO 9001:2015 certified, was
            established in 2020 by experienced environmental and engineering
            experts.
          </p>
          <p>
            We deliver specialized Environmental and Engineering solutions,
            including consulting services across the Environment, Mining,
            Construction, and Industrial sectors — steadfastly working towards
            our motto of{" "}
            <em className="text-green-200 font-medium">
              Sustainable Environment
            </em>.
          </p>
          <p>
            Quality assurance and customer satisfaction are at the core of our
            philosophy. Our transparent and professional approach, unwavering
            commitment, and on-time delivery have earned us recognition in the
            environmental field.
          </p>
        </div>

        {/* Row 3: Stats */}
        <div
          ref={countersRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center border border-white/20 transform transition hover:scale-105"
            >
              <div className="text-3xl font-extrabold text-white">
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
