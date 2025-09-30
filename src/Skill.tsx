function Skill() {
  const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS",
  "React", "Angular", 
  "Node.js", "NestJS", "Laravel",
  "MySQL", "PostgreSQL",
  "Firebase", "Cloud Functions", "Microservices",
  "Git", "GitHub"
];


  return (
    <div className="w-full min-h-screen bg-amber-300 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Habilidades & Tecnologías
      </h1>
      <h2 className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Te comparto las tecnologías más recurrentes que utilizo para realizar mis proyectos
      </h2>

      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-medium shadow-md hover:bg-gray-300 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
