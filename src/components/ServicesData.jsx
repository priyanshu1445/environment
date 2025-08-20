// src/data/servicesData.js
import {
  FaMountain,
  FaWater,
  FaIndustry,
  FaFlask,
  FaCogs,
  FaWarehouse,
  FaRoad,
  FaBuilding
} from "react-icons/fa";
import { FaFlaskVial } from "react-icons/fa6";

// All services (main + additional)
export const allServices = [
  {
    title: "Mining Projects",
    description: "Comprehensive environmental and engineering solutions for mining operations.",
    icon: <FaMountain className="text-3xl text-white" />,
    image: "/images/mining.jpg"
  },
  {
    title: "Irrigation Projects",
    description: "Sustainable water management and irrigation system planning.",
    icon: <FaWater className="text-3xl text-white" />,
    image: "/images/irrigation.jpg"
  },
  {
    title: "Mineral Beneficiation",
    description: "Optimized processes for mineral separation and value enhancement.",
    icon: <FaFlask className="text-3xl text-white" />,
    image: "/images/mineral.jpg"
  },
  {
    title: "Metallurgical Industries",
    description: "Tailored environmental solutions for metallurgical manufacturing.",
    icon: <FaIndustry className="text-3xl text-white" />,
    image: "/images/metallurgical.jpg"
  },
  {
    title: "Cement Plants",
    description: "Eco-friendly process optimization for cement production.",
    icon: <FaCogs className="text-3xl text-white" />,
    image: "/images/cement.jpg"
  },
  {
    title: "Asbestos Plants",
    description: "Safe and compliant asbestos plant environmental services.",
    icon: <FaWarehouse className="text-3xl text-white" />,
    image: "/images/asbestos.jpg"
  },
  {
    title: "Synthetic Organic Industries",
    description: "Sustainable solutions for chemical and synthetic industries.",
    icon: <FaFlaskVial className="text-3xl text-white" />,
    image: "/images/synthetic.jpg"
  },
  {
    title: "Highway Projects",
    description: "Environmentally conscious planning for highway developments.",
    icon: <FaRoad className="text-3xl text-white" />,
    image: "/images/highway.jpg"
  },
  {
    title: "Construction Projects",
    description: "Comprehensive environmental compliance for construction sites.",
    icon: <FaBuilding className="text-3xl text-white" />,
    image: "/images/construction.jpg"
  },
  // Additional Services with default placeholder image
  {
    title: "Social Impact Assessment Study",
    description: "Comprehensive evaluation of social impact for projects.",
    image: "/images/default-service.jpg"
  },
  {
    title: "Environmental Monitoring",
    description: "Regular monitoring to ensure sustainable environmental practices.",
    image: "/images/default-service.jpg"
  },
  {
    title: "Forest Clearance",
    description: "Guidance and approval assistance for forest clearance requirements.",
    image: "/images/default-service.jpg"
  },
  {
    title: "Consent to Establish/Operate",
    description: "Support in obtaining regulatory approvals for operations.",
    image: "/images/default-service.jpg"
  },
  {
    title: "Mining Plan",
    description: "Preparation of detailed mining plans adhering to legal standards.",
    image: "/images/default-service.jpg"
  },
  {
    title: "DGPS Survey",
    description: "High-precision surveys using DGPS technology.",
    image: "/images/default-service.jpg"
  },
  {
    title: "Replenishment Study",
    description: "Analysis and planning for resource replenishment.",
    image: "/images/default-service.jpg"
  },
  {
    title: "Legal Compliance",
    description: "Ensuring all activities meet legal and regulatory requirements.",
    image: "/images/default-service.jpg"
  }
];
