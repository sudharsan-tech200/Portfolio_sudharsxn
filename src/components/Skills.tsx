import { useState } from "react";
import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Programming Languages" },
  { id: "frontend", label: "Frontend Development" },
  { id: "backend", label: "Backend Development" },
  { id: "databases", label: "Databases" },
  { id: "cs", label: "CS Fundamentals" },
  { id: "embedded", label: "Embedded Systems & IoT" },
] as const;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSkills =
    activeTab === "all"
      ? D.skills
      : D.skills.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <SectionHeader
        eyebrow="Core Competencies"
        title="Skills & Technologies"
        subtitle="Focused software engineering repertoire spanning programming languages, full-stack web architectures, databases, and computer science foundations."
      />

      {/* Filter Tabs */}
      <Reveal delay={0.1}>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 40,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: "9px 20px",
                  borderRadius: 10,
                  border: isActive
                    ? "1px solid var(--cyan)"
                    : "1px solid var(--border-subtle)",
                  background: isActive
                    ? "rgba(56, 189, 248, 0.12)"
                    : "rgba(14, 20, 46, 0.4)",
                  color: isActive ? "var(--cyan)" : "var(--text-secondary)",
                  fontFamily: "var(--font-heading)",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isActive ? "0 4px 18px rgba(56, 189, 248, 0.2)" : "none",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Skills Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
          marginBottom: 40,
        }}
      >
        {filteredSkills.map((skill, i) => (
          <Reveal key={skill.name} delay={(i % 8) * 0.05}>
            <GlassCard
              style={{
                padding: "20px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                border: "1px solid var(--border-subtle)",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 24 }}>{skill.icon || "⚡"}</span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      margin: 0,
                    }}
                  >
                    {skill.name}
                  </h4>
                  {skill.badge && (
                    <span
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                        marginTop: 2,
                        display: "block",
                      }}
                    >
                      {skill.badge}
                    </span>
                  )}
                </div>
              </div>

              <span
                style={{
                  fontSize: 10,
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  padding: "4px 8px",
                  borderRadius: 6,
                  background:
                    skill.levelTag === "Advanced"
                      ? "rgba(16, 185, 129, 0.12)"
                      : skill.levelTag === "Core"
                      ? "rgba(139, 92, 246, 0.12)"
                      : "rgba(56, 189, 248, 0.12)",
                  color:
                    skill.levelTag === "Advanced"
                      ? "var(--emerald)"
                      : skill.levelTag === "Core"
                      ? "var(--violet)"
                      : "var(--cyan)",
                  border:
                    skill.levelTag === "Advanced"
                      ? "1px solid rgba(16, 185, 129, 0.3)"
                      : skill.levelTag === "Core"
                      ? "1px solid rgba(139, 92, 246, 0.3)"
                      : "1px solid rgba(56, 189, 248, 0.3)",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  flexShrink: 0,
                }}
              >
                {skill.levelTag}
              </span>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Core CS Foundations Spotlight Banner */}
      <Reveal delay={0.2}>
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(56, 189, 248, 0.04) 100%)",
            border: "1px solid rgba(139, 92, 246, 0.25)",
            borderRadius: 20,
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontFamily: "var(--font-mono)",
                color: "var(--cyan)",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Academic Foundations
            </div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 19,
                fontWeight: 800,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Core Computer Science Rigor
            </h4>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "var(--text-secondary)",
                marginTop: 4,
                margin: "4px 0 0",
              }}
            >
              In-depth theoretical and practical mastery of foundational computer science curriculum:
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming (OOP)",
              "Database Management Systems (DBMS)",
              "Operating Systems (OS)",
              "Computer Networks (CN)",
            ].map((subject) => (
              <span
                key={subject}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  padding: "7px 16px",
                  borderRadius: 100,
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                }}
              >
                ✓ {subject}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
