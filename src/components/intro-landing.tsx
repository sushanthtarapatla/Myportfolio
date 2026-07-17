"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

type IntroLandingProps = {
  onEnter: () => void;
};

export function IntroLanding({ onEnter }: IntroLandingProps) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D mouse tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Transforms for 3D rotation and translations
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const textTranslateX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const textTranslateY = useTransform(springY, [-0.5, 0.5], [-20, 20]);
  const gridTranslateX = useTransform(springX, [-0.5, 0.5], [15, -15]);
  const gridTranslateY = useTransform(springY, [-0.5, 0.5], [15, -15]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // range: [-0.5, 0.5]
      const y = (e.clientY - rect.top) / rect.height - 0.5; // range: [-0.5, 0.5]
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#070b13] text-white"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Background Grid */}
      <motion.div
        style={{
          x: gridTranslateX,
          y: gridTranslateY,
          backgroundImage: "radial-gradient(circle_at_center, #10b98115 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        className="pointer-events-none absolute inset-0 -z-20 opacity-70"
      />

      {/* Energetic glowing aura spots */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Futuristic Code Stream Particles Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "-10vh",
              opacity: 0.1,
            }}
            animate={{
              y: "110vh",
              opacity: [0.1, 0.7, 0.7, 0.1],
            }}
            style={{
              left: `${i * 5}%`,
              top: 0,
            }}
            transition={{
              duration: 5 + (i % 4) * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.25,
            }}
            className="absolute font-mono text-[9px] text-emerald-400/60 whitespace-nowrap"
          >
            {`const dev = { name: "Sushanth", task: "${["DSA", "AI", "FullStack", "Web"][i % 4]}" };`}
          </motion.div>
        ))}
      </div>

      {/* Main 3D Tilting Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex flex-col items-center rounded-[2.5rem] border border-white/10 bg-slate-950/40 px-10 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-md sm:px-16"
      >
        <motion.div
          style={{
            x: textTranslateX,
            y: textTranslateY,
            transformStyle: "preserve-3d",
          }}
          className="space-y-6"
        >
          {/* Accent Line */}
          <div
            style={{ transform: "translateZ(40px)" }}
            className="mx-auto h-[2px] w-24 bg-gradient-to-r from-emerald-500 via-cyan-400 to-sky-500"
          />

          {/* Name Header */}
          <h1
            style={{ transform: "translateZ(80px)" }}
            className="text-balance text-4xl font-extrabold tracking-wider sm:text-6xl md:text-7xl"
          >
            <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              SUSHANTH
            </span>
            <span className="mt-2 block bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(52,211,153,0.3)]">
              TARAPATLA
            </span>
          </h1>

          {/* Tagline */}
          <p
            style={{ transform: "translateZ(50px)" }}
            className="text-balance text-sm font-semibold tracking-[0.2em] text-cyan-300/80 uppercase sm:text-base"
          >
            Aspiring Software Developer
          </p>

          {/* Additional details */}
          <p
            style={{ transform: "translateZ(30px)" }}
            className="mx-auto max-w-sm text-xs text-muted-foreground sm:text-sm"
          >
            Crafting elegant software solutions through AI, full-stack web architectures, and algorithmic problem-solving.
          </p>
        </motion.div>

        {/* Explore Button */}
        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          style={{ transform: "translateZ(60px)" }}
          className="group mt-12 inline-flex items-center gap-3 rounded-full border border-emerald-500/50 bg-gradient-to-r from-emerald-500/90 via-cyan-500/90 to-sky-500/90 px-8 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition"
        >
          Explore Portfolio
          <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </div>
  );
}
