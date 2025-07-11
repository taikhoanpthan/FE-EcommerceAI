import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToHistory } from "../../service/history";
import ProductModal from "../ProductModal/ProductModal";


const ProductCard = ({ product, onToggleFavorite }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
          <button onClick={() => setShowModal(true)}>Xem chi tiết</button>
          <span onClick={() => onToggleFavorite(product.id, product.isFavorite)}>
            {product.isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
          </span>
        </div>
      </div>

      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProductCard;
