"use client";

import { useState, useEffect } from "react";

const CIPHER_CHARS = "ΔΘΛΞΠΣΦΨΩ∑∂∇≈⊕⊗◆◇▲▽⌬☰";

const SCRAMBLE_MS = 600;
const DECODE_MS = 1200;
const HOLD_MS = 2200;
const ENCODE_MS = 600;
const CYCLE_MS = 80; // how long each random char lingers before changing

type Phase = "scramble" | "decode" | "hold" | "encode";

export interface CipherChar {
  char: string;
  settled: boolean;
}

function randomCipher(): string {
  return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
}

function fillRandom(len: number): string[] {
  return Array.from({ length: len }, () => randomCipher());
}

/** Returns an array where result[charIndex] = sequence position (when it settles/unsettles). */
function randomSettleOrder(length: number): number[] {
  const indices: number[] = Array.from({ length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const result = new Array<number>(length);
  for (let i = 0; i < length; i++) {
    result[indices[i]] = i;
  }
  return result;
}

export function useCipherCycle(words: readonly string[]): {
  chars: CipherChar[];
  word: string;
} {
  const [chars, setChars] = useState<CipherChar[]>(() =>
    Array.from(words[0], (c) => ({ char: c, settled: true }))
  );
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;
    let phase: Phase = "hold";
    let phaseStart = 0;
    let settleOrder: number[] = [];
    let prevLength = words[0].length;
    let rafId = 0;

    // Cached random chars — refreshed every CYCLE_MS so symbols linger
    let glyphs = fillRandom(words[0].length);
    let lastCycleTs = 0;

    const tick = (ts: number) => {
      if (phaseStart === 0) phaseStart = ts;

      const elapsed = ts - phaseStart;
      const word = words[index];

      if (phase === "scramble" && elapsed >= SCRAMBLE_MS) {
        phase = "decode";
        phaseStart = ts;
        settleOrder = randomSettleOrder(word.length);
        prevLength = word.length;
      } else if (phase === "decode" && elapsed >= DECODE_MS) {
        phase = "hold";
        phaseStart = ts;
        setChars(Array.from(word, (c) => ({ char: c, settled: true })));
      } else if (phase === "hold" && elapsed >= HOLD_MS) {
        phase = "encode";
        phaseStart = ts;
        settleOrder = randomSettleOrder(word.length);
      } else if (phase === "encode" && elapsed >= ENCODE_MS) {
        prevLength = word.length;
        index = (index + 1) % words.length;
        setCurrentWord(words[index]);
        phase = "scramble";
        phaseStart = ts;
      }

      const w = words[index];
      const e = ts - phaseStart;

      // Refresh the random glyph buffer at CYCLE_MS intervals
      if (ts - lastCycleTs >= CYCLE_MS) {
        const maxLen = Math.max(...words.map((wd) => wd.length));
        glyphs = fillRandom(maxLen);
        lastCycleTs = ts;
      }

      if (phase === "scramble") {
        const target = w.length;
        const progress = Math.min(e / SCRAMBLE_MS, 1);
        const len = Math.round(prevLength + (target - prevLength) * progress);
        setChars(
          Array.from({ length: len }, (_, i) => ({
            char: glyphs[i],
            settled: false,
          }))
        );
      } else if (phase === "decode") {
        const stagger = DECODE_MS / w.length;
        setChars(
          Array.from({ length: w.length }, (_, i) => {
            const done = e >= settleOrder[i] * stagger;
            return { char: done ? w[i] : glyphs[i], settled: done };
          })
        );
      } else if (phase === "encode") {
        const stagger = ENCODE_MS / w.length;
        setChars(
          Array.from({ length: w.length }, (_, i) => {
            const still = e < settleOrder[i] * stagger;
            return { char: still ? w[i] : glyphs[i], settled: still };
          })
        );
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [words]);

  return { chars, word: currentWord };
}
