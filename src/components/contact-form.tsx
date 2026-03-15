"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle",
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("submitted");
      setTimeout(() => setStatus("idle"), 3000);
    }, 900);
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="relative space-y-4 rounded-3xl border border-border/80 bg-gradient-to-b from-background/90 via-background/80 to-background/80 p-5 shadow-[0_22px_80px_rgba(15,23,42,0.8)] backdrop-blur sm:p-6 lg:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="text-xs font-medium text-muted-foreground"
          >
            Name
          </label>
          <input
            required
            id="name"
            name="name"
            placeholder="Your full name"
            className="h-10 w-full rounded-xl border border-border bg-background/80 px-3 text-sm text-foreground shadow-sm outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-muted-foreground"
          >
            Email
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="h-10 w-full rounded-xl border border-border bg-background/80 px-3 text-sm text-foreground shadow-sm outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium text-muted-foreground"
        >
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          placeholder="Tell me about your project, idea, or opportunity..."
          className="w-full rounded-xl border border-border bg-background/80 px-3 py-2 text-sm text-foreground shadow-sm outline-none ring-0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status !== "idle"}
          className="group inline-flex items-center justify-center rounded-full border border-emerald-400/80 bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(16,185,129,0.9)] transition hover:shadow-[0_0_50px_rgba(16,185,129,1)] disabled:cursor-not-allowed disabled:border-emerald-400/40 disabled:opacity-60"
        >
          <span className="relative">
            {status === "submitting"
              ? "Sending..."
              : status === "submitted"
              ? "Sent!"
              : "Send Message"}
          </span>
        </button>
        {/* <p className="text-[0.7rem] text-muted-foreground">
          This demo form doesn&apos;t send emails yet, but shows the experience
          your contacts would have.
        </p> */}
      </div>
    </motion.form>
  );
}

