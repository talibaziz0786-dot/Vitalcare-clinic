import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } =
    useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="fixed left-0 top-0 z-9999 h-1 w-full origin-left bg-linear-to-r from-cyan-400 to-blue-500"
    />
  );
}