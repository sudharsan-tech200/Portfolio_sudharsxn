import { useState, useEffect } from "react";
import { D } from "../data/portfolio";
import {
  IconGitHub,
  IconLinkedIn,
  IconLeetCode,
  IconMail,
  IconChevronDown,
  IconCode,
} from "./Icons";

interface HeroProps {
  onOpenResume?: () => void;
  onNavigate?: (id: string) => void;
}

export default function Hero({ onOpenResume, onNavigate }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeRole, setFadeRole] = useState(true);

  // Cycling animated headline
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % D.rolesCycling.length);
        setFadeRole(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "140px 24px 70px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1240, width: "100%", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Left Column: Core Identity, Typography & Actions */}
          <div style={{ zIndex: 2 }}>
            {/* Live Status Badge */}
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "7px 18px",
                  borderRadius: 100,
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.28)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--emerald)",
                  letterSpacing: 1.2,
                  fontWeight: 600,
                  boxShadow: "0 4px 20px rgba(16, 185, 129, 0.12)",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--emerald)",
                    boxShadow: "0 0 10px var(--emerald)",
                    animation: "pulseGlow 2s infinite ease-in-out",
                  }}
                />
                {D.availability}
              </span>
            </div>

            {/* Main Name & Identity (Outfit ExtraBold) */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(46px, 7vw, 84px)",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
                margin: "0 0 16px",
              }}
            >
              {D.name}{" "}
              <span
                style={{
                  backgroundImage: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                {D.surname}
              </span>
            </h1>

            {/* Cycling Dynamic Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
                minHeight: 40,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  color: "var(--cyan)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  opacity: fadeRole ? 1 : 0,
                  transform: fadeRole ? "translateY(0)" : "translateY(8px)",
                  display: "inline-block",
                }}
              >
                &gt; {D.rolesCycling[roleIndex]}
              </span>
              <span
                style={{
                  width: 3,
                  height: 24,
                  background: "var(--cyan)",
                  animation: "pulseGlow 1s infinite",
                  display: "inline-block",
                  boxShadow: "0 0 8px var(--cyan)",
                }}
              />
            </div>

            {/* Powerful Headline (Outfit Bold) */}
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(19px, 2.3vw, 25px)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.35,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              "{D.headline}"
            </p>

            {/* Bio Description (Outfit Regular) */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(14px, 1.3vw, 16px)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: 580,
                marginBottom: 34,
                letterSpacing: "-0.01em",
              }}
            >
              {D.tagline}
            </p>

            {/* Action Row / CTAs */}
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: 36,
              }}
            >
              <button
                onClick={() => handleScrollTo("projects")}
                style={{
                  padding: "14px 28px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  backgroundImage: "var(--gradient-brand)",
                  color: "#ffffff",
                  fontFamily: "var(--font-heading)",
                  fontSize: 14,
                  fontWeight: 700,
                  boxShadow: "0 8px 28px rgba(139, 92, 246, 0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.25s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 35px rgba(56, 189, 248, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(139, 92, 246, 0.4)";
                }}
              >
                <span>View Projects</span>
                <span style={{ fontSize: 16 }}>↓</span>
              </button>

              <a
                href={`mailto:${D.email}`}
                style={{
                  padding: "13px 24px",
                  borderRadius: 12,
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontFamily: "var(--font-heading)",
                  fontSize: 14,
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "var(--cyan)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <IconMail size={16} />
                <span>Let's Talk</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  style={{
                    padding: "13px 22px",
                    borderRadius: 12,
                    border: "1px solid rgba(139, 92, 246, 0.35)",
                    background: "rgba(139, 92, 246, 0.09)",
                    backdropFilter: "blur(12px)",
                    color: "var(--violet)",
                    cursor: "pointer",
                    fontFamily: "var(--font-heading)",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(139, 92, 246, 0.2)";
                    e.currentTarget.style.borderColor = "var(--violet)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(139, 92, 246, 0.09)";
                    e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.35)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <IconCode size={16} />
                  <span>Resume Overview</span>
                </button>
              )}
            </div>

            {/* Quick Profile Connection Badges */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: 1.5 }}>
                CONNECT:
              </span>
              <a
                href={D.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 100,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "var(--text-primary)",
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--cyan)";
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                }}
              >
                <IconGitHub size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={D.leetcode}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 100,
                  background: "rgba(255, 161, 22, 0.08)",
                  border: "1px solid rgba(255, 161, 22, 0.25)",
                  color: "#FFA116",
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 161, 22, 0.16)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 161, 22, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <IconLeetCode size={14} />
                <span>LeetCode (450+)</span>
              </a>

              <a
                href={D.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 100,
                  background: "rgba(10, 102, 194, 0.08)",
                  border: "1px solid rgba(10, 102, 194, 0.25)",
                  color: "#60A5FA",
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(10, 102, 194, 0.16)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(10, 102, 194, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <IconLinkedIn size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Minimal, Standalone Portrait with Ambient Lighting & Halo (No Floating Badges) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "min(460px, 92vw)",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              {/* Layer 1: Ambient Multi-Layer Radial Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "105%",
                  height: "90%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(56, 189, 248, 0.32) 0%, rgba(139, 92, 246, 0.36) 42%, rgba(16, 185, 129, 0.12) 70%, transparent 85%)",
                  filter: "blur(55px)",
                  opacity: 0.85,
                  zIndex: 0,
                  pointerEvents: "none",
                  animation: "pulseGlow 5s ease-in-out infinite",
                }}
              />

              {/* Layer 2: Subtle Futuristic Orbit / Halo Rings */}
              <div
                style={{
                  position: "absolute",
                  top: "8%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "82%",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  border: "1px dashed rgba(56, 189, 248, 0.2)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "3%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "95%",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  border: "1px solid rgba(139, 92, 246, 0.12)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              {/* Layer 3: Pure Cutout Portrait with Smooth Bottom Fade and Ambient Silhouette Shadow */}
              <div
                className="animate-portrait"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: 440,
                  display: "flex",
                  justifyContent: "center",
                  // Bottom fade into background
                  maskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <img
                  src={D.profileImage}
                  alt={D.fullName}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 520,
                    objectFit: "contain",
                    display: "block",
                    filter:
                      "drop-shadow(0 20px 40px rgba(56, 189, 248, 0.22)) drop-shadow(0 30px 65px rgba(139, 92, 246, 0.32))",
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div
          onClick={() => handleScrollTo("stats")}
          style={{
            marginTop: 70,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            gap: 6,
            opacity: 0.75,
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.75";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              letterSpacing: 1.5,
            }}
          >
            SCROLL TO EXPLORE
          </span>
          <div className="animate-float">
            <IconChevronDown size={18} color="var(--cyan)" />
          </div>
        </div>
      </div>
    </section>
  );
}
