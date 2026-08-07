import { useState } from "react";
import type { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  style?: CSSProperties;
  hover?: boolean;
}

export default function GlassCard({
  children,
  style = {},
  hover = true,
}: GlassCardProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = hovered && hover;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isActive ? "var(--glass-hover)" : "var(--glass)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${isActive ? "rgba(124,58,237,0.3)" : "var(--border)"}`,
        borderRadius: 16,
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
        transform: isActive ? "translateY(-2px)" : "none",
        boxShadow: isActive ? "0 8px 32px rgba(124,58,237,0.08)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
