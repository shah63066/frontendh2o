import React, { useState, useRef, useEffect } from "react";
import "./chatbox.css"; 

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! Type a message and press send.", type: "bot" },
  ]);

  const chatBodyRef = useRef(null);
  const chatInputRef = useRef(null);

  // scroll to bottom whenever messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // focus input when opening
    if (!isOpen) {
      setTimeout(() => chatInputRef.current?.focus(), 80);
    }
  };

  const closeChat = () => setIsOpen(false);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { text, type: "user" }]);
    setInputValue("");

    // simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks — received: " + text, type: "bot" },
      ]);
    }, 600);
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
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20 2H4a2 2 0 0 0-2 2v14l4-3h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="white"/>
  </svg>
</button>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-box" role="dialog" aria-label="Support chat window">
          <div className="chat-header">
            <div className="title">
              <strong>Support</strong>
              {/* <small style={{ opacity: 0.82, fontWeight: 500, fontSize: 12 }}>
                We're online
              </small> */}
            </div>
            <button className="close-btn" onClick={closeChat} aria-label="Close chat">
              ✕
            </button>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <div className="input-wrap">
              <input
                ref={chatInputRef}
                type="text"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <button
              className="send-btn"
              onClick={handleSend}
              disabled={!inputValue.trim()}
              aria-label="Send message"
              title="Send message"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
