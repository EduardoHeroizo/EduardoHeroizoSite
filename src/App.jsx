import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Skills from "./components/Skills"

function App() {
    
    return (
        
        <div className="bg-amber-100 w-screen h-screen flex justify-start p-6 flex flex-row gap-x-15"> 
            <div className="flex flex-col gap-y-4">
            <AboutMe />
            <ContactMe />
            </div>

            <Skills />
            </div>    
    )
}

export default App