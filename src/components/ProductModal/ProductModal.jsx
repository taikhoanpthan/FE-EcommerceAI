import "./ProductModal.scss";
import { useEffect, useState } from "react";

const ProductModal = ({ product, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  if (!product) return null;

  return (
    <div
      className={`modal-overlay ${visible ? "visible" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${visible ? "visible" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.longDescription}</p>
        <span className="price">{product.price.toLocaleString()}đ</span>
      </div>
    </div>
  );
};

export default ProductModal;
