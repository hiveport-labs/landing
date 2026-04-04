"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CIPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*?!+=<>{}[]~^";
const TICK_INTERVAL = 40; // ~25fps
const DECODE_DURATION = 800;
const HOLD_DURATION = 1600;
const SCRAMBLE_OUT_DURATION = 500;
const GAP_DURATION = 300;

type Phase = "decode-in" | "hold" | "scramble-out" | "gap";

function randomChar(): string {
  return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
}

export function useCipherCycle(words: readonly string[]): {
  display: string;
  word: string;
} {
  const [display, setDisplay] = useState(words[0]);
  const indexRef = useRef(0);
  const phaseRef = useRef<Phase>("hold");
  const phaseStartRef = useRef(Date.now());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const holdTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTicking = useCallback(() => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = now - phaseStartRef.current;

      switch (phaseRef.current) {
        case "decode-in": {
          const word = words[indexRef.current];
          const stagger = DECODE_DURATION / word.length;
          let result = "";
          for (let i = 0; i < word.length; i++) {
            result += elapsed >= i * stagger ? word[i] : randomChar();
          }
          setDisplay(result);
          if (elapsed >= DECODE_DURATION) {
            phaseRef.current = "hold";
            phaseStartRef.current = now;
            // Pause ticking during hold
            if (intervalRef.current !== null) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            setDisplay(word);
            holdTimeoutRef.current = setTimeout(() => {
              phaseRef.current = "scramble-out";
              phaseStartRef.current = Date.now();
              startTicking();
            }, HOLD_DURATION);
          }
          break;
        }
        case "scramble-out": {
          const word = words[indexRef.current];
          const progress = elapsed / SCRAMBLE_OUT_DURATION;
          let result = "";
          for (let i = 0; i < word.length; i++) {
            result += Math.random() < progress ? "\u00A0" : randomChar();
          }
          setDisplay(result);
          if (elapsed >= SCRAMBLE_OUT_DURATION) {
            phaseRef.current = "gap";
            phaseStartRef.current = now;
            setDisplay("");
          }
          break;
        }
        case "gap": {
          if (elapsed >= GAP_DURATION) {
            indexRef.current = (indexRef.current + 1) % words.length;
            phaseRef.current = "decode-in";
            phaseStartRef.current = now;
          }
          break;
        }
      }
    }, TICK_INTERVAL);
  }, [words]);

  const stopTicking = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (holdTimeoutRef.current !== null) {
      clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Start with a hold on the first word, then begin cycling
    phaseRef.current = "hold";
    phaseStartRef.current = Date.now();
    holdTimeoutRef.current = setTimeout(() => {
      phaseRef.current = "scramble-out";
      phaseStartRef.current = Date.now();
      startTicking();
    }, HOLD_DURATION);

    return stopTicking;
  }, [startTicking, stopTicking]);

  return { display, word: words[indexRef.current] };
}
