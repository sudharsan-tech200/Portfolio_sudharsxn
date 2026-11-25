import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { IconBriefcase, IconExternal } from "./Icons";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <SectionHeader
        eyebrow="Industry Immersion"
        title="Internship Experience"
        subtitle="Practical engineering exposure to industrial manufacturing, electrical systems, and connected IoT telemetry."
      />

      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
        {D.experience.map((exp, idx) => (
          <Reveal key={exp.company} delay={idx * 0.15}>
            <GlassCard
              style={{
                padding: "40px 36px",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                background:
                  "linear-gradient(135deg, rgba(56, 189, 248, 0.04) 0%, rgba(14, 20, 46, 0.8) 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top Accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background:
                    idx === 0
                      ? "linear-gradient(90deg, #38BDF8, #8B5CF6)"
                      : "linear-gradient(90deg, #8B5CF6, #10B981)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 16,
                  marginBottom: 20,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: 20,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--cyan)",
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    <IconBriefcase size={16} />
                    <span>INTERNSHIP VERIFIED</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(24px, 3vw, 30px)",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.5px",
                      margin: "0 0 6px",
                    }}
                  >
                    {exp.role} – {exp.company}
                  </h3>

                  <div style={{ fontSize: 15, color: "var(--text-secondary)", fontWeight: 500, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
                    <span>📍 {exp.location}</span>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          color: "var(--cyan)",
                          textDecoration: "none",
                          fontSize: 13,
                          fontFamily: "var(--font-mono)",
                          fontWeight: 600,
                        }}
                      >
                        <span>{exp.website.replace("http://", "")}</span>
                        <IconExternal size={13} color="var(--cyan)" />
                      </a>
                    )}
                  </div>
                </div>

                <span
                  style={{
                    padding: "6px 16px",
                    borderRadius: 100,
                    background: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "var(--emerald)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  ✓ {exp.period}
                </span>
              </div>

              {/* Bullet Points */}
              <div style={{ marginBottom: 26 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    marginBottom: 14,
                    fontWeight: 600,
                  }}
                >
                  Key Contributions & Engineering Takeaways:
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {exp.points.map((pt, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: 14,
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        marginBottom: 12,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--cyan)",
                          lineHeight: 1.5,
                          fontSize: 14,
                          flexShrink: 0,
                          fontWeight: 700,
                        }}
                      >
                        ▹
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills/Domains applied if present */}
              {exp.skills && exp.skills.length > 0 && (
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    Technologies & Concepts Explored:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          padding: "5px 12px",
                          borderRadius: 8,
                          fontSize: 12,
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
