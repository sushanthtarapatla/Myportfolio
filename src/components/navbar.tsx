"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2"
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-emerald-500 via-cyan-400 to-sky-500 p-[1px] shadow-[0_0_25px_rgba(34,197,94,0.55)] group-hover:shadow-[0_0_40px_rgba(34,197,94,0.75)] transition-shadow">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background/95 text-xs font-semibold">
              TS
            </div>
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs font-medium text-muted-foreground">
              Portfolio
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-sm font-semibold text-transparent">
              Tarapatla Sushanth
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {section.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 transition-transform group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/sushanthtarapatla"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/70 bg-background/60 p-2 text-muted-foreground shadow-sm transition hover:border-emerald-500/80 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.45)]"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sushanth-tarapatla-259168293/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/70 bg-background/60 p-2 text-muted-foreground shadow-sm transition hover:border-sky-500/80 hover:text-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.45)]"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:sushanthtarapatla01@gmail.com"
              className="rounded-full border border-border/70 bg-background/60 p-2 text-muted-foreground shadow-sm transition hover:border-emerald-500/80 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.45)]"
            >
              <FiMail className="h-4 w-4" />
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-full border border-border/80 bg-gradient-to-r from-emerald-500/90 via-cyan-500/90 to-sky-500/90 px-4 py-1.5 text-xs font-semibold text-white shadow-[0_0_25px_rgba(34,197,94,0.6)] transition hover:shadow-[0_0_40px_rgba(34,197,94,0.9)]"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>

          <button
            className="ml-2 inline-flex items-center justify-center rounded-full border border-border/80 bg-background/80 p-2 text-foreground md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setOpen(false);
                }}
                className="rounded-full px-4 py-2 text-left text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}

