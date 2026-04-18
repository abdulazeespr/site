"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiDatabase, FiLayout, FiSettings } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FiLayout />,
    level: "Advanced",
    coverage: "90%",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
  },
  {
    title: "Backend",
    icon: <FiDatabase />,
    level: "Advanced",
    coverage: "86%",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Engineering",
    icon: <FiCode />,
    level: "Strong",
    coverage: "82%",
    skills: ["System Design", "API Design", "Testing", "Performance"],
  },
  {
    title: "Dev Workflow",
    icon: <FiSettings />,
    level: "Strong",
    coverage: "80%",
    skills: ["Git", "Docker", "CI/CD", "Release Process"],
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="skills">
      <span className="section-kicker">Skills</span>
      <h2 className="section-title">Tools and capabilities I use to ship quality software.</h2>

      <div ref={ref} className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category, idx) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="glass-panel p-5 md:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                  {category.icon}
                  {category.title}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {category.level}
                </p>
              </div>
              <span className="text-xs text-[var(--color-text-secondary)]">
                {category.coverage}
              </span>
            </div>

            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[rgba(77,120,97,0.28)]">
              <div
                className="h-full rounded-full bg-[var(--color-accent)]"
                style={{ width: category.coverage }}
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
