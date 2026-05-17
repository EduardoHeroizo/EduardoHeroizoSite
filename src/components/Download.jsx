import { Download as DownloadIcon } from "lucide-react";
import curriculo from "../assets/downloads/Curriculo_EduardoHeroizo.pdf";

function Download() {
  return (
    <div className="bg-white rounded-xl border border-black shadow-[6px_6px_0px_#000] p-6 w-[560px] flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]">
      <h1 className="font-comic text-3xl font-bold mb-6">
        Download
      </h1>

      <a
        href={curriculo}
        download="Curriculo_EduardoHeroizo.pdf"
        className="font-comic text-xl text-black bg-yellow-100 border-2 border-black rounded-full px-6 py-3 shadow-[4px_4px_0px_#000] hover:bg-yellow-200 transition-all duration-300 flex items-center gap-2"
      >
        <DownloadIcon className="w-6 h-6" />
        Download Resume
      </a>
    </div>
  );
}

export default Download;