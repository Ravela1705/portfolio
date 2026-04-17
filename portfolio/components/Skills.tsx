"use client";

import { motion } from "framer-motion";

// I pulled these directly from your CV!
const skills = [
  "C & C++", "React.js", "Next.js", "Node.js", "Tailwind CSS",
  "Solidity", "UI/UX Design", "Figma", "Machine Learning", "Cybersecurity"
];

// We duplicate the list so the infinite scroll loops seamlessly without empty spaces
const duplicatedSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section className="py-20 bg-transperent overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">My Tech Stack</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
      </div>

      {/* The Infinite Sliding Marquee */}
      <div className="relative flex overflow-x-hidden">
        {/* We use Framer Motion to slide the entire row from 0% to -50% forever */}
        <motion.div
          className="flex space-x-6 px-4 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Change this number to make it faster or slower
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-gray-300 text-lg font-medium backdrop-blur-sm hover:border-emerald-400 hover:text-white transition-all cursor-default"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}