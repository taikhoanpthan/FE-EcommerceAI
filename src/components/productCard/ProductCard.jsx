// src/components/ProductCard.jsx
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToHistory } from "../../service/history";

const ProductCard = ({ product, onToggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => {
          addToHistory(product);
          navigate(`/product/${product.id}`);
        }}
      />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <span>{product.price.toLocaleString()}đ</span>
      <div className="card-footer">
        <button onClick={() => navigate(`/product/${product.id}`)}>
          Xem chi tiết
        </button>
        <span onClick={() => onToggleFavorite(product.id, product.isFavorite)}>
          {product.isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
