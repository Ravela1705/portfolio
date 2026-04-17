"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.6-5-2.5-7-3"></path>
  </svg>
);

const projects = [
  {
    title: "BlockChain Voting System",
    description: "Hybrid e-voting platform solving institutional trust issues. Built with Next.js, Supabase, and Polygon blockchain. Features smart contracts for election management and Gemini AI for analytics.",
    tech: ["Next.js", "Solidity", "Supabase", "Gemini AI"],
    github: "https://github.com/Ravela1705/blockvote-frontend",
    link: "https://blockvote-frontend-o6k5-heni80ux5-ravela-chandradityas-projects.vercel.app",
    adminLink: "https://blockvote-frontend-o6k5-heni80ux5-ravela-chandradityas-projects.vercel.app/admin" // Added the Admin Link here!
  },
  {
    title: "Online Lost and Found System",
    description: "An AI-integrated platform to efficiently track and recover lost items securely and reliably.",
    tech: ["React", "Node.js", "Express", "AI"],
    github: "https://github.com/Ravela1705/Online-Lost-and-Found-System",
    link: null
  },
  {
    title: "Listen Music Interface (UI/UX)",
    description: "High-fidelity web platform design for streaming services. Features dark-mode aesthetics for Sign-up, Dashboard, Blogs, and Audiobooks.",
    tech: ["Figma", "UI/UX Design"],
    github: null,
    link: "https://www.figma.com/design/pN8ZF4wW2IJ6nqn1Kg2LGH/Listen?node-id=0-1&t=Tc4q708WuVsckcSZ-1"
  },
  {
    title: "IRCTC Mobile App Redesign (UI/UX)",
    description: "Mobile-first redesign of the railway booking experience. Improved user journey, clear visual hierarchy, and modern e-ticket interface.",
    tech: ["Figma", "UI/UX Design"],
    github: null,
    link: "https://www.figma.com/design/TCi6k3rIQH0J8592Ua0bb7/IRCTC-MOCKUP?node-id=0-1&t=jmE7lPzAxhOntt7Z-1"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }} 
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full transition-all hover:border-emerald-400/30 hover:bg-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-white/10 text-emerald-300 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Updated Links Section to handle Admin Panel */}
              <div className="flex flex-wrap items-center gap-4 mt-auto relative z-50">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-none text-sm font-medium">
                    <GithubIcon /><span>Code</span>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-none text-sm font-medium">
                    <ExternalLink size={18} /><span>{project.adminLink ? "Voter Panel" : "Preview"}</span>
                  </a>
                )}
                {project.adminLink && (
                  <a href={project.adminLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-none text-sm font-medium">
                    <ExternalLink size={18} /><span>Admin Panel</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}