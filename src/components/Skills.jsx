import javaIcon from "../assets/skills/java.svg";
import springBootIcon from "../assets/skills/spring_boot.svg.png";
import javaScriptIcon from "../assets/skills/javascript.svg";
import reactIcon from "../assets/skills/react.svg";
import git from "../assets/skills/git.svg";
import python from "../assets/skills/python.png";

function Skills() {
  return (
    <div className="bg-white border border-black rounded-xl shadow-2xl w-[500px] min-h-[250px] p-6 flex flex-col items-center">
      <h1 className="font-comic text-3xl font-bold mb-4">
        Skills
      </h1>

      <div className="flex flex-row items-center gap-2">
        {/* Java */}
        <div className="relative group">
          <img
            src={javaIcon}
            alt="Java"
            className="w-20 h-20 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-xl text-black mb-2 text-center">
              Java
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-green-500 rounded-full"></div>
            </div>

            <p className="font-comic text-xl text-black/70 mt-2 text-center">
              Good knowledge
            </p>
          </div>
        </div>

        {/* Spring Boot */}
        <div className="relative group">
          <img
            src={springBootIcon}
            alt="Spring Boot"
            className="w-16 h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-xl text-black mb-2 text-center">
              Spring Boot
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[20%] bg-green-500 rounded-full"></div>
            </div>

            <p className="font-comic text-xl text-black/70 mt-2 text-center">
              Beginner
            </p>
          </div>
        </div>

        {/* JavaScript */}
        <div className="relative group">
          <img
            src={javaScriptIcon}
            alt="JavaScript"
            className="w-16 h-16 ml-4 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-xl text-black mb-2 text-center">
              JavaScript
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-green-500 rounded-full"></div>
            </div>

            <p className="font-comic text-xl text-black/70 mt-2 text-center">
              Intermediate
            </p>
          </div>
        </div>

        {/* React */}
        <div className="relative group">
          <img
            src={reactIcon}
            alt="React"
            className="w-16 h-16 ml-4 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-xl text-black mb-2 text-center">
              React
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-green-500 rounded-full"></div>
            </div>

            <p className="font-comic text-xl text-black/70 mt-2 text-center">
              Intermediate
            </p>
          </div>
        </div>
        
        {/* Git */}
         <div className="relative group">
          <img
            src={git}
            alt="Git"
            className="w-16 h-16 ml-4 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-xl text-black mb-2 text-center">
              Git
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
            </div>

            <p className="font-comic text-xl text-black/70 mt-2 text-center">
              Good Knowledge
            </p>
          </div>
        </div>

        {/* Python */}
        <div className="relative group">
          <img
            src={python}
            alt="Python"
            className="w-14 h-18 ml-6 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-xl text-black mb-2 text-center">
              Python
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-green-500 rounded-full"></div>
            </div>

            <p className="font-comic text-xl text-black/70 mt-2 text-center">
              Good Knowledge
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;