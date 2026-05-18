import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Download from "./components/Download";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-amber-100 bg-[radial-gradient(#00000035_1.5px,transparent_1.5px)] [background-size:24px_24px] min-h-screen p-6">
      <div className="max-w-[1760px] mx-auto grid grid-cols-[500px_560px_560px] gap-x-14 items-start">
        
        <div className="flex flex-col gap-y-4">
          <AboutMe />
          <ContactMe />
        </div>

        <div className="flex flex-col gap-y-4">
          <Skills />
          <SoftSkills />
        </div>

        <div className="flex flex-col gap-y-4">
          <Download />
          <Experience/>
        </div>

      </div>
    </div>
  );
}

export default App;