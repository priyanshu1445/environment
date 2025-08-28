// ServicesData.js
import {
  FaMountain,
  FaWater,
  FaIndustry,
  FaRoad,
  FaCogs,
  FaBuilding,
  FaFlask,
  FaHardHat,
} from "react-icons/fa";

// 📌 Import local images
import miningImg from "../assets/12.jpg";
import irrigationImg from "../assets/8.jpg";
import mineralImg from "../assets/11.jpg";
import metallurgicalImg from "../assets/10.jpg";
import cementImg from "../assets/1.jpg";
import organicImg from "../assets/14.jpg";
import highwayImg from "../assets/7.jpg";
import constructionImg from "../assets/3.jpg";
import socialImg from "../assets/15.jpg";
import environmentImg from "../assets/6.jpg";
import forestImg from "../assets/6.jpg";
import consentImg from "../assets/10.jpg";
import miningPlanImg from "../assets/13.jpg";
import dgpsImg from "../assets/2.jpg";
import replenishImg from "../assets/14.jpg";
import legalImg from "../assets/9.jpg";

export const allServices = [
  {
    title: "MINING PROJECTS",
    icon: <FaMountain size={28} />,
    image: miningImg,
    description:
      "Comprehensive mining project solutions with sustainable and eco-friendly practices.",
    features: [
      "Sustainable and eco-friendly operations",
      "Advanced mining technologies",
      "Expert project management team",
    ],
  },
  {
    title: "IRRIGATION PROJECTS",
    icon: <FaWater size={28} />,
    image: irrigationImg,
    description:
      "Design and development of modern irrigation systems for agriculture and urban needs.",
    features: [
      "Efficient water management",
      "Customized irrigation solutions",
      "Support for agriculture and urban growth",
    ],
  },
  {
    title: "MINERAL BENEFICIATION",
    icon: <FaIndustry size={28} />,
    image: mineralImg,
    description:
      "Processing and value-addition of minerals with advanced technologies.",
    features: [
      "High-efficiency mineral recovery",
      "Cutting-edge processing plants",
      "Environment-friendly beneficiation methods",
    ],
  },
  {
    title: "METALLURGICAL INDUSTRIES",
    icon: <FaCogs size={28} />,
    image: metallurgicalImg,
    description:
      "Innovative metallurgical solutions for industrial applications.",
    features: [
      "Expert metallurgical consulting",
      "Industrial-scale solutions",
      "Reliable and sustainable practices",
    ],
  },
  {
    title: "CEMENT PLANTS",
    icon: <FaBuilding size={28} />,
    image: cementImg,
    description: "Efficient and sustainable cement manufacturing plant projects.",
    features: [
      "Energy-efficient plant designs",
      "Sustainable raw material sourcing",
      "Turnkey project delivery",
    ],
  },
  {
    title: "SYNTHETIC ORGANIC INDUSTRIES",
    icon: <FaFlask size={28} />,
    image: organicImg,
    description: "Cutting-edge chemical and organic industry solutions.",
    features: [
      "Advanced lab testing",
      "Custom chemical solutions",
      "Regulatory compliance expertise",
    ],
  },
  {
    title: "HIGHWAY PROJECTS",
    icon: <FaRoad size={28} />,
    image: highwayImg,
    description:
      "Design and construction of modern highways ensuring safety and sustainability.",
    features: [
      "Durable and safe construction",
      "Modern design techniques",
      "Long-term maintenance support",
    ],
  },
  {
    title: "CONSTRUCTION PROJECTS",
    icon: <FaHardHat size={28} />,
    image: constructionImg,
    description: "End-to-end construction services from planning to execution.",
    features: [
      "Full project lifecycle support",
      "Experienced construction teams",
      "Compliance with global standards",
    ],
  },
  {
    title: "SOCIAL IMPACT ASSESSMENT STUDY",
    image: socialImg,
    description:
      "Comprehensive evaluation of social impact for projects.",
    features: [
      "Community engagement",
      "Impact measurement studies",
      "Sustainable development focus",
    ],
  },
  {
    title: "ENVIRONMENTAL MONITORING",
    image: environmentImg,
    description:
      "Regular monitoring to ensure sustainable environmental practices.",
    features: [
      "Air and water quality analysis",
      "Advanced monitoring equipment",
      "Comprehensive reporting",
    ],
  },
  {
    title: "FOREST CLEARANCE",
    image: forestImg,
    description:
      "Guidance and approval assistance for forest clearance requirements.",
    features: [
      "End-to-end clearance process",
      "Regulatory approval support",
      "Expert consultation",
    ],
  },
  {
    title: "CONSENT TO ESTABLISH/OPERATE",
    image: consentImg,
    description:
      "Support in obtaining regulatory approvals for operations.",
    features: [
      "Documentation support",
      "Faster approval processes",
      "Legal compliance assistance",
    ],
  },
  {
    title: "MINING PLAN",
    image: miningPlanImg,
    description:
      "Preparation of detailed mining plans adhering to legal standards.",
    features: [
      "Comprehensive mining plans",
      "Legal compliance ensured",
      "Tailored for client requirements",
    ],
  },
  {
    title: "DGPS SURVEY",
    image: dgpsImg,
    description:
      "High-precision surveys using DGPS technology.",
    features: [
      "Accurate field measurements",
      "Latest survey equipment",
      "GIS integration support",
    ],
  },
  {
    title: "REPLENISHMENT STUDY",
    image: replenishImg,
    description:
      "Analysis and planning for resource replenishment.",
    features: [
      "Detailed resource analysis",
      "Data-driven insights",
      "Future sustainability planning",
    ],
  },
  {
    title: "LEGAL COMPLIANCE",
    image: legalImg,
    description:
      "Ensuring all activities meet legal and regulatory requirements.",
    features: [
      "Up-to-date compliance checks",
      "Risk mitigation strategies",
      "Regulatory advisory services",
    ],
  },
];
