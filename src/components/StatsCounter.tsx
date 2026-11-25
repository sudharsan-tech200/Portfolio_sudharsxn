import { useState, useEffect, useRef } from "react";
import { D } from "../data/portfolio";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

function useCountUp(target: number, duration: number = 1600, startNow: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startNow) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, startNow]);

  return count;
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const countLeetcode = useCountUp(450, 1800, inView);
  const countContest = useCountUp(3, 1200, inView);
  const countSIH = useCountUp(20, 1500, inView);
  const lc = D.leetcodeStats;

  return (
    <section
      id="stats"
      ref={sectionRef}
      style={{
        padding: "60px 24px 100px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* 3 Major Highlight Stat Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 28,
        }}
      >
        {/* Stat 1: LeetCode */}
        <Reveal delay={0.1}>
          <GlassCard
            style={{
              padding: "36px 32px",
              border: "1px solid rgba(255, 161, 22, 0.3)",
              background: "linear-gradient(135deg, rgba(255, 161, 22, 0.06) 0%, rgba(14, 20, 46, 0.7) 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #FFA116, #F59E0B)",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  color: "#FFA116",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  fontWeight: 700,
                }}
              >
                Algorithmic Mastery
              </span>
              <span style={{ fontSize: 24 }}>⚡</span>
            </div>
            <div
              style={{
                fontSize: "clamp(46px, 5vw, 64px)",
                fontWeight: 900,
                color: "#FFA116",
                lineHeight: 1,
                marginBottom: 8,
                fontFamily: "var(--font-mono)",
              }}
            >
              {inView ? countLeetcode : 0}+
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
              LeetCode Problems Solved
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              Across Java & DSA · Consistency & Efficiency
            </div>
          </GlassCard>
        </Reveal>

        {/* Stat 2: Full Stack Contest Place */}
        <Reveal delay={0.2}>
          <GlassCard
            style={{
              padding: "36px 32px",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              background: "linear-gradient(135deg, rgba(56, 189, 248, 0.06) 0%, rgba(14, 20, 46, 0.7) 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #38BDF8, #3B82F6)",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  color: "var(--cyan)",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  fontWeight: 700,
                }}
              >
                Contest Podium
              </span>
              <span style={{ fontSize: 24 }}>🥉</span>
            </div>
            <div
              style={{
                fontSize: "clamp(46px, 5vw, 64px)",
                fontWeight: 900,
                color: "var(--cyan)",
                lineHeight: 1,
                marginBottom: 8,
                fontFamily: "var(--font-mono)",
              }}
            >
              {inView ? countContest : 0}rd
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
              Full Stack Development Contest
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              Bannari Amman Institute of Technology (BIT)
            </div>
          </GlassCard>
        </Reveal>

        {/* Stat 3: SIH 2026 Internal Hackathon */}
        <Reveal delay={0.3}>
          <GlassCard
            style={{
              padding: "36px 32px",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.06) 0%, rgba(14, 20, 46, 0.7) 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #10B981, #06B6D4)",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  color: "var(--emerald)",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  fontWeight: 700,
                }}
              >
                National Hackathon Selection
              </span>
              <span style={{ fontSize: 24 }}>🏆</span>
            </div>
            <div
              style={{
                fontSize: "clamp(46px, 5vw, 64px)",
                fontWeight: 900,
                color: "var(--emerald)",
                lineHeight: 1,
                marginBottom: 8,
                fontFamily: "var(--font-mono)",
              }}
            >
              Top {inView ? countSIH : 0}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
              Selected out of 450+ Teams
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              Smart India Hackathon (SIH 2026) SKCET Qualifier
            </div>
          </GlassCard>
        </Reveal>
      </div>

      {/* Secondary Telemetry Strip: Additional LeetCode & Contest Details */}
      <Reveal delay={0.4}>
        <div
          style={{
            background: "rgba(14, 20, 46, 0.5)",
            border: "1px solid var(--border-subtle)",
            borderRadius: 18,
            padding: "20px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 20,
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: 4 }}>
              EASY SOLVED
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#00B8A3" }}>
              {lc.easy} <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>({lc.easyPct})</span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: 4 }}>
              MEDIUM SOLVED
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FFC01E" }}>
              {lc.medium} <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>({lc.mediumPct})</span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: 4 }}>
              HARD SOLVED
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FF375F" }}>
              {lc.hard} <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>({lc.hardPct})</span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: 4 }}>
              CONTEST RATING
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "var(--cyan)" }}>
              {lc.rating} <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>({lc.ranking})</span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: 4 }}>
              MAX STREAK
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FFA116" }}>
              🔥 {lc.streak}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", marginBottom: 4 }}>
              ACTIVE DAYS / YR
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "var(--emerald)" }}>
              📅 {lc.activeDays}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
