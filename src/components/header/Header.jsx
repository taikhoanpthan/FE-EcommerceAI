import "./Header.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
            alt="logo"
          />
          <span>E-Commerce AI</span>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Tìm kiếm khoá học..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to={"/"}>Trang chủ</Link>
        <Link to={"/favorites"}>Danh sách yêu thích</Link>
        <button>Khám phá ngay</button>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
