import React from "react";

const recruiters = [
  {
    name: "Tata Steel",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Tata_Steel_Logo.svg/2560px-Tata_Steel_Logo.svg.png",
  },
  {
    name: "Adani Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Adani_2012_logo.svg/2560px-Adani_2012_logo.svg.png",
  },
  {
    name: "JSW",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/JSW_Group_logo.svg/2560px-JSW_Group_logo.svg.png",
  },
  {
    name: "Vedanta",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Vedanta_Limited_logo.svg/2560px-Vedanta_Limited_logo.svg.png",
  },
  {
    name: "Hindalco",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Hindalco_Industries_Logo.svg/2560px-Hindalco_Industries_Logo.svg.png",
  },
  {
    name: "NMDC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/NMDC_Limited_Logo.svg/2560px-NMDC_Limited_Logo.svg.png",
  },
  {
    name: "L&T",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/L%26T_Logo.svg/2560px-L%26T_Logo.svg.png",
  },
  {
    name: "Jindal Steel",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Jindal_Steel_and_Power_logo.svg/2560px-Jindal_Steel_and_Power_logo.svg.png",
  },
];

const RecruitersSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 via-green-800 to-green-700 py-20 px-6">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {recruiters.map((recruiter, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-[1.05] hover:shadow-2xl hover:border-green-300 border border-green-100"
            >
              <img
                src={recruiter.logo}
                alt={recruiter.name}
                className="h-16 mx-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 group-hover:drop-shadow-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150?text=Logo+Missing";
                }}
              />
              <p className="mt-4 text-sm text-green-900 font-medium">
                {recruiter.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
