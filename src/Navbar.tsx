import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"; // iconos bonitos
import { socialLinks } from "./socialLinks";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-[#f8fafc] h-14 items-center fixed flex justify-between px-6 bg-[#0f172a]/90 backdrop-blur-sm border-b border-sky-500/20 z-50">
      {/* Nombre */}
      <h1 className="text-2xl md:text-4xl font-bold text-white hover:text-[#38bdf8]">
        Angel Jaimes
      </h1>

      {/* Botón hamburguesa (solo en mobile) */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú normal (en escritorio) */}
      <ul className="hidden md:flex gap-8 text-lg font-medium h-20 items-center">
        <li><a className="hover:text-[#38bdf8]" href="#Home">Home</a></li>
        <li><a className="hover:text-[#38bdf8]" href="#Skill">Skill</a></li>
        <li><a className="hover:text-[#38bdf8]" href="#Proyects">Projects</a></li>
        <li><a className="hover:text-[#38bdf8]" href="#Experience">Experience</a></li>
      </ul>

      {/* Redes sociales (solo en escritorio) */}
      <div className="hidden md:flex items-center gap-4">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#38bdf8] transition-colors">
          <Github size={22} />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#38bdf8] transition-colors">
          <Linkedin size={22} />
        </a>
        <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="hover:text-[#38bdf8] transition-colors">
          <Mail size={22} />
        </a>
      </div>

      {/* Menú lateral (solo en móvil) */}
      {open && (
        <div className="absolute top-14 left-0 w-40 h-screen bg-[#0f172a]/95 backdrop-blur-sm border-r border-sky-500/20 flex flex-col gap-6 p-6 md:hidden shadow-lg">
          <a className="hover:text-[#38bdf8]" href="#Home" onClick={() => setOpen(false)}>Home</a>
          <a className="hover:text-[#38bdf8]" href="#Skill" onClick={() => setOpen(false)}>Skill</a>
          <a className="hover:text-[#38bdf8]" href="#Proyects" onClick={() => setOpen(false)}>Projects</a>
          <a className="hover:text-[#38bdf8]" href="#Experience" onClick={() => setOpen(false)}>Experience</a>

          <div className="flex items-center gap-5 pt-4 border-t border-sky-500/20">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#38bdf8] transition-colors">
              <Github size={22} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#38bdf8] transition-colors">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="hover:text-[#38bdf8] transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
