import Home from "./Home";
import Skill from "./Skill";
import Experience from "./Experience";
import Proyect from "./Proyect";
import Services from "./Services";
import Contact from "./Contact";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import { useEffect } from "react";

function App() {

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
          <CustomCursor />
          <Navbar />
          <div className="flex-1 w-full overflow-y-scroll scroll-smooth">
            <section id="Home" className="min-h-[calc(100vh-3.5rem)]">
               <Home />
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
   )
}

export default App;
