import React from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <img style={{width:"100px", height:"100px"}}
            src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
            alt="logo"
          />
          <p style={{fontWeight:"600"}}>E-Commerce AI</p>
        </div>

        {/* Use Cases */}
        <div className="footer__section">
          <h4>Use Cases</h4>
          <ul>
            <li>Web-designers</li>
            <li>Marketers</li>
            <li>Small Business</li>
            <li>Website Builder</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer__section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Teams</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Theo dõi chúng tôi</h4>
          <div className="footer__socials">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
