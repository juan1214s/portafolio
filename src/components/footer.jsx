import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css"

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-8">
      <div className="w-2/4  m-8 border-custom"></div>
      
      <h1 className="text-4xl font-bold mb-4 text-yellow-500">Contáctame</h1>
      <p className="text-center mb-4">
        Si tienes alguna duda y/o quieres que forme parte de tu equipo, puedes
        contactarme a través de estos medios
      </p>
      <div className="flex items-center mb-2">
        <i className="fas fa-envelope mr-2"></i>
        <p>alzatejuan1980@gmail.com</p>
      </div>
      <a href="https://wa.me/573217648655" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center">
          <i className="fab fa-whatsapp mr-2"></i>
          <p>+57 3217648655</p>
      </div>
      </a>
    </div>
  );
}
