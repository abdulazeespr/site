"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiHeart, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const contactLinks = [
  {
    icon: <FiMail />,
    label: "abdulazeespr@gmail.com",
    href: "mailto:abdulazeespr@gmail.com",
  },
  {
    icon: <FiPhone />,
    label: "+91 6235170075",
    href: "tel:+916235170075",
  },
  {
    icon: <FiGithub />,
    label: "github.com/abdulazeespr",
    href: "https://github.com/abdulazeespr",
  },
  {
    icon: <FiLinkedin />,
    label: "linkedin.com/in/abdulazeespr",
    href: "https://linkedin.com/in/abdulazeespr",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="contact">
      <span className="section-kicker">Contact</span>
      <h2 className="section-title">Let&apos;s build something useful together.</h2>
      <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
        Open to freelance projects, product teams, and collaborative builds. Feel
        free to reach out for opportunities or technical discussions.
      </p>

      <div
        ref={ref}
        className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="space-y-3">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel flex items-center gap-3.5 p-4 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
            >
              <span className="text-base text-[var(--color-accent)]">
                {link.icon}
              </span>
              {link.label}
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={(event) => event.preventDefault()}
          className="glass-panel grid gap-3 p-5 md:p-6"
        >
          <label className="text-sm text-[var(--color-text-secondary)]">Name</label>
          <input
            type="text"
            placeholder="Your name"
            required
            className="rounded-lg border border-[var(--color-border)] bg-[rgba(7,21,15,0.65)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-accent)]"
          />

          <label className="text-sm text-[var(--color-text-secondary)]">Email</label>
          <input
            type="email"
            placeholder="you@email.com"
            required
            className="rounded-lg border border-[var(--color-border)] bg-[rgba(7,21,15,0.65)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-accent)]"
          />

          <label className="text-sm text-[var(--color-text-secondary)]">Message</label>
          <textarea
            rows={4}
            placeholder="Tell me about your project..."
            required
            className="resize-none rounded-lg border border-[var(--color-border)] bg-[rgba(7,21,15,0.65)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-accent)]"
          />

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full border border-[var(--color-accent)] bg-[rgba(28,89,62,0.45)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent)] hover:translate-y-[-1px]"
          >
            Send message
          </button>
        </motion.form>
      </div>

      <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-text-muted)] md:text-sm">
        Built with <FiHeart className="mx-1 inline text-[var(--color-accent)]" />
        using Next.js, Framer Motion and Three.js
      </div>
    </SectionWrapper>
  );
}
