import { Briefcase, MonitorCheck } from "lucide-react";

function Experience() {
  const experiences = [
    {
      company: "Alpes Solutions S.A.S - Outsourcing Davinci",
      date: "23 Noviembre 2023 - 31 Julio 2025",
      current: true,
      description:
        "He formado parte de distintos proyectos dentro de la empresa, colaborando con el equipo, cumpliendo con mis responsabilidades y proponiendo ideas que han contribuido a que las tareas se desarrollen de manera eficiente y sin contratiempos.",
      icon: <Briefcase className="text-white w-5 h-5" />,
    },
    {
      company: "Alpes Solutions S.A.S",
      date: "16 Junio - 22 Noviembre 2023 (5 Meses)",
      current: false,
      description:
        "Fortalecí los conocimientos que había desarrollado por cuenta propia, integrándolos al trabajo colaborativo. Además, en el entorno laboral adquirí habilidades blandas esenciales que me han permitido adaptarme mejor y comunicarme de forma efectiva con el equipo.",
      icon: <MonitorCheck className="text-white w-5 h-5" />,
      link: "https://alpessolutions.com/", 
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center py-16 px-12">
      <h1 className="text-3xl font-bold mb-10">Experiencia Laboral</h1>

      <div className="relative border-l-2 border-gray-600 w-full">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-10 ml-6">
            {/* Círculo con icono */}
            <span className="absolute -left-3 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700">
              {exp.icon}
            </span>

            {/* Info */}
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p className="text-sm text-gray-400">{exp.date}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>

            {/* Badge o Botón */}
            {exp.current ? (
              <span className="inline-block mt-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-md">
                Finalizado
              </span>
            ) : exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-gray-700 text-white text-xs font-medium px-3 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Visitar Página
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
