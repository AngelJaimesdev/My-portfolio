function Skill() {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS",
    "React", "Angular",
    "Node.js", "NestJS", "Laravel",
    "MySQL", "PostgreSQL",
    "Firebase", "Cloud Functions", "Microservices",
    "Git", "GitHub",'Sql'
  ];

  return (
    <div id="Skill" className="w-full min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex flex-col items-center justify-center p-10">
      
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#38bdf8] mt-10 text-center">
        Skills & Technologies
      </h1>

      {/* Subtítulo */}
      <h2 className="md:text-lg text-[#94a3b8] mb-8 text-center max-w-2xl">
        These are the technologies and tools I use to create modern and scalable web experiences.
      </h2>

      {/* Lista de Skills */}
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 rounded-full bg-[#0f172a] text-[#f8fafc] text-sm font-medium border border-[#38bdf8]/30 shadow-md shadow-[#38bdf8]/20 hover:bg-[#1e293b] hover:scale-105 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
