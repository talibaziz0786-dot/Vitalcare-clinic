import { motion } from "framer-motion";

export default function PremiumBackground() {
  return (
    <>
      {/* Top Gradient Blob */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute -left-30 -top-30 h-100 w-100 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Right Blob */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute -right-25 top-50 h-87.5 w-87.5 rounded-full bg-blue-500/20 blur-3xl"
      />

      {/* Bottom Blob */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
        className="absolute -bottom-37.5 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[60px_60px]" />
    </>
  );
}