"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Motion values for smooth trailing effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring configuration for trailing feel
  const springConfig = { damping: 40, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Avoid showing on touchscreens
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Glow dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 bg-indigo-500/20 blur-sm mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {/* Small precise inner point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 mt-3 ml-3 rounded-full pointer-events-none z-50 bg-white"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}
