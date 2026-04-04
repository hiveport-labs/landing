import { PillarCard } from "./PillarCard";

const PILLARS = [
  {
    title: "Hiveport Networking",
    description:
      "Peer-to-peer zero-trust networking infrastructure. Encrypted mesh overlays without central authority — enabling private, permissionless connectivity at scale.",
  },
  {
    title: "Decentralized Imaging",
    description:
      "Privacy-first autonomous image storage and distribution. Content-addressed, end-to-end encrypted media pipelines built for a surveillance-free future.",
  },
  {
    title: "Crypto Adoption",
    description:
      "Chain-agnostic identity and payment rails. Bridging decentralized finance with real-world utility through open protocols and seamless integration.",
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
