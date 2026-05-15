import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";

import { navLinks } from "../../constants/navigation";

import MobileMenu from "./MobileMenu";

import ThemeToggle from "../common/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-black/40">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-black dark:text-white"
        >
          Vital Care Clinic
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-sm font-medium text-zinc-700 transition duration-300 hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />

          <motion.button
            onClick={() =>
                navigate("/appointment")
            }
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-xl transition dark:bg-white dark:text-black"
          >
            Appointment
          </motion.button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black dark:text-white md:hidden"
        >
          {isOpen ? (
            <IoClose size={30} />
          ) : (
            <HiOutlineMenuAlt4 size={30} />
          )}
        </button>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </header>
  );
}