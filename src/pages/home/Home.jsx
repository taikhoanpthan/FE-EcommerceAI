import { useEffect, useState, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllProducts, updateFavorite } from "../../service/api";
import ProductCard from "../../components/productCard/ProductCard";
import FilterBar from "../../components/filterBar/FilterBar";
import "./Home.scss";
import { toast } from "react-toastify";
import Suggestions from "./Suggestions";
import FloatingChatbot from "../../components/chatbot/FloatingChatbot";

const Home = () => {
  const { searchQuery } = useOutletContext(); // từ Header
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
        localStorage.setItem("allProducts", JSON.stringify(res.data));
      })
      .catch(() => toast.error("Lỗi khi tải sản phẩm"));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchName = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchPrice =
        priceFilter === "low"
          ? product.price < 500000
          : priceFilter === "mid"
          ? product.price >= 500000 && product.price <= 1000000
          : priceFilter === "high"
          ? product.price > 1000000
          : true;

      return matchName && matchPrice;
    });
  }, [products, searchQuery, priceFilter]);

  const handleToggleFavorite = async (id, currentFavorite) => {
    try {
      const updated = await updateFavorite(id, !currentFavorite);
      setProducts((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, isFavorite: updated.data.isFavorite } : p
        )
      );
      toast.success(
        updated.data.isFavorite
          ? "Đã thêm vào yêu thích ❤️"
          : "Đã xoá khỏi yêu thích 💔"
      );
    } catch {
      toast.error("Lỗi khi cập nhật yêu thích");
    }
  };

  return (
    <div className="home-container">
      <h2>Danh sách khoá học</h2>

      <div className="wrapper">
        <FilterBar
          showSearch={false}
          priceFilter={priceFilter}
          onFilter={setPriceFilter}
        />
        <div className="grid-container">
          {(showAll ? filteredProducts : filteredProducts.slice(0, 8)).map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleFavorite={handleToggleFavorite}
              />
            )
          )}
        </div>

        {filteredProducts.length > 8 && (
          <div className="see-more">
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Ẩn bớt" : "Xem thêm"}
            </button>
          </div>
        )}
      </div>

      <FloatingChatbot onToggleFavorite={handleToggleFavorite} />
         <Suggestions onToggleFavorite={handleToggleFavorite} />
    </div>
  );
};

export default Home;
