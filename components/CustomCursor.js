"use client"; // For Next.js App Router

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15; // smooth trailing
      cursorY += (mouseY - cursorY) * 0.15;
      setPos({ x: cursorX, y: cursorY });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    // Hover effect on clickable items
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .clickable")) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, .clickable")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        transform: "translate(-50%, -50%)",
        width: isHovering ? "50px" : "35px",
        height: isHovering ? "50px" : "35px",
        borderRadius: "50%",
        background:
          "conic-gradient(from 0deg, #00f, #0ff, #0f0, #ff0, #f0f, #00f)",
        backgroundSize: "200% 200%",
        animation: "spin 2s linear infinite, pulse 1.5s ease-in-out infinite",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 0.2s ease, height 0.2s ease, transform 0.1s linear"
      }}
    />
  );
}
