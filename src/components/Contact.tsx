import { D } from "../data/portfolio";
import { useMouseGlow } from "../hooks";
import Reveal from "./Reveal";

const LINKS = [
  { icon: "✉️", label: "Email", value: D.email, href: `mailto:${D.email}` },
  { icon: "💼", label: "LinkedIn", value: "Prathmesh Thorve", href: D.linkedin },
  { icon: "🐙", label: "GitHub", value: "prathmeshthorve", href: D.github },
  { icon: "📍", label: "Location", value: D.location, href: null },
];

export default function Contact() {
  const [glowRef, pos] = useMouseGlow<HTMLDivElement>();

  return (
    <section
      id="contact"
      style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}
    >
      <div ref={glowRef} style={{ position: "relative", borderRadius: 24, overflow: "hidden" }}>
        {/* Spotlight following the cursor */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
            left: pos.x - 200,
            top: pos.y - 200,
            pointerEvents: "none",
            transition: "left 0.3s, top 0.3s",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--border)",
            borderRadius: 24,
            padding: "64px 48px",
          }}
        >
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                Get In Touch
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  margin: "0 0 16px",
                  letterSpacing: "-1.5px",
                  backgroundImage:
                    "linear-gradient(135deg, #F1F5F9, rgba(255,255,255,0.6))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's Build Something Great
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--text-faint)",
                  maxWidth: 500,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                I'm always open to new opportunities and collaborations. Drop me a
                line — I'd love to hear from you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              {LINKS.map((l) => {
                const inner = (
                  <>
                    <div style={{ fontSize: 24, marginBottom: 12 }}>{l.icon}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--accent)",
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      {l.label}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text)",
                        fontWeight: 500,
                        wordBreak: "break-word",
                      }}
                    >
                      {l.value}
                    </div>
                  </>
                );

                const cardStyle = {
                  background: "var(--glass)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "24px 20px",
                  textDecoration: "none",
                  textAlign: "center" as const,
                  transition: "all 0.3s",
                  display: "block",
                };

                return l.href ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={cardStyle}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={l.label} style={cardStyle}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
