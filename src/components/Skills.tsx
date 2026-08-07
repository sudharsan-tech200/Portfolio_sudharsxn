import { useState } from "react";
import { D } from "../data/portfolio";
import { useInView } from "../hooks";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "cloud", label: "Cloud & AI" },
] as const;

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const [ref, visible] = useInView(0.1);

  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-faint)",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 3,
            backgroundImage: "linear-gradient(90deg, #7C3AED, #3B82F6)",
            width: visible ? `${level}%` : "0%",
            transition: `width 1s cubic-bezier(.4,0,.2,1) ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? D.skills : D.skills.filter((s) => s.cat === filter);
  const mid = Math.ceil(filtered.length / 2);

  return (
    <section
      id="skills"
      style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}
    >
      <SectionHeader
        eyebrow="What I Work With"
        title="Technical Skills"
        subtitle="Technologies I use to build performant, scalable web applications."
      />

      <Reveal delay={0.1}>
        <div style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => {
            const isActive = filter === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                style={{
                  padding: "10px 22px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                  transition: "all 0.3s",
                  backgroundImage: isActive ? "var(--gradient)" : "none",
                  background: isActive ? undefined : "rgba(255,255,255,0.04)",
                  color: isActive ? "#fff" : "var(--text-dim)",
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        <Reveal delay={0.15}>
          <GlassCard style={{ padding: 32 }}>
            {filtered.slice(0, mid).map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
            ))}
          </GlassCard>
        </Reveal>
        <Reveal delay={0.25}>
          <GlassCard style={{ padding: 32 }}>
            {filtered.slice(mid).map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
            ))}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
