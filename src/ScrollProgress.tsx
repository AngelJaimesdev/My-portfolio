function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-0.5">
      <div
        className="h-full bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] shadow-[0_0_8px_rgba(37,99,235,0.6)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
