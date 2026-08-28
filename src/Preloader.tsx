import { useEffect, useState } from "react";

function Preloader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const fade = window.setTimeout(() => setFading(true), 650);
    const remove = window.setTimeout(() => setGone(true), 1200);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-4xl font-bold tracking-[0.3em] bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
          AJ
        </span>
        <span className="relative block h-0.5 w-24 overflow-hidden rounded-full bg-[#1e293b]">
          <span className="preloader-sweep absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#2563eb] to-transparent" />
        </span>
      </div>
    </div>
  );
}

export default Preloader;
