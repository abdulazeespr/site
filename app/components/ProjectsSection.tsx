"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "AI Logo Maker",
    tech: ["Next.js", "Firebase", "Hugging Face"],
    description:
      "AI-powered generator using text-to-image models for automated branding.",
    link: "https://logo-maker-teal.vercel.app",
  },
  {
    title: "Brainly",
    tech: ["React", "TypeScript", "Express", "MongoDB"],
    description:
      "Digital collection platform for organizing notes, links, and media.",
    github: "https://github.com/abdulazeespr/Brainly-frontend-",
  },
  {
    title: "Todo App",
    tech: ["PostgreSQL", "Sequelize", "Node.js"],
    description:
      "Multi-user task manager with CSRF protection and secure hashing.",
    link: "https://wd-todoapp.onrender.com",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Featured <span className="gradient-text">Projects</span>
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group glass rounded-2xl p-6 flex flex-col justify-between hover:glow-cyan transition-shadow duration-500"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--color-dark-700)] text-[var(--color-accent-cyan)] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-purple)] transition-colors duration-300"
                >
                  <FiGithub /> Source
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
