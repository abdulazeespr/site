"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--color-accent-cyan)] opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-purple)] opacity-10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--color-accent-pink)] opacity-5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm md:text-base tracking-widest uppercase text-[var(--color-text-secondary)] mb-4 flex items-center justify-center gap-2">
            <FiMapPin className="text-[var(--color-accent-cyan)]" />
            Thrissur, Kerala
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
        >
          <span className="gradient-text">Azees Abdul</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light mb-10"
        >
          Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:abdulazeespr@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-white font-medium text-sm hover:scale-105 transition-transform duration-300"
          >
            <FiMail /> Get In Touch
          </a>
          <a
            href="https://github.com/abdulazeespr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-[var(--color-text-primary)] font-medium text-sm hover:scale-105 transition-transform duration-300"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/abdulazeespr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-[var(--color-text-primary)] font-medium text-sm hover:scale-105 transition-transform duration-300"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[var(--color-text-muted)] flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-cyan)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
