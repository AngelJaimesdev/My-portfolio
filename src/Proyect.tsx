import { Download, ExternalLink, Github } from "lucide-react";
import { useReveal, revealClass } from "./useReveal";
import { useTilt } from "./useTilt";
import AnimatedBackground from "./AnimatedBackground";
import { useLang } from "./i18n";

type Project = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  apk?: string;
  demo?: string;
  repo?: string;
};

function ProjectCard({
  project,
  index,
  visible,
  labels,
}: {
  project: Project;
  index: number;
  visible: boolean;
  labels: { demo: string; code: string; apk: string };
}) {
  const tiltRef = useTilt<HTMLDivElement>(6);

  return (
    <div
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`w-full md:flex-1 [perspective:1000px] ${revealClass(visible)}`}
    >
      <div
        ref={tiltRef}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#2563eb]/30 bg-[#050505] shadow-lg shadow-[#2563eb]/20 transition-[box-shadow,border-color] duration-300 [transform-style:preserve-3d] hover:border-[#2563eb]/60 hover:shadow-xl hover:shadow-[#1d4ed8]/30"
      >
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={`Preview - ${project.title}`}
            loading="lazy"
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-center text-xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mb-6 flex-1 text-center text-[#94a3b8]">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#2563eb]/30 bg-[#050505] px-3.5 py-1.5 text-xs font-medium text-[#f8fafc] shadow-md shadow-[#2563eb]/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.demo || project.repo || project.apk) && (
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] px-4 py-2 text-sm text-white shadow-lg transition-all duration-300 hover:from-[#2563eb] hover:to-[#0ea5e9]"
                >
                  <ExternalLink className="h-4 w-4" />
                  {labels.demo}
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-[#2563eb]/40 bg-transparent px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#2563eb] hover:bg-[#1d4ed8]/10"
                >
                  <Github className="h-4 w-4" />
                  {labels.code}
                </a>
              )}
              {project.apk && (
                <a
                  href={project.apk}
                  download
                  className="flex items-center gap-2 rounded-xl border border-[#2563eb]/40 bg-transparent px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#2563eb] hover:bg-[#1d4ed8]/10"
                >
                  <Download className="h-4 w-4" />
                  {labels.apk}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Proyect() {
  const { t } = useLang();
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: listRef, visible: listVisible } = useReveal<HTMLDivElement>();

  const projects: Project[] = [
    {
      title: t.projects.portfolio.title,
      description: t.projects.portfolio.description,
      image: "/assets/imagen-portafolio.webp",
      techs: ["React", "TypeScript", "TailwindCSS"],
      // demo: "https://angeljaimes.vercel.app",
      // repo: "https://github.com/AngelJaimesdev/portafolio",
    },
    {
      title: t.projects.barbershop.title,
      description: t.projects.barbershop.description,
      image: "/assets/barberia-app-icon.png",
      techs: ["Angular", "Ionic", "NestJS", "PostgreSQL"],
      apk: "/CV/app-debug.apk",
    },
  ];

  const labels = {
    demo: t.projects.demo,
    code: t.projects.code,
    apk: t.projects.downloadApk,
  };

  return (
    <div className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#050505] to-[#0d0d0f] flex flex-col items-center justify-center p-10">
      <AnimatedBackground />

      {/* Título */}
      <h1
        ref={titleRef}
        className={`relative z-10 text-3xl text-center md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent mt-10 ${revealClass(titleVisible)}`}
      >
        {t.projects.title}
      </h1>

      {/* Subtítulo */}
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`relative z-10 md:text-lg text-[#94a3b8] mb-10 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        {t.projects.subtitle}
      </h2>

      {/* Cards de proyectos */}
      <div ref={listRef} className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            visible={listVisible}
            labels={labels}
          />
        ))}
      </div>
    </div>
  );
}

export default Proyect;
