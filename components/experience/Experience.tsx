"use client";

import ExperienceCard from "./ExperienceCard";

import {
  featuredExperiences,
  previousExperiences,
} from "@/lib/experience";

import FadeUp from "@/components/animations/FadeUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      {/* Electric Blue + Violet Atmosphere */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blue glow */}

        <div className="absolute left-[5%] top-[10%] h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[170px]" />

        {/* Violet glow */}

        <div className="absolute right-[5%] top-[30%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />

        {/* Bottom blue/violet glow */}

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <FadeUp>
          <div className="mb-20 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Career Journey
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Web3 Communities
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                Since 2021.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              A journey across community operations, regional growth,
              campaigns, events and ecosystem development.
            </p>
          </div>
        </FadeUp>

        {/* Featured Experience */}

        <StaggerContainer className="space-y-10">
          {featuredExperiences.map((experience) => (
            <StaggerItem key={experience.id}>
              <ExperienceCard experience={experience} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Previous Experience */}

        <FadeUp delay={0.2}>
          <div className="mt-24">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
                Earlier Work
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Earlier Experience
              </h3>
            </div>

            <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {previousExperiences.map((job) => (
                <StaggerItem key={job.company}>
                  <div className="group relative h-full">
                    {/* Hover Glow */}

                    <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/0 via-violet-500/15 to-blue-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                    {/* Card */}

                    <div className="relative h-full overflow-hidden rounded-2xl border border-blue-400/10 bg-[#0d1117]/90 px-6 py-6 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-400/30 group-hover:bg-violet-400/[0.035]">
                      <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">
                        {job.company}
                      </h4>

                      <p className="mt-2 text-sm text-zinc-400">
                        {job.role}
                      </p>

                      {/* Bottom accent */}

                      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-blue-400/0 via-violet-400/40 to-blue-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}