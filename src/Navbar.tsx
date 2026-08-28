import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, Languages } from "lucide-react";
import { socialLinks } from "./socialLinks";
import { useLang } from "./i18n";

function Navbar({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  const links = [
    { id: "Home", label: t.nav.home },
    { id: "About", label: t.nav.about },
    { id: "Skill", label: t.nav.skill },
    { id: "Proyects", label: t.nav.projects },
    { id: "Experience", label: t.nav.experience },
    { id: "Testimonials", label: t.nav.testimonials },
    { id: "Services", label: t.nav.services },
    { id: "Contact", label: t.nav.contact },
  ];

  const linkClass = (id: string) =>
    `transition-colors ${
      activeId === id ? "text-[#2563eb]" : "hover:text-[#2563eb]"
    }`;

  const langButton = (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="flex items-center gap-1 rounded-md border border-[#2563eb]/40 px-2 py-1 text-xs font-semibold transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
    >
      <Languages size={16} />
      {lang === "en" ? "ES" : "EN"}
    </button>
  );

  return (
    <div className="relative w-full text-[#f8fafc] h-14 items-center flex justify-between px-6 bg-[#050505]/90 backdrop-blur-sm border-b border-[#1d4ed8]/20 z-50">
      {/* Nombre */}
      <a
        href="#Home"
        className="text-2xl md:text-2xl lg:text-3xl font-bold text-white hover:text-[#2563eb] transition-colors whitespace-nowrap"
      >
        Angel Jaimes
      </a>

      {/* Botón hamburguesa (mobile y tablet) */}
      <button
        className="lg:hidden text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú normal (en escritorio) */}
      <ul className="hidden lg:flex gap-6 text-base font-medium h-20 items-center">
        {links.map((link) => (
          <li key={link.id}>
            <a
              className={linkClass(link.id)}
              aria-current={activeId === link.id ? "true" : undefined}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Idioma + redes sociales (solo en escritorio) */}
      <div className="hidden lg:flex items-center gap-4">
        {langButton}
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#2563eb] transition-colors">
          <Github size={22} />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#2563eb] transition-colors">
          <Linkedin size={22} />
        </a>
        <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="hover:text-[#2563eb] transition-colors">
          <Mail size={22} />
        </a>
      </div>

      {/* Menú lateral (solo en móvil) */}
      {open && (
        <div className="absolute top-14 left-0 w-52 h-screen bg-[#050505]/95 backdrop-blur-sm border-r border-[#1d4ed8]/20 flex flex-col gap-5 p-6 lg:hidden shadow-lg overflow-y-auto">
          {links.map((link) => (
            <a
              key={link.id}
              className={linkClass(link.id)}
              aria-current={activeId === link.id ? "true" : undefined}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-5 pt-4 border-t border-[#1d4ed8]/20">
            {langButton}
          </div>
          <div className="flex items-center gap-5">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#2563eb] transition-colors">
              <Github size={22} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#2563eb] transition-colors">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="hover:text-[#2563eb] transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
