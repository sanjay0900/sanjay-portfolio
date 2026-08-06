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
  className="py-28"
>
      <div className="mx-auto max-w-7xl px-6">

        <FadeUp>

          <div className="mb-16 max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              Proof of Impact
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-white">
              Real numbers.
              <br />
              Real communities.
              <br />
              Real results.
            </h2>

          </div>

        </FadeUp>

        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >

          {impactData.map((item) => (

            <StaggerItem key={item.title}>

              <ImpactCard
                value={item.value}
                title={item.title}
                description={item.description}
              />

            </StaggerItem>

          ))}

        </StaggerContainer>

      </div>
    </section>
  );
}