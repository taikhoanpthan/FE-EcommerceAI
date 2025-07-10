import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import "./Header.scss";

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
              alt="logo"
            />
          </Link>
          <span>E-Commerce AI</span>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Tìm kiếm khóa học..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Trang chủ
        </Link>
        <Link to="/favorites" onClick={closeMenu}>
          Yêu thích
        </Link>
        <Link to={"/"}>
          <button onClick={closeMenu}>Khám phá ngay</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
