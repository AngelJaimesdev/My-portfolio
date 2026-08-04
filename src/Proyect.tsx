import { Download } from "lucide-react";
import { useReveal, revealClass } from "./useReveal";

function Proyect() {
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: listRef, visible: listVisible } = useReveal<HTMLDivElement>();

  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "This portfolio is a personal project designed to showcase my skills and experience in web development.",
      image: "/assets/imagen-portafolio.png",
      techs: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      title: "Barbershop Management App",
      description:
        "Mobile application for managing barbershops: appointments, clients and services, with a NestJS backend and PostgreSQL database.",
      image: "/assets/barberia-app-icon.png",
      techs: ["Angular", "Ionic", "NestJS", "PostgreSQL"],
      apk: "/CV/app-debug.apk",
    },
  ];

  return (
    <div id="Proyects" className="w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center p-10">

      {/* Título */}
      <h1
        ref={titleRef}
        className={`text-3xl text-center md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mt-10 ${revealClass(titleVisible)}`}
      >
        Projects
      </h1>

      {/* Subtítulo */}
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`md:text-lg text-[#94a3b8] mb-10 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        A selection of projects where I apply my skills in web and mobile development.
      </h2>

      {/* Cards de proyectos */}
      <div ref={listRef} className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{ transitionDelay: `${i * 150}ms` }}
            className={`bg-[#0f172a] border border-[#38bdf8]/30 rounded-xl shadow-lg shadow-[#38bdf8]/20 p-6 w-full md:flex-1 hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-1 transition-all duration-300 ${revealClass(listVisible)}`}
          >
            <img
              src={project.image}
              alt={`Preview de ${project.title}`}
              className="rounded-lg shadow-md mb-6 w-full h-70 mx-auto object-cover"
            />

            <h3 className="text-xl font-semibold text-white text-center mb-2">
              {project.title}
            </h3>
            <p className="text-[#94a3b8] text-center mb-6">{project.description}</p>

            {/* Tecnologías usadas */}
            <div className="flex flex-wrap gap-3 justify-center">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-[#0f172a] text-[#f8fafc] text-sm font-medium border border-[#38bdf8]/30 shadow-md shadow-[#38bdf8]/20 hover:border-sky-400/70 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Descarga del APK */}
            {project.apk && (
              <div className="flex justify-center mt-6">
                <a
                  href={project.apk}
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-5 py-2 rounded-xl shadow-lg hover:from-sky-400 hover:to-blue-500 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyect;
