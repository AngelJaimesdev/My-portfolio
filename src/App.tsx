import Home from "./Home";
import Skill from "./Skill";
import Experience from "./Experience";
import Proyect from "./Proyect";
import CustomCursor from "./CustomCursor";
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
      <div className="h-screen w-full overflow-y-scroll snap-mandatory snap-y scroll-smooth">
          <CustomCursor />
         <section id="Home" className="snap-start">
            <Home />
         </section>
         <section id="Skill" className="snap-start">
            <Skill />
         </section>
         <section id="Proyect" className="snap-start">
            <Proyect />
         </section>
         <section id="Experience" className="snap-start">
            <Experience />
         </section>
      </div>
   )
}

export default App;
