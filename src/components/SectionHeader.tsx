import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <Reveal>
      <div style={{ marginBottom: 56 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--cyan)",
            letterSpacing: 2.5,
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: 12,
          }}
        >
          {eyebrow}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            margin: 0,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 16,
              color: "var(--text-secondary)",
              marginTop: 14,
              maxWidth: 540,
              lineHeight: 1.65,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
