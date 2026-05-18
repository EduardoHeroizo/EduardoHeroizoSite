function SoftSkills() {
  return (
    <div className="bg-white rounded-xl border border-black shadow-[6px_6px_0px_#000] p-4 sm:p-6 w-full max-w-[560px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]">
      <h2 className="font-comic text-2xl sm:text-3xl font-bold mb-6 text-center">
        Soft Skills
      </h2>

      <div className="flex flex-col items-center gap-3">
        <span className="font-comic text-base sm:text-lg text-black/80 bg-yellow-100 border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] w-full max-w-[260px] text-center">
          Agile Methodologies
        </span>

        <span className="font-comic text-base sm:text-lg text-black/80 bg-yellow-200 border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] w-full max-w-[260px] text-center">
          Communication
        </span>

        <span className="font-comic text-base sm:text-lg text-black/80 bg-yellow-100 border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] w-full max-w-[260px] text-center">
          Adaptability
        </span>

        <span className="font-comic text-base sm:text-lg text-black/80 bg-yellow-200 border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] w-full max-w-[260px] text-center">
          Teamwork
        </span>

        <span className="font-comic text-base sm:text-lg text-black/80 bg-yellow-100 border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] w-full max-w-[260px] text-center">
          Proactive Learning
        </span>
      </div>

      <div className="w-full h-[2px] bg-gray-300 mt-6 mb-4"></div>

      <h3 className="font-comic text-2xl sm:text-3xl font-bold mb-4 text-center">
        Languages
      </h3>

      <div className="flex flex-col items-center gap-3">
        <span className="font-comic text-base sm:text-lg text-black/80 bg-blue-300 border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] w-full max-w-[260px] text-center">
          English — Advanced
        </span>

        <span className="font-comic text-base sm:text-lg text-black/80 bg-blue-200 border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] w-full max-w-[260px] text-center">
          Portuguese — Native
        </span>

        <span className="font-comic text-base sm:text-lg text-black/80 bg-blue-300 border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000] w-full max-w-[260px] text-center">
          Spanish — Beginner
        </span>
      </div>
    </div>
  );
}

export default SoftSkills;