import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NoRefundPolicy from "./components/NoRefundPolicy";
export default function App() {
  const isNoRefundPage = window.location.pathname === "/no-refund";

  return (
    <div className="min-h-screen overflow-hidden bg-midnight text-white">
      <Navbar />
      {isNoRefundPage ? (
        <NoRefundPolicy />
      ) : (
        <main>
          <Hero />
          <Services />
          <Offer />
          <Portfolio />
          <WhyChooseUs />
          <Testimonials />
          <About />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

