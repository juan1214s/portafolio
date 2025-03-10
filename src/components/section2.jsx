import React from 'react';
import '../App.css'; // Asegúrate de que esta ruta sea correcta
import icons from '../utilities/json/icons.json'; // Importa el JSON

export default function Section2() {
  return (
    <div className="text-center p-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Tecnologías y Frameworks</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {icons.map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-custom-yellow p-2 rounded-full inline-flex items-center justify-center"
          >
            <img
              className="w-18 h-16 object-contain"
              src={src}
              alt={alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
