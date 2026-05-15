import { motion } from "framer-motion";
import Reveal from "../../components/common/Reveal";


import { FaHeartbeat, FaUserMd, FaStethoscope, } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Cardiology",
    icon: <FaHeartbeat size={32} />,
    description:
      "Advanced heart care with modern technology and expert specialists.",
  },
  {
    id: 2,
    title: "General Medicine",
    icon: <FaStethoscope size={32} />,
    description:
      "Comprehensive healthcare services for patients of all ages.",
  },
  {
    id: 3,
    title: "Expert Doctors",
    icon: <FaUserMd size={32} />,
    description:
      "Experienced medical professionals delivering world-class treatment.",
  },
];

export default function ServicesSection() {
  return (


    <Reveal>
    <section className="bg-white py-28 text-black transition-colors duration-300 dark:bg-black dark:text-white">  
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Services
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Premium Healthcare Services
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{
                y: -10,
              }}
              className="rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}