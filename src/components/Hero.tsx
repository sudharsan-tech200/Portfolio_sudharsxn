import { useState, useEffect } from "react";
import { D } from "../data/portfolio";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const enter = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
    transition: `all 0.65s cubic-bezier(.4,0,.2,1) ${delay}s`,
  });

  const btnBase = {
    padding: "14px 32px",
    borderRadius: 12,
    textDecoration: "none",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: 15,
  };

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "120px 24px 80px",
      }}
    >
      <div style={{ maxWidth: 900, width: "100%", position: "relative", zIndex: 1 }}>
        {/* Availability badge */}
        <div style={{ ...enter(0.2), marginBottom: 32 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 100,
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.2)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--accent-3)",
              letterSpacing: 1.5,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent-3)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            OPEN TO WORK
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            ...enter(0.3),
            fontWeight: 900,
            margin: "0 0 8px",
            fontSize: "clamp(44px, 7vw, 80px)",
            lineHeight: 1,
            letterSpacing: "-3px",
            color: "var(--text)",
          }}
        >
          {D.name}
          <br />
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, #7C3AED 0%, #3B82F6 50%, #10B981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {D.surname}
          </span>
        </h1>

        {/* Role */}
        <p
          style={{
            ...enter(0.45),
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "var(--accent-light)",
            margin: "16px 0 20px",
            fontWeight: 500,
          }}
        >
          {D.role}
        </p>

        {/* Tagline */}
        <p
          style={{
            ...enter(0.55),
            fontSize: 17,
            color: "var(--text-dim)",
            maxWidth: 600,
            lineHeight: 1.8,
            margin: "0 0 40px",
          }}
        >
          {D.tagline}
        </p>

        {/* CTAs */}
        <div
          style={{
            ...enter(0.65),
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 60,
          }}
        >
          <a
            href={`mailto:${D.email}`}
            style={{
              ...btnBase,
              backgroundImage: "var(--gradient)",
              color: "#fff",
              boxShadow: "0 4px 24px rgba(124,58,237,0.3)",
            }}
          >
            Let's Talk →
          </a>
          <a
            href={D.github}
            target="_blank"
            rel="noreferrer"
            style={{
              ...btnBase,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text)",
            }}
          >
            GitHub ↗
          </a>
          <a
            href={D.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              ...btnBase,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text)",
            }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats */}
        <div style={{ ...enter(0.8), display: "flex", gap: 48, flexWrap: "wrap" }}>
          {D.stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  backgroundImage: "var(--gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-faint)",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
