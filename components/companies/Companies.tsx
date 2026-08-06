"use client";

import CompanyCard from "./CompanyCard";
import { companies } from "@/lib/companies";

import FadeUp from "@/components/animations/FadeUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function Companies() {
  return (
    <section
      id="companies"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <FadeUp>

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-400">
            Trusted By
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Brands I've Helped Grow
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Building communities, leading campaigns,
            hosting offline events and scaling Web3
            ecosystems across South Asia.
          </p>

        </div>

      </FadeUp>

      <StaggerContainer
        className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-2"
      >

        {companies.map((company) => (

          <StaggerItem key={company.id}>

            <CompanyCard company={company} />

          </StaggerItem>

        ))}

      </StaggerContainer>

    </section>
  );
}