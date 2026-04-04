"use client";

import { useCipherCycle } from "@/hooks/useCipherCycle";

const WORDS = ["PRIVACY", "DECENTRALIZATION", "AI", "INFRASTRUCTURE"] as const;

export function HeroSection() {
  const { display, word } = useCipherCycle(WORDS);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-5xl">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.05] uppercase">
          <span className="block">WE BUILD</span>
          <span
            className="block text-orange cipher-word"
            aria-label={word}
            aria-live="polite"
          >
            {display}
          </span>
        </h1>

        <p className="mt-8 md:mt-12 text-grey-600 text-lg md:text-xl max-w-xl leading-relaxed">
          Distributed data technologies from the ground up.
        </p>

        <a
          href="https://hiveport.io"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 md:mt-14 inline-block bg-orange text-white font-sans font-semibold text-xs md:text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-orange-hover transition-colors duration-200"
        >
          EXPLORE HIVEPORT.IO
        </a>
      </div>
    </section>
  );
}
