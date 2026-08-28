import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";
import { useLang } from "./i18n";

function Skill() {
  const { t } = useLang();
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: listRef, visible: listVisible } = useReveal<HTMLDivElement>();

  const groups = [
    {
      label: t.skills.categories.frontend,
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "TailwindCSS"],
    },
    {
      label: t.skills.categories.backend,
      items: [".NET", "Node.js", "NestJS", "Laravel", "Microservices", "Cloud Functions"],
    },
    {
      label: t.skills.categories.databases,
      items: ["PostgreSQL", "MySQL", "SQL", "Firebase"],
    },
    {
      label: t.skills.categories.tools,
      items: ["Git", "GitHub", "Azure DevOps", "TFVC", "AI-Assisted Development", "Monday"],
    },
  ];

  return (
    <div className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#0d0d0f] to-[#050505] flex flex-col items-center justify-center p-10">
      <AnimatedBackground />

      {/* Título */}
      <h1
        ref={titleRef}
        className={`relative z-10 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent mt-10 text-center ${revealClass(titleVisible)}`}
      >
        {t.skills.title}
      </h1>

      {/* Subtítulo */}
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`relative z-10 md:text-lg text-[#94a3b8] mb-10 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        {t.skills.subtitle}
      </h2>

      {/* Skills agrupadas por categoría */}
      <div
        ref={listRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 w-full max-w-4xl"
      >
        {groups.map((group, gi) => (
          <div
            key={group.label}
            style={{ transitionDelay: `${gi * 120}ms` }}
            className={revealClass(listVisible)}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2563eb] mb-3">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-[#050505] text-[#f8fafc] text-sm font-medium border border-[#2563eb]/30 shadow-md shadow-[#2563eb]/20 hover:border-[#2563eb]/70 hover:shadow-lg hover:shadow-[#1d4ed8]/30 hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
