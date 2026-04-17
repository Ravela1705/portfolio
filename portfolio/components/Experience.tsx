"use client";

import { motion } from "framer-motion";

const EduIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>);
const WorkIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);
const BookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const AwardIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>);

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Background & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-400/30 hover:bg-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4"><EduIcon /><h3 className="text-2xl font-semibold">Education</h3></div>
              <div className="pl-10 border-l border-white/20 ml-3">
                <h4 className="text-lg font-medium text-white">SRM University AP</h4>
                <p className="text-emerald-400 text-sm mb-2">Class of 2026</p>
                <p className="text-gray-400">Computer Science Student • CGPA: 7.6/10</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-400/30 hover:bg-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4"><WorkIcon /><h3 className="text-2xl font-semibold">Experience</h3></div>
              <div className="pl-10 border-l border-white/20 ml-3">
                <h4 className="text-lg font-medium text-white">Business Development Intern</h4>
                <p className="text-emerald-400 text-sm mb-2">Edufyi Tech Solutions, Bangalore</p>
                <p className="text-gray-400 text-sm leading-relaxed">Focused on client engagement and market outreach, bridging technical solutions with client needs.</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-400/30 hover:bg-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4"><BookIcon /><h3 className="text-2xl font-semibold">Publications</h3></div>
              <div className="pl-10 border-l border-white/20 ml-3">
                <h4 className="text-lg font-medium text-white leading-snug">An Enhanced CNN BILSTM Autoencoder for Robust Anomaly Detection in PowerGrid's</h4>
                <p className="text-emerald-400 text-sm mb-2 mt-1">MAI-2025 Conference • Dec 2025</p>
                <p className="text-gray-400 text-sm leading-relaxed">Introduced a hybrid deep learning model (E-AE) to robustly identify anomalies by learning complex spatial-temporal patterns to prevent False Data Injection attacks.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-400/30 hover:bg-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4"><AwardIcon /><h3 className="text-2xl font-semibold">Certifications</h3></div>
              <div className="pl-10 border-l border-white/20 ml-3 space-y-4">
                <div><h4 className="text-md font-medium text-white">AWS Certified Cloud Practitioner</h4><p className="text-gray-400 text-sm">Amazon Web Services • Nov 2024</p></div>
                <div><h4 className="text-md font-medium text-white">Ransomware Techniques</h4><p className="text-gray-400 text-sm">IT Masters • Oct 2025</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}