import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";

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
    <div id="Skill" className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#0d0d0f] to-[#050505] flex flex-col items-center justify-center p-10">
      <AnimatedBackground />

      {/* Título */}
      <h1
        ref={titleRef}
        className={`relative z-10 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent mt-10 text-center ${revealClass(titleVisible)}`}
      >
        Skills & Technologies
      </h1>

      {/* Subtítulo */}
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`relative z-10 md:text-lg text-[#94a3b8] mb-8 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        These are the technologies and tools I use to create modern and scalable web experiences.
      </h2>

      {/* Lista de Skills */}
      <div ref={listRef} className="relative z-10 flex flex-wrap gap-4 justify-center">
        {skills.map((skill, i) => (
          <span
            key={skill}
            style={{ transitionDelay: `${i * 40}ms` }}
            className={`px-5 py-2 rounded-full bg-[#050505] text-[#f8fafc] text-sm font-medium border border-[#2563eb]/30 shadow-md shadow-[#2563eb]/20 hover:border-[#2563eb]/70 hover:shadow-lg hover:shadow-[#1d4ed8]/30 hover:scale-105 transition-all duration-300 ${revealClass(listVisible)}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
