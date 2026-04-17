"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export default function Contact() {
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Get the form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // THIS IS THE LINE! We are pointing to your live Render server now.
      const response = await fetch("https://portfolio-4l8s.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setButtonText("Message Sent!");
        (e.target as HTMLFormElement).reset(); // Clears the form
      } else {
        setButtonText("Error. Try again.");
      }
    } catch (err) {
      console.error(err);
      setButtonText("Server Offline. Try later.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-white px-6 relative z-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center backdrop-blur-sm">
              <div className="p-4 bg-white/5 rounded-full mb-4"><MailIcon /></div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-gray-400 text-sm break-all">ravelachandraditya2004@gmail.com</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="md:w-2/3 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input name="name" type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-400 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input name="email" type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-400 outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea name="message" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-400 outline-none resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-emerald-400 transition-all">
                {buttonText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}