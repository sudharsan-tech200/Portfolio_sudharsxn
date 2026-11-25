import { D } from "../data/portfolio";
import { IconGitHub, IconLinkedIn, IconLeetCode, IconMail } from "./Icons";

interface FooterProps {
  onBackToTop?: () => void;
}

export default function Footer({ onBackToTop }: FooterProps) {
  const handleScrollTop = () => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        padding: "60px 24px 40px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
        zIndex: 1,
        background: "rgba(6, 8, 19, 0.95)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
          paddingBottom: 36,
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                fontFamily: "var(--font-display)",
                backgroundImage: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              {D.fullName}
            </span>
            <span
              style={{
                fontSize: 11,
                padding: "2px 8px",
                borderRadius: 100,
                background: "rgba(16, 185, 129, 0.15)",
                color: "var(--emerald)",
                fontFamily: "var(--font-mono)",
              }}
            >
              ● SYSTEM_ONLINE
            </span>
          </div>

          <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0, maxWidth: 440 }}>
            {D.role} · Electronics & Communication Engineering student at SKCET Coimbatore.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href={D.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
            aria-label="GitHub"
          >
            <IconGitHub size={18} />
          </a>
          <a
            href={D.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>
          <a
            href={D.leetcode}
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
            aria-label="LeetCode"
          >
            <IconLeetCode size={18} />
          </a>
          <a
            href={`mailto:${D.email}`}
            style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
            aria-label="Email"
          >
            <IconMail size={18} />
          </a>

          <button
            onClick={handleScrollTop}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "var(--cyan)",
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
              marginLeft: 8,
            }}
          >
            Back to Top ↑
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "24px auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 12,
          color: "rgba(255, 255, 255, 0.25)",
          fontFamily: "var(--font-mono)",
        }}
      >
        <span>
          © {new Date().getFullYear()} {D.fullName} · Engineered with React + TypeScript
        </span>
        <span>
          Location: Coimbatore, Tamil Nadu, India · UTC+05:30
        </span>
      </div>
    </footer>
  );
}
