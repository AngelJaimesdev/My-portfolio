import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div
      className="z-50 fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none border border-[#38bdf8] bg-[#38bdf8]/20 mix-blend-difference transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    ></div>
  );
}

export default CustomCursor;
