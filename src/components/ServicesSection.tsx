import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const aboutItems = [
    {
      icon: (
        <FaUserGraduate className="text-verdeBosque text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      ),
      title: "Formación Académica",
      description:
        "Graduado en Filología Hispánica con especialización en enseñanza de español como lengua extranjera.",
    },
    {
      icon: (
        <FaChalkboardTeacher className="text-verdeBosque text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      ),
      title: "Experiencia en Enseñanza",
      description:
        "Más de 5 años de experiencia impartiendo clases de español a estudiantes de diferentes niveles y nacionalidades.",
    },
    {
      icon: (
        <FaCertificate className="text-verdeBosque text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      ),
      title: "Certificaciones Internacionales",
      description:
        "Certificaciones reconocidas a nivel internacional en la enseñanza de español como lengua extranjera.",
    },
  ];

  return (
    <section className="py-16 bg-azulOscuro text-blancoPuro" id="servicios">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blancoPuro mb-12 text-center">
          Sobre mí
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center group transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-azulOscuro group-hover:text-verdeBosque">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 group-hover:text-gray-800">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="fade-in max-w-xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-azulOscuro tracking-wide">
            <span className="text-verdeBosque">¿QUIERES APRENDER</span> ESPAÑOL?
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-700">
            Reserva una clase conmigo y comienza tu viaje para dominar el
            español de manera efectiva.
          </p>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20clases%20de%20español."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-8 inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-white py-3 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Reserva tu Clase
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
