// src/pages/productDetail/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../service/api";
import "./ProductDetail.scss";

// ... import giữ nguyên

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
      name: "ĐÀO BẢO LONG",
      course: "COMMUNICATION MVP60 VIỆT",
      totalHours: 30,
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

            <div className="desc">
              {product.longDescription || "Không có mô tả chi tiết"}

              {/* Nếu là khoá học Next.js thì chèn mô tả đặc biệt */}
              {product.name.toLowerCase().includes("next.js") && (
                <div className="highlight-description">
                  <h4>Mô tả đặc biệt về khoá học Next.js</h4>
                  <p><strong>(Cập nhật):</strong> bổ sung Next.js 14 và Server Actions</p>
                  <p>
                    Next.JS là một Framework Javascript chuyên làm Frontend, tích hợp sẵn thư viện React để code giao diện UI một cách hiệu quả.
                  </p>
                  <p>
                    Lợi thế của Next.js là khả năng routing, nested routes, rendering server-side giúp tối ưu SEO và hiệu năng.
                  </p>
                  <p>
                    Trong khóa học này, bạn sẽ học Next.JS 13+ bằng Typescript, thực hành clone website SoundCloud.
                  </p>
                  <ul>
                    <li>✅ Đăng nhập với Google, GitHub, tài khoản local</li>
                    <li>✅ Audio Track, Wavetrack dạng sóng</li>
                    <li>✅ Bình luận theo mốc thời gian trên track</li>
                    <li>✅ Playlist, Like, Tìm kiếm, Quản trị admin</li>
                  </ul>
                  <p>
                    🔗 Xem thêm tại:{" "}
                    <a
                      href="https://next-auth.js.org/providers/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://next-auth.js.org/providers/
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Đánh giá & nhận xét */}
        <div className="product-rating">
          <h3>Đánh giá & nhận xét</h3>
          <div className="rating-summary">
            <p>
              Đánh giá trung bình: <strong>5.00</strong> ⭐ (54 nhận xét)
            </p>
            <div className="rating-bars">
              <div>
                <strong>5</strong> Nội dung khóa học <span className="bar full" />
              </div>
              <div>
                <strong>5</strong> Phương pháp giảng dạy <span className="bar full" />
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
                    <span className="course">{r.course}</span> – {r.totalHours} giờ học – ⭐{" "}
                    {r.rating}
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

