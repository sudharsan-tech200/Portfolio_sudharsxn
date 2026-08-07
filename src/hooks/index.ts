import { useState, useEffect, useRef } from "react";

/** Returns a ref and whether that element has scrolled into view. */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

/** Tracks mouse position within an element, for spotlight effects. */
export function useMouseGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  return [ref, pos] as const;
}

/** True once the page has scrolled past the given offset. */
export function useScrolled(offset = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [offset]);

  return scrolled;
}
