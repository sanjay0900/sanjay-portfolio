"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function StaggerContainer({
  children,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.05,
        margin: "0px 0px -10% 0px",
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}