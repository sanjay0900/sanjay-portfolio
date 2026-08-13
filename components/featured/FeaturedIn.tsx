"use client";

import FeaturedPostCard from "./FeaturedPostCard";
import { featuredPosts } from "@/lib/featured";
import { motion } from "framer-motion";

export default function FeaturedIn() {
  return (
    <section
      id="featured"
      className="relative overflow-hidden py-32"
    >
      {/* Ambient Background */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-fuchsia-500/15 blur-[160px]" />

        <div className="absolute right-1/4 top-1/2 h-[450px] w-[450px] rounded-full bg-violet-500/15 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}

        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-400"
          >
            Social Proof
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              In
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="mt-5 text-lg leading-8 text-zinc-400"
          >
            Public mentions, event coverage and community posts
            featuring my work across Web3.
          </motion.p>
        </div>

        {/* Featured Posts */}

        {featuredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                className="relative"
              >
                {/* Card Glow */}

                <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[32px] bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-violet-500/0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <FeaturedPostCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-fuchsia-500/20 bg-fuchsia-500/[0.04] p-12 text-center">
            <p className="text-lg font-semibold text-white">
              Featured posts coming soon.
            </p>

            <p className="mt-2 text-zinc-500">
              Public mentions and social proof will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}