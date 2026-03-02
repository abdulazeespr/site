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
      "Led full lifecycle of an LMS platform with user analytics",
      "Reduced server load via Redis caching and MongoDB optimization",
      "Designed secure REST APIs for course management",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Work <span className="gradient-text">Experience</span>
      </h2>

      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] opacity-30" />

        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative pl-16 md:pl-20 mb-10"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] ring-4 ring-[var(--color-dark-900)]" />

            <div className="glass rounded-2xl p-6 md:p-8 glow-purple">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <FiBriefcase className="text-[var(--color-accent-cyan)]" />
                <h3 className="text-xl font-semibold">{job.role}</h3>
              </div>
              <p className="text-[var(--color-accent-purple)] font-medium text-sm mb-1">
                {job.company}
              </p>
              <p className="text-[var(--color-text-muted)] text-sm mb-5">
                {job.period}
              </p>

              <ul className="space-y-3">
                {job.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex gap-3 text-[var(--color-text-secondary)] text-sm"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-cyan)] shrink-0" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
