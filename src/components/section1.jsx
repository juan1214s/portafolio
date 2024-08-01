import React from 'react';
import { Avatar } from './avatar';
import profileImage from '../assets/images/profile.jpg';

export default function Section1() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-4">
            <div className="text-center mb-8 md:mb-0 md:mr-8">
                <h1 className="text-4xl font-bold">
                    ¡Hola, soy <span className="text-yellow-500">Juan Sanchez!</span>
                </h1>

                <h2 className="text-2xl font-semibold text-bg-custom-yellow mt-2">Desarrollador Backend Junior</h2>
                <p className="mt-4 max-w-md mx-auto">
                    Soy un programador enfocado principalmente en backend. Además, estoy explorando nuevos horizontes en la programación móvil.
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <a href="https://www.linkedin.com/in/juan-manuel-sanchez-9b2414216/" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.56v-5.631c0-1.34-.027-3.072-1.875-3.072-1.878 0-2.172 1.464-2.172 2.965v5.738H9.216V10.246h3.417v1.568h.047c.475-.878 1.631-1.811 3.358-1.811 3.588 0 4.251 2.368 4.251 5.452v5.497zM5.261 8.832c-1.158 0-2.097.946-2.097 2.116 0 1.171.939 2.116 2.097 2.116 1.159 0 2.096-.945 2.096-2.116 0-1.17-.937-2.116-2.096-2.116zm1.803 11.62H3.466v-11.23h3.598v11.23zM19.842 2H4.159C3.519 2 3 2.523 3 3.17v17.66c0 .646.519 1.17 1.159 1.17h15.683c.64 0 1.159-.524 1.159-1.17V3.17c0-.647-.52-1.17-1.159-1.17z" />
                        </svg>
                    </a>

                    <a href="https://github.com/juan1214s" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.865 8.165 6.84 9.485.5.092.68-.216.68-.48v-1.77c-2.783.606-3.37-1.342-3.37-1.342-.454-1.157-1.11-1.463-1.11-1.463-.91-.623.069-.61.069-.61 1.004.07 1.54 1.05 1.54 1.05.89 1.519 2.332 1.079 2.9.827.09-.646.348-1.079.634-1.327-2.22-.254-4.556-1.11-4.556-4.947 0-1.09.39-1.98 1.035-2.68-.103-.254-.448-1.275.1-2.65 0 0 .84-.27 2.75 1.03.8-.225 1.66-.336 2.5-.34.84.004 1.7.115 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.375.205 2.396.1 2.65.645.7 1.035 1.59 1.035 2.68 0 3.838-2.337 4.693-4.56 4.947.358.31.68.923.68 1.858v2.76c0 .267.18.577.686.48C21.135 20.165 24 16.418 24 12c0-5.52-4.48-10-10-10z" />
                        </svg>
                    </a>
                </div>
                
                <div className="flex justify-center gap-4 mt-6">
                    <button className="bg-yellow-500 text-black px-9 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                        CV
                    </button>
                </div>
            </div>
            
            <div className="m-14 md:m-28 flex justify-center md:ml-8">
                <Avatar src={profileImage} alt="Juan Sanchez" fallback="JS" />
            </div>
        </div>
    );
}
