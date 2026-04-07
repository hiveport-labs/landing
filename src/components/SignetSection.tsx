import Image from "next/image";

export function SignetSection() {
  return (
    <section className="bg-grey-100 py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="/signet.png"
          alt="Hiveport signet"
          width={112}
          height={112}
          className="mx-auto w-20 h-20 md:w-28 md:h-28"
        />

        <div className="w-12 h-px bg-grey-400 mx-auto my-10 md:my-14" />

        <h2 className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-grey-400 mb-6">
          Our Signet
        </h2>

        <p className="text-grey-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Privacy and freedom are two sides of the same coin - you can't have one without the other. 
          Yet, most of our technology relies on centralized services that pose a massive threat to both. 
          At Hiveport, we are building foundational tech to decentralize the core infrastructure of our daily lives.
        </p>
      </div>
    </section>
  );
}
