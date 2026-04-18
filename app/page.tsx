"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import ThreeBackground from "./components/ThreeBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      <Navbar />
      <main className="relative z-10 px-4 pt-4 pb-14 md:px-8">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 mx-auto max-w-6xl px-4 pb-12 text-center text-sm text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} Azees Abdul · Built with Next.js, Three.js and
        Framer Motion
      </footer>
    </div>
  );
}
