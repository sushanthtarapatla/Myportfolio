"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/sections";
import { SkillsGrid } from "@/components/skills-grid";
import { ProjectsGrid } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { Counter } from "@/components/counter";
import { IntroLanding } from "@/components/intro-landing";
import { DeveloperLoader } from "@/components/developer-loader";
import { LeetcodeBadges } from "@/components/leetcode-badges";

export default function Home() {
  const [viewState, setViewState] = useState<"landing" | "loading" | "portfolio">("landing");

  if (viewState === "landing") {
    return <IntroLanding onEnter={() => setViewState("loading")} />;
  }

  if (viewState === "loading") {
    return <DeveloperLoader onFinished={() => setViewState("portfolio")} />;
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_80%_0,rgba(59,130,246,0.3),transparent_55%),radial-gradient(circle_at_0_80%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(129,140,248,0.28),transparent_55%)]" />
      <Navbar />
      <main className="relative pt-16 sm:pt-20">
        <Hero />

        <Section
          id="about"
          eyebrow="About"
          title="Blending AI, Web Development, and Core CS."
          subtitle="I am a B.Tech Computer Science Engineering student at B.V. Raju Institute of Technology, passionate about building full-stack web applications, learning DSA, and developing intelligent software solutions."
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)]">
            <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
              <p>
                I&apos;m currently pursuing my B.Tech in Computer Science
                Engineering at B.V. Raju Institute of Technology, Narsapur with
                an expected graduation in{" "}
                <span className="font-semibold text-foreground">2027</span> and
                a CGPA of{" "}
                <span className="font-semibold text-emerald-500">7.96</span> (as of Jan 2026).
              </p>
              <p>
              My interests lie at the intersection of{" "}
              <span className="font-medium text-foreground">
                web development, artificial intelligence and visual storytelling
              </span>
              . I enjoy building modern digital experiences that combine intuitive
              interfaces with intelligent systems to create engaging and meaningful
              products.
            </p>

            <p>
              Recently, I&apos;ve been exploring how{" "}
              <span className="font-medium text-foreground">
                modern web technologies and AI-powered features
              </span>{" "}
              can work together to build interactive platforms and creative digital
              experiences. Alongside development, I also enjoy crafting visual content
              and editing videos to communicate ideas in a more engaging and impactful
              way.
            </p>
            </div>
            </div>
            <div className="space-y-3 rounded-3xl border border-border/80 bg-gradient-to-b from-background/90 via-background/80 to-background/70 p-4 text-xs shadow-[0_18px_60px_rgba(15,23,42,0.65)] sm:text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Degree</span>
                <span className="font-medium text-foreground">
                  B.Tech CSE, BVRIT Narsapur
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Graduation</span>
                <span className="font-medium text-foreground">2027</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">CGPA</span>
                <span className="font-semibold text-emerald-500">7.96</span>
              </div>
              <div className="mt-1 border-t border-border/80 pt-3 text-xs text-muted-foreground">
  Focused on building{" "}
  <span className="font-medium text-foreground">
    modern web applications
  </span>{" "}
  and creating{" "}
  <span className="font-medium text-foreground">
    engaging visual content
  </span>{" "}
  through creative development and video storytelling.
</div>
</div>
</Section>

        <Section
                id="skills"
                eyebrow="Skills"
                title="Building modern web experiences and creative digital products."
                subtitle="I am a B.Tech Computer Science Engineering student at B.V. Raju Institute of Technology, passionate about web development, problem-solving and crafting engaging digital experiences through technology and visual storytelling."
              >
          <SkillsGrid />
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected projects and engineering work."
          subtitle="Applications and systems combining machine learning, full-stack web development, and problem solving."
        >
          <ProjectsGrid />
        </Section>

        <Section
  id="achievements"
  eyebrow="Achievements & Certifications"
  title="Continuous learning and recognitions."
  subtitle="Certifications and achievements that strengthen my foundations in programming, research and innovation."
>
  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/90 via-background/80 to-background/70 p-4 shadow-[0_16px_50px_rgba(15,23,42,0.6)]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Certifications
      </p>

      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        <li>
          <span className="font-medium text-foreground">Swecha Telangana</span>{" "}
          &mdash; 4-week summer AI internship completion certificate.
        </li>

        <li>
          <span className="font-medium text-foreground">MentorX &ndash; T-Hub</span>{" "}
          &mdash; AIML & Entrepreneurship Workshop.
        </li>

        <li>
          <span className="font-medium text-foreground">NPTEL Python</span>{" "}
          &mdash; foundational understanding of Python programming and
          problem-solving.
        </li>

        <li>
          <span className="font-medium text-foreground">NPTEL Java</span>{" "}
          &mdash; strong object-oriented programming foundations.
        </li>

        <li>
          <span className="font-medium text-foreground">NPTEL Soft Skills</span>{" "}
          &mdash; improved communication and professional skills.
        </li>

        <li>
          <span className="font-medium text-foreground">Cisco C++ Basics</span>{" "}
          &mdash; programming essentials in C++.
        </li>
      </ul>
    </div>

    <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/90 via-background/80 to-background/70 p-4 shadow-[0_16px_50px_rgba(15,23,42,0.6)]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Achievements
      </p>

      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        <li>
          <span className="font-medium text-foreground">
            🥈 2nd Place —{" "}
            <a
              href="https://lnkd.in/p/dyZ5xdkS"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Vyoma Hackathon
            </a>
          </span>{" "}
          &mdash; Sustainability & Green Tech track, April 2025.
        </li>

        <li>
          Built a web platform empowering organic farmers with features like:
          AI-based Crop Doctor, marketplace for organic produce, chatbot,
          community platform, admin dashboard, and cold storage integration.
        </li>

        <li>
          Awarded a <span className="font-medium text-foreground">cash prize</span>{" "}
          for innovation and sustainability-focused technology.
        </li>
      </ul>
    </div>
  </div>
</Section>
          <Section
            id="publications"
            eyebrow="Research & Publications"
            title="Exploring AI for healthcare applications."
            subtitle="My research contributions in the field of artificial intelligence and medical imaging."
          >
  <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/95 via-background/85 to-background/75 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.6)]">

    <h3 className="text-base font-semibold text-foreground">
      Liver Tumour Classification Using Optimized ResNet50
    </h3>

    <p className="mt-2 text-sm text-muted-foreground">
      Published in <span className="font-medium text-foreground">IEEE Xplore</span> at the
      <span className="font-medium text-foreground">
        {" "}5th International Conference on Soft Computing for Security Applications (ICSCSA 2025)
      </span>.
    </p>

    <div className="mt-4">
      <a
        href="https://ieeexplore.ieee.org/document/11170777"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition hover:border-emerald-500/60 hover:bg-emerald-500/20"
      >
        View Paper on IEEE Xplore &rarr;
      </a>
    </div>

    <p className="mt-2 text-sm text-muted-foreground">
      The research focuses on improving liver tumor detection using an optimized
      ResNet50 deep learning model applied to medical imaging datasets, helping
      assist radiology workflows and early diagnosis.
    </p>

    <div className="mt-3 flex flex-wrap gap-2 text-xs">
      <span className="rounded-full bg-slate-900/80 px-3 py-1">
        Deep Learning
      </span>
      <span className="rounded-full bg-slate-900/80 px-3 py-1">
        Medical Imaging
      </span>
      <span className="rounded-full bg-slate-900/80 px-3 py-1">
        ResNet50
      </span>
      {/* <span className="rounded-full bg-slate-900/80 px-3 py-1">
        IEEE Publication
      </span> */}
    </div>

  </div>
</Section>
        <Section
          id="experience"
          eyebrow="Experience & Leadership"
          title="Leading through collaboration and service."
          subtitle="Experiences that helped me grow as a full stack aspirant, teammate, communicator and leader."
        >
          <div className="grid gap-4 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
            <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/90 via-background/80 to-background/75 p-4 text-sm text-muted-foreground shadow-[0_18px_60px_rgba(15,23,42,0.6)]">
              <h3 className="text-base font-semibold text-foreground">
                Volunteer &amp; Leadership &mdash; College Induction Program
              </h3>
              <p className="mt-2">
                Volunteered during the college induction program, taking on
                responsibilities that involved coordinating with students,
                faculty and organizing activities.
              </p>
              <p className="mt-2">
                This experience strengthened my{" "}
                <span className="font-medium text-foreground">
                  communication, leadership and teamwork
                </span>{" "}
                skills, and taught me how to stay calm and organized while
                supporting large groups of people.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-border/80 bg-gradient-to-b from-background/95 via-background/85 to-background/75 p-4 text-xs text-muted-foreground shadow-[0_18px_60px_rgba(15,23,42,0.6)]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What I bring to teams
              </p>
              <ul className="space-y-1.5">
                <li>• Ownership of tasks and attention to detail.</li>
                <li>• Ability to communicate clearly with peers and mentors.</li>
                <li>• Curiosity to learn and improve continuously.</li>
                <li>• Motivation to grow as a full stack web developer.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="coding-profiles"
          eyebrow="Coding Profiles"
          title="Practicing problem-solving and core CS."
          subtitle="I regularly solve problems and practice data structures, algorithms and coding fundamentals on competitive platforms."
        >
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/90 via-background/85 to-background/75 p-4 text-sm text-muted-foreground shadow-[0_18px_60px_rgba(15,23,42,0.65)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Profiles
                </p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <span className="font-medium text-foreground">LeetCode:</span>{" "}
                    <a
                      href="https://leetcode.com/u/60XQAkuAuM/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      60XQAkuAuM
                    </a>
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      GeeksforGeeks:
                    </span>{" "}
                    <a
                      href="https://www.geeksforgeeks.org/profile/sushanthtabusu"
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      sushanthtabusu
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/90 via-background/85 to-background/75 p-4 text-xs text-muted-foreground shadow-[0_18px_60px_rgba(15,23,42,0.65)]">
                <p>
                  I use these platforms to practice{" "}
                  <span className="font-medium text-foreground">
                    data structures, algorithms, and core CS fundamentals
                  </span>
                  . This continuous coding practice hones my problem-solving ability and
                  prepares me for algorithmic challenges.
                </p>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-3">
              <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/95 via-background/90 to-background/80 p-4 text-center shadow-lg">
                <p className="text-3xl font-bold text-emerald-400">
                  <Counter end={200} suffix="+" />
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">LeetCode Solved</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/95 via-background/90 to-background/80 p-4 text-center shadow-lg">
                <p className="text-3xl font-bold text-cyan-400">
                  <Counter end={213} suffix="+" />
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">GFG Solved</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-background/95 via-background/90 to-background/80 p-4 text-center shadow-lg">
                <p className="text-3xl font-bold text-sky-400">
                  <Counter end={40} suffix="+" />
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Contests</p>
              </div>
            </div>

            {/* LeetCode Badges Grid */}
            <LeetcodeBadges />
          </div>
        </Section>

        <Section
          id="salesforce"
          eyebrow="Salesforce"
          title="Salesforce Trailblazer Profile"
          subtitle="Gaining expertise in cloud infrastructure, customer relationship management, and agentic AI tools."
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
            <div className="flex flex-col items-center justify-center rounded-3xl border border-border/80 bg-gradient-to-b from-background/95 via-background/85 to-background/75 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.65)] text-center">
              <div className="relative h-28 w-28 mb-4">
                <Image
  src="/agentforce-specialist.png"
  alt="Salesforce Certified Agentforce Specialist"
  fill
  className="object-contain"
/>
              </div>
              <h4 className="text-sm font-semibold text-foreground">Salesforce Certified</h4>
              <p className="text-xs text-sky-400 font-medium mt-1">Agentforce Specialist</p>
              <p className="text-[10px] text-muted-foreground mt-2">Active &bull; Issued Dec 2025</p>
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-gradient-to-b from-background/90 via-background/80 to-background/75 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.65)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-foreground">Trailhead Achievements</h3>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                    Agentblazer Champion '26
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I actively learn and hands-on build agentic AI configurations, CRM databases, and workflows on the Salesforce platform.
                </p>

                <div className="grid grid-cols-3 gap-3 border-t border-b border-border/60 py-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-foreground">55</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Badges</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">23,700</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Points</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">3</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Trails</p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href="https://www.salesforce.com/trailblazer/sushanthtarapatla"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-sky-400/50 bg-sky-500/10 py-2.5 text-xs font-semibold text-sky-300 hover:bg-sky-500/20 hover:text-white transition-colors"
                >
                  View Trailblazer Profile &rarr;
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let&apos;s build something together."
          subtitle="Feel free to reach out for internships, collaborations or just to say hello."
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
            <ContactForm />
            <div className="space-y-4 rounded-3xl border border-border/80 bg-gradient-to-b from-background/90 via-background/80 to-background/75 p-5 text-sm text-muted-foreground shadow-[0_20px_70px_rgba(15,23,42,0.75)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Direct contact
                </p>
                <div className="mt-3 space-y-1.5">
                  <p>
                    <span className="font-medium text-foreground">Email:</span>{" "}
                    <a
                      href="mailto:sushanthtarapatla01@gmail.com"
                      className="underline-offset-2 hover:underline"
                    >
                      sushanthtarapatla01@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Phone:</span>{" "}
                    <a href="tel:+918247389904" className="underline-offset-2 hover:underline">
                      +91 8247389904
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      LinkedIn:
                    </span>{" "}
                    <a
                      href="https://www.linkedin.com/in/sushanth-tarapatla-259168293/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      View profile
                    </a>
                  </p>
                </div>
              </div>
              <div>
                Let&apos;s collaborate on projects that use{" "}
                <span className="font-medium text-foreground">
                  modern web development, AI-powered features and creative digital experiences
                </span>{" "}
                to build meaningful products.
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer className="border-t border-border/80 bg-background/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Tarapatla Sushanth. All rights
            reserved.
          </p>
          <p>Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}

