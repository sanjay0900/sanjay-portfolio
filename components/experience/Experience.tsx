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
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* Heading */}

      <FadeUp>

        <div className="mb-20">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Career Journey
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-white">
            Building Web3 Communities
            <br />
            Since 2021.
          </h2>

        </div>

      </FadeUp>

      {/* Featured Experience */}

      <StaggerContainer className="space-y-10">

        {featuredExperiences.map((experience) => (

          <StaggerItem key={experience.id}>

            <ExperienceCard
              experience={experience}
            />

          </StaggerItem>

        ))}

      </StaggerContainer>

      {/* Previous Experience */}

      <FadeUp delay={0.2}>

        <div className="mt-24">

          <h3 className="text-2xl font-bold text-white">
            Earlier Experience
          </h3>

          <StaggerContainer
            className="mt-8 flex flex-wrap gap-4"
          >

            {previousExperiences.map((job) => (

              <StaggerItem key={job.company}>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-indigo-500/40
                    hover:bg-white/[0.05]
                  "
                >

                  <h4 className="font-semibold text-white">
                    {job.company}
                  </h4>

                  <p className="mt-1 text-sm text-zinc-400">
                    {job.role}
                  </p>

                </div>

              </StaggerItem>

            ))}

          </StaggerContainer>

        </div>

      </FadeUp>

    </section>
  );
}