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
import environmentImg from "../assets/2525252.png";
import forestImg from "../assets/212121.jpg";
import consentImg from "../assets/00000.jpg";
import monitoringImg from "../assets/00001.jpg";
import socialImg from "../assets/00002.jpg";
import cgwaImg from "../assets/00003.jpg";
import complianceImg from "../assets/00004.jpg";
import miningPlanImg from "../assets/12.jpg";
import dgpsImg from "../assets/2.jpg";
import replenishImg from "../assets/00006.jpg";
import riskImg from "../assets/00007.webp";
import cement from "../assets/1.jpg"
import highway from "../assets/7.jpg"
import construction from "../assets/3.jpg"
import mineral from "../assets/11.jpg"
import metalluragical from "../assets/10.jpg"
import irrigation from "../assets/8.jpg"

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
      "These are some of the best services we provide to our clients.",
    features: [
     "MINNING PROJECTS",
      "IRRIGATION PROJECTS",
      "MINERAL BENEFICIATION",
      "METALLURGICAL INDUSTRIES",
      "CEMENT PLANTS",
      "SYNTHETIC ORGANIC INDUSTRIES",
      "HIGHWAY PROJECTS",
      "CONSTRUCTION PROJECTS",
      "ASBESTOS PLANTS",
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
   "Our professional forest management expertise helps you in meeting the regulatory requirements of the projects involving diversion of forest land, conforming to the guidelines issued by the Ministry of Environment, Forest and Climate Change (MoEF & CC) under Forest (Conservation) Act, 1980."
,
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
      "Skilled Enviro Services provides consultancy service for obtaining Consent to Establish/Operate (CTE/CTO) for various private and public companies from state pollution control boards. Our professionals have clear understanding of the requirements for obtaining CTE/CTO and the process.",
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
     "Skilled Enviro Services aims to provide an effective, realistic and robust social & environment management plan for the project which manifolds the social and environmental feasibility of the project",
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
   "Skilled Enviro Services aims to provide an effective, realistic and robust social & environment management plan for the project which manifolds the social and environmental feasibility of the project",
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
      "Skilled Enviro Services provides consultancy service for obtaining CGWA clearances. Our professional expertise helps you in meeting the regulatory requirements of the projects.",
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
      "As per the EIA notification, 2006 a mandatory requirement for the project holders is to submit half- yearly compliance reports in respect of the stipulated prior environmental clearance terms and conditions to the regulatory authority. Skilled Enviro Services helps you in meeting the regulatory requirements of the projects Act, 1980.",
      "Need based Corporate Environment Responsibility",
      "CER COMPLIANCE RECORD:",
      "LEGAL COMPLIANCE",
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
     "Under Mineral Conservation & Development Rules, the lessees have to prepare and submit the mining plans, Skilled Enviro Services have qualified persons who have vast experience of preparing scientific and systematic mining plans in accordance with the regulatory requirements.",
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
      "Differential Global Positioning System (DGPS) is an enhancement to Global Positioning System that provides improved location accuracy, Skilled Enviro Services is a leading service provider of DGPS Survey and all type of land survey",
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
     "The Union Ministry of Environment has issued the Enforcement and Monitoring Guidelines for Sand Mining 2020 (the “2020 Guidelines”), which unequivocally recognize the importance of a replenishment study. Skilled Enviro Services have Experts who have vast experience of preparing scientific replenishment study in accordance with the regulatory requirements.",
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
      "oHazop Studies - We conduct HAZOP study for systematic examination of planned, existing process & operations which may lead risks to personnel, equipment or operation.",
      "oHazop Studies - We conduct HAZOP study for systematic examination of planned, existing process & operations which may lead risks to personnel, equipment or operation.",
      "oHAZID Study - HAZID study and trainings which focuses on facility hazards",
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
    image: irrigation,
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
    image: mineral,
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
    image: metalluragical,
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
    image: cement,
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
    image: highway,
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
    image: construction,
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
