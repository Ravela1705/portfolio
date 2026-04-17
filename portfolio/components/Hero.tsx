"use client";

import { motion } from "framer-motion";
import Background3D from "./Background3D";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Background3D />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-emerald-400 font-mono text-lg tracking-widest uppercase">
            Cybersecurity Researcher & Developer
          </h2>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            RAVELA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">CHANDRADITYA</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Protecting the digital frontier through ethical hacking, 
            secure architecture, and innovative full-stack development.
          </p>

          <div className="pt-8">
            <a 
              href="/cv.pdf" 
              download="Ravela_Chandraditya_CV.pdf"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full transition-all inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none"></div>
    </section>
  );
}