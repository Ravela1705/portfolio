"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Detect if we are hovering over a button or link
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      {/* 1. The Core: A sharp, precise emerald dot that tracks instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#34d399]"
        animate={{ 
          x: mousePosition.x - 4, // Center the dot
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1 // Disappears when hovering over buttons
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* 2. The Radar: A rotating dashed ring that smoothly drags behind */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-[2px] border-dashed border-emerald-400/80 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 24, // Center the ring
          y: mousePosition.y - 24,
          rotate: 360, // Constantly rotate
          scale: isHovering ? 1.5 : 1, // Expand when hovering over buttons
          backgroundColor: isHovering ? "rgba(52, 211, 153, 0.1)" : "transparent"
        }}
        transition={{
          x: { type: "spring", stiffness: 150, damping: 15, mass: 0.6 },
          y: { type: "spring", stiffness: 150, damping: 15, mass: 0.6 },
          rotate: { repeat: Infinity, duration: 8, ease: "linear" },
          scale: { duration: 0.2 },
          backgroundColor: { duration: 0.2 }
        }}
      />
    </>
  );
}