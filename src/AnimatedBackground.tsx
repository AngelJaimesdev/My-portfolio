function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <img
        src="/assets/image_fondo.webp"
        alt=""
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}

export default AnimatedBackground;
