import { useScrolled } from "../hooks";

export const SECTIONS = [
  "About",
  "Skills",
  "Experience",
  "Certifications",
  "Contact",
] as const;

interface NavProps {
  active: string;
  onNav: (section: string) => void;
}

export default function Nav({ active, onNav }: NavProps) {
  const scrolled = useScrolled(60);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: scrolled ? "rgba(10,10,20,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 32px",
        }}
      >
        <button
          onClick={() => onNav("about")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontWeight: 800,
            fontSize: 22,
            backgroundImage: "var(--gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "var(--font-sans)",
            letterSpacing: "-1px",
          }}
          aria-label="Back to top"
        >
          PT
        </button>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {SECTIONS.map((s) => {
            const isActive = active === s.toLowerCase();
            return (
              <button
                key={s}
                onClick={() => onNav(s.toLowerCase())}
                style={{
                  background: isActive ? "rgba(124,58,237,0.15)" : "transparent",
                  border: "none",
                  borderRadius: 8,
                  color: isActive ? "var(--accent-light)" : "var(--text-dim)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
