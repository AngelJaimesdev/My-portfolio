import Home from "./Home";
import Skill from "./Skill";
import Experience from "./Experience";
import Proyect from "./Proyect";

function App() {
   return (
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
         <Home />
         <Skill />
         <Proyect />
         <Experience />
      </div>
   )
}

export default App;
