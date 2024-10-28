import React from 'react';
import { Avatar } from './avatar';

export default function Section1() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-4">
            <div className="text-center mb-8 md:mb-0 md:mr-8">
                <h1 className="text-4xl font-bold">
                    ¡Hola, soy <span className="text-yellow-500">Juan Sanchez!</span>
                </h1>

                <h2 className="text-2xl font-semibold text-bg-custom-yellow mt-2">Desarrollador Backend Junior</h2>
                <p className="mt-4 max-w-md mx-auto">
                Soy un programador apasionado por el backend, con un enfoque claro en la creación de aplicaciones eficientes y escalables. Me encanta resolver problemas complejos y optimizar sistemas para que sean robustos, rápidos y mantenibles. Mi experiencia abarca desde el diseño de arquitecturas backend sólidas hasta la implementación de APIs eficientes, siempre siguiendo las mejores prácticas de desarrollo y seguridad.
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <a href="https://www.linkedin.com/in/juan-manuel-sanchez-9b2414216/" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.8 0H2.2C.98 0 0 .98 0 2.2v19.6C0 23.02.98 24 2.2 24h19.6c1.22 0 2.2-.98 2.2-2.2V2.2C24 .98 23.02 0 21.8 0zM7.06 20.54H3.55V8.68h3.5v11.86zm-1.75-13.6c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.54h-3.5v-5.77c0-1.38-.03-3.17-1.93-3.17-1.94 0-2.24 1.52-2.24 3.08v5.86h-3.5V8.68h3.36v1.62h.05c.47-.89 1.63-1.83 3.35-1.83 3.58 0 4.24 2.35 4.24 5.4v6.67z" />
                        </svg>
                    </a>

                    <a href="https://github.com/juan1214s" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .5C5.72.5.75 5.47.75 11.75c0 5 3.25 9.22 7.75 10.7.57.11.75-.25.75-.54v-1.92c-3.15.68-3.76-1.58-3.76-1.58-.5-1.33-1.25-1.68-1.25-1.68-1-.68.08-.67.08-.67 1.07.08 1.61 1.12 1.61 1.12.99 1.68 2.57 1.2 3.2.91.1-.75.4-1.28.73-1.57-2.53-.29-5.18-1.26-5.18-5.61 0-1.28.44-2.34 1.18-3.16-.12-.3-.52-1.52.1-3.15 0 0 .97-.3 3.28 1.2.91-.25 1.88-.37 2.86-.37s1.95.13 2.86.37c2.3-1.5 3.28-1.2 3.28-1.2.62 1.63.23 2.85.11 3.15.74.82 1.18 1.88 1.18 3.16 0 4.36-2.65 5.32-5.18 5.61.42.35.78 1.05.78 2.12v3.17c0 .3.18.67.75.54 4.5-1.48 7.75-5.7 7.75-10.7C23.25 5.47 18.28.5 12 .5z" />
                        </svg>
                    </a>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    <a href="https://drive.google.com/file/d/1NwR39o_b4AYC8ZMv6AFcFJ69z61gwSk4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <button className="bg-yellow-500 text-black px-9 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                            CV
                        </button>
                    </a>
                </div>

            </div>

            <div className="m-14 md:m-28 flex justify-center md:ml-8">
                <Avatar src="https://i.imgur.com/rsKBT3r.jpeg" alt="Juan Sanchez" fallback="JS" />
            </div>
        </div>
    );
}
