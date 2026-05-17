import flagBrasil from "../assets/flag_brasil.svg";
import flagParaiba from "../assets/flag_paraiba.png";
import ufcgLogo from "../assets/ufcg_logo.png";
import fotoEduardo from "../assets/foto_eduardo.jpg";

function AboutMe() {
  return (
    <div className="bg-white border border-black rounded-xl shadow-2xl w-[500px] min-h-[620px] p-6 flex flex-col items-center gap-y-2">
      
      <div className="w-full grid grid-cols-[130px_1fr_130px] items-center">
        <div className="relative justify-self-start">
          <img
            src={fotoEduardo}
            alt="Foto de Eduardo"
            className="w-[120px] h-[120px] rounded-full object-cover object-top border border-black transition-transform duration-300 ease-in-out hover:scale-90"
          />
        </div>

        <h1 className="font-comic text-3xl font-bold text-center">
          About Me
        </h1>

        <div />
      </div>

      <div className="flex items-center justify-center gap-x-4">
        <img
          src={flagBrasil}
          alt="Brazil Flag"
          className="w-20 h-12 object-contain transition-transform duration-300 ease-in-out hover:scale-90"
        />

        <img
          src={flagParaiba}
          alt="Paraíba Flag"
          className="w-20 h-12 object-contain transition-transform duration-300 ease-in-out hover:scale-90"
        />

        <img
          src={ufcgLogo}
          alt="UFCG Logo"
          className="w-20 h-15 object-contain transition-transform duration-300 ease-in-out hover:scale-90"
        />
      </div>
      
      <div className="w-full h-[1px] bg-gray-300" />

      <p className="font-comic text-lg leading-relaxed text-center text-black/70">
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