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

    // If already visible (e.g. on first load within threshold), show immediately.
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) setVisible(true);
    };
    check();

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        "transition-all duration-700 ease-out " +
        (visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8") +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </div>
  );
}
