"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO } from "@/lib/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Background Glow */}

      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px] lg:blur-[180px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">

        {/* LEFT */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-400 sm:mb-8 sm:text-sm"
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
            className="whitespace-pre-line text-4xl font-black leading-none tracking-tight text-white sm:text-5xl lg:text-8xl"
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

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >

            <Link
              href={HERO.ctas.primary.href}
              className="w-full rounded-xl bg-white px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-100 sm:w-auto"
            >
              {HERO.ctas.primary.label}
            </Link>

            <Link
              href={HERO.ctas.secondary.href}
              className="w-full rounded-xl border border-white/10 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5 sm:w-auto"
            >
              {HERO.ctas.secondary.label}
            </Link>

          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">

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

                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
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
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="relative flex justify-center"
        >

          <motion.div
            className="absolute h-72 w-72 rounded-full bg-indigo-500/20 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
            className="relative w-full max-w-[430px] rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6"
          >

            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-800">

              <Image
                src="/profile.png"
                alt="Sanjay Das"
                width={600}
                height={750}
                priority
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="mt-6">

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Sanjay Das
              </h3>

              <p className="mt-2 text-zinc-400">
                Community Operations & Growth Leader
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {[
                  "Bitget Wallet",
                  "Gensyn",
                  "PancakeSwap",
                ].map((tag) => (

                  <motion.span
                    key={tag}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white sm:text-sm"
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