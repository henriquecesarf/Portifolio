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

    const reveal = () => {
      setVisible(true);
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (isInView) {
      reveal();
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, visible };
}
