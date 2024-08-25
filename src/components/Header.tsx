import { useState } from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  CogIcon,
  CalendarIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle.jsx";

// Definición de los ítems de navegación
const navItems = [
  { title: "INICIO", url: "/", icon: <HomeIcon className="w-6 h-6 mr-2" /> },
  {
    title: "SERVICIOS",
    url: "/#servicios",
    icon: <CogIcon className="w-6 h-6 mr-2" />,
  },
  {
    title: "RESERVA",
    url: "/#reserva",
    icon: <CalendarIcon className="w-6 h-6 mr-2" />,
  },
  {
    title: "SOBRE MÍ",
    url: "/#SOBREMÍ",
    icon: <NewspaperIcon className="w-6 h-6 mr-2" />,
  },
  {
    title: "CONTACTO",
    url: "/#contacto",
    icon: <PhoneIcon className="w-6 h-6 mr-2" />,
  },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-30 w-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:py-4 md:px-6">
        <a href="/" className="flex items-center">
          <img
            src="/logo.png" // Ruta al logo
            alt="Logo"
            className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 transition-transform duration-300 hover:scale-110"
          />
        </a>

        {/* Navegación para escritorio */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((link, index) => (
            <a
              key={index}
              className="text-md lg:text-lg font-medium text-gray-700 dark:text-gray-200 relative group transition-all duration-300 hover:text-verdeBosque flex items-center"
              href={link.url}
            >
              {link.icon}
              {link.title}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-verdeBosque scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-gray-50 dark:bg-gray-800 z-40 h-screen flex flex-col justify-center items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Navegación para móviles */}
          <nav className="w-full flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="w-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-verdeBosque transition duration-300 py-4 text-lg uppercase transform hover:scale-105"
                onClick={() => setMenuOpen(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mr-2"
                >
                  {item.icon}
                </motion.div>
                {item.title}
              </a>
            ))}

            {/* Botón de contacto por WhatsApp */}
            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-white py-3 px-8 rounded-full text-lg font-medium transition-transform duration-300 hover:scale-105 mt-8 animate-pulse"
              onClick={() => setMenuOpen(false)}
            >
              Ponte en Contacto Conmigo
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
