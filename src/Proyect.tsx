import { Download } from "lucide-react";
import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";

function Proyect() {
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: listRef, visible: listVisible } = useReveal<HTMLDivElement>();

  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "This portfolio is a personal project designed to showcase my skills and experience in web development.",
      image: "/assets/imagen-portafolio.webp",
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
    <div className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#050505] to-[#0d0d0f] flex flex-col items-center justify-center p-10">
      <AnimatedBackground />

      {/* Título */}
      <h1
        ref={titleRef}
        className={`relative z-10 text-3xl text-center md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent mt-10 ${revealClass(titleVisible)}`}
      >
        Projects
      </h1>

      {/* Subtítulo */}
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`relative z-10 md:text-lg text-[#94a3b8] mb-10 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        A selection of projects where I apply my skills in web and mobile development.
      </h2>

      {/* Cards de proyectos */}
      <div ref={listRef} className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{ transitionDelay: `${i * 150}ms` }}
            className={`bg-[#050505] border border-[#2563eb]/30 rounded-xl shadow-lg shadow-[#2563eb]/20 p-6 w-full md:flex-1 hover:border-[#2563eb]/60 hover:shadow-xl hover:shadow-[#1d4ed8]/30 hover:-translate-y-1 transition-all duration-300 ${revealClass(listVisible)}`}
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
                  className="px-4 py-2 rounded-full bg-[#050505] text-[#f8fafc] text-sm font-medium border border-[#2563eb]/30 shadow-md shadow-[#2563eb]/20 hover:border-[#2563eb]/70 hover:shadow-lg hover:shadow-[#1d4ed8]/30 transition-all duration-300"
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
                  className="flex items-center gap-2 bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white px-5 py-2 rounded-xl shadow-lg hover:from-[#2563eb] hover:to-[#0ea5e9] transition-all duration-300"
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
