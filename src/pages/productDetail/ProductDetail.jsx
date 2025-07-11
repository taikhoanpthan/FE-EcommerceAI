// src/pages/productDetail/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../service/api";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        const found = res.data.find((p) => p.id === id);
        setProduct(found);
      })
      .catch(() => {
        setProduct(null);
      });
  }, [id]);

  const reviews = [
    {
      name: "PHAN ANH MỸ",
      course: "NTTU",
      totalHours: 31,
      rating: 4.92,
      comment: "Đã hiểu bài rất rõ ràng và dễ tiếp thu, cảm ơn giảng viên!",
      time: "2021-09-11 08:39:35",
    },
    {
      name: "Quốc Đạt",
      course: "NTTU",
      totalHours: 30,
      rating: 3.4,
      comment: "Đã hiểu bài rất rõ ràng và dễ tiếp thu, cảm ơn giảng viên!",
      time: "2021-09-11 08:39:35",
    },
    {
      name: "Duy Khương",
      course: "NTTU",
      totalHours: 35,
      rating: 4.92,
      comment: "Đã hiểu bài rất rõ ràng và dễ tiếp thu, cảm ơn giảng viên!",
      time: "2021-09-11 08:39:35",
    },
  ];

  if (!product)
    return <p style={{ textAlign: "center" }}>Đang tải chi tiết sản phẩm...</p>;

  return (
    <main className="main-content">
      <div className="product-detail">
        <div className="detail-card">
          <div className="left">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
          </div>
          <div className="right">
            <h2>{product.name}</h2>
            <p className="category">📘 {product.category}</p>
            <p className="price">Giá: {product.price.toLocaleString()}đ</p>
            <p className="rating">Đánh giá: {product.rating} ⭐</p>
            <div className="desc">{product.longDescription}</div>
          </div>
        </div>

        <div className="product-rating">
          <h3>Đánh giá & nhận xét</h3>
          <div className="rating-summary">
            <p>
              Đánh giá trung bình: <strong>5.00</strong> ⭐ (54 nhận xét)
            </p>
            <div className="rating-bars">
              <div>
                <strong>5</strong> Nội dung khóa học{" "}
                <span className="bar full" />
              </div>
              <div>
                <strong>5</strong> Phương pháp giảng dạy{" "}
                <span className="bar full" />
              </div>
              <div>
                <strong>5</strong> Thái độ <span className="bar full" />
              </div>
              <div>
                <strong>5</strong> Mức độ hài lòng <span className="bar full" />
              </div>
            </div>
          </div>

          <div className="review-list">
            {reviews.map((r, i) => (
              <div key={i} className="review-item">
                <div className="avatar">👤</div>
                <div>
                  <strong>{r.name}</strong>
                  <p>
                    <span className="course">{r.course}</span> – {r.totalHours}{" "}
                    giờ học – ⭐ {r.rating}
                  </p>
                  <p className="time">🕒 {r.time}</p>
                  <p>{r.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
