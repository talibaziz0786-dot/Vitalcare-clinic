import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-50 text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}