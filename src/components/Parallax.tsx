"use client";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
  speed?: number;
  className?: string;
};

/**
 * Applies a vertical parallax translate to its children based on window scroll.
 * Pass a speed between 0 (no movement) and 1 (same speed as scroll).
 */
export default function Parallax({ children, speed = 0.3, className }: Props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setOffset(window.scrollY);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={className}
      style={{ transform: `translateY(${offset * speed}px)` }}
    >
      {children}
    </div>
  );
}
