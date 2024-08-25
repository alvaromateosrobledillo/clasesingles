import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-azulOscuro text-blancoPuro py-10">
      <div className="container mx-auto text-center space-y-6">
        {/* Logo */}
        <img
          src="/logo.png" // Asegúrate de que esta ruta sea correcta
          alt="Logo"
          className="mx-auto h-16"
        />

        {/* Navegación */}
        <nav className="flex justify-center space-x-6 text-sm">
          <a href="/" className="hover:text-verdeBosque transition-colors">
            INICIO
          </a>
          <a
            href="#servicios"
            className="hover:text-verdeBosque transition-colors"
          >
            SERVICIOS
          </a>
          <a
            href="#reserva"
            className="hover:text-verdeBosque transition-colors"
          >
            RESERVA
          </a>
          <a
            href="#contacto"
            className="hover:text-verdeBosque transition-colors"
          >
            CONTACTO
          </a>
        </nav>

        {/* Información de contacto */}
        <div className="space-y-2 text-sm">
          <p>
            <strong>Teléfono:</strong> +34 687 854 801 (WhatsApp)
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:alvaromar988@gmail.com"
              className="hover:text-verdeBosque transition-colors"
            >
              alvaromar988@gmail.com
            </a>
          </p>
        </div>

        {/* Enlaces legales */}
        <div className="text-sm space-y-2">
          <a
            href="/aviso-legal"
            className="hover:text-verdeBosque transition-colors"
          >
            Aviso Legal
          </a>{" "}
          -
          <a
            href="/politica-privacidad"
            className="hover:text-verdeBosque transition-colors"
          >
            Política de Privacidad
          </a>{" "}
          -
          <a
            href="/politica-cookies"
            className="hover:text-verdeBosque transition-colors"
          >
            Política de Cookies
          </a>
        </div>

        {/* Derechos reservados */}
        <p className="text-xs">
          &copy; 2024 Tu Nombre o Empresa. Todos los derechos reservados.
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com/tu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blancoPuro hover:text-verdeBosque transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com/tu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blancoPuro hover:text-verdeBosque transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blancoPuro hover:text-verdeBosque transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://instagram.com/tu_perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blancoPuro hover:text-verdeBosque transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
