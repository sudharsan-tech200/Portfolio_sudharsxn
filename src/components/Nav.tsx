import { useState } from "react";
import { useScrolled } from "../hooks";
import { D } from "../data/portfolio";
import { IconMenu, IconClose } from "./Icons";

const NAV_ITEMS = [
  { id: "about", label: "Home" },
  { id: "about-me", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "coding", label: "Coding" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Credentials" },
  { id: "contact", label: "Contact" },
] as const;

interface NavProps {
  active: string;
  onNav: (section: string) => void;
  onOpenResume?: () => void;
}

export default function Nav({ active, onNav, onOpenResume }: NavProps) {
  const scrolled = useScrolled(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: scrolled
          ? "rgba(6, 8, 19, 0.88)"
          : "rgba(6, 8, 19, 0.3)",
        backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "blur(8px)",
        borderBottom: scrolled ? "1px solid rgba(56, 189, 248, 0.2)" : "1px solid rgba(255, 255, 255, 0.05)",
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 28px",
        }}
      >
        {/* Monogram Logo */}
        <button
          onClick={() => handleLinkClick("about")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontWeight: 900,
            fontSize: 22,
            fontFamily: "var(--font-mono)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          aria-label="Sudharsan S. Home"
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "var(--cyan)",
              boxShadow: "0 0 10px var(--cyan)",
            }}
          />
          <span
            style={{
              backgroundImage: "var(--gradient-brand)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            {D.initials}
          </span>
          <span
            style={{
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              marginLeft: 4,
            }}
          >
            v2.0
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                style={{
                  background: isActive ? "rgba(56, 189, 248, 0.12)" : "transparent",
                  border: isActive ? "1px solid rgba(56, 189, 248, 0.35)" : "1px solid transparent",
                  borderRadius: 8,
                  color: isActive ? "var(--cyan)" : "var(--text-secondary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  padding: "7px 13px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {item.label}
              </button>
            );
          })}

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              style={{
                marginLeft: 6,
                padding: "7px 14px",
                borderRadius: 8,
                background: "rgba(139, 92, 246, 0.12)",
                border: "1px solid rgba(139, 92, 246, 0.35)",
                color: "var(--violet)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Resume
            </button>
          )}

          <a
            href={`mailto:${D.email}`}
            style={{
              marginLeft: 8,
              padding: "8px 18px",
              borderRadius: 8,
              backgroundImage: "var(--gradient-brand)",
              color: "#ffffff",
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 700,
              boxShadow: "0 2px 14px rgba(139, 92, 246, 0.35)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="mobile-toggle" style={{ display: "none" }}>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: 8,
              padding: 8,
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "rgba(6, 8, 19, 0.98)",
            borderBottom: "1px solid rgba(56, 189, 248, 0.3)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              style={{
                background: active === item.id ? "rgba(56, 189, 248, 0.15)" : "transparent",
                border: "none",
                borderRadius: 8,
                color: active === item.id ? "var(--cyan)" : "var(--text-secondary)",
                fontSize: 16,
                fontWeight: 600,
                padding: "10px 16px",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}

          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            {onOpenResume && (
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: 8,
                  background: "rgba(139, 92, 246, 0.15)",
                  border: "1px solid var(--violet)",
                  color: "var(--violet)",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Resume Overview
              </button>
            )}
            <a
              href={`mailto:${D.email}`}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: 8,
                backgroundImage: "var(--gradient-brand)",
                color: "#fff",
                textAlign: "center",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}

      {/* CSS media query for mobile toggle display */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
