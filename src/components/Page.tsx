import React from "react";
import AboutMe from "./AboutMe";
import ContactCTA from "./ContactCta";

const ParallaxSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/jugando.jpg')`,
        backgroundPosition: "center center",
        backgroundSize: "contain", // Cambiado a 'contain' para que la imagen se vea completa
        backgroundRepeat: "no-repeat", // Evita que la imagen se repita si es más pequeña que el contenedor
        backgroundAttachment: "fixed",
        height: "60vh", // Ajuste de altura para que la imagen se vea mejor en pantallas grandes
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Superposición de Color para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      <h2 className="text-white text-3xl md:text-4xl font-bold shadow-lg p-4 bg-black bg-opacity-50 rounded-lg z-10 transform transition-transform duration-500">
        ¡Conéctate con la pasión por el pádel!
      </h2>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <AboutMe />

      {/* Sección de Parallax */}
      <ParallaxSection />

      <ContactCTA />
    </>
  );
};

export default Page;
