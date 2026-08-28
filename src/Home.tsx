import { Download } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { useReveal, revealClass } from "./useReveal";
import { useTypewriter } from "./useTypewriter";
import { useLang } from "./i18n";

function Home() {
  const { t } = useLang();
  const typedRole = useTypewriter(t.home.roles);
  const { ref: textRef, visible: textVisible } = useReveal<HTMLDivElement>();
  const { ref: avatarRef, visible: avatarVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      className="relative z-0 overflow-hidden bg-gradient-to-br from-[#050505] to-[#0d0d0f] min-h-[calc(100vh-3.5rem)]"
    >
      <AnimatedBackground />

      {/* Body */}
      <div className="relative z-10 h-full w-full flex flex-col md:flex-row justify-center items-center gap-10 p-10">
        <div
          ref={textRef}
          className={`w-full h-full flex flex-col justify-center items-center md:items-start gap-5 md:text-4xl font-bold text-[#f8fafc] ${revealClass(textVisible)}`}
        >
          <h1 className="text-white">
            {t.home.heading}{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
              {t.home.headingAccent}
            </span>
          </h1>
          <p className="flex items-center text-xl md:text-2xl font-semibold text-[#7dd3fc] min-h-[1.75rem] md:min-h-[2.25rem]">
            <span className="text-[#475569] mr-2">&lt;/&gt;</span>
            {typedRole}
            <span className="type-caret ml-1 h-5 md:h-6 bg-[#2563eb]" />
          </p>
          <h2 className="text-[#94a3b8]">{t.home.subtitle}</h2>
          <p className="text-sm md:text-base font-normal text-[#7dd3fc]/90 italic border-l-2 border-[#2563eb]/50 pl-3 max-w-md">
            {t.home.quote}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/CV/Cv-angel_jaimes.pdf"
              download="CV_Angel_Jaimes.pdf"
              className="group flex items-center gap-2 bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white px-6 py-3 rounded-xl shadow-lg hover:from-[#2563eb] hover:to-[#0ea5e9] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              {t.home.downloadCv}
            </a>

            <a
              href="/CV/Tarjeta-Profesional-Angel-Jaimes.pdf"
              download="Tarjeta_Profesional_Angel_Jaimes.pdf"
              className="group flex items-center gap-2 bg-transparent border border-[#1d4ed8] text-white px-6 py-3 rounded-xl hover:bg-[#1d4ed8]/10 hover:shadow-lg hover:shadow-[#1d4ed8]/20 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              {t.home.downloadLicense}
            </a>
          </div>
        </div>

        <div
          ref={avatarRef}
          style={{ transitionDelay: "150ms" }}
          className={`relative flex justify-center items-center w-64 md:w-full md:h-full ${revealClass(avatarVisible)}`}
        >
          <div className="absolute w-64 h-80 md:w-80 md:h-96 bg-[#1d4ed8]/15 rounded-full blur-3xl" />
          <img
            className="animate-float relative rounded-3xl shadow-xl shadow-[#1d4ed8]/20 border-4 border-[#2563eb]/50 w-64 md:w-100"
            src="/assets/avatar-outdoor.webp"
            alt="Angel Jaimes"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
