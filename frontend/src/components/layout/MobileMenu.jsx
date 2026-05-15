import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { navLinks } from "../../constants/navigation";

export default function MobileMenu({
  isOpen,
  setIsOpen,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute left-0 top-full w-full border-b border-white/10 bg-black/80 backdrop-blur-2xl md:hidden"
        >
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105">
              Book Appointment
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}