export default function AnimatedBackground() {
  const orbs = [
    {
      size: 800,
      color: "rgba(124,58,237,0.12)",
      style: { top: "-20%", right: "-15%" },
      animation: "floatA 20s ease-in-out infinite",
    },
    {
      size: 600,
      color: "rgba(59,130,246,0.10)",
      style: { bottom: "10%", left: "-10%" },
      animation: "floatB 25s ease-in-out infinite",
    },
    {
      size: 500,
      color: "rgba(16,185,129,0.08)",
      style: { top: "50%", left: "40%" },
      animation: "floatC 18s ease-in-out infinite",
    },
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animation: orb.animation,
            ...orb.style,
          }}
        />
      ))}
    </div>
  );
}
