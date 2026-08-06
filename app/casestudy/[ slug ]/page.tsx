import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

import { caseStudyDetails } from "@/lib/caseStudyDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(caseStudyDetails).map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const study =
    caseStudyDetails[slug as keyof typeof caseStudyDetails];

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#08080B] text-white">

      {/* HERO */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
            Case Study
          </p>

          <h1 className="mt-5 text-6xl font-black">
            {study.title}
          </h1>

          <p className="mt-4 text-xl text-zinc-400">
            {study.role}
          </p>

          <p className="mt-2 text-zinc-500">
            {study.duration}
          </p>

          <div className="relative mt-14 h-[500px] overflow-hidden rounded-3xl border border-white/10">

            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              className="object-cover"
            />

          </div>

        </div>
      </section>

      {/* METRICS */}

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-20 md:grid-cols-4">

        {study.metrics.map((metric) => (

          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >

            <h2 className="text-5xl font-black">
              {metric.value}
            </h2>

            <p className="mt-3 text-zinc-400">
              {metric.label}
            </p>

          </div>

        ))}

      </section>

      {/* OVERVIEW */}

      <section className="mx-auto max-w-6xl px-6 py-10">

        <h2 className="text-4xl font-bold">
          Project Overview
        </h2>

        <p className="mt-6 text-lg leading-9 text-zinc-400">
          {study.overview}
        </p>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="text-4xl font-bold">
          Key Achievements
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {study.achievements.map((achievement) => (

            <div
              key={achievement}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >

              <CheckCircle
                className="mt-1 text-indigo-400"
                size={22}
              />

              <p className="text-zinc-300">
                {achievement}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* GALLERY */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-10 text-4xl font-bold">
          Gallery
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {study.gallery.map((image) => (

            <div
              key={image}
              className="relative h-80 overflow-hidden rounded-3xl border border-white/10"
            >

              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}