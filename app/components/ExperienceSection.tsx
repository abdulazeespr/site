"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const experience = [
  {
    company: "Professor Pc Thomas Classes",
    role: "Software Developer",
    period: "March 2025 - Present",
    highlights: [
      "Led full lifecycle delivery of an LMS platform with learner analytics.",
      "Reduced server load using Redis caching and query-level optimizations.",
      "Designed secure REST APIs for course management and user workflows.",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="experience">
      <span className="section-kicker">Experience</span>
      <h2 className="section-title">Professional impact through focused execution.</h2>

      <div ref={ref} className="relative space-y-5">
        {experience.map((job, idx) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            className="glass-panel relative p-6 md:p-7"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="rounded-lg border border-[var(--color-border)] bg-[rgba(17,45,33,0.6)] p-2 text-[var(--color-accent)]">
                  <FiBriefcase />
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] md:text-xl">
                  {job.role}
                </h3>
              </div>
              <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                {job.period}
              </span>
            </div>

            <p className="mb-4 text-sm font-medium text-[var(--color-accent)] md:text-base">
              {job.company}
            </p>

            <ul className="space-y-2.5">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
