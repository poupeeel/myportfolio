"use client";

import React, { useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(99, 102, 241, 0.15)"
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(99, 102, 241, 0.12)",
}: GlowCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-white/10 ${className}`}
    >
      {/* Glow highlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 60%)`,
        }}
      />
      {/* Subtle border glow */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.1), transparent 80%)`,
          maskImage: "linear-gradient(black, black) exclude, linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "xor",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
