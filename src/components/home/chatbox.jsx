import React, { useState, useRef, useEffect } from "react";
import "./chatbox.css";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "👋 Hello! Ask me about services, prices, timing , booking , barber , payment , location .",
      type: "bot",
    },
  ]);

  const chatBodyRef = useRef(null);
  const chatInputRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const closeChat = () => setIsOpen(false);

  // ✅ REAL SEND FUNCTION
  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { text, type: "user" }]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://backend-h2osalon.up.railway.app//api/chat", // 🔴 CHANGE THIS
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text }),
        }
      );

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { text: data.reply, type: "bot" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "❌ Server error. Please try again.", type: "bot" },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => chatInputRef.current?.focus(), 50);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className="chat-btn"
        aria-label="Open chat"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>💬</span>
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-box" role="dialog">
          <div className="chat-header">
            <strong>H<sub>2</sub>O The Men's Salon Support</strong>
            <button className="close-btn" onClick={closeChat}>
              ✕
            </button>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}

            {isLoading && (
              <div className="message bot">Typing...</div>
            )}
          </div>

          <div className="chat-input">
            <input
              ref={chatInputRef}
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
