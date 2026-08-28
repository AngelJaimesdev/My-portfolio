import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, input, textarea, select, label, [role='button']";

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = dotRef.current;
    if (!el) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      frame = 0;
      el.style.transform = `translate(${x - 12}px, ${y - 12}px) scale(var(--cursor-scale, 1))`;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      el.classList.toggle("is-hover", !!target?.closest(INTERACTIVE));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}

export default CustomCursor;
