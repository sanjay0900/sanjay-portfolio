"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

interface ImpactCardProps {
  value: string;
  title: string;
  description: string;
}

export default function ImpactCard({
  value,
  title,
  description,
}: ImpactCardProps) {
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;

  const suffix = value.includes("+")
    ? "+"
    : value.includes("%")
    ? "%"
    : "";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.6,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.18)]"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative">

        <h3 className="text-5xl font-black text-white">
          <CountUp
            end={numericValue}
            duration={2}
            suffix={suffix}
            enableScrollSpy
            scrollSpyOnce
          />
        </h3>

        <h4 className="mt-6 text-xl font-semibold text-white">
          {title}
        </h4>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

      </div>
    </motion.div>
  );
}