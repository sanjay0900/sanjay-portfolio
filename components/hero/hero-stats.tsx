"use client";

import { motion } from "framer-motion";

import { HERO_STATS } from "@/lib/hero";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + index * 0.08,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export default function HeroStats() {
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {HERO_STATS.map((stat, index) => (
        <motion.div
          key={stat.value}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
        >
          <dt className="sr-only">{stat.label ?? stat.value}</dt>
          <dd
            className={cn(
              "font-[family-name:var(--font-space)] font-semibold tracking-tight text-white",
              stat.label ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
            )}
          >
            {stat.value}
            {stat.label && (
              <span className="mt-0.5 block text-xs font-normal text-zinc-500 sm:text-sm">
                {stat.label}
              </span>
            )}
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}
