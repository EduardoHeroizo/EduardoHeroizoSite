import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Download from "./components/Download";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-amber-100 bg-[radial-gradient(#00000035_1.5px,transparent_1.5px)] [background-size:24px_24px] min-h-screen px-4 py-6 overflow-x-hidden">
      <div className="w-full max-w-[1760px] mx-auto grid grid-cols-1 xl:grid-cols-[500px_560px_560px] gap-6 xl:gap-x-14 items-start justify-items-center">
        
        <div className="w-full max-w-[500px] flex flex-col gap-y-4 items-center">
          <AboutMe />
          <ContactMe />
        </div>

        <div className="w-full max-w-[560px] flex flex-col gap-y-4 items-center">
          <Skills />
          <SoftSkills />
        </div>

        <div className="w-full max-w-[560px] flex flex-col gap-y-4 items-center">
          <Download />
          <Experience />
        </div>

      </div>
    </div>
  );
}

export default App;