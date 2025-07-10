// src/components/chatbot/ChatbotBox.jsx
import { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "./Chatbot.scss"
const ChatbotBox = ({ onToggleFavorite }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const all = JSON.parse(localStorage.getItem("allProducts")) || [];
      const keyword = input.toLowerCase();
      const suggestions = all.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword) ||
          p.category.toLowerCase().includes(keyword)
      );

      const botMessage = {
        role: "bot",
        text:
          suggestions.length > 0
            ? "Đây là những khoá học bạn có thể quan tâm:"
            : "Tôi chưa tìm thấy sản phẩm phù hợp 😔",
        suggestions,
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chatbot-box">
      <div className="chat-content">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-msg ${msg.role}`}>
            <p>{msg.text}</p>
            {msg.suggestions && (
              <div className="grid">
                {msg.suggestions.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Tôi muốn học tiếng anh..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Gửi</button>
      </div>
    </div>
  );
};

export default ChatbotBox;
