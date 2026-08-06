"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Metric {
  label: string;
  value: string;
}

interface Project {
  id: number;
  company: string;
  image: string;
  role: string;
  duration: string;
  description: string;
  stats: Metric[];
  skills: string[];
}

interface Props {
  project: Project;
}

export default function CaseStudyCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0D1117] hover:border-indigo-500/50 hover:shadow-[0_20px_80px_rgba(99,102,241,0.18)]"
    >
      {/* Cover */}

      <div className="relative h-[380px] overflow-hidden">

        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full"
        >

          <Image
            src={project.image}
            alt={project.company}
            fill
            className="object-cover"
          />

        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="absolute bottom-8 left-8"
        >

          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
            Featured Case Study
          </p>

          <h2 className="mt-3 text-5xl font-black text-white">
            {project.company}
          </h2>

          <p className="mt-2 text-lg text-zinc-300">
            {project.role}
          </p>

        </motion.div>

      </div>

      {/* Content */}

      <div className="p-10">

        {/* Metrics */}

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          {project.stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * .08,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-indigo-500/40"
            >

              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .2,
          }}
          className="mt-10 max-w-4xl text-lg leading-9 text-zinc-400"
        >
          {project.description}
        </motion.p>

        {/* Skills */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.skills.map((skill) => (

            <motion.span
              key={skill}
              whileHover={{
                y: -3,
              }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </motion.span>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">

          <div>

            <p className="text-xl font-semibold text-white">
              Explore the complete project
            </p>

            <p className="mt-1 text-zinc-500">
              Campaigns • Meetups • Responsibilities • Gallery
            </p>

          </div>

          <motion.div
            whileHover={{
              x: 5,
            }}
          >

            <Link
              href={`/case-study/${project.company
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              View Case Study

              <ArrowRight size={18} />

            </Link>

          </motion.div>

        </div>

      </div>

    </motion.div>
  );
}