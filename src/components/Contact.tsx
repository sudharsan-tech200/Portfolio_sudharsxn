import { useState } from "react";
import { D } from "../data/portfolio";
import { useMouseGlow } from "../hooks";
import Reveal from "./Reveal";
import {
  IconMail,
  IconCopy,
  IconCheck,
  IconLinkedIn,
  IconGitHub,
  IconLeetCode,
  IconMapPin,
  IconSparkles,
  IconCode,
} from "./Icons";

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [glowRef, pos] = useMouseGlow<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(D.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px 80px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div ref={glowRef} style={{ position: "relative", borderRadius: 32, overflow: "hidden" }}>
        {/* Dynamic Cursor Spotlight Effect */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, transparent 70%)",
            left: pos.x - 250,
            top: pos.y - 250,
            pointerEvents: "none",
            transition: "left 0.2s ease, top 0.2s ease",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            background: "linear-gradient(135deg, rgba(14, 20, 46, 0.85) 0%, rgba(6, 10, 24, 0.95) 100%)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: 32,
            padding: "70px 48px",
            textAlign: "center",
          }}
        >
          <Reveal>
            <div style={{ maxWidth: 700, margin: "0 auto 48px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 100,
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--cyan)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 18,
                }}
              >
                <IconSparkles size={14} color="var(--cyan)" />
                <span>Let's Connect & Collaborate</span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 54px)",
                  fontWeight: 900,
                  color: "var(--text-primary)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.15,
                  margin: "0 0 18px",
                }}
              >
                Have an Idea? <br />
                <span
                  style={{
                    backgroundImage: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Let's Build Something Great.
                </span>
              </h2>

              <p
                style={{
                  fontSize: "clamp(15px, 1.6vw, 18px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  margin: "0 auto",
                }}
              >
                I'm always interested in exploring new technologies, solving challenging problems,
                and collaborating on meaningful software projects. Let's connect.
              </p>
            </div>
          </Reveal>

          {/* Primary Action Buttons: Direct Mail + Copy Email */}
          <Reveal delay={0.15}>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 50,
              }}
            >
              <a
                href={`mailto:${D.email}`}
                style={{
                  padding: "16px 36px",
                  borderRadius: 14,
                  backgroundImage: "var(--gradient-brand)",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  boxShadow: "0 6px 30px rgba(139, 92, 246, 0.4)",
                  transition: "all 0.25s ease",
                }}
              >
                <IconMail size={18} />
                <span>Send Email Directly</span>
              </a>

              <button
                onClick={handleCopyEmail}
                style={{
                  padding: "16px 28px",
                  borderRadius: 14,
                  background: copied ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.06)",
                  border: copied ? "1px solid var(--emerald)" : "1px solid rgba(255, 255, 255, 0.15)",
                  color: copied ? "var(--emerald)" : "var(--text-primary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "all 0.2s ease",
                }}
              >
                {copied ? <IconCheck size={18} color="var(--emerald)" /> : <IconCopy size={18} />}
                <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  style={{
                    padding: "16px 26px",
                    borderRadius: 14,
                    background: "rgba(139, 92, 246, 0.1)",
                    border: "1px solid rgba(139, 92, 246, 0.35)",
                    color: "var(--violet)",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.2s ease",
                  }}
                >
                  <IconCode size={18} />
                  <span>Resume Overview</span>
                </button>
              )}
            </div>
          </Reveal>

          {/* Social Profiles Grid */}
          <Reveal delay={0.25}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                maxWidth: 960,
                margin: "0 auto",
              }}
            >
              {[
                {
                  label: "GitHub",
                  value: "sudharsan-tech200",
                  href: D.github,
                  icon: <IconGitHub size={22} color="var(--cyan)" />,
                },
                {
                  label: "LinkedIn",
                  value: "sudharsan778",
                  href: D.linkedin,
                  icon: <IconLinkedIn size={22} color="#60A5FA" />,
                },
                {
                  label: "LeetCode",
                  value: "Sudharsan-skcet (450+)",
                  href: D.leetcode,
                  icon: <IconLeetCode size={22} color="#FFA116" />,
                },
                {
                  label: "Location",
                  value: D.location,
                  href: null,
                  icon: <IconMapPin size={22} color="var(--emerald)" />,
                },
              ].map((item) => {
                const content = (
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: 18,
                      padding: "22px 20px",
                      textAlign: "center",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>
                      {item.icon}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        wordBreak: "break-word",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
