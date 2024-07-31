import React from "react";
import estudios from "../utilities/json/estudios.json";
import "../App.css";

export default function Section5() {
  return (
    <div className="text-center p-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">Estudios y certificaciones</h1>
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {estudios.map((estudio, index) => (
          <div
            key={index}
            className="card-shadow p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-justify"
          >
            <h2 className="text-2xl font-semibold">{estudio.institute}</h2>
            <p>{estudio.certificate}</p>
            <p className="mt-2">{estudio.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
