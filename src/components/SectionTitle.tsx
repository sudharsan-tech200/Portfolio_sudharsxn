interface SectionTitleProps {
  label: string;
  title: string;
}

export default function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          color: "#63CCA3",
          letterSpacing: 2,
          textTransform: "uppercase",
          display: "block",
          marginBottom: 8,
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 700,
          color: "#F1F5F9",
          margin: 0,
          letterSpacing: "-1px",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
