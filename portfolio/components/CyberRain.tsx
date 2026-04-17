"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Defining the shape of our data beams
interface Drop {
  id: number;
  left: string;
  delay: number;
  duration: number;
  height: number;
  opacity: number;
}

export default function CyberRain() {
  const [drops, setDrops] = useState<Drop[]>([]);

  // We use useEffect so the random math only happens on the user's browser,
  // preventing Next.js server errors.
  useEffect(() => {
    const generatedDrops = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`, // Random horizontal position
      delay: Math.random() * 5, // Random start time
      duration: Math.random() * 3 + 2, // Falling speed (between 2s and 5s)
      height: Math.random() * 150 + 50, // Beam length (50px to 200px)
      opacity: Math.random() * 0.4 + 0.1, // Subtle glow
    }));
    setDrops(generatedDrops);
  }, []);

  return (
    // This div sits fixed over the whole screen, ignoring mouse clicks
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          // The gradient makes it look like a shooting laser: fades in, bright center, fades out
          className="absolute top-[-250px] w-[2px] bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_#34d399]"
          style={{
            left: drop.left,
            height: `${drop.height}px`,
            opacity: drop.opacity,
          }}
          // Animate from way above the screen to way below it
          animate={{ y: ["0vh", "120vh"] }}
          transition={{
            repeat: Infinity,
            duration: drop.duration,
            delay: drop.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}