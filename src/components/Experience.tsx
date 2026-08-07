import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}
    >
      <SectionHeader
        eyebrow="Career Path"
        title="Where I've Worked"
        subtitle="My journey from intern to associate in under two years."
      />

      <div style={{ position: "relative" }}>
        {/* Timeline spine */}
        <div
          style={{
            position: "absolute",
            left: 20,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundImage:
              "linear-gradient(180deg, #7C3AED 0%, rgba(124,58,237,0.05) 100%)",
          }}
        />

        {D.experience.map((exp, i) => (
          <Reveal key={i} delay={i * 0.15}>
            <div style={{ display: "flex", gap: 32, marginBottom: 40, position: "relative" }}>
              {/* Node */}
              <div
                style={{
                  flexShrink: 0,
                  width: 42,
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 24,
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundImage: exp.current ? "var(--gradient)" : "none",
                    background: exp.current ? undefined : "#1a1a2e",
                    border: `3px solid ${
                      exp.current ? "var(--accent)" : "rgba(124,58,237,0.35)"
                    }`,
                    boxShadow: exp.current ? "0 0 20px rgba(124,58,237,0.4)" : "none",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </div>

              <GlassCard style={{ padding: 32, flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--text)",
                        margin: "0 0 6px",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span style={{ fontSize: 14, color: "var(--text-faint)" }}>
                      {exp.company} · {exp.location}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      padding: "6px 16px",
                      borderRadius: 100,
                      background: exp.current
                        ? "rgba(124,58,237,0.15)"
                        : "rgba(255,255,255,0.04)",
                      color: exp.current ? "var(--accent-light)" : "var(--text-faint)",
                      border: `1px solid ${
                        exp.current ? "rgba(124,58,237,0.25)" : "var(--border)"
                      }`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {exp.points.map((point, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: j < exp.points.length - 1 ? 12 : 0,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontSize: 10,
                        lineHeight: "24px",
                        flexShrink: 0,
                      }}
                    >
                      ▸
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.7,
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </GlassCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
