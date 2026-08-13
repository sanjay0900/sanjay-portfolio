"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO } from "@/lib/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Vibrant Background */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-violet-600/20 blur-[130px] sm:left-[10%] sm:h-[500px] sm:w-[500px] sm:blur-[160px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[120px] sm:right-[5%] sm:h-[450px] sm:w-[450px] sm:blur-[150px]"
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute bottom-0 left-1/2 h-[250px] w-[450px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px] sm:h-[300px] sm:w-[600px] sm:blur-[150px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}

        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex max-w-full rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 sm:mb-8 sm:px-4 sm:text-sm"
          >
            {HERO.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="whitespace-pre-line text-[3.25rem] font-black leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
          >
            {HERO.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8"
          >
            {HERO.description}
          </motion.p>

          {/* CTAs */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Link
              href={HERO.ctas.primary.href}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30 sm:px-8 sm:py-4"
            >
              {HERO.ctas.primary.label}
            </Link>

            <Link
              href={HERO.ctas.secondary.href}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 sm:px-8 sm:py-4"
            >
              {HERO.ctas.secondary.label}
            </Link>
          </motion.div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-7 sm:mt-16 sm:grid-cols-4 sm:gap-6">
            {HERO.stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6 + index * 0.12,
                  duration: 0.5,
                }}
              >
                <h2 className="text-2xl font-bold text-white sm:text-4xl">
                  {item.value}
                </h2>

                <p className="mt-1.5 max-w-[120px] text-xs leading-5 text-zinc-500 sm:mt-2 sm:text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Violet Glow */}

          <motion.div
            className="absolute h-72 w-72 rounded-full bg-violet-500/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Cyan Glow */}

          <motion.div
            className="absolute -right-6 top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-[90px] sm:-right-10 sm:top-20 sm:h-64 sm:w-64 sm:blur-[100px]"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Profile Card */}

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
            className="relative w-full max-w-[380px] rounded-[28px] border border-violet-400/20 bg-white/[0.04] p-4 shadow-2xl shadow-violet-900/20 backdrop-blur-xl sm:max-w-[430px] sm:rounded-[32px] sm:p-6"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[22px] bg-zinc-800 sm:rounded-3xl">
              <Image
                src="/profile.png"
                alt="Sanjay Das"
                width={600}
                height={750}
                priority
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="mt-5 sm:mt-6">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Sanjay Das
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-zinc-400 sm:mt-2 sm:text-base">
                Community Operations & Growth Leader
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {[
                  "Bitget Wallet",
                  "Gensyn",
                  "PancakeSwap",
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      y: -3,
                    }}
                    className={`rounded-full border px-2.5 py-1 text-xs sm:px-3 sm:text-sm ${
                      index === 0
                        ? "border-violet-400/20 bg-violet-400/10 text-violet-200"
                        : index === 1
                          ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-200"
                          : "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200"
                    }`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}