// src/pages/favorites/Favorites.jsx
import { useEffect, useState } from "react";
import { getAllProducts, updateFavorite } from "../../service/api";
import ProductCard from "../../components/productCard/ProductCard";
import "./Favorites.scss";
import { toast } from "react-toastify";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        const liked = res.data.filter((p) => p.isFavorite === true);
        setFavorites(liked);
      })
      .catch((err) => console.error("Lỗi lấy danh sách yêu thích", err));
  }, []);

  const handleToggleFavorite = async (id, currentFavorite) => {
    try {
      await updateFavorite(id, !currentFavorite);
      const updated = favorites.filter((p) => p.id !== id); 
      setFavorites(updated);
      toast.success("Đã xoá khỏi yêu thích 💔");
    } catch (err) {
      toast.error("Lỗi khi cập nhật yêu thích");
    }
  };

  return (
    <div className="favorites-page">
      <h2>Sản phẩm yêu thích ❤️</h2>
      {favorites.length === 0 ? (
        <p>Chưa có sản phẩm nào được yêu thích.</p>
      ) : (
        <div className="grid-container">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
