"use client";

import { useMemo, type CSSProperties } from "react";

type FlipTextProps = {
  children: string;
  className?: string;
  duration?: number;
};

export default function FlipText({ children, className = "", duration = 5 }: FlipTextProps) {
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
            "--flip-delay": `${index * 0.15}s`,
          } as CSSProperties}
        >
          {character}
        </span>
      ))}
    </span>
  );
}
