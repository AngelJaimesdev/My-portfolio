import { Quote, Linkedin } from "lucide-react";
import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";
import { useLang } from "./i18n";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function Testimonials() {
  const { t } = useLang();
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: listRef, visible: listVisible } = useReveal<HTMLDivElement>();

  const people = [
    {
      name: "Jeferson Stiven Rolón Ochoa",
      linkedin: "https://www.linkedin.com/in/jeferson-stiven-rolon-ochoa",
      ...t.testimonials.jeferson,
    },
    {
      name: "Carlos Felipe Garcés Yepes",
      linkedin: "https://www.linkedin.com/in/felipegarces16",
      ...t.testimonials.carlos,
    },
  ];

  return (
    <div className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#050505] to-[#0d0d0f] text-white flex flex-col items-center justify-center py-16 px-8">
      <AnimatedBackground />

      <h1
        ref={titleRef}
        className={`relative z-10 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent text-center ${revealClass(titleVisible)}`}
      >
        {t.testimonials.title}
      </h1>
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`relative z-10 md:text-lg text-[#94a3b8] mt-3 mb-10 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        {t.testimonials.subtitle}
      </h2>

      <div
        ref={listRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
      >
        {people.map((person, i) => (
          <figure
            key={person.name}
            style={{ transitionDelay: `${i * 120}ms` }}
            className={`flex flex-col rounded-xl border border-[#2563eb]/30 bg-[#050505] p-6 shadow-lg shadow-[#2563eb]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/60 hover:shadow-xl hover:shadow-[#1d4ed8]/30 ${revealClass(listVisible)}`}
          >
            <Quote className="h-7 w-7 text-[#2563eb]/70" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-[#cbd5e1]">
              {person.quote}
            </blockquote>

            <figcaption className="mt-5 flex items-center gap-3 border-t border-[#2563eb]/15 pt-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#0ea5e9] text-xs font-bold text-white">
                {initials(person.name)}
              </span>
              <span className="min-w-0">
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-white hover:text-[#2563eb] transition-colors"
                >
                  {person.name}
                  <Linkedin className="h-3.5 w-3.5 shrink-0" />
                </a>
                <span className="block text-xs text-[#94a3b8] leading-snug mt-0.5">
                  {person.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
