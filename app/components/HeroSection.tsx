"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const keywordCloud = [
  { text: "Design Thinking", className: "left-[5%] top-[18%]", delay: 0.2 },
  { text: "System Architecture", className: "right-[8%] top-[30%]", delay: 0.35 },
  { text: "Clean Code", className: "left-[15%] bottom-[22%]", delay: 0.5 },
  { text: "User-Centered UX", className: "right-[12%] bottom-[18%]", delay: 0.65 },
];

const codeLines = [
  "const build = (idea) => {",
  "  const plan = empathize(idea.user);",
  "  const solution = prototype(plan).iterate();",
  "  return deploy(solution, { quality: 'high' });",
  "};",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[95vh] w-full max-w-6xl items-center pt-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {keywordCloud.map((keyword) => (
          <motion.span
            key={keyword.text}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 0.24, y: 0 }}
            transition={{ duration: 0.7, delay: keyword.delay }}
            className={`absolute hidden rounded-full border border-[var(--color-border)] bg-[rgba(11,37,27,0.55)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--color-text-secondary)] lg:block ${keyword.className}`}
          >
            {keyword.text}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-kicker">Software Developer </span>
          <h1 className="section-title text-4xl font-semibold md:text-6xl">
            Building products where
            <span className="gradient-text"> code and design thinking</span> work
            together.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            I&apos;m <span className="text-[var(--color-accent)]">Azees Abdul</span>,
            a full stack developer focused on scalable engineering, polished user
            experiences, and practical product decisions.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <span className="developer-chip">Full Stack Engineering</span>
            <span className="developer-chip">UX-minded Development</span>
            <span className="developer-chip">API & System Design</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)] bg-[rgba(28,89,62,0.48)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent)] hover:translate-y-[-1px]"
            >
              <FiMail /> Let&apos;s collaborate
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View projects <FiArrowRight />
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4 text-[var(--color-text-secondary)]">
            <a
              href="https://github.com/abdulazeespr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-[var(--color-accent)]"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/abdulazeespr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-[var(--color-accent)]"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="code-window"
        >
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff7d7d]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffd56f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8effa2]" />
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
              <FiCode /> developer.tsx
            </span>
          </div>

          <div className="space-y-2 px-4 py-5 font-mono text-sm md:text-[0.92rem]">
            {codeLines.map((line, idx) => (
              <p key={line} className="flex gap-3">
                <span className="w-4 select-none text-[var(--color-text-muted)]">
                  {idx + 1}
                </span>
                <span className="text-[#9fffd3]">{line}</span>
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-[var(--color-border)] p-4">
            <div className="glass-panel px-3 py-2">
              <p className="text-xs text-[var(--color-text-muted)]">Focus</p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-[var(--color-accent)]">
                <FiLayers /> Product + Engineering
              </p>
            </div>
            <div className="glass-panel px-3 py-2">
              <p className="text-xs text-[var(--color-text-muted)]">Workflow</p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                Discover → Build → Improve
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
