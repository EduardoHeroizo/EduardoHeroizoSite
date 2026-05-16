import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"

function App() {
    
    return (
        
        <div className="bg-amber-100 w-screen h-screen flex justify-start p-6"> 
            <div className="flex flex-col gap-y-4">
            <AboutMe />
            <ContactMe />
            </div>
        </div>
    
    )
}

export default App