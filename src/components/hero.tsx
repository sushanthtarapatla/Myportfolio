"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),transparent_55%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
        <div className="animate-[spin_35s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(45,212,191,0.65),rgba(56,189,248,0.65),rgba(129,140,248,0.65),rgba(45,212,191,0.65))] blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#10b98136_1px,transparent_0)] bg-[length:32px_32px] opacity-40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pt-28 text-center sm:px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8 lg:pt-36 lg:text-left"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.45)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to internships & projects
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="space-y-4"
          >
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-muted-foreground">Hi, I&apos;m</span>
              <span className="mt-1 block bg-gradient-to-br from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Tarapatla Sushanth
              </span>
            </h1>
            <p className="text-balance text-sm font-medium text-emerald-200/90 sm:text-base">
  Computer Science Engineering Student &bull; Aspiring Full Stack Web Developer
</p>

                <p className="max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
                  Driven by a passion for{" "}
                  <span className="font-medium text-emerald-300">
                    web development
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-cyan-300">
                    visual storytelling
                  </span>
                  , I love building{" "}
                  <span className="font-medium text-sky-300">
                    intuitive digital products
                  </span>{" "}
                  and crafting{" "}
                  <span className="font-medium text-indigo-300">
                    engaging video content
                  </span>
                  .
                </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:items-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-emerald-400/70 bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(16,185,129,0.85)] transition hover:shadow-[0_0_50px_rgba(16,185,129,1)]"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.55),transparent_45%)] opacity-40 mix-blend-screen transition group-hover:opacity-70" />
                <span className="relative">View Projects</span>
              </a>

              <a
                href="/Resume.pdf"
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/70 bg-background/80 px-5 py-2.5 text-sm font-medium text-foreground shadow-[0_0_0_rgba(15,23,42,0.15)] transition hover:border-emerald-400/70 hover:shadow-[0_0_28px_rgba(16,185,129,0.6)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-sky-500/10 opacity-0 transition group-hover:opacity-100" />
                <FiDownload className="relative h-4 w-4" />
                <span className="relative">Download Resume</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sushanthtarapatla"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border/70 bg-background/70 p-2 text-muted-foreground shadow-sm transition hover:border-emerald-400/70 hover:text-emerald-300 hover:shadow-[0_0_22px_rgba(16,185,129,0.7)]"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sushanth-tarapatla-259168293/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border/70 bg-background/70 p-2 text-muted-foreground shadow-sm transition hover:border-sky-400/70 hover:text-sky-300 hover:shadow-[0_0_22px_rgba(56,189,248,0.7)]"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:sushanthtarapatla01@gmail.com"
                className="rounded-full border border-border/70 bg-background/70 p-2 text-muted-foreground shadow-sm transition hover:border-emerald-400/70 hover:text-emerald-300 hover:shadow-[0_0_22px_rgba(16,185,129,0.7)]"
              >
                <FiMail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="grid w-full grid-cols-2 gap-4 rounded-3xl border border-border/70 bg-background/60 p-4 text-xs text-muted-foreground shadow-[0_18px_60px_rgba(15,23,42,0.65)] backdrop-blur md:max-w-lg md:text-sm"
          >
            <div className="space-y-1">
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                Degree
              </dt>
              <dd className="font-medium text-foreground">
                B.Tech CSE, B.V. Raju Institute of Technology
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                Graduation
              </dt>
              <dd className="font-medium text-foreground">Expected 2027</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                CGPA
              </dt>
              <dd className="font-medium text-emerald-300">7.88</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                Focus
              </dt>
              <dd className="font-medium text-foreground">
                AI, Mobile Apps, Web Development
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative mt-6 w-full max-w-md lg:mt-0"
        >
          <div className="relative mx-auto aspect-square max-w-xs rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950/60 p-[1px] shadow-[0_30px_120px_rgba(15,23,42,1)]">
            <div className="relative flex h-full flex-col items-center justify-between overflow-hidden rounded-[2.1rem] pb-4 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.35),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.3),transparent_55%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#0f172a_0,transparent_55%),radial-gradient(circle_at_100%_0%,#0f172a_0,transparent_55%)] opacity-80" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[0.7rem] font-medium text-slate-200/80">
                <span className="flex items-center gap-1.5 rounded-full bg-slate-900/60 px-3 py-1 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available for collaboration
                </span>
                <span className="rounded-full bg-slate-900/60 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] backdrop-blur">
                  CSE &bull; 2027
                </span>
              </div>

              <div className="relative mt-16 flex flex-col items-center px-6 text-center text-slate-100">
                <div className="mb-5 h-24 w-24 rounded-3xl bg-gradient-to-tr from-emerald-400 via-cyan-300 to-sky-400 p-[2px] shadow-[0_0_35px_rgba(34,197,94,0.9)]">
                 <div className="mb-5 h-28 w-28 rounded-3xl bg-gradient-to-tr from-emerald-400 via-cyan-300 to-sky-400 p-[2px] shadow-[0_0_35px_rgba(34,197,94,0.9)]">
                    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-950">
                      <Image
                        src="/profile.jpeg"
                        alt="Tarapatla Sushanth"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold">Aspiring Software Developer</h2>
                <p className="mt-3 text-xs text-slate-300/85">
                  I enjoy turning ideas into interactive web experiences and bringing stories to life through creative video editing.
                </p>
              </div>
              

              {/* <div className="relative mt-4 w-full border-t border-white/10 bg-slate-950/60 px-6 py-4 text-[0.7rem] text-slate-200/85 backdrop-blur">
                <div className="flex items-center justify-between">
                </div>
              </div> */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

