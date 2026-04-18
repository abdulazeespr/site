"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiCode, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-4 md:px-7">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] md:text-base"
          >
            <FiCode className="text-[var(--color-accent)]" />
            <span className="gradient-text">dev.profile</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className="text-xl text-[var(--color-text-primary)] md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="border-t border-[var(--color-border)] md:hidden"
            >
              <div className="flex flex-col gap-3 px-5 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
