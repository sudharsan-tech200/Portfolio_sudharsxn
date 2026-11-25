import { useState } from "react";
import { D } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { IconGitHub } from "./Icons";

// Consistent, Robust Project Image Component with Graceful Fallback
function ProjectImage({
  src,
  alt,
  icon,
  title,
}: {
  src: string;
  alt: string;
  icon: string;
  title: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        background: "rgba(6, 10, 24, 0.95)",
        position: "relative",
        marginBottom: 18,
      }}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, rgba(14, 20, 46, 0.95), rgba(6, 10, 24, 0.98))",
            color: "var(--cyan)",
            gap: 8,
            padding: 16,
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 36 }}>{icon}</span>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 14,
              color: "#fff",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text-muted)",
            }}
          >
            [Interactive Engineering Implementation]
          </span>
        </div>
      )}
    </div>
  );
}

// Custom Technical Visual for NutriScan (OCR Scanner Telemetry)
function NutriScanIllustration() {
  return (
    <div
      style={{
        background: "rgba(6, 10, 24, 0.95)",
        borderRadius: 14,
        padding: "18px 20px",
        border: "1px solid rgba(56, 189, 248, 0.3)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Top telemetry bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 11,
          color: "var(--cyan)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          paddingBottom: 8,
          marginBottom: 12,
        }}
      >
        <span>SYS_STATUS: OCR_INSPECT_ACTIVE</span>
        <span style={{ color: "var(--emerald)" }}>CONFIDENCE: 99.4%</span>
      </div>

      {/* Simulated Package Photo with OCR Detection Bounding Boxes */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px dashed rgba(56, 189, 248, 0.4)",
          borderRadius: 8,
          padding: 12,
          position: "relative",
          marginBottom: 12,
        }}
      >
        <div style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 6 }}>
          [INPUT_IMAGE: PACKAGE_FRONT_CAM01.RAW]
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <div
            style={{
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid var(--emerald)",
              padding: "5px 10px",
              borderRadius: 6,
              fontSize: 11,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#fff" }}>MRP: ₹ 45.00 (INCL. TAXES)</span>
            <span style={{ color: "var(--emerald)", fontSize: 10 }}>[DETECTED ✓]</span>
          </div>

          <div
            style={{
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid var(--cyan)",
              padding: "5px 10px",
              borderRadius: 6,
              fontSize: 11,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#fff" }}>MFG: 10/2026 · EXP: 04/2027</span>
            <span style={{ color: "var(--cyan)", fontSize: 10 }}>[VERIFIED ✓]</span>
          </div>

          <div
            style={{
              background: "rgba(139, 92, 246, 0.12)",
              border: "1px solid var(--violet)",
              padding: "5px 10px",
              borderRadius: 6,
              fontSize: 11,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#fff" }}>NET WT: 200g · BATCH: NX-402</span>
            <span style={{ color: "var(--violet)", fontSize: 10 }}>[EXTRACTED ✓]</span>
          </div>
        </div>
      </div>

      {/* Compliance result banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 11,
          padding: "7px 12px",
          borderRadius: 8,
          background: "rgba(16, 185, 129, 0.15)",
          border: "1px solid var(--emerald)",
          color: "var(--emerald)",
          fontWeight: 600,
        }}
      >
        <span>LEGAL METROLOGY AUDIT:</span>
        <span>100% COMPLIANT</span>
      </div>
    </div>
  );
}

// Custom Technical Visual for Skillora (MERN LMS Interactive Dashboard)
function SkilloraIllustration() {
  const [role, setRole] = useState<"Student" | "Instructor" | "Admin">("Student");

  return (
    <div
      style={{
        background: "rgba(6, 10, 24, 0.95)",
        borderRadius: 14,
        padding: "18px 20px",
        border: "1px solid rgba(139, 92, 246, 0.35)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Top role switch bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          paddingBottom: 10,
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 11, color: "var(--violet)", fontWeight: 700 }}>
          PORTAL: MERN_API_GATEWAY
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {(["Student", "Instructor", "Admin"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              style={{
                background: role === r ? "var(--violet)" : "rgba(255, 255, 255, 0.06)",
                border: "none",
                borderRadius: 6,
                padding: "4px 8px",
                fontSize: 10,
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Role Metrics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            padding: "8px",
            borderRadius: 8,
            border: "1px solid rgba(255, 255, 255, 0.06)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 9, color: "var(--text-muted)" }}>ENROLLED</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "var(--cyan)" }}>
            {role === "Student" ? "8 Courses" : role === "Instructor" ? "4 Active" : "2,450 Total"}
          </div>
        </div>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            padding: "8px",
            borderRadius: 8,
            border: "1px solid rgba(255, 255, 255, 0.06)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 9, color: "var(--text-muted)" }}>PROGRESS</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "var(--emerald)" }}>
            {role === "Student" ? "84.2%" : role === "Instructor" ? "92% Avg" : "99.8% Uptime"}
          </div>
        </div>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            padding: "8px",
            borderRadius: 8,
            border: "1px solid rgba(255, 255, 255, 0.06)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 9, color: "var(--text-muted)" }}>PERMISSIONS</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--violet)", marginTop: 2 }}>
            {role === "Student" ? "Read/Submit" : role === "Instructor" ? "Author/Grade" : "SuperAdmin"}
          </div>
        </div>
      </div>

      {/* REST API route indicator */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.4)",
          padding: "7px 10px",
          borderRadius: 6,
          fontSize: 10,
          color: "var(--text-muted)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>GET /api/v1/courses?role={role.toLowerCase()}</span>
        <span style={{ color: "var(--emerald)" }}>200 OK</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const flagships = D.projects.filter((p) => p.flagship);
  const otherProjects = D.projects.filter((p) => !p.flagship);

  return (
    <section
      id="projects"
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <SectionHeader
        eyebrow="Portfolio Centerpiece"
        title="Featured Projects"
        subtitle="End-to-end full stack web platforms, computer vision prototypes, and embedded IoT systems solving real-world challenges."
      />

      {/* Flagship Projects Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: 48, marginBottom: 56 }}>
        {flagships.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.15}>
            <GlassCard
              style={{
                padding: "44px 40px",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                background:
                  "linear-gradient(135deg, rgba(14, 20, 46, 0.8) 0%, rgba(6, 10, 24, 0.95) 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background:
                    project.id === "nutriscan"
                      ? "linear-gradient(90deg, #10B981, #38BDF8, #8B5CF6)"
                      : "linear-gradient(90deg, #8B5CF6, #3B82F6, #38BDF8)",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 40,
                  alignItems: "center",
                }}
              >
                {/* Left: Info, Features & Contribution */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px 12px",
                        borderRadius: 100,
                        background: "rgba(56, 189, 248, 0.12)",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        color: "var(--cyan)",
                        fontSize: 11,
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      ★ {project.badge}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(26px, 3.5vw, 36px)",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.5px",
                      margin: "0 0 6px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      fontSize: 15,
                      color: "var(--cyan)",
                      fontWeight: 600,
                      marginBottom: 16,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {project.subtitle}
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div style={{ marginBottom: 20 }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                        marginBottom: 10,
                        fontWeight: 600,
                      }}
                    >
                      Key Features & Architecture:
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {project.features.map((feat, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: 13,
                            color: "var(--text-primary)",
                            marginBottom: 8,
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            lineHeight: 1.5,
                          }}
                        >
                          <span
                            style={{
                              color: "var(--emerald)",
                              flexShrink: 0,
                              fontWeight: 700,
                            }}
                          >
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* My Contribution Callout */}
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      borderLeft: "3px solid var(--cyan)",
                      padding: "10px 16px",
                      borderRadius: "0 8px 8px 0",
                      marginBottom: 22,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-mono)",
                        color: "var(--cyan)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 2,
                      }}
                    >
                      My Contribution:
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {project.contribution}
                    </span>
                  </div>

                  {/* Hackathon Achievement Badge if any */}
                  {project.achievement && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "rgba(16, 185, 129, 0.08)",
                        border: "1px solid rgba(16, 185, 129, 0.25)",
                        borderRadius: 10,
                        padding: "10px 16px",
                        marginBottom: 22,
                        fontSize: 13,
                        color: "var(--emerald)",
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ fontSize: 18 }}>🏆</span>
                      <span>{project.achievement}</span>
                    </div>
                  )}

                  {/* Tech Stack Chips & Buttons */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 24,
                    }}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          padding: "5px 12px",
                          borderRadius: 8,
                          fontSize: 12,
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "11px 22px",
                      borderRadius: 10,
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: 700,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                      e.currentTarget.style.borderColor = "var(--cyan)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                    }}
                  >
                    <IconGitHub size={16} />
                    <span>View Repository ↗</span>
                  </a>
                </div>

                {/* Right: Project Image + Technical Architecture Illustration */}
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    icon={project.icon}
                    title={project.title}
                  />
                  {project.id === "nutriscan" ? (
                    <NutriScanIllustration />
                  ) : (
                    <SkilloraIllustration />
                  )}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Additional Projects: Radar, Instagram, and Bluetooth Car */}
      <div>
        <div style={{ marginBottom: 28 }}>
          <h4
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 22,
              fontWeight: 800,
              color: "var(--text-primary)",
              margin: "0 0 6px",
            }}
          >
            Hardware Prototypes & Web Applications
          </h4>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              color: "var(--text-muted)",
            }}
          >
            Hands-on implementations in robotics, angular radar sensing, and interactive React interfaces.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {otherProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <GlassCard
                style={{
                  padding: 26,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  {/* Project Showcase Visual with Fallback */}
                  <ProjectImage
                    src={p.image}
                    alt={p.title}
                    icon={p.icon}
                    title={p.title}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <span style={{ fontSize: 24 }}>{p.icon}</span>
                    <span
                      style={{
                        fontSize: 11,
                        padding: "3px 10px",
                        borderRadius: 100,
                        background: "rgba(56, 189, 248, 0.1)",
                        color: "var(--cyan)",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 19,
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      margin: "0 0 4px",
                    }}
                  >
                    {p.title}
                  </h4>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--emerald)",
                      fontFamily: "var(--font-mono)",
                      marginBottom: 12,
                    }}
                  >
                    {p.subtitle}
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: 16,
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Bullet features */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px" }}>
                    {p.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: 12,
                          color: "var(--text-primary)",
                          marginBottom: 6,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                        }}
                      >
                        <span style={{ color: "var(--cyan)" }}>▹</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 16,
                      paddingTop: 14,
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          padding: "3px 8px",
                          borderRadius: 6,
                          fontSize: 11,
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      color: "var(--cyan)",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <IconGitHub size={14} />
                    <span>View Repository ↗</span>
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
