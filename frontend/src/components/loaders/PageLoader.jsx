import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 transition-colors duration-300 dark:bg-black">
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          className="h-24 w-24 rounded-full border-[3px] border-zinc-300 border-t-cyan-500 dark:border-zinc-700 dark:border-t-cyan-400"
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="absolute text-xl font-semibold tracking-wide text-black dark:text-white"
        >
          VC
        </motion.div>
      </div>
    </div>
  );
}