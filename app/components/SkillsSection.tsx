"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiMonitor,
  FiServer,
  FiSettings,
  FiSmartphone,
} from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FiMonitor />,
    color: "var(--color-accent-cyan)",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Redux",
      "React Query",
      "Tailwind",
    ],
  },
  {
    title: "Backend",
    icon: <FiServer />,
    color: "var(--color-accent-purple)",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "DevOps",
    icon: <FiSettings />,
    color: "var(--color-accent-pink)",
    skills: ["CI/CD", "Docker", "Git"],
  },
  {
    title: "Mobile",
    icon: <FiSmartphone />,
    color: "var(--color-accent-cyan)",
    skills: ["React Native"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Tech <span className="gradient-text">Stack</span>
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="glass rounded-2xl p-6"
          >
            <div
              className="flex items-center gap-3 mb-5 text-lg font-semibold"
              style={{ color: cat.color }}
            >
              {cat.icon}
              {cat.title}
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="px-4 py-2 text-sm rounded-full font-medium"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${cat.color} 12%, transparent)`,
                    color: cat.color,
                    border: `1px solid color-mix(in srgb, ${cat.color} 25%, transparent)`,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
