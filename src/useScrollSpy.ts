import { useEffect, useState, type RefObject } from "react";

/**
 * Tracks the section currently in view inside a scroll container and how far
 * through the container the user has scrolled (0-100).
 */
export function useScrollSpy(
  containerRef: RefObject<HTMLElement | null>,
  ids: readonly string[]
) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const max = container.scrollHeight - container.clientHeight;
      setProgress(max > 0 ? (container.scrollTop / max) * 100 : 0);
    };
    onScroll();
    container.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { root: container, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      container.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [containerRef, ids]);

  return { activeId, progress };
}
