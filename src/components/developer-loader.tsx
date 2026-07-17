"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type DeveloperLoaderProps = {
  onFinished: () => void;
};

export function DeveloperLoader({ onFinished }: DeveloperLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  const terminalOutput = [
    "> npm run init sushanth-portfolio --prod",
    "✔ Loading client dependencies... done.",
    "✔ Fetching LeetCode badge achievements...",
    "✔ Mapping Salesforce certification assets...",
    "✔ Compiling components & TSX routes...",
    "✔ System status: ONLINE.",
    "> launching web portal..."
  ];

  useEffect(() => {
    // 5-second total duration
    const totalDuration = 5000;
    const intervalTime = 30; // 30ms step
    const steps = totalDuration / intervalTime;
    const progressIncrement = 100 / steps;
    
    // Manage progress increment
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + progressIncrement;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Manage terminal log lines print scheduling (spread over 5 seconds)
    const logIntervals = [300, 1000, 1800, 2600, 3400, 4100, 4700];
    const logTimers = logIntervals.map((delay, index) => {
      return setTimeout(() => {
        setLines((prev) => [...prev, terminalOutput[index]]);
      }, delay);
    });

    // Complete loader after 5 seconds
    const finishTimeout = setTimeout(() => {
      onFinished();
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
      logTimers.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#070b13] px-6 text-white font-mono">
      {/* Dev Loader Window */}
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-muted-foreground ml-3 uppercase tracking-wider">
            terminal-diagnostics.sh
          </span>
        </div>

        {/* Diagnostic Lines */}
        <div className="h-40 overflow-y-auto space-y-1.5 text-xs text-slate-300">
          {lines.map((line, idx) => (
            <p
              key={idx}
              className={
                line.startsWith(">")
                  ? "text-cyan-400 font-bold"
                  : line.startsWith("✔")
                  ? "text-emerald-400"
                  : "text-slate-300"
              }
            >
              {line}
            </p>
          ))}
        </div>

        {/* Progress Bar Container */}
        <div className="mt-8 space-y-2">
          <div className="flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
            <span>Orchestrating Portal</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-900 border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-sky-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
