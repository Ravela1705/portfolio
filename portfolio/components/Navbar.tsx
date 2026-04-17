"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.4, type: "spring" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[9000] flex items-center gap-4 md:gap-8 px-6 md:px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]"
    >
      <a href="#" className="text-sm font-semibold text-gray-300 hover:text-emerald-400 transition-colors cursor-none hidden md:block">
        Home
      </a>
      <a href="#projects" className="text-sm font-semibold text-gray-300 hover:text-emerald-400 transition-colors cursor-none">
        Projects
      </a>
      <a href="#experience" className="text-sm font-semibold text-gray-300 hover:text-emerald-400 transition-colors cursor-none">
        Experience
      </a>
      <a href="#contact" className="text-sm font-semibold text-gray-300 hover:text-emerald-400 transition-colors cursor-none">
        Contact
      </a>
    </motion.nav>
  );
}