import { Briefcase, MonitorCheck, Landmark, Download } from "lucide-react";
import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";
import { useLang } from "./i18n";

const CERTIFICATE_PATH = "/CV/Certificado-laboral-Angel-Jaimes.pdf";

function Experience() {
  const { t } = useLang();
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: timelineRef, visible: timelineVisible } = useReveal<HTMLDivElement>();

  const experiences = [
    {
      company: t.experience.uariv.company,
      date: t.experience.uariv.date,
      current: true,
      description: t.experience.uariv.description,
      icon: <Landmark className="text-[#2563eb] w-5 h-5" />,
    },
    {
      company: t.experience.davinci.company,
      date: t.experience.davinci.date,
      current: false,
      description: t.experience.davinci.description,
      icon: <Briefcase className="text-[#2563eb] w-5 h-5" />,
      certificate: CERTIFICATE_PATH,
    },
    {
      company: t.experience.alpes.company,
      date: t.experience.alpes.date,
      current: false,
      description: t.experience.alpes.description,
      icon: <MonitorCheck className="text-[#2563eb] w-5 h-5" />,
      link: "https://alpessolutions.com/",
      certificate: CERTIFICATE_PATH,
    },
  ];

  return (
    <div
      className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#050505] to-[#0d0d0f] text-white flex flex-col items-center py-16 px-12"
    >
      <AnimatedBackground />

      {/* Título */}
      <h1
        ref={titleRef}
        className={`relative z-10 mt-10 text-3xl text-center md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent mb-10 ${revealClass(titleVisible)}`}
      >
        {t.experience.title}
      </h1>

      {/* Línea de tiempo */}
      <div ref={timelineRef} className="relative z-10 border-l-2 border-[#2563eb]/30 w-full max-w-4xl">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            style={{ transitionDelay: `${i * 150}ms` }}
            className={`mb-12 ml-6 relative pl-8 ${revealClass(timelineVisible)}`}
          >
            {/* Círculo con icono */}
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#050505] border border-[#2563eb]/40 shadow shadow-[#2563eb]/20">
              {exp.icon}
            </span>

            {/* Info */}
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p className="text-sm text-[#94a3b8]">{exp.date}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>

            {/* Badge, Link y Certificado */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              {exp.current ? (
                <span className="bg-emerald-500/90 text-white text-xs font-medium px-3 py-1 rounded-md shadow-md shadow-emerald-500/30">
                  {t.experience.active}
                </span>
              ) : (
                <span className="bg-slate-600/80 text-white text-xs font-medium px-3 py-1 rounded-md">
                  {t.experience.finished}
                </span>
              )}

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#050505] border border-[#2563eb]/30 text-white text-xs font-medium px-3 py-2 rounded-md hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
                >
                  {t.experience.visit}
                </a>
              )}

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  download
                  className="flex items-center gap-1 bg-[#050505] border border-[#2563eb]/30 text-white text-xs font-medium px-3 py-2 rounded-md hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  {t.experience.certificate}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
