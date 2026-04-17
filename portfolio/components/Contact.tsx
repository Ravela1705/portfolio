"use client";

import { useState } from "react";

// Icons
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);

export default function Contact() {
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://portfolio-4l8s.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setButtonText("Message Sent!");
        (e.target as HTMLFormElement).reset();
      } else {
        setButtonText("Error. Try again.");
      }
    } catch (err) {
      setButtonText("Server Offline.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-white px-6 relative z-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Professional Inquiry</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-lg"><MailIcon /></div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                <p className="text-sm font-medium">ravelachandraditya2004@gmail.com</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-lg"><PhoneIcon /></div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Phone</p>
                <p className="text-sm font-medium">+91 9353841360</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-between gap-4">
              <a href="https://github.com/Ravela1705" target="_blank" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-emerald-500/10 transition-all text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/rchandraditya" target="_blank" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-emerald-500/10 transition-all text-sm">LinkedIn</a>
              <a href="https://x.com/ChandradityaR" target="_blank" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-emerald-500/10 transition-all text-sm">X</a>
            </div>

            {/* DOWNLOAD CV OPTION */}
            <a 
              href="/cv.pdf" 
              download 
              className="w-full py-4 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-black transition-all"
            >
              <DownloadIcon /> Download CV
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" type="text" placeholder="Name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-400" />
                <input name="email" type="email" placeholder="Email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-400" />
              </div>
              <textarea name="message" placeholder="Message" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-400 resize-none"></textarea>
              <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-emerald-400 transition-all">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}