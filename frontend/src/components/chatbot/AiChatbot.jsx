import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FiMessageSquare,
  FiX,
} from "react-icons/fi";

const aiReplies = {
  hello:
    "Hello 👋 Welcome to Vital Care. How may I assist you today?",

  appointment:
    "You can easily book an appointment using our appointment page.",

  doctor:
    "We have expert doctors available in Cardiology, Neurology, Dermatology and more.",

  emergency:
    "For emergency assistance, please call our 24/7 emergency helpline immediately.",

  services:
    "Vital Care provides premium healthcare services with advanced facilities.",

  default:
    "Our healthcare assistant will contact you shortly. Thank you for visiting Vital Care 💙",
};

export default function AiChatbot() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {
        sender: "ai",
        text:
          "Hello 👋 I am Vital Care AI Assistant. How can I help you today?",
      },
    ]);

  const [input, setInput] =
    useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const lowerInput =
      input.toLowerCase();

    let reply =
      aiReplies.default;

    if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi")
    ) {
      reply = aiReplies.hello;
    } else if (
      lowerInput.includes(
        "appointment"
      )
    ) {
      reply =
        aiReplies.appointment;
    } else if (
      lowerInput.includes("doctor")
    ) {
      reply = aiReplies.doctor;
    } else if (
      lowerInput.includes(
        "emergency"
      )
    ) {
      reply =
        aiReplies.emergency;
    } else if (
      lowerInput.includes(
        "service"
      )
    ) {
      reply =
        aiReplies.services;
    }

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}

      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="fixed bottom-28 right-6 z-999 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-2xl"
      >
        {isOpen ? (
          <FiX size={30} />
        ) : (
          <FiMessageSquare size={28} />
        )}
      </motion.button>

      {/* Chat Window */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.9,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed bottom-48 right-6 z-999 flex h-137.5 w-92.5 flex-col overflow-hidden rounded-4xl border border-black/10 bg-white/80 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/90"
          >
            {/* Header */}

            <div className="border-b border-black/10 bg-linear-to-r from-cyan-500 to-blue-500 p-5 text-white dark:border-white/10">
              <h3 className="text-lg font-semibold">
                Vital Care AI
              </h3>

              <p className="mt-1 text-sm text-white/80">
                Healthcare Assistant
              </p>
            </div>

            {/* Messages */}

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {messages.map(
                (
                  message,
                  index
                ) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender ===
                      "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-3xl px-5 py-3 text-sm shadow-lg ${
                        message.sender ===
                        "user"
                          ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white"
                          : "bg-zinc-100 text-black dark:bg-zinc-800 dark:text-white"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                )
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}

            <div className="border-t border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ask something..."
                  value={input}
                  onChange={(e) =>
                    setInput(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter"
                    ) {
                      handleSendMessage();
                    }
                  }}
                  className="flex-1 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none dark:border-white/10 dark:bg-zinc-900 dark:text-white"
                />

                <motion.button
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={
                    handleSendMessage 
                  }
                  className="rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}