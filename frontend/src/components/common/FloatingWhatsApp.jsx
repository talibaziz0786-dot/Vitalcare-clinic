import { motion } from "framer-motion";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/7275178747"
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-6 right-6 z-999 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl"
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
}