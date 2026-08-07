import { useState, useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SECTION_IDS = [
  "about",
  "skills",
  "experience",
  "certifications",
  "contact",
];

export default function App() {
  const [active, setActive] = useState("about");

  // Highlight the nav item for whichever section is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (section: string) => {
    setActive(section);
    if (section === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", position: "relative" }}>
      <AnimatedBackground />
      <Nav active={active} onNav={handleNav} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
