"use client";

import { useMemo, type CSSProperties } from "react";

type FlipTextProps = {
  children: string;
  className?: string;
  duration?: number;
};

/** A lightweight character-flip treatment adapted for the portfolio hero. */
export default function FlipText({ children, className = "", duration = 4.8 }: FlipTextProps) {
  const characters = useMemo(() => Array.from(children), [children]);

  return (
    <span className={`flip-text ${className}`} aria-label={children}>
      {characters.map((character, index) => (
        <span
          key={`${character}-${index}`}
          aria-hidden="true"
          className="flip-char"
          data-char={character}
          style={{
            "--flip-duration": `${duration}s`,
            "--flip-delay": `${(index / Math.max(characters.length, 1)) * 0.42}s`,
          } as CSSProperties}
        >
          {character}
        </span>
      ))}
    </span>
  );
}
