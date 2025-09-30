function Proyect() {
  return (
    <div className="w-full min-h-screen bg-green-400 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Proyectos</h1>
      <h2 className="text-lg text-gray-800 mb-10 text-center max-w-2xl">
        Mi portafolio es actualmente mi principal proyecto
      </h2>

      <img
        src="/src/assets/portfolio-preview.png"
        alt="Preview de mi portafolio"
        className="rounded-xl shadow-lg w-full max-w-3xl mb-6"
      />

      {/* Tecnologías usadas */}
      <div className="flex flex-wrap gap-3 justify-center">
        {["React", "TypeScript", "TailwindCSS"].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-medium shadow"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Proyect;
