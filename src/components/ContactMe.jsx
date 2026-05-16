import { Mail, Phone } from "lucide-react";
import github from "../assets/github.svg"

function ContactMe() {
  return (
    <div className="bg-white border border-black rounded-xl shadow-2xl w-[500px] min-h-[150px] p-6 flex flex-col items-center">
      
        <h1 className="font-comic text-3xl font-bold mb-4">
            Contact Me
        </h1>

    <div className="flex flex-col gap-y-4">
        
        <div className="font-comic text-black/70">
        <Mail className="inline-block mr-2" />
        eduardoheroizo1@hotmail.com
        </div>

        <div className="font-comic text-black/70">
        <Phone className="inline-block mr-2" />
        +55 (83) 999128-8399
        </div>

        <div className="font-comic text-black/70">
            <img src={github} alt="GitHub" className="inline-block w-6 h-6 mr-2" />
            https://github.com/EduardoHeroizo
        </div>

    </div>
    </div>
  )
}

export default ContactMe