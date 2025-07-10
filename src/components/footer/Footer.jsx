import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>EduAI Platform</h3>
        <p>Nền tảng học tập thông minh tích hợp AI – khám phá tiềm năng của bạn mỗi ngày.</p>
        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} EduAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
