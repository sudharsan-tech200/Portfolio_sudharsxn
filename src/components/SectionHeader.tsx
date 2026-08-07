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
            color: "var(--accent)",
            letterSpacing: 3,
            textTransform: "uppercase",
            display: "block",
            marginBottom: 12,
          }}
        >
          {eyebrow}
        </span>
        <h2
          style={{
            fontSize: "clamp(30px, 4.5vw, 48px)",
            fontWeight: 800,
            color: "var(--text)",
            margin: 0,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 16,
              color: "var(--text-faint)",
              marginTop: 16,
              maxWidth: 500,
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
