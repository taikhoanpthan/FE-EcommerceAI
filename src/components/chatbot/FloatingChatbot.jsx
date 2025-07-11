import { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import ChatbotBox from "./ChatbotBox";
import "./Chatbot.scss";

const FloatingChatbot = ({ onToggleFavorite }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span>🎓 Tư vấn AI</span>
            <FaTimes onClick={() => setOpen(false)} />
          </div>
          <ChatbotBox onToggleFavorite={onToggleFavorite} />
        </div>
      )}

      <button className="chatbot-button" onClick={() => setOpen(!open)}>
        <FaCommentDots />
      </button>
    </>
  );
};

export default FloatingChatbot;
