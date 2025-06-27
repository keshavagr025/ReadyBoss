import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdChatbubbles, IoMdClose } from "react-icons/io";


const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today? 😊" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Simulated bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for reaching out! We'll get back to you." },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden"
          >
            <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">ReadyBoss Assistant 🤖</h3>
              <button onClick={() => setIsOpen(false)}>
                <IoMdClose size={24} />
              </button>
            </div>

            <div className="flex-1 p-3 overflow-hidden">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sender === "bot" ? "text-left" : "text-right"
                  }`}
                >
                  <div
                    className={`inline-block px-3 py-2 rounded-lg ${
                      msg.sender === "bot"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-purple-500 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 flex gap-2 border-t">
              <input
                type="text"
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <IoMdChatbubbles size={28} color="white" />
      </button>
    </div>
  );
};

export default ChatBot;
