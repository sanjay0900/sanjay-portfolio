"use client";

import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import type { FeaturedPost } from "@/lib/featured";

interface FeaturedPostCardProps {
  post: FeaturedPost;
}

export default function FeaturedPostCard({
  post,
}: FeaturedPostCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0D1117] transition-colors duration-300 hover:border-indigo-500/40"
    >
      {/* Tweet Screenshot */}

      <div className="relative overflow-hidden bg-black">
        <Image
          src={post.image}
          alt={`${post.source} - ${post.title}`}
          width={1200}
          height={1600}
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}

      <div className="p-7">
        {/* Source + Date */}

        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            {post.source}
          </span>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Calendar size={14} />
            {post.date}
          </div>
        </div>

        {/* Title */}

        <h3 className="mt-5 text-2xl font-bold text-white">
          {post.title}
        </h3>

        {/* Description */}

        <p className="mt-3 leading-7 text-zinc-400">
          {post.description}
        </p>

        {/* CTA */}

        <div className="mt-7 border-t border-white/10 pt-6">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
          >
            View original post
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}