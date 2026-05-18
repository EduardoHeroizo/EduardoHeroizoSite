import { Mail, Phone } from "lucide-react";
import github from "../assets/github.svg";

function ContactMe() {
  return (
    <div
      className="bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_#000] 
      w-full max-w-[500px] min-h-[150px] p-4 sm:p-6 flex flex-col items-center 
      transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]"
    >
      <h1 className="font-comic text-2xl sm:text-3xl font-bold mb-4">
        Contact Me
      </h1>

      <div className="flex flex-col gap-y-4 w-full">
        <div className="font-comic text-base sm:text-xl text-black/80 flex items-center break-all">
          <Mail className="mr-2 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
          eduardoheroizo1@hotmail.com
        </div>

        <div className="font-comic text-base sm:text-xl text-black/80 flex items-center">
          <Phone className="mr-2 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
          +55 (83) 999128-8399
        </div>

        <a
          href="https://github.com/EduardoHeroizo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-comic text-base sm:text-xl text-black/80 flex items-center hover:underline hover:text-black break-all"
        >
          <img
            src={github}
            alt="GitHub"
            className="w-5 h-5 sm:w-6 sm:h-6 mr-2 shrink-0"
          />
          https://github.com/EduardoHeroizo
        </a>
      </div>
    </div>
  );
}

export default ContactMe;