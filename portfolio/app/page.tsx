import Background3D from "@/components/Background3D";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import CyberRain from "@/components/CyberRain";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen scroll-smooth">
      {/* 1. The Boot Sequence */}
      <Preloader />

      {/* 2. The Radar Cursor */}
      <Cursor />

      {/* 3. The Floating Navigation */}
      <Navbar />
      
      {/* 4. The 3D Environment */}
      <Background3D />
      <CyberRain />
      
      {/* 5. Your Portfolio Content */}
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}