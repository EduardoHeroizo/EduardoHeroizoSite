import flagBrasil from "../assets/flag_brasil.svg";
import flagParaiba from "../assets/flag_paraiba.png";
import ufcgLogo from "../assets/ufcg_logo.png";
import fotoEduardo from "../assets/foto_eduardo.jpg";

function AboutMe() {
  return (
    <div className="bg-white rounded-xl border border-black shadow-[6px_6px_0px_#000] w-full max-w-[500px] min-h-[620px] p-4 sm:p-6 flex flex-col items-center gap-y-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]">
      
      <div className="w-full grid grid-cols-1 sm:grid-cols-[130px_1fr_130px] items-center gap-y-4">
        <div className="relative justify-self-center sm:justify-self-start">
          <img
            src={fotoEduardo}
            alt="Foto de Eduardo"
            className="w-[105px] h-[105px] sm:w-[120px] sm:h-[120px] rounded-full object-cover object-top border border-black transition-transform duration-300 ease-in-out hover:scale-90"
          />
        </div>

        <h1 className="font-comic text-2xl sm:text-3xl font-bold text-center">
          About Me
        </h1>

        <div className="hidden sm:block" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-x-4">
        <img
          src={flagBrasil}
          alt="Brazil Flag"
          className="w-16 h-10 sm:w-20 sm:h-12 object-contain transition-transform duration-300 ease-in-out hover:scale-90"
        />

        <img
          src={flagParaiba}
          alt="Paraíba Flag"
          className="w-16 h-10 sm:w-20 sm:h-12 object-contain transition-transform duration-300 ease-in-out hover:scale-90"
        />

        <img
          src={ufcgLogo}
          alt="UFCG Logo"
          className="w-16 h-12 sm:w-20 sm:h-15 object-contain transition-transform duration-300 ease-in-out hover:scale-90"
        />
      </div>
      
      <div className="w-full h-[2px] bg-gray-300 mt-6 mb-4"></div>

      <p className="font-comic text-base sm:text-lg leading-relaxed text-center text-black/70">
        Hello, my name is Eduardo. I am a Computer Science undergraduate at the
        Federal University of Campina Grande (UFCG), currently in my fourth
        semester, with a strong focus on software development and data-driven
        problem solving. I have been building a solid foundation in algorithms,
        data structures, and software engineering principles, and I am
        continuously seeking opportunities to apply my knowledge in practical
        projects and refine my technical skills, aiming to develop efficient and
        scalable systems as a future Software Engineer.
      </p>
    </div>
  );
}

export default AboutMe;