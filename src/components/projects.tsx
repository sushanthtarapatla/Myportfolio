import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  link?: string;
};

function ProjectCard({ title, badge, description, bullets, link }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-background/85 via-background/70 to-background/60 p-[1px] shadow-[0_24px_80px_rgba(15,23,42,0.75)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_100%_0,rgba(16,185,129,0.18),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col gap-4 rounded-3xl bg-background/95 px-5 pb-5 pt-4 backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {badge}
            </p>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-emerald-400 transition-colors"
                  aria-label={`View code for ${title}`}
                >
                  <FiGithub className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="mt-1 h-11 w-11 shrink-0 rounded-2xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-sky-400 p-[1px] opacity-80 shadow-[0_0_30px_rgba(34,197,94,0.8)] transition group-hover:opacity-100">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950/95 text-xs font-semibold text-slate-100">
              {badge.includes("Deep Learning") || badge.includes("GenAI") ? "AI" : badge.includes("Machine") ? "ML" : "Web"}
            </div>
          </div>
        </div>

        <ul className="mt-1 space-y-1.5 text-xs text-muted-foreground">
          {bullets.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex flex-wrap gap-1.5 text-[0.7rem] text-muted-foreground">
          {badge.split(" · ").map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function TechPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-muted/70 px-2.5 py-1 text-[0.7rem]">
      {children}
    </span>
  );
}

export function ProjectsGrid() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="QuillAI"
          badge="GenAI · React · Express"
          link="https://github.com/sushanthtarapatla/QuillAi"
          description="An AI-powered Project Documentation Generator that automatically analyzes software projects and generates professional documentation using Google's Gemini API."
          bullets={[
            "Analyzes project architecture, file structures, and APIs to extract codebase insights.",
            "Generates comprehensive README.md files and detailed project documentation in seconds.",
            "Supports analyzing projects via direct ZIP upload or providing a GitHub repository URL.",
            "Built using React (frontend), Express/Node.js (backend), and Google's Gemini API.",
          ]}
        />

        <ProjectCard
          title="Liver Tumour Classification using ResNet50"
          badge="Deep Learning · Medical Imaging"
          description="A ResNet50-based deep learning model that classifies liver tumours from medical images, supporting radiology workflows."
          bullets={[
            "Preprocesses medical images to enhance tumour features and reduce noise.",
            "Built and optimized a ResNet50 model for binary liver tumour classification.",
            "Performed image preprocessing, hyperparameter tuning, and validation.",
            "Demonstrates the potential of AI to assist in clinical decision-making.",
          ]}
        />

        <ProjectCard
          title="Smart Mess Management System"
          badge="Full Stack · Web App"
          link="https://github.com/sushanthtarapatla/hostelmess_app"
          description="A full-stack mess management application with secure authentication, real-time database synchronization, and QR-based meal verification."
          bullets={[
            "Developed responsive frontend interfaces using HTML5, JavaScript, and Tailwind CSS.",
            "Implemented secure Firebase Authentication for student sign-in.",
            "Integrated Firebase Realtime Database for instant synchronization of bookings and penalty details.",
            "Built features for QR-based check-in, tracking, automated no-show detection, and penalty management.",
          ]}
        />

        <ProjectCard
          title="Crop Yield Prediction using Machine Learning"
          badge="Machine Learning · Agriculture Tech"
          link="https://github.com/sushanthtarapatla/cropyield_app"
          description="A predictive analytics system that estimates crop yield using historical agricultural data and environmental factors."
          bullets={[
            "Built the model using Python, Pandas, NumPy, Scikit-Learn, and Jupyter Notebook.",
            "Applied Random Forest and XGBoost regression models for accurate productivity estimation.",
            "Performed data preprocessing, feature engineering, and model evaluation.",
            "Supports data-driven farming decisions to improve crop yield planning.",
          ]}
        />
      </div>
    </div>
  );
}


