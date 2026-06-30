"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOnScrollOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOnScrollOptions = {},
) {
  const { threshold = 0.2, rootMargin = "0px 0px -8% 0px" } = options;
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, visible };
}
