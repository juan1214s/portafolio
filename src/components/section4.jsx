import React from "react";
import proyects from "../utilities/json/proyects.json";
import "../App.css";

export default function Section4() {
  return (
    <div className="text-center p-8 bg-black text-white">
      <h1 className="text-4xl font-bold flex items-center justify-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="#ffffff"
          className="mr-4"
        >
          <path d="M10 17l-5-5 5-5 1.4 1.4L7.8 12l3.6 3.6L10 17zm4-10l5 5-5 5-1.4-1.4L16.2 12l-3.6-3.6L14 7z" />
        </svg>
        Proyectos
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {proyects.map((experience) => (
            <div
              key={experience.id || experience.company + experience.position} // Usa un identificador único si disponible
              className="card-shadow p-4 flex items-center max-w-[40rem] mx-auto text-justify"
            >
              <img
                src={experience.image} // Imagen de prueba
                alt="Experience"
                className="w-1/3 h-auto object-cover mr-4" // Ajusta el tamaño de la imagen
              />
              <div className="w-2/3">
                <h2 className="text-2xl font-semibold">{experience.title}</h2>
                <p className="mt-2 text-base">{experience.description}</p>
                <p className="mt-2 text-base">{experience?.description2}</p>
                
                <div className="m-5 w-8 h-8">
                  <a href={experience.gitHub} className="group block w-full h-full">
                    <svg className="w-full h-full group-hover:text-yellow-500 transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.865 8.165 6.84 9.485.5.092.68-.216.68-.48v-1.77c-2.783.606-3.37-1.342-3.37-1.342-.454-1.157-1.11-1.463-1.11-1.463-.91-.623.069-.61.069-.61 1.004.07 1.54 1.05 1.54 1.05.89 1.519 2.332 1.079 2.9.827.09-.646.348-1.079.634-1.327-2.22-.254-4.556-1.11-4.556-4.947 0-1.09.39-1.98 1.035-2.68-.103-.254-.448-1.275.1-2.65 0 0 .84-.27 2.75 1.03.8-.225 1.66-.336 2.5-.34.84.004 1.7.115 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.375.205 2.396.1 2.65.645.7 1.035 1.59 1.035 2.68 0 3.838-2.337 4.693-4.56 4.947.358.31.68.923.68 1.858v2.76c0 .267.18.577.686.48C21.135 20.165 24 16.418 24 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
