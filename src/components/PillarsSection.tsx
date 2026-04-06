import { PillarCard } from "./PillarCard";

const PILLARS = [
  {
    title: "Communication",
    description:
      "Peer-to-peer zero-trust networking infrastructure for an agentic future. Encrypted mesh overlays without central authority — enabling private, permissionless connectivity at scale.",
  },
  {
    title: "Data",
    description:
      "Privacy-first autonomous data storage and distribution. Content-addressed, end-to-end encrypted media pipelines built for a surveillance-free future.",
  },
  {
    title: "Education",
    description:
      "AI supported learning systems for kids. For a personalized learning experience which fosters the intrinsic will to explore.",
  },
] as const;

export function PillarsSection() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-grey-400 mb-16 md:mb-20">
          What We Build
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
          {PILLARS.map((pillar) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
