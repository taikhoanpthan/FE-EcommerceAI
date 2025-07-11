import React from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
            alt="logo"
          />
          <p style={{ fontWeight: "600" }}>E-Commerce AI</p>
        </div>

        <div className="footer__section">
          <h4>Dịch vụ</h4>
          <ul>
            <li>Thiết kế website</li>
            <li>Xây dựng website chuyên nghiệp</li>
            <li>Tên miền</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer__section">
          <h4>Công ty</h4>
          <ul>
            <li>Về chúng tôi</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ</li>
            <li>Frontend DEV</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Theo dõi chúng tôi</h4>
          <div className="footer__socials">
            <Link to={"https://www.facebook.com/my.duong25142003/"}>
              <FaFacebookF />
            </Link>
            <Link to={"https://github.com/taikhoanpthan"}>
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
