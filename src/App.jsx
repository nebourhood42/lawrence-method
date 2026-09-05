import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Expertise from "./components/Expertise";
import Results from "./components/Results";
import Industries from "./components/Industries";
import LawrenceMethod from "./components/LawrenceMethod";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import Difference from "./components/Difference";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedService, setSelectedService] = useState("");

  const handleSelect = (value) => {
    setSelectedService(value);
    const target = document.getElementById("contact");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grain min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Expertise />
        <Results />
        <Industries />
        <LawrenceMethod />
        <Experience />
        <CaseStudies />
        <Difference />
        <About />
        <FinalCTA onSelect={handleSelect} />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
