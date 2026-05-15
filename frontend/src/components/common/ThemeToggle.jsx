import { motion } from "framer-motion";

import {
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { useThemeStore } from "../../store/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } =
    useThemeStore();

  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      whileHover={{
        scale: 1.05,
      }}
      onClick={toggleTheme}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-lg backdrop-blur-xl transition dark:border-white/10 dark:bg-zinc-900 dark:text-white"
    >
      {theme === "dark" ? (
        <FiSun size={20} />
      ) : (
        <FiMoon size={20} />
      )}
    </motion.button>
  );
}