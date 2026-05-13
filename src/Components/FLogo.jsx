import React from "react";
export default function FLogo({ size = 32, color = "#c8860a" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{
        overflow: "visible",
        filter: `drop-shadow(0 0 6px ${color}88)`,
        flexShrink: 0,
      }}
    >
      {/* Outer F */}
      <path
        d="M22 8 L22 92 M22 8 L78 8 M22 50 L66 50"
        stroke={color}
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="square"
      />
      {/* Inner F (double outline) */}
      <path
        d="M30 16 L30 84 M30 16 L70 16 M30 44 L60 44"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="square"
      />
    </svg>
  );
}