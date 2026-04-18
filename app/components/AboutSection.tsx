"use client";

import { FiCompass, FiPenTool, FiZap } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const thinkingSteps = [
  {
    icon: <FiCompass />,
    title: "Understand the problem",
    description: "Start with user needs, business goals, and technical constraints.",
  },
  {
    icon: <FiPenTool />,
    title: "Shape the solution",
    description: "Translate ideas into clear flows, components, and backend contracts.",
  },
  {
    icon: <FiZap />,
    title: "Build and iterate",
    description: "Ship fast, measure impact, and improve based on real feedback.",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <span className="section-kicker">About</span>
      <h2 className="section-title">
        Engineering software with a design-first product mindset.
      </h2>

      <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-panel p-6 md:p-7">
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            I develop web products that balance performance, maintainability, and
            user clarity. My approach combines full stack execution with design
            thinking, so each feature is technically solid and meaningful for the
            people using it.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--color-border)] bg-[rgba(17,45,33,0.55)] p-3">
              <p className="text-xs text-[var(--color-text-muted)]">Primary Focus</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                Full Stack Apps
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[rgba(17,45,33,0.55)] p-3">
              <p className="text-xs text-[var(--color-text-muted)]">Strength</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                API + UX Alignment
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[rgba(17,45,33,0.55)] p-3">
              <p className="text-xs text-[var(--color-text-muted)]">Delivery Style</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                Iterate Quickly
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {thinkingSteps.map((step) => (
            <div
              key={step.title}
              className="glass-panel flex gap-4 p-4 md:p-5"
            >
              <span className="mt-0.5 text-lg text-[var(--color-accent)]">
                {step.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] md:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
