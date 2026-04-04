import { Logo } from "./Logo";

export function SignetSection() {
  return (
    <section className="bg-grey-100 py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Logo className="w-20 h-20 md:w-28 md:h-28 mx-auto text-black" />

        <div className="w-12 h-px bg-grey-400 mx-auto my-10 md:my-14" />

        <h2 className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-grey-400 mb-6">
          Our Signet
        </h2>

        <p className="text-grey-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          The Hiveport signet represents the convergence of imaging science,
          distributed data, and decentralized networks. Each aperture blade
          within the hexagon symbolizes a facet of our research — privacy,
          infrastructure, and open protocols — converging into a unified core.
          This is our DNA.
        </p>
      </div>
    </section>
  );
}
