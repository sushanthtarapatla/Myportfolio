"use client";

import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl space-y-3">
          {eyebrow && (
            <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {eyebrow}
            </p>
          )}
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </motion.div>
    </section>
  );
}

