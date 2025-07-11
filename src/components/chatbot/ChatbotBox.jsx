// src/components/chatbot/ChatbotBox.jsx
import { useEffect, useRef, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "./Chatbot.scss";
const ChatbotBox = ({ onToggleFavorite }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const all = JSON.parse(localStorage.getItem("allProducts")) || [];

      const stopWords = [
        "tôi",
        "muốn",
        "học",
        "về",
        "trở",
        "thành",
        "là",
        "cần",
        "tìm",
        "khóa",
        "khóa học",
      ];
      const words = input
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => !stopWords.includes(w));

      const suggestions = all.filter((p) => {
        const name = p.name.toLowerCase();
        const category = p.category.toLowerCase();
        return words.some(
          (word) => name.includes(word) || category.includes(word)
        );
      });

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
        <div ref={chatEndRef} />
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
