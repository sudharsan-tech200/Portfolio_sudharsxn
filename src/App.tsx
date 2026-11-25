import { useState, useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatsCounter from "./components/StatsCounter";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import LeetCodeSection from "./components/LeetCodeSection";
import Experience from "./components/Experience";
import Competitions from "./components/Competitions";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

const SECTION_IDS = [
  "about",
  "about-me",
  "skills",
  "projects",
  "coding",
  "experience",
  "achievements",
  "certifications",
  "contact",
];

export default function App() {
  const [active, setActive] = useState("about");
  const [resumeOpen, setResumeOpen] = useState(false);

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.22 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (sectionId: string) => {
    setActive(sectionId);
    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh", position: "relative" }}>
      <AnimatedBackground />

      <Nav
        active={active}
        onNav={handleNav}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onNavigate={handleNav}
        />
        <StatsCounter />
        <About />
        <Skills />
        <Projects />
        <LeetCodeSection />
        <Experience />
        <Competitions />
        <Certifications />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      <Footer onBackToTop={() => handleNav("about")} />

      {/* Resume Overview Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
