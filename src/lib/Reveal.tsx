"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Apparition douce au scroll — IntersectionObserver uniquement (jamais
 * d'écoute d'événement scroll). `index` décale l'animation en cascade
 * (80 ms par palier). Le CSS final gère prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--index": index } as CSSProperties}
    >
      {children}
    </div>
  );
}
