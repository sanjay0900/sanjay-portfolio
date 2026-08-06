import FeaturedWorkCard from "./FeaturedWorkCard";
import { featuredWork } from "@/lib/featuredWork";

export default function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-20">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
          Featured Work
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Community Campaigns,
          <br />
          Products & Leadership.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Some of the most impactful initiatives I've led across Web3
          ecosystems, combining community growth, offline events,
          product building and regional operations.
        </p>

      </div>

      <div className="space-y-32">

        {featuredWork.map((project, index) => (

          <FeaturedWorkCard
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />

        ))}

      </div>

    </section>
  );
}