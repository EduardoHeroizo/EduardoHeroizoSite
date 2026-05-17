import { Mail, Phone } from "lucide-react";
import github from "../assets/github.svg";

function ContactMe() {
  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_#000] 
    w-[500px] min-h-[150px] p-6 flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]">
      <h1 className="font-comic text-3xl font-bold mb-4">
        Contact Me
      </h1>

      <div className="flex flex-col gap-y-4">
        <div className="font-comic text-xl text-black/80 flex items-center">
          <Mail className="mr-2 w-6 h-6" />
          eduardoheroizo1@hotmail.com
        </div>

        <div className="font-comic text-xl text-black/80 flex items-center">
          <Phone className="mr-2 w-6 h-6" />
          +55 (83) 999128-8399
        </div>

        <a
          href="https://github.com/EduardoHeroizo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-comic text-xl text-black/80 flex items-center hover:underline hover:text-black"
        >
          <img
            src={github}
            alt="GitHub"
            className="w-6 h-6 mr-2"
          />
          https://github.com/EduardoHeroizo
        </a>
      </div>
    </div>
  );
}

export default ContactMe;