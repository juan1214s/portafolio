import React from "react";
import experiences from "../utilities/json/experiences.json";
import "../App.css";

export default function Section3() {
  return (
    <div className="text-center p-8 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">Experiencias Laborales</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="card-shadow p-4 w-full text-justify"
          >
            <h2 className="text-2xl font-semibold">{experience.company}</h2>
            <p className="text-xl">{experience.position}</p>
            <p className="mt-2">{experience.description}</p>
            <p className="mt-2">{experience.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
