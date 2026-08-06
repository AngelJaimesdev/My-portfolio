import { Download } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { useReveal, revealClass } from "./useReveal";

function Home() {
  const { ref: textRef, visible: textVisible } = useReveal<HTMLDivElement>();
  const { ref: avatarRef, visible: avatarVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      id="Home"
      className="relative z-0 overflow-hidden bg-gradient-to-br from-[#050505] to-[#0d0d0f] min-h-[calc(100vh-3.5rem)] cursor-pointer"
    >
      <AnimatedBackground />

      {/* Body */}
      <div className="relative z-10 h-full w-full flex flex-col md:flex-row justify-center items-center gap-10 p-10">
        <div
          ref={textRef}
          className={`w-full h-full flex flex-col justify-center items-center md:items-start gap-5 md:text-4xl font-bold text-[#f8fafc] ${revealClass(textVisible)}`}
        >
          <h1 className="text-white">
            I am into{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
              software engineering
            </span>
          </h1>
          <h2 className="text-[#94a3b8]">
            I create clean and dynamic web <br/>experiences using modern technologies.
          </h2>
          <p className="text-sm md:text-base font-normal text-[#7dd3fc]/90 italic border-l-2 border-[#2563eb]/50 pl-3 max-w-md">
            Master the logic, and any language becomes just syntax.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/CV/Cv-angel_jaimes.pdf"
              download="CV_Angel_Jaimes.pdf"
              className="group flex items-center gap-2 bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white px-6 py-3 rounded-xl shadow-lg hover:from-[#2563eb] hover:to-[#0ea5e9] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              Download CV
            </a>

            <a
              href="/CV/Tarjeta-Profesional-Angel-Jaimes.pdf"
              download="Tarjeta_Profesional_Angel_Jaimes.pdf"
              className="group flex items-center gap-2 bg-transparent border border-[#1d4ed8] text-white px-6 py-3 rounded-xl hover:bg-[#1d4ed8]/10 hover:shadow-lg hover:shadow-[#1d4ed8]/20 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              Download Professional License
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
            className="relative rounded-3xl shadow-xl shadow-[#1d4ed8]/20 border-4 border-[#2563eb]/50 w-64 md:w-100"
            src="/assets/avatar-outdoor.jpg"
            alt="Angel Jaimes"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
