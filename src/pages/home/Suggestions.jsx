import { useEffect, useState } from "react";
import { getHistory } from "../../service/history";
import ProductCard from "../../components/productCard/ProductCard";
import Skeleton from "react-loading-skeleton"; // nếu chưa cài: `npm i react-loading-skeleton`
import "react-loading-skeleton/dist/skeleton.css";
import "./Suggestions.scss";
const Suggestions = ({ onToggleFavorite }) => {
  const [suggested, setSuggested] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSuggestions = async () => {
    setLoading(true);
    setError("");

    try {
      // Giả lập delay gọi API
      await new Promise((res) => setTimeout(res, 1500));

      const history = getHistory();
      if (!history.length) throw new Error("Không có lịch sử xem");

      // Giả lập gợi ý bằng cách trích category từ lịch sử
      const categories = [...new Set(history.map((p) => p.category))];

      const all = JSON.parse(localStorage.getItem("allProducts")) || [];
      const suggestion = all.filter((p) => categories.includes(p.category));

      setSuggested(suggestion);
    } catch (err) {
      setError("Không thể lấy gợi ý lúc này 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="suggestions">
      <button onClick={fetchSuggestions}>🎯 Gợi ý sản phẩm phù hợp</button>

      {loading && (
        <div className="grid-container">
          {Array(4)
            .fill()
            .map((_, i) => (
              <Skeleton key={i} height={300} />
            ))}
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && suggested.length > 0 && (
        <div className="grid-container">
          {suggested.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Suggestions;
