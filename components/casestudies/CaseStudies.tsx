import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "@/lib/casestudies";

export default function CaseStudies() {
  return (
    <section
  id="projects"
  className="mx-auto max-w-7xl px-6 py-32"
>

      <div className="mb-16">

        <p className="uppercase tracking-[0.3em] text-indigo-400 text-sm">
          Featured Work
        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">

          Case Studies

        </h2>

        <p className="mt-5 max-w-2xl text-zinc-400">

          A selection of projects, campaigns and community initiatives I've led across Web3.

        </p>

      </div>

      <div className="space-y-10">

        {caseStudies.map((project) => (

          <CaseStudyCard
            key={project.id}
            project={project}
          />

        ))}

      </div>

    </section>
  );
}