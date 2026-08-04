import { Download } from "lucide-react";
import Navbar from "./Navbar";
import { useReveal, revealClass } from "./useReveal";

function Home() {
  const { ref: textRef, visible: textVisible } = useReveal<HTMLDivElement>();
  const { ref: avatarRef, visible: avatarVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      id="Home"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] h-screen cursor-pointer"
    >
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <div className="h-full w-full flex flex-col md:flex-row justify-center items-center gap-10 p-10">
        <div
          ref={textRef}
          className={`w-full h-full flex flex-col justify-center items-center md:items-start md:pl-20 gap-5 md:text-4xl font-bold text-[#f8fafc] ${revealClass(textVisible)}`}
        >
          <h1 className="text-white">
            I am into{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              software engineering
            </span>
          </h1>
          <h2 className="text-[#94a3b8]">
            I create clean and dynamic web experiences using modern technologies.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/CV/Cv-angel_jaimes.pdf"
              download="CV_Angel_Jaimes.pdf"
              className="group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-sky-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              Download CV
            </a>

            <a
              href="/CV/Tarjeta-Profesional-Angel-Jaimes.pdf"
              download="Tarjeta_Profesional_Angel_Jaimes.pdf"
              className="group flex items-center gap-2 bg-transparent border border-sky-500 text-white px-6 py-3 rounded-xl hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              Download Professional License
            </a>
          </div>
        </div>

        <div
          ref={avatarRef}
          style={{ transitionDelay: "150ms" }}
          className={`relative flex justify-center items-center w-80 h-80 md:w-full md:h-full ${revealClass(avatarVisible)}`}
        >
          <div className="absolute w-64 h-64 md:w-72 md:h-72 bg-sky-500/30 rounded-full blur-3xl" />
          <img
            className="relative rounded-full shadow-xl shadow-sky-500/30 border-4 border-sky-400/60"
            src="/assets/My-avatar.png"
            alt="img-angel"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
