export default function AnimatedBackground() {
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
      {/* Dark base background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#060813",
        }}
      />

      {/* Cyber Grid Pattern */}
      <div
        className="bg-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.45,
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />

      {/* Ambient Gradient Orb 1: Electric Cyan Top Left */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: 750,
          maxHeight: 750,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0) 70%)",
          filter: "blur(60px)",
          animation: "floatGentle 12s ease-in-out infinite",
        }}
      />

      {/* Ambient Gradient Orb 2: Deep Violet Center Right */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "-12%",
          width: "60vw",
          height: "60vw",
          maxWidth: 800,
          maxHeight: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, rgba(139, 92, 246, 0) 70%)",
          filter: "blur(80px)",
          animation: "floatGentle 16s ease-in-out infinite reverse",
        }}
      />

      {/* Ambient Gradient Orb 3: Emerald Glow Bottom Left */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: "45vw",
          height: "45vw",
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0) 70%)",
          filter: "blur(70px)",
          animation: "floatGentle 14s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
}
