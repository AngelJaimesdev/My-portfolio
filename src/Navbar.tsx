import { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos bonitos

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-[#f8fafc] h-14 items-center fixed flex justify-between px-6 bg-[#0f172a] z-50">
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
        <li><a className="hover:text-[#38bdf8]" href="#Proyects">Proyects</a></li>
        <li><a className="hover:text-[#38bdf8]" href="#Experience">Experience</a></li>
      </ul>

      {/* Menú lateral (solo en móvil) */}
      {open && (
        <div className="absolute top-14 left-0 w-40 h-screen bg-[#0f172a] flex flex-col gap-6 p-6 md:hidden shadow-lg">
          <a className="hover:text-[#38bdf8]" href="#Home" onClick={() => setOpen(false)}>Home</a>
          <a className="hover:text-[#38bdf8]" href="#Skill" onClick={() => setOpen(false)}>Skill</a>
          <a className="hover:text-[#38bdf8]" href="#Proyects" onClick={() => setOpen(false)}>Proyects</a>
          <a className="hover:text-[#38bdf8]" href="#Experience" onClick={() => setOpen(false)}>Experience</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
