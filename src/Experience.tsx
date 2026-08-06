import { Briefcase, MonitorCheck, Landmark, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { socialLinks } from "./socialLinks";
import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";

const CERTIFICATE_PATH = "/CV/Certificado-laboral-Angel-Jaimes.pdf";

function Experience() {
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: timelineRef, visible: timelineVisible } = useReveal<HTMLDivElement>();
  const { ref: contactRef, visible: contactVisible } = useReveal<HTMLDivElement>();

  const experiences = [
    {
      company: "UARIV - Unidad para la Atención y Reparación Integral a las Víctimas",
      date: "30 January 2026 - Present",
      current: true,
      description:
        "I work as a software developer, contributing to the development and maintenance of systems that support the institution's mission of serving and supporting victims.",
      icon: <Landmark className="text-[#2563eb] w-5 h-5" />,
    },
    {
      company: "Alpes Solutions S.A.S - Outsourcing Davinci",
      date: "23 November 2023 - 31 July 2025",
      current: false,
      description:
        "I have been part of various projects within the company, collaborating with the team, fulfilling my responsibilities, and proposing ideas that have contributed to tasks being carried out efficiently and without setbacks.",
      icon: <Briefcase className="text-[#2563eb] w-5 h-5" />,
      certificate: CERTIFICATE_PATH,
    },
    {
      company: "Alpes Solutions S.A.S",
      date: "16 June - 22 November 2023 (5 Months)",
      current: false,
      description:
        "I strengthened the knowledge I had developed on my own by integrating it into collaborative work. In addition, in the work environment I acquired essential soft skills that have allowed me to adapt better and communicate effectively with the team.",
      icon: <MonitorCheck className="text-[#2563eb] w-5 h-5" />,
      link: "https://alpessolutions.com/",
      certificate: CERTIFICATE_PATH,
    },
  ];

  return (
    <div
      id="Experience"
      className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#050505] to-[#0d0d0f] text-white flex flex-col items-center py-16 px-12"
    >
      <AnimatedBackground />

      {/* Título */}
      <h1
        ref={titleRef}
        className={`relative z-10 mt-10 text-3xl text-center md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent mb-10 ${revealClass(titleVisible)}`}
      >
        Work Experience
      </h1>

      {/* Línea de tiempo */}
      <div ref={timelineRef} className="relative z-10 border-l-2 border-[#2563eb]/30 w-full max-w-4xl">
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${i * 150}ms` }}
            className={`mb-12 ml-6 relative pl-8 ${revealClass(timelineVisible)}`}
          >
            {/* Círculo con icono */}
            <h4 className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#050505] border border-[#2563eb]/40 shadow shadow-[#2563eb]/20">
              {exp.icon}
            </h4>

            {/* Info */}
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p className="text-sm text-[#94a3b8]">{exp.date}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>

            {/* Badge, Link y Certificado */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              {exp.current ? (
                <h4 className="bg-emerald-500/90 text-white text-xs font-medium px-3 py-1 rounded-md shadow-md shadow-emerald-500/30">
                  Active
                </h4>
              ) : (
                <h4 className="bg-slate-600/80 text-white text-xs font-medium px-3 py-1 rounded-md">
                  Finished
                </h4>
              )}

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#050505] border border-[#2563eb]/30 text-white text-xs font-medium px-3 py-2 rounded-md hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
                >
                  Visit Page
                </a>
              )}

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  download
                  className="flex items-center gap-1 bg-[#050505] border border-[#2563eb]/30 text-white text-xs font-medium px-3 py-2 rounded-md hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Contacto */}
      <div
        ref={contactRef}
        className={`relative z-10 w-full max-w-4xl mt-8 flex flex-col items-center text-center border-t border-[#1d4ed8]/20 pt-10 ${revealClass(contactVisible)}`}
      >
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
          Let's build something together
        </h2>
        <p className="text-[#94a3b8] mt-2 max-w-xl">
          I'm open to new opportunities and collaborations. Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#050505] border border-[#2563eb]/30 text-white text-sm font-medium px-4 py-2 rounded-xl hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#050505] border border-[#2563eb]/30 text-white text-sm font-medium px-4 py-2 rounded-xl hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center gap-2 bg-[#050505] border border-[#2563eb]/30 text-white text-sm font-medium px-4 py-2 rounded-xl hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg hover:from-[#2563eb] hover:to-[#0ea5e9] hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
