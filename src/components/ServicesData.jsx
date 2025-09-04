// ServicesData.js
import {
  FaLeaf,
  FaTree,
  FaIndustry,
  FaTint,
  FaUsers,
  FaCheckCircle,
  FaClipboardCheck,
  FaProjectDiagram,
  FaPaperPlane,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaMountain,
  FaWater,
  FaCogs,
  FaBuilding,
  FaFlask,
  FaRoad,
  FaHardHat,
} from "react-icons/fa";

// 📌 Import local images
import environmentImg from "../assets/6.jpg";
import forestImg from "../assets/6.jpg";
import consentImg from "../assets/10.jpg";
import monitoringImg from "../assets/11.jpg";
import socialImg from "../assets/15.jpg";
import cgwaImg from "../assets/8.jpg";
import complianceImg from "../assets/9.jpg";
import miningPlanImg from "../assets/13.jpg";
import dgpsImg from "../assets/2.jpg";
import replenishImg from "../assets/14.jpg";
import riskImg from "../assets/12.jpg";

// 🔧 Robust slug generator (slashes, ampersands, multiple hyphens handled)
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[\/&]+/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/^-|-$/g, "");

// ✅ Single source of truth (Core + Additional) with categories
export const allServices = [
  // -------- Core Services --------
  {
    category: "core",
    title: "ENVIRONMENT IMPACT ASSESSMENT AND MANAGEMENT PLANS",
    urlTitle: "environment-impact-assessment-and-management-plans",
    slug: slugify("ENVIRONMENT IMPACT ASSESSMENT AND MANAGEMENT PLANS"),
    icon: <FaLeaf size={28} />,
    image: environmentImg,
    description:
      "Detailed analysis and management strategies to minimize environmental impacts of proposed projects.",
    features: [
      "Comprehensive EIA reports",
      "Sustainable management plans",
      "Regulatory compliance ensured",
    ],
  },
  {
    category: "core",
    title: "FOREST CLEARANCE",
    urlTitle: "forest-clearance",
    slug: slugify("FOREST CLEARANCE"),
    icon: <FaTree size={28} />,
    image: forestImg,
    description:
      "Assistance in obtaining statutory forest clearance approvals for development projects.",
    features: [
      "End-to-end clearance process",
      "Regulatory approval support",
      "Expert consultation",
    ],
  },
  {
    category: "core",
    title: "CONSENT TO ESTABLISH OPERATE",
    urlTitle: "consent-to-establish-operate",
    slug: slugify("CONSENT TO ESTABLISH OPERATE"),
    icon: <FaIndustry size={28} />,
    image: consentImg,
    description:
      "Guidance and documentation for CTE and CTO approvals to set up and operate industries.",
    features: [
      "Documentation support",
      "Faster approval processes",
      "Legal compliance assistance",
    ],
  },
  {
    category: "core",
    title: "ENVIRONMENTAL MONITORING",
    urlTitle: "environmental-monitoring",
    slug: slugify("ENVIRONMENTAL MONITORING"),
    icon: <FaTint size={28} />,
    image: monitoringImg,
    description:
      "Regular monitoring of air, water, noise, and soil quality to ensure compliance with environmental norms.",
    features: [
      "Air, water, and soil quality analysis",
      "Advanced monitoring equipment",
      "Comprehensive reporting",
    ],
  },
  {
    category: "core",
    title: "SOCIAL IMPACT ASSESSMENT STUDY",
    urlTitle: "social-impact-assessment-study",
    slug: slugify("SOCIAL IMPACT ASSESSMENT STUDY"),
    icon: <FaUsers size={28} />,
    image: socialImg,
    description:
      "Evaluating and addressing the social impacts of development projects on communities.",
    features: [
      "Community engagement",
      "Impact measurement studies",
      "Sustainable development focus",
    ],
  },
  {
    category: "core",
    title: "CGWA CLEARANCE",
    urlTitle: "cgwa-clearance",
    slug: slugify("CGWA CLEARANCE"),
    icon: <FaCheckCircle size={28} />,
    image: cgwaImg,
    description:
      "Clearance and compliance services related to groundwater usage as per CGWA guidelines.",
    features: [
      "Groundwater usage assessment",
      "Clearance application support",
      "Regulatory compliance",
    ],
  },
  {
    category: "core",
    title: "HALF YEARLY COMPLIANCE TO EC / CTE & CTO CONDITIONS",
    urlTitle: "half-yearly-compliance-to-ec-cte-cto-conditions",
    slug: slugify("HALF YEARLY COMPLIANCE TO EC / CTE & CTO CONDITIONS"),
    icon: <FaClipboardCheck size={28} />,
    image: complianceImg,
    description:
      "Preparation and submission of compliance reports for Environmental Clearance, CTE, and CTO.",
    features: [
      "Need based Corporate Environment Responsibility",
      "CER Compliance Record",
      "Detailed compliance documentation",
    ],
  },
  {
    category: "core",
    title: "MINING PLAN",
    urlTitle: "mining-plan",
    slug: slugify("MINING PLAN"),
    icon: <FaProjectDiagram size={28} />,
    image: miningPlanImg,
    description:
      "Preparation of mining plans in compliance with statutory requirements.",
    features: [
      "Comprehensive mining plans",
      "Legal compliance ensured",
      "Tailored for client requirements",
    ],
  },
  {
    category: "core",
    title: "DRONE / DGPS SURVEY",
    urlTitle: "drone-dgps-survey",
    slug: slugify("DRONE / DGPS SURVEY"),
    icon: <FaPaperPlane size={28} />,
    image: dgpsImg,
    description:
      "High-precision surveys for land mapping and monitoring using drone/DGPS technology.",
    features: [
      "Accurate field measurements",
      "Latest survey equipment",
      "GIS integration support",
    ],
  },
  {
    category: "core",
    title: "REPLENISHMENT STUDY",
    urlTitle: "replenishment-study",
    slug: slugify("REPLENISHMENT STUDY"),
    icon: <FaMapMarkedAlt size={28} />,
    image: replenishImg,
    description:
      "Scientific assessment of natural resource replenishment for sustainable project planning.",
    features: [
      "Detailed resource analysis",
      "Data-driven insights",
      "Future sustainability planning",
    ],
  },
  {
    category: "core",
    title: "RISK ASSESSMENT",
    urlTitle: "risk-assessment",
    slug: slugify("RISK ASSESSMENT"),
    icon: <FaExclamationTriangle size={28} />,
    image: riskImg,
    description:
      "Systematic identification and evaluation of potential hazards with mitigation measures.",
    features: [
      "Hazard identification",
      "Impact evaluation",
      "Mitigation strategies",
    ],
  },

  // -------- Additional Services --------
  {
    category: "additional",
    title: "MINING PROJECTS",
    urlTitle: "mining-projects",
    slug: slugify("MINING PROJECTS"),
    icon: <FaMountain size={28} />,
    image: miningPlanImg,
    description:
      "Comprehensive solutions for mining infrastructure and operations.",
    features: [
      "Infrastructure planning",
      "End-to-end project execution",
      "Regulatory clearance support",
    ],
  },
  {
    category: "additional",
    title: "IRRIGATION PROJECTS",
    urlTitle: "irrigation-projects",
    slug: slugify("IRRIGATION PROJECTS"),
    icon: <FaWater size={28} />,
    image: monitoringImg,
    description: "Design and development of efficient irrigation systems.",
    features: [
      "Smart irrigation design",
      "Water conservation focus",
      "Sustainable solutions",
    ],
  },
  {
    category: "additional",
    title: "MINERAL BENEFICIATION",
    urlTitle: "mineral-beneficiation",
    slug: slugify("MINERAL BENEFICIATION"),
    icon: <FaIndustry size={28} />,
    image: consentImg,
    description:
      "Processes to improve the economic value of extracted minerals.",
    features: [
      "Process optimization",
      "Value enhancement",
      "Industry-compliant methods",
    ],
  },
  {
    category: "additional",
    title: "METALLURGICAL INDUSTRIES",
    urlTitle: "metallurgical-industries",
    slug: slugify("METALLURGICAL INDUSTRIES"),
    icon: <FaCogs size={28} />,
    image: complianceImg,
    description: "Engineering support for metallurgical and process industries.",
    features: [
      "Industry-specific solutions",
      "Compliance-focused design",
      "Operational efficiency",
    ],
  },
  {
    category: "additional",
    title: "CEMENT PLANTS",
    urlTitle: "cement-plants",
    slug: slugify("CEMENT PLANTS"),
    icon: <FaBuilding size={28} />,
    image: environmentImg,
    description: "Turnkey solutions for cement plant setup and expansion.",
    features: [
      "Complete project setup",
      "Expansion support",
      "Regulatory assistance",
    ],
  },
  {
    category: "additional",
    title: "SYNTHETIC ORGANIC INDUSTRIES",
    urlTitle: "synthetic-organic-industries",
    slug: slugify("SYNTHETIC ORGANIC INDUSTRIES"),
    icon: <FaFlask size={28} />,
    image: socialImg,
    description: "Consultancy and solutions for chemical and organic industries.",
    features: [
      "Process design",
      "Sustainability compliance",
      "Safety-focused solutions",
    ],
  },
  {
    category: "additional",
    title: "HIGHWAY PROJECTS",
    urlTitle: "highway-projects",
    slug: slugify("HIGHWAY PROJECTS"),
    icon: <FaRoad size={28} />,
    image: forestImg,
    description: "Development of modern highways and expressways.",
    features: [
      "Highway planning",
      "Execution and monitoring",
      "Eco-friendly design",
    ],
  },
  {
    category: "additional",
    title: "CONSTRUCTION PROJECTS",
    urlTitle: "construction-projects",
    slug: slugify("CONSTRUCTION PROJECTS"),
    icon: <FaHardHat size={28} />,
    image: dgpsImg,
    description: "End-to-end solutions for large-scale construction works.",
    features: [
      "Project design",
      "Execution with safety focus",
      "Compliance assurance",
    ],
  },
];

// 🔁 Useful helpers (optional)
export const coreServices = allServices.filter((s) => s.category === "core");
export const additionalServices = allServices.filter(
  (s) => s.category === "additional"
);
