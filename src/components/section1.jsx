import React from 'react';
import { Avatar } from './avatar';
import profileImage from '../assets/images/profile.jpg';

export default function Section1() {
    return (
        <div className="flex flex-col-2 items-center justify-center  bg-black text-white p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">
                    ¡Hola, soy <span className="text-yellow-500">Juan Sanchez!</span>
                </h1>

                <h2 className="text-2xl font-semibold text-bg-custom-yellow  mt-2">Soy Curioso</h2>
                <p className="mt-4 max-w-md mx-auto">
                    Soy un programador con conocimientos en backend. Además, apunto hacia nuevos
                    horizontes como la programación mobil.
                </p>
                <div className="flex justify-center gap-4 mt-6">

                    <a href="https://discord.com" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                        <svg width="30" height="33" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM33.8949 10.4H14.9051C13.3038 10.4 12 11.688 12 13.284V32.212C12 33.808 13.3038 35.096 14.9051 35.096H30.9755L30.2245 32.506L32.0384 34.172L33.7531 35.74L36.8 38.4V13.284C36.8 11.688 35.4962 10.4 33.8949 10.4Z" fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4247 28.684C28.4247 28.684 27.9145 28.082 27.4894 27.55C29.3458 27.032 30.0544 25.884 30.0544 25.884C29.4734 26.262 28.9207 26.528 28.4247 26.71C27.7161 27.004 27.0359 27.2 26.3698 27.312C25.0094 27.564 23.7623 27.494 22.6994 27.298C21.8917 27.144 21.1973 26.92 20.6162 26.696C20.2903 26.57 19.936 26.416 19.5817 26.22C19.5392 26.192 19.4967 26.178 19.4542 26.15C19.4258 26.136 19.4117 26.122 19.3975 26.108C19.1424 25.968 19.0007 25.87 19.0007 25.87C19.0007 25.87 19.6809 26.99 21.4807 27.522C21.0555 28.054 20.5312 28.684 20.5312 28.684C17.3993 28.586 16.2089 26.556 16.2089 26.556C16.2089 22.048 18.2496 18.394 18.2496 18.394C20.2903 16.882 22.2318 16.924 22.2318 16.924L22.3735 17.092C19.8226 17.82 18.6464 18.926 18.6464 18.926C18.6464 18.926 18.9582 18.758 19.4825 18.52C20.9989 17.862 22.2034 17.68 22.6994 17.638C22.7845 17.624 22.8553 17.61 22.9403 17.61C23.8048 17.498 24.7826 17.47 25.803 17.582C27.1493 17.736 28.5947 18.128 30.0686 18.926C30.0686 18.926 28.949 17.876 26.5399 17.148L26.7383 16.924C26.7383 16.924 28.6798 16.882 30.7205 18.394C30.7205 18.394 32.7611 22.048 32.7611 26.556C32.7611 26.556 31.5566 28.586 28.4247 28.684ZM22.2341 22.4C21.4327 22.4 20.8 23.1207 20.8 24C20.8 24.8793 21.4467 25.6 22.2341 25.6C23.0355 25.6 23.6682 24.8793 23.6682 24C23.6822 23.1207 23.0355 22.4 22.2341 22.4ZM27.3659 22.4C26.5645 22.4 25.9318 23.1207 25.9318 24C25.9318 24.8793 26.5786 25.6 27.3659 25.6C28.1673 25.6 28.8 24.8793 28.8 24C28.8 23.1207 28.1673 22.4 27.3659 22.4Z" fill="currentColor" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/juan-manuel-sanchez-9b2414216/" className=" text-yellow-500 hover:text-yellow-400 transition-colors">
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
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                        CV
                    </button>
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                        Contactame
                    </button>
                </div>
            </div>
            <div className=" m-40 flex justify-center">
                <Avatar src={profileImage} alt="Juan sanchez" fallback="JS" />
            </div>
        </div>
    );
}
