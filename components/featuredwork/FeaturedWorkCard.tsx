import Image from "next/image";

interface Metric {
  value: string;
  label: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: Metric[];
  skills: string[];
}

interface FeaturedWorkCardProps {
  project: Project;
  reverse?: boolean;
}

export default function FeaturedWorkCard({
  project,
  reverse = false,
}: FeaturedWorkCardProps) {
  return (
    <div
      className={`grid items-center gap-14 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* IMAGE */}

      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F1118]">

        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={650}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      </div>

      {/* CONTENT */}

      <div>

        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
          {project.category}
        </span>

        <h3 className="mt-6 text-5xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          {project.description}
        </p>

        {/* Metrics */}

        <div className="mt-10 grid grid-cols-3 gap-6">

          {project.metrics.map((metric) => (

            <div key={metric.label}>

              <h4 className="text-4xl font-bold text-white">
                {metric.value}
              </h4>

              <p className="mt-2 text-zinc-500">
                {metric.label}
              </p>

            </div>

          ))}

        </div>

        {/* Skills */}

        <div className="mt-10 flex flex-wrap gap-3">

          {project.skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
}