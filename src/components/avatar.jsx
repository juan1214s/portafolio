import React from 'react';
import '../App.css'; // Asegúrate de que esta ruta sea correcta

export function Avatar({ src, alt, fallback }) {
  return (
    <div className="bg-custom-yellow custom-shadow relative flex items-center justify-center w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96 rounded-full overflow-hidden group">
      <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-0 transition-opacity duration-300"></div>
      {src ? (
        <img
          className="relative w-full h-full object-contain"
          src={src}
          alt={alt}
        />
      ) : (
        <div className="relative flex items-center justify-center w-full h-full text-black custom-shadow">
          {fallback}
        </div>
      )}
    </div>
  );
}
