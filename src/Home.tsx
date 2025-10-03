import Navbar from "./Navbar";

function Home() {
  return (
    <div
      id="Home"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] h-screen cursor-pointer"
    >
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <div className="h-full w-full flex flex-col md:flex-row justify-center items-center gap-10 p-10">
        <div className="w-full h-full flex flex-col justify-center items-center md:items-start md:pl-20 gap-5 md:text-4xl font-bold text-[#f8fafc]">
          <h1 className="text-white">I am into Web Develop</h1>
          <h2 className="text-[#94a3b8]">
            I craft clean and dynamic web experiences using modern technologies.
          </h2>
          <a
            href="/CV/Cv-angel_jaimes.pdf"
            download="CV_Angel_Jaimes.pdf"
            className="group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-sky-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Descargar CV
          </a>
        </div>

        <div className="flex justify-center items-center w-80 h-80 md:w-full md:h-full">
          <img
            className="rounded-full shadow-xl border-4 border-white"
            src="/src/assets/My-avatar.png"
            alt="img-angel"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
