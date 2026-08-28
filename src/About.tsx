import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";
import { useLang } from "./i18n";

function About() {
  const { t } = useLang();
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: bodyRef, visible: bodyVisible } = useReveal<HTMLDivElement>();
  const { ref: factsRef, visible: factsVisible } = useReveal<HTMLDivElement>();

  return (
    <div className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#0d0d0f] to-[#050505] text-white flex flex-col items-center justify-center py-16 px-8">
      <AnimatedBackground />

      <h1
        ref={titleRef}
        className={`relative z-10 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent text-center ${revealClass(titleVisible)}`}
      >
        {t.about.title}
      </h1>

      <div
        ref={bodyRef}
        className={`relative z-10 mt-6 max-w-2xl text-center ${revealClass(bodyVisible)}`}
      >
        <p className="text-lg md:text-xl text-[#e2e8f0] font-medium">
          {t.about.lead}
        </p>
        {t.about.paragraphs.map((p, i) => (
          <p key={i} className="mt-4 text-[#94a3b8] leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div
        ref={factsRef}
        className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl"
      >
        {t.about.facts.map((fact, i) => (
          <div
            key={fact.label}
            style={{ transitionDelay: `${i * 80}ms` }}
            className={`rounded-xl bg-[#050505] border border-[#2563eb]/30 shadow-md shadow-[#2563eb]/10 p-4 text-center hover:border-[#2563eb]/70 hover:shadow-lg hover:shadow-[#1d4ed8]/20 transition-all duration-300 ${revealClass(factsVisible)}`}
          >
            <p className="text-xs uppercase tracking-wide text-[#2563eb] font-semibold">
              {fact.label}
            </p>
            <p className="mt-1 text-sm text-[#f8fafc]">{fact.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
