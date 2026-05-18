import javaIcon from "../assets/skills/java.svg";
import springBootIcon from "../assets/skills/Spring_Boot.svg.png";
import javaScriptIcon from "../assets/skills/javascript.svg";
import reactIcon from "../assets/skills/React.svg";
import gitIcon from "../assets/skills/git.svg";
import pythonIcon from "../assets/skills/python.svg";
import sqlIcon from "../assets/skills/sql.png";
import scikitLearnIcon from "../assets/skills/scikit-learn.svg";
import dockerIcon from "../assets/skills/docker.svg";
import pandasIcon from "../assets/skills/pandas.svg";
import postgresIcon from "../assets/skills/posgresql.png";
import linuxIcon from "../assets/skills/linux.png";

function Skills() {
  return (
    <div className="bg-white rounded-xl border border-black shadow-[6px_6px_0px_#000] w-full max-w-[560px] min-h-[250px] p-4 sm:p-6 flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]">
      <h1 className="font-comic text-2xl sm:text-3xl font-bold mb-6">
        Skills
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-5 items-center justify-items-center w-full">
        {/* Java */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={javaIcon}
            alt="Java"
            className="w-[66px] h-[66px] sm:w-[76px] sm:h-[76px] transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              Java
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Good Knowledge
            </p>
          </div>
        </div>

        {/* Spring Boot */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={springBootIcon}
            alt="Spring Boot"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              Spring Boot
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[20%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Beginner
            </p>
          </div>
        </div>

        {/* JavaScript */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={javaScriptIcon}
            alt="JavaScript"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              JavaScript
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Intermediate
            </p>
          </div>
        </div>

        {/* React */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={reactIcon}
            alt="React"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              React
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Intermediate
            </p>
          </div>
        </div>

        {/* Git */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={gitIcon}
            alt="Git"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              Git
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Good Knowledge
            </p>
          </div>
        </div>

        {/* Python */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={pythonIcon}
            alt="Python"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              Python
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Good Knowledge
            </p>
          </div>
        </div>

        {/* SQL */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={sqlIcon}
            alt="SQL"
            className="w-12 h-12 sm:w-14 sm:h-14 transition-transform ml-3 duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              SQL
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Good Knowledge
            </p>
          </div>
        </div>

        {/* Scikit-learn */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={scikitLearnIcon}
            alt="Scikit-learn"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              Scikit-learn
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[46%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Intermediate
            </p>
          </div>
        </div>

        {/* Docker */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={dockerIcon}
            alt="Docker"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              Docker
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[20%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Beginner
            </p>
          </div>
        </div>

        {/* Pandas */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={pandasIcon}
            alt="Pandas"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              Pandas
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[47%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Intermediate
            </p>
          </div>
        </div>

        {/* PostgreSQL */}
        <div className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <img
            src={postgresIcon}
            alt="PostgreSQL"
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              PostgreSQL
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[21%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Beginner
            </p>
          </div>
        </div>

        {/* Linux */}
        <div className="relative group w-16 h-14 sm:w-22 sm:h-16 flex items-center justify-center">
          <img
            src={linuxIcon}
            alt="Linux"
            className="w-16 h-16 sm:w-22 sm:h-20 transition-transform duration-300 hover:scale-110"
          />

          <div className="absolute left-1/2 -translate-x-1/2 top-16 sm:top-20 w-36 sm:w-40 bg-white border border-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <p className="font-comic text-base sm:text-xl text-black mb-2 text-center">
              Linux
            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[42%] bg-blue-400 rounded-full"></div>
            </div>

            <p className="font-comic text-base sm:text-xl text-black/70 mt-2 text-center">
              Intermediate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;