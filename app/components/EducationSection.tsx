"use client";

import { FiAward } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <span className="section-kicker">Education</span>
      <h2 className="section-title">Academic foundation in computer science.</h2>

      <div className="glass-panel max-w-3xl p-6 md:p-7">
        <div className="flex items-start gap-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[rgba(17,45,33,0.7)] p-3 text-lg text-[var(--color-accent)]">
            <FiAward />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] md:text-xl">
              Bachelor&apos;s Degree in Computer Science
            </h3>
            <p className="mt-1 text-sm text-[var(--color-accent)]">
              University of Calicut, Kerala
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Graduated 2024
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
