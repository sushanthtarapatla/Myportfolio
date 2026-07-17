"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type BadgeItem = {
  name: string;
  type: "Annual Medal" | "Daily Medal";
  date: string;
  iconUrl: string;
  color: string;
};

const badges: BadgeItem[] = [
  {
    name: "100 Days Badge 2026",
    type: "Annual Medal",
    date: "2026-06-07",
    iconUrl: "https://assets.leetcode.com/static_assets/others/100_1080_1080.png",
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
  },
  {
    name: "50 Days Badge 2026",
    type: "Annual Medal",
    date: "2026-04-15",
    iconUrl: "https://assets.leetcode.com/static_assets/others/50_1080_1080.png",
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    name: "June DCC Badge 2026",
    type: "Daily Medal",
    date: "2026-06-30",
    iconUrl: "https://leetcode.com/static/images/badges/dcc-2026-6.png",
    color: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
  {
    name: "May DCC Badge 2026",
    type: "Daily Medal",
    date: "2026-05-31",
    iconUrl: "https://leetcode.com/static/images/badges/dcc-2026-5.png",
    color: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },
  {
    name: "April DCC Badge 2026",
    type: "Daily Medal",
    date: "2026-04-30",
    iconUrl: "https://leetcode.com/static/images/badges/dcc-2026-4.png",
    color: "from-slate-500/20 via-slate-400/10 to-transparent",
  },
  {
    name: "March DCC Badge 2026",
    type: "Daily Medal",
    date: "2026-03-31",
    iconUrl: "https://leetcode.com/static/images/badges/dcc-2026-3.png",
    color: "from-green-500/20 via-emerald-500/10 to-transparent",
  },
];

export function LeetcodeBadges() {
  return (
    <div className="space-y-4">
      <div className="border-t border-border/50 pt-6">
        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-4">
          LeetCode Achievement Badges
        </h4>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge) => (
            <a
              key={badge.name}
              href="https://leetcode.com/u/60XQAkuAuM/"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b ${badge.color} p-4 h-full text-center shadow-lg transition-colors hover:border-emerald-500/30`}
              >
                {/* Badge Image */}
                <div className="relative h-16 w-16 mb-3 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={badge.iconUrl}
                    alt={badge.name}
                    fill
                    className="object-contain"
                    sizes="64px"
                    unoptimized // SVG/PNG hosted externally
                  />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h5 className="text-[10px] font-bold text-foreground leading-tight group-hover:text-emerald-400 transition-colors">
                    {badge.name}
                  </h5>
                  <p className="text-[8px] uppercase tracking-wider text-muted-foreground/80 font-medium">
                    {badge.type}
                  </p>
                  <p className="text-[8px] text-muted-foreground/65">
                    Earned: {badge.date}
                  </p>
                </div>

                {/* Corner indicator */}
                <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 transition-colors" />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
