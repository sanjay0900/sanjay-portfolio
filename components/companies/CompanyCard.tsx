"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface Company {
  id: number;
  name: string;
  logo: string;
  role: string;
  duration: string;
  accent: string;
  achievements: string[];
}

export default function CompanyCard({
  company,
}: {
  company: Company;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0E1017] p-8"
    >
      {/* Animated Glow */}

      <motion.div
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
        style={{
          backgroundColor: company.accent,
        }}
        initial={{
          opacity: 0.15,
          scale: 1,
        }}
        whileHover={{
          opacity: 0.45,
          scale: 1.2,
        }}
        transition={{
          duration: 0.4,
        }}
      />

      {/* Header */}

      <div className="relative flex items-start gap-5">

        <motion.div
          whileHover={{
            rotate: -5,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10"
          style={{
            backgroundColor: `${company.accent}15`,
          }}
        >
          <Image
            src={company.logo}
            alt={company.name}
            width={54}
            height={54}
            className="object-contain"
          />
        </motion.div>

        <div className="flex-1">

          <h3 className="text-3xl font-bold text-white">
            {company.name}
          </h3>

          <p
            className="mt-1 text-lg font-semibold"
            style={{
              color: company.accent,
            }}
          >
            {company.role}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-400">

            <Calendar size={15} />

            {company.duration}

          </div>

        </div>

        <motion.div
          whileHover={{
            x: 5,
            y: -5,
            rotate: 12,
          }}
        >
          <ArrowUpRight
            size={22}
            className="text-zinc-500"
          />
        </motion.div>

      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-white/10" />

      {/* Achievements */}

      <div className="space-y-4">

        {company.achievements.map((achievement, index) => (

          <motion.div
            key={achievement}
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              x: 6,
            }}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/10"
          >

            <CheckCircle2
              size={18}
              style={{
                color: company.accent,
              }}
            />

            <span className="text-zinc-300">
              {achievement}
            </span>

          </motion.div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm text-zinc-500">
          Featured Experience
        </span>

        <motion.span
          whileHover={{
            scale: 1.08,
          }}
          className="rounded-full px-4 py-2 text-xs font-semibold"
          style={{
            backgroundColor: `${company.accent}20`,
            color: company.accent,
          }}
        >
          Active
        </motion.span>

      </div>

    </motion.div>
  );
}