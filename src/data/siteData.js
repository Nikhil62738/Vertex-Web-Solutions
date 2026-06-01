import {
  FiCode,
  FiMonitor,
  FiSmartphone,
  FiShoppingCart,
  FiTool,
  FiPenTool,
  FiZap,
  FiSearch,
  FiGrid,
  FiDollarSign,
  FiHeadphones,
  FiLayers,
  FiGlobe,
  FiMail
} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Offer", href: "#offer" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  { icon: FiMonitor, title: "Website Development", description: "Premium business websites built for trust, speed, SEO, and lead generation." },
  { icon: FiCode, title: "Web Applications", description: "Custom dashboards, portals, booking systems, CRMs, and workflow tools." },
  { icon: FiSmartphone, title: "Mobile App Development", description: "Responsive mobile-first products and app experiences for modern users." },
  { icon: FiShoppingCart, title: "E-Commerce Websites", description: "Online stores with product catalogs, checkout flows, and conversion-focused UX." },
  { icon: FiTool, title: "Website Maintenance", description: "Security updates, improvements, backups, support, and monthly optimization." },
  { icon: FiPenTool, title: "UI/UX Design", description: "Clean interfaces, wireframes, design systems, and polished user journeys." }
];

export const offerItems = [
  "Website Development FREE",
  "Monthly Maintenance Rs. 799",
  "Domain & Hosting Charges Extra",
  "Technical Support Included",
  "Mobile Responsive Design"
];

export const projects = [
  {
    title: "Student Management System",
    description: "A role-based platform for managing students, attendance, marks, notices, and academic workflows.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Node.js", "MongoDB"],
    outcome: "Centralized academic operations for administrators, teachers, students, and parents.",
    timeline: "4-6 weeks",
    features: ["Student profiles", "Attendance tracking", "Marks management", "Notice board", "Role-based dashboard"],
    link: "#"
  },
  {
    title: "Civic Issues Platform",
    description: "A digital reporting system that helps citizens submit issues and helps administrators track resolutions.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Express", "Maps API"],
    outcome: "A transparent issue reporting workflow with location data and resolution tracking.",
    timeline: "5-7 weeks",
    features: ["Citizen issue reports", "Geo-tagged complaints", "Admin review panel", "Status updates", "Analytics overview"],
    link: "https://swiftcivic.netlify.app/"
  },
  {
    title: "NAAC Management System",
    description: "A structured portal for institutional data, document workflows, reports, and accreditation readiness.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    tech: ["Vite", "Firebase", "Tailwind"],
    outcome: "A cleaner system for collecting, organizing, and reviewing accreditation documents.",
    timeline: "6-8 weeks",
    features: ["Criteria-wise document storage", "Faculty submissions", "Review workflows", "Report generation", "Secure access"],
    link: "https://naacfile.netlify.app/login"
  },
  {
    title: "Business Website",
    description: "A premium company website with service pages, lead capture, WhatsApp contact, and SEO foundations.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Tailwind", "SEO"],
    outcome: "A professional online presence designed to convert visitors into qualified inquiries.",
    timeline: "1-3 weeks",
    features: ["Landing page", "Service sections", "Contact form", "WhatsApp CTA", "SEO setup"],
    link: "https://nikhilchopade.netlify.app/"
  },
  {
    title: "Cinematographer Portfolio",
    description: "A cinematic portfolio website for showcasing reels, client work, photography, services, and booking inquiries.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Tailwind", "Framer Motion"],
    outcome: "A premium visual portfolio that helps creative professionals look credible and convert visitors into bookings.",
    timeline: "1-2 weeks",
    features: ["Showreel section", "Project gallery", "Service packages", "Client testimonials", "Booking contact form"],
    link: "https://cinesoul45.netlify.app/"
  }
];

export const reasons = [
  { icon: FiLayers, title: "Modern Design", description: "Startup-grade interfaces that make your business look credible from the first click." },
  { icon: FiZap, title: "Fast Performance", description: "Optimized builds, clean code, and smooth experiences across all devices." },
  { icon: FiSearch, title: "SEO Friendly", description: "Strong page structure, metadata, performance, and search-ready content foundations." },
  { icon: FiSmartphone, title: "Mobile Responsive", description: "Every section is designed to look polished on phones, tablets, and desktops." },
  { icon: FiDollarSign, title: "Affordable Pricing", description: "Clear pricing and practical plans built for startups and growing businesses." },
  { icon: FiHeadphones, title: "Ongoing Support", description: "Maintenance, updates, technical guidance, and improvements after launch." }
];

export const testimonials = [
  {
    name: "Soham Kale",
    role: "Founder, Edutech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote: "Vertex Web Solutions gave our institution a modern digital presence and a smoother inquiry flow. The website feels premium and performs beautifully."
  },
  {
    name: "Amol Kulkarni",
    role: "Professor, Dbatu",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    quote: "The team understood our business goals quickly. Our e-commerce site is fast, clean, and has made it easier for customers to trust our brand."
  },
  {
    name: "Sameer Patil",
    role: "Director, CivicTech Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "Professional communication, strong design sense, and reliable delivery. Vertex built exactly the kind of platform we needed."
  }
];

export const stats = [
  { value: "25+", label: "Digital products planned" },
  { value: "99%", label: "Responsive UI coverage" },
  { value: "Rs. 799", label: "Maintenance offer" },
  { value: "7 days", label: "Typical first preview" }
];

export const footerSocials = [
  { icon: FiGlobe, label: "Website", href: "#" },
  { icon: FiMail, label: "Email", href: "mailto:vertexwebsolutions@gmail.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/vertex.web.solutions?igsh=MTd5b3FmNTZneW56eA==" }
];
