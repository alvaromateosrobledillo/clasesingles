import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <section className="py-16 bg-azulOscuro text-blancoPuro" id="SOBREMÍ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="flex flex-col lg:flex-row items-center gap-8">
          {/* Imagen Personal */}
          <motion.div
            className="lg:w-1/3 order-1 lg:order-2 flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <img
              width="300"
              height="300"
              src="/yo.jpeg" // Asegúrate de que esta imagen esté en la ruta correcta
              alt="Álvaro Mateos Robledillo"
              className="rounded-full shadow-lg object-cover bg-verdeBosque ring-4 ring-verdeBosque transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Descripción Personal */}
          <div className="lg:w-2/3 order-2 lg:order-1 font-sans">
            <h2 className="text-4xl font-title font-bold mb-6">
              Hola, Soy Álvaro Mateos
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Soy un profesor de español apasionado con un fuerte compromiso por
              ayudar a mis estudiantes a alcanzar sus metas lingüísticas. Con
              más de{" "}
              <span className="text-verdeBosque font-semibold">
                5 años de experiencia
              </span>{" "}
              enseñando a estudiantes de todos los niveles, he perfeccionado mi
              enfoque en el aprendizaje personalizado, asegurándome de que cada
              uno de mis alumnos reciba la atención y el apoyo que necesita para
              tener éxito.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              Mi metodología de enseñanza está centrada en la{" "}
              <span className="text-verdeBosque font-semibold">
                práctica activa y la interacción constante
              </span>
              , garantizando que mis estudiantes no solo aprendan el idioma,
              sino que también ganen la confianza necesaria para usarlo en
              situaciones reales. Estoy certificado en la enseñanza de español
              como lengua extranjera y me esfuerzo continuamente por actualizar
              mis habilidades y conocimientos.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              Fuera del aula, disfruto explorando nuevas actividades deportivas,
              lo que refleja mi creencia en la importancia del
              <span className="text-verdeBosque font-semibold">
                {" "}
                bienestar físico y mental
              </span>
              , tanto para mí como para mis estudiantes. Estoy aquí para
              apoyarte en tu viaje de aprendizaje del español, ya sea que estés
              comenzando o buscando perfeccionar tus habilidades.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20clases%20de%20español."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-gradient-to-r from-verdeBosque to-azulOscuro text-white py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              Contáctame
            </motion.a>
          </div>
        </article>

        {/* Sección de Redes Sociales */}
        <div className="flex justify-center gap-6 mt-16">
          <a
            href="https://twitter.com/tu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blancoPuro hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://instagram.com/tu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://linkedin.com/in/tu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blancoPuro hover:text-verdeBosque transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
