"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  // This timer hides the preloader after 3.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          // This makes it smoothly fade and blur away when it closes
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#020202] flex flex-col justify-center items-start px-8 md:px-32 font-mono text-emerald-400 pointer-events-none"
        >
          <div className="text-lg md:text-2xl space-y-2">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              {`> INITIATING SECURE CONNECTION...`}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
              {`> BYPASSING FIREWALL...`}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
              {`> LOADING AI CORE...`}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} className="text-white mt-4 font-bold tracking-widest">
              {`> ACCESS GRANTED.`}
            </motion.p>
            {/* Blinking cursor */}
            <motion.div 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="w-4 h-6 bg-emerald-400 mt-2 inline-block" 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}