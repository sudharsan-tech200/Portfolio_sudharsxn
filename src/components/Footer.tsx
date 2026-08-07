export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 24px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
        © {new Date().getFullYear()} Prathmesh Thorve · Built with React +
        TypeScript
      </span>
    </footer>
  );
}
