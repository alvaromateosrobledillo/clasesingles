import React from "react";
import { FaUser, FaUsers, FaUserFriends, FaPeopleArrows } from "react-icons/fa";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  icon,
}) => {
  return (
    <div
      className=" bg-white dark:bg-azulOscuro rounded-lg shadow-lg p-6 border border-gray-200 dark:border-azulOscuro transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-verdeBosque"
      id="reserva"
    >
      <div className="flex items-center mb-4 text-azulOscuro dark:text-blancoPuro">
        {icon}
        <h3 className="text-2xl font-bold ml-4">{title}</h3>
      </div>
      <p className="text-4xl font-extrabold mb-4 text-verdeBosque">{price}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      <ul className="mb-4 space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center text-azulOscuro dark:text-blancoPuro"
          >
            <span className="mr-2">&#10003;</span> {feature}
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        }}
        className="bg-verdeBosque text-white py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-azulOscuro hover:shadow-lg"
      >
        Reservar
      </motion.button>
    </div>
  );
};

const PricingPage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-grisClaro via-blancoPuro to-verdeBosque dark:from-azulOscuro dark:via-azulOscuro dark:to-grisClaro  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-azulOscuro dark:text-blancoPuro shadow-md dark:shadow-blancoPuro">
          Tarifas de Clases de Español
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <PricingCard
            title="Clase Individual"
            price="10€/hora"
            description="Clase personalizada enfocada en tus metas."
            features={[
              "Sesiones adaptadas a tu nivel",
              "Aprendizaje a tu propio ritmo",
              "Atención 100% individual",
            ]}
            icon={<FaUser className="text-4xl text-verdeBosque" />}
          />
          <PricingCard
            title="Clase en Pareja"
            price="15€/hora"
            description="Aprende con un compañero y mantén la motivación."
            features={[
              "Clases interactivas en equipo",
              "Motivación mutua",
              "Descuentos para parejas",
            ]}
            icon={<FaUsers className="text-4xl text-verdeBosque" />}
          />
          <PricingCard
            title="Clase para 3 Personas"
            price="20€/hora"
            description="Aprende en grupo pequeño y disfruta del aprendizaje compartido."
            features={[
              "Sesiones dinámicas grupales",
              "Ambiente de aprendizaje cooperativo",
              "Atención personalizada",
            ]}
            icon={<FaUserFriends className="text-4xl text-verdeBosque" />}
          />
          <PricingCard
            title="Clase en Grupo (4 personas)"
            price="25€/hora"
            description="Disfruta de clases dinámicas en un grupo más amplio."
            features={[
              "Dinámica de grupo",
              "Clases interactivas y efectivas",
              "Diversión y competitividad",
            ]}
            icon={<FaPeopleArrows className="text-4xl text-verdeBosque" />}
          />
        </div>

        {/* Métodos de Pago */}
        <div className="fade-in max-w-xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-azulOscuro tracking-wide">
            Métodos de Pago Disponibles
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-700">
            Acepto varios métodos de pago para tu comodidad, incluyendo{" "}
            <span className="text-verdeBosque font-semibold">PayPal</span> y{" "}
            <span className="text-verdeBosque font-semibold">Revolut</span>. Si
            prefieres otro método de pago, no dudes en contactarme para discutir
            opciones adicionales.
          </p>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            href="https://wa.me/34687854801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20métodos%20de%20pago."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-8 inline-block bg-gradient-to-r from-azulOscuro to-verdeBosque text-white py-3 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Consulta tus Opciones
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
