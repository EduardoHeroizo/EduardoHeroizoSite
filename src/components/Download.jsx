import { Download as DownloadIcon } from "lucide-react";
import curriculo from "../assets/downloads/Curriculo_EduardoHeroizo.pdf";

function Download() {
  return (
    <div className="bg-white rounded-xl border border-black shadow-[6px_6px_0px_#000] p-4 sm:p-6 w-full max-w-[560px] flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]">
      <h1 className="font-comic text-2xl sm:text-3xl font-bold mb-6">
        Download
      </h1>

      <a
        href={curriculo}
        download="Curriculo_EduardoHeroizo.pdf"
        className="font-comic text-base sm:text-xl text-black bg-yellow-100 border-2 border-black rounded-full px-4 sm:px-6 py-3 hover:bg-yellow-200 transition-all duration-300 flex items-center gap-2 text-center"
      >
        <DownloadIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
        Download Resume
      </a>
    </div>
  );
}

export default Download;