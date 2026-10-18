"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Wraps content and fades + slides it up when it enters the viewport.
 */
export default function FadeInSection({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal the hero immediately, but wait for other sections until they are closer.
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) setVisible(true);
    };
    check();

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -2% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        "transition-[opacity,transform,filter] duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] " +
        (visible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-12 blur-[4px]") +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </div>
  );
}
