import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <SectionHeader
        eyebrow="Verified Learning & Academics"
        title="Certifications & Education"
        subtitle="Specialized certifications from industry leaders and university degree curriculum in Electronics & Communication Engineering."
      />

      {/* Certifications Grid */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: 20 }}>📜</span>
          <h4 style={{ fontSize: 18, fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
            Industry Credentials & Coursework
          </h4>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 18,
          }}
        >
          {D.certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <GlassCard
                style={{
                  padding: "22px 24px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  border: "1px solid var(--border-subtle)",
                  transition: "all 0.25s ease",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>

                <div>
                  <h5
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      margin: "0 0 4px",
                      lineHeight: 1.4,
                    }}
                  >
                    {c.name}
                  </h5>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--cyan)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {c.org}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education Timeline Showcase */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: 20 }}>🎓</span>
          <h4 style={{ fontSize: 18, fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
            Academic Journey
          </h4>
        </div>

        {D.education.map((edu) => (
          <Reveal key={edu.degree} delay={0.1}>
            <GlassCard
              style={{
                padding: "36px 36px",
                border: "1px solid rgba(139, 92, 246, 0.35)",
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.06) 0%, rgba(14, 20, 46, 0.8) 100%)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 16,
                  marginBottom: 18,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: 18,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontFamily: "var(--font-mono)",
                      color: "var(--violet)",
                      fontWeight: 700,
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                    }}
                  >
                    COLLEGE EDUCATION
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      margin: "0 0 6px",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <div style={{ fontSize: 16, color: "var(--cyan)", fontWeight: 600 }}>
                    {edu.school} ·{" "}
                    <span style={{ color: "var(--text-muted)", fontSize: 14 }}>
                      📍 {edu.location}
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
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
                    }}
                  >
                    {edu.period}
                  </span>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      marginTop: 6,
                    }}
                  >
                    {edu.status}
                  </div>
                </div>
              </div>

              {/* Coursework highlights */}
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    marginBottom: 10,
                  }}
                >
                  Key Highlights & Coursework:
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {edu.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: 14,
                        color: "var(--text-secondary)",
                        marginBottom: 8,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "var(--violet)", fontWeight: 700 }}>▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
