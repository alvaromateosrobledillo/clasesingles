import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactCTA: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-verdeBosque text-blancoPuro">
      <div className="container mx-auto text-center">
        <div
          className="max-w-2xl mx-auto p-10 bg-blancoPuro dark:bg-azulOscuro rounded-2xl shadow-xl transition-transform duration-300 hover:shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-azulOscuro dark:text-blancoPuro">
            ¡Ponte en Contacto Conmigo!
          </h2>
          <p className="text-xl mb-8 text-azulOscuro dark:text-grisClaro">
            Estoy aquí para resolver cualquier duda que tengas o para ayudarte a comenzar tus clases personalizadas de español.
          </p>
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-azulOscuro dark:text-blancoPuro">
                TELÉFONO
              </h3>
              <p className="text-lg text-azulOscuro dark:text-grisClaro">
                📞 <a href="tel:+34687854801" className="underline hover:text-verdeBosque">687 854 801</a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-azulOscuro dark:text-blancoPuro">
                CORREO ELECTRÓNICO
              </h3>
              <p className="text-lg text-azulOscuro dark:text-grisClaro">
                ✉️{" "}
                <a href="mailto:alvaromar988@gmail.com" className="underline hover:text-verdeBosque">
                  alvaromar988@gmail.com
                </a>
              </p>
            </div>
          </div>

          <motion.a
            href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20clases%20de%20español."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-blancoPuro py-4 px-10 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105 mt-10 shadow-lg"
            whileHover={{ scale: 1.08 }}
          >
            Contáctame por WhatsApp
          </motion.a>

          <div className="mt-10 flex justify-center space-x-5">
            {[
              { href: "https://facebook.com/tu_perfil", icon: <FaFacebookF /> },
              { href: "https://twitter.com/tu_perfil", icon: <FaTwitter /> },
              { href: "https://linkedin.com/in/tu_perfil", icon: <FaLinkedinIn /> },
              { href: "https://instagram.com/tu_perfil", icon: <FaInstagram /> },
              { href: "https://wa.me/34687854801", icon: <FaWhatsapp /> },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blancoPuro bg-verdeBosque p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-azulOscuro"
                whileHover={{ scale: 1.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
