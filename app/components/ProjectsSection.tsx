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
      "AI-powered generator using text-to-image models to create branding concepts in minutes.",
    link: "https://logo-maker-teal.vercel.app",
  },
  {
    title: "Brainly",
    tech: ["React", "TypeScript", "Express", "MongoDB"],
    description:
      "Knowledge collection platform for organizing notes, links, and media with clean structure.",
    github: "https://github.com/abdulazeespr/Brainly-frontend-",
  },
  {
    title: "Todo App",
    tech: ["Node.js", "PostgreSQL", "Sequelize"],
    description:
      "Secure multi-user task manager with CSRF protection and practical auth flow.",
    link: "https://wd-todoapp.onrender.com",
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="projects">
      <span className="section-kicker">Projects</span>
      <h2 className="section-title">Selected builds with product and engineering depth.</h2>

      <div ref={ref} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="glass-panel flex h-full flex-col p-5 md:p-6"
          >
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--color-border)] bg-[rgba(20,55,40,0.45)] px-2.5 py-1 text-xs text-[var(--color-accent)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
                >
                  <FiExternalLink /> Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
                >
                  <FiGithub /> Source
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
