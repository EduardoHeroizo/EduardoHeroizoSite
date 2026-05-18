function Experience() {
  return (
    <div className="bg-white rounded-xl border border-black shadow-[6px_6px_0px_#000] p-4 sm:p-6 w-full max-w-[560px] flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]">
      <h1 className="font-comic text-2xl sm:text-3xl font-bold mb-6">
        Experience
      </h1>

      <div className="w-full max-h-[520px] sm:max-h-[600px] overflow-y-auto pr-1 sm:pr-2 flex flex-col gap-4">
        {/* Experience 1 */}
        <div className="bg-yellow-100 border-2 border-black rounded-xl p-3 sm:p-4">
          <h2 className="font-comic text-lg sm:text-xl font-bold text-black">
            Logic for Computing Teaching Assistant
          </h2>

          <p className="font-comic text-xs sm:text-sm text-black/60 mb-3">
            Federal University of Campina Grande • May 2025 — Present
          </p>

          <ul className="font-comic text-sm sm:text-base text-black/80 list-disc list-inside space-y-1 mb-4">
            <li>Assisted students with propositional logic and formal reasoning.</li>
            <li>Supported exercises involving proofs, inference rules, and Alloy.</li>
            <li>Helped students develop structured logical thinking.</li>
          </ul>

          <h3 className="font-comic text-sm sm:text-md text-black mb-2">
            What I learned
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              Formal Logic
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              Teaching
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              Communication
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              Problem Solving
            </span>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="bg-yellow-50 border-2 border-black rounded-xl p-3 sm:p-4">
          <h2 className="font-comic text-lg sm:text-xl font-bold text-black">
            Software Development Intern
          </h2>

          <p className="font-comic text-xs sm:text-sm text-black/60 mb-3">
            Guaraves Bom Todo • Jan 2026 — Feb 2026
          </p>

          <ul className="font-comic text-sm sm:text-base text-black/80 list-disc list-inside space-y-1 mb-4">
            <li>Developed interfaces using React.js.</li>
            <li>Integrated frontend components with REST APIs.</li>
            <li>Participated in pull requests, code reviews, and tests.</li>
          </ul>

          <h3 className="font-comic text-sm sm:text-md text-black mb-2">
            What I learned
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              React.js
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              REST APIs
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              Code Review
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              Pull Requests
            </span>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="bg-yellow-100 border-2 border-black rounded-xl p-3 sm:p-4">
          <h2 className="font-comic text-lg sm:text-xl font-bold text-black">
            Programming 2 Lab Assistant
          </h2>

          <p className="font-comic text-xs sm:text-sm text-black/60 mb-3">
            Federal University of Campina Grande • Nov 2025 — Mar 2026
          </p>

          <ul className="font-comic text-sm sm:text-base text-black/80 list-disc list-inside space-y-1 mb-4">
            <li>Supported object-oriented programming exercises.</li>
            <li>Helped students with Java, UML, and software design concepts.</li>
            <li>Reviewed common implementation problems and debugging strategies.</li>
          </ul>

          <h3 className="font-comic text-sm sm:text-md text-black mb-2">
            What I learned
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              Java
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              OOP
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              UML
            </span>

            <span className="font-comic text-xs sm:text-sm bg-blue-50 border border-black rounded-md px-2 sm:px-3 py-1">
              Debugging
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;