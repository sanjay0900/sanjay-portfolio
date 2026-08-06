"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface Progression {
  title: string;
  period: string;
}

interface Experience {
  id: number;
  slug?: string;
  company: string;
  logo: string;
  accent: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tags: string[];
  progression?: Progression[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const content = (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-3xl border bg-[#0D1117] p-10"
      style={{
        borderColor: `${experience.accent}40`,
      }}
    >
      {/* Animated Glow */}

      <motion.div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[120px]"
        style={{
          backgroundColor: `${experience.accent}25`,
        }}
        initial={{
          opacity: 0,
          scale: 1,
        }}
        whileHover={{
          opacity: 0.9,
          scale: 1.25,
        }}
        transition={{
          duration: 0.45,
        }}
      />

      {/* Header */}

      <div className="relative flex flex-col justify-between gap-8 lg:flex-row">

        <div className="flex items-center gap-6">

          <motion.div
            whileHover={{
              rotate: -5,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl border"
            style={{
              borderColor: `${experience.accent}40`,
              backgroundColor: `${experience.accent}10`,
            }}
          >
            <Image
              src={experience.logo}
              alt={experience.company}
              width={54}
              height={54}
            />
          </motion.div>

          <div>

            <h3 className="text-4xl font-bold text-white">
              {experience.company}
            </h3>

            <p
              className="mt-2 text-lg font-medium"
              style={{
                color: experience.accent,
              }}
            >
              {experience.role}
            </p>

          </div>

        </div>

        <div className="space-y-3 text-zinc-400">

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {experience.period}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {experience.location}
          </div>

        </div>

      </div>

      {/* Summary */}

      <motion.p
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
        className="relative mt-10 max-w-4xl text-lg leading-9 text-zinc-400"
      >
        {experience.summary}
      </motion.p>

      {/* Timeline */}

      {experience.progression && (

        <div className="relative mt-12">

          <h4 className="mb-6 text-xl font-semibold text-white">
            Career Progression
          </h4>

          <div
            className="space-y-6 border-l pl-7"
            style={{
              borderColor: `${experience.accent}40`,
            }}
          >

            {experience.progression.map((step, index) => (

              <motion.div
                key={step.title}
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
                  delay: index * 0.15,
                }}
                className="relative"
              >

                <span
                  className="absolute -left-[33px] top-2 h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: experience.accent,
                  }}
                />

                <p className="font-semibold text-white">
                  {step.title}
                </p>

                <p className="text-sm text-zinc-500">
                  {step.period}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      )}

      {/* Achievements */}

      <div className="mt-12">

        <h4 className="mb-6 text-xl font-semibold text-white">
          Key Achievements
        </h4>

        <div className="grid gap-5 md:grid-cols-2">

          {experience.achievements.map((achievement, index) => (

            <motion.div
              key={achievement}
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
                delay: index * 0.08,
              }}
              whileHover={{
                x: 6,
              }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >

              <CheckCircle2
                size={22}
                className="mt-1 shrink-0"
                style={{
                  color: experience.accent,
                }}
              />

              <span className="text-zinc-300">
                {achievement}
              </span>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Tags */}

      <div className="mt-10 flex flex-wrap gap-3">

        {experience.tags.map((tag) => (

          <motion.span
            key={tag}
            whileHover={{
              y: -3,
            }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
          >
            {tag}
          </motion.span>

        ))}

      </div>

      {/* CTA */}

      <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">

        <p className="text-zinc-500">
          Explore responsibilities, campaigns & gallery
        </p>

        <motion.div
          whileHover={{
            x: 6,
          }}
          className="flex items-center gap-2 font-semibold"
          style={{
            color: experience.accent,
          }}
        >
          View Case Study

          <ArrowRight size={18} />

        </motion.div>

      </div>

    </motion.div>
  );

  if (experience.slug) {
    return (
      <Link
        href={`/case-study/${experience.slug}`}
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
}