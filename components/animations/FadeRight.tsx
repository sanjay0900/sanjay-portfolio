"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeRightProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeRight({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeRightProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}