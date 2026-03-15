import { ReactNode } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  badge: string;
  description: string;
  bullets: string[];
};

function ProjectCard({ title, badge, description, bullets }: ProjectCardProps) {
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
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="mt-1 h-11 w-11 shrink-0 rounded-2xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-sky-400 p-[1px] opacity-80 shadow-[0_0_30px_rgba(34,197,94,0.8)] transition group-hover:opacity-100">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950/95 text-xs font-semibold text-slate-100">
              AI
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
          <TechPill>{badge}</TechPill>
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

    {/* <ProjectCard
      title="BleedSense"
      badge="Health Tech · Smart Wearable"
      description="A smart wearable-based internal bleeding detection system that combines multi-sensor data with AI to predict bleeding risk in real time."
      bullets={[
        "Processes hemoglobin, SpO2, heart rate and bioimpedance signals from wearable sensors.",
        "AI model analyzes physiological trends to estimate internal bleeding risk.",
        "Flutter mobile app interface for live monitoring and alert visualizations.",
        "Designed for early detection and timely medical intervention.",
      ]}
    /> */}

    <ProjectCard
      title="Liver Tumor Classification using ResNet50"
      badge="Deep Learning · Medical Imaging"
      description="A ResNet50-based deep learning model that classifies liver tumors from medical images, supporting radiology workflows."
      bullets={[
        "Preprocesses medical images to enhance tumor features and reduce noise.",
        "Built and optimized a ResNet50 model for binary liver tumour classification.",
        "Performed image preprocessing, hyperparameter tuning and evaluation.",
        "Demonstrates the potential of AI to assist in medical decision-making.",
      ]}
    />

    <ProjectCard
      title="Hostel Mess Management System"
      badge="Full Stack · Web App"
      description="A web-based hostel mess management system with real-time meal booking, redemption tracking and automated penalty handling."
      bullets={[
        "Developed responsive frontend interfaces using HTML, CSS and JavaScript.",
        "Implemented Firebase Authentication for secure student sign-in.",
        "Integrated Firebase Realtime Database to store bookings and penalties.",
        "Built admin views to monitor attendance and no-shows.",
      ]}
    />

    <ProjectCard
  title="Crop Yield Prediction using Machine Learning"
  badge="Machine Learning · Agriculture Tech"
  description="A predictive analytics system that estimates crop yield using historical agricultural data and environmental factors."
  bullets={[
    "Built the model using Python, Pandas, NumPy, and Scikit-Learn.",
    "Used regression algorithms to predict crop productivity.",
    "Performed data preprocessing, visualization, and model evaluation.",
    "Supports data-driven farming decisions to improve crop yield planning.",
  ]}
/>

  </div>
</div>
  );
}

