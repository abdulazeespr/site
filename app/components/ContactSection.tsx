"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiHeart,
} from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const contactLinks = [
  {
    icon: <FiMail />,
    label: "abdulazeespr@gmail.com",
    href: "mailto:abdulazeespr@gmail.com",
    color: "var(--color-accent-cyan)",
  },
  {
    icon: <FiPhone />,
    label: "+91 6235170075",
    href: "tel:+916235170075",
    color: "var(--color-accent-purple)",
  },
  {
    icon: <FiGithub />,
    label: "github.com/abdulazeespr",
    href: "https://github.com/abdulazeespr",
    color: "var(--color-text-primary)",
  },
  {
    icon: <FiLinkedin />,
    label: "linkedin.com/in/abdulazeespr",
    href: "https://linkedin.com/in/abdulazeespr",
    color: "var(--color-accent-cyan)",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let&apos;s <span className="gradient-text">Connect</span>
      </h2>
      <p className="text-[var(--color-text-secondary)] mb-12 max-w-xl">
        I&apos;m always open to new opportunities and collaborations. Feel free
        to reach out!
      </p>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
      >
        {contactLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass rounded-xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 group"
          >
            <span
              className="text-xl transition-colors duration-300"
              style={{ color: link.color }}
            >
              {link.icon}
            </span>
            <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-[var(--color-glass-border)] text-center">
        <p className="text-[var(--color-text-muted)] text-sm flex items-center justify-center gap-1.5">
          Built with <FiHeart className="text-[var(--color-accent-pink)]" />{" "}
          using Next.js & Framer Motion
        </p>
      </div>
    </SectionWrapper>
  );
}
