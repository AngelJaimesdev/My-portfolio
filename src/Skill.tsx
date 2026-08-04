import { useReveal, revealClass } from "./useReveal";

function Skill() {
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: listRef, visible: listVisible } = useReveal<HTMLDivElement>();

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS",
    "React", "Angular", ".NET",
    "Node.js", "NestJS", "Laravel",
    "MySQL", "PostgreSQL", "SQL",
    "Firebase", "Cloud Functions", "Microservices",
    "Git", "GitHub", "Azure DevOps", "TFVC",
    "AI-Assisted Development", "Monday"
  ];

  return (
    <div id="Skill" className="w-full min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex flex-col items-center justify-center p-10">
      
      {/* Título */}
      <h1
        ref={titleRef}
        className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mt-10 text-center ${revealClass(titleVisible)}`}
      >
        Skills & Technologies
      </h1>

      {/* Subtítulo */}
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`md:text-lg text-[#94a3b8] mb-8 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        These are the technologies and tools I use to create modern and scalable web experiences.
      </h2>

      {/* Lista de Skills */}
      <div ref={listRef} className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, i) => (
          <span
            key={skill}
            style={{ transitionDelay: `${i * 40}ms` }}
            className={`px-5 py-2 rounded-full bg-[#0f172a] text-[#f8fafc] text-sm font-medium border border-[#38bdf8]/30 shadow-md shadow-[#38bdf8]/20 hover:border-sky-400/70 hover:shadow-lg hover:shadow-sky-500/30 hover:scale-105 transition-all duration-300 ${revealClass(listVisible)}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
