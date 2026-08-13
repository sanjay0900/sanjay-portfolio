"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Bitget Wallet",
    logo: "/companies/bitget.png",
  },
  {
    name: "Gensyn",
    logo: "/companies/gensyn.png",
  },
  {
    name: "PancakeSwap",
    logo: "/companies/pancake.png",
  },
  {
    name: "Transcend Labs",
    logo: "/companies/transcend.png",
  },
];

export default function Companies() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Vibrant Amber + Orange Atmosphere */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-100px] top-[10%] h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[110px] sm:left-[15%] sm:h-[450px] sm:w-[450px] sm:blur-[150px]" />

        <div className="absolute right-[-100px] top-[30%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[110px] sm:right-[10%] sm:h-[400px] sm:w-[400px] sm:blur-[150px]" />

        <div className="absolute bottom-0 left-1/2 h-[220px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-500/[0.06] blur-[110px] sm:h-[300px] sm:w-[600px] sm:blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 sm:text-sm sm:tracking-[0.3em]"
          >
            Trusted By
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-black tracking-tight text-white sm:mt-5 sm:text-5xl"
          >
            Communities &{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Ecosystems
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:mt-5 sm:text-lg sm:leading-7"
          >
            Working across leading Web3 communities, protocols and
            ecosystems.
          </motion.p>
        </div>

        {/* Company Grid */}

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative"
            >
              {/* Hover Glow */}

              <div className="pointer-events-none absolute -inset-1 rounded-[24px] bg-gradient-to-r from-amber-500/0 via-orange-500/20 to-yellow-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

              {/* Card */}

              <div className="relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-[22px] border border-amber-400/10 bg-[#0d0f14]/90 px-5 py-8 backdrop-blur-xl transition-all duration-500 group-hover:border-amber-400/30 group-hover:bg-amber-400/[0.035] sm:min-h-[240px] sm:rounded-[26px] sm:px-8 sm:py-12">
                {/* Decorative Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-amber-400/5 blur-3xl transition-all duration-500 group-hover:bg-amber-400/10 sm:-right-20 sm:-top-20 sm:h-48 sm:w-48" />

                {/* Logo */}

                <div className="relative flex h-16 w-32 items-center justify-center sm:h-24 sm:w-40">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={160}
                    height={90}
                    className="max-h-14 w-auto max-w-[125px] object-contain transition-all duration-500 group-hover:scale-110 sm:max-h-20 sm:max-w-[160px]"
                  />
                </div>

                {/* Company Name */}

                <h3 className="mt-5 text-center text-base font-semibold text-zinc-300 transition-colors duration-300 group-hover:text-amber-200 sm:mt-7 sm:text-xl">
                  {company.name}
                </h3>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-500 group-hover:w-2/3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}