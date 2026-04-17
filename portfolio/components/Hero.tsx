"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    // We changed the background to transparent and made it relative
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-transparent text-white px-6 overflow-hidden">
      
      {/* Our new 3D Background sits here! */}
      

      {/* We wrapped your text in a z-10 container so it floats ABOVE the 3D particles */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-center tracking-tight drop-shadow-lg"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Ravela Chandraditya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed drop-shadow-md"
        >
          A Computer Science student & developer crafting seamless UI/UX, AI solutions, and secure applications. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(52,211,153,0.3)]"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}