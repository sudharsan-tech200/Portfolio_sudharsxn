import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}
    >
      <SectionHeader eyebrow="Credentials" title="Certifications & Education" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          marginBottom: 48,
        }}
      >
        {D.certs.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <GlassCard
              style={{ padding: 28, display: "flex", alignItems: "center", gap: 20 }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  flexShrink: 0,
                  backgroundImage:
                    "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(59,130,246,0.1))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                {c.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text)",
                    margin: "0 0 4px",
                  }}
                >
                  {c.name}
                </h4>
                <span style={{ fontSize: 13, color: "var(--text-faint)" }}>
                  {c.org}
                  {c.code ? ` · ${c.code}` : ""} · {c.date}
                </span>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {D.education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.1}>
            <GlassCard style={{ padding: 28 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--accent)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Education
              </div>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  margin: "0 0 6px",
                }}
              >
                {edu.degree}
              </h4>
              <span style={{ fontSize: 13, color: "var(--text-faint)" }}>
                {edu.school} · {edu.period}
              </span>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
