import { useState } from "react";
import type { ReactNode, CSSProperties, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  style?: CSSProperties;
  hover?: boolean;
}

export default function GlassCard({
  children,
  style = {},
  hover = true,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: GlassCardProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = hovered && hover;

  return (
    <div
      onMouseEnter={(e) => {
        setHovered(true);
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setHovered(false);
        if (onMouseLeave) onMouseLeave(e);
      }}
      style={{
        background: isActive ? "var(--bg-card-hover)" : "var(--bg-card)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${isActive ? "rgba(56, 189, 248, 0.35)" : "var(--border-subtle)"}`,
        borderRadius: 20,
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
        transform: isActive ? "translateY(-3px)" : "none",
        boxShadow: isActive ? "0 12px 36px rgba(0, 0, 0, 0.45)" : "none",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
