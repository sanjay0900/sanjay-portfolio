"use client";

import ImpactCard from "./ImpactCard";
import { impactData } from "@/lib/impact";

import FadeUp from "@/components/animations/FadeUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden py-28 sm:py-32"
    >
      {/* Emerald + Cyan Atmosphere */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main emerald glow */}
        <div className="absolute left-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />

        {/* Cyan glow */}
        <div className="absolute right-[5%] top-[30%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Bottom green glow */}
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-green-400/[0.06] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}

        <FadeUp>
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
              Proof of Impact
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Real numbers.
              <br />

              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Real communities.
              </span>

              <br />

              Real results.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Measurable community growth, campaigns, events and
              regional operations across Web3 ecosystems.
            </p>
          </div>
        </FadeUp>

        {/* Impact Cards */}

        <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {impactData.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group relative h-full">
                {/* Card Glow */}

                <div className="pointer-events-none absolute -inset-1 rounded-[26px] bg-gradient-to-r from-emerald-500/0 via-cyan-500/15 to-emerald-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                <div className="relative h-full overflow-hidden rounded-[24px] border border-emerald-400/10 bg-[#0d1117]/90 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.035]">
                  {/* Decorative glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/5 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/10" />

                  {/* Existing Card */}

                  <ImpactCard
                    value={item.value}
                    title={item.title}
                    description={item.description}
                  />

                  {/* Bottom accent */}

                  <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-cyan-400 transition-all duration-500 group-hover:w-2/3" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}