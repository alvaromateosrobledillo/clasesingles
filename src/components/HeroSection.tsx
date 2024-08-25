import React from "react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section
      id="inicio"
      className={`relative h-screen flex flex-col justify-center items-center text-center overflow-hidden ${className}`}
    >
      {/* Video de fondo */}
      <video
        id="backgroundVideo"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>

      {/* Capa de fondo para añadir gradiente */}
      <div className="absolute inset-0 bg-black opacity-60 z-5" />

      {/* Contenido del hero */}
      <div className="relative z-10 text-white p-4 sm:p-6 lg:p-8 max-w-screen-lg mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide leading-tight animate-fadeInUp">
          APRENDE ESPAÑOL
          <br />
          <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-verdeBosque to-azulOscuro">
            PERSONALIZADO
          </span>
        </h1>
        <p className="text-lg sm:text-2xl lg:text-3xl mt-4 animate-fadeInUp delay-200">
          Clases de español para todos los niveles con un enfoque único y
          personalizado.
        </p>
        <div className="mt-6 sm:mt-8 animate-fadeInUp delay-400">
          <a
            href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20clases%20de%20español."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-white py-2 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-12 rounded-full text-base sm:text-lg lg:text-xl font-semibold transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Reserva Tu Clase de Español
          </a>
        </div>
      </div>

      {/* Indicador de desplazamiento para móviles */}
      <div className="absolute bottom-6 text-white flex justify-center items-center z-10">
        <a href="#servicios" className="flex flex-col items-center">
          <div className="animate-bounce text-3xl sm:text-4xl">↓</div>
          <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide">
            Desplázate hacia abajo
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
