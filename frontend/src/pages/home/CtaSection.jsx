import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export default function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-zinc-950 py-28 text-white transition-colors duration-300 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="rounded-[40px] border border-black/10 bg-linear-to-r from-cyan-500/10 to-blue-500/10 p-16 backdrop-blur-2xl dark:border-white/10">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Your Health Deserves The Best Care
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Schedule your appointment today and experience premium healthcare.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              navigate("/appointment")
            }
            className="mt-10 rounded-full bg-black px-8 py-4 font-semibold text-white shadow-xl transition dark:bg-white dark:text-black"
          >
            Book Appointment
          </motion.button>
        </div>
      </div>
    </section>
  );
}