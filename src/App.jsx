import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Pricing from "./components/Pricing.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import About from "./components/About.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import NoRefundPolicy from "./components/NoRefundPolicy.jsx";

export default function App() {
  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (typeof window !== "undefined" && window.location.pathname === "/no-refund") {
    return <NoRefundPolicy />;
  }

  const blob2Style = { animationDelay: "3s" };
  const blob3Style = { animationDelay: "6s" };

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-electric/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-violet/25 blur-3xl animate-blob" style={blob2Style} />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan/20 blur-3xl animate-blob" style={blob3Style} />
      </div>

      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
