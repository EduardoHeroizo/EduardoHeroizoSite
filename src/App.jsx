import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Skills from "./components/Skills"
import SoftSkills from "./components/SoftSkills"

function App() {
    
    return (
        
        <div className="bg-amber-100 bg-[radial-gradient(#00000035_1.5px,transparent_1.5px)] [background-size:24px_24px] w-screen min-h-screen flex justify-start p-6 flex-row gap-x-15">
            <div className="flex flex-col gap-y-4">
            <AboutMe />
            <ContactMe />
            </div >
            <div className="flex flex-col gap-y-4">
            <Skills/>
            <SoftSkills/>
            </div>
            </div>    
    )
}

export default App