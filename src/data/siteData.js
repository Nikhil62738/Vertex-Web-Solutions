import {
  FiCode,
  FiMonitor,
  FiSmartphone,
  FiShoppingCart,
  FiTool,
  FiPenTool,
  FiZap,
  FiSearch,
  FiDollarSign,
  FiHeadphones,
  FiLayers,
  FiGlobe,
  FiMail,
  FiClipboard,
  FiPlay,
  FiTrendingUp
} from "react-icons/fi";
import { FaInstagram, FaReact, FaNodeJs, FaFigma, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiVite, SiFirebase, SiVercel } from "react-icons/si";

// Nav uses keys; labels come from i18n
export const navKeys = [
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "portfolio", href: "#portfolio" },
  { key: "pricing", href: "#pricing" },
  { key: "whyUs", href: "#why-us" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" }
];

export const serviceIcons = [FiMonitor, FiCode, FiSmartphone, FiShoppingCart, FiTool, FiPenTool];
export const processIcons = [FiClipboard, FiPenTool, FiCode, FiTrendingUp];
export const reasonIcons = [FiLayers, FiZap, FiSearch, FiSmartphone, FiDollarSign, FiHeadphones];

export const techStack = [
  { icon: FaReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiVite, label: "Vite" },
  { icon: FaFigma, label: "Figma" },
  { icon: FaGithub, label: "GitHub" },
  { icon: SiVercel, label: "Vercel" }
];

export const projects = [
  {
    title: "Student Management System",
    description: "A role-based platform for managing students, attendance, marks, notices and academic workflows.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Node.js", "MongoDB"],
    outcome: "Centralized academic operations for administrators, teachers, students and parents.",
    timeline: "4-6 weeks",
    features: ["Student profiles", "Attendance tracking", "Marks management", "Notice board", "Role-based dashboard"],
    link: "#"
  },
  {
    title: "Civic Issues Platform",
    description: "A digital reporting system that helps citizens submit issues and admins track resolutions.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Express", "Maps API"],
    outcome: "A transparent issue reporting workflow with location data and resolution tracking.",
    timeline: "5-7 weeks",
    features: ["Citizen issue reports", "Geo-tagged complaints", "Admin review panel", "Status updates", "Analytics overview"],
    link: "https://swiftcivic.netlify.app/"
  },
  {
    title: "NAAC Management System",
    description: "A structured portal for institutional data, document workflows, reports and accreditation readiness.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    tech: ["Vite", "Firebase", "Tailwind"],
    outcome: "A cleaner system for collecting, organizing and reviewing accreditation documents.",
    timeline: "6-8 weeks",
    features: ["Criteria-wise document storage", "Faculty submissions", "Review workflows", "Report generation", "Secure access"],
    link: "https://naacfile.netlify.app/login"
  },
  {
    title: "Business Website",
    description: "A premium company website with service pages, lead capture, WhatsApp contact and SEO foundations.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Tailwind", "SEO"],
    outcome: "A professional online presence designed to convert visitors into qualified inquiries.",
    timeline: "1-3 weeks",
    features: ["Landing page", "Service sections", "Contact form", "WhatsApp CTA", "SEO setup"],
    link: "https://nikhilchopade.netlify.app/"
  },
  {
    title: "Cinematographer Portfolio",
    description: "A cinematic portfolio website for showcasing reels, client work, photography, services and booking inquiries.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Tailwind", "Framer Motion"],
    outcome: "A premium visual portfolio that converts visitors into bookings.",
    timeline: "1-2 weeks",
    features: ["Showreel section", "Project gallery", "Service packages", "Client testimonials", "Booking contact form"],
    link: "https://cinesoul45.netlify.app/"
  }
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
    quote: "The team understood our goals quickly. The site is fast, clean and has made it easier for users to trust the platform."
  },
  {
    name: "Sameer Patil",
    role: "Director, CivicTech Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "Professional communication, strong design sense and reliable delivery. Vertex built exactly the kind of platform we needed."
  }
];

export const footerSocials = [
  { icon: FiGlobe, label: "Website", href: "#" },
  { icon: FiMail, label: "Email", href: "mailto:vertexwebsolutions@gmail.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/vertex.web.solutions?igsh=MTd5b3FmNTZneW56eA==" }
];

export const WHATSAPP_URL = "https://wa.me/91XXXXXXXXXX";
export const EMAIL = "vertexwebsolutions@gmail.com";

// Google Apps Script Web App URL that records contact form submissions to a Google Sheet.
// See SETUP-SHEETS.md for setup. Leave empty to fall back to a WhatsApp-only flow.
export const SHEETS_WEBHOOK_URL = import.meta.env.VITE_SHEETS_URL || "";
