import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import PremiumBackground from "../../components/common/PremiumBackground";

import MouseGlow from "../../components/common/MouseGlow";




export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-zinc-50 pb-24 pt-40 text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <MouseGlow />

<PremiumBackground />
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-75 w-75 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full border border-black/10 bg-white/70 px-5 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            Modern Healthcare Experience
          </span>

          <h1 className="mt-10 text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
            Premium Healthcare
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              For Modern Life
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Experience world-class healthcare with expert doctors,
            advanced treatments, and seamless appointment booking —
            all inside a beautifully crafted digital experience.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
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
              className="rounded-full bg-black px-8 py-4 text-sm font-semibold text-white shadow-2xl dark:bg-white dark:text-black"
            >
              Book Appointment
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                navigate("/services")
              }
              className="rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>

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
            duration: 1,
          }}
          className="relative mx-auto mt-24 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl dark:bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
              alt="Clinic"
              className="h-162.5 w-full rounded-4xl object-cover"
            />
          </div>

          <motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.5,
    duration: 0.8,
  }}
  className="absolute -bottom-10 left-10 hidden rounded-3xl border border-white/10 bg-white/70 p-6 shadow-2xl backdrop-blur-2xl dark:bg-black/40 lg:block"
>
  <div className="flex items-center gap-4">
    <div className="h-4 w-4 rounded-full bg-green-500" />

    <div>
      <p className="font-semibold text-black dark:text-white">
        24/7 Emergency Support
      </p>

      <p className="text-sm text-zinc-500">
        Instant medical assistance
      </p>
    </div>
        </div>
      </motion.div>


        </motion.div>
      </div>
    </section>
  );
}