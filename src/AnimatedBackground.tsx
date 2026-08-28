import { useState } from "react";

/**
 * Ambient section backdrop: the fondo image plus two slowly drifting gradient
 * blobs blended on top for a hint of motion. Blob positions/delays are
 * randomised per instance so stacked sections don't look identical while
 * scrolling. Motion is disabled for users who prefer reduced motion
 * (handled in index.css).
 */
function AnimatedBackground() {
  const [seed] = useState(() => ({
    ax: 2 + Math.random() * 28, // %
    ay: 6 + Math.random() * 28,
    bx: 52 + Math.random() * 34,
    by: 40 + Math.random() * 38,
    ad: -Math.random() * 12, // animation-delay (s)
    bd: -Math.random() * 16,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 isolate">
      <img
        src="/assets/image_fondo.webp"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div
        className="bg-blob bg-blob--a hidden md:block h-[26rem] w-[26rem] bg-[#1d4ed8] mix-blend-screen"
        style={{
          left: `${seed.ax}%`,
          top: `${seed.ay}%`,
          animationDelay: `${seed.ad}s`,
        }}
      />
      <div
        className="bg-blob bg-blob--b hidden md:block h-[22rem] w-[22rem] bg-[#0ea5e9] mix-blend-screen"
        style={{
          left: `${seed.bx}%`,
          top: `${seed.by}%`,
          animationDelay: `${seed.bd}s`,
        }}
      />
    </div>
  );
}

export default AnimatedBackground;
