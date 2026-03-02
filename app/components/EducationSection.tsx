"use client";

import { FiAward } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="gradient-text">Education</span>
      </h2>

      <div className="glass rounded-2xl p-8 md:p-10 glow-purple max-w-2xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] flex items-center justify-center text-white text-xl shrink-0">
            <FiAward />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Bachelor&apos;s Degree in Computer Science
            </h3>
            <p className="text-[var(--color-accent-purple)] font-medium text-sm mb-1">
              University of Calicut, Kerala
            </p>
            <p className="text-[var(--color-text-muted)] text-sm">
              Graduated 2024
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
