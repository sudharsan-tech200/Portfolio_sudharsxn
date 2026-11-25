import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { IconTerminal } from "./Icons";

export default function About() {
  return (
    <section
      id="about-me"
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <SectionHeader
        eyebrow="The Story Behind The Code"
        title="About Me"
        subtitle="Bridging core electronics systems with modern software architecture, algorithmic rigor, and scalable full-stack web applications."
      />

      {/* Modern Bento Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          marginBottom: 32,
        }}
      >
        {/* Card 1: Core Bio / The Engineering Mindset */}
        <Reveal delay={0.1}>
          <GlassCard
            style={{
              padding: 36,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              background:
                "linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(14, 20, 46, 0.75) 100%)",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--cyan)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                <IconTerminal size={16} />
                <span>The Engineering Philosophy</span>
              </div>
              <h3
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1.3,
                  marginBottom: 16,
                  letterSpacing: "-0.5px",
                }}
              >
                "Code is more than syntax — it is structured reasoning to solve human problems."
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: 16,
                }}
              >
                I am a third-year <strong>Electronics and Communication Engineering</strong> student at{" "}
                <span style={{ color: "var(--cyan)", fontWeight: 600 }}>
                  Sri Krishna College of Engineering and Technology (SKCET)
                </span>
                , Coimbatore. My background gives me a distinct advantage: understanding software from the silicon transistor up to the web interface.
              </p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                I thrive at the intersection of <strong>high-performance Java algorithms</strong>, responsive <strong>MERN stack engineering</strong>, and <strong>practical AI/OCR prototypes</strong>.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 24,
                paddingTop: 20,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: 100,
                  background: "rgba(255, 255, 255, 0.05)",
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                }}
              >
                📍 Coimbatore, India
              </span>
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: 100,
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  color: "var(--emerald)",
                }}
              >
                🎯 Target: SDE Intern / Engineer
              </span>
            </div>
          </GlassCard>
        </Reveal>

        {/* Card 2: 4 Core Pillars */}
        <Reveal delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
            {D.aboutNarrative.map((pillar, i) => (
              <GlassCard
                key={pillar.title}
                style={{
                  padding: "20px 24px",
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background:
                      i === 0
                        ? "rgba(56, 189, 248, 0.15)"
                        : i === 1
                        ? "rgba(255, 161, 22, 0.15)"
                        : i === 2
                        ? "rgba(139, 92, 246, 0.15)"
                        : "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 18,
                  }}
                >
                  {i === 0 ? "🏛️" : i === 1 ? "⚡" : i === 2 ? "🌐" : "🎯"}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {pillar.text}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
