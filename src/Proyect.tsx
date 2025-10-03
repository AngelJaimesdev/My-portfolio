function Proyect() {
  return (
    <div id="Proyects" className="w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center p-10">
      
      {/* Título */}
      <h1 className="text-3xl text-center md:text-4xl font-bold text-[#38bdf8] mt-10">Proyectos</h1>
      
      {/* Subtítulo */}
      <h2 className="md:text-lg text-[#94a3b8] mb-10 text-center max-w-2xl">
        Este portafolio es un proyecto personal diseñado para mostrar mis habilidades y experiencia en desarrollo web.
      </h2>

      {/* Card del proyecto */}
      <div className="bg-[#0f172a] border border-[#38bdf8]/30 rounded-xl shadow-lg shadow-[#38bdf8]/20 p-6 w-full max-w-3xl">
        <img
          src="/src/assets/imagen-portafolio.png"
          alt="Preview de mi portafolio"
          className="rounded-lg shadow-md mb-6 w-full h-70 mx-auto object-cover"
        />

        {/* Tecnologías usadas */}
        <div className="flex flex-wrap gap-3 justify-center">
          {["React", "TypeScript", "TailwindCSS"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-[#0f172a] text-[#f8fafc] text-sm font-medium border border-[#38bdf8]/30 shadow-md shadow-[#38bdf8]/20 hover:bg-[#1e293b] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proyect;
