import { useEffect } from "react";

import { Toaster } from "sonner";
import AiChatbot from "./components/chatbot/AiChatbot";
import AppRoutes from "./routes/AppRoutes";

import { useThemeStore } from "./store/themeStore";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";

import ScrollProgressBar from "./components/common/ScrollProgressBar";

    

export default function App() {
  const { theme } =
    useThemeStore();

  useEffect(() => {
    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(
      theme
    );
  }, [theme]);

  return (
    <>

        <ScrollProgressBar />

      <FloatingWhatsApp />
      <AiChatbot />

      <AppRoutes />

      <Toaster
        position="top-right"
        richColors
        theme={
          theme === "dark"
            ? "dark"
            : "light"
        }
      />
    </>
  );
}