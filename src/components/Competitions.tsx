import { useState } from "react";
import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export default function Competitions() {
  const [filterTier, setFilterTier] = useState<string>("all");

  const filtered =
    filterTier === "all"
      ? D.competitions
      : D.competitions.filter((c) => c.tier === filterTier);

  return (
    <section
      id="achievements"
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <SectionHeader
        eyebrow="Competitive Milestones"
        title="Achievements & Competitions"
        subtitle="National hackathons, coding contests, and corporate engineering challenges."
      />

      {/* Tier Filter Buttons */}
      <Reveal delay={0.1}>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 36,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { id: "all", label: "All Milestones (8)" },
            { id: "podium", label: "🏆 Podium Finish" },
            { id: "selection", label: "★ Top Selections" },
            { id: "qualification", label: "⚡ Qualifications" },
            { id: "participant", label: "🎯 Participations" },
          ].map((tab) => {
            const isActive = filterTier === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterTier(tab.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 10,
                  border: isActive
                    ? "1px solid var(--cyan)"
                    : "1px solid var(--border-subtle)",
                  background: isActive
                    ? "rgba(56, 189, 248, 0.12)"
                    : "rgba(14, 20, 46, 0.4)",
                  color: isActive ? "var(--cyan)" : "var(--text-secondary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Grid of Competitions */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {filtered.map((item, i) => {
          const isPodium = item.tier === "podium";
          const isSelection = item.tier === "selection";
          const isQualification = item.tier === "qualification";

          const borderGlow = isPodium
            ? "1px solid rgba(56, 189, 248, 0.4)"
            : isSelection
            ? "1px solid rgba(16, 185, 129, 0.4)"
            : isQualification
            ? "1px solid rgba(139, 92, 246, 0.3)"
            : "1px solid var(--border-subtle)";

          const badgeBg = isPodium
            ? "rgba(56, 189, 248, 0.15)"
            : isSelection
            ? "rgba(16, 185, 129, 0.15)"
            : isQualification
            ? "rgba(139, 92, 246, 0.15)"
            : "rgba(255, 255, 255, 0.05)";

          const badgeColor = isPodium
            ? "var(--cyan)"
            : isSelection
            ? "var(--emerald)"
            : isQualification
            ? "var(--violet)"
            : "var(--text-muted)";

          return (
            <Reveal key={item.title} delay={i * 0.06}>
              <GlassCard
                style={{
                  padding: 28,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: borderGlow,
                  background: isPodium
                    ? "linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(14, 20, 46, 0.8) 100%)"
                    : isSelection
                    ? "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(14, 20, 46, 0.8) 100%)"
                    : "var(--bg-card)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 16,
                    }}
                  >
                    <span style={{ fontSize: 24 }}>
                      {isPodium ? "🥉" : isSelection ? "🏆" : isQualification ? "⚡" : "🎯"}
                    </span>

                    <span
                      style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        borderRadius: 100,
                        background: badgeBg,
                        color: badgeColor,
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        border: `1px solid ${badgeColor}`,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.4,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h4>
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginTop: 14,
                    paddingTop: 12,
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {item.achievement}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
