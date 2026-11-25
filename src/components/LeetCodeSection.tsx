import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { IconLeetCode } from "./Icons";

export default function LeetCodeSection() {
  const lc = D.leetcodeStats;

  return (
    <section
      id="coding"
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <SectionHeader
        eyebrow="Algorithmic Rigor"
        title="Competitive Programming"
        subtitle="Consistent problem-solving and algorithmic optimization in Java & C++ on LeetCode."
      />

      <Reveal delay={0.1}>
        <GlassCard
          style={{
            padding: "44px 38px",
            border: "1px solid rgba(255, 161, 22, 0.3)",
            background:
              "linear-gradient(135deg, rgba(255, 161, 22, 0.04) 0%, rgba(14, 20, 46, 0.85) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Background Glyph */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: -20,
              top: -30,
              fontSize: 180,
              fontFamily: "var(--font-mono)",
              color: "rgba(255, 161, 22, 0.03)",
              fontWeight: 900,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {"{ }"}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
              alignItems: "center",
            }}
          >
            {/* Left Column: Solved Count & Profile Card */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 100,
                  background: "rgba(255, 161, 22, 0.12)",
                  border: "1px solid rgba(255, 161, 22, 0.3)",
                  fontSize: 12,
                  color: "#FFA116",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                <IconLeetCode size={14} color="#FFA116" />
                <span>PROFILE: Sudharsan-skcet</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(56px, 6vw, 76px)",
                    fontWeight: 900,
                    color: "#FFA116",
                    lineHeight: 1,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {lc.total}+
                </span>
                <span style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>
                  Problems Solved
                </span>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                  maxWidth: 440,
                }}
              >
                Focused on optimizing time and space complexities across Arrays, Two Pointers, Dynamic Programming,
                Binary Trees, Hash Maps, and Graph Traversal.
              </p>

              {/* Contest standing cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "12px 16px",
                    borderRadius: 12,
                  }}
                >
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    CONTEST RATING
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginTop: 2 }}>
                    {lc.rating}{" "}
                    <span style={{ fontSize: 11, color: "var(--emerald)", fontWeight: 600 }}>
                      ({lc.ranking})
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "12px 16px",
                    borderRadius: 12,
                  }}
                >
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    MAX STREAK
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#FFA116", marginTop: 2 }}>
                    🔥 {lc.streak}
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "12px 16px",
                    borderRadius: 12,
                  }}
                >
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    ACTIVE DAYS
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--cyan)", marginTop: 2 }}>
                    📅 {lc.activeDays}
                  </div>
                </div>
              </div>

              <a
                href={lc.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 26px",
                  borderRadius: 12,
                  background: "#FFA116",
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: 14,
                  boxShadow: "0 6px 24px rgba(255, 161, 22, 0.35)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(255, 161, 22, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(255, 161, 22, 0.35)";
                }}
              >
                <IconLeetCode size={16} color="#000" />
                <span>Verify on LeetCode ↗</span>
              </a>
            </div>

            {/* Right Column: Visual Difficulty Distribution */}
            <div
              style={{
                background: "rgba(6, 10, 24, 0.75)",
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingBottom: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Problem Distribution
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-mono)",
                    color: "var(--cyan)",
                  }}
                >
                  Primary Language: Java
                </span>
              </div>

              {/* Easy Bar */}
              <div style={{ marginBottom: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#00B8A3" }}>
                    ● Easy Problems
                  </span>
                  <span style={{ fontSize: 13, fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                    <strong>{lc.easy}</strong> <span style={{ color: "var(--text-muted)" }}>({lc.easyPct})</span>
                  </span>
                </div>
                <div style={{ height: 9, borderRadius: 5, background: "rgba(255, 255, 255, 0.06)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "61.5%", background: "#00B8A3", borderRadius: 5 }} />
                </div>
              </div>

              {/* Medium Bar */}
              <div style={{ marginBottom: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#FFC01E" }}>
                    ● Medium Problems
                  </span>
                  <span style={{ fontSize: 13, fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                    <strong>{lc.medium}</strong> <span style={{ color: "var(--text-muted)" }}>({lc.mediumPct})</span>
                  </span>
                </div>
                <div style={{ height: 9, borderRadius: 5, background: "rgba(255, 255, 255, 0.06)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "34.5%", background: "#FFC01E", borderRadius: 5 }} />
                </div>
              </div>

              {/* Hard Bar */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#FF375F" }}>
                    ● Hard Problems
                  </span>
                  <span style={{ fontSize: 13, fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                    <strong>{lc.hard}</strong> <span style={{ color: "var(--text-muted)" }}>({lc.hardPct})</span>
                  </span>
                </div>
                <div style={{ height: 9, borderRadius: 5, background: "rgba(255, 255, 255, 0.06)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "12%", background: "#FF375F", borderRadius: 5 }} />
                </div>
              </div>

              {/* Continuous Problem Solving Quote */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px dashed rgba(255, 255, 255, 0.1)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  fontSize: 12,
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                  fontFamily: "var(--font-mono)",
                }}
              >
                // Daily commitment to algorithmic problem solving, code cleanliness, and runtime efficiency.
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
