"use client";

import Image from "next/image";
import { useCipherCycle } from "@/hooks/useCipherCycle";

const WORDS = ["PRIVACY", "AUTONOMY", "INTELLIGENCE"] as const;

export function HeroSection() {
  const { chars, word } = useCipherCycle(WORDS);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-5xl">
        <Image
          src="/logo.png"
          alt="Hiveport Labs"
          width={484}
          height={105}
          priority
          className="h-10 md:h-14 lg:h-16 w-auto mb-16 md:mb-20"
        />
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.05] uppercase">
          <span className="block">WE BUILD</span>
          <span
            className="cipher-word text-orange"
            aria-label={word}
            aria-live="polite"
          >
            {chars.map((c, i) => (
              <span
                key={i}
                className={`cipher-char${c.settled ? " settled" : ""}`}
              >
                {c.char}
              </span>
            ))}
          </span>
        </h1>

        <p className="mt-8 md:mt-12 text-grey-600 text-lg md:text-xl max-w-xl leading-relaxed">
          Decentralized infrastructure for humans & agents.
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
