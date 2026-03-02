"use client";

import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="glass rounded-2xl p-8 md:p-10 glow-cyan">
        <p className="text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Results-driven Full Stack Developer with hands-on experience designing
          and deploying scalable web and mobile applications. Proven expertise in{" "}
          <span className="text-[var(--color-accent-cyan)] font-medium">
            MERN stack
          </span>
          ,{" "}
          <span className="text-[var(--color-accent-purple)] font-medium">
            API design
          </span>
          , and{" "}
          <span className="text-[var(--color-accent-pink)] font-medium">
            CI/CD workflows
          </span>
          .
        </p>
      </div>
    </SectionWrapper>
  );
}
