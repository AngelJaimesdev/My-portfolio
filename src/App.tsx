import { useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Experience from "./Experience";
import Proyect from "./Proyect";
import Services from "./Services";
import Contact from "./Contact";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import Preloader from "./Preloader";
import { useScrollSpy } from "./useScrollSpy";

const SECTION_IDS = [
  "Home",
  "About",
  "Skill",
  "Proyects",
  "Experience",
  "Services",
  "Contact",
] as const;

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeId, progress } = useScrollSpy(scrollRef, SECTION_IDS);

  // Al recargar la página, evita el salto al ancla y mantener en Home
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      const home = document.getElementById("Home");
      if (home) {
        home.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <Preloader />
      <CustomCursor />
      <Navbar activeId={activeId} />
      <div className="relative flex-1 w-full min-h-0">
        <ScrollProgress progress={progress} />
        <div
          ref={scrollRef}
          className="h-full w-full overflow-y-scroll scroll-smooth"
        >
          <section id="Home" className="min-h-[calc(100vh-3.5rem)]">
            <Home />
          </section>
          <section id="About" className="min-h-[calc(100vh-3.5rem)]">
            <About />
          </section>
          <section id="Skill" className="min-h-[calc(100vh-3.5rem)]">
            <Skill />
          </section>
          <section id="Proyects" className="min-h-[calc(100vh-3.5rem)]">
            <Proyect />
          </section>
          <section id="Experience" className="min-h-[calc(100vh-3.5rem)]">
            <Experience />
          </section>
          <section id="Services" className="min-h-[calc(100vh-3.5rem)]">
            <Services />
          </section>
          <section id="Contact" className="min-h-[calc(100vh-3.5rem)]">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
