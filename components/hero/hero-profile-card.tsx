"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HERO_COMPANIES, HERO_PROFILE } from "@/lib/hero";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export default function HeroProfileCard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="relative mx-auto w-full max-w-sm lg:max-w-none lg:mx-0"
    >
      <div
        aria-hidden
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl"
      />

      <Card className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] py-0 shadow-2xl shadow-black/40 backdrop-blur-xl ring-0">
        <CardContent className="p-0">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-white/[0.06] to-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm">
                <User className="size-14 text-zinc-500" strokeWidth={1.25} />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#09090B]/80 to-transparent" />
          </div>

          <div className="space-y-4 p-6">
            <div>
              <p className="font-[family-name:var(--font-space)] text-xl font-semibold tracking-tight text-white">
                {HERO_PROFILE.name}
              </p>
              <p className="mt-1 text-sm text-zinc-400">{HERO_PROFILE.role}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {HERO_COMPANIES.map((company) => (
                <Badge
                  key={company}
                  variant="outline"
                  className="border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.06]"
                >
                  {company}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
