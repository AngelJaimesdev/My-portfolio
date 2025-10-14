import { Briefcase, MonitorCheck } from "lucide-react";

function Experience() {
  const experiences = [
    {
      company: "Alpes Solutions S.A.S - Outsourcing Davinci",
      date: "23 November 2023 - 31 July 2025",
      current: false,
      description:
        "I have been part of various projects within the company, collaborating with the team, fulfilling my responsibilities, and proposing ideas that have contributed to tasks being carried out efficiently and without setbacks.",
      icon: <Briefcase className="text-[#38bdf8] w-5 h-5" />,
    },
    {
      company: "Alpes Solutions S.A.S",
      date: "16 June - 22 November 2023 (5 Months)",
      current: false,
      description:
        "I strengthened the knowledge I had developed on my own by integrating it into collaborative work. In addition, in the work environment I acquired essential soft skills that have allowed me to adapt better and communicate effectively with the team.",
      icon: <MonitorCheck className="text-[#38bdf8] w-5 h-5" />,
      link: "https://alpessolutions.com/",
    },
  ];

  return (
    <div
      id="Experience"
      className="w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center py-16 px-12"
    >
      {/* Título */}
      <h1 className="mt-10 text-3xl text-center md:text-4xl font-bold text-[#38bdf8] mb-10">
        Work Experience
      </h1>

      {/* Línea de tiempo */}
      <div className="relative border-l-2 border-[#38bdf8]/30 w-full max-w-4xl">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="mb-12 ml-6 relative pl-8"
          >
            {/* Círculo con icono */}
            <h4 className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#0f172a] border border-[#38bdf8]/40 shadow shadow-[#38bdf8]/20">
              {exp.icon}
            </h4>

            {/* Info */}
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p className="text-sm text-[#94a3b8]">{exp.date}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>

            {/* Badge o Link */}
            {exp.current ? (
              <h4 className="inline-block mt-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-md">
                Active
              </h4>
            ) : exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-[#0f172a] border border-[#38bdf8]/30 text-white text-xs font-medium px-3 py-2 rounded-md hover:bg-[#1e293b] transition"
              >
                Visit Page
              </a>
            ) : (
              <h4 className="inline-block mt-3 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-md">
                Finished
              </h4>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
